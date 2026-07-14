# Globify Design System

Reverse-engineered from a reference dark-agency landing page, then translated into
Globify's own visual voice. Nothing here is copied — copy, iconography, and exact
motifs from the reference are intentionally left out. What's captured is the
underlying *system*: the scales, rhythms, and effects that make that page feel
premium, so we can apply the same discipline with our own black/orange identity.

This file is the source of truth for visual decisions on this project. When in
doubt, match a value here before inventing a new one.

---

## 1. Design Philosophy

The reference reads as "premium technical services" through four disciplines:

1. **One accent, used sparingly.** Orange never fills a background — it lights
   edges, numbers, icons, and 10–20% of any given viewport. Everything else is
   black, near-black, or white at reduced opacity.
2. **Every section opens with a label → headline → subhead triplet.** This is
   the single most repeated pattern on the page and is what makes fast scrolling
   still feel legible.
3. **Glow implies depth instead of shadow.** There is almost no drop-shadow
   language; darkness recedes and orange light advances. Depth is built with
   glow radius and border opacity, not with black shadows (which would be
   invisible on a near-black background anyway).
4. **Structure is diagrammatic.** Process, methodology, and metrics are not
   just described in prose — they're rendered as radar charts, connected node
   timelines, and stat tiles. Content gets a *shape*, not just a paragraph.

Globify already shares principles 1, 2, and 3 (see `styles/theme.css`,
`styles/utilities.css`). This document extends the system to cover 4, and
formalizes the rest so future sections stay consistent.

---

## 2. Color Palette

### Reverse-engineered observations
- Background is not pure black — a near-black with a faint warm tint, so
  orange glow blooms naturally instead of looking pasted on.
- A single warm orange carries every accent: headline highlight words, stat
  numbers, icon strokes, active nav state, button fill, node markers.
- White text is never pure `#fff` at full opacity for body copy — headlines
  run near-white, body copy sits around 65–75% white opacity to keep contrast
  hierarchy without a second gray palette.
- Card surfaces are a barely-lighter black than the page background, with a
  hairline border at very low white opacity (~6–10%) — the border is doing
  the separation work, not a fill-color jump.

### Globify tokens (already defined in `styles/theme.css`)
| Token | Value | Role |
|---|---|---|
| `--background` | `#070707` | Page background |
| `--foreground` | `#ffffff` | Headline text |
| `--card` | `#0f0f0f` | Card surface |
| `--primary` | `#ff6b00` | Sole accent — CTAs, highlights, icon strokes, numbers |
| `--muted-foreground` | `#9a9a9a` | Body copy on dark |
| `--border` | `rgba(255,255,255,0.08)` | Hairline separators, card edges |
| `--glass-bg` | `rgba(255,255,255,0.03)` | Glass card fill |
| `--glow-primary` | `#ff6b00` | Radial/arc glow source color |

**Rule:** body copy uses `text-muted-foreground`, never a second gray token.
Headlines use `text-white` or `.text-gradient`. Only one orange exists in the
system — do not introduce a second accent hue (no blue, no green) for charts
or status states; differentiate with opacity/weight instead.

---

## 3. Typography Scale

### Reverse-engineered observations
- Eyebrow/label text: small caps-style uppercase, wide letter-spacing, orange,
  ~13–14px, always sits directly above a headline with tight vertical gap.
- Section headlines: bold, tight tracking, 2-line wraps are common and
  intentional (line breaks are authored, not accidental), one clause in
  orange for emphasis rather than the whole headline.
- Hero headline is the largest text on the page by a wide margin — roughly
  2x the size of section headlines — and centers the page's single boldest
  statement.
- Card titles are medium-weight, noticeably smaller than section headlines,
  closer in size to body copy but heavier in weight — hierarchy comes from
  weight, not just size.
- Big stat numbers (in stat tiles) are the second-largest text on the page,
  rivaling section headlines, always paired with a small label directly below.

