import { Nav } from "@/components/quest/Nav";
import { Hero } from "@/components/quest/Hero";
import { Quests } from "@/components/quest/Quests";
import { Lab } from "@/components/quest/Lab";
import { Builds } from "@/components/quest/Builds";
import { About } from "@/components/quest/About";
import { Footer } from "@/components/quest/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Quests />
      <Lab />
      <Builds />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
