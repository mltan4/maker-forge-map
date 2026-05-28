## Overview
Text-only updates across the site. No styling, layout, animation, or structural changes beyond merging two existing sections into one.

## Changes

### 1. Hero — Update tagline
**File:** `src/components/quest/Hero.tsx`
Replace the paragraph under the "Builder's Playground" heading:
- **From:** "A playground for projects, AI workflows, and community-driven products. Each node is a quest — open it, see how it was built, steal what's useful, build your own."
- **To:** "Projects, AI workflows, tools built in public. Open a build, see how it was wired, steal what's useful, make something better. Everything here is under construction, perpetually."

### 2. Chapter 01 — Update subtitle
**File:** `src/components/quest/Quests.tsx`
Replace the `SectionHeader` sub prop:
- **From:** "Every node is a system I built. Open one to see the problem, the wiring, and the tradeoffs that didn't make the README."
- **To:** "Apps across AI workflow, product craft, and community tools. Every node is a system I built incrementally. Open one to see the problem, the wiring, and the tradeoffs that didn't make the README."

### 3. Merge Chapter 02 + 03 into "The Lab"
**New file:** `src/components/quest/Lab.tsx`
Combines the content of `Playground.tsx` (experiments list) and `Systems.tsx` (notes cards) under a single unified header:
- Eyeline: `// chapter 02`
- Title: `The <span class="text-gradient-mint">Lab</span>`
- Subtitle: "Where the thinking happens. Experiments that are still running, notes from the ones that finished."
- Section ID: `id="lab"`

Layout order within the section:
1. The 5 experiment rows (exact markup and data from `Playground.tsx`, as-is)
2. A small divider / spacing
3. The 4 note cards (exact markup and data from `Systems.tsx`, as-is)

All existing styling, animation classes, colors, and spacing preserved exactly.

### 4. Page composition
**File:** `src/pages/Index.tsx`
- Remove `<Playground />` and `<Systems />` imports and usage.
- Add `<Lab />` import and place it between `<Quests />` and `<Builds />`.

### 5. Navigation
**File:** `src/components/quest/Nav.tsx`
- Replace the two separate links `Playground → #playground` and `Systems → #systems` with one link: `Lab → #lab`.

### 6. Unused components (no-op)
`Playground.tsx` and `Systems.tsx` will no longer be imported. The files can remain in the repo (no deletion needed) since they cause no harm and contain no build-level exports.