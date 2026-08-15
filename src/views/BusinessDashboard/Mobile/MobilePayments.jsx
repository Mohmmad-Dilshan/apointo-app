import React, { useState } from "react";
import { Download, ArrowUpRight, CreditCard, TrendingUp, Clock, CheckCircle2 } from "lucide-react";

export default function MobilePayments() {
  const transactions = [
    { id: "TXN-901", date: "Today, 02:30 PM", customer: "Dilshan P.", service: "Classic Haircut", gross: "Rs.329", commission: "Rs.39", net: "Rs.290", status: "Settled" },
    { id: "TXN-902", date: "Today, 10:30 AM", customer: "Arjun K.", service: "Beard Combo", gross: "Rs.499", commission: "Rs.59", net: "Rs.440", status: "Settled" },
    { id: "TXN-903", date: "Yesterday", customer: "Siddharth N.", service: "Royal Package", gross: "Rs.899", commission: "Rs.107", net: "Rs.792", status: "Payout Queued" },
    { id: "TXN-904", date: "12 Aug 2026", customer: "Rohan M.", service: "Head Spa", gross: "Rs.399", commission: "Rs.47", net: "Rs.352", status: "Settled" },
  ];

  const [filter, setFilter] = useState("all");
  const filtered = transactions.filter(t => filter === "all" || t.status === filter);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Banner */}
      <div style={{ background: "linear-gradient(135deg, #065F46 0%, #059669 100%)", padding: "20px 16px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", filter: "blur(20px)" }} />
        <p style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", fontWeight: 600, marginBottom: "4px" }}>Pending Bank Payout</p>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.03em" }}>Rs.28,400</h2>
        <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: "4px" }}>Next transfer: Friday, 16 Aug 2026</p>
      </div>

      {/* Stats */}
      <div style={{ padding: "0 14px", marginTop: "-18px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { label: "Monthly Revenue", value: "Rs.1,42,850", sub: "+24% vs last month", color: "#10B981", bg: "#ECFDF5", icon: <TrendingUp size={16} color="#10B981" /> },
            { label: "Platform Fee", value: "12%", sub: "Standard tier", color: "#4F46E5", bg: "#EEF2FF", icon: <CreditCard size={16} color="#4F46E5" /> },
          ].map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>{s.icon}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#0F172A" }}>{s.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", marginTop: "2px" }}>{s.label}</div>
              <div style={{ fontSize: "0.66rem", color: s.color, fontWeight: 700, marginTop: "3px" }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter + List */}
      <div style={{ padding: "16px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A" }}>Transaction History</h3>
          <button style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.75rem", fontWeight: 700, color: "#4F46E5", background: "#EEF2FF", padding: "6px 11px", borderRadius: "9px" }}>
            <Download size={12} /> Export
          </button>
        </div>

        <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
          {["all", "Settled", "Payout Queued"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "5px 12px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap", background: filter === f ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF", color: filter === f ? "#FFFFFF" : "#64748B", border: filter === f ? "none" : "1px solid #E2E8F0" }}>
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {filtered.map(t => (
            <div key={t.id} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "15px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{t.customer}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>{t.service}</div>
                  <div style={{ fontSize: "0.68rem", color: "#94A3B8", marginTop: "2px" }}>#{t.id} • {t.date}</div>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: t.status === "Settled" ? "#059669" : "#D97706", background: t.status === "Settled" ? "#ECFDF5" : "#FFFBEB", padding: "3px 8px", borderRadius: "999px" }}>
                  {t.status === "Settled" ? <CheckCircle2 size={10} style={{ marginRight: "3px", display: "inline" }} /> : <Clock size={10} style={{ marginRight: "3px", display: "inline" }} />}
                  {t.status}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", background: "#F8FAFC", borderRadius: "10px", padding: "10px 12px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#0F172A" }}>{t.gross}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Gross</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#F43F5E" }}>-{t.commission}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Commission</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#10B981" }}>{t.net}</div>
                  <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Net Payout</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
