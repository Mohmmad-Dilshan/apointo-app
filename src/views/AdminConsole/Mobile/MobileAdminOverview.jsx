import React from "react";
import { Users, Building2, Calendar, DollarSign, ShieldAlert, CheckCircle2, TrendingUp, Activity, ArrowUpRight, Zap, ShieldCheck } from "lucide-react";
import { ADMIN_STATS } from "../../../data/sampleData";

export default function MobileAdminOverview({ onNavigateTab }) {
  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Platform Pulse Banner */}
      <div style={{
        background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4338CA 100%)",
        padding: "20px 16px 28px",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid rgba(99, 102, 241, 0.2)"
      }}>
        <div style={{ position: "absolute", top: -30, right: -30, width: "120px", height: "120px", borderRadius: "50%", background: "rgba(129, 140, 248, 0.25)", filter: "blur(30px)" }} />
        
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px", position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 10px #10B981" }} />
            <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#A5B4FC", textTransform: "uppercase", letterSpacing: "0.08em" }}>Super Admin Console</span>
          </div>
          <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#34D399", background: "rgba(16, 185, 129, 0.15)", padding: "3px 8px", borderRadius: "999px", border: "1px solid rgba(52, 211, 153, 0.3)" }}>
            System 99.9% Online
          </span>
        </div>

        <p style={{ fontSize: "0.72rem", color: "rgba(255, 255, 255, 0.65)", marginBottom: "4px" }}>Platform Gross Merchandise Value (GMV)</p>
        <h2 style={{ fontSize: "2rem", fontWeight: 900, color: "#FFFFFF", letterSpacing: "-0.03em" }}>{ADMIN_STATS.gmv}</h2>
        
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "8px" }}>
          <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: "#34D399", fontWeight: 700 }}>
            <TrendingUp size={13} /> +32% MoM
          </span>
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)" }}>• Platform Cut: <strong>{ADMIN_STATS.commission}</strong></span>
        </div>
      </div>

      {/* 2x2 Metric KPI Grid */}
      <div style={{ padding: "0 14px", marginTop: "-16px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {[
            { label: "Total Users", value: ADMIN_STATS.totalUsers.toLocaleString(), sub: "+1,240 wk", icon: <Users size={16} color="#818CF8" />, bg: "rgba(99, 102, 241, 0.15)", border: "rgba(99, 102, 241, 0.25)" },
            { label: "Active Salons", value: ADMIN_STATS.totalBusinesses.toLocaleString(), sub: "+45 mo", icon: <Building2 size={16} color="#38BDF8" />, bg: "rgba(56, 189, 248, 0.15)", border: "rgba(56, 189, 248, 0.25)" },
            { label: "Total Bookings", value: ADMIN_STATS.totalBookings.toLocaleString(), sub: "100% fulfilled", icon: <Calendar size={16} color="#34D399" />, bg: "rgba(52, 211, 153, 0.15)", border: "rgba(52, 211, 153, 0.25)" },
            { label: "Active Cities", value: "14 Cities", sub: "Top: BLR & DEL", icon: <Activity size={16} color="#FBBF24" />, bg: "rgba(251, 191, 36, 0.15)", border: "rgba(251, 191, 36, 0.25)" },
          ].map((m, i) => (
            <div key={i} style={{ background: "#131B2E", borderRadius: "16px", padding: "14px", border: `1px solid ${m.border}`, boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.68rem", color: "#94A3B8", fontWeight: 700 }}>{m.label}</span>
                <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{m.icon}</div>
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#F8FAFC" }}>{m.value}</div>
              <div style={{ fontSize: "0.65rem", color: "#34D399", fontWeight: 700, marginTop: "2px" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Urgent Action: Pending KYC Applications */}
      <div style={{ padding: "18px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div>
            <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC", display: "flex", alignItems: "center", gap: "6px" }}>
              <ShieldAlert size={16} color="#F59E0B" /> Pending Partner KYC
            </h3>
            <p style={{ fontSize: "0.68rem", color: "#94A3B8" }}>Businesses awaiting document clearance</p>
          </div>
          <button
            onClick={() => onNavigateTab("verification")}
            style={{ fontSize: "0.72rem", fontWeight: 700, color: "#818CF8", background: "rgba(99, 102, 241, 0.15)", border: "1px solid rgba(99, 102, 241, 0.3)", padding: "5px 10px", borderRadius: "8px", display: "flex", alignItems: "center", gap: "3px" }}
          >
            Review ({ADMIN_STATS.pendingVerifications.length}) <ArrowUpRight size={12} />
          </button>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {ADMIN_STATS.pendingVerifications.map(app => (
            <div
              key={app.id}
              onClick={() => onNavigateTab("verification")}
              style={{
                background: "#131B2E",
                borderRadius: "16px",
                padding: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#F8FAFC" }}>{app.name}</div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{app.category} • {app.city} (Owner: {app.owner})</div>
              </div>
              <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#FBBF24", background: "rgba(251, 191, 36, 0.15)", border: "1px solid rgba(251, 191, 36, 0.3)", padding: "3px 8px", borderRadius: "999px", whiteSpace: "nowrap" }}>
                Needs KYC
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time System Feed */}
      <div style={{ padding: "18px 14px 0" }}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "12px", display: "flex", alignItems: "center", gap: "6px" }}>
          <Zap size={16} color="#38BDF8" /> Platform Activity Feed
        </h3>

        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {[
            { text: "Urban Cut Studio completed appointment #APT-98241", time: "2 min ago", icon: "✂️", color: "#34D399" },
            { text: "Payout batch of ₹1,42,800 queued for Friday disbursal", time: "14 min ago", icon: "💳", color: "#818CF8" },
            { text: "New salon 'Aura Spa & Wellness' submitted GST docs", time: "1 hr ago", icon: "🛡️", color: "#FBBF24" },
            { text: "124 active customers browsing salon slots currently", time: "Live", icon: "🔥", color: "#F43F5E" },
          ].map((item, i) => (
            <div key={i} style={{ background: "#0F172A", borderRadius: "12px", padding: "12px", border: "1px solid rgba(255, 255, 255, 0.05)", display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.76rem", color: "#E2E8F0", lineHeight: 1.4 }}>{item.text}</div>
                <div style={{ fontSize: "0.64rem", color: "#64748B", marginTop: "2px" }}>{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
