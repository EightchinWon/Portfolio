import React from "react";
import bambooImg from "./assets/bamboo.jpg";
import softwareImg from "./assets/software.png";
import posImg from "./assets/tech2.jpg";

export default function Project() {
  const projects = [
    {
      title: "Sustainable Bamboo Toilet Paper Launch",
      image: bambooImg,
      blurb:
        "Led the end-to-end launch of an eco-friendly bamboo toilet paper brand. Scoped the roadmap, sourced and negotiated with suppliers, coordinated logistics, and managed the retail rollout.",
      outcome:
        "On-time market entry; secured initial shelf placement and positioned the brand as a credible sustainable alternative.",
      role: "Project Director",
    },
    {
      title: "HR System Modernization & Integration",
      image: softwareImg,
      blurb:
        "Transformed HR operations by moving from an archaic process to a modern, integrated HR platform. Ran vendor evaluation, data migration, change management, and enablement.",
      outcome:
        "Reduced admin time, improved data accuracy, and delivered a better employee experience with scalable workflows.",
      role: "HR Consultant",
    },
    {
      title: "Point-of-Sale (POS) Configuration & Deployment",
      image: posImg,
      blurb:
        "Coordinated configuration and deployment of POS across desktop, tablet, and handheld devices. Managed vendors, testing, and payment/inventory integrations.",
      outcome:
        "Faster checkouts, standardized operations, and higher customer satisfaction across locations.",
      role: "Program Deployment Manager",
    },
  ];

  return (
    <section className="projects section">
      <header className="section-head">
        <h1 className="section-title">Highlighted Projects</h1>
        <p className="section-subtitle">
          A selection of work focused on momentum, clarity, and measurable outcomes.
        </p>
      </header>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <article key={i} className="project-card">
            <div className="project-media">
              <img src={p.image} alt={p.title} className="project-image" />
            </div>

            <div className="project-body">
              <h2 className="project-title">{p.title}</h2>
              <div className="project-meta">
                <span className="badge">{p.role}</span>
              </div>
              <p className="project-blurb">{p.blurb}</p>
              <div className="project-outcome">
                <span className="label">Outcome</span>
                <p>{p.outcome}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}