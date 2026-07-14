# Globify — Premium UI Conversion (v2 Design Spec)

**No code in this document.** This is the visual/interaction spec that converts
`ux-wireframes.md`'s structure into a high-fidelity UI at the quality bar of
Stripe, Linear, Apple, and Vercel. `ux-wireframes.md`'s purpose / goal /
emotion / hierarchy / interaction content stays valid unchanged — this
document is the layer on top that decides how it *looks and feels*.

This supersedes `design.md`'s color, shadow, and background-treatment
sections (§2, §9, §13 there), which were written for an all-dark system.
Everything else in `design.md` — radius family, card-species discipline,
button-species discipline, `fadeUp`/stagger motion pattern, "one accent
color" rule — still holds and is inherited here, not replaced.

---

## 0. North Star

Four references, four specific things borrowed from each — not their look,
their *discipline*:

- **Stripe** — card craftsmanship. Soft shadows, hairline borders, generous
  padding, nothing ever touches the edge of its container by accident.
- **Linear** — restraint. One accent color, tracked-out micro-labels, snappy
  (not slow) motion, confidence through omission rather than decoration.
- **Apple** — scale and cinema. Type sized to command a full viewport, hero
  moments that breathe, product visuals treated with weight and tilt, not
  flat screenshots.
- **Vercel** — precision. Grid discipline, adaptive chrome (nav that changes
  state), monospace used as a deliberate technical accent, zero visual noise.

"Luxurious" here means: **fewer elements, each one considered.** Every card,
shadow, and motion value below is deliberately narrow — a short, closed list,
not a flexible toolkit. Premium products constrain themselves; that's what
makes them feel expensive instead of assembled.

---

## 1. The Big Shift — a Three-Zone System

The brief says "Dark Hero, Light Content." Read literally that's two zones —
but a hero-dark / everything-else-light page has no closing moment; it just
stops. Stripe, Linear, and Vercel all solve this the same way: **bookend the
light content between two dark passages.** The Final CTA and Footer become a
second dark zone, mirroring the hero, so the page opens and closes on the
same note instead of trailing off in white.

```
┌─────────────┐
│   DARK       │  Hero                          ← opening statement
├─────────────┤
│              │  Logo Cloud
│              │  Features
│    LIGHT      │  Stats (dark card, contained — see §10.5)
│              │  How It Works
│              │  Testimonials
│              │  Pricing
│              │  FAQ
├─────────────┤
│   DARK       │  Final CTA + Footer            ← closing statement
└─────────────┘
```

This is the single highest-leverage decision in this document — it's what
reads as "designed" rather than "a dark hero was bolted onto a light
template." Everything else below serves this shape.

---

## 2. Color System

### Dark zone (Hero, Final CTA, Footer)
| Token | Value | Role |
|---|---|---|
| `surface` | `#070707` | Page background |
| `surface-raised` | `#0f0f0f` | Contained panels (glass cards) |
| `text-primary` | `#FFFFFF` | Headlines |
| `text-secondary` | `rgba(255,255,255,0.65)` | Body copy |
| `border` | `rgba(255,255,255,0.08)` | Hairline separators |
| `accent` | `#FF6B00` | Sole accent, unchanged |

### Light zone (everything between the two dark passages) — new
| Token | Value | Role |
|---|---|---|
| `surface` | `#FAFAF9` | Page background — *not* pure white; a warm near-white avoids glare and reads less clinical |
| `surface-raised` | `#FFFFFF` | Card surface — the white-on-off-white step is what gives cards their lift, before any shadow is even applied |
| `text-primary` | `#0A0A0A` | Headlines — never pure `#000`, which is harsher than necessary at this scale |
| `text-secondary` | `#6B6B6B` | Body copy |
| `border` | `rgba(10,10,10,0.08)` | Hairline card borders |
| `accent` | `#FF6B00` | Same accent — usage rule below |

### The one cross-zone rule that matters most
Orange **never becomes a fill for large surfaces**, in either zone. It's a
color for small, high-impact things: button fills, icon strokes, numbers,
underlines, focus rings, a single ring around a highlighted card. The moment
orange covers more than roughly a button-sized area, it stops reading as
"accent" and starts reading as "themed template." This rule is stricter on
the light zone specifically — saturated orange on white is much more prone
to looking plasticky than the same orange glowing on black.

---

## 3. Typography

Larger and more confident than the previous all-dark system, with a
deliberate weight/size shift between zones — white-on-black already carries
more contrast than black-on-white at equal size, so light-zone headlines can
sit slightly smaller and still feel equally dominant. Sizes below are
desktop; scale down proportionally per the responsive notes in
`ux-wireframes.md`.

