---
name: AlpinDnt Glass Portfolio
description: A calm glassmorphism portfolio floating over a living aurora field.
colors:
  bali-glass-blue: "#38bdf8"
  aurora-indigo: "#818cf8"
  aurora-cyan: "#22d3ee"
  proof-emerald: "#10b981"
  porcelain-bg: "#eef1f6"
  obsidian-bg: "#07070c"
  ink-light: "#0f172a"
  ink-dark: "#f4f4f5"
  muted-light: "#475569"
  muted-dark: "#a1a1aa"
  rank-gold: "#f59e0b"
  rank-gold-light: "#fbbf24"
  rank-gold-ink: "#1c1005"
  rank-silver: "#94a3b8"
  rank-bronze: "#b45309"
  rank-bronze-light: "#fdba74"
  rank-bronze-ink: "#1c0e02"
typography:
  display:
    fontFamily: "Space Grotesk, 'Plus Jakarta Sans', sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, 'Plus Jakarta Sans', sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 700
    letterSpacing: "0.12em"
  micro:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  caption:
    fontFamily: "'Plus Jakarta Sans', ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.5625rem"
    fontWeight: 700
    letterSpacing: "0.06em"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  xs: "6px"
  sm: "8px"
  field: "1rem"
  card: "1.5rem"
  panel: "2rem"
  pill: "999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  section: "56px"
components:
  button-primary:
    backgroundColor: "{colors.bali-glass-blue}"
    textColor: "#ffffff"
    rounded: "{rounded.field}"
    padding: "12px 20px"
  button-primary-hover:
    backgroundColor: "{colors.aurora-cyan}"
    textColor: "#ffffff"
    rounded: "{rounded.field}"
    padding: "12px 20px"
  button-glass:
    backgroundColor: "{colors.porcelain-bg}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.field}"
    padding: "12px 20px"
  chip-glass:
    backgroundColor: "{colors.porcelain-bg}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.pill}"
    padding: "6px 12px"
  card-glass:
    backgroundColor: "{colors.porcelain-bg}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: "24px"
  field-glass:
    backgroundColor: "{colors.porcelain-bg}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.field}"
    padding: "10px 14px"
  nav-glass:
    backgroundColor: "{colors.porcelain-bg}"
    textColor: "{colors.ink-light}"
    rounded: "{rounded.card}"
    padding: "12px 20px"
---

# Design System: AlpinDnt Glass Portfolio

## Overview

**Creative North Star: "Floating Glass Observatory"**

This system treats the portfolio as a single glass instrument floating over a living aurora field. Panels are frosted, edges are translucent, and color arrives as light — gradients in the background, never on the words. The mood is calm and confident: precise geometry, generous air, one accent used sparingly, and motion that reveals rather than performs.

Density is editorial, not dashboard. One idea per viewport, one orienting line per section, and a real close at the contact dock. The confirmed anti-reference is the category-default dark split-screen with gray cards and a filterable project grid — this world replaced it with a centered single flow and a fixed ranked Top 3.

**Key Characteristics:**
- Frosted glass panels over an animated aurora field, dark-default with a persisted light theme.
- One accent (Bali Glass Blue) plus one success signal; gold/silver/bronze reserved for ranks.
- Space Grotesk display over Plus Jakarta Sans body; mono only inside the code terminal.
- Scroll reveals and one interactive 3D moment in the hero; tilt confined to ranked cards.

## Colors

A light-first glass palette with a dark twin: the page swaps ground, ink, and glass tints together while the accent stays constant.

