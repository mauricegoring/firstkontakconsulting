"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const NAV = ["Strategy", "Programs", "About", "Apply"];

export default function Footer() {
  return (
    <footer style={{ borderTop: "2px solid var(--gold-dark)", background: "var(--void)" }}>
      {/* Newsletter bar */}
      <div style={{ padding: "48px 24px", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="bebas" style={{ fontSize: 24, letterSpacing: "0.06em", marginBottom: 4 }}>
              STAY IN THE LOOP
            </h3>
            <p className="syne" style={{ fontSize: 13, color: "var(--text-3)" }}>
              Tax strategy insights and Turo business updates — no spam.
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Your email"
              style={{
                maxWidth: 280,
                padding: "12px 18px",
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                borderRadius: 4,
                color: "var(--smoke)",
                fontSize: 14,
              }}
            />
            <motion.a
              href="#"
              className="btn-primary"
              style={{ padding: "12px 24px", fontSize: 13, whiteSpace: "nowrap" }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Subscribe <ArrowUpRight size={12} />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ padding: "48px 24px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-10">
            <a href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Firstkontak Consulting" style={{ height: 36, width: "auto" }} />
              <div style={{ width: 1, height: 20, background: "var(--border)" }} />
              <div>
                <div className="bebas" style={{ fontSize: 16, letterSpacing: "0.06em", lineHeight: 1 }}>FIRSTKONTAK CONSULTING</div>
                <div className="mono" style={{ fontSize: 9, color: "var(--text-3)", letterSpacing: "0.1em", marginTop: 2 }}>SAN DIEGO, CA</div>
              </div>
            </a>
            <div className="flex flex-wrap gap-8">
              {NAV.map((n) => (
                <motion.a
                  key={n}
                  href={`#${n.toLowerCase()}`}
                  className="mono"
                  style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)" }}
                  whileHover={{ color: "#c9a84c" }}
                >
                  {n}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="section-divider" />

          {/* Ecosystem cross-link band */}
          <div style={{ paddingTop: 24, paddingBottom: 24 }}>
            <div
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 16,
                textAlign: "center",
              }}
            >
              Firstkontak Ecosystem
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4" style={{ textAlign: "center" }}>
              {[
                { label: "Coaching", url: "https://firstkontakconsulting.com" },
                { label: "Operator", url: "https://firstkontakconsultant.com" },
                { label: "Education", url: "https://hostacademy.company" },
                { label: "MINI Niche", url: "https://minimoneymethod.com" },
                { label: "Software", url: "https://fkcommandcenter.pro" },
              ].map(({ label, url }) => (
                <div key={label}>
                  <div
                    className="mono"
                    style={{ fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 4 }}
                  >
                    {label}
                  </div>
                  <a
                    href={url}
                    target={url.startsWith("http") ? "_blank" : undefined}
                    rel="noopener"
                    style={{ fontSize: 12, color: "var(--smoke)", textDecoration: "none" }}
                  >
                    {url.replace("https://", "")}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Powered by lockup */}
          <div
            className="mono"
            style={{
              padding: "16px 0",
              borderTop: "1px solid var(--border)",
              borderBottom: "1px solid var(--border)",
              textAlign: "center",
              fontSize: 11,
              letterSpacing: "0.10em",
              textTransform: "uppercase",
              color: "var(--gold)",
            }}
          >
            Powered by FK Command Center · The operating system for tax-strategic Turo hosts
          </div>

          <div style={{ paddingTop: 24 }} className="flex flex-col md:flex-row justify-between gap-4">
            <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.06em" }}>
              © {new Date().getFullYear()} Firstkontak Consulting Inc. All rights reserved.
            </div>
            <div className="mono" style={{ fontSize: 10, color: "rgba(201, 168, 76, 0.25)", letterSpacing: "0.06em" }}>
              Built on the Rock · Results not guaranteed · Consult a licensed CPA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}