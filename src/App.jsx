import { useState } from "react";

/* ---------- Edit your content here ---------- */
const PROFILE = {
  name: "Anubhav Pokharel",
  role: "Developer",
  email: "pokhrelanubhav07@gmail.com",
  photo: "/src/public/photo.jpg", // e.g. "/photo.jpg" (put the file in /public). Leave empty for the placeholder.
  intro:
    "I build fast, accessible web and mobile apps, from the first prototype through to launch.",
  about:
    "I started my software journey with a curiosity about how things work on the web. Building projects from scratch taught me to love the process, and since then I've turned that into a career of learning and making useful things.",
};
const NAV = [
  ["Home", "#top"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];
const SKILLS = [
  "JavaScript",
  "React",
  "Nodejs",
  "Python",
  "Fast_API",
  "Git",
];
const STATS = [
  ["10", "+", "Completed projects"],
];
const PROJECTS = [
  {
    title: "Paste_app",
    code: "const notes = sync({ online: true });",
    text: "Paste app, where user can copy and paste their text and sentences",
    tags: ["React "],
    url: "https://paste-app-hazel-six.vercel.app/",   // live site
    repo: "https://github.com/anubhavpokharel/Paste-app",
    
  },
  {
    title: "Resturant_app",
    code: "await invoice.send(client);",
    text: "A modern and responsive Food Recipe Application built with React JS and Axios that allows users to browse, search, and explore recipe details through API integration.",
    tags: ["React", "Axios"],
  },
  {
    title: "Task_tracker",
    code: 'task("task completed",);',
    text: "Created mini tasks tracker using mock API, hooks, debounce search and simple sorting feature to list the tasks.",
    tags: ["React"],
  },
];
const SERVICES = [
  [
    "Website development",
    <>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M8 20h8M12 16v4M10 8l-2 2 2 2M14 8l2 2-2 2" />
    </>,
  ],
  [
    "App development",
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2" />
      <path d="M11 18.5h2" />
    </>,
  ],
  [
    "Website hosting",
    <path d="M6 18a4 4 0 010-8 5.5 5.5 0 0110.6-1A4.5 4.5 0 0117 18z" />,
  ],
];
const BG_CODE = `// portfolio.js
const developer = {
  name: "${PROFILE.name}",
  role: "${PROFILE.role}",
  stack: ["HTML", "CSS", "JavaScript", "Node.js", "React"],
  available: true,
};

async function build(idea) {
  const plan = await design(idea);
  const app = code(plan);
  return ship(app);
}

for (let i = 0; i < projects.length; i++) {
  review(projects[i]);
  test(projects[i]);
  deploy(projects[i]);
}

export default developer;

// let's build something
npm run build && npm run deploy

class Project {
  constructor(title, stack) {
    this.title = title;
    this.stack = stack;
  }
  launch() { return "live"; }
}`;

/* ---------- Tiny syntax highlighter ---------- */
const TOKEN =
  /(\/\/.*)|("[^"\n]*")|\b(const|let|async|function|await|return|for|class|constructor|this|export|default|true|false|new)\b|\b([A-Za-z_]\w*)(?=\()/g;
function Highlight({ code }) {
  const out = [];
  let last = 0,
    m,
    i = 0;
  while ((m = TOKEN.exec(code))) {
    if (m.index > last) out.push(code.slice(last, m.index));
    const cls = m[1] ? "c" : m[2] ? "s" : m[3] ? "k" : "f";
    out.push(
      <span key={i++} className={cls}>
        {m[0]}
      </span>,
    );
    last = m.index + m[0].length;
  }
  out.push(code.slice(last));
  return <>{out}</>;
}

/* ---------- Components ---------- */
function CodeBackground() {
  return (
    <div className="code-bg" aria-hidden="true">
      <pre>
        <Highlight code={BG_CODE} />
      </pre>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">
          {PROFILE.name}
          <b>_</b>
        </a>
        <button
          className="burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav id="menu" className={open ? "open" : ""} aria-label="Main">
          <ul>
            {NAV.map(([label, href]) => (
              <li key={href}>
                <a href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Portrait() {
  if (PROFILE.photo)
    return (
      <img
        src={PROFILE.photo}
        alt={PROFILE.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label="Portrait placeholder">
      <circle cx="100" cy="72" r="34" fill="#F6E7B4" />
      <path d="M28 200c0-46 32-74 72-74s72 28 72 74z" fill="#2E3538" />
      <path d="M78 126l22 30 22-30" fill="#F2683C" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" style={{ padding: 0 }}>
      <div className="wrap">
        <div>
          <h1 className="hello">Hello</h1>
          <div className="im">I'm {PROFILE.name.split(" ")[0]}</div>
          <h2 className="role">{PROFILE.role}</h2>
          <p>{PROFILE.intro}</p>
          <div className="btns">
            <a className="btn solid" href="#contact">
              Got a project?
            </a>
            <a className="btn" href="#projects">
              My work
            </a>
          </div>
        </div>
        <div className="visual">
          <span className="chev a" aria-hidden="true">
            {"<"}
          </span>
          <span className="chev b" aria-hidden="true">
            {"/>"}
          </span>
          <div className="ring">
            <Portrait />
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <div className="strip">
      <div className="wrap">
        <ul>
          {SKILLS.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <ul className="services">
          {SERVICES.map(([label, icon]) => (
            <li key={label}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                {icon}
              </svg>
              {label}
            </li>
          ))}
        </ul>
        <div className="txt">
          <h2>About me</h2>
          <p>{PROFILE.about}</p>
          <div className="stats">
            {STATS.map(([n, unit, label]) => (
              <div key={label}>
                <strong>
                  {n}
                  <i> {unit}</i>
                </strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, code, text, tags, url, repo }) {
  return (
    <article className="card">
      <div className="bar"><i /><i /><i /></div>
      <code><Highlight code={code} /></code>
      <div className="body">
        <h3>{title}</h3>
        <p>{text}</p>
        <div className="tags">{tags.map((t) => <span key={t}>{t}</span>)}</div>
        {(url || repo) && (
          <div className="links">
            {url && <a href={url} target="_blank" rel="noopener noreferrer">Live demo</a>}
            <br />
            {repo && <a href={repo} target="_blank" rel="noopener noreferrer">Code</a>}
          </div>
        )}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      className="projects"
      id="projects"
      style={{ background: "var(--panel)" }}
    >
      <div className="wrap">
        <h2>Projects</h2>
        <div className="grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <h2>Got a project?</h2>
        <p>
          I'm taking on new work. Tell me what you're building and I'll reply
          within two days.
        </p>
        <a
          className="btn solid"
          href={`mailto:${PROFILE.email}?subject=Project%20enquiry`}
        >
          Send an email
        </a>
        <a className="mail" href={`mailto:${PROFILE.email}`}>
          {PROFILE.email}
        </a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <CodeBackground />
      <Header />
      <main id="top">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Contact />
      </main>
      <footer>
        © {new Date().getFullYear()} {PROFILE.name}
      </footer>
    </>
  );
}
