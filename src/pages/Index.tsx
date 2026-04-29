import { Nav } from "@/components/quest/Nav";
import { Hero } from "@/components/quest/Hero";
import { Quests } from "@/components/quest/Quests";
import { Playground } from "@/components/quest/Playground";
import { Systems } from "@/components/quest/Systems";
import { About } from "@/components/quest/About";
import { Footer } from "@/components/quest/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Quests />
      <Playground />
      <Systems />
      <About />
      <Footer />
    </main>
  );
};

export default Index;
