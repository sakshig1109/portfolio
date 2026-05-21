import React, { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  const projects = useMemo(() => ([
    { id: 1, title: 'Pharmconnect 2.0', tags: ['B2B', 'React', 'Integration'], description: 'B2B platform for distributors and pharma clients with SAP integrations.' },
    { id: 2, title: 'NanoReview', tags: ['Research', 'Publication'], description: 'A review site for nanotherapeutic approaches with featured publications.' },
    { id: 3, title: 'Volunteer Portal', tags: ['Social', 'Dashboard'], description: 'Volunteer hours tracking and event management for NGOs.' }
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
        <div className="header-content">
          <h1 className="name">Sakshi Gupta</h1>
          <p className="tagline">Associate Project Manager • Biotech Professional</p>
          <nav className="header-nav">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="content">
        <section id="about" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">Associate Project Manager with a biotechnology background and strong experience delivering B2B digital platforms for pharmaceutical clients. Proven ability to manage cross-functional teams, integrate SAP and distributor systems, and ensure customer-focused delivery with high adoption.</p>
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
              <li>Led Pharmconnect 2.0 — a B2B platform used by multiple clients and distributors.</li>
              <li>Managed integrations with SAP and distributor systems and drove adoption.</li>
            </ul>
          </div>
          {/* kept other experience items concise for readability */}
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
          <form className="contact-form" onSubmit={submitContact}>
            <div className="form-row">
              <input name="name" placeholder="Your name" required />
              <input name="email" type="email" placeholder="Your email" required />
            </div>
            <textarea name="message" rows="5" placeholder="Message" required></textarea>
            <button className="btn" type="submit">Send Message</button>
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