### Globify scale (Tailwind + `font-sans` / Geist)
| Role | Class | Size (desktop) | Weight | Notes |
|---|---|---|---|---|
| Eyebrow | `text-sm font-medium tracking-wide uppercase text-primary` | 14px | 500 | Already used in `SectionHeading` |
| Hero headline | `text-6xl md:text-7xl font-semibold tracking-tight` | 60–72px | 600 | One clause wrapped in `.text-gradient-primary` |
| Section headline | `text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight` | 30–48px | 600 | Two-line wraps are fine; don't force single line |
| Stat number | `text-4xl sm:text-5xl font-semibold` | 36–48px | 600 | Pairs with `text-sm text-muted-foreground` label below |
| Card title | `text-lg font-medium` | 18px | 500 | Used in `Features`, `Pricing`, `Testimonials` |
| Body / description | `text-sm sm:text-base text-muted-foreground` | 14–16px | 400 | Line-height relaxed (`leading-relaxed`) for readability on black |
| Micro label (step number, badge) | `text-xs sm:text-sm font-mono` | 12–14px | 500 | Monospace reinforces "system/technical" feel |

**Rhythm:** eyebrow → headline gap is small (`gap-4` in `SectionHeading`);
headline → description gap is the same. Never skip the eyebrow on a major
section — it's the anchor that makes the scale legible while scrolling fast.

---

## 4. Grid System

### Reverse-engineered observations
- Overall content is constrained to a centered column with generous side
  margins on desktop — full-bleed is reserved for background texture and the
  CTA band only, never for text.
- Card grids step from 1 → 2 → 3 or 4 columns as viewport grows, never
  jumping straight from 1 to 4.
- Asymmetric layouts appear (text column + image column) but always at a
  simple ratio — roughly 1:1 or 2:3 — not arbitrary fractions.

### Globify grid
- Max content width: `max-w-6xl` (section content), `max-w-3xl` (FAQ, narrow
  reading columns), `max-w-5xl` (hero dashboard mockup, CTA card).
