import React, { useState } from "react";
import { Users, UserCheck, CreditCard, Tag, Star, Settings, ChevronRight, Phone, Mail, Camera, ShieldCheck, Search } from "lucide-react";
import MobilePayments from "./MobilePayments";
import MobileOffers from "./MobileOffers";
import MobileReviews from "./MobileReviews";
import MobileSettings from "./MobileSettings";

function BackHeader({ title, onBack }) {
  return (
    <div style={{ background: "#FFFFFF", padding: "16px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "10px" }}>
      <button onClick={onBack} style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
      </button>
      <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>{title}</h2>
    </div>
  );
}

function StaffSection({ onBack }) {
  const staff = [
    { name: "Rahul Sharma", role: "Senior Stylist", bookings: 28, rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100", commission: "35%" },
    { name: "Priya Verma", role: "Color Specialist", bookings: 19, rating: 4.8, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100", commission: "30%" },
    { name: "Vikram Singh", role: "Beard Specialist", bookings: 22, rating: 4.7, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100", commission: "32%" },
  ];
  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <BackHeader title="Staff Management" onBack={onBack} />
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {staff.map((s, i) => (
          <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <img src={s.avatar} alt={s.name} style={{ width: "46px", height: "46px", borderRadius: "13px", objectFit: "cover" }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>{s.name}</div>
                <div style={{ fontSize: "0.72rem", color: "#64748B" }}>{s.role}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.75rem", fontWeight: 800, color: "#F59E0B" }}>{s.rating} *</div>
                <div style={{ fontSize: "0.65rem", color: "#94A3B8" }}>Rating</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: "8px" }}>
              <div style={{ flex: 1, background: "#EEF2FF", borderRadius: "10px", padding: "8px", textAlign: "center" }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#4F46E5" }}>{s.bookings}</div>
                <div style={{ fontSize: "0.62rem", color: "#64748B" }}>Bookings</div>
              </div>
              <div style={{ flex: 1, background: "#ECFDF5", borderRadius: "10px", padding: "8px", textAlign: "center" }}>
                <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#10B981" }}>{s.commission}</div>
                <div style={{ fontSize: "0.62rem", color: "#64748B" }}>Commission</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CRMSection({ onBack }) {
  const [query, setQuery] = useState("");
  const clients = [
    { name: "Dilshan Perera", phone: "+91 98765 43210", email: "dilshan.p@example.com", visits: 12, spent: "Rs.4,980", last: "Today", tag: "VIP" },
    { name: "Arjun Kapoor", phone: "+91 98123 45678", email: "arjun.k@example.com", visits: 8, spent: "Rs.3,120", last: "05 Aug", tag: "Regular" },
    { name: "Rohan Malhotra", phone: "+91 99887 76655", email: "rohan.m@example.com", visits: 5, spent: "Rs.2,340", last: "28 Jul", tag: "Regular" },
    { name: "Siddharth Nair", phone: "+91 97766 55443", email: "sid.n@example.com", visits: 3, spent: "Rs.1,100", last: "12 Aug", tag: "New" },
  ];
  const tagColor = (t) => ({ VIP: { bg: "#FFFBEB", color: "#D97706" }, Regular: { bg: "#EEF2FF", color: "#4F46E5" }, New: { bg: "#ECFDF5", color: "#059669" } }[t] || { bg: "#F1F5F9", color: "#64748B" });
  const filtered = clients.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.phone.includes(query));

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      <BackHeader title="Customer CRM" onBack={onBack} />
      <div style={{ padding: "14px 14px 10px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F1F5F9", padding: "9px 14px", borderRadius: "12px" }}>
          <Search size={15} color="#64748B" />
          <input type="text" placeholder="Search name or phone..." value={query} onChange={e => setQuery(e.target.value)} style={{ border: "none", background: "transparent", fontSize: "0.82rem", outline: "none", flex: 1, color: "#0F172A" }} />
        </div>
      </div>
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {filtered.map((c, i) => {
          const tc = tagColor(c.tag);
          return (
            <div key={i} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>{c.name}</div>
                  <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "2px" }}>{c.phone}</div>
                </div>
                <span style={{ fontSize: "0.65rem", fontWeight: 700, color: tc.color, background: tc.bg, padding: "3px 8px", borderRadius: "999px" }}>{c.tag}</span>
              </div>
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                <div style={{ flex: 1, background: "#EEF2FF", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#4F46E5" }}>{c.visits}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Visits</div>
                </div>
                <div style={{ flex: 1, background: "#ECFDF5", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#10B981" }}>{c.spent}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Spent</div>
                </div>
                <div style={{ flex: 1, background: "#F8FAFC", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 700, color: "#0F172A" }}>{c.last}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Last Visit</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }}>
                <button style={{ flex: 1, padding: "7px", borderRadius: "9px", background: "#EEF2FF", color: "#4F46E5", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}><Phone size={12} /> Call</button>
                <button style={{ flex: 1, padding: "7px", borderRadius: "9px", background: "#F1F5F9", color: "#475569", fontSize: "0.72rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}><Mail size={12} /> Message</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MobileMore() {
  const [section, setSection] = useState(null);

  if (section === "staff") return <StaffSection onBack={() => setSection(null)} />;
  if (section === "crm") return <CRMSection onBack={() => setSection(null)} />;
  if (section === "payments") return <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="Payments & Payouts" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobilePayments /></div>
  </div>;
  if (section === "offers") return <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="Marketing & Offers" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobileOffers /></div>
  </div>;
  if (section === "reviews") return <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="Customer Reviews" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobileReviews /></div>
  </div>;
  if (section === "settings") return <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
    <BackHeader title="Business Settings" onBack={() => setSection(null)} />
    <div style={{ flex: 1, overflowY: "auto" }}><MobileSettings /></div>
  </div>;

  const menuItems = [
    { id: "staff", label: "Staff Management", icon: <UserCheck size={20} color="#4F46E5" />, bg: "#EEF2FF", desc: "3 specialists, commissions" },
    { id: "crm", label: "Customer CRM", icon: <Users size={20} color="#06B6D4" />, bg: "#ECFEFF", desc: "124 clients, history" },
    { id: "payments", label: "Payments & Payouts", icon: <CreditCard size={20} color="#10B981" />, bg: "#ECFDF5", desc: "Rs.47,700 this week" },
    { id: "offers", label: "Marketing & Offers", icon: <Tag size={20} color="#F59E0B" />, bg: "#FFFBEB", desc: "3 active campaigns" },
    { id: "reviews", label: "Customer Reviews", icon: <Star size={20} color="#F43F5E" />, bg: "#FFF1F2", desc: "4.9 avg • 42 reviews" },
    { id: "settings", label: "Business Settings", icon: <Settings size={20} color="#64748B" />, bg: "#F1F5F9", desc: "Profile, hours, security" },
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Business Profile Card */}
      <div style={{ background: "linear-gradient(135deg, #1E1B4B 0%, #4F46E5 100%)", padding: "20px 16px", margin: "14px", borderRadius: "18px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "100px", height: "100px", borderRadius: "50%", background: "rgba(99,102,241,0.25)", filter: "blur(20px)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
          <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Camera size={24} color="#FFFFFF" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1rem", fontWeight: 800, color: "#FFFFFF" }}>Urban Cut Studio</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.65)", marginTop: "2px" }}>Sector 14, Gurugram</div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
              <ShieldCheck size={11} color="#10B981" />
              <span style={{ fontSize: "0.65rem", color: "#10B981", fontWeight: 700 }}>Verified Partner • BIZ-00192</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button key={item.id} onClick={() => setSection(item.id)} style={{ background: "#FFFFFF", borderRadius: "14px", padding: "14px 16px", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "14px", textAlign: "left", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{item.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A" }}>{item.label}</div>
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#CBD5E1" />
          </button>
        ))}
      </div>
    </div>
  );
}
