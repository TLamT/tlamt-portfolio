import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ExternalLink, Star } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { getProject, getProjects, getReadme } from "@/lib/github";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
  };
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("zh-HK", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const readme = await getReadme(project.repo, project.defaultBranch);

  return (
    <article
      style={{ ["--neon" as string]: project.accent }}
      className="relative isolate overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 overflow-hidden">
        <div
          className="absolute -top-24 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full blur-3xl opacity-30"
          style={{ background: project.accent }}
        />
      </div>

      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <Button asChild variant="ghost" size="sm" className="-ml-2">
          <Link href="/#projects">
            <ArrowLeft />
            返去全部專案
          </Link>
        </Button>

        <header className="mt-8">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex size-20 items-center justify-center rounded-3xl border border-border neon-bg text-5xl neon-glow">
              {project.emoji}
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {project.name}
                </h1>
                <span className="rounded-full border border-border neon-bg px-3 py-1 text-sm neon-text">
                  {project.vibe}
                </span>
              </div>
              <p className="mt-1 text-muted-foreground">
                {project.repo} · {project.language ?? "—"}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-2xl text-lg italic text-muted-foreground">
            「{project.tagline}」
          </p>
          <p className="mt-3 max-w-2xl leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="rounded-full">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.homepage && (
              <Button asChild size="lg" className="rounded-full">
                <a href={project.homepage} target="_blank" rel="noreferrer">
                  <ExternalLink />
                  去玩下
                </a>
              </Button>
            )}
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href={project.repoUrl} target="_blank" rel="noreferrer">
                <GithubIcon className="size-4" />
                GitHub 原始碼
              </a>
            </Button>
          </div>

          <dl className="mt-8 grid gap-3 text-sm sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/50 px-4 py-3">
              <dt className="flex items-center gap-1.5 text-muted-foreground">
                <Clock className="size-3.5" />
                最近更新
              </dt>
              <dd className="mt-1 font-medium">
                {formatDate(project.updatedAt)}
              </dd>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 px-4 py-3">
              <dt className="flex items-center gap-1.5 text-muted-foreground">
                <Star className="size-3.5" />
                Stars
              </dt>
              <dd className="mt-1 font-medium">{project.stars}</dd>
            </div>
            <div className="rounded-2xl border border-border bg-card/50 px-4 py-3">
              <dt className="flex items-center gap-1.5 text-muted-foreground">
                <ExternalLink className="size-3.5" />
                語言
              </dt>
              <dd className="mt-1 font-medium">{project.language ?? "—"}</dd>
            </div>
          </dl>
        </header>

        {readme && (
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-bold tracking-tight">
              README
            </h2>
            <div className="rounded-3xl border border-border bg-card/40 p-6 sm:p-8">
              <Markdown content={readme.content} />
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
