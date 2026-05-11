import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { TechStackGalaxy } from "@/components/sections/tech-stack-galaxy";
import { Experience } from "@/components/sections/experience";
import { Articles } from "@/components/sections/articles";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <TechStackGalaxy />
      <Experience />
      <Articles />
    </main>
  );
}
