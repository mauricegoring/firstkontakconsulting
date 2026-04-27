"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { TrendingDown, Shield, Building2, Zap } from "lucide-react";

const problems = [
  { num: "37%+", label: "Effective tax rate on high W-2 income", icon: <TrendingDown size={16} />, desc: "At six figures, you're paying the highest marginal rates with almost zero shelter." },
  { num: "$0", label: "Business deductions available to employees", icon: <Shield size={16} />, desc: "No depreciation, no business expenses, no entity structure to protect you." },
  { num: "$0", label: "Depreciation write-offs without a business", icon: <Building2 size={16} />, desc: "W-2 earners can't touch MACRS, Section 168k, or bonus depreciation." },
  { num: "∞", label: "Growth potential you're leaving on the table", icon: <Zap size={16} />, desc: "Every year without a business entity is a year of lost deductions and compounding." },
];

export default function ProblemSection() {
  return (
    <section
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "120px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Left: Headline */}
          <div className="md:col-span-5">
            <ScrollReveal>
              <div className="chip mb-6">The Problem</div>
              <h2
                className="bebas"
                style={{
                  fontSize: "clamp(40px, 5.5vw, 68px)",
                  lineHeight: 1.05,
                  letterSpacing: "0.04em",
                  marginBottom: 24,
                }}
              >
                HIGH EARNERS<br />
                PAY <span className="gd">THE MOST</span><br />
                AND DEDUCT <span className="gd">THE LEAST</span>
              </h2>
              <p className="syne" style={{ color: "var(--text-2)", lineHeight: 1.8, fontSize: 15, maxWidth: 440 }}>
                At $150K–$500K+, you&apos;re in the highest marginal brackets with almost zero shelter. No depreciation. No business expenses. No entity structure. Just a massive check to the IRS — every single year.
              </p>
            </ScrollReveal>
          </div>

          {/* Right: Pain point cards */}
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            {problems.map(({ num, label, icon, desc }, i) => (
              <ScrollReveal key={num} delay={i * 0.1}>
                <motion.div
                  className="glass-card"
                  style={{ padding: "28px 24px", position: "relative", overflow: "hidden" }}
                  whileHover={{ y: -4, borderColor: "rgba(201, 168, 76, 0.35)" }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gold top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: "linear-gradient(90deg, var(--gold), transparent)",
                    }}
                  />
                  {/* Icon circle */}
                  <div style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(201, 168, 76, 0.05))",
                    display: "grid",
                    placeItems: "center",
                    color: "var(--gold)",
                    marginBottom: 16,
                  }}>
                    {icon}
                  </div>
                  <div className="gd bebas" style={{ fontSize: 40, lineHeight: 1, letterSpacing: "0.02em", marginBottom: 8 }}>
                    {num}
                  </div>
                  <div className="syne" style={{ fontSize: 13, fontWeight: 600, color: "var(--smoke)", marginBottom: 6, lineHeight: 1.4 }}>
                    {label}
                  </div>
                  <div className="syne" style={{ fontSize: 12, color: "var(--text-3)", lineHeight: 1.5 }}>
                    {desc}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}