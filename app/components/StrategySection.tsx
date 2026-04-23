"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Building2, Car, Rocket, Diamond } from "lucide-react";

const phases = [
  {
    n: "01",
    title: "Structure",
    sub: "Entity & tax foundation",
    icon: <Building2 size={20} />,
    points: [
      "LLC formation & operating agreements",
      "EIN, business banking, credit",
      "MACRS bonus depreciation strategy",
      "Bookkeeping & expense systems",
    ],
  },
  {
    n: "02",
    title: "Acquire",
    sub: "The right vehicles, right price",
    icon: <Car size={20} />,
    points: [
      "Vehicle profile that maximizes ROI",
      "Copart, dealer & private sourcing",
      "Cost-basis & insurance structure",
      "Fleet naming & documentation",
    ],
  },
  {
    n: "03",
    title: "Launch",
    sub: "Operations & scale",
    icon: <Rocket size={20} />,
    points: [
      "5-star Turo listing framework",
      "Dynamic pricing & yield management",
      "Remote fleet management systems",
      "Scale milestones: 1→5→10 vehicles",
    ],
  },
];

export default function StrategySection() {
  return (
    <section id="strategy" style={{ padding: "120px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-20">
            <div className="chip mb-6">The Firstkontak Method</div>
            <h2
              className="playfair"
              style={{ fontSize: "clamp(36px, 5vw, 60px)", lineHeight: 1.05, fontWeight: 700 }}
            >
              Three phases to a <span className="gd" style={{ fontStyle: "italic" }}>tax-strategic</span> Turo business
            </h2>
          </div>
        </ScrollReveal>

        <div
          className="grid md:grid-cols-3 gap-px"
          style={{ background: "var(--border)", border: "1px solid var(--border)" }}
        >
          {phases.map(({ n, title, sub, icon, points }, i) => (
            <ScrollReveal key={n} delay={i * 0.15} direction="up">
              <motion.div
                className="group"
                style={{
                  background: "var(--surface)",
                  padding: "48px 36px",
                  position: "relative",
                }}
                whileHover={{ background: "rgba(12,12,12,0.95)" }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="bebas"
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 24,
                    fontSize: 90,
                    lineHeight: 1,
                    color: "rgba(201,168,76,0.04)",
                  }}
                >
                  {n}
                </div>
                <div style={{ color: "var(--gold)", marginBottom: 16, opacity: 0.8 }}>{icon}</div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: 16,
                  }}
                >
                  {sub}
                </div>
                <h3
                  className="bebas"
                  style={{ fontSize: 40, letterSpacing: "0.04em", marginBottom: 20 }}
                >
                  {title}
                </h3>
                <div className="flex flex-col gap-3">
                  {points.map((p) => (
                    <div
                      key={p}
                      className="flex items-start gap-3"
                      style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}
                    >
                      <Diamond size={10} style={{ flexShrink: 0, marginTop: 3, color: "var(--gold)" }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Callout */}
        <ScrollReveal delay={0.3}>
          <div
            className="text-center glass-card py-10 px-8"
            style={{
              background: "linear-gradient(135deg, rgba(139,105,20,0.12), rgba(201,168,76,0.04))",
              border: "1px solid var(--border)",
              borderTop: "none",
            }}
          >
            <p
              className="playfair"
              style={{
                fontSize: "clamp(18px, 2.5vw, 24px)",
                fontStyle: "italic",
                color: "var(--gold-light)",
                lineHeight: 1.5,
              }}
            >
              A single properly depreciated vehicle can generate $15K–$40K in first-year deductions.
            </p>
            <p
              className="mono"
              style={{ fontSize: 10, color: "var(--text-3)", marginTop: 8, letterSpacing: "0.08em" }}
            >
              Based on Bonus Depreciation Rules · Consult your CPA
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}