- Card grid breakpoints: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3` for
  feature/testimonial/partner-style grids. `grid-cols-2 sm:grid-cols-4` for
  stat rows (never more than 4 across — beyond that, numbers lose impact).
  `sm:grid-cols-2 lg:grid-cols-4` for horizontal step/phase sequences.
- Asymmetric split sections (e.g. a future "product tour" section) should use
  `grid-cols-1 lg:grid-cols-2` or `lg:grid-cols-[1.4fr_2fr]` (already used in
  `Footer`) — stick to one of these two ratios project-wide.
- Horizontal padding: `px-4` on mobile is the project floor; sections never
  go edge-to-edge except background layers (`GridBackground`) and the CTA
  glass card's internal texture.

---

## 5. Layout Rhythm

### Reverse-engineered observations
- Section vertical padding is large and *consistent* — every major section
  feels like it takes a full breath before the next one starts, regardless of
  how much content it holds.
- The page alternates content density: a dense card-grid section is usually
  followed by a sparse, centered, text-only section — this prevents visual
  fatigue over a long scroll.
- Diagrammatic sections (radar chart, node timeline) get *more* vertical
  room than card-grid sections, because the eye needs space to trace a shape.

### Globify rhythm
- Standard section padding: `py-24 sm:py-32` (already the project default —
  see every file in `/sections`). Keep this for all new sections.
- Tight/support sections (logo cloud, dividers): `py-10` max.
- Alternate density deliberately when adding sections: if the previous
  section was a 3-column card grid, the next should be a centered
  stat row, quote, or diagram — not another dense grid.
- Diagram sections (see §17) should budget `py-32 sm:py-40` — roomier than
  the standard, matching the reference's treatment of its radar chart and
  phase timeline.

---

## 6. Spacing System

Base unit is Tailwind's default 4px scale — no custom spacing tokens needed.
Observed/adopted conventions:

| Context | Value | Example |
|---|---|---|
| Icon-to-title gap (card) | `mt-5` | `Features` card |
| Title-to-body gap (card) | `mt-2` | `Features` card |
| Eyebrow-to-headline-to-description | `gap-4` | `SectionHeading` |
| Card internal padding | `p-6` | `GlassCard` default |
| Card grid gap | `gap-4` | Feature/testimonial/pricing grids |
| Section header-to-content gap | `gap-16` | Every section wrapper |
| Stat tile internal gap | `gap-2` | `Stats` section |

**Rule:** gaps shrink as you move from macro (section) to micro (icon-to-label)
structure: `gap-16` → `gap-4` → `gap-2`. Don't invent in-between values.

---

## 7. Border Radius

### Reverse-engineered observations
- One large, consistent radius governs cards, buttons, and image containers —
  it reads as generous but not fully pill-shaped (except on buttons and
  badges, which *are* fully rounded).
- Nested elements (an image inside a card, a chip inside a section) use a
  visibly smaller radius than their parent, never the same radius — this is
  what keeps nested rounding from looking mushy.

### Globify radius
- `--radius: 1.25rem` (20px) — already the base token, mapped to
  `rounded-lg` via shadcn's `--radius-lg`.
- Cards, glass panels, dashboard mockups: `rounded-[20px]` (`GlassCard`).
- Buttons, badges, nav pill, tags: fully rounded (`rounded-full`) — this is
  the one place we deliberately break from 20px, matching the reference's
  pill CTAs and nav.
- Nested elements inside a 20px card (icon wells, mini stat bars, chart
  containers): `rounded-xl` (12px) or `rounded-2xl` (16px) — always one step
  down from the parent radius, never equal to it.

---

## 8. Lighting & Glow Effects

### Reverse-engineered observations
- The dominant lighting motif is a soft, wide radial bloom of orange light,
  positioned high and centered — it behaves like an off-screen light source
  rather than a decorative sticker. It reappears at consistent "beats" down
  the page (top of hero, before major CTA moments) rather than on every
  section, which keeps it feeling like punctuation, not wallpaper.
- Glow is always *behind* content, heavily blurred, and low-opacity enough
  that text stays fully readable on top of it.
- Icon wells (small rounded squares holding a Lucide-style icon) get a subtle
  inner glow/tint of orange at low opacity — not a hard fill.

### Globify implementation
- `.radial-glow` / `.radial-glow-sm` (in `styles/utilities.css`) already
  implement this via `radial-gradient(... var(--glow-primary) ...)`.
- **Usage rule:** glow is a *beat*, not a background. Use `GridBackground`
  (grid + glow) only at: hero, and the closing CTA. Mid-page sections (stats,
  how-it-works) should use `<GridBackground glow={false} />` — grid texture
  only, no bloom — exactly as `Stats` already does. This mirrors the
  reference's restraint and should be treated as a hard rule for new sections.
- Icon wells: `bg-primary/10 text-primary` (already the `Features` pattern).
  Do not increase past `/15` opacity — it starts to look like a filled button.

---

## 9. Shadows

### Reverse-engineered observations
- Conventional black drop-shadows are essentially absent — they'd be
  invisible against `#070707` anyway. Elevation is communicated through
  (a) border brightness, (b) background lightness step, and (c) glow, never
  through `box-shadow: 0 Npx black`.
- The one place a "shadow" reads is a soft colored glow under CTA buttons —
  effectively a shadow that's orange instead of black.

### Globify rule
- Do not add `shadow-*` utilities to cards or sections. Depth comes from:
  1. `.glass` border (`--glass-border`) brightening on hover (`.glass-hover`),
  2. background step from `--background` (`#070707`) to `--card` (`#0f0f0f`),
  3. glow, where appropriate (§8).
