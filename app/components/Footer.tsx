"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import TaxSavingsEstimator from "./TaxSavingsEstimator";

const NAV = ["Strategy", "Programs", "About", "Apply"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "48px 24px 36px", background: "var(--obsidian)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
          <a href="#" className="flex items-center gap-3">
            <span className="gd bebas" style={{ fontSize: 36, letterSpacing: "0.04em", lineHeight: 1 }}>FK</span>
            <span style={{ width: 1, height: 22, background: "var(--border)" }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, lineHeight: 1 }}>Firstkontak Consulting</div>
              <div className="mono" style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.08em", lineHeight: 1, marginTop: 2 }}>San Diego, CA</div>
            </div>
          </a>
          <div className="flex flex-wrap gap-8">
            {NAV.map((n) => (
              <motion.a
                key={n}
                href={`#${n.toLowerCase()}`}
                className="mono"
                style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}
                whileHover={{ color: "#C9A84C" }}
              >
                {n}
              </motion.a>
            ))}
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }} className="flex flex-col md:flex-row justify-between gap-4">
          <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.06em" }}>
            © {new Date().getFullYear()} Firstkontak Consulting Inc. All rights reserved.
          </div>
          <div className="mono" style={{ fontSize: 10, color: "rgba(201,168,76,0.25)", letterSpacing: "0.06em" }}>
            Results not guaranteed · Consult a licensed CPA
          </div>
        </div>
      </div>
    </footer>
  );
}