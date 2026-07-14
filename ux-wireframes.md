# Globify — UX Wireframes & Interaction Spec

This is a UX document, not a visual design document. No color, type, spacing,
or styling decisions live here (see `design.md` for that layer). Everything
below is about **structure, purpose, hierarchy, and behavior** — what each
section is for, what it asks the user to feel and do, and how it holds
together at three viewport widths.

Wireframes are intentionally low-fidelity: boxes and labels only. Box size in
the ASCII diagrams is a rough proxy for relative visual weight/priority, not a
literal layout spec.

**Breakpoint assumptions:** Desktop ≥ 1024px · Tablet 640–1023px · Mobile < 640px.

---

## 0. Page-Level User Journey Map

Before the section-by-section breakdown, the arc the whole page is designed
to move a visitor through:

| Stage | Section(s) | Visitor mental state entering | Visitor mental state leaving |
|---|---|---|---|
| Hook | Hero | "Another SaaS landing page?" | "Okay, what is this exactly?" |
| Validate | Logo Cloud | Skeptical | "Real companies use this" |
| Explain | Features | Curious | "I understand what it does" |
| Prove | Stats | Cautiously interested | "The numbers back up the claims" |
| Reassure | How It Works | Interested but wary of effort | "This looks doable, not a big lift" |
| Trust | Testimonials | Wary of vendor bias | "People like me vouch for this" |
| Commit | Pricing | Considering | "I can see myself paying for this" |
| De-risk | FAQ | Hesitant, has objections | "My concerns are answered" |
| Convert | Final CTA | Ready or almost ready | Clicks, or leaves with a clear next step |
| Orient | Footer | Done reading | "I know how to find this again / dig deeper" |

