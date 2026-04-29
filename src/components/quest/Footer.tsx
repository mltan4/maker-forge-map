export const Footer = () => (
  <footer className="relative pt-20 pb-10 border-t border-border mt-10">
    <div className="mx-auto max-w-6xl px-4">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10 mb-16">
        <div className="max-w-xl">
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">// end of map</div>
          <h3 className="text-3xl md:text-5xl font-bold leading-tight">
            Now go build <span className="text-gradient-mint">something</span>.
          </h3>
        </div>
        <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
          ↑ back to start
        </a>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8 border-t border-border font-mono text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="status-dot" />
          <span>quest · builder.log · MMXXVI</span>
        </div>
        <div>made by hand &amp; bots</div>
      </div>
    </div>
  </footer>
);
