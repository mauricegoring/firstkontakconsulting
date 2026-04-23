"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { val: "22", label: "Vehicle fleet built from zero" },
  { val: "$37K+", label: "Avg. W-2 tax reduction, year one" },
  { val: "5+ yrs", label: "Operating & coaching experience" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32" style={{ paddingTop: 140 }}>
      {/* Ambient glows */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: 800,
          height: 800,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "0",
          left: "-15%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 65%)",
        }}
      />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.03 }}>
        <div style={{ position: "absolute", left: "33%", top: 0, bottom: 0, width: 1, background: "var(--gold)" }} />
        <div style={{ position: "absolute", left: "66%", top: 0, bottom: 0, width: 1, background: "var(--gold)" }} />
        <div style={{ position: "absolute", top: "33%", left: 0, right: 0, height: 1, background: "var(--gold)" }} />
        <div style={{ position: "absolute", top: "66%", left: 0, right: 0, height: 1, background: "var(--gold)" }} />
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          {/* Left */}
          <div className="md:col-span-8">
            <ScrollReveal delay={0.1}>
              <div className="chip mb-8" style={{ backdropFilter: "blur(12px)", background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}>
                For W-2 earners · $150K+
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1
                className="playfair"
                style={{
                  fontSize: "clamp(44px, 7.5vw, 96px)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.02em",
                  marginBottom: 32,
                }}
              >
                Your income is <br className="hidden md:block" />
                <span className="gd" style={{ fontStyle: "italic" }}>building the IRS&apos;s</span>
                <br />
                wealth. Not yours.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p
                style={{
                  fontSize: "clamp(15px, 1.6vw, 18px)",
                  color: "var(--text-2)",
                  lineHeight: 1.75,
                  maxWidth: 520,
                  marginBottom: 40,
                }}
              >
                A tax-strategic Turo business gives high-income W-2 earners what their paycheck
                can&apos;t — depreciation write-offs, passive revenue, and a real path to keeping
                more of what they earn.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-3">
                <motion.a
                  href="#apply"
                  className="btn-primary"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Apply for Coaching <ArrowUpRight size={14} />
                </motion.a>
                <motion.a
                  href="#calculator"
                  className="btn-ghost"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Calculate Savings
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Stats */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {stats.map(({ val, label }, i) => (
              <ScrollReveal key={val} delay={0.3 + i * 0.15} direction="right">
                <div
                  className="glass-card"
                  style={{
                    padding: "20px 24px",
                    borderLeft: "2px solid var(--gold-dark)",
                  }}
                >
                  <div
                    className="gd bebas"
                    style={{ fontSize: 40, letterSpacing: "0.02em", lineHeight: 1.1 }}
                  >
                    {val}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 4, lineHeight: 1.4 }}>
                    {label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}