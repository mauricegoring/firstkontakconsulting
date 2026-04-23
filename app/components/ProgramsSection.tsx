"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Book, Users, Cross, Star, CheckCircle, ArrowUpRight } from "lucide-react";

const programs = [
  {
    name: "Turo Business in a Box",
    tier: "Self-Study",
    desc: "A structured blueprint for learning and building at your own pace.",
    features: [
      "Full launch framework",
      "Vehicle acquisition guidance",
      "Listing templates",
      "Tax foundation overview",
    ],
    cta: "Explore Course",
    href: "#",
    featured: false,
    icon: <Book size={18} />,
  },
  {
    name: "Done-For-You Buildout",
    tier: "Primary Offer",
    desc: "A fully structured Turo business, built with clarity from the beginning for serious professionals.",
    features: [
      "Business structure guidance",
      "Vehicle strategy",
      "Listing system setup",
      "Operating workflow",
    ],
    cta: "View Buildout",
    href: "/turo-business-buildout",
    featured: true,
    icon: <Users size={18} />,
  },
  {
    name: "1-on-1 Coaching",
    tier: "Guided",
    desc: "Work directly through strategy and execution with ongoing support.",
    features: [
      "Private sessions",
      "Custom strategy",
      "Execution support",
    ],
    cta: "Apply for Coaching",
    href: "#apply",
    featured: false,
    icon: <Cross size={18} />,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="chip mb-6">Programs</div>
            <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 700 }}>
              Three ways to <span className="gd" style={{ fontStyle: "italic" }}>enter the system</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {programs.map(({ name, tier, desc, features, cta, href, featured, icon }, i) => (
            <ScrollReveal key={name} delay={i * 0.12}>
              <motion.div
                className="glass-card flex flex-col"
                style={{
                  padding: "40px 32px",
                  position: "relative",
                  background: featured ? "linear-gradient(160deg, rgba(139,105,20,0.18), rgba(12,12,12,0.9))" : undefined,
                  borderColor: featured ? "rgba(201,168,76,0.35)" : undefined,
                }}
                whileHover={{ y: -6 }}
              >
                {featured && (
                  <div className="mono" style={{ position: "absolute", top: -1, right: 24, background: "linear-gradient(135deg, var(--gold-dark), var(--gold))", color: "var(--obsidian)", padding: "4px 12px", fontSize: 9 }}>
                    <Star size={10} /> Flagship
                  </div>
                )}

                <div style={{ color: "var(--gold)", marginBottom: 12 }}>{icon}</div>
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>
                  {tier}
                </div>
                <h3 className="bebas" style={{ fontSize: 32, marginBottom: 8 }}>{name}</h3>
                <p style={{ fontSize: 14, color: "var(--text-3)", marginBottom: 24 }}>{desc}</p>

                <div className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3" style={{ fontSize: 13, color: "var(--text-2)" }}>
                      <CheckCircle size={12} style={{ color: "var(--gold-dark)" }} /> {f}
                    </div>
                  ))}
                </div>

                <motion.a href={href} className={featured ? "btn-primary text-center" : "btn-ghost text-center"} whileHover={{ scale: 1.03 }}>
                  {cta} <ArrowUpRight size={12} />
                </motion.a>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
