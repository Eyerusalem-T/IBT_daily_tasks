import React from "react";

export default function AboutSection() {
  return (
    <div className="section-content">
      <h2>About Me</h2>
      <p>
        Welcome! I am Eyerusalem, a developer passionate about building modern,
        scalable web applications. I specialize in full-stack JavaScript
        frameworks and database integration.
      </p>
      <h3>Core Skills</h3>
      <div className="card">
        <h2>Core Technical Skills</h2>
        <div className="skill-grid">
          <div className="skill-category">
            <h4>Frontend & Frameworks</h4>
            <div className="tags">
                <span className="tag">React</span>
                <span className="tag">Next.js</span>
                <span className="tag">JavaScript</span>
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend & Databases</h4>
            <div className="tags">
                <span className="tag">Node.js</span>
                <span className="tag">Prisma ORM</span>
                <span className="tag">PostgreSQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>DevOps & Tools</h4>
            <div className="tags">
                <span className="tag">Docker</span>
                <span className="tag">Git</span>
                <span className="tag">GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
