const experiments = [
  { tag: "PROMPT", title: "The self-critique loop for spec writing", note: "Write it. Critique it. Rewrite it. Bake the loop in." },
  { tag: "AGENT", title: "Confidence scoring for AI output", note: "High, medium, low. If you can't name the source quote, it's low." },
  { tag: "WORKFLOW", title: "Single output tree vs. parallel tracks", note: "Three folders became one. Execution track is a field, not a folder." },
  { tag: "TOOL", title: "Retrospective as pipeline stage", note: "Shipping isn't the end. It's the start of the next loop." },
  { tag: "RAG", title: "Inbox-to-principle extraction", note: "Three independent signals from different meetings. That's the bar for a principle." },
];

const notes = [
  {
    cat: "AI WORKFLOWS",
    title: "Decision debt compounds quietly",
    excerpt: "It shows up as engineers guessing at intent, PMs in alignment meetings that shouldn't exist, and new hires who never learn why things are the way they are.",
    read: "4 min",
  },
  {
    cat: "PRODUCT",
    title: "Draft downstream, never auto-promote",
    excerpt: "AI should reduce the cost of drafting, not make decisions. Every output is a proposal until a human signs off.",
    read: "3 min",
  },
  {
    cat: "SYSTEMS",
    title: "Traceability over convenience",
    excerpt: "It would be faster to let the AI write specs directly from raw notes. WorkOS doesn't do this. The extra steps are the point.",
    read: "5 min",
  },
  {
    cat: "AI WORKFLOWS",
    title: "Boring beats clever",
    excerpt: "Simple prompts a PM can read, understand, and modify beat sophisticated ones they have to treat as a black box.",
    read: "2 min",
  },
];

export const Lab = () => {
  return (
    <section id="lab" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">// chapter 02</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
            The <span className="text-gradient-mint">Lab</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Where the thinking happens. Experiments that are still running,
            notes from the ones that finished.
          </p>
        </div>

        <div className="glass rounded-2xl divide-y divide-border overflow-hidden">
          {experiments.map((e, i) => (
            <a
              key={e.title}
              href="#"
              className="group flex items-center gap-4 md:gap-8 p-5 md:p-7 hover:bg-surface-elevated transition-colors animate-fade-in"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground w-10 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full border border-border text-secondary shrink-0 hidden sm:inline-block">
                {e.tag}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-base md:text-lg font-medium leading-tight">{e.title}</div>
                <div className="text-sm text-muted-foreground mt-1 truncate">{e.note}</div>
              </div>
              <span className="font-mono text-xs text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0">
                →
              </span>
            </a>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mt-10 md:mt-12">
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