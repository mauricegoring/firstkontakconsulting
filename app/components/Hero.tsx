"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { val: "22", label: "Vehicle fleet built from one car" },
  { val: "1,500+", label: "Turo trips of operating experience" },
  { val: "$15K", label: "Done-for-you business buildout offer" },
];

const proof = [
  "Built for high-income W-2 earners",
  "Entity, vehicle, and Turo systems",
  "Business ownership with strategic planning",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-24 md:pb-32" style={{ paddingTop: 140 }}>
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          right: "-10%",
          width: 860,
          height: 860,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(239,200,139,0.12) 0%, transparent 64%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-12%",
          left: "-15%",
          width: 680,
          height: 680,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168,32,26,0.13) 0%, transparent 64%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-8">
            <ScrollReveal delay={0.1}>
              <div className="chip mb-7" style={{ backdropFilter: "blur(12px)", background: "rgba(239,200,139,0.08)", border: "1px solid rgba(239,200,139,0.26)" }}>
                <ShieldCheck size={13} /> For High-Income W-2 Earners
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1
                className="playfair"
                style={{
                  fontSize: "clamp(48px, 7.8vw, 104px)",
                  fontWeight: 800,
                  lineHeight: 0.92,
                  letterSpacing: "-0.035em",
                  marginBottom: 30,
                }}
              >
                Turn tax pressure into <br className="hidden md:block" />
                <span className="gd" style={{ fontStyle: "italic" }}>cash-flowing</span>
                <br />
                business ownership.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p
                style={{
                  fontSize: "clamp(16px, 1.65vw, 20px)",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  maxWidth: 650,
                  marginBottom: 34,
                }}
              >
                Firstkontak Consulting helps high-income W-2 earners build a strategic Turo business with entity setup, vehicle strategy, listing systems, business credit foundation, and operating support.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.44}>
              <div className="flex flex-wrap gap-3 mb-10">
                {proof.map((item) => (
                  <div key={item} className="flex items-center gap-2" style={{ color: "var(--text-2)", fontSize: 13 }}>
                    <CheckCircle size={14} style={{ color: "var(--gold)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-3">
                <motion.a href="/turo-business-buildout" className="btn-primary" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  Apply for Buildout <ArrowUpRight size={14} />
                </motion.a>
                <motion.a href="#calculator" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Estimate Your Position
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          <div className="md:col-span-4 flex flex-col gap-5">
            <ScrollReveal delay={0.24} direction="right">
              <div className="glass-card" style={{ padding: "26px", borderColor: "rgba(239,200,139,0.28)" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 42, height: 42, borderRadius: 999, background: "rgba(239,200,139,0.1)", display: "grid", placeItems: "center", color: "var(--gold)" }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Premium Offer</div>
                    <div style={{ fontSize: 16, color: "var(--smoke)", marginTop: 2 }}>Business built around ownership</div>
                  </div>
                </div>
                <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                  Not another side-hustle course. This is a practical Turo business model designed around structure, systems, and long-term cash flow.
                </p>
              </div>
            </ScrollReveal>

            {stats.map(({ val, label }, i) => (
              <ScrollReveal key={val} delay={0.35 + i * 0.12} direction="right">
                <div className="glass-card" style={{ padding: "18px 22px", borderLeft: "3px solid var(--gold)" }}>
                  <div className="gd bebas" style={{ fontSize: 42, letterSpacing: "0.02em", lineHeight: 1.05 }}>{val}</div>
                  <div style={{ fontSize: 13, color: "var(--text-3)", marginTop: 4, lineHeight: 1.4 }}>{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
