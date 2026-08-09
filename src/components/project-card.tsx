import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/github"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      style={{ ["--neon" as string]: project.accent }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--neon)] hover:neon-glow"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="flex size-14 items-center justify-center rounded-2xl border border-border neon-bg text-3xl transition-transform duration-300 group-hover:scale-110">
          {project.emoji}
        </span>
        <ArrowUpRight className="size-5 text-muted-foreground transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:neon-text" />
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        <h3 className="text-xl font-bold tracking-tight">{project.name}</h3>
        <span className="rounded-full border border-border neon-bg px-2.5 py-0.5 text-xs text-[color:var(--neon)]">
          {project.vibe}
        </span>
      </div>

      <p className="mt-1 text-sm italic text-muted-foreground">
        「{project.tagline}」
      </p>

      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-foreground/80">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <Badge key={tag} variant="secondary" className="rounded-full">
              {tag}
            </Badge>
          ))}
        </div>
        <span className="text-xs text-muted-foreground">
          {project.language ?? "—"}
        </span>
      </div>
    </Link>
  )
}
