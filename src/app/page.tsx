import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Works } from "@/components/sections/works";
import { TechStackGalaxy } from "@/components/sections/tech-stack-galaxy";
import { Certifications } from "@/components/sections/certifications";
import { Articles } from "@/components/sections/articles";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Works />
      <TechStackGalaxy />
      <Certifications />
      <Articles />
      <Contact />
    </main>
  );
}
