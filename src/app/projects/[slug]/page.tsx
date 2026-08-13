import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getProject, getProjects, getReadme } from "@/lib/github";
import { ProjectDetail } from "./project-detail";

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

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const readme = await getReadme(project.repo, project.defaultBranch);

  return <ProjectDetail project={project} readme={readme} />;
}
