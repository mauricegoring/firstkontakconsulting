"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Strategy", href: "#strategy" },
  { label: "Calculator", href: "#calculator" },
  { label: "Programs", href: "#programs" },
  { label: "Buildout", href: "/turo-business-buildout" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled ? "rgba(245, 240, 232, 0.92)" : "rgba(245, 240, 232, 0.6)",
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(24px) saturate(180%)",
        WebkitBackdropFilter: "blur(24px) saturate(180%)",
        transition: "all 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between" style={{ height: scrolled ? 60 : 72, transition: "height 0.3s ease" }}>
        {/* Logo + Wordmark */}
        <a href="/" className="flex items-center gap-3 group" style={{ textDecoration: "none" }}>
          <img
            src="/logo.png"
            alt="Firstkontak"
            style={{
              height: scrolled ? 36 : 42,
              width: "auto",
              transition: "height 0.3s ease",
              filter: "none",
            }}
          />
          <div className="flex flex-col justify-center">
            <span
              className="bebas"
              style={{
                fontSize: 18,
                letterSpacing: "0.14em",
                color: "var(--smoke)",
                lineHeight: 1.1,
                transition: "color 0.2s",
              }}
            >
              FIRSTKONTAK
            </span>
            <span
              className="mono"
              style={{
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "var(--gold-dark)",
                textTransform: "uppercase",
                lineHeight: 1.2,
              }}
            >
              CONSULTING
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="mono relative group"
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: label === "Buildout" ? "var(--gold)" : "var(--text-3)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = label === "Buildout" ? "var(--gold)" : "var(--text-3)")}
            >
              {label}
              <span
                className="absolute bottom-0 left-0 w-0 group-hover:w-full"
                style={{
                  height: 1,
                  background: "var(--gold)",
                  transition: "width 0.3s ease",
                }}
              />
            </a>
          ))}
          <motion.a
            href="/turo-business-buildout"
            className="btn-primary"
            style={{ padding: "10px 28px", fontSize: 13 }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Book a Call <ArrowUpRight size={12} />
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} style={{ color: "var(--gold)" }} /> : <Menu size={22} style={{ color: "var(--gold)" }} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden"
          style={{
            background: "rgba(245, 240, 232, 0.98)",
            borderBottom: "1px solid var(--border)",
            padding: "24px 32px 32px",
          }}
        >
          <div className="flex flex-col gap-5">
            {NAV.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMobileOpen(false)}
                className="bebas"
                style={{
                  fontSize: 24,
                  letterSpacing: "0.06em",
                  color: label === "Buildout" ? "var(--gold)" : "var(--smoke)",
                }}
              >
                {label}
              </a>
            ))}
            <a href="/turo-business-buildout" onClick={() => setMobileOpen(false)} className="btn-primary text-center" style={{ marginTop: 8 }}>
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}