import React from "react";
import { Link } from "react-router-dom";

// Images live directly in: src/assets/
import projectImg from "./assets/project.jpg";
import hrImg from "./assets/hr.jpg";
import changeImg from "./assets/change.jpg";
import trainingImg from "./assets/training.jpg";
import strategyImg from "./assets/startegy.jpg"; // spelled exactly like your file

export default function Services() {
  const services = [
    {
      title: "Project & Program Management",
      image: projectImg,
      description:
        "End-to-end leadership across scope, schedule, budget, risk and comms to deliver outcomes—on time and on value.",
    },
    {
      title: "Human Resources Consulting",
      image: hrImg,
      description:
        "People operations, talent, compliance and HR best practices that strengthen culture and scalability.",
    },
    {
      title: "Change Management",
      image: changeImg,
      description:
        "Stakeholder engagement, communications and adoption plans that make change stick with minimal disruption.",
    },
    {
      title: "Training & Development",
      image: trainingImg,
      description:
        "Targeted learning programs that upskill teams and enable leaders with repeatable playbooks.",
    },
    {
      title: "Strategy & Process Improvement",
      image: strategyImg,
      description:
        "Operational reviews, KPI design and workflow optimization to bridge strategy and execution.",
    },
  ];

  return (
    <section className="services-page">
      <header className="section-head">
        <h1 className="section-title">Services</h1>
        <p className="section-subtitle">
          Practical, people-first consulting for growing businesses.
        </p>
      </header>

      <div className="services-grid">
        {services.map((s, i) => (
          <article key={i} className="service-card">
            <h2 className="service-title">{s.title}</h2>
            <img src={s.image} alt={s.title} className="service-image" />
            <p className="service-description">{s.description}</p>

            <div className="service-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}