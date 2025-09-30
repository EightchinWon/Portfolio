import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
    
      <div className="hero-overlay" />
      <div className="slash slash-1" />
      <div className="slash slash-2" />

      <div className="hero-content">
        <div className="hero-left">
          <h1 className="hero-title">
            <span className="title-top">Creative</span>
            <span className="title-bottom">Minds</span>
          </h1>
        </div>

        <div className="hero-right">
          <p className="hero-welcome">
            There is a reason why you landed on this page.
            <br />
            <strong>Welcome to Creative Minds Home.</strong>
          </p>

          <p className="hero-mission">
            I build thoughtful digital experiences that connect ideas to impact.
            My work blends product thinking, clean execution, and human-first
            design to help businesses grow.
          </p>

          {/* Original CTA*/}
          <div className="hero-ctas">
            <Link to="/services" className="btn btn-primary">Explore Services</Link>
            <Link to="/project" className="btn btn-ghost">View Projects</Link>
            <Link to="/about" className="btn btn-link">About Me</Link>
            <Link to="/contact" className="btn btn-link">Contact</Link>
          </div>

          <div className="hero-caption">
            Always learning. Always iterating. Always delivering value.
          </div>
        </div>
      </div>

    
    </section>
  );
}