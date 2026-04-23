"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Book, Users, Cross, Diamond, Star, CheckCircle, ArrowUpRight } from "lucide-react";

const programs = [
  {
    name: "Turo Business in a Box",
    tier: "Self-Study Course",
    desc: "The complete A-to-Z blueprint — entity setup, vehicle acquisition, listing optimization, tax strategy — at your own pace.",
    features: [
      "Full launch framework",
      "Vehicle acquisition playbook",
      "MACRS depreciation guide",
      "Listing & pricing templates",
      "Tax strategy foundation",
    ],
    cta: "Enroll Now",
    featured: false,
    icon: <Book size={18} />,
  },
  {
    name: "Turo 5000 Coach",
    tier: "1-on-1 Coaching",
    desc: "Work directly with Maurice to build your first $5,000/month Turo income stream with private strategy sessions and full accountability.",
    features: [
      "Private coaching sessions",
      "Custom vehicle & market strategy",
      "Tax planning with your CPA",
      "Fleet management systems",
      "Ongoing access & accountability",
    ],
    cta: "Apply Now",
    featured: true,
    icon: <Users size={18} />,
  },
  {
    name: "Kingdom Legacy",
    tier: "Faith + Wealth",
    desc: "For the faith-driven entrepreneur — biblical stewardship, generational wealth principles, and Turo as the vehicle for kingdom impact.",
    features: [
      "Faith-based business framework",
      "Stewardship & wealth theology",
      "Family legacy planning",
      "Business as ministry model",
      "Community access",
    ],
    cta: "Learn More",
    featured: false,
    icon: <Cross size={18} />,
  },
];

const miniCourses = [
  { name: "Business Credit Blueprint", price: "$49", desc: "Build fundable business credit in 90 days." },
  { name: "Wife Made Course", price: "Soon", desc: "For the spouse ready to build her own income stream." },
  { name: "Whole Life Business Kit", price: "Bundle", desc: "Entity docs, bookkeeping, listing scripts & more." },
];

export default function ProgramsSection() {
  return (
    <section
      id="programs"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "120px 24px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="chip mb-6">Programs</div>
            <h2
              className="playfair"
              style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 700 }}
            >
              Choose your <span className="gd" style={{ fontStyle: "italic" }}>path</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {programs.map(({ name, tier, desc, features, cta, featured, icon }, i) => (
            <ScrollReveal key={name} delay={i * 0.12}>
              <motion.div
                className="glass-card flex flex-col"
                style={{
                  padding: "40px 32px",
                  position: "relative",
                  background: featured
                    ? "linear-gradient(160deg, rgba(139,105,20,0.18), rgba(12,12,12,0.9))"
                    : undefined,
                  borderColor: featured ? "rgba(201,168,76,0.35)" : undefined,
                }}
                whileHover={{ y: -6, borderColor: "rgba(201,168,76,0.4)" }}
                transition={{ duration: 0.3 }}
              >
                {featured && (
                  <div
                    className="mono"
                    style={{
                      position: "absolute",
                      top: -1,
                      right: 24,
                      background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                      color: "var(--obsidian)",
                      padding: "4px 12px",
                      fontSize: 9,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                    }}
                  >
                    <Star size={10} style={{ display: "inline", marginRight: 4, verticalAlign: "middle" }} />
                    Flagship
                  </div>
                )}
                <div style={{ color: "var(--gold)", marginBottom: 12, opacity: 0.8 }}>{icon}</div>
                <div
                  className="mono"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: "var(--gold)",
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  {tier}
                </div>
                <h3 className="bebas" style={{ fontSize: 32, letterSpacing: "0.04em", marginBottom: 8, lineHeight: 1.15 }}>
                  {name}
                </h3>
                <p style={{ fontSize: 14, color: "var(--text-3)", lineHeight: 1.7, marginBottom: 24 }}>{desc}</p>
                <div className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <div
                      key={f}
                      className="flex items-start gap-3"
                      style={{ fontSize: 13, color: "var(--text-2)" }}
                    >
                      <CheckCircle size={12} style={{ flexShrink: 0, marginTop: 2, color: "var(--gold-dark)" }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <motion.a
                  href="#apply"
                  className={featured ? "btn-primary text-center justify-center" : "btn-ghost text-center justify-center"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {cta} <ArrowUpRight size={12} />
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Mini courses */}
        <div className="grid md:grid-cols-3 gap-3 mt-4">
          {miniCourses.map(({ name, price, desc }, i) => (
            <ScrollReveal key={name} delay={0.3 + i * 0.1}>
              <motion.div
                className="glass-card px-8 py-5 flex items-center justify-between gap-4"
                whileHover={{ borderColor: "rgba(201,168,76,0.3)", y: -2 }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{name}</div>
                  <div style={{ fontSize: 12, color: "var(--text-3)" }}>{desc}</div>
                </div>
                <div className="mono gd bebas" style={{ fontSize: 18, flexShrink: 0, letterSpacing: "0.04em" }}>
                  {price}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}