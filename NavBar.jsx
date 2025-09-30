import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // ✅ import your custom logo

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    "nav-link" + (isActive ? " nav-link-active" : "");

  return (
    <header className="nav">
      <div className="nav-inner">
        {/* Left side: Brand and links */}
        <div className="nav-left">
          <div className="brand">My Portfolio</div>

          <nav className={"links " + (open ? "open" : "")} onClick={() => setOpen(false)}>
            <NavLink end to="/" className={linkClass}>Home</NavLink>
            <NavLink to="/about" className={linkClass}>About</NavLink>
            <NavLink to="/education" className={linkClass}>Education</NavLink>
            <NavLink to="/project" className={linkClass}>Project</NavLink>
            <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            <NavLink to="/services" className={linkClass}>Services</NavLink>
          </nav>
        </div>

        {/* Right side: Logo */}
        <div className="nav-right">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        {/* Mobile burger button */}
        <button
          className="burger"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}