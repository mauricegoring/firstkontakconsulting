"use client";
import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ background: "var(--obsidian)" }}>

      {/* ── NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div
              className="font-bebas text-2xl"
              style={{
                background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8C96A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              CK
            </div>
            <div>
              <div className="font-bebas text-lg tracking-widest" style={{ color: "var(--smoke)", lineHeight: 1 }}>
                FIRSTKONTAK
              </div>
              <div className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", lineHeight: 1 }}>
                CONSULTING
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {["Why Turo", "The Strategy", "Programs", "About", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="font-mono-dm text-xs tracking-widest uppercase transition-colors"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#programs"
            className="hidden md:block btn-gold px-6 py-2 text-sm tracking-widest"
          >
            Apply Now
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span style={{ display: "block", width: 22, height: 2, background: "var(--gold)" }} />
            <span style={{ display: "block", width: 22, height: 2, background: "var(--gold)" }} />
            <span style={{ display: "block", width: 14, height: 2, background: "var(--gold)" }} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ background: "rgba(8,8,8,0.98)", borderTop: "1px solid rgba(201,168,76,0.15)" }} className="md:hidden px-6 py-6 flex flex-col gap-5">
            {["Why Turo", "The Strategy", "Programs", "About", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                className="font-bebas text-xl tracking-widest gold"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <a href="#programs" className="btn-gold px-6 py-3 text-center text-sm tracking-widest">
              Apply Now
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center stripe-bg overflow-hidden"
        style={{ paddingTop: 100 }}
      >
        {/* Background grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,168,76,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow orb */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "10%",
            right: "-15%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-4xl">
            <div className="tag mb-6 fade-up">W-2 Income Tax Strategy</div>

            <h1
              className="font-bebas fade-up delay-1"
              style={{ fontSize: "clamp(52px, 9vw, 120px)", lineHeight: 0.92, letterSpacing: "0.01em", marginBottom: 32 }}
            >
              <span style={{ color: "var(--smoke)" }}>STOP PAYING</span>
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8C96A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                THE GOVERNMENT&apos;S
              </span>
              <br />
              <span style={{ color: "var(--smoke)" }}>PRICE FOR</span>
              <br />
              <span style={{ color: "var(--smoke)" }}>YOUR SUCCESS</span>
            </h1>

            <p
              className="fade-up delay-2"
              style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "var(--text-mid)", maxWidth: 560, lineHeight: 1.7, marginBottom: 40 }}
            >
              High-income W-2 earners pay the highest tax rates in America — often 37%+. A
              tax-strategic Turo business flips that equation. We&apos;ll show you exactly how to build,
              launch, and profit from a car-share fleet the right way.
            </p>

            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <a href="#programs" className="btn-gold px-8 py-4 text-lg tracking-widest">
                See Programs
              </a>
              <a href="#the-strategy" className="btn-outline-gold px-8 py-4 text-lg tracking-widest">
                The Strategy
              </a>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-3 gap-6 mt-20 fade-up delay-4" style={{ maxWidth: 480 }}>
              {[
                { num: "22", label: "Vehicles Built" },
                { num: "$37K+", label: "W-2 Tax Saved" },
                { num: "5+", label: "Years Running" },
              ].map(({ num, label }) => (
                <div key={label}>
                  <div
                    className="font-bebas"
                    style={{ fontSize: 36, background: "linear-gradient(135deg, #C9A84C, #E8C96A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
                  >
                    {num}
                  </div>
                  <div className="font-mono-dm text-xs" style={{ color: "var(--text-muted)", letterSpacing: "0.06em" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PAIN SECTION ── */}
      <section style={{ background: "var(--dark-2)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-4">The W-2 Problem</div>
              <h2
                className="font-bebas"
                style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, marginBottom: 24 }}
              >
                YOU&apos;RE HIGH-INCOME.
                <br />
                <span className="gold-gradient">HIGH-TAXED.</span>
                <br />
                AND STUCK.
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 20 }}>
                As a W-2 earner making $150K–$500K+, you&apos;re in the IRS&apos;s crosshairs. You can&apos;t
                deduct much. You can&apos;t shelter income easily. Every year, you write a check that
                makes you sick.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8 }}>
                A properly structured Turo business changes everything — depreciation, business
                expenses, MACRS accelerated write-offs. This isn&apos;t tax evasion. It&apos;s the same
                strategy wealthy business owners have used for decades. We hand it to you.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { icon: "📋", title: "No Business Deductions", desc: "W-2 filers lose almost every business deduction available to entrepreneurs." },
                { icon: "📉", title: "No Depreciation Shelter", desc: "Vehicles depreciate fast. As a Turo operator, that depreciation works FOR you, not against you." },
                { icon: "⏱️", title: "Trading Time for Income", desc: "Your salary tops out. A Turo fleet generates revenue while you're at work." },
                { icon: "🏛️", title: "No Entity Structure", desc: "Without the right LLC and bookkeeping, you're leaving money — and protection — on the table." },
              ].map(({ icon, title, desc }) => (
                <div
                  key={title}
                  className="stat-card hover-gold flex gap-4 p-5"
                  style={{ borderRadius: 4 }}
                >
                  <div style={{ fontSize: 24, flexShrink: 0 }}>{icon}</div>
                  <div>
                    <div className="font-bebas tracking-wider" style={{ fontSize: 18, color: "var(--smoke)", marginBottom: 4 }}>
                      {title}
                    </div>
                    <div style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── THE STRATEGY ── */}
      <section id="the-strategy" style={{ padding: "96px 24px", background: "var(--obsidian)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag mb-4">The Firstkontak Method</div>
            <h2
              className="font-bebas"
              style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1, marginBottom: 16 }}
            >
              THE TAX-STRATEGIC
              <br />
              <span className="gold-gradient">TURO BLUEPRINT</span>
            </h2>
            <p style={{ color: "var(--text-mid)", maxWidth: 540, margin: "0 auto", lineHeight: 1.7 }}>
              We don&apos;t just teach Turo. We teach you how to build a business that legally reduces
              what you owe Uncle Sam — starting in your first year.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-1">
            {[
              {
                step: "01",
                title: "Structure First",
                sub: "Entity & Tax Foundation",
                desc: "LLC setup, operating agreements, EIN, business banking, and MACRS depreciation strategy built BEFORE you buy a single vehicle.",
                bullets: ["LLC formation & structure", "Business credit foundation", "MACRS/Bonus depreciation plan", "Bookkeeping system launch"],
              },
              {
                step: "02",
                title: "Fleet Acquisition",
                sub: "The Right Cars, Right Price",
                desc: "We teach you the exact vehicle profile that maximizes Turo earnings AND depreciation write-offs in the first 12 months.",
                bullets: ["Vehicle sourcing strategy", "Copart & dealer acquisition", "Cost-basis optimization", "Insurance & title structure"],
              },
              {
                step: "03",
                title: "Launch & Scale",
                sub: "Operations & Growth",
                desc: "Turo listing optimization, pricing algorithms, guest management, maintenance systems, and how to scale from 1 to 5+ vehicles without quitting your job.",
                bullets: ["5-star listing framework", "Dynamic pricing systems", "Remote management protocols", "Scale-up milestones & KPIs"],
              },
            ].map(({ step, title, sub, desc, bullets }, i) => (
              <div
                key={step}
                className="hover-gold"
                style={{
                  background: "var(--dark-2)",
                  border: "1px solid rgba(201,168,76,0.12)",
                  padding: "40px 32px",
                  position: "relative",
                  borderRadius: i === 0 ? "4px 0 0 4px" : i === 2 ? "0 4px 4px 0" : 0,
                }}
              >
                <div
                  className="font-bebas"
                  style={{ fontSize: 72, lineHeight: 1, color: "rgba(201,168,76,0.08)", position: "absolute", top: 16, right: 24 }}
                >
                  {step}
                </div>
                <div className="tag mb-4">{sub}</div>
                <h3
                  className="font-bebas"
                  style={{ fontSize: 32, marginBottom: 12, color: "var(--smoke)" }}
                >
                  {title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 20, fontSize: 14 }}>
                  {desc}
                </p>
                <ul className="flex flex-col gap-2">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2" style={{ fontSize: 13, color: "var(--text-mid)" }}>
                      <span className="gold mt-0.5" style={{ fontSize: 10, flexShrink: 0 }}>◆</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Tax savings callout */}
          <div
            className="mt-2 p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(139,105,20,0.15), rgba(201,168,76,0.08))",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: "0 0 4px 4px",
            }}
          >
            <div className="font-playfair italic" style={{ fontSize: "clamp(18px, 3vw, 28px)", color: "var(--gold-light)", marginBottom: 8 }}>
              &ldquo;A single properly depreciated vehicle can generate $15,000–$40,000 in first-year tax deductions for a W-2 earner.&rdquo;
            </div>
            <div className="font-mono-dm text-xs" style={{ color: "var(--text-muted)", letterSpacing: "0.1em" }}>
              — Based on Bonus Depreciation Rules (consult your CPA for your specific situation)
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── WHY TURO ── */}
      <section id="why-turo" style={{ background: "var(--dark-2)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <div className="tag mb-4">Why Turo vs. Other Businesses</div>
              <h2 className="font-bebas" style={{ fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1, marginBottom: 24 }}>
                THE BUSINESS THAT
                <br />
                <span className="gold-gradient">WORKS WHILE YOU DO</span>
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 32 }}>
                Turo is the only business model where high-income W-2 earners can generate meaningful 
                passive income, claim real depreciation deductions, and build equity — all without 
                quitting their jobs or going all-in on a franchise.
              </p>
              <div className="pull-quote" style={{ marginBottom: 32 }}>
                <p style={{ color: "var(--smoke)", fontStyle: "italic", lineHeight: 1.7 }}>
                  &ldquo;I built a 22-car fleet while working full time. The business paid for itself 
                  and cut my tax bill. Now I teach exactly what worked.&rdquo;
                </p>
                <p className="font-mono-dm text-xs mt-2" style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                  — MAURICE GORING, FOUNDER, FIRSTKONTAK CONSULTING
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Avg. Monthly Revenue", value: "$1,200–$2,500", sub: "per vehicle on Turo" },
                { label: "Year-1 Tax Deduction", value: "Up to 100%", sub: "of vehicle cost (bonus depreciation)" },
                { label: "Time to First Booking", value: "< 7 Days", sub: "after vehicle goes live" },
                { label: "Vehicles to Replace W-2", value: "5–10", sub: "depending on vehicle tier" },
              ].map(({ label, value, sub }) => (
                <div key={label} className="stat-card p-6" style={{ borderRadius: 4 }}>
                  <div
                    className="font-bebas"
                    style={{
                      fontSize: 28,
                      background: "linear-gradient(135deg, #C9A84C, #E8C96A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      lineHeight: 1.1,
                      marginBottom: 4,
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ fontSize: 12, color: "var(--smoke)", fontWeight: 500, marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── PROGRAMS ── */}
      <section id="programs" style={{ background: "var(--obsidian)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="tag mb-4">Choose Your Path</div>
            <h2 className="font-bebas" style={{ fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1 }}>
              PROGRAMS &amp; COACHING
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Business in a Box",
                price: "Self-Study",
                tag: "Course",
                desc: "Everything you need to launch your Turo business from zero — structured as a step-by-step course you complete at your own pace.",
                features: ["Complete A–Z launch framework", "Vehicle acquisition playbook", "Tax strategy foundation", "Listing optimization templates", "MACRS depreciation guide"],
                cta: "Enroll Now",
                featured: false,
              },
              {
                name: "Turo 5000 Coach",
                price: "1-on-1 Coaching",
                tag: "Flagship",
                desc: "Work directly with Maurice to build, launch, and optimize your first $5,000/month Turo income stream with full accountability.",
                features: ["Private 1-on-1 sessions", "Custom vehicle strategy", "Tax planning with your CPA", "Fleet management systems", "Ongoing accountability & access"],
                cta: "Apply Now",
                featured: true,
              },
              {
                name: "Kingdom Legacy",
                price: "Faith & Wealth",
                tag: "Course",
                desc: "For the faith-driven entrepreneur. Biblical stewardship, generational wealth principles, and Turo as the vehicle for kingdom impact.",
                features: ["Faith-based business framework", "Stewardship & wealth theology", "Family legacy planning", "Business as ministry model", "Community access"],
                cta: "Learn More",
                featured: false,
              },
            ].map(({ name, price, tag, desc, features, cta, featured }) => (
              <div
                key={name}
                className="hover-gold flex flex-col"
                style={{
                  background: featured ? "linear-gradient(160deg, rgba(139,105,20,0.3), rgba(201,168,76,0.1))" : "var(--dark-2)",
                  border: featured ? "1px solid rgba(201,168,76,0.5)" : "1px solid rgba(201,168,76,0.12)",
                  borderRadius: 4,
                  padding: "40px 32px",
                  position: "relative",
                }}
              >
                {featured && (
                  <div
                    className="font-mono-dm text-xs tracking-widest"
                    style={{
                      position: "absolute",
                      top: -1,
                      right: 24,
                      background: "linear-gradient(135deg, #8B6914, #C9A84C)",
                      color: "#080808",
                      padding: "4px 12px",
                      borderRadius: "0 0 4px 4px",
                      fontSize: "0.65rem",
                    }}
                  >
                    MOST POPULAR
                  </div>
                )}
                <div className="tag mb-4">{tag}</div>
                <h3 className="font-bebas" style={{ fontSize: 28, color: "var(--smoke)", marginBottom: 8 }}>
                  {name}
                </h3>
                <div className="font-mono-dm text-xs gold tracking-widest mb-4">{price}</div>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 24 }}>{desc}</p>
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2" style={{ fontSize: 13, color: "var(--text-mid)" }}>
                      <span className="gold mt-0.5" style={{ fontSize: 10, flexShrink: 0 }}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={featured ? "btn-gold px-6 py-3 text-center text-sm tracking-widest" : "btn-outline-gold px-6 py-3 text-center text-sm tracking-widest"}
                >
                  {cta}
                </a>
              </div>
            ))}
          </div>

          {/* Mini-courses row */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            {[
              { name: "Business Credit Blueprint", price: "$49", desc: "Build fundable business credit from scratch in 90 days." },
              { name: "Wife Made Course", price: "Coming Soon", desc: "For the spouse ready to take the business reins and build her own income." },
              { name: "Whole Life Business Kit", price: "Bundle", desc: "Complete toolkit: entity docs, bookkeeping templates, listing scripts & more." },
            ].map(({ name, price, desc }) => (
              <div
                key={name}
                className="hover-gold p-6 flex flex-col gap-2"
                style={{ background: "var(--dark-3)", border: "1px solid rgba(201,168,76,0.1)", borderRadius: 4 }}
              >
                <div className="flex items-center justify-between">
                  <div className="font-bebas tracking-wider" style={{ fontSize: 18, color: "var(--smoke)" }}>{name}</div>
                  <div className="font-mono-dm text-xs gold">{price}</div>
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── ABOUT ── */}
      <section id="about" style={{ background: "var(--dark-2)", padding: "96px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="font-bebas text-center"
                style={{
                  fontSize: 200,
                  lineHeight: 0.85,
                  background: "linear-gradient(160deg, rgba(201,168,76,0.15), rgba(201,168,76,0.03))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  border: "1px solid rgba(201,168,76,0.1)",
                  borderRadius: 4,
                  padding: "40px 24px",
                }}
              >
                CK
              </div>
            </div>

            <div>
              <div className="tag mb-4">About the Coach</div>
              <h2 className="font-bebas" style={{ fontSize: "clamp(32px, 4vw, 52px)", lineHeight: 1, marginBottom: 20 }}>
                MAURICE GORING
                <br />
                <span className="gold-gradient">FOUNDER & COACH</span>
              </h2>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 16 }}>
                Maurice built a 22-vehicle Turo fleet from scratch while working full time — generating substantial 
                annual revenue and using the business to strategically reduce his W-2 tax burden through proper 
                entity structuring, MACRS depreciation, and business expense management.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 16 }}>
                After scaling down to a focused Mini Cooper fleet, he launched Firstkontak Consulting Inc. 
                to hand his exact blueprint to other high-income earners who are tired of paying the 
                government&apos;s price for their success.
              </p>
              <p style={{ color: "var(--text-mid)", lineHeight: 1.8, marginBottom: 32 }}>
                His approach is grounded in biblical principles of stewardship: wealth is a tool, 
                business is a calling, and leaving a legacy matters more than just making money.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Experience", value: "5+ Years Fleet Ops" },
                  { label: "Peak Fleet", value: "22 Vehicles" },
                  { label: "Foundation", value: "Faith-Based Business" },
                  { label: "Location", value: "San Diego, CA" },
                ].map(({ label, value }) => (
                  <div key={label} style={{ borderLeft: "2px solid var(--gold-dark)", paddingLeft: 12 }}>
                    <div className="font-mono-dm text-xs" style={{ color: "var(--text-muted)", letterSpacing: "0.08em" }}>{label}</div>
                    <div style={{ color: "var(--smoke)", fontSize: 15, fontWeight: 500 }}>{value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CONTACT / CTA ── */}
      <section id="contact" style={{ background: "var(--obsidian)", padding: "96px 24px" }}>
        <div className="max-w-3xl mx-auto text-center">
          <div className="tag mb-6">Ready to Start?</div>
          <h2 className="font-bebas" style={{ fontSize: "clamp(40px, 6vw, 80px)", lineHeight: 0.95, marginBottom: 24 }}>
            LET&apos;S BUILD YOUR
            <br />
            <span className="gold-gradient">TAX-STRATEGIC</span>
            <br />
            TURO BUSINESS
          </h2>
          <p style={{ color: "var(--text-mid)", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 48px" }}>
            Apply for 1-on-1 coaching or enroll in a course today. Most clients see their first booking 
            within 30 days of completing vehicle setup.
          </p>

          {/* Contact form */}
          <div
            style={{
              background: "var(--dark-2)",
              border: "1px solid rgba(201,168,76,0.2)",
              borderRadius: 4,
              padding: "48px 40px",
              textAlign: "left",
            }}
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
                  FIRST NAME
                </label>
                <input
                  type="text"
                  placeholder="John"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 3,
                    fontSize: 15,
                  }}
                />
              </div>
              <div>
                <label className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
                  LAST NAME
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: 3,
                    fontSize: 15,
                  }}
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
                EMAIL
              </label>
              <input
                type="email"
                placeholder="john@company.com"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 3, fontSize: 15 }}
              />
            </div>
            <div className="mb-4">
              <label className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
                ANNUAL W-2 INCOME
              </label>
              <select style={{ width: "100%", padding: "12px 16px", borderRadius: 3, fontSize: 15 }}>
                <option value="">Select range</option>
                <option>$100K – $150K</option>
                <option>$150K – $250K</option>
                <option>$250K – $400K</option>
                <option>$400K+</option>
              </select>
            </div>
            <div className="mb-6">
              <label className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", display: "block", marginBottom: 6 }}>
                WHAT ARE YOU LOOKING FOR?
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about your goals — are you looking to reduce taxes, generate passive income, or both?"
                style={{ width: "100%", padding: "12px 16px", borderRadius: 3, fontSize: 15, resize: "vertical" }}
              />
            </div>
            <button className="btn-gold w-full py-4 text-lg tracking-widest text-center">
              Submit Application
            </button>
            <p className="font-mono-dm text-xs text-center mt-4" style={{ color: "var(--text-muted)" }}>
              We respond within 24 hours. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── FOOTER ── */}
      <footer style={{ background: "var(--dark-2)", padding: "48px 24px" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="font-bebas text-3xl"
                  style={{
                    background: "linear-gradient(135deg, #8B6914, #C9A84C, #E8C96A)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  CK
                </div>
                <div>
                  <div className="font-bebas text-lg tracking-widest" style={{ lineHeight: 1 }}>FIRSTKONTAK</div>
                  <div className="font-mono-dm text-xs tracking-widest" style={{ color: "var(--text-muted)", lineHeight: 1 }}>CONSULTING INC.</div>
                </div>
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.8, maxWidth: 300 }}>
                Helping high-income W-2 earners build tax-strategic Turo businesses grounded in 
                biblical stewardship and proven systems.
              </p>
              <p className="font-mono-dm text-xs mt-4" style={{ color: "rgba(201,168,76,0.4)" }}>
                San Diego, CA · EIN: 86-3890865
              </p>
            </div>

            <div>
              <div className="font-mono-dm text-xs tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>NAVIGATE</div>
              <ul className="flex flex-col gap-2">
                {["Why Turo", "The Strategy", "Programs", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/\s/g, "-")}`}
                      style={{ color: "var(--text-mid)", fontSize: 14 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-mono-dm text-xs tracking-widest mb-4" style={{ color: "var(--text-muted)" }}>PROGRAMS</div>
              <ul className="flex flex-col gap-2">
                {["Turo 5000 Coach", "Business in a Box", "Kingdom Legacy", "Business Credit Blueprint", "Wife Made"].map((item) => (
                  <li key={item}>
                    <a
                      href="#programs"
                      style={{ color: "var(--text-mid)", fontSize: 14 }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-mid)")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            style={{ borderTop: "1px solid rgba(201,168,76,0.1)", paddingTop: 24 }}
            className="flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <p className="font-mono-dm text-xs" style={{ color: "var(--text-muted)" }}>
              © {new Date().getFullYear()} Firstkontak Consulting Inc. All rights reserved.
            </p>
            <p className="font-mono-dm text-xs text-center" style={{ color: "rgba(201,168,76,0.3)" }}>
              Results are not guaranteed. Consult a licensed CPA for your specific tax situation.
            </p>
          </div>
        </div>
      </footer>

    </main>
  );
}
