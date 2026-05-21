import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="name">Sakshi Gupta</h1>
          <p className="tagline">Associate Project Manager | Biotech Professional | Leader</p>
          <div className="contact-info">
            <a href="mailto:sakshig1109@gmail.com"><i className="fas fa-envelope"></i> sakshig1109@gmail.com</a>
            <span className="divider">•</span>
            <a href="tel:+917217638548"><i className="fas fa-phone"></i> +91-7217638548</a>
            <span className="divider">•</span>
            <span><i className="fas fa-map-marker-alt"></i> New Delhi</span>
            <span className="divider">•</span>
            <span><i className="fab fa-linkedin"></i> Sakshi Gupta</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="content">
        {/* About Section */}
        <section className="section">
          <h2 className="section-title">About Me</h2>
          <p className="about-text">
            Associate Project Manager with a biotechnology background and strong experience delivering B2B digital platforms for pharmaceutical clients. 
            Proven ability to manage cross-functional teams, integrate SAP and distributor systems, and ensure customer-focused delivery with high adoption.
          </p>
        </section>

        {/* Experience Section */}
        <section className="section">
          <h2 className="section-title">Experience</h2>
          
          <div className="experience-item">
            <div className="exp-header">
              <h3>Associate Project Manager</h3>
              <span className="date">Jan 2024 - Present</span>
            </div>
            <p className="company">Pharmarack Technologies Pvt. Ltd.</p>
            <ul className="highlights">
              <li>Led the development of Pharmconnect 2.0, a B2B platform used by 8+ clients and 1000+ distributors, achieving 100% adoption and strong customer satisfaction.</li>
              <li>Managed project planning, stakeholder coordination, and cross-functional alignment across SAP, distributor systems, and MDM integrations.</li>
              <li>Tracked progress with Jira dashboards and Advanced Roadmaps while using MS Excel for client status and executive reporting.</li>
              <li>Leveraged ServiceNow PPM for task tracking, milestone monitoring, and resource allocation across 50+ stakeholders.</li>
              <li>Served as the client-facing tactical point of contact for deliverables, timelines, and coordination with leadership, vendors, and contractors.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Research Apprentice</h3>
              <span className="date">Jun 2023 - Jul 2023</span>
            </div>
            <p className="company">Defence Research and Development Organisation (DRDO)</p>
            <ul className="highlights">
              <li>Analyzed burn-radiation injuries and isolated biomolecules from 20+ rats to identify key biomarkers.</li>
              <li>Collaborated with senior scientists to design experiments and contribute findings to trauma research efforts.</li>
              <li>Advanced understanding of combined injury mechanisms and supported development of new therapeutic insights.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Lab Instrumentation Intern</h3>
              <span className="date">Dec 2022 - Jan 2023</span>
            </div>
            <p className="company">All India Institute of Medical Sciences (AIIMS)</p>
            <ul className="highlights">
              <li>Assisted researchers in conducting cardiac biochemistry experiments and tests following laboratory protocols.</li>
              <li>Participated in sample collection and preparation while gaining hands-on experience in ELISA, HPLC, and flow cytometry.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="exp-header">
              <h3>Performance Analyst Intern</h3>
              <span className="date">Dec 2021 - Jan 2022</span>
            </div>
            <p className="company">Delhi Jal Board</p>
            <ul className="highlights">
              <li>Conducted surveys and analysis of 500+ commercial connections to ensure data accuracy and reliability.</li>
              <li>Identified and corrected data anomalies, achieving 99.9% accuracy for quarterly financial reporting.</li>
              <li>Presented insights and recommendations to senior authorities to help improve departmental operations.</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="section">
          <h2 className="section-title">Education</h2>
          
          <div className="education-item">
            <div className="edu-header">
              <h3>B.Tech in Biotechnology</h3>
              <span className="cgpa">7.65 CGPA</span>
            </div>
            <p className="university">Netaji Subhas University of Technology, New Delhi (2020-2024)</p>
          </div>

          <div className="education-item">
            <div className="edu-header">
              <h3>AISSCE/CBSE (Class XII)</h3>
              <span className="cgpa">87.8%</span>
            </div>
            <p className="university">Shiksha Bharati Public School, New Delhi (2018)</p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills & Tools</h2>
          <div className="skills-grid">
            <div className="skill-badge">Project Management</div>
            <div className="skill-badge">Jira & Confluence</div>
            <div className="skill-badge">ServiceNow</div>
            <div className="skill-badge">MS Excel & PowerPoint</div>
            <div className="skill-badge">SQL</div>
            <div className="skill-badge">Data Analysis</div>
            <div className="skill-badge">Canva & Biorender</div>
            <div className="skill-badge">Research</div>
            <div className="skill-badge">Leadership</div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="section">
          <h2 className="section-title">Achievements & Recognition</h2>
          <ul className="achievements-list">
            <li><strong>Published Research:</strong> Review article in Journal of Nanoparticle Research (Impact Factor: 2.9) on nanotherapeutic approaches for cancer treatment.</li>
            <li><strong>Leadership Roles:</strong> Co-Convener’24 & Licensee’23 at TEDxNSUT, Vice President of Canvas, President of Biowings.</li>
            <li><strong>Competition Wins:</strong> 2nd place in Bid & Build E-Summit’23 IIT Bombay (100 teams), 2nd runner-up in Consigliere’23 (100+ teams).</li>
            <li><strong>Scholarship:</strong> CVSPK merit scholarship awarded to the top 5% of academic performers.</li>
            <li><strong>Social Impact:</strong> 120+ volunteer hours with NSS and Red Dot Drive, promoting menstrual hygiene awareness.</li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Sakshi Gupta. All rights reserved.</p>
        <div className="social-links">
          <a href="mailto:sakshig1109@gmail.com" title="Email"><i className="fas fa-envelope"></i></a>
        </div>
      </footer>
    </div>
  );
}

export default App;
