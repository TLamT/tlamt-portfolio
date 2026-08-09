import { Suspense } from "react";

import { Hero } from "@/components/hero";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { Tilt } from "@/components/tilt";
import { VibeMarquee } from "@/components/vibe-marquee";
import { getProjects } from "@/lib/github";

async function ProjectGrid() {
  const projects = await getProjects();

  if (projects.length === 0) {
    return (
      <p className="rounded-2xl border border-border bg-card/60 p-8 text-center text-muted-foreground">
        GitHub 暫時攞唔到資料，稍後再嚟睇下？
      </p>
    );
  }

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const ordered = [...featured, ...rest];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {ordered.map((project, i) => (
        <Reveal key={project.id} delay={(i % 3) * 80}>
          <Tilt>
            <ProjectCard project={project} />
          </Tilt>
        </Reveal>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <VibeMarquee />

      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-fuchsia-400">
                Projects
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                每個專案，都有自己嘅{" "}
                <span className="text-gradient">vibe</span>
              </h2>
              <p className="mt-3 text-muted-foreground">
                下面全部都係我喺 GitHub 公開嘅作品。撳入去可以睇埋 README 同原始碼。
              </p>
            </div>
          </Reveal>

          <div className="mt-10">
            <Suspense
              fallback={
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-64 animate-pulse rounded-3xl border border-border bg-card/40"
                    />
                  ))}
                </div>
              }
            >
              <ProjectGrid />
            </Suspense>
          </div>
        </div>
      </section>

      <section id="vibe" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
                The Vibe
              </p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">
                我做緊啲咩嘢
              </h2>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                emoji: "⚡",
                title: "即時數據獵人",
                text: "鍾意用公開 API 砌啲有真實數據、即時更新嘅嘢，例如排隊人數、天氣、交通。",
                accent: "oklch(0.79 0.16 200)",
              },
              {
                emoji: "🎮",
                title: "玩味至上",
                text: "鍾意整啲好玩、有主題嘅小遊戲，將鍾意嘅 pop culture 融入去。",
                accent: "oklch(0.68 0.22 320)",
              },
              {
                emoji: "🎨",
                title: "靚仔控",
                text: "用 Tailwind + shadcn/ui 砌到靚靚仔仔，連霓虹色都配埋畀你。",
                accent: "oklch(0.68 0.26 335)",
              },
              {
                emoji: "🇭🇰",
                title: "香港元素",
                text: "好多專案都以香港做主角，壽司郎、港鐵、巴士，本地嘢特別有親切感。",
                accent: "oklch(0.75 0.19 60)",
              },
              {
                emoji: "🚀",
                title: "即刻上線",
                text: "整完就即刻部署上 Vercel 畀人用，唔鍾意留喺 localhost 度生草。",
                accent: "oklch(0.72 0.21 155)",
              },
              {
                emoji: "🧠",
                title: "自己動手學",
                text: "自學路線，由 HTML 到 React，全部靠 side project 練返嚟。",
                accent: "oklch(0.72 0.18 260)",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 80}>
                <Tilt max={6}>
                  <div
                    style={{ ["--neon" as string]: item.accent }}
                    className="rounded-3xl border border-border bg-card/50 p-6 transition-colors hover:border-[color:var(--neon)] hover:animate-neon-pulse"
                  >
                    <span className="text-3xl">{item.emoji}</span>
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
    </>
  );
}