- Exception: primary CTA buttons may use a soft orange glow shadow —
  `shadow-[0_0_24px_-4px_rgba(255,107,0,0.5)]` — sparingly, on the single
  most important button per section (hero primary CTA, final CTA primary
  button). Not on secondary/outline buttons, not on every card button.

---

## 10. Visual Hierarchy

Reverse-engineered hierarchy order (highest to lowest emphasis), and how each
maps to Globify's existing tokens:

1. **Orange gradient headline word** — `.text-gradient-primary`
2. **White hero/section headline** — `.text-gradient` or `text-white`
3. **Stat numbers / big diagram values** — `text-primary` at large size
4. **Primary CTA button** — solid `bg-primary` pill
5. **Card titles / icon wells** — `text-white` medium weight + `text-primary` icon
6. **Body copy** — `text-muted-foreground`
7. **Micro labels (step numbers, badges, eyebrows)** — small, uppercase or
   monospace, `text-primary` or `text-muted-foreground` depending on context

**Rule:** never let two elements at the same hierarchy level compete in the
same viewport — e.g. don't put a gradient headline and a gradient stat number
side by side; stagger which device (color vs. size vs. weight) is doing the
emphasis work at each level.

---

## 11. Card Styles

### Reverse-engineered observations
- A single card "species" is reused everywhere (feature cards, stat cards,
  partner cards, testimonial cards) — same radius, same border treatment,
  same padding scale — only internal content changes. This repetition is
  part of why the page feels systemized rather than assembled.
- Cards have a hover state that brightens the border and background
  fractionally — no scale/lift transform, no shadow pop. Motion stays
  subtle and material, not skeuomorphic.
- A "highlighted" card variant (used for a featured pricing tier or a
  featured partner category) is differentiated with a colored ring/border
  only — same size, same radius, same padding as its siblings.

### Globify implementation
- `GlassCard` (`components/shared/glass-card.tsx`) is this single species —
  `.glass .glass-hover rounded-[20px] p-6`. **Every new card-shaped element
  should render through `GlassCard`, not a bespoke `div`.**
- Highlighted variant: add `ring-1 ring-primary/50` (already the pattern in
  `Pricing`'s `highlighted` plan) — never change size or padding for emphasis.
- Hover state is already correct in `.glass-hover` (border + bg shift, no
  transform). Do not add `hover:scale-*` or `hover:shadow-*` to cards.

---

## 12. Button Styles

### Reverse-engineered observations
- Two button species only: solid orange pill (primary action) and a
  low-contrast dark pill with a hairline border (secondary/outline action).
  No third "text link that looks like a button" style muddying the system.
- Buttons are always fully rounded, never the card's 20px radius.
- Icon-in-button (arrow, play icon) sits after the label for forward actions,
  reinforcing directional momentum toward conversion.

### Globify implementation (already correct in `components/ui/button.tsx`
and used in `Hero`/`Cta`)
- Primary: `bg-primary text-primary-foreground`, `rounded-full`, trailing
  `ArrowRight` icon for forward actions.
- Secondary: `variant="outline"` with `border-white/10 bg-white/[0.02]`,
  `rounded-full`.
- **Rule:** don't introduce a third button treatment (e.g. a filled white
  button, or a gradient-border button). If a section needs a tertiary action,
  use `variant="ghost"` text-only, never a new visual species.

---

## 13. Background Treatment

### Reverse-engineered observations
- Base layer is flat near-black.
- Second layer is a very faint fixed grid/line texture, barely visible except
  where glow brightens it — texture, not decoration.
- Third layer, used only at "beat" moments (§8), is the radial/arc glow.
- A fourth, rarer layer is a fine dot/particle texture, reserved for a single
  high-emphasis band (the closing CTA) — it reads as data/network texture and
  is never used elsewhere, which keeps it special.

### Globify implementation
- Layers 1–3 exist today: `--background`, `.bg-grid`, `.radial-glow`
  (composed by `GridBackground`).
