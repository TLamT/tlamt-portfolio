"use client"

import { useRef, type MouseEvent, type ReactNode } from "react"

export function Tilt({
  children,
  className = "",
  max = 8,
}: {
  children: ReactNode
  className?: string
  max?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    el.style.transform = `perspective(900px) rotateX(${((0.5 - py) * max).toFixed(2)}deg) rotateY(${((px - 0.5) * max * 1.25).toFixed(2)}deg) translateY(-4px)`
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = ""
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.18s ease-out" }}
      className={`tilt ${className}`}
    >
      {children}
    </div>
  )
}
