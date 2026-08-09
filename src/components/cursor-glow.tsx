"use client"

import { useEffect, useRef } from "react"

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current!
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches
    ) {
      return
    }
    let raf = 0
    let tx = -600
    let ty = -600
    function move(e: MouseEvent) {
      tx = e.clientX
      ty = e.clientY
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.opacity = "1"
        el.style.transform = `translate3d(${tx - 300}px, ${ty - 300}px, 0)`
      })
    }
    function leave() {
      el.style.opacity = "0"
    }
    window.addEventListener("mousemove", move)
    window.addEventListener("mouseleave", leave)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("mousemove", move)
      window.removeEventListener("mouseleave", leave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[-1] size-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(circle, oklch(0.79 0.15 200 / 0.14), transparent 62%)",
      }}
    />
  )
}
