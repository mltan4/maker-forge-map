const experiments = [
  { tag: "PROMPT", title: "Self-critique loop for spec writing", note: "Reduced rewrites by ~60% in personal use." },
  { tag: "AGENT", title: "Mini researcher: 3 agents, 1 verdict", note: "Two skeptics + one synthesizer." },
  { tag: "RAG", title: "Discord-as-knowledge-base proof of concept", note: "Embed weekly, query monthly." },
  { tag: "UI", title: "Quest map nav (this site)", note: "Bento grid + reveal-on-hover." },
  { tag: "WORKFLOW", title: "Daily journal → weekly themes", note: "LLM clusters voice notes." },
  { tag: "TOOL", title: "Standup digest in 200 lines", note: "Cron + Slack webhook + GPT." },
];

export const Playground = () => {
  return (
    <section id="playground" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">// chapter 02</div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
            The <span className="text-gradient-mint">Playground</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Half-built ideas, AI prototypes, and weekend experiments. Rough by
            design — the thinking is the point.
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
      </div>
    </section>
  );
};
