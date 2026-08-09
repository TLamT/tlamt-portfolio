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

function Row({ reverse = false }: { reverse?: boolean }) {
  const row = [...ITEMS, ...ITEMS]

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
  return (
    <section
      aria-label="常用技術"
      className="group border-y border-border/60 bg-card/40 py-5"
    >
      <div className="relative flex flex-col gap-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <Row />
        <Row reverse />
      </div>
    </section>
  )
}
