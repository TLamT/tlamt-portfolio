"use client"

import { Reveal } from "@/components/reveal"
import { Tilt } from "@/components/tilt"
import { useT } from "@/lib/i18n"

const CARD_ACCENTS = [
  "oklch(0.79 0.16 200)",
  "oklch(0.68 0.22 320)",
  "oklch(0.68 0.26 335)",
  "oklch(0.75 0.19 60)",
  "oklch(0.72 0.21 155)",
  "oklch(0.72 0.18 260)",
]

const CARD_EMOJI = ["⚡", "🎮", "🎨", "🇭🇰", "🚀", "🧠"]

export function VibeSection() {
  const t = useT()
  const cards = t("vibe.cards") as { title: string; text: string }[]

  return (
    <section id="vibe" className="scroll-mt-24">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <Reveal>
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
              {t("vibe.eyebrow")}
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
              {t("vibe.title")}
            </h2>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <Tilt max={6}>
                <div
                  style={{ ["--neon" as string]: CARD_ACCENTS[i] }}
                  className="rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-[color:var(--neon)] hover:animate-neon-pulse"
                >
                  <span className="text-3xl">{CARD_EMOJI[i]}</span>
                  <h3 className="mt-4 font-bold neon-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
