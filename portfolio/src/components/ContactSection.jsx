import React from "react";

export default function ContactSection() {
  return (
    <div className="main-section">
      <div className="card-header-box">
        <h2>Let's Connect</h2>
        <p className="section-description">
          Whether you have a project in mind, an opportunity, or just want to
          say hello, feel free to get in touch!
        </p>
      </div>

      <div className="contact-grid">
        {/* Email Box */}
        <div className="card contact-box">
          <div className="icon-wrapper">✉️</div>
          <div>
            <label>Email Address</label>
            <a href="mailto:eyerusalem0201@gmail.com" className="contact-link">
              eyerusalem0201@gmail.com
            </a>
          </div>
        </div>

        {/* Phone Box */}
        <div className="card contact-box">
          <div className="icon-wrapper">📞</div>
          <div>
            <label>Phone Number</label>
            <a href="tel:0989188046" className="contact-link">
              0989188046
            </a>
          </div>
        </div>

        {/* Location Box */}
        <div className="card contact-box">
          <div>
            <label>Location</label>
            <span className="contact-text">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Availability Box */}
        <div className="card contact-box highlight-box">
          <div>
            <label>Current Status</label>
            <span className="contact-text status-active">
              Available for Roles & Projects
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
