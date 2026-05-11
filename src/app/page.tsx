import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";

const TechStackGalaxy = dynamic(
  () =>
    import("@/components/sections/tech-stack-galaxy").then(
      (m) => m.TechStackGalaxy,
    ),
  { loading: () => <div className="h-screen" /> },
);

const Experience = dynamic(
  () => import("@/components/sections/experience").then((m) => m.Experience),
  { loading: () => <div className="min-h-screen" /> },
);

const Articles = dynamic(() =>
  import("@/components/sections/articles").then((m) => m.Articles),
);

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
