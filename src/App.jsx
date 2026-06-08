import './App.css'

const projects = [
  {
    title: 'AI assisted medical guidance app',
    period: 'Dec 2025 - Apr 2026',
    type: 'Full-stack project',
    description:
      'A deployed React, Redux, Node.js and MongoDB application with Gemini chat, Firebase authentication, Docker, Redis caching and Google Cloud deployment.',
    impact:
      'Reduced repeated API response times by roughly 30-50% during testing with Redis caching.',
    tags: ['React', 'Redux', 'Node.js', 'MongoDB', 'Gemini', 'Docker', 'GCP'],
    live: 'https://physiohelp-page.web.app',
    code: 'https://github.com/ukruner/vite_react_portfolio',
  },
  {
    title: 'Food order web app',
    period: 'Jan 2026 - Feb 2026',
    type: 'Frontend project',
    description:
      'A responsive food ordering interface built with React and Tailwind CSS, using Context state management, custom hooks and dynamic checkout UI.',
    impact:
      'Restructured state management to reduce unnecessary re-renders and improve UI responsiveness.',
    tags: ['React', 'Tailwind CSS', 'Context API', 'Hooks'],
    live: 'https://ukruner.github.io/Food-order-2.0/',
    code: 'https://github.com/ukruner/Food-order-2.0',
  },
  {
    title: 'Car dealership backend',
    period: 'Nov 2025 - Feb 2026',
    type: 'Backend project',
    description:
      'A Django backend with data models, RESTful APIs, server-side application flow, MongoDB persistence and Google Cloud hosting.',
    impact:
      'Migrated from IBM Cloud to Google Cloud, simplifying infrastructure and improving local response performance by about 20-30%.',
    tags: ['Python', 'Django', 'REST APIs', 'MongoDB', 'Google Cloud'],
    live: 'https://capstone-web-lk3kjwz4oq-nw.a.run.app/djangoapp/',
    code: 'https://github.com/ukruner/Car-dealership-project',
  },
]

const skills = {
  Languages: ['JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'],
  Frontend: ['React', 'Redux', 'Tailwind CSS', 'Responsive UI'],
  Backend: ['Node.js', 'Express', 'Django', 'Flask', 'REST APIs'],
  Data: ['MongoDB', 'Redis'],
  Tools: ['Docker', 'Google Cloud', 'GitHub', 'Kubernetes'],
}

const experience = [
  {
    role: 'Volunteer Full-Stack Developer',
    org: 'waddyado.com | community.waddyado.com',
    period: 'Apr 2026 - present',
    points: [
      'Contribute to front-end and back-end application features.',
      'Implement REST API integrations and support database read/write operations.',
      'Assist with TypeScript deployment, bug fixing, SEO tasks and QA testing.',
      'Collaborate with the wider team to improve usability and platform reliability.',
    ],
  },
  {
    role: 'Physiotherapist',
    org: 'Optima Health',
    period: '2021 - present',
    points: [
      'Provide occupational health physiotherapy in a regulated, safety-critical environment.',
      'Bring strong documentation, prioritisation, accountability and stakeholder communication into software work.',
      'Hold existing NPPV2/CTC vetting clearance.',
    ],
  },
]

const training = [
  'IBM Full Stack Software Developer Specialization - 2024',
  'Python 3 Programming, University of Michigan via Coursera - 2020',
  'React - The Complete Guide including Next.js and Redux, Udemy - 2024 and ongoing',
]

function App() {
  return (
    <main className="site-shell">
      <header className="topbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Urmas Kruner home">
          <span>UK</span>
          Urmas Kruner
        </a>
        <nav>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Junior Full-Stack Developer | London, UK</p>
          <h1>
            I build full-stack web apps with React, TypeScript, Node.js,
            Python and cloud deployment.
          </h1>
          <p className="hero-text">
            Healthcare-trained developer with 7+ years in high-responsibility
            environments, now building maintainable APIs, frontend workflows and
            AI-integrated applications.
          </p>
          <div className="hero-actions" aria-label="Main actions">
            <a className="button primary" href="#projects">
              See projects
            </a>
            <a className="button secondary" href="mailto:urmas.kryner@gmail.com">
              Contact me
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Portfolio highlights">
          <div className="portrait-mark" aria-hidden="true">
            <span>UK</span>
          </div>
          <div>
            <p className="panel-label">Current focus</p>
            <h2>React, APIs, deployment and production-minded delivery.</h2>
          </div>
          <ul className="metric-list">
            <li>
              <span>3</span>
              Deployed featured projects
            </li>
            <li>
              <span>7+</span>
              Years healthcare responsibility
            </li>
            <li>
              <span>30-50%</span>
              API repeat-response reduction in testing
            </li>
          </ul>
        </aside>
      </section>

      <section className="section intro-grid" aria-label="Professional profile">
        <div>
          <p className="eyebrow">Profile</p>
          <h2>Full-stack foundations with practical delivery habits.</h2>
        </div>
        <p>
          I build and deploy frontend, backend and full-stack applications using
          React, Node.js and Python/Django, supported by cloud technologies and
          containerisation. My healthcare background gives me a strong bias
          toward clear documentation, reliable workflows and careful
          communication with stakeholders.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected work</h2>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index" aria-hidden="true">
                0{index + 1}
              </div>
              <div className="project-body">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <span>{project.period}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="impact">{project.impact}</p>
                <ul className="tag-list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer">
                    Live project
                  </a>
                  <a href={project.code} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section about-layout" id="about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Software delivery strengthened by clinical experience.</h2>
        </div>
        <div className="about-copy">
          <p>
            I am a junior software developer with hands-on experience building
            full-stack applications, REST APIs and AI-integrated features. I care
            about performance, maintainability and systems that are easy for the
            next person to understand.
          </p>
          <p>
            My professional background in occupational health physiotherapy has
            trained me to work calmly in regulated environments, communicate
            clearly and document decisions with accuracy. Those habits transfer
            directly into how I structure code and collaborate on technical work.
          </p>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-heading">
          <p className="eyebrow">Capabilities</p>
          <h2>Technical skills</h2>
        </div>
        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <article className="skill-card" key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <div className="section-heading">
          <p className="eyebrow">Experience</p>
          <h2>Relevant experience and training</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.role}-${item.org}`}>
              <div>
                <p>{item.period}</p>
                <h3>{item.role}</h3>
                <span>{item.org}</span>
              </div>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
          <article className="timeline-item">
            <div>
              <p>Training</p>
              <h3>Relevant learning</h3>
              <span>Full-stack, Python and React</span>
            </div>
            <ul>
              {training.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let&apos;s connect.</h2>
          <p>
            I am based in London and open to junior full-stack, frontend and
            backend developer opportunities.
          </p>
        </div>
        <div className="contact-card">
          <a href="mailto:urmas.kryner@gmail.com">urmas.kryner@gmail.com</a>
          <a href="tel:+447454679723">+44 7454 679723</a>
          <a href="https://github.com/ukruner" target="_blank" rel="noreferrer">
            github.com/ukruner
          </a>
          <a
            href="https://www.linkedin.com/in/urmaskruner"
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/urmaskruner
          </a>
          <p>Languages: English, Estonian, Russian</p>
        </div>
      </section>
    </main>
  )
}

export default App
