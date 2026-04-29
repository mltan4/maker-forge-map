import sandbox from "@/assets/builds/ai-sandbox-studio.png";
import reply from "@/assets/builds/reply-genie.png";
import compass from "@/assets/builds/ai-pm-compass.png";
import grass from "@/assets/builds/touch-grass.png";

type Build = {
  name: string;
  tagline: string;
  tags: string[];
  url?: string;
  image: string;
  status: "live" | "wip";
  size: "lg" | "md" | "sm";
  accent: "mint" | "lavender" | "cyan";
};

const builds: Build[] = [
  {
    name: "AI PM Compass",
    tagline: "An interactive PM rubric reimagined for the AI era — agents, evals, and non-determinism.",
    tags: ["Product", "AI", "Rubric"],
    url: "https://ai-pm-compass.lovable.app",
    image: compass,
    status: "live",
    size: "lg",
    accent: "lavender",
  },
  {
    name: "Reply Genie",
    tagline: "Three on-brand replies in seconds, for every inbox you have.",
    tags: ["AI", "Productivity"],
    url: "https://express-response-bot.lovable.app",
    image: reply,
    status: "live",
    size: "md",
    accent: "cyan",
  },
  {
    name: "Touch Seattle Grass",
    tagline: "A playful plasma-globe-style toy. Part the grass, find what's hidden.",
    tags: ["Toy", "Interaction"],
    url: "https://touch-grass-keep-going.lovable.app",
    image: grass,
    status: "live",
    size: "md",
    accent: "mint",
  },
  {
    name: "AI Sandbox Studio",
    tagline: "Teaching others to build with AI through real, messy, authentic iteration.",
    tags: ["Education", "Community"],
    image: sandbox,
    status: "wip",
    size: "md",
    accent: "mint",
  },
];

const accentMap = {
  mint: "text-primary",
  lavender: "text-secondary",
  cyan: "text-accent",
};

const sizeMap: Record<Build["size"], string> = {
  lg: "md:col-span-2 md:row-span-2",
  md: "md:col-span-2",
  sm: "md:col-span-1",
};

export const Builds = () => {
  return (
    <section id="builds" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 md:mb-16 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
            // chapter 04
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] mb-5">
            Other <span className="text-gradient-mint">Builds</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            A working gallery of side quests — apps, prototypes, and toys
            shipped to learn something. Click any tile to enter the live build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[minmax(220px,auto)]">
          {builds.map((b, i) => {
            const Tag: any = b.url ? "a" : "div";
            const props = b.url
              ? { href: b.url, target: "_blank", rel: "noreferrer" }
              : {};
            return (
              <Tag
                key={b.name}
                {...props}
                className={`quest-node group overflow-hidden flex flex-col ${sizeMap[b.size]} animate-scale-in`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="relative flex-1 min-h-[140px] overflow-hidden rounded-xl border border-border bg-surface-elevated">
                  <img
                    src={b.image}
                    alt={`${b.name} preview`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/0 to-background/0" />
                  <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest text-foreground/90 bg-background/60 backdrop-blur px-2.5 py-1 rounded-full border border-border">
                    <span className={`w-1.5 h-1.5 rounded-full ${b.status === "live" ? "bg-primary" : "bg-muted-foreground"}`} />
                    {b.status === "live" ? "live" : "wip"}
                  </span>
                </div>

                <div className="pt-5">
                  <div className={`font-mono text-[10px] tracking-widest uppercase mb-2 ${accentMap[b.accent]}`}>
                    side quest · {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className={`font-semibold leading-tight mb-2 ${b.size === "lg" ? "text-2xl" : "text-lg"}`}>
                    {b.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {b.tagline}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {b.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-muted/60 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                    {b.url && (
                      <span className={`ml-auto font-mono text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity ${accentMap[b.accent]}`}>
                        Visit →
                      </span>
                    )}
                  </div>
                </div>
              </Tag>
            );
          })}
        </div>
      </div>
    </section>
  );
};
