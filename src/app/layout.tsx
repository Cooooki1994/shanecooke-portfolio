import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://shanecookeedits.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Shane Cooke BFE, Documentary & Factual Editor",
  description:
    "London freelance documentary and factual editor. Broadcast, digital, branded and long-form. Building moving narratives through interviews, archive, scripts and voiceover. BFE-nominated, My Wife, My Abuser.",
  openGraph: {
    title: "Shane Cooke BFE, Documentary & Factual Editor",
    description:
      "Freelance documentary and factual editor across broadcast, digital, branded content and long-form storytelling.",
    url: siteUrl,
    siteName: "Shane Cooke BFE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="relative min-h-full">
        <CursorSpotlight />
        {children}
      </body>
    </html>
  );
}
