"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, ShieldCheck, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const stats = [
  { val: 22, suffix: "", label: "Vehicle fleet built from one car" },
  { val: 1500, suffix: "+", label: "Turo trips of operating experience" },
  { val: 15, suffix: "K", label: "Done-for-you business buildout offer" },
];

const proof = [
  "Built for high-income W-2 earners",
  "Entity, vehicle, and Turo systems",
  "Business ownership with strategic planning",
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target]);

  return (
    <div ref={ref} className="gd bebas" style={{ fontSize: 48, letterSpacing: "0.02em", lineHeight: 1 }}>
      {count}{suffix}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end" style={{ paddingTop: 120, paddingBottom: 80 }}>
      {/* Background effects */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-30%",
          right: "-15%",
          width: 900,
          height: 900,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(184, 134, 11, 0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-20%",
          left: "-20%",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(114, 47, 55, 0.15) 0%, transparent 60%)",
        }}
      />
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(201, 168, 76, 0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 50% at 50% 40%, black 10%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 50% at 50% 40%, black 10%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="chip mb-7" style={{ backdropFilter: "blur(12px)", background: "rgba(201, 168, 76, 0.06)", border: "1px solid rgba(201, 168, 76, 0.2)" }}>
                <ShieldCheck size={13} /> For High-Income W-2 Earners
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1
                className="bebas"
                style={{
                  fontSize: "clamp(52px, 8.5vw, 120px)",
                  fontWeight: 400,
                  lineHeight: 0.92,
                  letterSpacing: "0.04em",
                  marginBottom: 28,
                }}
              >
                BUILD YOUR<br />
                BUSINESS ON<br />
                <span className="gd" style={{ fontStyle: "normal" }}>THE ROCK</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <div style={{ width: 80, height: 2, background: "linear-gradient(90deg, var(--gold), transparent)", marginBottom: 24 }} />
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p
                className="playfair"
                style={{
                  fontSize: "clamp(16px, 1.8vw, 22px)",
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  maxWidth: 540,
                  marginBottom: 28,
                  fontStyle: "italic",
                }}
              >
                Turn tax pressure into cash-flowing business ownership. Firstkontak helps high-income earners build strategic Turo businesses with entity structure, vehicle strategy, and operating systems.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="flex flex-wrap gap-3 mb-10">
                {proof.map((item) => (
                  <div key={item} className="flex items-center gap-2" style={{ color: "var(--text-2)", fontSize: 13 }}>
                    <CheckCircle size={14} style={{ color: "var(--gold)" }} />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.55}>
              <div className="flex flex-wrap gap-4">
                <motion.a href="/turo-business-buildout" className="btn-primary" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                  Start Your Kingdom Blueprint <ArrowUpRight size={14} />
                </motion.a>
                <motion.a href="#calculator" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                  Estimate Your Position
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* Stats Column */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <ScrollReveal delay={0.3} direction="right">
              <div className="glass-card gold-border-glow" style={{ padding: "28px" }}>
                <div className="flex items-center gap-3 mb-5">
                  <div style={{ width: 44, height: 44, borderRadius: 6, background: "linear-gradient(135deg, rgba(184, 134, 11, 0.15), rgba(201, 168, 76, 0.05))", display: "grid", placeItems: "center", color: "var(--gold)" }}>
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <div className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.14em", textTransform: "uppercase" }}>Premium Offer</div>
                    <div style={{ fontSize: 15, color: "var(--smoke)", marginTop: 2 }}>Business built around ownership</div>
                  </div>
                </div>
                <p className="syne" style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>
                  Not another side-hustle course. This is a practical Turo business model designed around structure, systems, and long-term cash flow.
                </p>
              </div>
            </ScrollReveal>

            {stats.map(({ val, suffix, label }, i) => (
              <ScrollReveal key={val + suffix} delay={0.4 + i * 0.12} direction="right">
                <div className="glass-card" style={{ padding: "20px 24px", borderLeft: "3px solid var(--gold)" }}>
                  <AnimatedCounter target={val} suffix={suffix} />
                  <div className="syne" style={{ fontSize: 13, color: "var(--text-3)", marginTop: 4, lineHeight: 1.4 }}>{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}