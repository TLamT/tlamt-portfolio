"use client"

import { Sparkles } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { useT } from "@/lib/i18n"

const SKILLS = [
  { name: "Next.js", accent: "oklch(0.79 0.16 200)" },
  { name: "React 19", accent: "oklch(0.68 0.24 335)" },
  { name: "TypeScript", accent: "oklch(0.7 0.15 255)" },
  { name: "Tailwind CSS", accent: "oklch(0.79 0.16 200)" },
  { name: "shadcn/ui", accent: "oklch(0.68 0.24 335)" },
  { name: "JavaScript", accent: "oklch(0.78 0.18 80)" },
  { name: "HTML / CSS", accent: "oklch(0.7 0.18 45)" },
  { name: "Vite", accent: "oklch(0.72 0.18 300)" },
  { name: "Git / GitHub", accent: "oklch(0.72 0.21 155)" },
  { name: "REST API", accent: "oklch(0.68 0.22 320)" },
]

export function AboutSection() {
  const t = useT()

  return (
    <section id="about" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-lime-400">
              {t("about.eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              {t("about.title")}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {t("about.p1")}
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {t("about.p2")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10">
            <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
              <Sparkles className="size-4" />
              {t("about.skills")}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {SKILLS.map((skill) => (
                <span
                  key={skill.name}
                  style={{ ["--neon" as string]: skill.accent }}
                  className="rounded-full border border-border neon-bg px-4 py-1.5 text-sm font-medium text-[color:var(--neon)] transition-all hover:neon-glow hover:animate-neon-pulse"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
