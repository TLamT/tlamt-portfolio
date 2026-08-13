import { cache } from "react"

import { GITHUB_USERNAME, PROJECT_META, type ProjectMeta } from "@/lib/projects"

const GITHUB_API = "https://api.github.com"

type GitHubRepo = {
  name: string
  full_name: string
  html_url: string
  homepage: string | null
  description: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
  pushed_at: string
  default_branch: string
  topics: string[]
  fork: boolean
  archived: boolean
  private: boolean
}

export type Project = ProjectMeta & {
  repo: string
  repoUrl: string
  homepage: string | null
  language: string | null
  stars: number
  updatedAt: string
  defaultBranch: string
  topics: string[]
}

const SKIP = new Set([
  "Test",
  "demo-github",
  "skills-communicate-using-markdown",
  "tlamt-portfolio",
])

async function fetchGitHub(path: string): Promise<Response> {
  return fetch(`${GITHUB_API}${path}`, {
    headers: {
      Accept: "application/vnd.github+json",
      ...(process.env.GITHUB_TOKEN
        ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
        : {}),
    },
    cache: "no-store",
  })
}

export const getProjects = cache(async (): Promise<Project[]> => {
  const res = await fetchGitHub(`/users/${GITHUB_USERNAME}/repos?per_page=100`)
  if (!res.ok) {
    console.error(`GitHub API failed: ${res.status}`)
    return []
  }

  const repos: GitHubRepo[] = await res.json()

  return repos
    .filter((r) => !r.fork && !r.archived && !r.private && !SKIP.has(r.name))
    .map((r) => toProject(r))
    .sort((a, b) => {
      const featured = Number(Boolean(b.featured)) - Number(Boolean(a.featured))
      return featured || new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
    })
})

export const getProject = cache(
  async (slug: string): Promise<Project | null> => {
    const meta = PROJECT_META[slug]
    if (!meta) return null

    const res = await fetchGitHub(`/repos/${GITHUB_USERNAME}/${slug}`)
    if (!res.ok) return null

    const repo: GitHubRepo = await res.json()
    if (repo.private) return null
    return toProject(repo)
  }
)

export const getReadme = cache(
  async (
    repo: string,
    branch: string
  ): Promise<{ content: string; isMarkdown: boolean } | null> => {
    const res = await fetch(
      `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/${branch}/README.md`,
      { cache: "no-store" }
    )
    if (!res.ok) {
      const resHtml = await fetch(
        `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo}/${branch}/readme.md`,
        { cache: "no-store" }
      )
      if (!resHtml.ok) return null
      const html = await resHtml.text()
      return html.trim().length > 0 ? { content: html, isMarkdown: true } : null
    }
    const content = await res.text()
    return content.trim().length > 0 ? { content, isMarkdown: true } : null
  }
)

function toProject(repo: GitHubRepo): Project {
  const meta = PROJECT_META[repo.name]

  return {
    id: repo.name,
    name: meta?.name ?? repo.name,
    vibe: meta?.vibe ?? "實驗中",
    tagline: meta?.tagline ?? repo.name,
    description:
      meta?.description ?? repo.description ?? "暫時未有描述，等我寫返先。",
    tags: meta?.tags ?? [repo.language ?? "未知"],
    accent: meta?.accent ?? "oklch(0.68 0.24 335)",
    emoji: meta?.emoji ?? "✨",
    featured: meta?.featured,
    nameEn: meta?.nameEn ?? repo.name,
    vibeEn: meta?.vibeEn ?? "In the works",
    taglineEn: meta?.taglineEn ?? repo.name,
    descriptionEn:
      meta?.descriptionEn ?? repo.description ?? "No description yet — I'll write one soon.",
    repo: repo.name,
    repoUrl: repo.html_url,
    homepage: meta?.liveUrl ?? repo.homepage,
    language: repo.language,
    stars: repo.stargazers_count,
    updatedAt: repo.pushed_at,
    defaultBranch: repo.default_branch,
    topics: repo.topics,
  }
}
