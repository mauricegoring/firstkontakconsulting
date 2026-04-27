"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Building2, Car, Rocket, Diamond } from "lucide-react";

const phases = [
  {
    n: "01",
    title: "STRUCTURE",
    sub: "Entity & Tax Foundation",
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
    title: "ACQUIRE",
    sub: "The Right Vehicles, Right Price",
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
    title: "LAUNCH",
    sub: "Operations & Scale",
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
            <div className="chip mb-6">The Kingdom Blueprint</div>
            <h2
              className="bebas"
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                lineHeight: 1.05,
                letterSpacing: "0.04em",
              }}
            >
              THREE PHASES TO A<br />
              <span className="gd">TAX-STRATEGIC</span> TURO BUSINESS
            </h2>
          </div>
        </ScrollReveal>

        {/* Strategy pillars */}
        <div className="grid md:grid-cols-3 gap-6">
          {phases.map(({ n, title, sub, icon, points }, i) => (
            <ScrollReveal key={n} delay={i * 0.15} direction="up">
              <motion.div
                className="glass-card"
                style={{
                  padding: "48px 36px",
                  position: "relative",
                  overflow: "hidden",
                  borderTop: "2px solid var(--gold-dark)",
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                {/* Phase number watermark */}
                <div
                  className="bebas"
                  style={{
                    position: "absolute",
                    top: -10,
                    right: 16,
                    fontSize: 120,
                    lineHeight: 1,
                    color: "rgba(201, 168, 76, 0.04)",
                    pointerEvents: "none",
                  }}
                >
                  {n}
                </div>

                {/* Gold accent line */}
                <div style={{ width: 40, height: 2, background: "var(--gold)", marginBottom: 24 }} />

                {/* Icon */}
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(201, 168, 76, 0.05))",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}>
                  {icon}
                </div>

                {/* Subtitle */}
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>
                  {sub}
                </div>

                {/* Title */}
                <h3 className="bebas" style={{ fontSize: 44, letterSpacing: "0.04em", marginBottom: 24, lineHeight: 1 }}>
                  {title}
                </h3>

                {/* Points */}
                <div className="flex flex-col gap-4">
                  {points.map((p) => (
                    <div
                      key={p}
                      className="flex items-start gap-3 syne"
                      style={{ fontSize: 13, color: "var(--text-2)", lineHeight: 1.5 }}
                    >
                      <Diamond size={10} style={{ flexShrink: 0, marginTop: 4, color: "var(--gold-dark)" }} />
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
            className="text-center glass-card gold-border-glow"
            style={{
              padding: "40px 32px",
              marginTop: 48,
              background: "linear-gradient(135deg, rgba(139, 105, 20, 0.08), rgba(114, 47, 55, 0.06))",
            }}
          >
            <p
              className="playfair"
              style={{
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontStyle: "italic",
                color: "var(--gold-light)",
                lineHeight: 1.5,
                marginBottom: 8,
              }}
            >
              A single properly depreciated vehicle can generate $15K–$40K in first-year deductions.
            </p>
            <p className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.1em" }}>
              Based on Bonus Depreciation Rules · Consult your CPA
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}