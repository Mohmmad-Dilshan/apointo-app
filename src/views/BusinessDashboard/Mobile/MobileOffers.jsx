import React, { useState } from "react";
import { Plus, Tag, Copy, Trash2, ToggleLeft, ToggleRight, TrendingUp, Users, Zap, Check } from "lucide-react";

const INIT_CAMPAIGNS = [
  { id: "c1", code: "URBAN100", title: "Flat Rs.100 OFF Haircuts", discount: "Rs.100 OFF", uses: 84, maxUses: 200, status: "active", expires: "31 Aug 2026", color: "#6366F1", bg: "#EEF2FF", revenue: "Rs.8,400" },
  { id: "c2", code: "BEAUTY20", title: "20% OFF Facial Combos", discount: "20% OFF", uses: 42, maxUses: 100, status: "active", expires: "20 Aug 2026", color: "#10B981", bg: "#ECFDF5", revenue: "Rs.6,200" },
  { id: "c3", code: "FIRSTCUT", title: "New Member: Free Wash", discount: "Free Wash", uses: 15, maxUses: 50, status: "active", expires: "01 Sep 2026", color: "#F59E0B", bg: "#FFFBEB", revenue: "Rs.2,850" },
  { id: "c4", code: "SUMMER25", title: "Summer Flash 25% OFF", discount: "25% OFF", uses: 120, maxUses: 120, status: "expired", expires: "10 Aug 2026", color: "#94A3B8", bg: "#F1F5F9", revenue: "Rs.18,000" },
];

export default function MobileOffers() {
  const [campaigns, setCampaigns] = useState(INIT_CAMPAIGNS);
  const [tab, setTab] = useState("active");
  const [copied, setCopied] = useState(null);

  const toggle = (id) => setCampaigns(p => p.map(c => c.id === id ? { ...c, status: c.status === "active" ? "paused" : "active" } : c));
  const remove = (id) => setCampaigns(p => p.filter(c => c.id !== id));
  const copy = (code) => { setCopied(code); setTimeout(() => setCopied(null), 1500); };

  const filtered = campaigns.filter(c => tab === "active" ? c.status === "active" : tab === "paused" ? c.status === "paused" : c.status === "expired");
  const activeCount = campaigns.filter(c => c.status === "active").length;
  const totalUses = campaigns.filter(c => c.status === "active").reduce((s, c) => s + c.uses, 0);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "20px" }}>
      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 16px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <h2 style={{ fontSize: "1rem", fontWeight: 800, color: "#0F172A" }}>Marketing & Offers</h2>
          <button style={{ display: "flex", alignItems: "center", gap: "6px", padding: "8px 12px", borderRadius: "10px", background: "linear-gradient(135deg, #6366F1, #4F46E5)", color: "#FFFFFF", fontSize: "0.78rem", fontWeight: 700 }}>
            <Plus size={14} /> New
          </button>
        </div>

        {/* Stats Strip */}
        <div style={{ display: "flex", gap: "10px" }}>
          {[
            { label: "Active", value: activeCount, icon: <Zap size={13} color="#6366F1" />, bg: "#EEF2FF" },
            { label: "Redemptions", value: totalUses, icon: <Users size={13} color="#10B981" />, bg: "#ECFDF5" },
            { label: "Revenue", value: "Rs.17.5k", icon: <TrendingUp size={13} color="#F59E0B" />, bg: "#FFFBEB" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: s.bg, borderRadius: "10px", padding: "8px 10px", display: "flex", alignItems: "center", gap: "6px" }}>
              {s.icon}
              <div>
                <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>{s.value}</div>
                <div style={{ fontSize: "0.6rem", color: "#64748B" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tab Switcher */}
      <div style={{ padding: "12px 14px 0", display: "flex", gap: "8px" }}>
        {["active", "paused", "expired"].map(t => (
          <button key={t} onClick={() => setTab(t)} style={{ padding: "6px 14px", borderRadius: "999px", fontSize: "0.73rem", fontWeight: 700, textTransform: "capitalize", background: tab === t ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF", color: tab === t ? "#FFFFFF" : "#64748B", border: tab === t ? "none" : "1px solid #E2E8F0", boxShadow: tab === t ? "0 3px 10px rgba(79,70,229,0.3)" : "none" }}>
            {t}
          </button>
        ))}
      </div>

      {/* Campaign Cards */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#94A3B8" }}>
            <Tag size={32} style={{ marginBottom: "10px", opacity: 0.4 }} />
            <p style={{ fontSize: "0.85rem", fontWeight: 600 }}>No {tab} campaigns</p>
          </div>
        )}
        {filtered.map(c => (
          <div key={c.id} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
            {/* Top Row */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 800, color: c.color, background: c.bg, padding: "2px 8px", borderRadius: "999px" }}>{c.discount}</span>
                </div>
                <h3 style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{c.title}</h3>
                <p style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "3px" }}>Expires: {c.expires}</p>
              </div>
              {c.status !== "expired" && (
                <button onClick={() => toggle(c.id)} style={{ width: "40px", height: "22px", borderRadius: "999px", background: c.status === "active" ? "#4F46E5" : "#E2E8F0", position: "relative", flexShrink: 0, transition: "background 0.2s" }}>
                  <div style={{ position: "absolute", top: "3px", left: c.status === "active" ? "21px" : "3px", width: "16px", height: "16px", borderRadius: "50%", background: "#FFFFFF", boxShadow: "0 1px 4px rgba(0,0,0,0.2)", transition: "left 0.2s" }} />
                </button>
              )}
            </div>

            {/* Coupon Code */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F8FAFC", borderRadius: "10px", padding: "10px 12px", marginBottom: "12px" }}>
              <Tag size={14} color="#64748B" />
              <span style={{ flex: 1, fontSize: "0.88rem", fontWeight: 800, color: "#0F172A", letterSpacing: "0.05em" }}>{c.code}</span>
              <button onClick={() => copy(c.code)} style={{ display: "flex", alignItems: "center", gap: "4px", padding: "5px 10px", borderRadius: "8px", background: copied === c.code ? "#ECFDF5" : "#EEF2FF", color: copied === c.code ? "#059669" : "#4F46E5", fontSize: "0.72rem", fontWeight: 700 }}>
                {copied === c.code ? <><Check size={11} /> Copied!</> : <><Copy size={11} /> Copy</>}
              </button>
            </div>

            {/* Usage Progress */}
            <div style={{ marginBottom: "10px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                <span style={{ fontSize: "0.7rem", color: "#64748B" }}>{c.uses} / {c.maxUses} used</span>
                <span style={{ fontSize: "0.7rem", fontWeight: 700, color: c.color }}>{Math.round(c.uses / c.maxUses * 100)}%</span>
              </div>
              <div style={{ width: "100%", height: "6px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                <div style={{ width: (c.uses / c.maxUses * 100) + "%", height: "100%", background: c.status === "expired" ? "#CBD5E1" : c.color, borderRadius: "999px" }} />
              </div>
            </div>

            {/* Footer */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#10B981" }}>Revenue: {c.revenue}</span>
              {c.status !== "expired" && (
                <button onClick={() => remove(c.id)} style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#FEF2F2", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Trash2 size={13} color="#DC2626" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
