import React, { useState, useEffect } from "react";

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load projects data");
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="main-section">
      <div className="card-header-box">
        <h2>Featured Projects</h2>
        <p className="section-description">
          A showcase of full-stack web applications built with modern tools and
          clean architecture.
        </p>
      </div>

      {loading && (
        <div className="card text-center">
          <p className="section-description">Loading projects...</p>
        </div>
      )}

      {error && (
        <div className="card text-center">
          <p className="section-description" style={{ color: "#ef4444" }}>
            Error: {error}
          </p>
        </div>
      )}

      {!loading && !error && (
        <div className="projects-grid">
          {projects.map((proj) => (
            <div key={proj.id || proj.title} className="card project-card">
              <span className="badge-small">{proj.subtitle}</span>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, idx) => (
                  <span key={idx} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
