"use client"

import { useT } from "@/lib/i18n"

function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const row = [...items, ...items]

  return (
    <div
      className={`flex w-max shrink-0 gap-3 pr-3 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      } group-hover:[animation-play-state:paused]`}
    >
      {row.map((item, i) => (
        <span
          key={`${item}-${i}${reverse ? "-r" : ""}`}
          className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
        >
          <span className="text-fuchsia-400">✦</span>
          {item}
        </span>
      ))}
    </div>
  )
}

export function VibeMarquee() {
  const t = useT()
  const items = t("marquee.items") as string[]

  return (
    <section
      aria-label={t("marquee.aria") as string}
      className="group border-y border-border/60 bg-card/40 py-5"
    >
      <div className="relative flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Row items={items} />
        <Row items={items} reverse />
      </div>
    </section>
  )
}
