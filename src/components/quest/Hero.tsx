export const Hero = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* floating orbs */}
      <div className="absolute top-32 -left-20 w-96 h-96 rounded-full bg-secondary/20 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-primary/20 blur-[120px] animate-float pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start gap-8 max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass animate-fade-in">
            <span className="status-dot" />
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              now exploring · ai workflows v0.4
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Builder of <span className="text-gradient-mint">systems</span>,
            <br />
            not slide decks
            <span className="inline-block w-3 h-[0.85em] bg-primary ml-2 align-middle animate-blink" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A playground for projects, AI workflows, and community-driven
            products. Each node is a quest — open it, see how it was built,
            steal what's useful, build your own.
          </p>

          <div className="flex flex-wrap items-center gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <a href="#quests" className="btn-press-start">
              <span>▶</span> Press start
            </a>
            <a href="#about" className="btn-ghost-glow">
              About the builder
            </a>
          </div>

          {/* stat strip */}
          <div className="grid grid-cols-3 gap-6 md:gap-12 mt-8 pt-8 border-t border-border w-full max-w-2xl animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { k: "12", v: "quests live" },
              { k: "07", v: "experiments" },
              { k: "∞", v: "in progress" },
            ].map((s) => (
              <div key={s.v}>
                <div className="font-mono text-3xl md:text-4xl text-gradient-mint">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
