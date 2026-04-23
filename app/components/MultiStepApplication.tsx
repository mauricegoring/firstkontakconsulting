"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, User, Mail, DollarSign, Target, Car } from "lucide-react";

const STEPS = [
  {
    id: "identity",
    title: "Who You Are",
    icon: User,
  },
  {
    id: "income",
    title: "Your Income",
    icon: DollarSign,
  },
  {
    id: "goals",
    title: "Your Goals",
    icon: Target,
  },
  {
    id: "review",
    title: "Review",
    icon: Car,
  },
];

export default function MultiStepApplication() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    income: "",
    vehicles: "0",
    experience: "none",
    goal: "",
    timeline: "",
  });

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canAdvance = () => {
    switch (step) {
      case 0:
        return form.firstName && form.lastName && form.email;
      case 1:
        return form.income;
      case 2:
        return form.goal;
      case 3:
        return true;
      default:
        return false;
    }
  };

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* Step Indicator */}
      <div
        style={{
          padding: "24px 36px",
          borderBottom: "1px solid var(--border)",
          background: "linear-gradient(135deg, rgba(139,105,20,0.1), transparent)",
        }}
      >
        <div className="flex items-center justify-between">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const active = i === step;
            const completed = i < step;
            return (
              <div key={s.id} className="flex items-center gap-2">
                <motion.div
                  animate={{
                    background: active
                      ? "linear-gradient(135deg, var(--gold-dark), var(--gold))"
                      : completed
                      ? "var(--gold)"
                      : "var(--surface-2)",
                    color: active || completed ? "var(--obsidian)" : "var(--text-3)",
                    scale: active ? 1.1 : 1,
                  }}
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  <Icon size={14} />
                </motion.div>
                <div className="hidden md:block">
                  <div
                    className="mono"
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: active ? "var(--gold)" : completed ? "var(--text-2)" : "var(--text-3)",
                    }}
                  >
                    Step {i + 1}
                  </div>
                  <div
                    style={{
                      fontSize: 11,
                      color: active ? "var(--smoke)" : "var(--text-3)",
                      fontWeight: active ? 600 : 400,
                    }}
                  >
                    {s.title}
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      width: 24,
                      height: 1,
                      background: completed ? "var(--gold)" : "var(--border)",
                      marginLeft: 12,
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Body */}
      <div style={{ padding: "32px 36px", minHeight: 280, position: "relative", overflow: "hidden" }}>
        <AnimatePresence mode="wait" custom={1}>
          {step === 0 && (
            <motion.div
              key="step0"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="playfair" style={{ fontSize: 24, marginBottom: 8 }}>
                Tell us about yourself
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                    First Name *
                  </label>
                  <input type="text" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} placeholder="John" />
                </div>
                <div>
                  <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                    Last Name *
                  </label>
                  <input type="text" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  Email *
                </label>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="john@company.com" />
              </div>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  Phone (optional)
                </label>
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(555) 000-0000" />
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="playfair" style={{ fontSize: 24, marginBottom: 8 }}>
                Your financial picture
              </h3>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  W-2 Income Range *
                </label>
                <select value={form.income} onChange={(e) => update("income", e.target.value)}>
                  <option value="">Select range</option>
                  <option value="100-150">$100K – $150K</option>
                  <option value="150-250">$150K – $250K</option>
                  <option value="250-400">$250K – $400K</option>
                  <option value="400+">$400K+</option>
                </select>
              </div>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  Turo Experience
                </label>
                <select value={form.experience} onChange={(e) => update("experience", e.target.value)}>
                  <option value="none">No experience yet</option>
                  <option value="some">I've rented on Turo</option>
                  <option value="host">I'm already a host</option>
                  <option value="fleet">I have a small fleet</option>
                </select>
              </div>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  How many vehicles are you considering?
                </label>
                <select value={form.vehicles} onChange={(e) => update("vehicles", e.target.value)}>
                  <option value="0">Not sure yet</option>
                  <option value="1">1 vehicle</option>
                  <option value="2-3">2–3 vehicles</option>
                  <option value="4-5">4–5 vehicles</option>
                  <option value="6+">6+ vehicles</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="playfair" style={{ fontSize: 24, marginBottom: 8 }}>
                What are you building toward?
              </h3>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  Primary Goal *
                </label>
                <select value={form.goal} onChange={(e) => update("goal", e.target.value)}>
                  <option value="">Select your primary goal</option>
                  <option value="tax">Reduce my tax burden</option>
                  <option value="income">Generate passive income</option>
                  <option value="both">Both — tax strategy + income</option>
                  <option value="legacy">Build a family business / legacy</option>
                </select>
              </div>
              <div>
                <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", color: "var(--text-3)", display: "block", marginBottom: 6, textTransform: "uppercase" }}>
                  Ideal Timeline
                </label>
                <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)}>
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP — I'm ready to move</option>
                  <option value="1-3">1–3 months</option>
                  <option value="3-6">3–6 months</option>
                  <option value="exploring">Just exploring for now</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="playfair" style={{ fontSize: 24, marginBottom: 8 }}>
                Review your application
              </h3>
              <div className="flex flex-col gap-3">
                {[
                  { label: "Name", value: `${form.firstName} ${form.lastName}` },
                  { label: "Email", value: form.email },
                  { label: "Phone", value: form.phone || "Not provided" },
                  { label: "Income Range", value: form.income ? `$${form.income.replace("-", "K – $")}K` : "Not selected" },
                  { label: "Experience", value: form.experience === "none" ? "None" : form.experience },
                  { label: "Vehicles", value: form.vehicles === "0" ? "Undecided" : form.vehicles },
                  { label: "Goal", value: form.goal || "Not selected" },
                  { label: "Timeline", value: form.timeline || "Not selected" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex justify-between items-center"
                    style={{ padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 4, border: "1px solid var(--border)" }}
                  >
                    <span className="mono" style={{ fontSize: 10, color: "var(--text-3)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {label}
                    </span>
                    <span style={{ fontSize: 13, color: "var(--smoke)" }}>{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div
        className="flex items-center justify-between"
        style={{ padding: "20px 36px", borderTop: "1px solid var(--border)", background: "var(--surface)" }}
      >
        <motion.button
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setStep(Math.max(0, step - 1))}
          disabled={step === 0}
          className="btn-ghost flex items-center gap-2"
          style={{ padding: "10px 20px", opacity: step === 0 ? 0.3 : 1, pointerEvents: step === 0 ? "none" : "auto" }}
        >
          <ChevronLeft size={14} />
          Back
        </motion.button>

        <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", letterSpacing: "0.08em" }}>
          {step + 1} / {STEPS.length}
        </div>

        {step < STEPS.length - 1 ? (
          <motion.button
            whileHover={{ x: 3 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setStep(Math.min(STEPS.length - 1, step + 1))}
            disabled={!canAdvance()}
            className="btn-primary flex items-center gap-2"
            style={{
              padding: "10px 20px",
              opacity: canAdvance() ? 1 : 0.4,
              pointerEvents: canAdvance() ? "auto" : "none",
            }}
          >
            Next
            <ChevronRight size={14} />
          </motion.button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="btn-primary flex items-center gap-2"
            style={{ padding: "10px 24px", background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))" }}
          >
            <Send size={14} />
            Submit Application
          </motion.button>
        )}
      </div>
    </div>
  );
}