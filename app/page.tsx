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
      <ProblemSection />
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
            background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-3xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="chip mb-6">ROI Calculator</div>
              <h2
                className="playfair"
                style={{ fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.05, fontWeight: 700 }}
              >
                How much will <span className="gd" style={{ fontStyle: "italic" }}>you save</span>?
              </h2>
              <p
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
                className="playfair"
                style={{ fontSize: "clamp(36px, 5vw, 52px)", lineHeight: 1.05, fontWeight: 700, marginBottom: 16 }}
              >
                Ready to keep <span className="gd" style={{ fontStyle: "italic" }}>your money</span>?
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
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