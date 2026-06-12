import { About } from "@/components/About";
import { Nominations } from "@/components/Nominations";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { ProjectGrid } from "@/components/ProjectGrid";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Nominations />
        <ProjectGrid />
        <About />
      </main>
      <Footer />
    </>
  );
}
