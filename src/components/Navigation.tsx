"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BrandName } from "@/components/BrandName";
import { profile } from "@/data/projects";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

type NavigationProps = {
  solid?: boolean;
};

export function Navigation({ solid = false }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled || solid
          ? "border-b border-accent/18 bg-background/92 shadow-[inset_0_1px_0_rgba(201,162,78,0.08)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="group text-foreground transition-colors hover:text-accent"
        >
          <BrandName size="nav" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-label border-b border-transparent pb-0.5 text-foreground/55 transition-all hover:border-accent/35 hover:text-accent-soft"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.imdb}
            target="_blank"
            rel="noopener noreferrer"
            className="text-label border-b border-transparent pb-0.5 text-foreground/55 transition-all hover:border-accent/35 hover:text-accent-soft"
          >
            IMDb
          </a>
        </div>
      </nav>
    </header>
  );
}
