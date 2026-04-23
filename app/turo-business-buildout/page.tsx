"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  Car,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Diamond,
  FileText,
  Handshake,
  Layers3,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import MultiStepApplication from "../components/MultiStepApplication";
import ScrollReveal from "../components/ScrollReveal";

const fitItems = [
  "You earn strong W-2 income and want more strategic control.",
  "You value structure, execution, and proper setup over trial and error.",
  "You want a real business asset, not another passive-income promise.",
  "You are willing to treat Turo like a business, not a hobby.",
];

const deliverables = [
  { icon: Building2, title: "Business structure", text: "Guidance around entity setup, EIN, business banking, and operational foundation." },
  { icon: Car, title: "Vehicle strategy", text: "A focused vehicle approach based on practical acquisition, operating cost, and Turo suitability." },
  { icon: FileText, title: "Listing buildout", text: "Turo profile, listing framework, photos, pricing logic, and guest communication templates." },
  { icon: Layers3, title: "Operating system", text: "Calendar settings, handoff process, documentation, and repeatable management workflow." },
  { icon: ClipboardCheck, title: "Launch handoff", text: "A clear transition plan so you understand what was built and how to operate it." },
  { icon: Handshake, title: "Strategic support", text: "Guidance to coordinate with licensed tax and legal professionals where needed." },
];

const steps = [
  { n: "01", title: "Apply", text: "Complete the application so we can assess fit, timeline, and readiness." },
  { n: "02", title: "Align", text: "Confirm goals, preferred structure, vehicle direction, and execution plan." },
  { n: "03", title: "Build", text: "The foundation, vehicle strategy, listing assets, and operating workflow are assembled." },
  { n: "04", title: "Launch", text: "The business moves from idea to operating model with a clear handoff." },
];

const considerations = [
  { q: "I do not have much time.", a: "That is the point of the buildout. It is designed for professionals who want structure and execution, not more homework." },
  { q: "I have never hosted on Turo.", a: "The process is built for people who need the business set up clearly from the beginning." },
  { q: "Is this tax advice?", a: "No. The buildout is tax-strategy aware, but final tax decisions should be reviewed with your CPA or tax professional." },
];

