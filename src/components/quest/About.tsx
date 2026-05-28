export const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// chapter 05</div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-6">
              About the <span className="text-gradient-mint">player</span>
            </h2>
            <div className="glass rounded-2xl p-6 space-y-3 font-mono text-sm">
              <Row k="role" v="Product, Operator, Community Builder" />
              <Row k="focus" v="AI systems and workflow" />
              <Row k="status" v="Building in Public" />
            </div>
          </div>

          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed">
            <p>
              I spent years as a product leader shipping features. Now I'm
              evolving into a builder of systems — small, opinionated tools
              that compound, AI workflows that do the boring work, and
              communities that teach themselves.
            </p>
            <p className="text-muted-foreground">
              This site isn't a résumé. It's a workshop. Each quest is a real
              system I built, broken open so you can see the wiring. Take what's
              useful. Argue with the tradeoffs. Build something better.
            </p>
            <p className="text-muted-foreground">
              If you're working on AI products, internal tools, or community
              systems — let's compare notes.
            </p>

            <div id="contact" className="flex flex-wrap items-center gap-3 pt-4">
              <a href="https://www.linkedin.com/in/productgrowth/" target="_blank" rel="noopener noreferrer" className="btn-press-start">
                <span>✉</span> Say Hi
              </a>
              <a href="https://x.com/marktanft" target="_blank" rel="noopener noreferrer" className="btn-ghost-glow">Twitter / X</a>
              <a href="https://github.com/mltan4" target="_blank" rel="noopener noreferrer" className="btn-ghost-glow">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Row = ({ k, v }: { k: string; v: string }) => (
  <div className="flex items-center justify-between gap-4 py-1 border-b border-border/60 last:border-0">
    <span className="text-muted-foreground uppercase tracking-widest text-[10px]">{k}</span>
    <span className="text-foreground" dangerouslySetInnerHTML={{ __html: v }} />
  </div>
);
