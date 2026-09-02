import React, { useState } from "react";
import {
  Plus,
  Tag,
  Copy,
  Trash2,
  ToggleLeft,
  ToggleRight,
  TrendingUp,
  Users,
  Zap,
  Check,
  Share2,
  Calendar,
  DollarSign,
  X,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function MobileOffers() {
  const [campaigns, setCampaigns] = useState([
    {
      id: "c1",
      code: "URBAN100",
      title: "Flat ₹100 OFF Classic Haircuts",
      discount: "₹100 OFF",
      discountType: "FLAT",
      discountValue: 100,
      minOrder: 300,
      uses: 84,
      maxUses: 200,
      status: "active",
      expires: "31 Aug 2026",
      color: "#6366F1",
      bg: "#EEF2FF",
      revenue: "₹28,400"
    },
    {
      id: "c2",
      code: "GLOW20",
      title: "20% OFF Rejuvenation Facials",
      discount: "20% OFF",
      discountType: "PERCENT",
      discountValue: 20,
      minOrder: 600,
      uses: 42,
      maxUses: 100,
      status: "active",
      expires: "20 Aug 2026",
      color: "#10B981",
      bg: "#ECFDF5",
      revenue: "₹18,200"
    },
    {
      id: "c3",
      code: "FIRSTFREE",
      title: "New Client Free Beard Scalp Wash",
      discount: "Free Add-on",
      discountType: "FREE_ADDON",
      discountValue: 150,
      minOrder: 299,
      uses: 15,
      maxUses: 50,
      status: "active",
      expires: "01 Sep 2026",
      color: "#F59E0B",
      bg: "#FFFBEB",
      revenue: "₹6,850"
    },
    {
      id: "c4",
      code: "SUMMER25",
      title: "Summer Flash 25% OFF Combos",
      discount: "25% OFF",
      discountType: "PERCENT",
      discountValue: 25,
      minOrder: 500,
      uses: 120,
      maxUses: 120,
      status: "expired",
      expires: "10 Aug 2026",
      color: "#94A3B8",
      bg: "#F1F5F9",
      revenue: "₹42,000"
    }
  ]);

  const [tab, setTab] = useState("active");
  const [copied, setCopied] = useState(null);
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  // Form State
  const [newCode, setNewCode] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newDiscountType, setNewDiscountType] = useState("PERCENT");
  const [newDiscountVal, setNewDiscountVal] = useState("15");
  const [newMinSpend, setNewMinSpend] = useState("400");
  const [newMaxUses, setNewMaxUses] = useState("100");
  const [newExpiry, setNewExpiry] = useState("31 Aug 2026");

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const toggle = (id) => {
    setCampaigns(campaigns.map(c => {
      if (c.id === id) {
        const next = c.status === "active" ? "paused" : "active";
        showToast(`Promo code "${c.code}" ${next === "active" ? "activated" : "paused"}`);
        return { ...c, status: next };
      }
      return c;
    }));
  };

  const remove = (id) => {
    setCampaigns(campaigns.filter(c => c.id !== id));
    showToast("Promo campaign removed");
  };

  const copy = (code) => {
    setCopied(code);
    navigator?.clipboard?.writeText(code);
    showToast(`Promo code "${code}" copied to clipboard!`);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleCreateCampaign = () => {
    if (!newCode.trim() || !newTitle.trim()) {
      showToast("Please enter a valid coupon code and title");
      return;
    }

    const discountText = newDiscountType === "PERCENT" ? `${newDiscountVal}% OFF` : `₹${newDiscountVal} OFF`;

    const newCampaign = {
      id: "c_" + Date.now(),
      code: newCode.toUpperCase().replace(/\s+/g, ''),
      title: newTitle,
      discount: discountText,
      discountType: newDiscountType,
      discountValue: Number(newDiscountVal),
      minOrder: Number(newMinSpend),
      uses: 0,
      maxUses: Number(newMaxUses),
      status: "active",
      expires: newExpiry,
      color: "#6366F1",
      bg: "#EEF2FF",
      revenue: "₹0"
    };

    setCampaigns([newCampaign, ...campaigns]);
    setIsCreateOpen(false);
    showToast(`Campaign "${newCampaign.code}" published successfully! 🎉`);

    // Reset Form
    setNewCode("");
    setNewTitle("");
  };

  const filtered = campaigns.filter(c => {
    if (tab === "active") return c.status === "active";
    if (tab === "paused") return c.status === "paused";
    return c.status === "expired";
  });

  const activeCount = campaigns.filter(c => c.status === "active").length;
  const totalUses = campaigns.filter(c => c.status === "active").reduce((s, c) => s + c.uses, 0);

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px", position: "relative" }}>
      {/* Toast Alert */}
      {toastMessage && (
        <div style={{
          position: "absolute",
          top: "16px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "#0F172A",
          color: "#FFFFFF",
          padding: "10px 18px",
          borderRadius: "999px",
          fontSize: "0.78rem",
          fontWeight: 700,
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
          <CheckCircle2 size={14} color="#10B981" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div style={{ background: "#FFFFFF", padding: "16px 14px 12px", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>Flash Deals & Offers</h2>
            <p style={{ fontSize: "0.7rem", color: "#64748B" }}>Drive customer bookings with targeted promos</p>
          </div>
          <button
            onClick={() => setIsCreateOpen(true)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 14px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #4F46E5, #6366F1)",
              color: "#FFFFFF",
              fontSize: "0.78rem",
              fontWeight: 800,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 12px rgba(79,70,229,0.3)"
            }}
          >
            <Plus size={15} /> New Promo
          </button>
        </div>

        {/* Stats Strip */}
        <div style={{ display: "flex", gap: "8px" }}>
          {[
            { label: "Active Deals", value: activeCount, icon: <Zap size={14} color="#6366F1" />, bg: "#EEF2FF" },
            { label: "Redemptions", value: totalUses, icon: <Users size={14} color="#10B981" />, bg: "#ECFDF5" },
            { label: "Promo Revenue", value: "₹53,450", icon: <TrendingUp size={14} color="#F59E0B" />, bg: "#FFFBEB" },
          ].map((s, i) => (
            <div key={i} style={{ flex: 1, background: s.bg, borderRadius: "12px", padding: "8px 10px", display: "flex", alignItems: "center", gap: "6px" }}>
              {s.icon}
              <div>
                <div style={{ fontSize: "0.9rem", fontWeight: 900, color: "#0F172A" }}>{s.value}</div>
                <div style={{ fontSize: "0.62rem", color: "#64748B" }}>{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div style={{ padding: "12px 14px 0", display: "flex", gap: "8px" }}>
        {["active", "paused", "expired"].map(t => {
          const isActive = tab === t;
          return (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.74rem",
                fontWeight: 800,
                textTransform: "capitalize",
                border: isActive ? "none" : "1px solid #E2E8F0",
                background: isActive ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#64748B",
                boxShadow: isActive ? "0 3px 10px rgba(79,70,229,0.3)" : "none",
                cursor: "pointer"
              }}
            >
              {t} ({campaigns.filter(c => c.status === t).length})
            </button>
          );
        })}
      </div>

      {/* Campaign Cards */}
      <div style={{ padding: "12px 14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "#94A3B8", background: "#FFFFFF", borderRadius: "16px", border: "1px dashed #E2E8F0" }}>
            <Tag size={32} style={{ marginBottom: "8px", opacity: 0.4 }} />
            <h4 style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>No {tab} campaigns</h4>
            <p style={{ fontSize: "0.72rem", color: "#64748B" }}>Click "+ New Promo" to launch a discount deal</p>
          </div>
        ) : (
          filtered.map(c => (
            <div
              key={c.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
              }}
            >
              {/* Top Row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div style={{ flex: 1, paddingRight: "8px" }}>
                  <span style={{ fontSize: "0.65rem", fontWeight: 900, color: c.color, background: c.bg, padding: "2px 8px", borderRadius: "999px" }}>
                    {c.discount}
                  </span>
                  <h3 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#0F172A", marginTop: "4px" }}>{c.title}</h3>
                  <p style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>
                    Min Order: ₹{c.minOrder} • Expires: {c.expires}
                  </p>
                </div>

                {c.status !== "expired" && (
                  <button
                    onClick={() => toggle(c.id)}
                    style={{
                      width: "38px",
                      height: "21px",
                      borderRadius: "999px",
                      background: c.status === "active" ? "#4F46E5" : "#E2E8F0",
                      position: "relative",
                      flexShrink: 0,
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s"
                    }}
                  >
                    <div style={{
                      position: "absolute",
                      top: "2.5px",
                      left: c.status === "active" ? "19px" : "2.5px",
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      background: "#FFFFFF",
                      boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                      transition: "left 0.2s"
                    }} />
                  </button>
                )}
              </div>

              {/* Coupon Code Strip */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", background: "#F8FAFC", borderRadius: "12px", padding: "10px 12px", marginBottom: "12px", border: "1px dashed #CBD5E1" }}>
                <Tag size={15} color="#4F46E5" />
                <span style={{ flex: 1, fontSize: "0.92rem", fontWeight: 900, color: "#0F172A", letterSpacing: "0.05em" }}>
                  {c.code}
                </span>
                <button
                  onClick={() => copy(c.code)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    padding: "5px 10px",
                    borderRadius: "8px",
                    background: copied === c.code ? "#ECFDF5" : "#EEF2FF",
                    color: copied === c.code ? "#059669" : "#4F46E5",
                    fontSize: "0.72rem",
                    fontWeight: 800,
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  {copied === c.code ? <><Check size={12} /> Copied</> : <><Copy size={12} /> Copy</>}
                </button>
              </div>

              {/* Usage Progress Bar */}
              <div style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ fontSize: "0.7rem", color: "#64748B" }}>{c.uses} of {c.maxUses} redemptions</span>
                  <span style={{ fontSize: "0.7rem", fontWeight: 800, color: c.color }}>{Math.round((c.uses / c.maxUses) * 100)}%</span>
                </div>
                <div style={{ width: "100%", height: "6px", borderRadius: "999px", background: "#F1F5F9", overflow: "hidden" }}>
                  <div style={{ width: `${(c.uses / c.maxUses) * 100}%`, height: "100%", background: c.status === "expired" ? "#CBD5E1" : c.color, borderRadius: "999px" }} />
                </div>
              </div>

              {/* Footer */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid #F1F5F9" }}>
                <span style={{ fontSize: "0.78rem", fontWeight: 800, color: "#10B981" }}>Generated: {c.revenue}</span>
                <div style={{ display: "flex", gap: "6px" }}>
                  <a
                    href={`https://wa.me/?text=Use%20code%20*${c.code}*%20for%20${encodeURIComponent(c.discount)}%20at%20Urban%20Cut%20Studio!%20Book%20now:%20https://apointo.app`}
                    target="_blank"
                    rel="noreferrer"
                    style={{ padding: "6px 10px", borderRadius: "8px", background: "#ECFDF5", color: "#059669", fontSize: "0.72rem", fontWeight: 800, display: "flex", alignItems: "center", gap: "4px", textDecoration: "none" }}
                  >
                    <Share2 size={12} /> Share
                  </a>
                  {c.status !== "expired" && (
                    <button
                      onClick={() => remove(c.id)}
                      style={{ width: "30px", height: "30px", borderRadius: "8px", background: "#FEF2F2", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    >
                      <Trash2 size={13} color="#DC2626" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Create Promo Modal */}
      {isCreateOpen && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          zIndex: 9990,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center"
        }}>
          <div style={{
            width: "100%",
            maxWidth: "440px",
            background: "#FFFFFF",
            borderRadius: "24px 24px 0 0",
            padding: "20px 18px 24px",
            boxShadow: "0 -10px 40px rgba(0,0,0,0.2)",
            maxHeight: "85vh",
            overflowY: "auto"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Sparkles size={18} color="#4F46E5" />
                <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>Create New Campaign</h3>
              </div>
              <button
                onClick={() => setIsCreateOpen(false)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Coupon Code *</label>
                <input
                  type="text"
                  placeholder="e.g. FESTIVE20 or WEEKEND50"
                  value={newCode}
                  onChange={e => setNewCode(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.85rem", outline: "none", fontWeight: 800, textTransform: "uppercase" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Campaign Title *</label>
                <input
                  type="text"
                  placeholder="e.g. 20% OFF on all Facials & Combos"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Discount Type</label>
                  <select
                    value={newDiscountType}
                    onChange={e => setNewDiscountType(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                  >
                    <option value="PERCENT">Percentage (% OFF)</option>
                    <option value="FLAT">Flat Amount (₹ OFF)</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Value ({newDiscountType === "PERCENT" ? "%" : "₹"})</label>
                  <input
                    type="number"
                    value={newDiscountVal}
                    onChange={e => setNewDiscountVal(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Min Spend (₹)</label>
                  <input
                    type="number"
                    value={newMinSpend}
                    onChange={e => setNewMinSpend(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Max Redemptions</label>
                  <input
                    type="number"
                    value={newMaxUses}
                    onChange={e => setNewMaxUses(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Expiry Date</label>
                <input
                  type="text"
                  value={newExpiry}
                  onChange={e => setNewExpiry(e.target.value)}
                  placeholder="e.g. 31 Aug 2026"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }}
                />
              </div>
            </div>

            <button
              onClick={handleCreateCampaign}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                color: "#FFFFFF",
                fontSize: "0.88rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(79,70,229,0.3)"
              }}
            >
              Launch Promo Campaign
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
