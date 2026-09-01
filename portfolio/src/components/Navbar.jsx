import React from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  return (
    <nav className="nav">
      <button
        className={activeTab === "about" ? "active" : ""}
        onClick={() => setActiveTab("about")}
      >
        About Me
      </button>
      <button
        className={activeTab === "projects" ? "active" : ""}
        onClick={() => setActiveTab("projects")}
      >
        Projects
      </button>
      <button
        className={activeTab === "contact" ? "active" : ""}
        onClick={() => setActiveTab("contact")}
      >
        Contact
      </button>
    </nav>
  );
}
