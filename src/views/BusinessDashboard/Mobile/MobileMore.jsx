import React, { useState } from "react";
import { Users, UserCheck, CreditCard, Tag, Star, Settings, ChevronRight, BarChart3, Phone, Mail, Camera } from "lucide-react";

function StaffSection() {
  const staff = [
    { name: "Rahul Sharma", role: "Senior Stylist", bookings: 28, rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100" },
    { name: "Priya Verma", role: "Color Specialist", bookings: 19, rating: 4.8, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" },
    { name: "Vikram Singh", role: "Beard Specialist", bookings: 22, rating: 4.7, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {staff.map((s, i) => (
        <div key={i} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "12px" }}>
          <img src={s.avatar} alt={s.name} style={{ width: "44px", height: "44px", borderRadius: "12px", objectFit: "cover" }} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{s.name}</div>
            <div style={{ fontSize: "0.72rem", color: "#64748B" }}>{s.role}</div>
            <div style={{ fontSize: "0.68rem", color: "#4F46E5", fontWeight: 700, marginTop: "2px" }}>{s.bookings} bookings • {s.rating} *</div>
          </div>
          <button style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ChevronRight size={14} color="#64748B" />
          </button>
        </div>
      ))}
    </div>
  );
}

function CRMSection() {
  const clients = [
    { name: "Dilshan Perera", phone: "+91 98765 43210", visits: 12, spent: "Rs.4,980", tag: "VIP" },
    { name: "Arjun Kapoor", phone: "+91 98123 45678", visits: 8, spent: "Rs.3,120", tag: "Regular" },
    { name: "Rohan Malhotra", phone: "+91 99887 76655", visits: 5, spent: "Rs.2,340", tag: "Regular" },
  ];
  const tagColor = (t) => t === "VIP" ? { bg: "#FFFBEB", color: "#D97706" } : { bg: "#EEF2FF", color: "#4F46E5" };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {clients.map((c, i) => {
        const tc = tagColor(c.tag);
        return (
          <div key={i} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px", border: "1px solid #E2E8F0" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{c.name}</div>
                <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>{c.phone}</div>
              </div>
              <span style={{ fontSize: "0.65rem", fontWeight: 700, color: tc.color, background: tc.bg, padding: "3px 8px", borderRadius: "999px" }}>{c.tag}</span>
            </div>
            <div style={{ display: "flex", gap: "14px" }}>
              <div><div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#0F172A" }}>{c.visits}</div><div style={{ fontSize: "0.65rem", color: "#64748B" }}>Visits</div></div>
              <div><div style={{ fontSize: "0.8rem", fontWeight: 800, color: "#10B981" }}>{c.spent}</div><div style={{ fontSize: "0.65rem", color: "#64748B" }}>Total Spent</div></div>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "10px" }}>
              <button style={{ flex: 1, padding: "7px", borderRadius: "9px", background: "#EEF2FF", color: "#4F46E5", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}><Phone size={12} /> Call</button>
              <button style={{ flex: 1, padding: "7px", borderRadius: "9px", background: "#F1F5F9", color: "#475569", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}><Mail size={12} /> Message</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function MobileMore({ onNavigateTab }) {
  const [section, setSection] = useState(null);

  const menuItems = [
    { id: "staff", label: "Staff Management", icon: <UserCheck size={20} color="#4F46E5" />, bg: "#EEF2FF", desc: "3 specialists" },
    { id: "crm", label: "Customer CRM", icon: <Users size={20} color="#06B6D4" />, bg: "#ECFEFF", desc: "124 clients" },
    { id: "payments", label: "Payments & Payouts", icon: <CreditCard size={20} color="#10B981" />, bg: "#ECFDF5", desc: "Rs.47,700 this week" },
    { id: "offers", label: "Marketing Offers", icon: <Tag size={20} color="#F59E0B" />, bg: "#FFFBEB", desc: "2 active coupons" },
    { id: "reviews", label: "Customer Reviews", icon: <Star size={20} color="#F43F5E" />, bg: "#FFF1F2", desc: "4.8 avg rating" },
    { id: "settings", label: "Business Settings", icon: <Settings size={20} color="#64748B" />, bg: "#F1F5F9", desc: "Profile & hours" },
  ];

  if (section === "staff") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection(null)} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Staff Management</h2>
      </div>
      <div style={{ padding: "14px" }}><StaffSection /></div>
    </div>
  );

  if (section === "crm") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <div style={{ background: "#FFFFFF", padding: "16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
        <button onClick={() => setSection(null)} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Customer CRM</h2>
      </div>
      <div style={{ padding: "14px" }}><CRMSection /></div>
    </div>
  );

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Business Profile Card */}
      <div style={{ background: "linear-gradient(135deg, #1E1B4B, #4F46E5)", padding: "20px 16px", margin: "14px", borderRadius: "18px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -15, right: -15, width: "80px", height: "80px", borderRadius: "50%", background: "rgba(99,102,241,0.3)", filter: "blur(20px)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Camera size={24} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF" }}>Urban Cut Studio</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>Sector 14, Gurugram</div>
            <div style={{ fontSize: "0.68rem", color: "#A5B4FC", marginTop: "4px", fontWeight: 700 }}>Partner ID: BIZ-00192 • Verified</div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button key={item.id} onClick={() => setSection(item.id)} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "14px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>{item.label}</div>
              <div style={{ fontSize: "0.72rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#CBD5E1" />
          </button>
        ))}
      </div>
    </div>
  );
}
