import React, { useState } from "react";
import { Calendar, TrendingUp, Users, Star, ChevronRight, Bell, Plus } from "lucide-react";
import { PROVIDER_STATS } from "../../../data/sampleData";

export default function MobileOverview({ onNavigateTab }) {
  const [greeting] = useState(() => {
    const h = new Date().getHours();
    if (h < 12) return "Good Morning";
    if (h < 17) return "Good Afternoon";
    return "Good Evening";
  });

  const metrics = [
    { label: "Today Appts", value: PROVIDER_STATS.todayAppointments, sub: "+4 vs yesterday", icon: <Calendar size={18} color="#4F46E5" />, bg: "#EEF2FF", color: "#4F46E5" },
    { label: "Revenue", value: "Rs." + PROVIDER_STATS.todayRevenue.toLocaleString(), sub: "+18% growth", icon: <TrendingUp size={18} color="#10B981" />, bg: "#ECFDF5", color: "#10B981" },
    { label: "Total Clients", value: PROVIDER_STATS.totalCustomers, sub: "92% repeat", icon: <Users size={18} color="#06B6D4" />, bg: "#ECFEFF", color: "#06B6D4" },
    { label: "Rating", value: PROVIDER_STATS.rating + " *", sub: "342 reviews", icon: <Star size={18} color="#F59E0B" />, bg: "#FFFBEB", color: "#F59E0B" },
  ];

  return (
    <div style={{ paddingBottom: "20px", background: "#F8FAFC", minHeight: "100%" }}>
      {/* Hero Header */}
      <div style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #312E81 50%, #4F46E5 100%)", padding: "20px 16px 36px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "120px", height: "120px", borderRadius: "50%", background: "rgba(99,102,241,0.25)", filter: "blur(30px)" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <p style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.6)", marginBottom: "4px", fontWeight: 600 }}>{greeting} </p>
              <h2 style={{ fontSize: "1.2rem", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>Urban Cut Studio</h2>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", marginTop: "6px" }}>
                <div style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#10B981", boxShadow: "0 0 6px #10B981" }} />
                <span style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Open for Bookings</span>
              </div>
            </div>
            <button style={{ width: "38px", height: "38px", borderRadius: "12px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
              <Bell size={17} color="#FFFFFF" />
              <span style={{ position: "absolute", top: "8px", right: "8px", width: "7px", height: "7px", borderRadius: "50%", background: "#F43F5E", border: "1.5px solid #1E1B4B" }} />
            </button>
          </div>
          <button style={{ width: "100%", padding: "11px 14px", borderRadius: "13px", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)", display: "flex", alignItems: "center", gap: "10px", color: "#FFFFFF" }}>
            <Plus size={17} />
            <span style={{ fontSize: "0.85rem", fontWeight: 700 }}>New Appointment</span>
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div style={{ padding: "0 14px", marginTop: "-18px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {metrics.map((m, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 4px 14px rgba(0,0,0,0.06)" }}>
              <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: m.bg, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "10px" }}>{m.icon}</div>
              <div style={{ fontSize: "1.35rem", fontWeight: 800, color: "#0F172A" }}>{m.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600, marginTop: "2px" }}>{m.label}</div>
              <div style={{ fontSize: "0.66rem", color: m.color, fontWeight: 700, marginTop: "4px" }}>{m.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Today Schedule */}
      <div style={{ padding: "18px 14px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A" }}>Today Schedule</h3>
          <button onClick={() => onNavigateTab("calendar")} style={{ fontSize: "0.75rem", fontWeight: 700, color: "#4F46E5", display: "flex", alignItems: "center", gap: "2px" }}>View All <ChevronRight size={13} /></button>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          {PROVIDER_STATS.scheduleToday.map((item, idx) => (
            <div key={idx} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "13px 14px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ minWidth: "50px", fontSize: "0.72rem", fontWeight: 800, color: "#4F46E5", textAlign: "center", background: "#EEF2FF", borderRadius: "9px", padding: "6px 4px" }}>{item.time}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.customer}</div>
                <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{item.service}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.65rem", fontWeight: 700, color: item.status === "Completed" ? "#059669" : "#4F46E5", background: item.status === "Completed" ? "#ECFDF5" : "#EEF2FF", padding: "3px 7px", borderRadius: "999px", marginBottom: "3px" }}>{item.status}</div>
                <div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>{item.paid}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Services */}
      <div style={{ padding: "18px 14px 0" }}>
        <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0F172A", marginBottom: "12px" }}>Top Services</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
          {PROVIDER_STATS.popularServices.map((srv, idx) => (
            <div key={idx} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "13px 14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>{srv.name}</span>
                <span style={{ fontSize: "0.85rem", fontWeight: 800, color: "#4F46E5" }}>Rs.{srv.revenue.toLocaleString()}</span>
              </div>
              <div style={{ fontSize: "0.7rem", color: "#64748B", marginBottom: "7px" }}>{srv.bookings} bookings</div>
              <div style={{ width: "100%", height: "5px", borderRadius: "999px", background: "#EEF2FF", overflow: "hidden" }}>
                <div style={{ width: (100 - idx * 22) + "%", height: "100%", background: "linear-gradient(90deg, #4F46E5, #6366F1)", borderRadius: "999px" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
