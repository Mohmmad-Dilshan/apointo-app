import React, { useState } from "react";
import { TrendingUp, TrendingDown, BarChart3, Users, Star, DollarSign } from "lucide-react";

export default function MobileAnalytics() {
  const [period, setPeriod] = useState("Week");

  const weekData = [
    { day: "Mon", revenue: 4200, bookings: 8 },
    { day: "Tue", revenue: 5800, bookings: 11 },
    { day: "Wed", revenue: 3900, bookings: 7 },
    { day: "Thu", revenue: 7200, bookings: 14 },
    { day: "Fri", revenue: 8900, bookings: 17 },
    { day: "Sat", revenue: 11400, bookings: 22 },
    { day: "Sun", revenue: 6300, bookings: 12 },
  ];

  const maxRevenue = Math.max(...weekData.map(d => d.revenue));

  const stats = [
    { label: "Total Revenue", value: "Rs.47,700", change: "+23%", up: true, icon: <DollarSign size={16} color="#10B981" />, bg: "#ECFDF5", color: "#10B981" },
    { label: "Total Bookings", value: "91", change: "+12%", up: true, icon: <BarChart3 size={16} color="#4F46E5" />, bg: "#EEF2FF", color: "#4F46E5" },
    { label: "New Clients", value: "18", change: "+8%", up: true, icon: <Users size={16} color="#06B6D4" />, bg: "#ECFEFF", color: "#06B6D4" },
    { label: "Avg Rating", value: "4.8", change: "+0.2", up: true, icon: <Star size={16} color="#F59E0B" />, bg: "#FFFBEB", color: "#F59E0B" },
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 16px 14px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Analytics</h2>
          <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "10px" }}>
            {["Week","Month"].map(p => (
              <button key={p} onClick={() => setPeriod(p)} style={{ padding: "5px 12px", borderRadius: "7px", fontSize: "0.75rem", fontWeight: 700, background: period === p ? "#FFFFFF" : "transparent", color: period === p ? "#4F46E5" : "#64748B", boxShadow: period === p ? "0 1px 4px rgba(0,0,0,0.08)" : "none" }}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "9px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>{s.icon}</div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: s.up ? "#059669" : "#DC2626", background: s.up ? "#ECFDF5" : "#FEF2F2", padding: "2px 6px", borderRadius: "999px", display: "flex", alignItems: "center", gap: "2px" }}>
                  {s.up ? <TrendingUp size={9} /> : <TrendingDown size={9} />} {s.change}
                </span>
              </div>
              <div style={{ fontSize: "1.25rem", fontWeight: 800, color: "#0F172A" }}>{s.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600, marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Revenue Bar Chart */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>Revenue This Week</h3>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10B981" }}>Rs.47,700 total</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "120px" }}>
            {weekData.map((d, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                  <div style={{ width: "100%", borderRadius: "6px 6px 0 0", background: i === 5 ? "linear-gradient(180deg, #6366F1, #4F46E5)" : "#EEF2FF", height: (d.revenue / maxRevenue * 100) + "%" }} />
                </div>
                <span style={{ fontSize: "0.62rem", fontWeight: 700, color: i === 5 ? "#4F46E5" : "#94A3B8" }}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings Bar Chart */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A", marginBottom: "16px" }}>Bookings Per Day</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {weekData.map((d, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", width: "28px" }}>{d.day}</span>
                <div style={{ flex: 1, height: "8px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                  <div style={{ width: (d.bookings / 22 * 100) + "%", height: "100%", background: i === 5 ? "linear-gradient(90deg, #4F46E5, #6366F1)" : "#A5B4FC", borderRadius: "999px" }} />
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#0F172A", width: "20px", textAlign: "right" }}>{d.bookings}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A", marginBottom: "14px" }}>Peak Hours</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { time: "10AM - 12PM", pct: 85, label: "High demand" },
              { time: "2PM - 4PM", pct: 70, label: "Medium demand" },
              { time: "5PM - 7PM", pct: 90, label: "Peak demand" },
              { time: "9AM - 10AM", pct: 45, label: "Low demand" },
            ].map((ph, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#64748B", width: "80px" }}>{ph.time}</span>
                <div style={{ flex: 1, height: "8px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                  <div style={{ width: ph.pct + "%", height: "100%", background: ph.pct >= 80 ? "linear-gradient(90deg, #F43F5E, #FB7185)" : ph.pct >= 60 ? "linear-gradient(90deg, #F59E0B, #FCD34D)" : "linear-gradient(90deg, #10B981, #34D399)", borderRadius: "999px" }} />
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#94A3B8", width: "75px", textAlign: "right" }}>{ph.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