- **New addition — dot texture for the closing CTA only:** add a
  `.bg-dots` utility (fine radial-dot pattern, very low opacity, orange- or
  white-tinted) to `styles/utilities.css` and apply it *exclusively* inside
  the `Cta` section's `GlassCard`, layered under the existing grid+glow. Do
  not reuse it in `Hero` or mid-page sections — its rarity is what makes it
  land as a distinct final "beat."

```css
.bg-dots {
  background-image: radial-gradient(var(--grid-line) 1px, transparent 1px);
  background-size: 18px 18px;
}
```

---

## 14. Motion Principles

### Reverse-engineered observations
- Entrances are consistently a fade + small upward slide — nothing rotates,
  bounces, or overshoots. Motion supports reading order, it doesn't perform.
- Elements in a row/grid stagger in left-to-right or top-to-bottom, with a
  short, consistent delay per item — never simultaneous, never random order.
- The one continuous (non-scroll-triggered) motion on the page is a slow,
  linear horizontal drift — used for the partner/logo strip.
- Diagram elements (chart outlines, timeline connectors) draw themselves in
  progressively rather than appearing all at once — motion is used to
  *teach* the shape, not just decorate its arrival.

### Globify implementation (already correct)
- `lib/motion.ts`: `fadeUp` (opacity + `y: 28→0`), `staggerContainer` — this
  is the reference's entrance pattern exactly, keep using it for all new
  content blocks.
- `components/shared/marquee.tsx`: GSAP linear infinite drift — this is the
  one continuous-motion element, matching the reference's restraint (GSAP
  used "only where needed," per the project's own stated principle).
- **New guidance for diagram sections (§17):** use GSAP `ScrollTrigger`
  (already registered in `lib/gsap.ts` but unused) to progressively draw SVG
  paths (`strokeDashoffset` animation) for radar-chart outlines and
  timeline-connector lines, triggered once on scroll-into-view. This is the
  one place GSAP should do more than the marquee — it's the "teach the
  shape" motion principle above, and Framer Motion variants aren't well
  suited to path-drawing.
- Do not add scale/rotate/bounce easing anywhere. Stick to
  `ease: [0.16, 1, 0.3, 1]` (already the project's standard ease) for every
  new transition.

---

## 15. Scroll Storytelling

### Reverse-engineered observations
The page is structured as a persuasion arc, not a feature list:

1. **Hook** — bold positioning claim (hero)
2. **Reframe** — "here's who we are / why this matters" (credibility + stakes)
3. **Proof of impact** — quantified outcomes (stat tiles)
4. **How** — methodology made visible (radar chart, phase timeline)
5. **Trust** — process credibility (experience/method cards)
6. **Philosophy** — a beat of "why we're different" (innovation section)
7. **Social proof by association** — partner/ecosystem grid
8. **Invitation** — soft second CTA (join network) before...
9. **Close** — hard CTA with maximum visual emphasis (dot texture + glow)

This ordering — proof before methodology, methodology before trust, philosophy
placed *after* proof (not before, where it would feel unsubstantiated) — is
deliberate and worth preserving as a template.

### Globify's current arc
Hero → LogoCloud → Features → Stats → HowItWorks → Testimonials → Pricing →
Faq → Cta. This already follows hook → trust signal → proof (features) →
quantified impact (stats) → how (steps) → social proof (testimonials) →
conversion (pricing) → objection handling (FAQ) → close (CTA). It's a sound
arc — when adding sections, insert new "proof" or "how" content *between*
`Features`/`Stats` and `HowItWorks`, not after `Testimonials`, to preserve the
proof-before-methodology-before-trust ordering above.

---

## 16. Section Transitions

### Reverse-engineered observations
- Sections aren't visually boxed off from each other — there's no hard line
  or background-color change at every boundary. Instead, whitespace
  (§5) and the periodic glow/grid beats (§8) do the separating.
- The few sections that *are* visually contained (stat block, methodology
  diagram, CTA) use a card/panel treatment to signal "this is a unit," while
  plain text+grid sections flow directly into the black background.

### Globify rule
- Don't add `border-t`/background-color changes between every section. Use
  them sparingly — `LogoCloud` (`border-y`) and `Footer` (`border-t`) are the
  only current boundary lines, and that should stay true: boundaries mark
  *category* changes (into/out of the social-proof strip, into the footer),
  not every section.
- Sections that deserve a contained "panel" treatment (diagram sections, CTA)
  should wrap in `GlassCard` the way `Cta` already does — this is the signal
  for "this is a distinct unit" instead of a literal divider line.

---

## 17. Creative Elements — New Patterns for Globify

These are structural ideas worth adopting from the reference, expressed
entirely in Globify's existing vocabulary (glass cards, 20px/pill radius,
orange-on-black, `fadeUp`/`staggerContainer` motion). None of these exist yet
in `/sections` — they're specified here so they're built consistently when
they do.

