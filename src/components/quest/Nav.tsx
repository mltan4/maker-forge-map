import { useState, useEffect } from "react";

const links = [
  { label: "Quests", href: "#quests" },
  { label: "Playground", href: "#playground" },
  { label: "Systems", href: "#systems" },
  { label: "Builds", href: "#builds" },
  { label: "About", href: "#about" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-4 transition-all duration-500`}>
        <div
          className={`flex items-center justify-between rounded-full px-4 md:px-6 py-3 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="status-dot" />
            <span className="font-mono text-sm tracking-widest uppercase">quest</span>
            <span className="font-mono text-xs text-muted-foreground hidden sm:inline">/ builder.log</span>
          </a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="story-link hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-ghost-glow text-xs md:text-sm">
            <span className="hidden sm:inline">Get in touch</span>
            <span className="sm:hidden">Contact</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </header>
  );
};
