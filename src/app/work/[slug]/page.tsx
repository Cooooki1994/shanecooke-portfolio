import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { getProjectDetail } from "@/data/project-details";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const detail = getProjectDetail(slug);

  return {
    title: `${project.title}, Shane Cooke BFE`,
    description: detail?.synopsis ?? project.description,
    openGraph: {
      title: project.title,
      description: detail?.synopsis ?? project.description,
      images: [project.poster],
    },
  };
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = getProjectDetail(slug) ?? {
    synopsis: project.description,
    watch: project.externalUrl
      ? [{ label: "Watch", url: project.externalUrl }]
      : [],
  };

  return <ProjectDetailView project={project} detail={detail} />;
}