| Role | Zone | Size | Weight | Tracking | Notes |
|---|---|---|---|---|---|
| Hero headline | Dark | 88–104px | 600 | −0.02em | Apple-hero scale — bigger than a typical SaaS hero; this is the one moment the page is allowed to be loud |
| Section headline | Light | 56–64px | 600 | −0.01em | Two-line wraps still fine, per `design.md` §3 |
| Dark-zone section headline (Final CTA) | Dark | 56–64px | 600 | −0.01em | Matches light section headline size — keeps the bookends visually paired |
| Stat number | Dark (contained card) | 56–64px | 600 | 0 | Rivals section headline; orange |
| Card title | Light | 19–20px | 500 | 0 | Slightly larger than the old 18px — light-zone cards read more editorial |
| Body copy | Light | 17–18px | 400 | 0 | Up from 14–16px — Stripe/Apple/Linear all favor larger body copy on light backgrounds than on dark dashboards |
| Body copy | Dark | 15–16px | 400 | 0 | Kept smaller than light-zone body — dark backgrounds support denser text without fatigue |
| Eyebrow / micro-label | Both | 13px | 500 (not semibold) | 0.08em | Lighter weight than the old system's eyebrow — one notch more restrained, closer to Linear's label treatment |

---

## 4. Whitespace Doctrine

"Premium whitespace" = roughly **1.4–1.6×** `design.md`'s existing rhythm.
Whitespace is itself doing branding work here — it's the fastest visual cue
that separates "template" from "designed."

| Context | Old (`design.md`) | New |
|---|---|---|
| Standard section padding | `py-24 sm:py-32` | `py-32 sm:py-40` |
| Hero top padding | `pt-40 sm:pt-48` | `pt-48 sm:pt-56` |
| Card internal padding | `p-6` | `p-8 sm:p-10` |
| Section header → content gap | `gap-16` | `gap-20 sm:gap-24` |

The eyebrow → headline → description triplet keeps its **tight** internal
spacing (`gap-4`, unchanged) — the doctrine is generous space *between*
blocks, not inside a single block of related text. Loosening that triplet
would make the page feel disconnected rather than spacious.

---

## 5. Elevation Model

### Light zone — shadows replace glow (new)
This is the biggest technical departure from `design.md`, which banned
`box-shadow` outright because it's invisible on `#070707`. On the light zone,
shadow *is* the primary depth cue. Kept to two steps only, to avoid the
"everything has a random shadow" material-design sprawl:

| Step | Use | Character |
|---|---|---|
| `shadow-resting` | Card at rest | Very soft, barely visible — large blur (~24px), low opacity (~4–6%), warm dark-gray (not pure black) |
| `shadow-hover` | Card/button hover, raised elements | Larger blur (~40px), still low opacity (~8–10%), same warm-gray tint |

Every light-zone card combines **both** a hairline border *and* a resting
shadow — the combination (not either alone) is what makes Stripe/Linear
cards read as "engineered." Border alone looks flat; shadow alone looks
untethered.

### Dark zone — glow, tightened
Keep `design.md`'s glow-based depth model, but with a stricter budget than
before: **one glow bloom per dark zone**, not one per section. Hero gets a
single bloom behind the headline; Final CTA gets a second, matching bloom.
No other dark-zone element (cards, icon wells) gets its own glow — icon
wells stay a flat `accent/10` tint, no radial effect. This is a tightening
of `design.md` §8's existing "glow is a beat, not wallpaper" principle, now
enforced as a hard per-zone cap rather than a per-section judgment call.

---

## 6. Buttons

Primary and secondary button *species* are unchanged from `design.md` §12 —
still exactly two. What's new is zone-specific tactility:

**Primary (both zones):** solid `accent` fill, fully rounded, plus:
- A 1px inner top highlight at low white opacity — subtle "pressed glass"
  tactility, a Stripe/Apple signature that reads as quality at close range
  without being visible as a distinct "effect."
- **Dark zone:** soft orange glow beneath, tightened tighter/smaller than a
  typical CSS glow shadow — a close, crisp bloom, not a diffuse halo.
- **Light zone:** no glow (orange glow on white looks muddy) — a small,
  cool-toned resting shadow only; the orange fill itself carries the visual
  weight without extra effects.
- **Magnetic hover** (desktop only): the button subtly translates toward the
  cursor within a small radius as the pointer approaches — a Linear/Vercel
  signature move. Disabled entirely on touch devices, where it has no
  meaning.
- **Press state:** scale to 0.97 with a spring, not a linear transition —
  tactile, not mechanical.

**Secondary:**
- Dark zone: unchanged glass-outline treatment from `design.md`.
- Light zone: outline in `text-primary` at low opacity, fills to a faint
  gray on hover. **Never orange** — reserving orange exclusively for primary
  actions is what keeps a visitor's eye finding the one thing that matters
  on a page with multiple CTAs (nav, hero, pricing, final CTA).

