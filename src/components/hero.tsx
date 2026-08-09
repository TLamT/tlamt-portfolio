import Link from "next/link"
import { ArrowDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { GITHUB_HOME } from "@/lib/projects"

const FLOATING = [
  { emoji: "🍣", className: "left-[8%] top-8 animate-float text-4xl sm:text-5xl" },
  { emoji: "🌀", className: "right-[10%] top-16 animate-float-slow text-4xl sm:text-5xl" },
  { emoji: "⛈️", className: "left-[16%] bottom-24 animate-float-slow text-3xl sm:text-4xl" },
  { emoji: "🚇", className: "right-[18%] bottom-36 animate-float text-3xl sm:text-4xl" },
  { emoji: "🖱️", className: "left-[45%] top-4 animate-float text-2xl sm:text-3xl" },
  { emoji: "✅", className: "right-[42%] bottom-16 animate-float-slow text-2xl sm:text-3xl" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-0 size-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob" />
        <div className="absolute -right-32 top-24 size-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:-4s]" />
        <div className="absolute bottom-0 left-1/3 size-96 rounded-full bg-lime-400/15 blur-3xl animate-blob [animation-delay:-8s]" />
      </div>

      {FLOATING.map((f) => (
        <span
          key={f.emoji}
          aria-hidden
          className={`pointer-events-none absolute opacity-60 select-none ${f.className}`}
        >
          {f.emoji}
        </span>
      ))}

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6 sm:py-36">
        <p className="animate-fade-up rounded-full border border-border bg-card/60 px-4 py-1.5 text-sm text-muted-foreground">
          香港人 · 前端自學 · 整靚仔嘢
        </p>

        <h1 className="animate-fade-up mt-6 max-w-3xl text-balance text-5xl font-black leading-[1.05] tracking-tight [animation-delay:80ms] sm:text-7xl">
          我嘅 side projects，{" "}
          <span className="text-gradient">有種霓虹 vibe</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-balance text-lg text-muted-foreground [animation-delay:160ms]">
          由壽司郎排隊到 2048 怪奇物語，全部係我閒時整嚟玩嘅嘢。撳入去感受下每個專案嘅味道。
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3 [animation-delay:240ms]">
          <Button asChild size="lg" className="rounded-full">
            <Link href="#projects">
              睇下我嘅專案
              <ArrowDown />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full">
            <Link href={GITHUB_HOME} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              GitHub 主頁
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
