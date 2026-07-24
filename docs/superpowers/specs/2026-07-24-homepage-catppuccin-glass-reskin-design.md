# Homepage Reskin: Redesign Layout + Catppuccin Mocha + Glass Cards

## Context

The site has two homepages today:

- `app/page.tsx` — the live homepage. Green hero (`#064e3b`) transitioning to a cream/tan body (`bg-section-tan`, `#ebe2cf`), amber pill tags, serif "gradient" headings, scroll-triggered `motion` animations, built from `Hero`, `ProjectsGrid`, and `Card` components.
- `app/redesign/page.tsx` — an exploration page. Dark/near-black background with an animated warped-grid canvas (`app/redesign/background.tsx`), emerald accents, Fraunces serif headings, Geist Mono uppercase labels, and a flatter single-column layout (no scroll animation, no hero/cloud transition).

The owner finds the redesign's layout, typography, and information density more readable — especially on mobile — but doesn't like its raw black/emerald palette. Through visual mockups we settled on: keep the redesign's structure, reskin it with the real Catppuccin Mocha palette, and add glassmorphism to list/card containers for a "modern" feel. This spec replaces the live homepage with that combination. `/redesign` is left as-is, archived, not linked from anywhere.

## Decisions Made During Brainstorming

1. **Layout base:** redesign's single-column structure (not the current homepage's hero+cloud-transition+tan-section structure).
2. **Palette:** real Catppuccin Mocha hex values (not an approximation, not the custom forest/cobalt/purple option that was also mocked).
3. **Card treatment:** glassmorphism (blur + translucency + soft top-highlight) on containers, not on buttons/interactive controls.
4. **`/redesign` route:** kept as archive, unmodified, not linked from the new homepage.
5. **Content:** unchanged — same copy, same 4 projects from `projects.json`, same experience bullets. Only layout/typography/palette change.

## Palette

Real Catppuccin Mocha values, added as CSS custom properties in `app/globals.css`:

```css
--ctp-base: #1e1e2e;      /* page background */
--ctp-mantle: #181825;    /* footer/contact band, slightly darker */
--ctp-surface0: #313244;  /* card fallback surface (non-glass contexts, e.g. solid tag chips) */
--ctp-text: #cdd6f4;      /* headings, primary text */
--ctp-subtext1: #bac2de;  /* body copy */
--ctp-subtext0: #a6adc8;  /* secondary text, mono labels */
--ctp-overlay0: #6c7086;  /* tertiary text, dates */
--ctp-blue: #89b4fa;      /* links, card accent bar, project link color */
--ctp-mauve: #cba6f7;     /* CTA/email links, left-border accents */
--ctp-green: #a6e3a1;     /* tag pills */
```

Components reference these via Tailwind arbitrary values (`text-[color:var(--ctp-text)]`) or plain CSS — not hardcoded hex in JSX — so the palette stays adjustable from one place.

## Background

New shared component (replaces the homepage's `animated-bg` gradient class), adapted from `app/redesign/background.tsx`'s warped-grid canvas effect:

- Base fill: `var(--ctp-base)`.
- Grid line color changes from emerald (`rgba(16, 185, 129, 0.09)`) to a faint blend of blue/mauve, e.g. `rgba(137, 180, 250, 0.07)`.
- Same warp/perspective math, unchanged — only the two color constants change.
- Lives at `app/background.tsx` (new file, homepage-owned) so `app/redesign/background.tsx` is left untouched for the archived page.

This background sits behind the entire page and is what the glass cards' `backdrop-filter: blur()` actually blurs — without something visually behind them, the blur has nothing to catch.

## Glass Card Component

New `app/glass-card.tsx`:

```tsx
<div className="relative rounded-2xl border border-white/10 border-t-white/20
                 bg-[rgba(205,214,244,0.06)] backdrop-blur-xl shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
  {children}
</div>
```

Used for:
- Each experience entry (Canto, Ericsson)
- Each project card (Liked Song Memories, TV Backlog, Planning Poker, Pettopia)

Not used for:
- Buttons, links, CTAs, tag pills — these stay solid/outlined so click targets read clearly against the blur.
- The top accent bar on project cards stays a solid 2–3px gradient strip (blue → mauve), same idea as the redesign's solid emerald strip.

## Page Structure (`app/page.tsx`)

Rebuilt as a server component (no `motion`/scroll-reveal — matches the redesign's simpler, always-visible approach, which is part of what reads as more readable on mobile):

1. **Hero/intro** — Fraunces heading "Full-stack engineer.", Geist Mono uppercase byline, body paragraph(s) with mauve-accented inline emphasis, mono info list (location, role, building, GitHub, LinkedIn, resume link) — content identical to what's in `app/redesign/page.tsx` today, since that already matches the live homepage's About content.
2. **Experience** — two `GlassCard`s (Canto, Ericsson), same bullets as today.
3. **Projects** — four `GlassCard`s from `projects.json`, same order/content as the live homepage today (not the reordered/enriched variant used only on `/redesign`).
4. **Contact band** — solid `var(--ctp-mantle)` background (slightly darker than the page base, for section separation, echoing the current homepage's darker-green contact band), mauve/blue CTA buttons for email and LinkedIn.

## Files Touched

| File | Change |
|---|---|
| `app/globals.css` | Add Mocha CSS custom properties. Remove now-dead classes: `pill-amber`, `pill-amber-link`, `card-light`, `btn-light`, `btn-light-outline`, `tag-amber`, `gradient-heading`, `animated-bg`, `--color-surface-warm`, `--color-section-tan`. Keep `btn-primary`, `btn-outline`, `btn-card`, `btn-shimmer`, `card-dark`, `input-search` (used by `/backlog`), and the typewriter/shimmer keyframes if still referenced. |
| `app/page.tsx` | Rewritten per "Page Structure" above. |
| `app/background.tsx` | New. Mocha-recolored copy of the redesign's warped-grid background. |
| `app/glass-card.tsx` | New. Shared glass container component. |
| `app/opengraph-image.tsx` | Recolor from `#064e3b`/`#6ee7b7` green to Mocha base/blue for consistency with the new homepage. |
| `app/hero.tsx`, `app/hero.constants.ts`, `app/card.tsx`, `app/projects-grid.tsx` | Deleted — only consumed by the old `page.tsx`, confirmed via grep (no other references, `/backlog` uses only the unrelated `card-dark` CSS class). |
| `app/redesign/*` | Untouched. |
| `app/2eb32573e402721ea1545e17834698ed.png` | Untouched (unrelated asset, not referenced by any file touched here — out of scope, left as-is). |

## Testing

`tests/visual.spec.ts` has Playwright golden snapshots: `home-desktop.png`, `home-mobile.png`, `backlog-desktop.png`, `backlog-mobile.png`.

- `home-*` snapshots are expected to fail after this change — that's correct, not a regression. Regenerate with `playwright test --update-snapshots` once the new homepage is visually verified.
- `backlog-*` snapshots should be unaffected (no changes to `/backlog` or its CSS classes) — run without `--update-snapshots` first to confirm they still pass, as a check that nothing leaked.

## Out of Scope

- `/backlog` page and its styling.
- `/redesign` page and its background component — left as an untouched archive.
- `projects.json` content.
- Font choices already used per-page (Geist, Geist Mono, Fraunces) — reused as-is, not reconsidered.
