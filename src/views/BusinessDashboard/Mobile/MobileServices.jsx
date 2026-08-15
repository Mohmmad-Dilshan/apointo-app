import React, { useState } from "react";
import { Plus, Edit3, Trash2, Clock, DollarSign, Tag, ChevronRight } from "lucide-react";

export default function MobileServices() {
  const [services, setServices] = useState([
    { id: 1, name: "Classic Haircut", duration: "30 min", price: 299, category: "Hair", bookings: 42, active: true },
    { id: 2, name: "Beard Crafting Combo", duration: "45 min", price: 499, category: "Beard", bookings: 28, active: true },
    { id: 3, name: "Royal Deluxe Package", duration: "90 min", price: 899, category: "Premium", bookings: 15, active: true },
    { id: 4, name: "Head Spa & Massage", duration: "60 min", price: 399, category: "Spa", bookings: 19, active: false },
    { id: 5, name: "Hair Coloring", duration: "120 min", price: 1299, category: "Color", bookings: 9, active: true },
  ]);

  const categories = ["All", "Hair", "Beard", "Spa", "Premium", "Color"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = services.filter(s => activeCategory === "All" || s.category === activeCategory);

  const catColor = (c) => {
    const m = { Hair: "#4F46E5", Beard: "#06B6D4", Spa: "#10B981", Premium: "#F59E0B", Color: "#F43F5E" };
    return m[c] || "#64748B";
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 16px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Services Catalog</h2>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", borderRadius: "10px", background: "linear-gradient(135deg, #6366F1, #4F46E5)", color: "#FFFFFF", fontSize: "0.78rem", fontWeight: 700 }}>
            <Plus size={14} /> Add
          </button>
        </div>
        <div style={{ display: "flex", gap: "8px", overflowX: "auto" }} className="no-scrollbar">
          {categories.map(c => (
            <button key={c} onClick={() => setActiveCategory(c)} style={{ padding: "5px 13px", borderRadius: "999px", fontSize: "0.72rem", fontWeight: 700, whiteSpace: "nowrap", background: activeCategory === c ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#F1F5F9", color: activeCategory === c ? "#FFFFFF" : "#64748B" }}>{c}</button>
          ))}
        </div>
      </div>

      {/* Services List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map(srv => (
          <div key={srv.id} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <h3 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>{srv.name}</h3>
                  <span style={{ fontSize: "0.62rem", fontWeight: 700, color: catColor(srv.category), background: catColor(srv.category) + "18", padding: "2px 7px", borderRadius: "999px" }}>{srv.category}</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginTop: "4px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: "#64748B" }}><Clock size={12} /> {srv.duration}</span>
                  <span style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>Rs.{srv.price}</span>
                </div>
                <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "4px" }}>{srv.bookings} bookings this month</div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "8px" }}>
                {/* Toggle */}
                <div onClick={() => setServices(services.map(s => s.id === srv.id ? {...s, active: !s.active} : s))} style={{ width: "40px", height: "22px", borderRadius: "999px", background: srv.active ? "#4F46E5" : "#E2E8F0", position: "relative", cursor: "pointer", transition: "background 0.2s" }}>
                  <div style={{ position: "absolute", top: "3px", left: srv.active ? "21px" : "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
                </div>
                {/* Actions */}
                <div style={{ display: "flex", gap: "6px" }}>
                  <button style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}><Edit3 size={13} color="#4F46E5" /></button>
                  <button style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center" }}><Trash2 size={13} color="#DC2626" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
