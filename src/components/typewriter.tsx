"use client"

import { useEffect, useState } from "react"

const PHRASES = [
  "壽司郎排隊 app",
  "2048 怪奇物語版",
  "港鐵即時數據",
  "天氣實時資訊",
  "霓虹 vibe 網站",
]

export function Typewriter() {
  const [phrase, setPhrase] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = PHRASES[phrase % PHRASES.length]
    let timer: ReturnType<typeof setTimeout>

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && text === "") {
      setDeleting(false)
      setPhrase((v) => v + 1)
    } else {
      timer = setTimeout(
        () =>
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          ),
        deleting ? 35 : 85
      )
    }

    return () => clearTimeout(timer)
  }, [text, deleting, phrase])

  return (
    <span className="inline-flex items-baseline">
      <span className="text-gradient font-bold">{text}</span>
      <span className="animate-blink -ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[0.1em] rounded-full bg-fuchsia-400" />
    </span>
  )
}
