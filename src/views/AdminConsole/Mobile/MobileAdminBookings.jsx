import React, { useState } from "react";
import { Search, Calendar, Building, Clock, DollarSign, Filter, MapPin, CheckCircle2 } from "lucide-react";

export default function MobileAdminBookings() {
  const globalBookings = [
    { id: "APT-98241", customer: "Dilshan Perera", business: "Urban Cut Studio", service: "Classic Haircut", date: "Today", time: "02:30 PM", gmv: "₹329", cut: "₹39", city: "Gurugram", status: "Confirmed" },
    { id: "APT-87120", customer: "Sneha Nair", business: "Glow Beauty Lounge", service: "Hydra Facial", date: "Today", time: "04:00 PM", gmv: "₹1,049", cut: "₹125", city: "Bengaluru", status: "Completed" },
    { id: "APT-76510", customer: "Rohan Kapoor", business: "FitZone Fitness", service: "Workout Pass", date: "Yesterday", time: "06:00 PM", gmv: "₹350", cut: "₹42", city: "Delhi", status: "Completed" },
    { id: "APT-65499", customer: "Priya Sharma", business: "Urban Cut Studio", service: "Hair Coloring", date: "12 Aug", time: "11:00 AM", gmv: "₹1,299", cut: "₹155", city: "Gurugram", status: "Completed" },
    { id: "APT-54321", customer: "Amit Patel", business: "SmileCare Dental", service: "Teeth Cleaning", date: "10 Aug", time: "03:15 PM", gmv: "₹799", cut: "₹95", city: "Mumbai", status: "Cancelled" },
  ];

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const filtered = globalBookings.filter(b => {
    const matchQuery = b.customer.toLowerCase().includes(query.toLowerCase()) ||
                       b.business.toLowerCase().includes(query.toLowerCase()) ||
                       b.id.toLowerCase().includes(query.toLowerCase());
    const matchFilter = filter === "all" || b.status.toLowerCase() === filter.toLowerCase();
    return matchQuery && matchFilter;
  });

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Header & Search */}
      <div style={{ background: "#131B2E", padding: "16px 16px 14px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px" }}>Global System Bookings</h2>
        <p style={{ fontSize: "0.7rem", color: "#94A3B8", marginBottom: "12px" }}>Real-time feed of all appointments across India</p>

        {/* Search Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#0F172A", padding: "8px 12px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)", marginBottom: "12px" }}>
          <Search size={15} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search booking ID, customer, salon..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ background: "transparent", border: "none", color: "#F8FAFC", fontSize: "0.8rem", width: "100%", outline: "none" }}
          />
        </div>

        {/* Status Filters */}
        <div style={{ display: "flex", gap: "8px" }}>
          {["all", "Confirmed", "Completed", "Cancelled"].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "5px 12px",
                borderRadius: "999px",
                fontSize: "0.72rem",
                fontWeight: 700,
                background: filter === f ? "linear-gradient(135deg, #6366F1, #4F46E5)" : "rgba(255, 255, 255, 0.06)",
                color: filter === f ? "#FFFFFF" : "#94A3B8",
                border: filter === f ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: filter === f ? "0 2px 10px rgba(99, 102, 241, 0.4)" : "none"
              }}
            >
              {f === "all" ? "All Bookings" : f}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map(b => {
          const isConfirmed = b.status === "Confirmed";
          const isCompleted = b.status === "Completed";
          const isCancelled = b.status === "Cancelled";

          return (
            <div
              key={b.id}
              style={{
                background: "#131B2E",
                borderRadius: "16px",
                padding: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#818CF8" }}>#{b.id}</span>
                    <span style={{ fontSize: "0.62rem", color: "#94A3B8" }}>• {b.city}</span>
                  </div>
                  <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC", marginTop: "2px" }}>{b.service}</h3>
                  <p style={{ fontSize: "0.74rem", color: "#CBD5E1", marginTop: "2px" }}>👤 {b.customer} ➔ 🏪 {b.business}</p>
                </div>

                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "999px",
                  color: isConfirmed ? "#34D399" : isCompleted ? "#818CF8" : "#F43F5E",
                  background: isConfirmed ? "rgba(52, 211, 153, 0.15)" : isCompleted ? "rgba(129, 140, 248, 0.15)" : "rgba(244, 63, 94, 0.15)",
                  border: isConfirmed ? "1px solid rgba(52, 211, 153, 0.3)" : isCompleted ? "1px solid rgba(129, 140, 248, 0.3)" : "1px solid rgba(244, 63, 94, 0.3)"
                }}>
                  {b.status}
                </span>
              </div>

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0F172A", padding: "8px 12px", borderRadius: "10px", marginTop: "10px" }}>
                <span style={{ fontSize: "0.7rem", color: "#94A3B8", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Clock size={12} color="#818CF8" /> {b.date} • {b.time}
                </span>
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#34D399" }}>{b.gmv}</span>
                  <span style={{ fontSize: "0.65rem", color: "#818CF8", marginLeft: "6px" }}>(Comm: {b.cut})</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