### 17.1 Stat tile (exists — `sections/stats.tsx`)
Already matches the reference pattern: big `AnimatedCounter` number in
orange, small muted label below, triggered by `react-intersection-observer`.
No changes needed; use as the template for any future metrics block.

### 17.2 Phase / process timeline (new)
A horizontal sequence of numbered nodes (icon-in-circle, `bg-primary/10`
well, 20px-radius-family) connected by a thin `border-primary/20` line,
alternating caption position above/below on desktop, stacking to a single
vertical column on mobile. Reuse `GlassCard`-style panels for each node's
caption, motion via `staggerContainer` left-to-right, and — per §14 — draw
the connector line with a GSAP `ScrollTrigger` + `strokeDashoffset` reveal
rather than a static line.

### 17.3 Capability radar (new)
An SVG polygon chart (5–6 axes) rendered in `--primary` at low fill-opacity
with a bright stroke, axis labels in `text-muted-foreground`, housed inside a
`GlassCard`. Use for a future "platform coverage" or "compliance readiness"
visualization. Animate the polygon's `stroke-dasharray` on scroll-into-view
(GSAP), not a Framer Motion scale-in — matches the "teach the shape"
principle in §14.

### 17.4 Partner / ecosystem grid (new)
A `grid-cols-2 sm:grid-cols-3` set of `GlassCard`s, each holding a category
label and 2–3 small logo/wordmark chips (reuse the `Marquee` component's
typographic-logo treatment from `LogoCloud`, scaled down, inside a card
instead of a scrolling strip). Good fit for a future "Integrations" or
"Ecosystem" section, inserted per §15's ordering (as social proof, near
`Testimonials`).

### 17.5 Dotted CTA texture (new — see §13)
`.bg-dots`, applied only inside the final `Cta` `GlassCard`, layered under
the existing `GridBackground`. This is the one place allowed to combine grid
+ glow + dots — everywhere else stays to one or two of the three layers,
preserving the "rare = special" effect the reference relies on for its own
closing moment.

---

## Quick Reference

| Decision | Answer |
|---|---|
| New card? | Use `GlassCard`, `rounded-[20px]`, no bespoke `div` |
| New button? | Primary pill or outline pill only — no third species |
| New section glow? | Only at hero + final CTA; elsewhere `glow={false}` |
| New section padding? | `py-24 sm:py-32` (or `py-32 sm:py-40` for diagrams) |
| New accent color? | There isn't one — orange only, vary via opacity |
| New shadow? | Don't — use border/glow instead (CTA buttons: soft orange glow only) |
| New entrance motion? | `fadeUp` + `staggerContainer`, ease `[0.16, 1, 0.3, 1]` |
| New diagram motion? | GSAP `ScrollTrigger` + path/stroke reveal, not Framer scale-in |
| Nested radius inside a 20px card? | One step down: `rounded-xl` / `rounded-2xl` |
