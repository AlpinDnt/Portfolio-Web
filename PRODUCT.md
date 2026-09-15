# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: freelance clients evaluating a Junior Web Developer for landing pages and web apps. They skim proof quickly (projects, tech, live demos) and decide whether to start a conversation.

## Product Purpose

Personal portfolio for I Putu Alvi Rupa Dinata (AlpinDnt) that proves modern frontend ability and converts interest into contact. Success means a convinced visitor reaches out via Email Me, WhatsApp, or a direct social channel.

## Positioning

Bali-based Junior Web Developer focused on React + Tailwind frontend with full-stack proof: English-only glassmorphism portfolio with dark/light themes, live demos paired with source code, and Top 3 ranked examples spanning AI web app (#1), e-commerce (#2), and coffee-shop landing page (#3). Neighbor portfolios can claim skills; this one pairs each claim with a runnable demo and repository.

## Operating Context

Single-page portfolio with sections: home, about, skills, top 3 projects, contact. Visitor flow: land on glass hero with 3D, scan background and stats with scroll reveals, inspect ranked Top 3 cards, open live demo or source, then contact. English-only (language switcher removed per owner decision 2026-09-15). Theme toggle defaults to dark with persisted light/dark choice; mobile stacks, desktop centers glass panels over aurora field. Dev: `npm run dev` (Vite, http://localhost:5173), build: `npm run build`. Deployed to Vercel.

## Capabilities and Constraints

Confirmed:
- English-only content in `src/data/translations.js` (EN dictionary retained; ID path and LanguageContext removed from UI).
- Top 3 ranked showcase with fixed order #1 Student Notes AI, #2 Lumina Store, #3 Kroma Coffee; no category filter. Each ranked card carries live demo link and GitHub link plus rank medal 1/2/3.
- Dark-default theme with light-mode toggle persisted in `localStorage`; glass panels adapt tint, border, and shadow per theme.
- Scroll animation via framer-motion reveals plus interactive 3D: mouse-parallax hero orb/terminal and tilt-on-hover ranked cards.
- Canvas cursor trail overlay (desktop pointer only; disabled on touch / reduced-motion).
- Contact section replaced with a services closer per owner decision: marquee ticker, three service lanes (Landing Pages, Web Apps, UI Revamps) opening WhatsApp with prefilled briefs, plus Email Me / copy-email / WhatsApp quick actions; the contact form was removed.
- CV download served from `public/AlpinDnt-CV.pdf` via `/AlpinDnt-CV.pdf`.
- Technical-minimal footer (footer1 recipe): brand statement, grouped navigation, direct contact, legal row with back-to-top.
- Single-flow glass layout with scroll-spy anchor nav for home, about, skills, projects, contact.

Constraints / undecided:
- About stats (`4+`, `250+`, `6+`, `90+` in `src/components/About.jsx`) are owner-stated; do not inflate or present as verified third-party metrics.

## Brand Commitments

Name: I Putu Alvi Rupa Dinata, nickname AlpinDnt, role Junior Web Developer, location Denpasar, Bali, Indonesia. Voice: professional and approachable in English only (ID removed per owner decision). Assets on hand: `public/icon.png`, `public/foto-formal.jpeg`, `public/AlpinDnt-CV.pdf`, `public/favicon.svg`. Contact identity: ptu.alvi@gmail.com, +6282325494970, github.com/AlpinDnt, linkedin.com/in/alpindnt, instagram alpindnt.

## Evidence on Hand

- Projects in `src/data/translations.js`: Student Notes AI (live https://student-notes-ai-git-main-kanebo.vercel.app/, source https://github.com/AlpinDnt/student-notes-ai), Lumina Store (live https://lumina-store-online.vercel.app/, source https://github.com/AlpinDnt/Lumina-Store), Kroma Coffee (live https://kroma-coffee.vercel.app/, source https://github.com/AlpinDnt/kroma-coffee).
- Live site reference: https://portfolio-web-cyan-seven.vercel.app/
- CV: `public/AlpinDnt-CV.pdf`.
- Absences future work must not fabricate: no testimonials, no client logos, no pricing, no hiring claims, no backend contact delivery proof.

## Product Principles

1. Proof over promises — every skill claim links to a demo or repo.
2. Frictionless contact — every scroll depth offers a path to email, WhatsApp, or socials.
3. English clarity — one language, no toggle, no mixed copy.
4. Maintainable simplicity — content edits stay in `src/data/translations.js` without code changes.
