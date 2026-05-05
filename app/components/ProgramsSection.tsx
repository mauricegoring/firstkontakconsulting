"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Book, Users, Cross, Star, CheckCircle, ArrowUpRight, Cpu } from "lucide-react";

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
  {
    name: "FK Command Center",
    tier: "Operating System",
    desc: "The software we use to run our own fleet. Listings, pricing, bookkeeping, tax-ready exports.",
    features: [
      "Fleet roster + listings",
      "Pricing & bookkeeping",
      "Tax-ready exports",
      "Free trial, no card",
    ],
    cta: "Start Free Trial",
    href: "https://fkcommandcenter.pro/",
    featured: false,
    icon: <Cpu size={18} />,
  },
];

export default function ProgramsSection() {
  return (
    <section id="programs" style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "120px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="chip mb-6">Programs</div>
            <h2 className="bebas" style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.05, letterSpacing: "0.04em" }}>
              FOUR WAYS TO<br /><span className="gd">ENTER THE SYSTEM</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-stretch">
          {programs.map(({ name, tier, desc, features, cta, href, featured, icon }, i) => (
            <ScrollReveal key={name} delay={i * 0.12}>
              <motion.div
                className="glass-card flex flex-col"
                style={{
                  padding: "44px 36px",
                  position: "relative",
                  borderTop: featured ? "2px solid var(--gold)" : undefined,
                  background: featured ? "linear-gradient(160deg, rgba(184, 134, 11, 0.08), rgba(255, 255, 255, 0.6))" : undefined,
                  borderColor: featured ? "rgba(201, 168, 76, 0.3)" : undefined,
                }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {featured && (
                  <div
                    className="mono flex items-center gap-1"
                    style={{
                      position: "absolute",
                      top: -1,
                      right: 20,
                      background: "linear-gradient(135deg, var(--gold-dark), var(--gold))",
                      color: "var(--obsidian)",
                      padding: "5px 14px",
                      fontSize: 9,
                      letterSpacing: "0.12em",
                    }}
                  >
                    <Star size={10} /> FLAGSHIP
                  </div>
                )}

                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 8,
                  background: "linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(201, 168, 76, 0.05))",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--gold)",
                  marginBottom: 20,
                }}>
                  {icon}
                </div>

                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.14em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 12 }}>
                  {tier}
                </div>

                <h3 className="bebas" style={{ fontSize: 36, letterSpacing: "0.04em", marginBottom: 8, lineHeight: 1 }}>{name}</h3>

                <p className="syne" style={{ fontSize: 14, color: "var(--text-3)", marginBottom: 28, lineHeight: 1.6 }}>{desc}</p>

                <div className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <div key={f} className="flex items-start gap-3 syne" style={{ fontSize: 13, color: "var(--text-2)" }}>
                      <CheckCircle size={12} style={{ flexShrink: 0, marginTop: 3, color: "var(--gold-dark)" }} /> {f}
                    </div>
                  ))}
                </div>

                <motion.a
                  href={href}
                  className={featured ? "btn-primary text-center" : "btn-ghost text-center"}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
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