import React from "react";
import { Routes, Route } from "react-router-dom";

// paths matched to your tree
import Layout from "./components/Layout.jsx";
import Home from "./components/Home.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Education from "./education.jsx";
import Project from "./project.jsx";
import Services from "./services.jsx";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="education" element={<Education />} />
        <Route path="project" element={<Project />} />
        <Route path="services" element={<Services />} />
        <Route path="*" element={<Home />} />
        

      </Route>
    </Routes>
  );
}