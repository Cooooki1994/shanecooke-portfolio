import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/JsonLd";
import { ProjectDetailView } from "@/components/ProjectDetailView";
import { getProjectDetail } from "@/data/project-details";
import { projects } from "@/data/projects";
import { siteBrand } from "@/lib/site";

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
    title: `${project.title} — ${siteBrand}`,
    description: detail?.synopsis ?? project.description,
    alternates: {
      canonical: `/work/${slug}`,
    },
    openGraph: {
      title: `${project.title} | Shane Cooke Edits`,
      description: detail?.synopsis ?? project.description,
      images: [project.poster],
      type: "article",
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

  return (
    <>
      <JsonLd
        page={{
          name: `${project.title} | ${siteBrand}`,
          description: detail.synopsis,
          path: `/work/${slug}`,
        }}
      />
      <ProjectDetailView project={project} detail={detail} />
    </>
  );
}
