"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { TrendingDown, Shield, Building2, Zap } from "lucide-react";

const problems = [
  { num: "37%+", label: "Effective tax rate on high W-2 income", icon: <TrendingDown size={16} /> },
  { num: "$0", label: "Business deductions available to employees", icon: <Shield size={16} /> },
  { num: "$0", label: "Depreciation write-offs without a business", icon: <Building2 size={16} /> },
  { num: "∞", label: "Growth potential you're leaving on the table", icon: <Zap size={16} /> },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <ScrollReveal>
            <div className="chip mb-6">The Problem</div>
            <h2
              className="playfair"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: 1.05,
                marginBottom: 24,
                fontWeight: 700,
              }}
            >
              High earners pay <span className="gd" style={{ fontStyle: "italic" }}>the most</span> and deduct{" "}
              <span className="gd" style={{ fontStyle: "italic" }}>the least</span>
            </h2>
            <p style={{ color: "var(--text-2)", lineHeight: 1.8, fontSize: 15 }}>
              At $150K–$500K+, you&apos;re in the highest marginal brackets with almost zero shelter. No depreciation.
              No business expenses. No entity structure. Just a massive check to the IRS — every single year.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3">
            {problems.map(({ num, label, icon }, i) => (
              <ScrollReveal key={num} delay={i * 0.1}>
                <motion.div
                  className="glass-card"
                  style={{ padding: "24px 20px", position: "relative", overflow: "hidden" }}
                  whileHover={{ borderColor: "rgba(201,168,76,0.35)", y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 1,
                      background: "linear-gradient(90deg, var(--gold-dark), transparent)",
                    }}
                  />
                  <div style={{ color: "var(--gold)", marginBottom: 8, opacity: 0.6 }}>{icon}</div>
                  <div
                    className="gd bebas"
                    style={{ fontSize: 36, lineHeight: 1.1, marginBottom: 8, letterSpacing: "0.02em" }}
                  >
                    {num}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.5 }}>{label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}