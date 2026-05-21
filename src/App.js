import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const projects = useMemo(() => ([
    { id: 1, title: 'Pharmconnect 2.0', tags: ['B2B', 'React', 'SAP Integration'], description: 'B2B platform used by 8+ clients and 1000+ distributors. Drove 100% adoption and customer satisfaction through strategic integrations.' },
    { id: 2, title: 'Published Research', tags: ['Research', 'Publication', 'AI'], description: 'Review article in Journal of Nanoparticle Research (Impact Factor: 2.9) on nanotherapeutic approaches for cancer treatment.' },
    { id: 3, title: 'Community Leadership', tags: ['Social Impact', 'Leadership'], description: 'Led 120+ volunteer hours with NSS and Red Dot Drive. Co-Convener at TEDxNSUT and leadership roles in tech clubs.' }
  ]), []);

  const filtered = projects.filter(p => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return p.title.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q) || p.description.toLowerCase().includes(q);
  });

  function submitContact(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
    window.location.href = `mailto:sakshig1109@gmail.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="container">
      <header className="header">
        <div className="header-top">
          <a href="#Home" className="logo">Sakshi Gupta</a>
          <div className="social-icons">
            <a href="mailto:sakshig1109@gmail.com" title="Email" aria-label="Email"><i className="fas fa-envelope"></i></a>
            <a href="https://linkedin.com/in/sakshi-gupta" title="LinkedIn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com" title="GitHub" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <nav className="header-nav-main">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="content">
        <section className="hero">
          <div className="hero-content">
            <div className="terminal-window">
              <div className="terminal-header">
                <span className="terminal-dot red"></span>
                <span className="terminal-dot yellow"></span>
                <span className="terminal-dot green"></span>
                <span className="terminal-title">sakshi.dev — profile</span>
              </div>
              <div className="terminal-body">
                <p className="terminal-line"><span className="terminal-prompt">›</span> <span className="terminal-keyword">profile()</span></p>
                <div className="profile-object">
                  <div className="profile-line"><span className="profile-key">name</span>: <span className="profile-value">Sakshi Gupta</span></div>
                  <div className="profile-line"><span className="profile-key">role</span>: <span className="profile-value">Associate Project Manager</span></div>
                  <div className="profile-line"><span className="profile-key">focus</span>: <span className="profile-value">Project Management · Biotech · Leadership</span></div>
                  <div className="profile-line"><span className="profile-key">org</span>: <span className="profile-value">Pharmarack Technologies</span></div>
                  <div className="profile-line"><span className="profile-key">status</span>: <span className="profile-value online">● available</span></div>
                </div>
                <p className="terminal-line"><span className="terminal-prompt">›</span></p>
              </div>
            </div>
            <h1 className="hero-title">Hi, I'm Sakshi Gupta</h1>
            <p className="hero-desc">I turn cross-functional teams into high-performing units — managing complex B2B platforms, driving adoption, and delivering results on time. With a background in biotechnology and proven track record in strategic project delivery.</p>
            <p className="hero-subtitle">B.Tech Biotechnology · 7.65 CGPA · Published Researcher · TEDxNSUT Co-Convener</p>
            <div className="hero-cta">
              <a href="#projects" className="btn-primary">View My Work</a>
              <a href="#contact" className="btn-secondary">Get in Touch</a>
            </div>
            <div className="highlights">
              <div className="highlight-item"><strong>5+</strong> <span>Years Experience</span></div>
              <div className="highlight-item"><strong>3+</strong> <span>Major Projects</span></div>
              <div className="highlight-item"><strong>100%</strong> <span>Adoption Rate</span></div>
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="experience-item">
            <div className="exp-header">
              <h3>Associate Project Manager</h3>
              <span className="date">Jan 2024 - Present</span>
            </div>
            <p className="company">Pharmarack Technologies Pvt. Ltd.</p>
            <ul className="highlights">
              <li>Led development of Pharmconnect 2.0, a B2B platform for 8+ clients and 1000+ distributors with 100% adoption.</li>
              <li>Managed cross-functional teams across SAP, distributor systems, and MDM integrations.</li>
              <li>Tracked 50+ stakeholders using Jira, ServiceNow PPM, and Advanced Roadmaps.</li>
            </ul>
          </div>
          <div className="experience-item">
            <div className="exp-header">
              <h3>Research Apprentice</h3>
              <span className="date">Jun 2023 - Jul 2023</span>
            </div>
            <p className="company">Defence Research and Development Organisation (DRDO)</p>
            <ul className="highlights">
              <li>Analyzed burn-radiation injuries and isolated biomolecules from 20+ samples.</li>
              <li>Contributed to trauma research with senior scientists.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="projects-controls">
            <input aria-label="Search projects" placeholder="Search projects or tags..." value={query} onChange={e => setQuery(e.target.value)} />
          </div>
          <div className="projects-grid">
            {filtered.map(p => (
              <article key={p.id} className="project-card">
                <h3>{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">{p.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="contact-intro">Got a project or just want to chat? Feel free to reach out!</p>
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-row">
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
            </div>
            <textarea name="message" rows="5" placeholder="Your message" required></textarea>
            <button className="btn-primary" type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sakshi Gupta. Built with ❤️.</p>
      </footer>
    </div>
  );
}

export default App;
