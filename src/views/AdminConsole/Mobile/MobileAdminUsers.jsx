import React, { useState } from "react";
import { Users, Search, ShieldCheck, AlertTriangle, CheckCircle2, UserCheck, UserX, Phone, Mail, Award } from "lucide-react";

export default function MobileAdminUsers() {
  const [users, setUsers] = useState([
    { id: "u_1", name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", city: "Bengaluru", points: "2,450", bookings: 8, status: "Active" },
    { id: "u_2", name: "Sneha Nair", phone: "+91 98123 45678", email: "sneha.n@example.com", city: "Bengaluru", points: "1,200", bookings: 5, status: "Active" },
    { id: "u_3", name: "Karan Mehta", phone: "+91 99887 76655", email: "karan.m@example.com", city: "Mumbai", points: "3,800", bookings: 12, status: "Active" },
    { id: "u_4", name: "Rohan Verma", phone: "+91 97766 55443", email: "rohan.v@example.com", city: "Delhi", points: "450", bookings: 1, status: "Suspended" },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  const toggleUserStatus = (id) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        return { ...u, status: u.status === "Active" ? "Suspended" : "Active" };
      }
      return u;
    }));
  };

  const filtered = users.filter(u =>
    u.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    u.phone.includes(searchQuery)
  );

  return (
    <div style={{ background: "#090D16", color: "#F8FAFC", minHeight: "100%", paddingBottom: "24px" }}>
      {/* Header */}
      <div style={{ background: "#131B2E", padding: "16px 16px 14px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 800, color: "#F8FAFC", marginBottom: "4px" }}>User Directory</h2>
        <p style={{ fontSize: "0.7rem", color: "#94A3B8", marginBottom: "12px" }}>Consumer accounts, reward points & access controls</p>

        {/* Search */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#0F172A", padding: "8px 12px", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.08)" }}>
          <Search size={15} color="#94A3B8" />
          <input
            type="text"
            placeholder="Search name, email, phone..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: "transparent", border: "none", color: "#F8FAFC", fontSize: "0.8rem", width: "100%", outline: "none" }}
          />
        </div>
      </div>

      {/* Users List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map(u => {
          const isActive = u.status === "Active";

          return (
            <div
              key={u.id}
              style={{
                background: "#131B2E",
                borderRadius: "16px",
                padding: "14px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#F8FAFC" }}>{u.name}</h3>
                    <span style={{ fontSize: "0.62rem", color: "#94A3B8" }}>• {u.city}</span>
                  </div>
                  <p style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px" }}>{u.phone} • {u.email}</p>
                </div>

                <span style={{
                  fontSize: "0.65rem",
                  fontWeight: 800,
                  padding: "3px 8px",
                  borderRadius: "999px",
                  color: isActive ? "#34D399" : "#F43F5E",
                  background: isActive ? "rgba(52, 211, 153, 0.15)" : "rgba(244, 63, 94, 0.15)",
                  border: isActive ? "1px solid rgba(52, 211, 153, 0.3)" : "1px solid rgba(244, 63, 94, 0.3)"
                }}>
                  {u.status}
                </span>
              </div>

              {/* Stats & Actions */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#0F172A", padding: "8px 12px", borderRadius: "10px" }}>
                <div style={{ display: "flex", gap: "12px" }}>
                  <span style={{ fontSize: "0.7rem", color: "#FBBF24", fontWeight: 700 }}>★ {u.points} pts</span>
                  <span style={{ fontSize: "0.7rem", color: "#818CF8" }}>{u.bookings} bookings</span>
                </div>

                <button
                  onClick={() => toggleUserStatus(u.id)}
                  style={{
                    padding: "5px 10px",
                    borderRadius: "8px",
                    background: isActive ? "rgba(244, 63, 94, 0.15)" : "rgba(52, 211, 153, 0.15)",
                    border: isActive ? "1px solid rgba(244, 63, 94, 0.3)" : "1px solid rgba(52, 211, 153, 0.3)",
                    color: isActive ? "#F43F5E" : "#34D399",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}
                >
                  {isActive ? <><UserX size={12} /> Suspend</> : <><UserCheck size={12} /> Activate</>}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
