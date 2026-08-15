import React, { useState } from "react";
import { DollarSign, CreditCard, ShieldCheck, CheckCircle2, Send, ArrowUpRight, TrendingUp, AlertCircle, RefreshCw } from "lucide-react";

export default function MobileAdminPayments() {
  const [payouts, setPayouts] = useState([
    { id: "po_101", merchant: "Urban Cut Studio", city: "Gurugram", amount: "₹1,42,800", period: "01 - 07 Aug 2026", status: "Pending Disbursal" },
    { id: "po_102", merchant: "Glow Beauty Lounge", city: "Bengaluru", amount: "₹2,15,400", period: "01 - 07 Aug 2026", status: "Pending Disbursal" },
    { id: "po_103", merchant: "SmileCare Dental", city: "Mumbai", amount: "₹53,800", period: "01 - 07 Aug 2026", status: "Settled ✓" },
    { id: "po_104", merchant: "FitZone Wellness", city: "Delhi", amount: "₹88,200", period: "01 - 07 Aug 2026", status: "Settled ✓" },
  ]);

  const [toastMsg, setToastMsg] = useState(null);

  const handleReleasePayout = (id, merchant) => {
    setPayouts(payouts.map(p => p.id === id ? { ...p, status: "Settled ✓" } : p));
    setToastMsg(`₹ Settlement released to ${merchant}!`);
    setTimeout(() => setToastMsg(null), 3000);
  };

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Revenue Card Banner */}
      <div style={{
        background: "linear-gradient(135deg, #065F46 0%, #047857 50%, #059669 100%)",
        padding: "20px 16px 28px",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255, 255, 255, 0.15)", filter: "blur(20px)" }} />
        
        <p style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.7)", marginBottom: "4px" }}>Total Net Platform Earnings (12% Cut)</p>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>₹1,01,10,000</h2>
        
        <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
          <span style={{ fontSize: "0.72rem", color: "#A7F3D0", fontWeight: 700 }}>Total GMV: ₹8.42 Cr</span>
          <span style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.6)" }}>• 32% YoY growth</span>
        </div>
      </div>

      {/* Disbursal Summary Stats */}
      <div style={{ padding: "0 14px", marginTop: "-16px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          <div style={{ background: "#131B2E", borderRadius: "16px", padding: "14px", border: "1px solid rgba(245, 158, 11, 0.3)", boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}>
            <span style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 700 }}>Pending Disbursals</span>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#FBBF24", marginTop: "4px" }}>₹3,58,200</div>
            <p style={{ fontSize: "0.62rem", color: "#94A3B8", marginTop: "2px" }}>Auto-batch: Friday 4PM</p>
          </div>

          <div style={{ background: "#131B2E", borderRadius: "16px", padding: "14px", border: "1px solid rgba(52, 211, 153, 0.3)", boxShadow: "0 4px 14px rgba(0,0,0,0.3)" }}>
            <span style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 700 }}>Settled This Month</span>
            <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#34D399", marginTop: "4px" }}>₹74,20,000</div>
            <p style={{ fontSize: "0.62rem", color: "#34D399", marginTop: "2px" }}>100% On-time payout</p>
          </div>
        </div>
      </div>

      {/* Action Toast */}
      {toastMsg && (
        <div style={{ margin: "14px 14px 0", background: "rgba(16, 185, 129, 0.2)", border: "1px solid rgba(52, 211, 153, 0.4)", borderRadius: "12px", padding: "10px 14px", fontSize: "0.78rem", color: "#34D399", fontWeight: 700, display: "flex", alignItems: "center", gap: "8px" }}>
          <CheckCircle2 size={16} /> {toastMsg}
        </div>
      )}

      {/* Disbursal Queue */}
      <div style={{ padding: "18px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC" }}>Merchant Disbursal Queue</h3>
          <span style={{ fontSize: "0.68rem", color: "#818CF8", background: "rgba(99, 102, 241, 0.15)", padding: "3px 8px", borderRadius: "6px" }}>
            Direct IMPS / NEFT
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {payouts.map(p => {
            const isSettled = p.status.includes("Settled");

            return (
              <div
                key={p.id}
                style={{
                  background: "#131B2E",
                  borderRadius: "16px",
                  padding: "15px",
                  border: isSettled ? "1px solid rgba(52, 211, 153, 0.2)" : "1px solid rgba(245, 158, 11, 0.25)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.25)"
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC" }}>{p.merchant}</h4>
                      <span style={{ fontSize: "0.65rem", color: "#94A3B8" }}>({p.city})</span>
                    </div>
                    <p style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px" }}>Period: {p.period}</p>
                  </div>

                  <span style={{
                    fontSize: "0.65rem",
                    fontWeight: 800,
                    padding: "3px 8px",
                    borderRadius: "999px",
                    color: isSettled ? "#34D399" : "#FBBF24",
                    background: isSettled ? "rgba(52, 211, 153, 0.15)" : "rgba(251, 191, 36, 0.15)",
                    border: isSettled ? "1px solid rgba(52, 211, 153, 0.3)" : "1px solid rgba(251, 191, 36, 0.3)"
                  }}>
                    {p.status}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "12px", paddingTop: "10px", borderTop: "1px solid rgba(255, 255, 255, 0.06)" }}>
                  <div>
                    <span style={{ fontSize: "0.65rem", color: "#94A3B8" }}>Net Payout: </span>
                    <span style={{ fontSize: "1.1rem", fontWeight: 900, color: "#F8FAFC" }}>{p.amount}</span>
                  </div>

                  {!isSettled && (
                    <button
                      onClick={() => handleReleasePayout(p.id, p.merchant)}
                      style={{
                        padding: "8px 14px",
                        borderRadius: "10px",
                        background: "linear-gradient(135deg, #10B981, #059669)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        fontWeight: 800,
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        boxShadow: "0 2px 10px rgba(16, 185, 129, 0.4)"
                      }}
                    >
                      <Send size={12} /> Release Funds
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