### Primary
- **Bali Glass Blue** (#38bdf8): the single action and attention color. CTAs, active states, focus rings, and the hero orb glow. Its rarity is the point.

### Secondary
- **Aurora Indigo** (#818cf8): background field partner; never a text or action color.
- **Aurora Cyan** (#22d3ee): background field partner and primary-button hover; never body text.

### Tertiary
- **Proof Emerald** (#10b981): availability and success only (status dot, form success). Never decoration.

### Neutral
- **Porcelain Ground** (#eef1f6): light-theme page ground.
- **Obsidian Ground** (#07070c): dark-theme page ground.
- **Ink Day** (#0f172a): text on light; **Ink Night** (#f4f4f5): text on dark.
- **Muted Day** (#475569): secondary text on light; **Muted Night** (#a1a1aa): secondary text on dark.
- **Rank Gold** (#f59e0b), **Rank Silver** (#94a3b8), **Rank Bronze** (#b45309): rank medals 1/2/3 only; never actions or charts.

### Named Rules
**The One Accent Rule.** Bali Glass Blue owns action and attention; aurora colors stay in the background field, emerald stays on status, metals stay on rank.
**The Ground Swap Rule.** Light and dark swap ground, ink, glass tint, border, and shadow together — never mix a light panel with dark ink or vice versa.

## Typography

**Display Font:** Space Grotesk (with Plus Jakarta Sans fallback)
**Body Font:** Plus Jakarta Sans (with system sans fallback)
**Label/Mono Font:** ui-monospace stack, terminal only

**Character:** Geometric display with a humanist body — confident headlines, plain-spoken paragraphs. Mono appears exactly once, inside the code terminal, as evidence rather than costume.

### Hierarchy
- **Display** (700, clamp(2.25rem, 5vw, 3.75rem), 1.05): hero name only.
- **Headline** (700, clamp(1.5rem, 3vw, 2.25rem), 1.1): section titles.
- **Title** (700, 1.25rem, 1.2): card and panel titles.
- **Body** (400–500, 1rem, 1.625): paragraphs; measure stays readable at container width.
- **Label** (700, 0.6875rem / 11px, 0.12em tracking, uppercase): eyebrows, badges, form labels.
- **Micro** (700, 0.625rem / 10px, 0.08em tracking, uppercase): card eyebrows, contact card titles, social labels.
- **Caption** (700, 0.5625rem / 9px): rank-adjacent tags, tech chips, level badges.

### Named Rules
**The Weight-Not-Gradient Rule.** Emphasis comes from weight and size; gradient text is never used.
**The One Mono Rule.** Monospace lives inside the terminal component and nowhere else.

## Layout

A centered single flow at max 1152px (max-w-6xl) with 16–24px side padding. Sections breathe at 56px vertical rhythm; the hero opens lower (112–128px top) to clear the floating nav. The fixed glass nav (top, centered, pill-panel) and a desktop-only social dock are the only chrome outside the flow. Grids: hero splits 2-up on large screens; skills run 3-up; Top 3 runs 3-up with the #1 card lifted slightly; contact splits 5/12 + 7/12. Mobile stacks everything; the nav collapses to a glass menu sheet.

## Elevation & Depth

Depth is glass, not shadow-first: frosted blur (16–26px with saturation boost) over the aurora field, a 1px translucent border, and one soft offset shadow per panel. Panels rest quietly; interaction lifts them (translate up, border warms toward the accent).

### Shadow Vocabulary
- **Panel rest** (`box-shadow: 0 18px 50px -18px rgba(15, 23, 42, 0.28)` light / `0 24px 60px -20px rgba(0, 0, 0, 0.7)` dark): default glass panels and nav.
- **Action glow** (`box-shadow: 0 8px 24px -8px rgba(56, 189, 248, 0.5)`): primary buttons and the hero orb only.
- **Rank pop** (translateY(-6px) + rank-metal border tint on hover): ranked cards only.

### Named Rules
**The Lift-on-Interaction Rule.** Surfaces are calm at rest; shadow and lift appear as a response to hover, focus, or scroll position — never as ambient decoration.

## Shapes

Large, friendly geometry: fields at 16px, cards at 24px, signature panels at 32px, everything actionable-small as a full pill. Focus rings use a tight 6px radius. Borders are always 1px translucent (dark-ink at 10% on light, white at 10% on dark). No clipping, no hard offset block shadows, no circular photo crops — the avatar monogram, tech badges, and cube tiles are the deliberate circles in the system.

## Components

### Buttons
- **Shape:** gently rounded rectangle (16px radius).
- **Primary:** Bali Glass Blue ground with white text and 12px 20px padding; hover shifts toward Aurora Cyan and lifts 2px.
- **Hover / Focus:** lift plus accent border; focus always shows a 2px sky ring at 3px offset.
- **Glass secondary:** frosted panel treatment with ink text; used beside primary actions, never stacked more than two.

### Chips
- **Style:** frosted pill, ink text, 11px bold; category, rank context, and tech tags.
- **State:** static by default; rank chips carry metal gradients instead of glass.

### Cards / Containers
- **Corner Style:** 24px; signature panels 32px.
- **Background:** glass tint per theme with 20px blur and saturation lift.
- **Shadow Strategy:** panel-rest shadow; lift on hover per the Elevation section.
- **Border:** 1px translucent; warms toward the rank metal on ranked cards, toward sky on interactive cards.
- **Internal Padding:** 24px cards, 24–40px signature panels.

### Inputs / Fields
- **Style:** frosted field, ink text, 16px radius, muted placeholder.
- **Focus:** sky border plus 1px sky ring; no layout shift.
- **Error / Disabled:** rose-tinted inline alert with icon and `role="alert"`; submit disables at 50% opacity while sending.

### Navigation
- Full-width floating glass bar with a sky scroll-progress hairline, monogram-status brand block with role caption, center links with growing sky underlines, and an "Open to work" pill beside the theme toggle and "Hire Me" CTA. Scroll-spy drives the active state; mobile collapses to a hamburger opening a glass sheet with the same active state.

### Rank Badge
- Circular metal pill with rank numeral (#1 gold, #2 silver, #3 bronze) plus an uppercase rank line; fixed order, never a filter. The #1 card scales slightly above its siblings on desktop.

### Code Terminal
- Glass panel with traffic-light dots, filename label, numbered mono lines animating in sequence, and a blinking sky caret. The only place mono type exists.

### Footer
- Technical-minimal closing system: brand statement, grouped navigation (Sections / Connect / Direct), then a legal row. Muted links brighten on hover, every target at least 40px tall, and back-to-top follows the pinned recipe (light fill, dark zinc fill, inverting on hover).

## Do's and Don'ts

### Do:
- **Do** keep one accent per screen — Bali Glass Blue for action, everything else quiet.
- **Do** swap the full theme set (ground, ink, glass, border, shadow) together when toggling.
- **Do** confine tilt and parallax to the hero orb and ranked cards.
- **Do** disable the canvas cursor on touch pointers and reduced motion.
- **Do** carry the 2px sky focus ring on every interactive element.

### Don't:
- **Don't** bring back the language toggle — this portfolio is English-only by owner decision.
- **Don't** turn Top 3 into a filterable grid; rank order is fixed content.
- **Don't** use gradient text, hard offset shadows, or section-number sequences.
- **Don't** place aurora colors on text or actions; they live in the background field.
- **Don't** add new accent hues — metals are rank-only, emerald is status-only.