Each section below exists to move the visitor exactly one stage forward. No
section should try to do two stages at once (e.g. Features should not also
try to close the sale — that's Pricing's and the Final CTA's job).

---

## 1. Navigation Bar

**Purpose**
Persistent orientation and escape hatch. Lets a visitor jump straight to the
section that answers their specific question instead of forcing linear
scroll, and gives always-available access to the primary conversion action.

**Goal**
Get the visitor to either (a) jump to the section most relevant to their
intent, or (b) start the signup flow, without ever feeling lost.

**Expected user emotion**
Oriented. Reassured that they can always find their way back to the top or to
the CTA — reduces "scroll anxiety."

**Primary CTA**
"Get started" (or equivalent) — always visible, always reachable.
Secondary: "Sign in" for returning users (lower visual weight).

**Content hierarchy**
1. Logo (identity / home anchor)
2. Primary CTA button
3. Nav links (in-page anchors)
4. Secondary "Sign in" action

**Interaction**
- Persistent on scroll (sticky/fixed) — never disappears, since it's the
  visitor's safety net for the whole session.
- Nav links are anchor jumps, not page navigations — instant, no reload.
- Below desktop, links collapse into a menu triggered by an icon; opening it
  is a direct tap target, not a hover-reveal (hover doesn't exist on touch).
- Menu closes on link tap, outside tap, or CTA tap — never requires a second
  action to get back to the page.

**Why this section exists**
Long single-page scrollers lose visitors who arrive with one specific
question ("does this have compliance features?"). A persistent nav is the
pressure-release valve — it converts "I don't see what I need" into "let me
jump to Platform" instead of "let me leave."

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────────────┐
│ [Logo]      Link   Link   Link   Link          [Sign in] [Get started] │
└──────────────────────────────────────────────────────────────────┘
```

### Wireframe — Tablet
```
┌──────────────────────────────────────────────┐
│ [Logo]                              [≡ Menu]  │
└──────────────────────────────────────────────┘
        (links + CTA move into the menu;
         nav bar keeps only logo + trigger)
```

### Wireframe — Mobile
```
┌────────────────────────┐
│ [Logo]          [≡]    │
└────────────────────────┘
   tap [≡] →
┌────────────────────────┐
│ Link                    │
│ Link                    │
│ Link                    │
│ Link                    │
│ ──────────────          │
│ [ Sign in ]              │
│ [ Get started ]          │
└────────────────────────┘
```

---

## 2. Hero

**Purpose**
Answer, in under five seconds, the three questions every visitor has: *what
is this, who is it for, why should I keep scrolling.*

**Goal**
Get a qualified visitor to either take the primary action immediately (low
percentage, high intent) or keep scrolling with a clear frame for everything
that follows (high percentage, the real job of this section).

**Expected user emotion**
Clarity and mild intrigue. Not excitement yet — that's earned later. The
feeling should be "this is relevant to me, tell me more," not "wow."

**Primary CTA**
"Start for free" (commit action). Secondary: "Watch demo" (low-commitment
alternative for visitors not ready to act).

**Content hierarchy**
1. Headline (the single positioning claim)
2. Supporting subheadline (who it's for + what it replaces/solves)
3. Primary + secondary CTA pair
4. Trust micro-signal (small status/credibility badge above headline)
5. Product preview (visual proof the product is real, not vaporware)

**Interaction**
- No scroll-jacking, no auto-playing video — hero must render its full
  message before any animation completes, since first-time visitors decide
  to stay or leave here.
- Primary and secondary CTA are visually and tap-distinctly separated so a
  visitor can't mis-tap the lower-commitment option when they meant the
  higher one, or vice versa.
- Product preview is inert (not interactive) at this stage — its job is
  credibility, not exploration. Interactivity here would compete with the
  CTA for attention.

**Why this section exists**
It's the only section guaranteed 100% of visitors will see. Every later
section is optional (visitors bounce at different depths); the hero alone
carries the responsibility of making the *next* scroll happen.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                     [ status badge ]                      │
│                                                            │
│                 Headline line one                         │
│                 Headline line two                         │
│                                                            │
│            Supporting subheadline, one to two lines        │
│                                                            │
│         [ Primary CTA ]      [ Secondary CTA ]             │
│                                                            │
│        ┌────────────────────────────────────────┐         │
│        │        Product / dashboard preview       │        │
│        └────────────────────────────────────────┘         │
└──────────────────────────────────────────────────────────┘
        (centered column, generous top space, everything
         above the fold except possibly the preview's bottom edge)
```

### Wireframe — Tablet
```
┌────────────────────────────────────┐
│           [ status badge ]          │
│         Headline (wraps to 2 lines) │
│        Supporting subheadline       │
│     [ Primary CTA ] [ Secondary ]    │
│  ┌────────────────────────────┐     │
│  │   Product preview (scaled)  │     │
│  └────────────────────────────┘     │
└────────────────────────────────────┘
```

### Wireframe — Mobile
```
┌──────────────────────┐
│   [ status badge ]    │
│  Headline (3–4 lines) │
│  Subheadline          │
│  [ Primary CTA ]       │  ← full width, stacked
│  [ Secondary CTA ]     │  ← full width, stacked, below not beside
│ ┌────────────────────┐│
│ │  Product preview    ││
│ │  (full width)        ││
│ └────────────────────┘│
└──────────────────────┘
     CTAs stack vertically, primary on top — on mobile,
     side-by-side buttons shrink tap targets below comfort.
```

---

## 3. Logo Cloud (Social Proof Strip)

**Purpose**
Fast, low-effort credibility injection immediately after the hero, before
the visitor has invested any real reading time.

**Goal**
Neutralize the "is this a real company" skepticism in under two seconds of
attention, without asking the visitor to stop and read anything.

**Expected user emotion**
Passive reassurance — this section should barely register as "content" and
more as ambient credibility, like a watermark of legitimacy.

**Primary CTA**
None. This section has zero interactive ask — introducing one would slow the
visitor down at the exact moment they should be gliding through.

**Content hierarchy**
1. Small framing label ("trusted by...")
2. Logo row (all logos equal weight — no single company should dominate)

**Interaction**
- Continuous, slow, ambient horizontal motion — signals "there are more than
  fit on screen" without requiring a tap/swipe to discover that.
- Motion pauses on hover/focus (desktop) so a curious visitor can actually
  read a name that interests them — ambient motion should never fight a
  visitor's intent to inspect something.
- No motion-fighting on touch devices — swipe, if implemented, must not
  conflict with the page's own vertical scroll.

**Why this section exists**
It's the shortest possible detour between "I'm intrigued" (end of hero) and
"tell me what this does" (Features) — a credibility beat that costs the
visitor almost no attention but meaningfully lowers skepticism going into the
next, more demanding section.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│              trusted by companies like...                 │
│  [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo] [Logo]  │
└──────────────────────────────────────────────────────────┘
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│      trusted by companies       │
│  [Logo] [Logo] [Logo] [Logo]…   │  ← same strip, narrower viewport window
└────────────────────────────────┘
```

### Wireframe — Mobile
```
┌────────────────────┐
│  trusted by...       │
│ [Logo][Logo][Logo]…  │  ← strip scrolls/drifts, edges fade
└────────────────────┘
   Label stays; logo count visible at once shrinks,
   motion carries the rest — no grid reflow needed.
```

---

## 4. Features (Platform)

**Purpose**
Convert "I'm intrigued" into "I understand what this actually does." This is
the visitor's first real content commitment.

**Goal**
Let a visitor self-serve the answer to "does this solve *my* specific
problem" by scanning, not reading — most visitors will skim titles first and
only read a description if the title matches their need.

**Expected user emotion**
Growing confidence / recognition — "yes, that's exactly the thing I've been
dealing with."

**Primary CTA**
None inline (this section informs, it doesn't convert) — but every card
should make the *next* action (keep scrolling toward proof) feel natural by
not overloading with dense paragraphs.

**Content hierarchy**
1. Section label + headline + subheadline (frames "everything below is the
   platform's capability set")
2. Individual capability titles (scannable first pass)
3. Individual capability descriptions (second pass, only for cards a visitor
   already cares about)
4. Icon per card (fast visual categorization, secondary to the title text)

**Interaction**
- Grid, not carousel — a visitor evaluating "does this have X" needs to scan
  everything, not wait through a slideshow.
- Cards are not required to be clickable; if they link to deeper docs, that's
  an enhancement, not a dependency — the section must work as pure
  information at a glance.
- Reveals as the visitor scrolls into view, staggered — reinforces "there are
  several distinct capabilities" rather than a single wall of content
  appearing at once.

**Why this section exists**
It's the substance behind the hero's claim. Skipping straight from hero to
proof (Stats) would leave "prove *what*, exactly?" unanswered — Features
defines the *what* that Stats and Testimonials later validate.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│              label · headline · subheadline               │
│                                                            │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│  │ icon       │  │ icon       │  │ icon       │             │
│  │ Title      │  │ Title      │  │ Title      │             │
│  │ description│  │ description│  │ description│             │
│  └───────────┘  └───────────┘  └───────────┘              │
│  ┌───────────┐  ┌───────────┐  ┌───────────┐              │
│  │ …          │  │ …          │  │ …          │             │
│  └───────────┘  └───────────┘  └───────────┘              │
└──────────────────────────────────────────────────────────┘
                     (3 columns × 2 rows)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│     label · headline · sub       │
│  ┌────────────┐ ┌────────────┐  │
│  │ icon/Title  │ │ icon/Title  │  │
│  └────────────┘ └────────────┘  │
│  ┌────────────┐ ┌────────────┐  │
│  │ …           │ │ …           │  │
│  └────────────┘ └────────────┘  │
│  ┌────────────┐ ┌────────────┐  │
│  │ …           │ │ …           │  │
│  └────────────┘ └────────────┘  │
└────────────────────────────────┘
              (2 columns × 3 rows)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  label · headline      │
│  subheadline           │
│ ┌────────────────────┐│
│ │ icon / Title / desc  ││
│ └────────────────────┘│
│ ┌────────────────────┐│
│ │ icon / Title / desc  ││
│ └────────────────────┘│
│         … (×6)          │
└──────────────────────┘
   single column — order becomes the priority ranking,
   most broadly-relevant capability listed first
```

---

## 5. Stats

**Purpose**
Shift the conversation from "here's what it does" (Features) to "here's what
it *achieves*" — qualitative capability becomes quantitative outcome.

**Goal**
Give skeptical, data-driven visitors (common in B2B buying committees) a
citable number they can mentally (or literally) carry into an internal
pitch.

**Expected user emotion**
Credibility spike — the sharpest trust jump on the page. Numbers read as
harder evidence than prose, even when both are equally unverified at a
glance.

**Primary CTA**
None. Like Features, this section's job is persuasion-by-fact, not
conversion — inserting a CTA here would undercut the "we're just stating
facts" tone that makes stats persuasive.

**Content hierarchy**
1. The numbers themselves (largest, first-scanned element)
2. Labels directly beneath each number (context — a number alone is
   meaningless without its unit/claim)
3. Section framing (label/headline) — lowest priority; a visitor should be
   able to get the point from the numbers alone even if they skip the
   headline entirely

**Interaction**
- Numbers animate from zero when scrolled into view — the count-up motion
  draws the eye and gives the number a moment of "watch this be true" rather
  than being static, easily-skimmed-past text.
- Animation triggers once only — repeating on every re-scroll would cheapen
  the effect into a gimmick.
- No hover states, no click targets — this section is read-only proof.

**Why this section exists**
Features convinces a visitor the product is *relevant*; Stats convinces them
it *works*. Skipping this section would leave the page making claims with no
external validation until Testimonials, which is a weaker, more anecdotal
form of proof — Stats is the quantitative bridge between capability and
credibility.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│    [ number ]      [ number ]     [ number ]    [ number ] │
│     label            label          label          label   │
└──────────────────────────────────────────────────────────┘
                (4 across, equal weight, no card containers —
                 numbers float directly on the page)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│  [ number ]        [ number ]    │
│   label              label       │
│  [ number ]        [ number ]    │
│   label              label       │
└────────────────────────────────┘
                (2×2 grid)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│ [number]   [number]    │
│  label      label      │
│ [number]   [number]    │
│  label      label      │
└──────────────────────┘
   stays 2×2 even on mobile — going to a single column
   of 4 stacked numbers loses the "at a glance" comparison
   effect that makes a stat block feel like a dashboard
```

---

## 6. How It Works

**Purpose**
Answer the objection that follows proof: "okay, I believe it works — but how
much effort does it take *me* to get there?"

**Goal**
Make adoption feel like a short, finite, named sequence rather than an
open-ended integration project — reduce perceived effort, not just state
capability.

**Expected user emotion**
Relief / reduced anxiety. This section should lower perceived risk, not add
excitement — its job is to make "yes, but is it a lot of work" go away.

**Primary CTA**
None required inline — but this section should leave the visitor primed to
accept the next CTA they see, because "how much work is this" is usually the
last blocker before someone will click a signup button.

**Content hierarchy**
1. Step sequence and numbering (the visitor should be able to count "4 steps"
   at a glance before reading a single description)
2. Step titles (what happens at each stage)
3. Step descriptions (only read if a specific step raises a question)

**Interaction**
- Presented as an ordered, connected sequence (not a plain grid) — the
  connection between items is the point; four disconnected cards would read
  as four features, not four *steps*.
- Steps reveal in strict left-to-right / top-to-bottom order as scrolled into
  view — order must be reinforced by animation sequence, not just numbering,
  since numbering alone is easy to skim past.
- Not clickable/expandable — all four steps should be readable without
  interaction, since forcing taps to reveal each step would reintroduce the
  "how much effort" anxiety this section exists to remove.

**Why this section exists**
Proof (Stats) answers "does it work." This section answers "what happens to
*me* if I say yes." Without it, a visitor who believes the product works
might still bounce at Pricing simply because they have no mental model of
onboarding effort — this section pre-empts that specific, common objection.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                 label · headline · subheadline             │
│                                                            │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐    │
│  │ 01       │──▶│ 02       │──▶│ 03       │──▶│ 04       │   │
│  │ Title    │   │ Title    │   │ Title    │   │ Title    │   │
│  │ desc     │   │ desc     │   │ desc     │   │ desc     │   │
│  └─────────┘   └─────────┘   └─────────┘   └─────────┘    │
└──────────────────────────────────────────────────────────┘
           (connected left-to-right, sequence is explicit)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│   label · headline · subheadline │
│  ┌────────┐ ┌────────┐            │
│  │ 01      │ │ 02      │           │
│  │ Title    │ │ Title    │           │
│  └────────┘ └────────┘            │
│  ┌────────┐ ┌────────┐            │
│  │ 03      │ │ 04      │           │
│  │ Title    │ │ Title    │           │
│  └────────┘ └────────┘            │
└────────────────────────────────┘
   (2×2; sequence reads left-right, top-bottom —
    numbering carries the order once the single row breaks)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  label · headline       │
│ ┌────────────────────┐│
│ │ 01                    ││
│ │ Title                 ││
│ │ desc                  ││
│ └──────────┬──────────┘│
│             │ (connector)│
│ ┌──────────▼──────────┐│
│ │ 02                    ││
│ │ Title / desc           ││
│ └──────────┬──────────┘│
│             │            │
│            …(03, 04)      │
└──────────────────────┘
   vertical connector line replaces horizontal arrows —
   sequence remains unambiguous in a single column
```

---

## 7. Testimonials

**Purpose**
Replace "the company says this works" with "people like me say this works" —
the shift from vendor claims to peer validation.

**Goal**
Let a visitor find at least one quote from someone in a role/situation similar
to their own, making the proof feel personally applicable rather than generic.

**Expected user emotion**
Identification / trust — "someone with my job, at a company like mine, had my
exact problem and it worked out."

**Primary CTA**
None inline. Testimonials close the trust gap; they should not be
interrupted by a competing conversion ask mid-read.

**Content hierarchy**
1. The quote itself (largest text block, first read)
2. Attribution — name, role, company (validates the quote is a real person,
   not marketing copy; role is more important than name for a B2B visitor
   scanning for "someone like me")
3. Visual identity marker (avatar/initial) — lowest priority, a light touch
   of humanization rather than a core information element

**Interaction**
- All quotes visible without requiring interaction on desktop/tablet (grid),
  since forcing a visitor to click through a carousel to find "someone like
  me" adds friction to the exact section meant to reduce friction.
- If space forces a carousel on narrow viewports, it must be swipeable and
  show a clear "there are more" affordance (dots/peek of next card) — a
  visitor should never think there's only one testimonial.
- No auto-advancing carousel — a visitor mid-read should never have content
  change under them.

**Why this section exists**
Stats prove the product works in aggregate; Testimonials prove it worked for
a specific, relatable person. Buying committees weight peer validation
heavily precisely because vendor-supplied stats can be cherry-picked, while a
named person with a specific role puts (reputational) skin in the game.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                label · headline · subheadline              │
│  ┌───────────┐   ┌───────────┐   ┌───────────┐             │
│  │ " quote    │   │ " quote    │   │ " quote    │            │
│  │   text "   │   │   text "   │   │   text "   │            │
│  │            │   │            │   │            │            │
│  │ (o) Name    │   │ (o) Name    │   │ (o) Name    │            │
│  │     Role     │   │     Role     │   │     Role     │           │
│  └───────────┘   └───────────┘   └───────────┘             │
└──────────────────────────────────────────────────────────┘
                    (3 across, all visible at once)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│    label · headline · sub        │
│ ┌────────────┐ ┌────────────┐   │
│ │ " quote "    │ │ " quote "    │   │
│ │ (o) Name/Role │ │ (o) Name/Role │   │
│ └────────────┘ └────────────┘   │
│ ┌────────────┐                  │
│ │ " quote "    │   (3rd card       │
│ │ (o) Name/Role │    wraps alone)   │
│ └────────────┘                  │
└────────────────────────────────┘
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  label · headline       │
│ ┌────────────────────┐│
│ │ " quote text "        ││
│ │                        ││
│ │ (o) Name / Role        ││
│ └────────────────────┘│
│ ┌────────────────────┐│
│ │ " quote text "        ││
│ │ (o) Name / Role        ││
│ └────────────────────┘│
│        …(3rd stacked)   │
└──────────────────────┘
   stacked, not carouseled by default — preserves
   "all proof visible without interaction" principle
   even at narrow width, at the cost of scroll length
```

---

## 8. Pricing

**Purpose**
The section where browsing becomes deciding. Visitor moves from "this seems
good" to "which version of this is for me."

**Goal**
Get the visitor to self-select the correct tier as fast as possible and
either convert immediately (Starter — no-friction) or hand off to a
human-assisted path (Enterprise — high-friction, high-value deals shouldn't
self-serve).

**Expected user emotion**
Confidence, not sticker shock — the layout itself should make one option feel
like the obviously-recommended default, reducing decision fatigue.

**Primary CTA**
One CTA per tier, worded to match that tier's commitment level: low-friction
("start for free"), default ("start free trial" — the recommended tier gets
first-class visual treatment), high-friction ("talk to sales").

**Content hierarchy**
1. Tier name + price (the two facts a visitor compares first, across all
   tiers, before reading anything else)
2. The recommended tier's distinguishing marker (must be scannable in the
   same glance as the price row — it's *the* decision-shortcut for
   undecided visitors)
3. CTA button per tier
4. Feature list per tier (read only after a visitor has narrowed to one or
   two candidate tiers — this is confirmation, not discovery)

**Interaction**
- All tiers visible simultaneously for direct comparison — pricing is the
  one section where a visitor actively wants to cross-reference multiple
  options, so anything that hides tiers behind interaction (tabs, carousel)
  actively works against the section's purpose.
- Recommended tier is visually distinguished at rest, without requiring
  hover/interaction to discover — a visitor scanning quickly must not miss
  the suggested default.
- CTA buttons must be independently tappable/clickable without ambiguity
  about which tier they belong to, especially at narrow widths where tiers
  stack.

**Why this section exists**
Every prior section builds a case; Pricing is where the case must resolve
into a decision. Placing it after Testimonials (not before) is deliberate —
a visitor should feel *sold* before being asked to evaluate cost, not the
reverse.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                label · headline · subheadline               │
│  ┌───────────┐  ┌───────────────┐  ┌───────────┐           │
│  │ Starter    │  │ ★ Growth       │  │ Enterprise │          │
│  │ $ price     │  │   $ price       │  │ Custom     │          │
│  │ [ CTA ]     │  │   [ CTA ]        │  │ [ CTA ]     │          │
│  │ ───────     │  │   ───────        │  │ ───────     │          │
│  │ ✓ feature   │  │   ✓ feature       │  │ ✓ feature   │          │
│  │ ✓ feature   │  │   ✓ feature       │  │ ✓ feature   │          │
│  └───────────┘  └───────────────┘  └───────────┘           │
└──────────────────────────────────────────────────────────┘
        (middle tier raised/marked — "recommended" signal
         visible without interaction)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│     label · headline · sub        │
│ ┌──────────┐ ┌──────────┐         │
│ │ Starter    │ │ ★ Growth   │         │
│ │ [CTA]       │ │ [CTA]       │         │
│ └──────────┘ └──────────┘         │
│         ┌──────────┐             │
│         │ Enterprise │             │
│         │ [CTA]       │             │
│         └──────────┘             │
└────────────────────────────────┘
   (2 across, 3rd wraps — recommended tier still
    visually marked so it isn't lost in the reflow)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  label · headline       │
│ ┌────────────────────┐│
│ │ ★ Growth (recommended, ││
│ │   shown first)          ││
│ │ [ CTA ]                 ││
│ └────────────────────┘│
│ ┌────────────────────┐│
│ │ Starter                ││
│ │ [ CTA ]                 ││
│ └────────────────────┘│
│ ┌────────────────────┐│
│ │ Enterprise              ││
│ │ [ CTA ]                 ││
│ └────────────────────┘│
└──────────────────────┘
   recommended tier reordered to the top on mobile —
   a visitor who only reads the first stacked card
   should still land on the intended default
```

---

## 9. FAQ

**Purpose**
Catch and neutralize the specific, named objections that stop an
already-interested visitor from converting (integration concerns, contract
questions, compliance, migration risk).

**Goal**
Let a visitor find their one specific blocking question quickly, get a
direct answer, and return to the conversion path — without forcing everyone
else to read every answer.

**Expected user emotion**
Relief, specifically — "oh good, they already thought about that." This is a
narrower, more targeted emotion than Testimonials' broader trust-building.

**Primary CTA**
None inline (a "still have questions? contact us" link is acceptable as a
low-weight escape hatch for the unanswered edge case, but is not this
section's job to drive primary conversion).

**Content hierarchy**
1. Questions (all visible/scannable at once — a visitor should be able to
   read every question in a few seconds without opening any of them)
2. Answers (hidden until requested — only relevant to the visitor who
   already identified that specific question as their blocker)

**Interaction**
- Accordion pattern: one question expanded at a time by default is
  acceptable, but questions themselves must never be truncated or hidden —
  only *answers* collapse.
- Expand/collapse must be a single, obvious tap on the entire question row
  (not a tiny icon target) — this is a low-effort section and the
  interaction cost should match that.
- No auto-collapse of a previously opened answer when a visitor opens a new
  one is *not* required either way — either behavior is acceptable; what's
  not acceptable is more than one interaction step to reveal any single
  answer.

**Why this section exists**
Pricing asks for a decision; FAQ exists because a decision-ready visitor
often has exactly one lingering technical or contractual doubt. Without this
section, that doubt has nowhere to resolve except abandoning the page to
search externally — which is where conversions are lost.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                 label · headline · subheadline              │
│        ┌──────────────────────────────────────┐            │
│        │ Question one                      [▾]  │           │
│        │ Question two                      [▾]  │           │
│        │ Question three                    [▾]  │           │
│        │ Question four                     [▾]  │           │
│        │ Question five                     [▾]  │           │
│        └──────────────────────────────────────┘            │
└──────────────────────────────────────────────────────────┘
              (single centered column — narrower than
               the page's full content width, since
               this is a reading task, not a scanning grid)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│     label · headline · sub        │
│  ┌────────────────────────┐      │
│  │ Question one         [▾] │      │
│  │ Question two         [▾] │      │
│  │ Question three       [▾] │      │
│  │ Question four        [▾] │      │
│  │ Question five        [▾] │      │
│  └────────────────────────┘      │
└────────────────────────────────┘
   (same single-column pattern, narrower container)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  label · headline       │
│ ┌────────────────────┐│
│ │ Question one     [▾]  ││
│ │ Question two     [▾]  ││
│ │ Question three   [▾]  ││
│ │ Question four    [▾]  ││
│ │ Question five    [▾]  ││
│ └────────────────────┘│
└──────────────────────┘
   full-width tap target per question row —
   accordion pattern is unchanged, just full-bleed
```

---

## 10. Final CTA

**Purpose**
The last, highest-emphasis conversion ask, placed after every objection has
had a chance to be resolved.

**Goal**
Capture visitors who were persuaded earlier but weren't ready to act yet —
this is the "okay, now" moment placed at the natural end of the reading
journey, not a random early exit point.

**Expected user emotion**
Readiness / low-friction decisiveness — the section should feel like a clean,
confident closing statement, not a hard-sell.

**Primary CTA**
"Start for free" (primary, highest visual weight on the page alongside the
hero's). Secondary: "Talk to sales" for visitors whose FAQ-stage doubt was
"this needs a human conversation, not a self-serve signup."

**Content hierarchy**
1. Closing headline (short, declarative — restates the core promise one
   final time, not a new claim)
2. Supporting one-liner (reinforces who this is for, echoing the hero for
   visitors who scrolled fast and skipped straight here)
3. CTA pair

**Interaction**
- No new content or surprises — everything here should feel like a
  restatement, since introducing new information this late would create a
  new objection right before the exit point.
- Both CTAs equally easy to tap; this is not the place to visually bury the
  lower-commitment option, since some visitors genuinely need the
  human-assisted path and burying it loses them entirely.

**Why this section exists**
Visitors don't convert linearly — someone can be sold by Testimonials but
still scroll through Pricing and FAQ out of due diligence before acting. This
section exists as the designated place to act once due diligence is done,
so the visitor never has to scroll back up to find the button they meant to
click three sections ago.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│                                                            │
│              Closing headline, one to two lines            │
│                 Supporting one-liner text                  │
│                                                            │
│          [ Primary CTA ]     [ Secondary CTA ]              │
│                                                            │
└──────────────────────────────────────────────────────────┘
        (centered, contained panel — visually distinct as
         "the end of the argument" rather than another
         section blending into the scroll)
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│      Closing headline              │
│      Supporting line               │
│  [ Primary CTA ] [ Secondary CTA ]  │
└────────────────────────────────┘
```

### Wireframe — Mobile
```
┌──────────────────────┐
│  Closing headline (2–3 │
│  lines)                 │
│  Supporting line        │
│  [ Primary CTA ]         │  ← full width
│  [ Secondary CTA ]       │  ← full width, stacked below
└──────────────────────┘
```

---

## 11. Footer

**Purpose**
Catch-all orientation layer for visitors who reach the end without
converting — gives them every remaining path forward that isn't "click the
CTA."

**Goal**
Prevent a dead end. A visitor who scrolls this far without converting still
has intent; the footer's job is to give that intent somewhere to go
(documentation, contact, legal/trust info, social proof of an active
company).

**Expected user emotion**
Neutral/administrative — this section isn't trying to persuade, it's trying
to be quietly complete and trustworthy (a thin or missing footer reads as an
unfinished or untrustworthy site).

**Primary CTA**
None dominant — footer is intentionally low-emphasis. Individual links
(docs, contact, status page) are all peer-weighted utility actions, not
competing conversion asks.

**Content hierarchy**
1. Identity block (logo + one-line description) — re-confirms what the
   visitor just read about, for anyone who arrived here via a fast scroll or
   an internal link jump
2. Link categories (grouped by visitor intent: product, company, resources,
   legal) — grouping matters more than any individual link's position
3. Social links
4. Legal/copyright line — lowest priority, expected but rarely read

**Interaction**
- Plain links, no accordions or hidden content — a footer is a reference
  utility, so hiding anything behind interaction defeats its purpose.
- Grouped under clear category headers so a visitor scanning for one
  specific thing (e.g. "security") doesn't have to read every link.

**Why this section exists**
Not every visitor converts on this visit. The footer is the page's
acknowledgment of that reality — it exists to make sure a non-converting
visitor still leaves with a clear sense of legitimacy and a path to return
(bookmark-worthy docs, a contact route, visible legal/trust signals) rather
than a dead, closed-off ending.

### Wireframe — Desktop
```
┌──────────────────────────────────────────────────────────┐
│  [Logo]                Product   Company  Resources  Legal │
│  one-line description    link      link     link       link │
│  [social] [social]       link      link     link       link │
│                           link      link     link       link │
│  ────────────────────────────────────────────────────────  │
│  © year, all rights reserved                 tagline        │
└──────────────────────────────────────────────────────────┘
```

### Wireframe — Tablet
```
┌────────────────────────────────┐
│ [Logo]                            │
│ description                       │
│ [social][social]                  │
│                                    │
│ Product     Company               │
│  link         link                 │
│  link         link                 │
│ Resources   Legal                 │
│  link         link                 │
│  link         link                 │
│ ──────────────────────            │
│ © year          tagline            │
└────────────────────────────────┘
   (4 categories reflow to 2×2)
```

### Wireframe — Mobile
```
┌──────────────────────┐
│ [Logo]                  │
│ description              │
│ [social][social]         │
│ ──────────────           │
│ Product                  │
│  link                    │
│  link                    │
│ Company                  │
│  link                    │
│  link                    │
│ Resources                │
│  link                    │
│ Legal                    │
│  link                    │
│ ──────────────           │
│ © year                    │
│ tagline                   │
└──────────────────────┘
   categories stack fully vertically — order kept
   as product → company → resources → legal, since
   that's descending order of visitor-relevance
```

---

## Summary — Section Purpose at a Glance

| # | Section | One-line purpose |
|---|---|---|
| 1 | Navigation | Persistent orientation + escape hatch |
| 2 | Hero | Answer "what/who/why keep scrolling" in 5 seconds |
| 3 | Logo Cloud | Fast, passive credibility injection |
| 4 | Features | Define what the product actually does |
| 5 | Stats | Quantify the claim into hard proof |
| 6 | How It Works | Neutralize "how much effort is this" |
| 7 | Testimonials | Replace vendor claims with peer validation |
| 8 | Pricing | Convert browsing into a decision |
| 9 | FAQ | Resolve the last specific objections |
| 10 | Final CTA | Capture visitors persuaded earlier but not yet converted |
| 11 | Footer | Prevent a dead end for non-converters |

No section duplicates another's job. If a future section is proposed, it
should be tested against this table first: which stage of the journey map
(§0) does it move the visitor through, and which existing section, if any,
does it risk overlapping with?
