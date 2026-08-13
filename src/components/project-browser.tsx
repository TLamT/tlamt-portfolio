"use client"

import * as React from "react"
import { SearchX } from "lucide-react"

import { ProjectCard } from "@/components/project-card"
import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { useLocale, useT } from "@/lib/i18n"
import type { Project } from "@/lib/github"

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const t = useT()
  const locale = useLocale()
  const [query, setQuery] = React.useState("")
  const [tag, setTag] = React.useState<string | null>(null)

  const allTags = React.useMemo(() => {
    const set = new Set<string>()
    for (const p of projects) {
      for (const tg of p.tags) set.add(tg)
    }
    return [...set].sort()
  }, [projects])

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const name = (locale === "en" ? p.nameEn : p.name).toLowerCase()
      const desc = (
        locale === "en" ? p.descriptionEn : p.description
      ).toLowerCase()
      if (q && !(name.includes(q) || desc.includes(q) || p.tags.some((x) => x.toLowerCase().includes(q)))) {
        return false
      }
      if (tag && !p.tags.includes(tag)) return false
      return true
    })
  }, [projects, query, tag, locale])

  return (
    <div className="mt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("projects.search") as string}
            aria-label={t("projects.search") as string}
            className="h-10 w-full rounded-full border border-border bg-card/60 pl-4 pr-10 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/30"
          />
          <SearchX className="pointer-events-none absolute right-3.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>

        <div className="flex flex-wrap gap-1.5">
          <button
            type="button"
            onClick={() => setTag(null)}
            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
              tag === null
                ? "border-fuchsia-400/60 bg-fuchsia-400/10 text-fuchsia-300"
                : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
            }`}
          >
            {t("projects.all")}
          </button>
          {allTags.map((tg) => (
            <button
              key={tg}
              type="button"
              onClick={() => setTag(tag === tg ? null : tg)}
              className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                tag === tg
                  ? "border-fuchsia-400/60 bg-fuchsia-400/10 text-fuchsia-300"
                  : "border-border bg-card/60 text-muted-foreground hover:text-foreground"
              }`}
            >
              {tg}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 rounded-2xl border border-border bg-card/60 p-10 text-center text-muted-foreground">
          {t("projects.none")}
        </p>
      ) : (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 80}>
              <Tilt>
                <ProjectCard project={project} />
              </Tilt>
            </Reveal>
          ))}
        </div>
      )}
    </div>
  )
}
