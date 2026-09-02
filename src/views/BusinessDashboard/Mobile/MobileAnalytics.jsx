import React, { useState } from "react";
import {
  TrendingUp,
  TrendingDown,
  BarChart3,
  Users,
  Star,
  DollarSign,
  PieChart,
  Scissors,
  Calendar,
  Sparkles
} from "lucide-react";

export default function MobileAnalytics() {
  const [period, setPeriod] = useState("Week"); // 'Week' | 'Month'

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
    { label: "Gross Sales", value: "₹47,700", change: "+23%", up: true, icon: <DollarSign size={16} color="#10B981" />, bg: "#ECFDF5", color: "#10B981" },
    { label: "Total Bookings", value: "91", change: "+12%", up: true, icon: <BarChart3 size={16} color="#4F46E5" />, bg: "#EEF2FF", color: "#4F46E5" },
    { label: "Avg Ticket Size", value: "₹524", change: "+15%", up: true, icon: <Sparkles size={16} color="#F59E0B" />, bg: "#FFFBEB", color: "#F59E0B" },
    { label: "Client Retention", value: "88%", change: "+4%", up: true, icon: <Users size={16} color="#06B6D4" />, bg: "#ECFEFF", color: "#06B6D4" },
  ];

  const staffRevenue = [
    { name: "Rahul Sharma", role: "Senior Barber", revenue: "₹22,450", bookings: 42, pct: 47, color: "#4F46E5" },
    { name: "Priya Verma", role: "Spa & Colorist", revenue: "₹15,800", bookings: 26, pct: 33, color: "#EC4899" },
    { name: "Vikram Singh", role: "Beard Master", revenue: "₹9,450", bookings: 23, pct: 20, color: "#06B6D4" }
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 14px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>Analytics & Insights</h2>
            <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Weekly sales, staff productivity & demand trends</p>
          </div>
          <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "10px" }}>
            {["Week", "Month"].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                style={{
                  padding: "5px 12px",
                  borderRadius: "8px",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  border: "none",
                  background: period === p ? "#FFFFFF" : "transparent",
                  color: period === p ? "#4F46E5" : "#64748B",
                  boxShadow: period === p ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
                  cursor: "pointer"
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {/* Stats Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div style={{ width: "32px", height: "32px", borderRadius: "10px", background: s.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {s.icon}
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: s.up ? "#059669" : "#DC2626", background: s.up ? "#ECFDF5" : "#FEF2F2", padding: "2px 6px", borderRadius: "999px", display: "flex", alignItems: "center", gap: "2px" }}>
                  {s.up ? <TrendingUp size={10} /> : <TrendingDown size={10} />} {s.change}
                </span>
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 900, color: "#0F172A", letterSpacing: "-0.02em" }}>{s.value}</div>
              <div style={{ fontSize: "0.68rem", color: "#64748B", fontWeight: 600, marginTop: "2px" }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Revenue Bar Chart */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A" }}>Revenue Velocity</h3>
              <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Daily gross receipts</p>
            </div>
            <span style={{ fontSize: "0.78rem", fontWeight: 900, color: "#10B981" }}>₹47,700 total</span>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", height: "130px" }}>
            {weekData.map((d, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", height: "100%" }}>
                <div style={{ flex: 1, display: "flex", alignItems: "flex-end", width: "100%" }}>
                  <div style={{
                    width: "100%",
                    borderRadius: "8px 8px 0 0",
                    background: i === 5 ? "linear-gradient(180deg, #6366F1, #4F46E5)" : "#EEF2FF",
                    height: `${(d.revenue / maxRevenue) * 100}%`,
                    transition: "height 0.4s"
                  }} />
                </div>
                <span style={{ fontSize: "0.65rem", fontWeight: 800, color: i === 5 ? "#4F46E5" : "#94A3B8" }}>{d.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Specialist Revenue Contribution */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
            <div>
              <h3 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A" }}>Specialist Productivity</h3>
              <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Revenue attribution by stylist</p>
            </div>
            <Scissors size={16} color="#4F46E5" />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {staffRevenue.map((sr, idx) => (
              <div key={idx}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <div>
                    <span style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>{sr.name}</span>
                    <span style={{ fontSize: "0.68rem", color: "#64748B", marginLeft: "6px" }}>({sr.bookings} clients)</span>
                  </div>
                  <span style={{ fontSize: "0.85rem", fontWeight: 900, color: sr.color }}>{sr.revenue} ({sr.pct}%)</span>
                </div>
                <div style={{ width: "100%", height: "7px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                  <div style={{ width: `${sr.pct}%`, height: "100%", background: sr.color, borderRadius: "999px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Demand Hours */}
        <div style={{ background: "#FFFFFF", borderRadius: "18px", padding: "18px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
          <h3 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A", marginBottom: "14px" }}>Salon Rush Hours & Heatmap</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { time: "05:00 PM - 08:00 PM", pct: 95, label: "🔥 Peak Rush", color: "#EF4444" },
              { time: "11:00 AM - 02:00 PM", pct: 80, label: "⚡ Busy Slots", color: "#F59E0B" },
              { time: "02:00 PM - 05:00 PM", pct: 65, label: "Medium Demand", color: "#4F46E5" },
              { time: "09:00 AM - 11:00 AM", pct: 40, label: "Light Window", color: "#10B981" },
            ].map((ph, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#64748B", width: "110px" }}>{ph.time}</span>
                <div style={{ flex: 1, height: "8px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                  <div style={{ width: `${ph.pct}%`, height: "100%", background: ph.color, borderRadius: "999px" }} />
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: ph.color, width: "75px", textAlign: "right" }}>{ph.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
