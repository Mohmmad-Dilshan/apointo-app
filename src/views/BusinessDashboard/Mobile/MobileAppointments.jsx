import React, { useState } from "react";
import { Search, CheckCircle2, XCircle, Clock, ChevronRight, Phone } from "lucide-react";

export default function MobileAppointments() {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const appointmentsList = [
    { id: "APT-98241", customer: "Dilshan Perera", phone: "+91 98765 43210", service: "Classic Haircut & Styling", staff: "Rahul Sharma", date: "14 Aug 2026", time: "02:30 PM", amount: "Rs.329", status: "Confirmed" },
    { id: "APT-87120", customer: "Arjun Kapoor", phone: "+91 98123 45678", service: "Beard Crafting Combo", staff: "Vikram Singh", date: "14 Aug 2026", time: "10:30 AM", amount: "Rs.499", status: "Completed" },
    { id: "APT-76510", customer: "Rohan Malhotra", phone: "+91 99887 76655", service: "Royal Deluxe Grooming", staff: "Priya Verma", date: "15 Aug 2026", time: "05:00 PM", amount: "Rs.899", status: "Upcoming" },
    { id: "APT-65430", customer: "Siddharth Nair", phone: "+91 97766 55443", service: "Head Spa & Massage", staff: "Rahul Sharma", date: "12 Aug 2026", time: "04:00 PM", amount: "Rs.399", status: "Cancelled" },
  ];

  const filters = ["all","Confirmed","Completed","Upcoming","Cancelled"];

  const filtered = appointmentsList.filter(a => {
    const matchesFilter = filterStatus === "all" || a.status === filterStatus;
    const matchesSearch = a.customer.toLowerCase().includes(searchQuery.toLowerCase()) || a.id.includes(searchQuery);
    return matchesFilter && matchesSearch;
  });

  const statusColor = (s) => {
    if (s === "Confirmed") return { color: "#4F46E5", bg: "#EEF2FF" };
    if (s === "Completed") return { color: "#059669", bg: "#ECFDF5" };
    if (s === "Upcoming") return { color: "#D97706", bg: "#FFFBEB" };
    return { color: "#DC2626", bg: "#FEF2F2" };
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Search Bar */}
      <div style={{ padding: "14px 14px 10px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A", marginBottom: "12px" }}>Appointments</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F1F5F9", padding: "10px 14px", borderRadius: "12px" }}>
          <Search size={16} color="#64748B" />
          <input type="text" placeholder="Search customer or ID..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} style={{ border: "none", background: "transparent", fontSize: "0.85rem", outline: "none", flex: 1, color: "#0F172A" }} />
        </div>
      </div>

      {/* Filter Pills */}
      <div style={{ padding: "12px 14px", display: "flex", gap: "8px", overflowX: "auto" }} className="no-scrollbar">
        {filters.map(f => (
          <button key={f} onClick={() => setFilterStatus(f)} style={{ padding: "6px 14px", borderRadius: "999px", fontSize: "0.75rem", fontWeight: 700, whiteSpace: "nowrap", background: filterStatus === f ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF", color: filterStatus === f ? "#FFFFFF" : "#64748B", border: filterStatus === f ? "none" : "1px solid #E2E8F0", boxShadow: filterStatus === f ? "0 3px 10px rgba(79,70,229,0.3)" : "none" }}>
            {f === "all" ? "All" : f}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map(apt => {
          const sc = statusColor(apt.status);
          return (
            <div key={apt.id} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              {/* Top Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{apt.customer}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>#{apt.id}</div>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: sc.color, background: sc.bg, padding: "4px 9px", borderRadius: "999px" }}>{apt.status}</span>
              </div>

              {/* Service Info */}
              <div style={{ background: "#F8FAFC", borderRadius: "10px", padding: "10px 12px", marginBottom: "10px" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A" }}>{apt.service}</div>
                <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "3px" }}>Specialist: {apt.staff}</div>
              </div>

              {/* Date / Amount Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0F172A" }}>{apt.date}</div>
                  <div style={{ fontSize: "0.72rem", color: "#4F46E5", fontWeight: 700 }}>{apt.time}</div>
                </div>
                <div style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>{apt.amount}</div>
              </div>

              {/* Actions */}
              {apt.status === "Confirmed" && (
                <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
                  <button style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#ECFDF5", color: "#059669", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <CheckCircle2 size={14} /> Complete
                  </button>
                  <button style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#FEF2F2", color: "#DC2626", fontSize: "0.78rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                    <XCircle size={14} /> Cancel
                  </button>
                  <button style={{ width: "36px", padding: "8px", borderRadius: "10px", background: "#EEF2FF", color: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Phone size={14} />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
