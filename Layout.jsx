// src/components/Layout.jsx
import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <div className="app-shell">
      <NavBar />
      <main className={isHome ? "page page--full" : "page"}>
        <Outlet />
      </main>
      <footer className="footer">© {new Date().getFullYear()} My Portfolio</footer>
    </div>
  );
}