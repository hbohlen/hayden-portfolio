const ExternalArrow = () => <span aria-hidden="true">↗</span>

const ArrowLink = ({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) => (
  <a className={`arrow-link ${className}`} href={href}>
    <span>{children}</span>
    <ExternalArrow />
  </a>
)

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <p className="section-label">{children}</p>
)

const principles = [
  {
    tag: '01 · Delegation',
    title: 'AI suggests. Students test.',
    body: 'BotMentor ranks possibilities, but students provide observations and perform physical checks. Unsafe work belongs with an adult or mentor.',
  },
  {
    tag: '02 · Description',
    title: 'Start with what is actually known.',
    body: 'A visual robot map and guided prompts turn “it is broken” into structured evidence without forcing students to pretend they know more than they do.',
  },
  {
    tag: '03 · Discernment',
    title: 'Make reasoning challengeable.',
    body: 'Confidence, alternate explanations, cited references, and a “Challenge the mentor” view help students inspect a suggestion before trusting it.',
  },
  {
    tag: '04 · Diligence',
    title: 'Leave an evidence trail.',
    body: 'Local investigation records, deterministic checks, and privacy-preserving handoffs make the work reviewable without turning learning into surveillance.',
  },
]

const approach = [
  {
    number: '01',
    title: 'Discover before building',
    body: 'Start with the people, the setting, and the real decision—not a technology looking for a use case.',
  },
  {
    number: '02',
    title: 'Ship and verify',
    body: 'Treat the deployment environment as part of the design and verify the real served artifact, not only the local build.',
  },
  {
    number: '03',
    title: 'Enable ownership',
    body: 'Pair technical implementation with plain-language guidance, repeatable evaluation, and a safe handoff path.',
  },
]

function SiteHeader() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Hayden Bohlen, back to top">
        <span className="wordmark-mark">HB</span>
        <span>Hayden Bohlen</span>
      </a>
      <nav aria-label="Primary navigation">
        <a href="#story">Story</a>
        <a href="#project">Project</a>
        <a href="#principles">Principles</a>
        <a href="#approach">Approach</a>
      </nav>
      <a className="header-cta" href="/hayden-bohlen-resume.pdf" download>
        Resume <span aria-hidden="true">↓</span>
      </a>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <SectionLabel>Full-stack developer · Former robotics mentor</SectionLabel>
        <h1 id="hero-title">I build practical AI tools that help people <em>learn</em>, make safer decisions, and retain ownership.</h1>
        <p className="hero-deck">I’m Hayden Bohlen. I built BotMentor to translate the mentoring practices I learned at the Nebraska Robotics Expo into a responsible, student-centered AI experience.</p>
        <div className="hero-actions">
          <ArrowLink href="https://botmentor.vercel.app" className="primary-link">Explore BotMentor</ArrowLink>
          <ArrowLink href="https://github.com/hbohlen/botmentor">View source</ArrowLink>
        </div>
      </div>
      <aside className="hero-evidence" aria-label="BotMentor evidence snapshot">
        <div className="evidence-topline">
          <span className="status-dot" aria-hidden="true" />
          <span>DEPLOYED EVIDENCE</span>
          <span>2026</span>
        </div>
        <div className="robot-diagram" aria-hidden="true">
          <svg viewBox="0 0 520 300" role="img">
            <path className="diagram-line" d="M68 202 H452" />
            <rect className="robot-body" x="128" y="92" width="264" height="118" rx="10" />
            <path className="robot-arm" d="M190 92V54h84v38M326 92V38h54" />
            <circle className="robot-wheel" cx="180" cy="226" r="33" />
            <circle className="robot-wheel" cx="340" cy="226" r="33" />
            <circle className="robot-node accent" cx="196" cy="144" r="12" />
            <circle className="robot-node" cx="260" cy="144" r="12" />
            <circle className="robot-node" cx="324" cy="144" r="12" />
            <path className="diagram-dash" d="M68 76h76M382 62h70M404 158h68M54 148h52" />
          </svg>
          <span className="diagram-label label-observe">OBSERVE</span>
          <span className="diagram-label label-test">SAFE TEST</span>
          <span className="diagram-label label-learn">LEARN</span>
        </div>
        <div className="evidence-grid">
          <div><strong>44</strong><span>passing checks</span></div>
          <div><strong>11</strong><span>scenarios</span></div>
          <div><strong>4D</strong><span>visible framework</span></div>
        </div>
        <p className="evidence-note">The AI never claims it can see or repair physical hardware. It helps students build better evidence.</p>
      </aside>
    </section>
  )
}

