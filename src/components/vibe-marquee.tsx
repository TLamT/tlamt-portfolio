const ITEMS = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "shadcn/ui",
  "JavaScript",
  "GitHub API",
  "繁體中文",
  "香港人做㗎",
  "霓虹色",
  "Vite",
  "HTML / CSS",
]

export function VibeMarquee() {
  const row = [...ITEMS, ...ITEMS]

  return (
    <section aria-label="常用技術" className="border-y border-border/60 bg-card/40 py-4">
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max shrink-0 animate-marquee gap-3 pr-3">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground"
            >
              <span className="text-fuchsia-400">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
