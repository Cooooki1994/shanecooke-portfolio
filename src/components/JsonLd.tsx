import { profile } from "@/data/projects";
import { siteBrand, siteDescription, siteUrl } from "@/lib/site";

type JsonLdProps = {
  /** Project detail pages pass a focused WebPage schema. */
  page?: {
    name: string;
    description: string;
    path: string;
  };
};

export function JsonLd({ page }: JsonLdProps) {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: siteBrand,
      description: siteDescription,
      inLanguage: "en-GB",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      alternateName: [siteBrand, "shanecookedits", "Shane Cooke BFE"],
      jobTitle: "Documentary & Factual Editor",
      description: siteDescription,
      url: siteUrl,
      email: profile.email,
      telephone: profile.phone,
      sameAs: [profile.linkedin, profile.imdb, profile.portfolio],
      knowsAbout: [...profile.skills],
      address: {
        "@type": "PostalAddress",
        addressLocality: profile.location,
        addressCountry: "GB",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: siteBrand,
      url: siteUrl,
      description: siteDescription,
      areaServed: "GB",
      serviceType: [
        "Documentary editing",
        "Factual editing",
        "Broadcast editing",
        "Long-form video editing",
      ],
      provider: { "@id": `${siteUrl}/#person` },
    },
  ];

  if (page) {
    graph.push({
      "@type": "WebPage",
      "@id": `${siteUrl}${page.path}`,
      url: `${siteUrl}${page.path}`,
      name: page.name,
      description: page.description,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#person` },
    });
  }

  const data = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
