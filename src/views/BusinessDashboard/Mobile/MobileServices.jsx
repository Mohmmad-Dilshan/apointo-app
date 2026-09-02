import React, { useState } from "react";
import {
  Plus,
  Edit3,
  Trash2,
  Clock,
  DollarSign,
  Tag,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  X,
  Layers,
  Image as ImageIcon,
  Check
} from "lucide-react";

export default function MobileServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Classic Haircut & Styling",
      duration: "45 min",
      price: 299,
      originalPrice: 399,
      category: "Hair",
      bookings: 142,
      revenue: "₹42,458",
      active: true,
      popular: true,
      description: "Precision haircut, scalp wash, blow dry and hair setting with premium styling wax.",
      included: ["Hair Wash", "Precision Cut", "Blow Dry", "Styling Wax"]
    },
    {
      id: 2,
      name: "Beard Crafting & Hot Towel Combo",
      duration: "45 min",
      price: 499,
      originalPrice: 650,
      category: "Beard",
      bookings: 98,
      revenue: "₹48,902",
      active: true,
      popular: true,
      description: "Complete signature look overhaul including haircut, hot towel beard sculpting and beard oil.",
      included: ["Hot Towel", "Beard Sculpting", "Beard Oil Massage"]
    },
    {
      id: 3,
      name: "Royal Deluxe Rejuvenation Package",
      duration: "90 min",
      price: 899,
      originalPrice: 1200,
      category: "Premium",
      bookings: 34,
      revenue: "₹30,566",
      active: true,
      popular: true,
      description: "Ultimate rejuvenation: haircut, beard trim, organic facial glow treatment, and 20 min head massage.",
      included: ["Deluxe Cut", "Organic Facial Glow", "20m Head Massage"]
    },
    {
      id: 4,
      name: "Express Charcoal Face Scrub",
      duration: "30 min",
      price: 249,
      originalPrice: 350,
      category: "Spa",
      bookings: 52,
      revenue: "₹12,948",
      active: true,
      popular: false,
      description: "Deep pore cleansing and blackhead removal using natural activated bamboo charcoal scrub.",
      included: ["Charcoal Exfoliation", "Steam", "Hydrating Gel"]
    },
    {
      id: 5,
      name: "Organic Scalp Therapy & Anti-Dandruff",
      duration: "60 min",
      price: 699,
      originalPrice: 900,
      category: "Spa",
      bookings: 27,
      revenue: "₹18,873",
      active: false,
      popular: false,
      description: "Deep conditioning herbal scalp spa treatment to eliminate dry flakes and boost hair roots.",
      included: ["Scalp Massage", "Herbal Hair Mask", "Steam Infusion"]
    },
    {
      id: 6,
      name: "Global Hair Color & Keratin Gloss",
      duration: "120 min",
      price: 1499,
      originalPrice: 2000,
      category: "Color",
      bookings: 19,
      revenue: "₹28,481",
      active: true,
      popular: false,
      description: "Ammonia-free luxury hair color with glossy keratin shine coat treatment.",
      included: ["Color Consultation", "Ammonia-free Dye", "Keratin Gloss"]
    }
  ]);

  const categories = ["All", "Hair", "Beard", "Spa", "Premium", "Color"];
  const [activeCategory, setActiveCategory] = useState("All");

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  // Form State
  const [formName, setFormName] = useState("");
  const [formCategory, setFormCategory] = useState("Hair");
  const [formPrice, setFormPrice] = useState("399");
  const [formOriginalPrice, setFormOriginalPrice] = useState("499");
  const [formDuration, setFormDuration] = useState("45 min");
  const [formDescription, setFormDescription] = useState("");
  const [formInclusions, setFormInclusions] = useState("Consultation, Hair Wash, Styling");

  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const catColor = (c) => {
    const m = { Hair: "#4F46E5", Beard: "#06B6D4", Spa: "#10B981", Premium: "#F59E0B", Color: "#EC4899" };
    return m[c] || "#64748B";
  };

  const handleSaveService = () => {
    if (!formName.trim()) {
      showToast("Please enter a service name");
      return;
    }

    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? {
        ...s,
        name: formName,
        category: formCategory,
        price: Number(formPrice),
        originalPrice: Number(formOriginalPrice),
        duration: formDuration,
        description: formDescription,
        included: formInclusions.split(",").map(i => i.trim())
      } : s));
      showToast(`Service "${formName}" updated successfully!`);
    } else {
      const newService = {
        id: Date.now(),
        name: formName,
        category: formCategory,
        price: Number(formPrice),
        originalPrice: Number(formOriginalPrice),
        duration: formDuration,
        bookings: 0,
        revenue: "₹0",
        active: true,
        popular: false,
        description: formDescription,
        included: formInclusions.split(",").map(i => i.trim())
      };
      setServices([newService, ...services]);
      showToast(`New service "${formName}" added to catalog!`);
    }

    setIsAddModalOpen(false);
    setEditingService(null);
  };

  const openEditModal = (srv) => {
    setEditingService(srv);
    setFormName(srv.name);
    setFormCategory(srv.category);
    setFormPrice(srv.price.toString());
    setFormOriginalPrice(srv.originalPrice ? srv.originalPrice.toString() : srv.price.toString());
    setFormDuration(srv.duration);
    setFormDescription(srv.description || "");
    setFormInclusions(srv.included ? srv.included.join(", ") : "");
    setIsAddModalOpen(true);
  };

  const openNewModal = () => {
    setEditingService(null);
    setFormName("");
    setFormCategory("Hair");
    setFormPrice("349");
    setFormOriginalPrice("499");
    setFormDuration("45 min");
    setFormDescription("");
    setFormInclusions("Hair Wash, Cut, Blow Dry");
    setIsAddModalOpen(true);
  };

  const handleDeleteService = (id) => {
    setServices(services.filter(s => s.id !== id));
    showToast("Service deleted from catalog");
  };

  const filtered = services.filter(s => activeCategory === "All" || s.category === activeCategory);

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
            <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>Service Menu & Pricing</h2>
            <p style={{ fontSize: "0.7rem", color: "#64748B" }}>{services.length} total services configured</p>
          </div>
          <button
            onClick={openNewModal}
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
            <Plus size={15} /> Add Service
          </button>
        </div>

        {/* Category Selector */}
        <div style={{ display: "flex", gap: "8px", overflowX: "auto" }} className="no-scrollbar">
          {categories.map(c => {
            const isSelected = activeCategory === c;
            return (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                style={{
                  padding: "5px 14px",
                  borderRadius: "999px",
                  fontSize: "0.74rem",
                  fontWeight: 800,
                  whiteSpace: "nowrap",
                  border: isSelected ? "none" : "1px solid #E2E8F0",
                  background: isSelected ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#F1F5F9",
                  color: isSelected ? "#FFFFFF" : "#64748B",
                  boxShadow: isSelected ? "0 3px 10px rgba(79,70,229,0.3)" : "none",
                  cursor: "pointer"
                }}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.map(srv => {
          const badgeColor = catColor(srv.category);
          return (
            <div
              key={srv.id}
              style={{
                background: "#FFFFFF",
                borderRadius: "18px",
                padding: "16px",
                border: "1px solid #E2E8F0",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)"
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ flex: 1, paddingRight: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>{srv.name}</h3>
                    <span style={{ fontSize: "0.62rem", fontWeight: 800, color: badgeColor, background: `${badgeColor}15`, padding: "2px 8px", borderRadius: "999px" }}>
                      {srv.category}
                    </span>
                  </div>

                  <p style={{ fontSize: "0.72rem", color: "#64748B", marginBottom: "8px", lineHeight: 1.4 }}>
                    {srv.description}
                  </p>

                  {/* Price & Duration */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <span style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>₹{srv.price}</span>
                    {srv.originalPrice && srv.originalPrice > srv.price && (
                      <span style={{ fontSize: "0.78rem", color: "#94A3B8", textDecoration: "line-through" }}>₹{srv.originalPrice}</span>
                    )}
                    <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.72rem", color: "#4F46E5", fontWeight: 700, background: "#EEF2FF", padding: "2px 8px", borderRadius: "6px" }}>
                      <Clock size={11} /> {srv.duration}
                    </span>
                  </div>

                  {/* Inclusions tags */}
                  {srv.included && srv.included.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px", marginBottom: "8px" }}>
                      {srv.included.map((inc, i) => (
                        <span key={i} style={{ fontSize: "0.62rem", background: "#F1F5F9", color: "#475569", padding: "2px 6px", borderRadius: "4px", fontWeight: 600 }}>
                          ✓ {inc}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Stats */}
                  <div style={{ fontSize: "0.68rem", color: "#94A3B8" }}>
                    {srv.bookings} bookings this month • Total: <strong style={{ color: "#10B981" }}>{srv.revenue}</strong>
                  </div>
                </div>

                {/* Right Controls */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "10px" }}>
                  {/* Active Toggle */}
                  <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <span style={{ fontSize: "0.62rem", color: srv.active ? "#10B981" : "#94A3B8", fontWeight: 700 }}>
                      {srv.active ? "LIVE" : "PAUSED"}
                    </span>
                    <div
                      onClick={() => {
                        const updated = services.map(s => s.id === srv.id ? { ...s, active: !s.active } : s);
                        setServices(updated);
                        showToast(`Service "${srv.name}" is now ${!srv.active ? "LIVE" : "PAUSED"}`);
                      }}
                      style={{
                        width: "38px",
                        height: "21px",
                        borderRadius: "999px",
                        background: srv.active ? "#4F46E5" : "#E2E8F0",
                        position: "relative",
                        cursor: "pointer",
                        transition: "background 0.2s"
                      }}
                    >
                      <div style={{
                        position: "absolute",
                        top: "2.5px",
                        left: srv.active ? "19px" : "2.5px",
                        width: "16px",
                        height: "16px",
                        borderRadius: "50%",
                        background: "#FFFFFF",
                        boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
                        transition: "left 0.2s"
                      }} />
                    </div>
                  </div>

                  {/* Edit & Delete Buttons */}
                  <div style={{ display: "flex", gap: "6px" }}>
                    <button
                      onClick={() => openEditModal(srv)}
                      style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#EEF2FF", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    >
                      <Edit3 size={14} color="#4F46E5" />
                    </button>
                    <button
                      onClick={() => handleDeleteService(srv.id)}
                      style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#FEF2F2", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
                    >
                      <Trash2 size={14} color="#DC2626" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add / Edit Service Modal */}
      {isAddModalOpen && (
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
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>
                {editingService ? "Edit Service Item" : "Create New Service"}
              </h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "16px" }}>
              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Service Title *</label>
                <input
                  type="text"
                  placeholder="e.g. Signature Fade Cut & Beard Glow"
                  value={formName}
                  onChange={e => setFormName(e.target.value)}
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Category</label>
                  <select
                    value={formCategory}
                    onChange={e => setFormCategory(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                  >
                    {categories.filter(c => c !== "All").map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Duration</label>
                  <select
                    value={formDuration}
                    onChange={e => setFormDuration(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                  >
                    {["15 min", "30 min", "45 min", "60 min", "90 min", "120 min"].map(d => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Price (₹) *</label>
                  <input
                    type="number"
                    value={formPrice}
                    onChange={e => setFormPrice(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Original Price (₹)</label>
                  <input
                    type="number"
                    value={formOriginalPrice}
                    onChange={e => setFormOriginalPrice(e.target.value)}
                    style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Description</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={e => setFormDescription(e.target.value)}
                  placeholder="Provide details about what makes this service special..."
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A", resize: "none" }}
                />
              </div>

              <div>
                <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Key Inclusions (Comma Separated)</label>
                <input
                  type="text"
                  value={formInclusions}
                  onChange={e => setFormInclusions(e.target.value)}
                  placeholder="e.g. Hair Wash, Cut, Blow Dry, Style Wax"
                  style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A" }}
                />
              </div>
            </div>

            <button
              onClick={handleSaveService}
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
              {editingService ? "Update Service Details" : "Publish to Customer App"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
