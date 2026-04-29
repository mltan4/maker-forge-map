import { useState } from "react";

type Quest = {
  id: string;
  level: string;
  title: string;
  problem: string;
  system: string[];
  tradeoff: string;
  status: "live" | "beta" | "in-progress";
  tags: string[];
  size: "lg" | "md" | "sm";
  accent: "mint" | "lavender" | "cyan";
};

const quests: Quest[] = [
  {
    id: "q01",
    level: "01",
    title: "Loop — async standups for distributed teams",
    problem: "Sync standups don't scale across timezones; written ones get ignored.",
    system: ["Slack bot collects updates", "LLM summarizer ranks blockers", "Daily digest with 1-click follow-ups"],
    tradeoff: "Chose speed of weekly iteration over a fancy dashboard. Insights live where work happens.",
    status: "live",
    tags: ["AI", "Slack", "Workflow"],
    size: "lg",
    accent: "mint",
  },
  {
    id: "q02",
    level: "02",
    title: "Atlas — community knowledge graph",
    problem: "Discord wisdom evaporates. Threads die.",
    system: ["Webhook ingests messages", "Vector index + clustering", "Weekly published map"],
    tradeoff: "No moderation UI yet — bet on auto-clustering before tooling.",
    status: "beta",
    tags: ["Community", "RAG"],
    size: "md",
    accent: "lavender",
  },
  {
    id: "q03",
    level: "03",
    title: "Forge — AI agent for product discovery",
    problem: "PMs spend weeks on synthesis that could take hours.",
    system: ["Interview transcripts in", "Agent extracts jobs-to-be-done", "Living spec doc out"],
    tradeoff: "Opinionated framework — won't fit every team.",
    status: "in-progress",
    tags: ["Agents", "Discovery"],
    size: "md",
    accent: "cyan",
  },
  {
    id: "q04",
    level: "04",
    title: "Signal",
    problem: "Tracking community health by vibes.",
    system: ["Engagement scoring", "Drift alerts", "Weekly note"],
    tradeoff: "Privacy-first: aggregates only.",
    status: "live",
    tags: ["Community"],
    size: "sm",
    accent: "mint",
  },
  {
    id: "q05",
    level: "05",
    title: "Drafts",
    problem: "Writing before you know what you think.",
    system: ["Voice → outline", "Outline → draft", "Draft → publish"],
    tradeoff: "Markdown only. No WYSIWYG.",
    status: "beta",
    tags: ["AI", "Writing"],
    size: "sm",
    accent: "lavender",
  },
  {
    id: "q06",
    level: "06",
    title: "Compass — quarterly planning OS",
    problem: "Planning cycles repeat the same mistakes.",
    system: ["Outcome trees", "Bet tracker", "Retro auto-compile"],
    tradeoff: "Built for teams of 5–25; breaks at scale (on purpose).",
    status: "in-progress",
    tags: ["Systems", "Planning"],
    size: "md",
    accent: "cyan",
  },
];

const accentMap = {
  mint: "text-primary",
  lavender: "text-secondary",
  cyan: "text-accent",
};

const statusLabel = {
  live: "live",
  beta: "beta",
  "in-progress": "in progress",
};

const sizeMap: Record<Quest["size"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export const Quests = () => {
  const [active, setActive] = useState<Quest | null>(null);

  return (
    <section id="quests" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyeline="// chapter 01"
          title={<>The <span className="text-gradient-mint">Quest Map</span></>}
          sub="Every node is a system I built. Open one to see the problem, the wiring, and the tradeoffs that didn't make the README."
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(180px,auto)]">
          {quests.map((q, i) => (
            <button
              key={q.id}
              onClick={() => setActive(q)}
              className={`quest-node text-left p-6 md:p-7 group ${sizeMap[q.size]} animate-scale-in`}
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <span className={`font-mono text-xs tracking-widest uppercase ${accentMap[q.accent]}`}>
                  LVL {q.level}
                </span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  <span className={`w-1.5 h-1.5 rounded-full ${q.status === "live" ? "bg-primary" : q.status === "beta" ? "bg-secondary" : "bg-muted-foreground"}`} />
                  {statusLabel[q.status]}
                </span>
              </div>

              <h3 className={`font-semibold leading-tight mb-3 ${q.size === "lg" ? "text-2xl md:text-3xl" : "text-lg md:text-xl"}`}>
                {q.title}
              </h3>

              <p className={`text-muted-foreground leading-relaxed ${q.size === "lg" ? "text-base mb-6" : "text-sm mb-4"}`}>
                {q.problem}
              </p>

              <div className="flex flex-wrap items-center gap-2 mt-auto">
                {q.tags.map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-muted/60 text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className={`mt-4 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity ${accentMap[q.accent]}`}>
                Enter quest →
              </div>
            </button>
          ))}
        </div>
      </div>

      <QuestModal quest={active} onClose={() => setActive(null)} />
    </section>
  );
};

const SectionHeader = ({
  eyeline,
  title,
  sub,
}: {
  eyeline: string;
  title: React.ReactNode;
  sub: string;
}) => (
  <div className="mb-12 md:mb-16 max-w-3xl">
    <div className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{eyeline}</div>
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">{title}</h2>
    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">{sub}</p>
  </div>
);

const QuestModal = ({ quest, onClose }: { quest: Quest | null; onClose: () => void }) => {
  if (!quest) return null;
  return (
    <div
      className="fixed inset-0 z-[60] flex items-end md:items-center justify-center p-0 md:p-6 animate-fade-in-slow"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <div
        className="relative glass w-full max-w-2xl rounded-t-3xl md:rounded-3xl p-6 md:p-10 max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 mb-8">
          <div>
            <div className={`font-mono text-xs tracking-widest uppercase mb-2 ${accentMap[quest.accent]}`}>
              LVL {quest.level} · {statusLabel[quest.status]}
            </div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight">{quest.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <Block label="The problem">{quest.problem}</Block>
        <Block label="How it works">
          <ol className="space-y-2.5">
            {quest.system.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-xs text-primary mt-1">0{i + 1}</span>
                <span className="text-foreground/90">{s}</span>
              </li>
            ))}
          </ol>
        </Block>
        <Block label="The tradeoff">{quest.tradeoff}</Block>

        <div className="flex flex-wrap gap-2 pt-2">
          {quest.tags.map((t) => (
            <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-muted/60 text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Block = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div className="mb-7">
    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
      // {label}
    </div>
    <div className="text-base text-foreground/90 leading-relaxed">{children}</div>
  </div>
);
