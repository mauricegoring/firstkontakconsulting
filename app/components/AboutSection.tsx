"use client";

import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import { Quote, MapPin, Award, Cross, Briefcase } from "lucide-react";

const details = [
  { icon: <Briefcase size={14} />, k: "Experience", v: "5+ Years Fleet Ops" },
  { icon: <Award size={14} />, k: "Peak Fleet", v: "22 Vehicles" },
  { icon: <Cross size={14} />, k: "Foundation", v: "Faith-Based" },
  { icon: <MapPin size={14} />, k: "Based In", v: "San Diego, CA" },
];

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "120px 24px" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          {/* Monogram / Quote Card */}
          <div className="md:col-span-5">
            <ScrollReveal direction="left">
              <div
                className="glass-card gold-border-glow flex items-center justify-center"
                style={{
                  aspectRatio: "1/1.1",
                  background: "linear-gradient(160deg, rgba(26, 26, 26, 0.95), rgba(10, 10, 10, 0.98))",
                  position: "relative",
                  overflow: "hidden",
                  padding: 48,
                }}
              >
                {/* Big FK watermark */}
                <div
                  className="bebas"
                  style={{
                    fontSize: "min(260px, 35vw)",
                    fontWeight: 400,
                    opacity: 0.04,
                    position: "absolute",
                    lineHeight: 1,
                    color: "var(--gold)",
                  }}
                >
                  FK
                </div>
                {/* Gold accent line */}
                <div style={{ position: "absolute", top: 48, left: 48, width: 60, height: 2, background: "var(--gold)" }} />
                {/* Quote */}
                <div style={{ position: "relative", textAlign: "center" }}>
                  <Quote size={28} style={{ color: "var(--gold-dark)", margin: "0 auto 20px" }} />
                  <div
                    className="dm-serif"
                    style={{
                      fontSize: "clamp(20px, 2.5vw, 28px)",
                      lineHeight: 1.5,
                      marginBottom: 20,
                      color: "var(--smoke)",
                      fontStyle: "italic",
                    }}
                  >
                    I built a 22-car fleet while working full time. Now I teach exactly what worked.
                  </div>
                  <div
                    className="mono"
                    style={{
                      fontSize: 10,
                      color: "var(--gold)",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    — Maurice Goring
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bio */}
          <div className="md:col-span-7">
            <ScrollReveal>
              <div className="chip mb-6">Your Coach</div>
              <h2
                className="bebas"
                style={{
                  fontSize: "clamp(44px, 5vw, 64px)",
                  lineHeight: 1.05,
                  letterSpacing: "0.04em",
                  marginBottom: 28,
                }}
              >
                MAURICE GORING
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div style={{ width: 60, height: 2, background: "var(--gold)", marginBottom: 24 }} />
              <p className="syne" style={{ color: "var(--text-2)", lineHeight: 1.8, fontSize: 15, marginBottom: 16 }}>
                Built a 22-vehicle Turo fleet from scratch while working full-time — generating substantial annual revenue and using the business to strategically reduce his W-2 tax burden through proper entity structuring, MACRS depreciation, and business expense management.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="syne" style={{ color: "var(--text-2)", lineHeight: 1.8, fontSize: 15, marginBottom: 36 }}>
                Now operating a focused Mini Cooper fleet through Firstkontak Consulting Inc., Maurice hands his exact blueprint to high-income earners who are ready to stop paying the government&apos;s price for their success. His approach is grounded in biblical principles of stewardship — wealth is a tool, business is a calling, and legacy matters.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                {details.map(({ icon, k, v }) => (
                  <motion.div
                    key={k}
                    style={{ borderLeft: "2px solid var(--gold-dark)", paddingLeft: 16 }}
                    whileHover={{ borderLeftColor: "var(--gold)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div
                      className="mono flex items-center gap-2"
                      style={{
                        fontSize: 10,
                        color: "var(--text-3)",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {icon} {k}
                    </div>
                    <div className="bebas" style={{ fontSize: 18, letterSpacing: "0.04em", marginTop: 4 }}>{v}</div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}