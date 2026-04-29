const notes = [
  {
    cat: "AI Workflows",
    title: "The 3-loop pattern for AI products",
    excerpt: "Most useful AI features are loops, not endpoints. Generate → critique → revise. Bake the loop in.",
    read: "4 min",
  },
  {
    cat: "Community",
    title: "Why your Discord is a graph, not a list",
    excerpt: "Channels are a UI, not a data model. The real shape is who replies to whom.",
    read: "3 min",
  },
  {
    cat: "Product",
    title: "Specs are conversations with the future you",
    excerpt: "Write the doc you'll wish you had in week 6. Not the one impressive in week 1.",
    read: "5 min",
  },
  {
    cat: "Systems",
    title: "Build the smallest loop that proves the thesis",
    excerpt: "If it works at one user, scale the system. If not, no amount of polish saves it.",
    read: "2 min",
  },
];

export const Systems = () => {
  return (
    <section id="systems" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">// chapter 03</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
            <span className="text-gradient-mint">Systems</span> &amp; thinking
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Short, sharp notes on AI workflows, product, and community. Frameworks I actually use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5">
          {notes.map((n, i) => (
            <a
              key={n.title}
              href="#"
              className="quest-node p-7 md:p-8 group flex flex-col animate-scale-in"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                  {n.cat}
                </span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                  {n.read}
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-3 group-hover:text-gradient-mint transition-colors">
                {n.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-1">
                {n.excerpt}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground/70 group-hover:text-primary transition-colors">
                Read note →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
