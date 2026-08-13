import { Suspense } from "react";

import { AboutSection } from "@/components/about-section";
import { Hero } from "@/components/hero";
import { ProjectBrowser } from "@/components/project-browser";
import { ProjectsHeading } from "@/components/projects-heading";
import { Reveal } from "@/components/reveal";
import { VibeMarquee } from "@/components/vibe-marquee";
import { VibeSection } from "@/components/vibe-section";
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

  return <ProjectBrowser projects={projects} />;
}

export default function Home() {
  return (
    <>
      <Hero />
      <VibeMarquee />
      <AboutSection />

      <section id="projects" className="scroll-mt-24">
        <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
          <Reveal>
            <ProjectsHeading />
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

      <VibeSection />
    </>
  );
}