---

## 7. Cards — the Light Zone's Signature Component

This is the component the whole light zone is built from — Features,
Testimonials, and Pricing all render through the same card species (system
discipline, per `design.md` §11).

- White surface (`surface-raised`) on the off-white page background — the
  color-step *is* the primary elevation cue, reinforced by `shadow-resting`.
- Hairline border (`rgba(10,10,10,0.08)`).
- Generous padding: `p-8 sm:p-10`.
- Radius: unchanged 20px family from `design.md` §7 — this is one of the few
  values that carries through both zones untouched, and it's deliberate:
  consistent radius is one of the strongest "this is one system" signals
  across a light/dark split.
- Icon wells: `accent` at 8–10% background tint with an `accent`-stroked
  icon — the light-zone equivalent of the dark zone's `accent/10` treatment,
  recalibrated so it doesn't look chalky on white.
- **Hover:** lift only — `translateY(-4px)` + `shadow-resting → shadow-hover`
  + border darkens fractionally toward `text-primary` at low opacity. No
  scale transform, ever — premium products lift a card toward the viewer,
  they don't zoom it, which reads as a cheaper, more "web-template" motion.

---

## 8. Micro-interactions Catalogue

A short, closed list — the whole "elegant micro-interactions" budget for the
site:

1. **Adaptive nav.** Transparent over the dark hero; once scrolled past the
   hero threshold, it crossfades (300ms) into a light, blurred, bordered
   pill — chrome that changes state with the page is an Apple/Linear
   signature and is the single most "engineered-feeling" detail available
   for the cost of implementing it.
2. **Card hover lift** — spring physics (stiffness ~300, damping ~25), not a
   linear ease. See §7.
3. **Magnetic primary buttons** — see §6. Desktop only.
4. **Count-up numbers** — ease-out deceleration into the final value
   (odometer feel), not a linear tick. Already the right *trigger* mechanism
   in the current build (`react-intersection-observer` + `CountUp`); this is
   a refinement to the easing curve, not the trigger.
5. **Accordion (FAQ)** — height spring-animates open; chevron rotates 180°
   with a very slight overshoot, not a hard stop.
6. **Underline draw** — nav/footer link hover draws an underline left-to-right
   (width `0 → 100%`), rather than an opacity fade. Small, cheap, very
   "Linear."
7. **The seam** — where the dark hero meets the first light section, the
   light content's top edge casts a soft shadow *upward* into the dark zone
   (like a sheet of paper resting on a dark table), and the hero's glow
   bloom is allowed to bleed a few pixels past the boundary. This turns a
   hard color cut into a considered transition — see §9.
8. **Marquee pause-on-hover** — the logo strip pauses precisely under the
   cursor and resumes with easing, never an abrupt stop/start.
9. **Product preview tilt** — the hero's dashboard mockup tilts subtly
   (4–6° max) toward the cursor on hover, desktop only — an Apple
   product-page signature, used exactly once (hero only, not repeated
   elsewhere, so it stays special).

Nothing outside this list. If a future addition doesn't fit one of these
nine patterns, it should be questioned before being added — the "elegant"
in "elegant micro-interactions" comes from the list being short enough to
memorize.

---

## 9. The Seam — Hero → Light Content

Worth its own section because it's the page's single highest-risk moment for
looking cheap: a hard color cut between a black hero and a white section
reads like two different templates stitched together if left unconsidered.

Treatment:
- The light section's container gets a soft shadow on its **top edge only**,
  cast upward into the dark zone above it — establishes that the light
  content is a distinct, raised layer sitting in front of the dark
  backdrop, not just a color swap.
- The hero's single glow bloom (§5) is positioned low enough in the hero
  that its falloff visually bleeds a few pixels across the seam — the two
  zones share a moment of light at the boundary instead of meeting at a
  cold, precise line.
- No gradient band, no diagonal cut, no wave shape at the seam — those are
  exactly the "trying too hard" transition effects this quality bar avoids.
  The seam should be *felt* (soft shadow, shared glow) more than *seen* (an
  explicit graphic).