export default function TuroBusinessBuildoutPage() {
  return (
    <main>
      <section className="relative min-h-screen flex items-center" style={{ padding: "140px 24px 90px" }}>
        <div
          className="absolute pointer-events-none"
          style={{
            inset: 0,
            background: "radial-gradient(circle at 80% 10%, rgba(239,200,139,0.14), transparent 34%), radial-gradient(circle at 15% 30%, rgba(168,32,26,0.12), transparent 30%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <ScrollReveal>
                <Link href="/" className="mono" style={{ color: "var(--text-3)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none" }}>
                  ← Back to Firstkontak Consulting
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <div className="chip mt-8 mb-7"><ShieldCheck size={13} /> $15K Done-For-You Buildout</div>
              </ScrollReveal>
              <ScrollReveal delay={0.16}>
                <h1 className="playfair" style={{ fontSize: "clamp(46px, 7vw, 92px)", lineHeight: 0.95, letterSpacing: "-0.035em", fontWeight: 800, marginBottom: 28 }}>
                  A fully structured <span className="gd" style={{ fontStyle: "italic" }}>Turo business</span>, built for you.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={0.24}>
                <p style={{ color: "var(--text-2)", fontSize: "clamp(16px, 1.6vw, 20px)", lineHeight: 1.75, maxWidth: 680, marginBottom: 34 }}>
                  This is not a course. This is a guided buildout for professionals who want the foundation, vehicle strategy, listing system, and operating workflow assembled with clarity from the beginning.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.32}>
                <div className="flex flex-wrap gap-3">
                  <motion.a href="#apply" className="btn-primary" whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}>
                    Apply for Consideration <ArrowUpRight size={14} />
                  </motion.a>
                  <motion.a href="#deliverables" className="btn-ghost" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                    See What Is Included
                  </motion.a>
                </div>
              </ScrollReveal>
            </div>

            <div className="md:col-span-5">
              <ScrollReveal delay={0.2} direction="right">
                <div className="glass-card" style={{ padding: 32 }}>
                  <div className="mono" style={{ color: "var(--gold)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>Buildout Snapshot</div>
                  <div className="flex flex-col gap-5">
                    {[
                      ["Investment", "$15,000"],
                      ["Format", "Application-based"],
                      ["Focus", "Structure + execution"],
                      ["Best for", "Busy W-2 professionals"],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-6" style={{ borderBottom: "1px solid var(--border)", paddingBottom: 14 }}>
                        <span className="mono" style={{ color: "var(--text-3)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em" }}>{k}</span>
                        <span style={{ color: "var(--smoke)", fontSize: 16 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: "var(--text-3)", fontSize: 12, lineHeight: 1.7, marginTop: 18 }}>
                    Tax and legal decisions should be reviewed with qualified professionals. This page describes business buildout support, not tax or legal advice.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "100px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-14">
              <div className="chip mb-6">Who This Is For</div>
              <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 700 }}>
                Designed for a specific type of <span className="gd" style={{ fontStyle: "italic" }}>professional</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-4">
            {fitItems.map((item, i) => (
              <ScrollReveal key={item} delay={i * 0.08}>
                <div className="glass-card flex items-start gap-4" style={{ padding: 24 }}>
                  <CheckCircle size={18} style={{ color: "var(--gold)", flexShrink: 0, marginTop: 3 }} />
                  <p style={{ color: "var(--text-2)", lineHeight: 1.6 }}>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="deliverables" style={{ padding: "110px 24px" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-14 max-w-3xl">
              <div className="chip mb-6">What Is Built</div>
              <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 700, marginBottom: 18 }}>
                Clear deliverables. No vague promises.
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.75 }}>
                The goal is to help you begin with the right foundation: structure, asset direction, Turo readiness, and operating clarity.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-4">
            {deliverables.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={title} delay={i * 0.08}>
                <motion.div className="glass-card" style={{ padding: 28, minHeight: 220 }} whileHover={{ y: -5 }}>
                  <Icon size={22} style={{ color: "var(--gold)", marginBottom: 18 }} />
                  <h3 className="bebas" style={{ fontSize: 28, letterSpacing: "0.04em", marginBottom: 10 }}>{title}</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{text}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="chip mb-6">Process</div>
              <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 700 }}>
                How the buildout works
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-4 gap-4">
            {steps.map(({ n, title, text }, i) => (
              <ScrollReveal key={n} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: 26, height: "100%" }}>
                  <div className="gd bebas" style={{ fontSize: 46, lineHeight: 1 }}>{n}</div>
                  <h3 className="bebas" style={{ fontSize: 28, letterSpacing: "0.04em", margin: "10px 0" }}>{title}</h3>
                  <p style={{ color: "var(--text-2)", fontSize: 14, lineHeight: 1.7 }}>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 24px" }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-6">
            <ScrollReveal>
              <div className="chip mb-6"><Sparkles size={13} /> Why It Works</div>
              <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 700, marginBottom: 22 }}>
                Ownership changes the conversation.
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.8, marginBottom: 18 }}>
                W-2 income alone gives you limited control. A properly organized business creates a new framework: assets, expenses, systems, and documentation.
              </p>
              <p style={{ color: "var(--text-2)", lineHeight: 1.8 }}>
                Turo is the entry point because the business is tangible, understandable, and operationally systemizable when the setup is handled correctly.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-6 grid grid-cols-2 gap-4">
            {[
              [Briefcase, "Business foundation"],
              [Car, "Income-producing asset"],
              [Target, "Defined operating model"],
              [Users, "Guest service system"],
            ].map(([Icon, label], i) => {
              const IconComp = Icon as typeof Briefcase;
              return (
                <ScrollReveal key={label as string} delay={i * 0.08}>
                  <div className="glass-card" style={{ padding: 24 }}>
                    <IconComp size={22} style={{ color: "var(--gold)", marginBottom: 16 }} />
                    <div style={{ color: "var(--smoke)", fontSize: 16 }}>{label as string}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: "110px 24px", background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="chip mb-6">Common Considerations</div>
              <h2 className="playfair" style={{ fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.05, fontWeight: 700 }}>
                Questions serious buyers usually ask
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4">
            {considerations.map(({ q, a }, i) => (
              <ScrollReveal key={q} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: 26 }}>
                  <h3 className="bebas" style={{ fontSize: 28, letterSpacing: "0.04em", marginBottom: 8 }}>{q}</h3>
                  <p style={{ color: "var(--text-2)", lineHeight: 1.7 }}>{a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" style={{ padding: "110px 24px" }}>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="chip mb-6"><Clock size={13} /> Application</div>
              <h2 className="playfair" style={{ fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.05, fontWeight: 700, marginBottom: 18 }}>
                If this approach aligns, apply for consideration.
              </h2>
              <p style={{ color: "var(--text-2)", lineHeight: 1.75, maxWidth: 560, margin: "0 auto" }}>
                This application helps determine whether the buildout is a fit for your goals, timing, and current situation.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <MultiStepApplication />
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
