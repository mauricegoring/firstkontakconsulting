"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProblemSection from "./components/ProblemSection";
import StrategySection from "./components/StrategySection";
import TaxSavingsEstimator from "./components/TaxSavingsEstimator";
import ProgramsSection from "./components/ProgramsSection";
import AboutSection from "./components/AboutSection";
import MultiStepApplication from "./components/MultiStepApplication";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* ═══ SAAS BAND ═══ */}
      <section
        style={{
          background: "linear-gradient(135deg, rgba(201,168,76,0.10), rgba(14,14,14,1) 60%)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "32px 24px",
        }}
      >
        <div
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ textAlign: "left" }}
        >
          <div style={{ flex: 1 }}>
            <div
              className="mono"
              style={{
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--gold)",
                marginBottom: 8,
              }}
            >
              The Operating Layer
            </div>
            <p
              className="syne"
              style={{ fontSize: 17, lineHeight: 1.55, color: "var(--smoke)", margin: 0, maxWidth: 720 }}
            >
              Built a 22-car fleet by hand. Now we run ours from one screen. <span className="gd">FK Command Center</span>, the operating system we built for tax-strategic Turo hosts.
            </p>
          </div>
          <a
            href="https://fkcommandcenter.pro/"
            target="_blank"
            rel="noopener"
            className="btn-primary"
            style={{ padding: "14px 24px", whiteSpace: "nowrap", fontSize: 14 }}
          >
            See it →
          </a>
        </div>
      </section>

      <ProblemSection />

      {/* Gold divider */}
      <div className="section-divider" />

      <StrategySection />

      {/* ═══ TAX SAVINGS CALCULATOR ═══ */}
      <section
        id="calculator"
        style={{
          padding: "120px 24px",
          position: "relative",
        }}
      >
        {/* Decorative glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%",
            right: "-10%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201, 168, 76, 0.04) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="chip mb-6">ROI Calculator</div>
              <h2
                className="bebas"
                style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.05, letterSpacing: "0.04em" }}
              >
                HOW MUCH WILL<br /><span className="gd">YOU SAVE</span>?
              </h2>
              <p
                className="syne"
                style={{
                  color: "var(--text-2)",
                  lineHeight: 1.7,
                  maxWidth: 480,
                  margin: "16px auto 0",
                  fontSize: 15,
                }}
              >
                Adjust the sliders to estimate your first-year tax savings with a properly structured Turo business.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <TaxSavingsEstimator />
          </ScrollReveal>
        </div>
      </section>

      <ProgramsSection />

      {/* Gold divider */}
      <div className="section-divider" />

      <AboutSection />

      {/* ═══ APPLICATION ═══ */}
      <section
        id="apply"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "120px 24px",
        }}
      >
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="chip mb-6">Get Started</div>
              <h2
                className="bebas"
                style={{ fontSize: "clamp(40px, 5vw, 56px)", lineHeight: 1.05, letterSpacing: "0.04em", marginBottom: 16 }}
              >
                READY TO KEEP<br /><span className="gd">YOUR MONEY</span>?
              </h2>
              <p className="syne" style={{ color: "var(--text-2)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
                Apply for coaching or tell us where you are in your journey. We respond within 24 hours.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <MultiStepApplication />
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </>
  );
}