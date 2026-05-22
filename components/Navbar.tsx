"use client";

import { useState, useEffect } from "react";
import { profile } from "@/data/profile";
import { asset } from "@/lib/basePath";

const links = [
  { label: "About", href: "#about" },
  { label: "Publications", href: "#publications" },
  { label: "Research", href: "#research" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#about"
          className="font-semibold text-slate-800 hover:text-blue-600 transition-colors"
        >
          {profile.name}
        </a>

        {/* Desktop links */}
        <ul className="hidden sm:flex gap-6 text-sm text-slate-600">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-blue-600 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={asset(profile.cv)}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-full border border-slate-300 hover:border-blue-500 hover:text-blue-600 transition-colors"
            >
              CV
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden text-slate-600"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-3 text-sm text-slate-600">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="hover:text-blue-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={asset(profile.cv)}
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      )}
    </header>
  );
}
