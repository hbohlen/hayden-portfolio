# Hayden Bohlen Portfolio — Domain and Needs

## Purpose

Create a focused, one-page portfolio that helps a Claude Corps reviewer understand Hayden Bohlen before entering the BotMentor product. The page is not a generic project gallery. It is a concise case study showing why Hayden is a strong early-career public-interest AI builder.

## Narrative origin

From 2017–2018, Hayden volunteered at the Nebraska Robotics Expo alongside University of Nebraska at Omaha engineering students. Middle- and high-school teams often arrived with incomplete symptoms and uneven access to technical support. Effective mentoring meant helping a student turn “it does not work” into an observation, a hypothesis, a safe test, and a next decision—not taking the robot or the learning away from them.

BotMentor translates that mentoring loop into a responsible, student-centered AI experience.

## Audience

### Primary

Claude Corps application reviewers assessing whether Hayden can:

- discover and scope a real need;
- build and ship an end-to-end solution;
- exercise sound judgment with AI;
- communicate with nontechnical people;
- leave behind documentation and systems others can own;
- operate effectively in education, workforce-development, civic-tech, or other public-interest settings.

### Secondary

Potential nonprofit, government, education, and public-interest host organizations.

## Core message

> I build practical AI tools that help people learn, make safer decisions, and retain ownership of their work.

Supporting message:

> I’m Hayden Bohlen, a full-stack developer and former robotics mentor. I built BotMentor to translate the mentoring practices I learned at the Nebraska Robotics Expo into a responsible, student-centered AI experience.

## Evidence available

- BotMentor live deployment: https://botmentor.vercel.app
- Public source repository: https://github.com/hbohlen/botmentor
- Accessible visual mentor workspace built with React and TypeScript
- Structured observation and hypothesis workflow
- Safe, cheapest-first tests and human escalation
- Visible uncertainty, alternatives, cited references, and mentor handoff
- 44 passing deterministic checks across 11 scenarios
- Technical and plain-language operating documentation
- Anthropic Education certificates: AI Fluency, Claude 101, and AI Fluency for Nonprofits
- Final one-page resume PDF

## User journey

1. Understand Hayden’s public-interest builder identity within five seconds.
2. Learn the human origin of BotMentor.
3. See the project as Problem → Insight → Product → Evidence.
4. Inspect responsible-AI choices through the 4D lens.
5. Understand Hayden’s working method: discover, ship and verify, enable ownership.
6. Open BotMentor, inspect GitHub, download the resume, or contact Hayden.

## Content requirements

- Hero with name, positioning, and direct calls to action.
- Origin story grounded in the Nebraska Robotics Expo.
- One BotMentor case study—no unrelated project gallery.
- Responsible-AI decisions mapped to Delegation, Description, Discernment, and Diligence.
- Honest evidence without unsupported impact or field-safety claims.
- Working-method section for fellowship/host-organization fit.
- Education and verified Anthropic Education credentials.
- Footer contact links and resume download.

## Experience requirements

- One responsive page with clear visual progression.
- Fast, static, accessible, and usable without JavaScript-only interactions.
- Keyboard-visible focus states, semantic headings, sufficient contrast, reduced-motion support.
- Professional but human visual language: field notebook / evidence trail, not a generic SaaS dashboard.
- No API keys, analytics, cookies, contact forms, or backend.

## Out of scope

- Blog, CMS, admin panel, authentication, database, or model integration.
- Additional projects.
- Invented testimonials, measured learning outcomes, user counts, or claims of production efficacy with students.
- Replacing BotMentor’s own product experience.
- Heavy animation or decorative interactions that distract from review.

## Resolved implementation choices

- Standalone React + TypeScript + Vite app.
- Static Vercel deployment target.
- Resume PDF shipped in `public/`.
- No backend and no secrets.
- One page with anchor navigation.
- BotMentor screenshots may be added after the first verified vertical slice; the initial design must work without them.
