# Hayden Bohlen Portfolio — Implementation Specification

## Product promise

A reviewer can understand Hayden’s motivation, judgment, execution evidence, and public-interest fit in one focused page, then open BotMentor or download the resume.

## Architecture

```text
Browser
  └── static Vite build
      ├── semantic React page
      ├── local CSS and SVG decoration
      └── public/hayden-bohlen-resume.pdf

External navigation only
  ├── botmentor.vercel.app
  ├── github.com/hbohlen/botmentor
  ├── github.com/hbohlen
  ├── linkedin.com/in/hayden-bohlen
  └── mailto:bohlenhayden@gmail.com
```

No backend, runtime API, analytics, cookies, secrets, or persistence.

## Page structure

1. **Sticky navigation** — Hayden Bohlen mark; Story, Project, Principles, Approach; resume CTA.
2. **Hero** — public-interest AI positioning, supporting narrative, BotMentor and resume CTAs, compact evidence card.
3. **Origin story** — Nebraska Robotics Expo narrative and an observation → hypothesis → safe test → learning visual sequence.
4. **BotMentor case study** — Problem → Insight → Product → Evidence, with direct live and source links.
5. **Responsible-AI principles** — four cards for Delegation, Description, Discernment, Diligence, each tied to a concrete product decision.
6. **How I work** — Discover before building; Ship and verify; Enable ownership.
7. **Background** — education and Anthropic Education credentials.
8. **Closing CTA/footer** — public-interest host message, email, GitHub, LinkedIn, resume.

## Visual direction

- “Field notebook meets public-interest case study.”
- Warm paper background, deep ink text, teal evidence color, amber observation accent.
- Light grid/diagram motifs; labels such as OBSERVATION, TEST, EVIDENCE, HANDOFF.
- Avoid generic gradient-heavy SaaS styling, floating glass cards, fake metrics, or excessive rounded pills.
- Typography: system-first stack; no external font dependency.

## Components

- `App`
- `SiteHeader`
- `Hero`
- `OriginStory`
- `CaseStudy`
- `Principles`
- `Approach`
- `Background`
- `Footer`
- Small reusable `SectionLabel`, `ArrowLink`, and `EvidenceCard` primitives if useful.

A single file is acceptable for the first vertical slice if it improves speed and coherence; split only where components become difficult to scan.

## Content rules

- Use first-person language in narrative sections and concise third-person-neutral evidence labels.
- Keep BotMentor as the only project.
- State “44 passing checks across 11 scenarios,” not “44 tests,” to avoid ambiguity with framework-level test counts.
- Do not claim measured student outcomes, field validation, production safety efficacy, or that AI diagnoses physical hardware.
- Frame escalation to a human as a correct outcome.
- Keep AI Fluency 4D mapping visible but subordinate to the human story.

## Accessibility

- Semantic landmarks and ordered heading hierarchy.
- Skip link.
- All links descriptive; external links indicate destination naturally in text.
- Minimum target height around 44px for prominent controls.
- Strong `:focus-visible` treatment.
- No information conveyed by color alone.
- Responsive at 360px, 768px, 1024px, and wide desktop.
- Respect `prefers-reduced-motion`.

## Metadata

- Title: `Hayden Bohlen — Public-Interest AI Builder`
- Description: `Full-stack developer and former robotics mentor building practical, responsible AI tools that help people learn and retain ownership.`
- Open Graph title/description matching the page.
- Canonical URL deferred until deployment URL is known.

## Repository layout

```text
hayden-portfolio/
├── docs/
│   ├── 00-domain-and-needs.md
│   └── 01-spec.md
├── public/
│   └── hayden-bohlen-resume.pdf
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Quality gates

- `npm install --include=dev`
- `npm run typecheck`
- `npm run build`
- Runtime: serve `dist`, verify `/`, resume PDF, and primary external links in generated HTML.
- Visual review at desktop and mobile widths.
- Verify no horizontal overflow and no obvious contrast/focus regressions.
- `git diff --check`

## Acceptance criteria

- The first viewport identifies Hayden, public-interest AI focus, and BotMentor.
- A reviewer can reach the live app, source, email, LinkedIn, GitHub, and resume.
- The origin story and responsible-AI choices are understandable without opening BotMentor.
- The page clearly shows discover → build → verify → handoff behavior.
- All factual claims trace to the resume, BotMentor repository/deployment, certificates, or application record.
- Production build succeeds and the local served artifact is manually verified.

## Deferred

- Custom domain.
- Production deployment and GitHub remote push until explicitly authorized.
- Real BotMentor screenshots and social preview image if capture tooling is unavailable during the initial slice.
