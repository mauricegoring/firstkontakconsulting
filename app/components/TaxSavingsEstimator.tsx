"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, DollarSign, Car, TrendingDown, ChevronRight, ChevronLeft, Info } from "lucide-react";

export default function TaxSavingsEstimator() {
  const [income, setIncome] = useState(200000);
  const [vehicles, setVehicles] = useState(3);
  const [avgCost, setAvgCost] = useState(15000);
  const [showResults, setShowResults] = useState(false);

  // Tax calculations
  const federalBracket = income <= 100000 ? 0.22 : income <= 200000 ? 0.32 : income <= 400000 ? 0.35 : 0.37;
  const caBracket = income <= 100000 ? 0.06 : income <= 200000 ? 0.093 : 0.103;
  const combinedRate = federalBracket + caBracket;

  const totalCost = vehicles * avgCost;
  const bonusDepreciation = totalCost; // 100% bonus depreciation year 1 (Section 168(k))
  const operatingExpenses = vehicles * 5500; // insurance, maintenance, cleaning, etc.
  const totalDeductions = bonusDepreciation + operatingExpenses;
  const taxSavings = Math.round(totalDeductions * combinedRate);
  const turoRevenue = vehicles * 12000; // ~$1K/month per vehicle conservative
  const netBenefit = taxSavings + turoRevenue;

  const effectiveSavingsRate = Math.min(((taxSavings / income) * 100), 30);

  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* Header */}
      <div
        style={{
          padding: "28px 36px",
          borderBottom: "1px solid var(--border)",
          background: "linear-gradient(135deg, rgba(139,105,20,0.15), rgba(201,168,76,0.03))",
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <Calculator size={20} style={{ color: "var(--gold)" }} />
          <h3 className="bebas" style={{ fontSize: 28, letterSpacing: "0.04em" }}>
            Tax Savings Estimator
          </h3>
        </div>
        <p style={{ fontSize: 13, color: "var(--text-3)", lineHeight: 1.6 }}>
          See how a Turo business can reduce your tax burden. Estimates based on MACRS bonus depreciation and standard operating costs.
        </p>
      </div>

      {/* Inputs */}
      <div style={{ padding: "28px 36px" }}>
        <div className="flex flex-col gap-6">
          {/* Income Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Annual W-2 Income
              </label>
              <span className="playfair gd" style={{ fontSize: 20, fontWeight: 700 }}>
                ${income.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={100000}
              max={500000}
              step={10000}
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "var(--gold)",
                height: 4,
                background: "var(--surface-2)",
                borderRadius: 2,
                outline: "none",
                cursor: "pointer",
                padding: 0,
                border: "none !important",
              }}
            />
            <div className="flex justify-between mono" style={{ fontSize: 9, color: "var(--text-3)", marginTop: 4 }}>
              <span>$100K</span>
              <span>$500K+</span>
            </div>
          </div>

          {/* Vehicles Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Number of Vehicles
              </label>
              <span className="playfair gd" style={{ fontSize: 20, fontWeight: 700 }}>
                {vehicles}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              value={vehicles}
              onChange={(e) => setVehicles(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "var(--gold)",
                height: 4,
                background: "var(--surface-2)",
                borderRadius: 2,
                outline: "none",
                cursor: "pointer",
                padding: 0,
                border: "none !important",
              }}
            />
            <div className="flex justify-between mono" style={{ fontSize: 9, color: "var(--text-3)", marginTop: 4 }}>
              <span>1</span>
              <span>10</span>
            </div>
          </div>

          {/* Avg Vehicle Cost Slider */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <label className="mono" style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-3)" }}>
                Avg. Vehicle Cost
              </label>
              <span className="playfair gd" style={{ fontSize: 20, fontWeight: 700 }}>
                ${avgCost.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={40000}
              step={2500}
              value={avgCost}
              onChange={(e) => setAvgCost(Number(e.target.value))}
              style={{
                width: "100%",
                accentColor: "var(--gold)",
                height: 4,
                background: "var(--surface-2)",
                borderRadius: 2,
                outline: "none",
                cursor: "pointer",
                padding: 0,
                border: "none !important",
              }}
            />
            <div className="flex justify-between mono" style={{ fontSize: 9, color: "var(--text-3)", marginTop: 4 }}>
              <span>$5K</span>
              <span>$40K</span>
            </div>
          </div>

          {/* Calculate Button */}
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowResults(true)}
            className="btn-primary w-full justify-center"
            style={{ padding: "16px 32px", marginTop: 8 }}
          >
            <DollarSign size={16} />
            Calculate My Savings
          </motion.button>
        </div>
      </div>

      {/* Results */}
      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: "32px 36px",
                borderTop: "1px solid var(--border)",
                background: "linear-gradient(180deg, rgba(139,105,20,0.08), transparent)",
              }}
            >
              {/* Big Number */}
              <div className="text-center mb-6">
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: 8 }}>
                  Estimated Year-1 Tax Savings
                </div>
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="bebas gd"
                  style={{ fontSize: "clamp(48px, 8vw, 72px)", lineHeight: 1, letterSpacing: "0.02em" }}
                >
                  ${taxSavings.toLocaleString()}
                </motion.div>
                <div className="mono" style={{ fontSize: 10, color: "var(--text-3)", marginTop: 8 }}>
                  {effectiveSavingsRate.toFixed(1)}% effective income reduction
                </div>
              </div>

              {/* Breakdown */}
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: <Car size={14} />,
                    label: "Bonus Depreciation (§168(k))",
                    value: `–$${bonusDepreciation.toLocaleString()}`,
                  },
                  {
                    icon: <TrendingDown size={14} />,
                    label: "Operating Expenses",
                    value: `–$${operatingExpenses.toLocaleString()}`,
                  },
                  {
                    icon: <DollarSign size={14} />,
                    label: "Total Deductions",
                    value: `$${totalDeductions.toLocaleString()}`,
                  },
                  {
                    icon: <DollarSign size={14} />,
                    label: "Est. Turo Revenue (yr 1)",
                    value: `+$${turoRevenue.toLocaleString()}`,
                  },
                ].map(({ icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between"
                    style={{
                      padding: "10px 16px",
                      background: "rgba(255,255,255,0.02)",
                      borderRadius: 4,
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="flex items-center gap-2" style={{ color: "var(--text-3)", fontSize: 12 }}>
                      {icon}
                      {label}
                    </div>
                    <div className="mono" style={{ fontSize: 13, color: "var(--gold-light)" }}>
                      {value}
                    </div>
                  </div>
                ))}

                {/* Total Net Benefit */}
                <div
                  className="flex items-center justify-between"
                  style={{
                    padding: "14px 16px",
                    background: "linear-gradient(135deg, rgba(139,105,20,0.2), rgba(201,168,76,0.08))",
                    borderRadius: 4,
                    border: "1px solid rgba(201,168,76,0.3)",
                    marginTop: 4,
                  }}
                >
                  <div className="flex items-center gap-2" style={{ fontSize: 13, fontWeight: 600 }}>
                    <DollarSign size={14} style={{ color: "var(--gold)" }} />
                    Total Year-1 Net Benefit
                  </div>
                  <div className="mono gd" style={{ fontSize: 18, fontWeight: 700 }}>
                    ${netBenefit.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="flex items-start gap-2 mt-4" style={{ padding: "8px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 4 }}>
                <Info size={12} style={{ color: "var(--text-3)", flexShrink: 0, marginTop: 2 }} />
                <span className="mono" style={{ fontSize: 9, color: "var(--text-3)", lineHeight: 1.6, letterSpacing: "0.02em" }}>
                  This is an estimate only. Actual savings depend on your tax situation, vehicle choices, market conditions, and CPA guidance. Consult a licensed tax professional.
                </span>
              </div>

              {/* CTA */}
              <div className="text-center mt-6">
                <a href="#apply" className="btn-primary" style={{ padding: "14px 28px" }}>
                  Get Your Custom Strategy <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}