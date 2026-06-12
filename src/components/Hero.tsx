"use client";

import { motion } from "framer-motion";
import { BrandName } from "@/components/BrandName";
import { heroLocalVideos, heroMedia, profile } from "@/data/projects";
import { HeroMediaCarousel } from "./HeroMediaCarousel";
import { LocalVideoCarousel } from "./LocalVideoBackground";

export function Hero() {
  const useLocalHero = heroLocalVideos.length > 0;

  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      {useLocalHero ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <LocalVideoCarousel sources={heroLocalVideos} intervalMs={12000} />
        </div>
      ) : heroMedia.length > 0 ? (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <HeroMediaCarousel items={[...heroMedia]} />
        </div>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.squarespace-cdn.com/content/v1/61119a51fee1111102a9dd9a/3822559f-f721-4bfa-93e4-e4352347aa14/Screenshot+2025-09-01+at+13-27-40+My+Wife+My+Abuser+The+Secret+Footage+%282024%29.png)",
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/78 to-background/28" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/58 via-transparent to-background/32" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,transparent_0%,var(--background)_76%)] opacity-50" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 text-left lg:px-10 lg:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1 className="text-foreground">
            <BrandName size="hero" />
          </h1>
          <p className="font-serif mt-8 max-w-2xl text-xl leading-relaxed text-foreground/82 md:text-2xl">
            {profile.heroLead}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-start gap-4"
        >
          <a href="#work" className="btn-primary">
            View selected work
            <span aria-hidden>↓</span>
          </a>
          <a href="#about" className="btn-outline">
            About
          </a>
        </motion.div>
      </div>
    </section>
  );
}