- The closing seam (light content → Final CTA's dark zone) mirrors this
  exactly, in reverse, so the page's two transitions feel like one designed
  system rather than two separate solutions.

---

## 10. Section-by-Section Conversion

Each of `ux-wireframes.md`'s 11 sections, assigned to a zone and given its
one standout "premium detail" — every section should have exactly one thing
that elevates it beyond correct-but-generic, not a pile of effects.

**10.1 Navigation** — Adaptive chrome (§8.1) *is* this section's premium
detail; nothing else about it should call attention to itself.

**10.2 Hero** — Dark. 88–104px headline, one glow bloom, magnetic primary
CTA, tilt-on-hover product preview. Standout detail: the product preview
tilt — it's used nowhere else on the page, which is what makes it feel
special here.

**10.3 Logo Cloud** — Light, the first section after the seam. Logos render
in `text-secondary` gray, deliberately **not** orange — keeping orange
exclusive to CTAs/numbers is what preserves its meaning everywhere else.
Standout detail: pause-on-hover marquee (§8.8).

**10.4 Features** — Light. Full card treatment from §7. Standout detail: the
icon well's soft orange tint — the only color note in an otherwise
monochrome grid, so it does real wayfinding work (fast visual scan) instead
of decorating.

**10.5 Stats** — Light page zone, but each stat group sits inside a single
**contained dark card** (not a full-bleed dark section) — this is how the
page gets a punctuation beat without breaking the two-zone rule from §1.
Numbers in `accent` at 56–64px, the largest text in the light zone. Standout
detail: the dark-card-in-a-light-page contrast itself is the effect; no
additional glow or animation needed on top of it.

**10.6 How It Works** — Light. Connector between step nodes is a plain
`accent`-colored line (no gradient — see §11). Node number badges get a thin
`accent` ring. Standout detail: the ring, not a filled badge — a filled
orange circle at every node would blow the "small accent surfaces only"
rule (§2) four times in one section.

**10.7 Testimonials** — Light. Identical card species to Features — no
unique treatment here by design; consistency across sections is itself the
premium signal, and testimonials shouldn't visually compete with the proof
sections around them.

**10.8 Pricing** — Light. The recommended tier gets a faint `accent` tint on
its card background (roughly 4% — barely perceptible as color, more as
"warmth") plus an `accent`-colored border, **not** a solid orange card. A
saturated color fill at this size is exactly where the "cheap SaaS
template" feeling creeps in; a whisper of tint plus a crisp border reads
premium instead.

**10.9 FAQ** — Light, single narrow column (per `ux-wireframes.md`).
Standout detail: the spring-height accordion open/close (§8.5) — the one
section on the page where a visitor directly manipulates the UI, so it's
worth making that single interaction feel considered.

**10.10 Final CTA** — Dark, the second bookend. Mirrors the hero's glow
bloom and magnetic button exactly — deliberate repetition, not a new
treatment, so the close visually rhymes with the open.

**10.11 Footer** — Dark, continues directly from Final CTA with no visible
seam between them — the two read as one closing block. Lowest visual
weight on the page by design (§ux-wireframes.md's footer emotion is
"neutral/administrative") — no glow, no card treatment, plain muted text and
links.

---

## 11. Minimal Gradients — the Whole Budget

An explicit, closed list. Nothing exists beyond these three, anywhere on the
site:

1. Hero headline's accent-word text-fill gradient (two-stop orange).
2. Hero glow bloom (radial, orange, low opacity).
3. Final CTA glow bloom (radial, orange, low opacity) — mirrors #2.

No card gradients. No button gradients. No background mesh/aurora gradients.
No gradient borders. No gradient icon fills. If a future section seems to
need a gradient to feel finished, that's a signal to add contrast, shadow,
or whitespace instead — not to extend this list.

---

## 12. Guardrails — What Not to Do

Premium is as much about restraint as it is about polish:

- **No glassmorphism in the light zone.** Blur + transparency is correct for
  the dark zone's glass cards (`design.md`); on white it reads dated and
  slightly cheap. Light-zone cards are opaque, solid, shadow-elevated.
- **No second accent color**, ever, for charts, status states, or category
  tags — differentiate with weight/opacity/size instead.
- **No shadow harsher than `shadow-hover`** (§5) anywhere.
- **No bounce/elastic easing.** Springs should feel tight and controlled
  (damping ≥ 25), never cartoonish overshoot.
- **No auto-playing carousels or auto-advancing content** — every motion on
  the page is either continuous-ambient (marquee) or user/scroll-triggered,
  never a timer forcing content to change under a reading visitor.
- **No more than 3 gradient instances total** (§11).
- **No orange surface larger than a button** (§2) — the single rule most
  likely to get violated by accident, and the one most responsible for a
  "themed template" feeling if it is.

---

## Relationship to Other Docs

- `ux-wireframes.md` — structure, purpose, hierarchy, interaction intent per
  section. Unchanged by this document; this is the visual layer on top of
  it.
- `design.md` — original all-dark system. Superseded here: §2 (color), §9
  (shadows), §13 (background treatment). Still authoritative here: §6
  (grid), §7 (radius family), §11 (card-species discipline), §12
  (button-species discipline), §14 (motion easing curve, refined in §9
  above with tightened durations).

No implementation yet — this is the spec to build against once code work
starts.
