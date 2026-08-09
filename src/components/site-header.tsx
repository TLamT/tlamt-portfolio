import Link from "next/link"
import { Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { GithubIcon } from "@/components/icons"
import { GITHUB_HOME } from "@/lib/projects"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-bold tracking-tight"
        >
          <Sparkles className="size-5 text-fuchsia-400 drop-shadow-[0_0_8px_rgba(232,121,249,0.8)]" />
          <span className="bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-lime-300 bg-clip-text text-transparent">
            TLamT<span className="text-foreground">.dev</span>
          </span>
        </Link>
        <nav className="flex items-center gap-1">
          <Button asChild variant="ghost" size="sm">
            <Link href="/#projects">專案</Link>
          </Button>
          <Button asChild variant="ghost" size="sm">
            <Link href="/#vibe">Vibe</Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href={GITHUB_HOME} target="_blank" rel="noreferrer">
              <GithubIcon className="size-4" />
              GitHub
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}
