"use client"

import * as React from "react"
import { Sparkles } from "lucide-react"

import { useT } from "@/lib/i18n"

const CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

const EMOJI = ["🍣", "🌀", "🚇", "⛈️", "🖱️", "✅", "✨", "🎮"]

export function Konami() {
  const t = useT()
  const [unlocked, setUnlocked] = React.useState(false)
  const index = React.useRef(0)
  const timer = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  const [pieces] = React.useState(() =>
    Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      emoji: EMOJI[i % EMOJI.length],
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 2.5 + Math.random() * 2,
    }))
  )

  React.useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      if (key === CODE[index.current]) {
        index.current += 1
        if (index.current === CODE.length) {
          index.current = 0
          setUnlocked(true)
          clearTimeout(timer.current)
          timer.current = setTimeout(() => setUnlocked(false), 4500)
        }
      } else {
        index.current = key === CODE[0] ? 1 : 0
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => {
      window.removeEventListener("keydown", onKeyDown)
      clearTimeout(timer.current)
    }
  }, [])

  if (!unlocked) return null

  return (
    <div
      aria-live="polite"
      className="pointer-events-none fixed inset-0 z-[60] flex items-center justify-center overflow-hidden"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          aria-hidden
          className="absolute animate-rise text-3xl"
          style={{
            left: `${p.left}%`,
            top: "110%",
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}

      <div className="animate-fade-up rounded-3xl border border-fuchsia-400/50 bg-card/90 px-8 py-6 text-center shadow-[0_0_40px_-8px_rgba(232,121,249,0.8)] backdrop-blur-xl">
        <Sparkles className="mx-auto size-8 text-fuchsia-400" />
        <p className="mt-3 text-lg font-bold">{t("easter.unlocked")}</p>
      </div>
    </div>
  )
}
