"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { label: "Strategy", href: "#strategy" },
  { label: "Calculator", href: "#calculator" },
  { label: "Programs", href: "#programs" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: scrolled
          ? "rgba(6,6,6,0.85)"
          : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
        backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <span
            className="gd bebas"
            style={{ fontSize: 36, letterSpacing: "0.04em", lineHeight: 1 }}
          >
            FK
          </span>
          <span style={{ width: 1, height: 22, background: "var(--border)" }} />
          <span
            className="mono"
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              color: "var(--text-3)",
              textTransform: "uppercase",
            }}
          >
            Consulting
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {NAV.map(({ label, href }) => (
            <motion.a
              key={label}
              href={href}
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-3)",
              }}
              whileHover={{ color: "#C9A84C" }}
              transition={{ duration: 0.2 }}
            >
              {label}
            </motion.a>
          ))}
          <motion.a
            href="#apply"
            className="btn-primary"
            style={{ padding: "10px 24px", fontSize: 12 }}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
          >
            Get Started <ArrowUpRight size={12} />
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? (
            <X size={20} style={{ color: "var(--gold)" }} />
          ) : (
            <Menu size={20} style={{ color: "var(--gold)" }} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden px-8 pb-6 flex flex-col gap-4"
          style={{ background: "rgba(6,6,6,0.98)" }}
        >
          {NAV.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              style={{ color: "var(--text-2)", fontSize: 14, fontWeight: 400 }}
            >
              {label}
            </a>
          ))}
          <a
            href="#apply"
            onClick={() => setMobileOpen(false)}
            className="btn-primary text-center"
            style={{ fontSize: 12 }}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}