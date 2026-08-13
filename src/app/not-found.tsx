"use client"

import Link from "next/link"
import { Ghost, Home } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useT } from "@/lib/i18n"

export default function NotFound() {
  const t = useT()

  return (
    <section className="relative isolate overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-8 size-96 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob" />
        <div className="absolute -right-32 bottom-8 size-96 rounded-full bg-cyan-400/20 blur-3xl animate-blob [animation-delay:-4s]" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-28 text-center sm:px-6">
        <span className="animate-float text-7xl drop-shadow-[0_0_24px_rgba(232,121,249,0.6)]">
          👻
        </span>

        <h1 className="mt-6 text-gradient text-8xl font-black tracking-tight sm:text-9xl">
          404
        </h1>

        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          {t("notFound.sub")}
        </p>

        <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
          <Ghost className="size-4" />
          TLamT.dev
        </p>

        <div className="mt-10">
          <Button asChild size="lg" className="rounded-full">
            <Link href="/">
              <Home />
              {t("notFound.back")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