function OriginStory() {
  const steps = [
    ['01', 'Observe', '“The robot won’t turn.”'],
    ['02', 'Hypothesize', 'Name a possible cause.'],
    ['03', 'Test safely', 'Try the cheapest safe check.'],
    ['04', 'Learn & share', 'Explain what changed.'],
  ]
  return (
    <section id="story" className="story section-shell" aria-labelledby="story-title">
      <div className="section-heading">
        <SectionLabel>The origin story · Nebraska, 2017–2018</SectionLabel>
        <h2 id="story-title">The best mentor doesn’t take the robot away.</h2>
      </div>
      <div className="story-layout">
        <div className="story-copy">
          <p className="lead">At the Nebraska Robotics Expo, middle- and high-school teams arrived with robots, ambitious designs, and incomplete descriptions of what had gone wrong.</p>
          <p>As a University of Nebraska at Omaha engineering student volunteer, my job was not to perform the repair. It was to help a student turn a symptom into an observation, form a hypothesis, test the safest and cheapest cause first, and understand <em>why</em> the result mattered.</p>
          <p>That mentoring loop became BotMentor: an AI co-pilot designed to extend human guidance without replacing student agency or human judgment.</p>
        </div>
        <ol className="mentor-loop" aria-label="Mentoring loop">
          {steps.map(([number, title, body]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div><strong>{title}</strong><span>{body}</span></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function CaseStudy() {
  return (
    <section id="project" className="case-study section-shell" aria-labelledby="project-title">
      <div className="case-intro">
        <SectionLabel>Featured project · BotMentor</SectionLabel>
        <h2 id="project-title">From “it doesn’t work” to the next safe decision.</h2>
        <p>BotMentor is a visual mentoring workspace for student robotics teams. It turns incomplete reports into inspectable hypotheses, safe tests, contextual learning, and a clear handoff when a human should step in.</p>
        <aside className="prototype-callout" aria-label="BotMentor prototype scope">
          <span>Prototype case study</span>
          <p>This is an early-stage concept and a live demonstration of responsible design choices—not a production-ready diagnostic service or a claim of field-proven outcomes. I would partner with a nonprofit or volunteer organization to validate needs, accessibility, safety, and ownership before a real rollout.</p>
        </aside>
        <div className="case-links">
          <ArrowLink href="https://botmentor.vercel.app" className="primary-link">Open live application</ArrowLink>
          <ArrowLink href="https://github.com/hbohlen/botmentor">Read the code</ArrowLink>
        </div>
      </div>
      <div className="case-flow" aria-label="BotMentor case study">
        <article><span>01 / Problem</span><h3>Uneven access to experienced help</h3><p>Students often need guidance when a mentor is not beside them—and a confident answer is not the same as a safe one.</p></article>
        <article><span>02 / Insight</span><h3>Reasoning is the transferable skill</h3><p>The durable outcome is not one fixed robot. It is a learner who can describe, inspect, test, and decide.</p></article>
        <article><span>03 / Product</span><h3>A workspace for shared evidence</h3><p>Visual system selection, guided observations, ranked possibilities, one safe test at a time, references, and mentor handoff.</p></article>
        <article className="evidence-article"><span>04 / Evidence</span><h3>Built, deployed, and deliberately scoped</h3><ul><li>44 passing deterministic checks</li><li>11 mentoring and safety scenarios</li><li>Accessible React + TypeScript interface</li><li>Technical and plain-language runbooks</li></ul></article>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section id="principles" className="principles section-shell" aria-labelledby="principles-title">
      <div className="section-heading split-heading">
        <div><SectionLabel>Responsible AI · Made concrete</SectionLabel><h2 id="principles-title">Judgment should be visible in the product.</h2></div>
        <p>Anthropic’s AI Fluency 4D Framework is not a badge added after the build. It is reflected in who acts, what is known, how suggestions are challenged, and what evidence remains.</p>
      </div>
      <div className="principle-grid">
        {principles.map((item) => (
          <article key={item.tag}>
            <span>{item.tag}</span><h3>{item.title}</h3><p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Approach() {
  return (
    <section id="approach" className="approach section-shell" aria-labelledby="approach-title">
      <div className="section-heading">
        <SectionLabel>How I work</SectionLabel>
        <h2 id="approach-title">Build for the people who will own what comes next.</h2>
      </div>
      <div className="approach-grid">
        {approach.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}
      </div>
    </section>
  )
}

function Background() {
  return (
    <section className="background section-shell" aria-labelledby="background-title">
      <div>
        <SectionLabel>Background</SectionLabel>
        <h2 id="background-title">A technical foundation shaped by persistence and service.</h2>
      </div>
      <div className="background-content">
        <article><span>Education</span><h3>Metropolitan Community College</h3><p>Associate of Applied Science and Web Development Certificate. Coursework across React, full-stack development, JavaScript, databases, interface design, C#, and information security.</p></article>
        <article><span>Additional study</span><h3>University of Nebraska at Omaha</h3><p>Coursework in computer science and computer engineering, including data structures, architecture, networks, and digital systems.</p></article>
        <article><span>Anthropic Education</span><h3>AI Fluency · Claude 101 · AI Fluency for Nonprofits</h3><p>Completed July 2026, with the framework translated into a live, inspectable portfolio artifact.</p></article>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-cta">
        <SectionLabel>Let’s build useful systems</SectionLabel>
        <h2>I want to help public-interest organizations turn practical AI opportunities into tools their staff and communities can understand, evaluate, and own.</h2>
        <a className="email-link" href="mailto:bohlenhayden@gmail.com">bohlenhayden@gmail.com <ExternalArrow /></a>
      </div>
      <div className="footer-bottom">
        <span>Hayden Bohlen · Bennington, Nebraska · Open to relocation</span>
        <div><a href="https://github.com/hbohlen">GitHub</a><a href="https://linkedin.com/in/hayden-bohlen">LinkedIn</a><a href="/hayden-bohlen-resume.pdf" download>Resume</a></div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <OriginStory />
        <CaseStudy />
        <Principles />
        <Approach />
        <Background />
      </main>
      <Footer />
    </>
  )
}
