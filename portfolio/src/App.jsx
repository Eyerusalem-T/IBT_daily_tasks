import React, { useState } from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="container">
      <Header />
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-section">
        {activeTab === "about" && <AboutSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "contact" && <ContactSection />}
      </main>
    </div>
  );
}
