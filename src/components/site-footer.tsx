"use client"

import Link from "next/link"
import { Heart } from "lucide-react"

import { GithubIcon } from "@/components/icons"
import { useT } from "@/lib/i18n"
import { GITHUB_HOME } from "@/lib/projects"

export function SiteFooter() {
  const t = useT()

  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p className="flex items-center gap-1.5">
          {t("footer.by")} <Heart className="size-3.5 fill-current text-rose-400" />{" "}
          {t("footer.side")}
        </p>
        <Link
          href={GITHUB_HOME}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 transition-colors hover:text-foreground"
        >
          <GithubIcon className="size-4" />
          github.com/TLamT
        </Link>
      </div>
    </footer>
  )
}
