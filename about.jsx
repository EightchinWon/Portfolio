import React from "react";
import profilePic from "./assets/abba.jpg"; // replace with your headshot file
import resumeFile from "./assets/Resume.pdf"; // replace with your resume filename if different

export default function About() {
  return (
    <section className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <img
          src={profilePic}
          alt="Abba Hammond"
          className="about-image"
        />
        <div className="about-text">
          <h2>Abba Hammond</h2>
          <p>
            Hello! My name is Abba Hammond. I am a seasoned Consultant and HR Director
            Manager with over 15 years of experience in project management, technology,
            and human resources. I specialize in Agile methodologies, change
            management, and driving successful project delivery for businesses
            of all sizes. 
          </p>
          <p>
            My mission is to connect people, processes, and technology to create
            impactful outcomes. I’m passionate about continuous learning, helping
            teams succeed, and delivering value with creativity and integrity.
          </p>

          {/* Download Resume Button */}
          <a
            href={resumeFile}
            download="Abba_Hammond_Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}