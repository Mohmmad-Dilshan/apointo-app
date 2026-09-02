import React, { useState } from "react";
import {
  Users,
  UserCheck,
  CreditCard,
  Tag,
  Star,
  Settings,
  ChevronRight,
  Phone,
  Mail,
  Camera,
  ShieldCheck,
  Search,
  Package,
  Plus,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  Clock,
  DollarSign,
  MessageSquare,
  X,
  Lock
} from "lucide-react";
import MobilePayments from "./MobilePayments";
import MobileOffers from "./MobileOffers";
import MobileReviews from "./MobileReviews";
import MobileSettings from "./MobileSettings";

function BackHeader({ title, onBack, rightAction }) {
  return (
    <div style={{ background: "#FFFFFF", padding: "16px 14px", borderBottom: "1px solid #E2E8F0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <button
          onClick={onBack}
          style={{ width: "32px", height: "32px", borderRadius: "9px", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
        >
          <ChevronRight size={16} color="#64748B" style={{ transform: "rotate(180deg)" }} />
        </button>
        <h2 style={{ fontSize: "1rem", fontWeight: 900, color: "#0F172A" }}>{title}</h2>
      </div>
      {rightAction}
    </div>
  );
}

/* 1. STAFF MANAGEMENT SUB-SECTION */
function StaffSection({ onBack }) {
  const [staffList, setStaffList] = useState([
    { id: 1, name: "Rahul Sharma", role: "Senior Barber", specialty: "Fade Cuts & Styling", bookings: 28, rating: 4.9, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120", commissionRate: "35%", earnedToday: "₹1,420", status: "On Duty", shift: "09:00 AM - 07:00 PM" },
    { id: 2, name: "Priya Verma", role: "Color & Spa Specialist", specialty: "Organic Facials & Balayage", bookings: 19, rating: 4.8, avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120", commissionRate: "30%", earnedToday: "₹1,850", status: "On Duty", shift: "10:00 AM - 08:00 PM" },
    { id: 3, name: "Vikram Singh", role: "Beard Specialist", specialty: "Hot Towel Beard Crafting", bookings: 22, rating: 4.7, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120", commissionRate: "32%", earnedToday: "₹960", status: "On Break", shift: "09:00 AM - 06:00 PM" }
  ]);

  const [isAddStaffOpen, setIsAddStaffOpen] = useState(false);
  const [newStaffName, setNewStaffName] = useState("");
  const [newStaffRole, setNewStaffRole] = useState("Junior Stylist");
  const [newStaffCommission, setNewStaffCommission] = useState("30%");

  const handleAddStaff = () => {
    if (!newStaffName.trim()) return;
    const newStaff = {
      id: Date.now(),
      name: newStaffName,
      role: newStaffRole,
      specialty: "General Grooming",
      bookings: 0,
      rating: 5.0,
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=120",
      commissionRate: newStaffCommission,
      earnedToday: "₹0",
      status: "On Duty",
      shift: "09:00 AM - 06:00 PM"
    };
    setStaffList([...staffList, newStaff]);
    setIsAddStaffOpen(false);
    setNewStaffName("");
  };

  const toggleStatus = (id) => {
    setStaffList(staffList.map(s => {
      if (s.id === id) {
        const next = s.status === "On Duty" ? "On Break" : s.status === "On Break" ? "Off Duty" : "On Duty";
        return { ...s, status: next };
      }
      return s;
    }));
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <BackHeader
        title="Staff & Specialists"
        onBack={onBack}
        rightAction={
          <button
            onClick={() => setIsAddStaffOpen(true)}
            style={{ display: "flex", alignItems: "center", gap: "4px", padding: "6px 12px", borderRadius: "9px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.74rem", fontWeight: 800, border: "none", cursor: "pointer" }}
          >
            <Plus size={14} /> Add Staff
          </button>
        }
      />

      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {staffList.map(s => {
          const isDuty = s.status === "On Duty";
          const isBreak = s.status === "On Break";
          return (
            <div key={s.id} style={{ background: "#FFFFFF", borderRadius: "18px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                <img src={s.avatar} alt={s.name} style={{ width: "48px", height: "48px", borderRadius: "14px", objectFit: "cover" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>{s.name}</div>
                    <span style={{ fontSize: "0.68rem", fontWeight: 800, color: "#F59E0B" }}>{s.rating} ★</span>
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B" }}>{s.role} • {s.specialty}</div>
                  <div style={{ fontSize: "0.66rem", color: "#94A3B8", marginTop: "2px" }}>Shift: {s.shift}</div>
                </div>

                {/* Duty toggle button */}
                <button
                  onClick={() => toggleStatus(s.id)}
                  style={{
                    padding: "4px 8px",
                    borderRadius: "8px",
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    border: "none",
                    background: isDuty ? "#ECFDF5" : isBreak ? "#FFFBEB" : "#FEF2F2",
                    color: isDuty ? "#059669" : isBreak ? "#D97706" : "#DC2626",
                    cursor: "pointer"
                  }}
                >
                  {s.status} ↻
                </button>
              </div>

              {/* Stats Row */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", background: "#F8FAFC", padding: "10px", borderRadius: "12px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#4F46E5" }}>{s.bookings}</div>
                  <div style={{ fontSize: "0.62rem", color: "#64748B" }}>Month Bookings</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#10B981" }}>{s.commissionRate}</div>
                  <div style={{ fontSize: "0.62rem", color: "#64748B" }}>Commission Split</div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#0F172A" }}>{s.earnedToday}</div>
                  <div style={{ fontSize: "0.62rem", color: "#64748B" }}>Today Payout</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Staff Modal */}
      {isAddStaffOpen && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(6px)", zIndex: 9990, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "440px", background: "#FFFFFF", borderRadius: "24px 24px 0 0", padding: "20px 18px", boxShadow: "0 -10px 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>Add Specialist</h3>
              <button onClick={() => setIsAddStaffOpen(false)} style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><X size={15} /></button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Specialist Name</label>
                <input type="text" placeholder="e.g. Ananya Deshmukh" value={newStaffName} onChange={e => setNewStaffName(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Role / Designation</label>
                <input type="text" placeholder="e.g. Master Stylist & Colorist" value={newStaffRole} onChange={e => setNewStaffRole(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Commission Percentage</label>
                <input type="text" placeholder="e.g. 35%" value={newStaffCommission} onChange={e => setNewStaffCommission(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none" }} />
              </div>
            </div>
            <button onClick={handleAddStaff} style={{ width: "100%", padding: "12px", borderRadius: "12px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 800, border: "none", cursor: "pointer" }}>Save Specialist</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* 2. CUSTOMER CRM & STYLIST FORMULAS SUB-SECTION */
function CRMSection({ onBack }) {
  const [query, setQuery] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);

  const clients = [
    {
      id: "c_1",
      name: "Dilshan Perera",
      phone: "+91 98765 43210",
      email: "dilshan.p@example.com",
      visits: 12,
      spent: "₹4,980",
      last: "Today (14 Aug)",
      tag: "VIP Gold",
      preferredSpecialist: "Rahul Sharma",
      formula: "Low fade (0.5 guard), scissor cut top. Allergic to tea tree oil. Preferred beverage: Green Tea.",
      favoriteServices: ["Classic Haircut", "Beard Trim"]
    },
    {
      id: "c_2",
      name: "Arjun Kapoor",
      phone: "+91 98123 45678",
      email: "arjun.k@example.com",
      visits: 8,
      spent: "₹3,120",
      last: "Today (14 Aug)",
      tag: "Regular",
      preferredSpecialist: "Vikram Singh",
      formula: "Heavy beard shape-up, eucalyptus steam towel. Beard oil: Sandalwood scent.",
      favoriteServices: ["Beard Crafting Combo"]
    },
    {
      id: "c_3",
      name: "Rohan Malhotra",
      phone: "+91 99887 76655",
      email: "rohan.m@example.com",
      visits: 5,
      spent: "₹2,340",
      last: "28 Jul",
      tag: "Regular",
      preferredSpecialist: "Priya Verma",
      formula: "Hair color shade: 5N Medium Brown. Charcoal face scrub sensitive skin mode.",
      favoriteServices: ["Haircut", "Hair Color"]
    },
    {
      id: "c_4",
      name: "Siddharth Nair",
      phone: "+91 97766 55443",
      email: "sid.n@example.com",
      visits: 3,
      spent: "₹1,100",
      last: "12 Aug",
      tag: "New",
      preferredSpecialist: "Rahul Sharma",
      formula: "First time client, prefers low maintenance undercut styling.",
      favoriteServices: ["Royal Rejuvenation"]
    }
  ];

  const tagColor = (t) => {
    if (t.includes("VIP")) return { bg: "#FFFBEB", color: "#D97706" };
    if (t === "Regular") return { bg: "#EEF2FF", color: "#4F46E5" };
    return { bg: "#ECFDF5", color: "#059669" };
  };

  const filtered = clients.filter(c => c.name.toLowerCase().includes(query.toLowerCase()) || c.phone.includes(query));

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <BackHeader title="Client CRM & Formulas" onBack={onBack} />
      
      {/* Search Input */}
      <div style={{ padding: "14px 14px 10px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F1F5F9", padding: "10px 14px", borderRadius: "12px" }}>
          <Search size={15} color="#64748B" />
          <input
            type="text"
            placeholder="Search by client name, phone or formula..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{ border: "none", background: "transparent", fontSize: "0.82rem", outline: "none", flex: 1, color: "#0F172A", fontWeight: 600 }}
          />
        </div>
      </div>

      {/* Client Cards */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.map(c => {
          const tc = tagColor(c.tag);
          return (
            <div
              key={c.id}
              onClick={() => setSelectedClient(c)}
              style={{ background: "#FFFFFF", borderRadius: "18px", padding: "16px", border: "1px solid #E2E8F0", boxShadow: "0 2px 10px rgba(0,0,0,0.04)", cursor: "pointer" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                <div>
                  <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>{c.name}</div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>{c.phone} • {c.email}</div>
                </div>
                <span style={{ fontSize: "0.68rem", fontWeight: 800, color: tc.color, background: tc.bg, padding: "3px 8px", borderRadius: "999px" }}>
                  {c.tag}
                </span>
              </div>

              {/* Stylist Notes Box */}
              <div style={{ background: "#FFFBEB", borderRadius: "10px", padding: "8px 10px", marginBottom: "10px", border: "1px solid #FDE68A" }}>
                <div style={{ fontSize: "0.66rem", fontWeight: 800, color: "#B45309", display: "flex", alignItems: "center", gap: "4px" }}>
                  <Sparkles size={11} /> Stylist Formula Notes:
                </div>
                <p style={{ fontSize: "0.72rem", color: "#78350F", marginTop: "2px", lineHeight: 1.3 }}>{c.formula}</p>
              </div>

              {/* Stats Strip */}
              <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
                <div style={{ flex: 1, background: "#EEF2FF", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#4F46E5" }}>{c.visits}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Total Visits</div>
                </div>
                <div style={{ flex: 1, background: "#ECFDF5", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 900, color: "#10B981" }}>{c.spent}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Lifetime Spend</div>
                </div>
                <div style={{ flex: 1, background: "#F8FAFC", borderRadius: "9px", padding: "7px", textAlign: "center" }}>
                  <div style={{ fontSize: "0.78rem", fontWeight: 800, color: "#0F172A" }}>{c.last}</div>
                  <div style={{ fontSize: "0.6rem", color: "#64748B" }}>Last Visited</div>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: "flex", gap: "8px" }}>
                <a
                  href={`tel:${c.phone}`}
                  onClick={e => e.stopPropagation()}
                  style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#EEF2FF", color: "#4F46E5", fontSize: "0.74rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", textDecoration: "none" }}
                >
                  <Phone size={13} /> Call Client
                </a>
                <a
                  href={`https://wa.me/${c.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(c.name)},%20greetings%20from%20Urban%20Cut%20Studio!`}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#ECFDF5", color: "#059669", fontSize: "0.74rem", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", textDecoration: "none" }}
                >
                  <MessageSquare size={13} /> WhatsApp
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* 3. INVENTORY & PRODUCT STOCK TRACKER SUB-SECTION */
function InventorySection({ onBack }) {
  const [products, setProducts] = useState([
    { id: 1, name: "Moroccan Argan Hair Serum", brand: "Urban Luxe", category: "Retail", stock: 4, minStock: 5, unitPrice: "₹699", costPrice: "₹400", lowStock: true },
    { id: 2, name: "Matte Clay Hair Styling Wax", brand: "Reuzel", category: "Retail", stock: 18, minStock: 6, unitPrice: "₹499", costPrice: "₹280", lowStock: false },
    { id: 3, name: "Activated Charcoal Face Wash", brand: "GroomPro", category: "Consumable", stock: 2, minStock: 4, unitPrice: "₹299", costPrice: "₹150", lowStock: true },
    { id: 4, name: "Organic Cedarwood Beard Oil", brand: "BeardCraft", category: "Retail", stock: 12, minStock: 5, unitPrice: "₹349", costPrice: "₹180", lowStock: false },
    { id: 5, name: "Ammonia-Free Hair Color (5N)", brand: "L'Oreal Pro", category: "Consumable", stock: 8, minStock: 4, unitPrice: "₹850", costPrice: "₹500", lowStock: false }
  ]);

  const [isRestockOpen, setIsRestockOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [addUnits, setAddUnits] = useState("10");

  const handleRestock = () => {
    if (!selectedProduct) return;
    setProducts(products.map(p => p.id === selectedProduct.id ? { ...p, stock: p.stock + Number(addUnits), lowStock: false } : p));
    setIsRestockOpen(false);
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      <BackHeader title="Salon Inventory & Supplies" onBack={onBack} />

      {/* Low Stock Warning Banner */}
      <div style={{ padding: "14px 14px 0" }}>
        <div style={{ background: "linear-gradient(135deg, #FEF2F2, #FFF1F2)", borderRadius: "14px", padding: "12px 14px", border: "1px solid #FECACA", display: "flex", alignItems: "center", gap: "10px" }}>
          <AlertTriangle size={20} color="#DC2626" />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#991B1B" }}>2 Products Need Reordering</div>
            <div style={{ fontSize: "0.68rem", color: "#B91C1C" }}>Stock is below safety threshold for upcoming appointments</div>
          </div>
        </div>
      </div>

      {/* Products List */}
      <div style={{ padding: "14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {products.map(p => (
          <div key={p.id} style={{ background: "#FFFFFF", borderRadius: "16px", padding: "14px", border: "1px solid #E2E8F0", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
              <div>
                <div style={{ fontSize: "0.88rem", fontWeight: 900, color: "#0F172A" }}>{p.name}</div>
                <div style={{ fontSize: "0.7rem", color: "#64748B" }}>{p.brand} • {p.category}</div>
              </div>
              <span style={{ fontSize: "0.68rem", fontWeight: 800, color: p.lowStock ? "#DC2626" : "#059669", background: p.lowStock ? "#FEF2F2" : "#ECFDF5", padding: "3px 8px", borderRadius: "999px" }}>
                {p.lowStock ? "⚠️ LOW STOCK" : "IN STOCK"}
              </span>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", background: "#F8FAFC", padding: "8px 12px", borderRadius: "10px", marginBottom: "10px" }}>
              <div>
                <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#0F172A" }}>{p.stock} Units</div>
                <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Safety Level: {p.minStock}</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "0.82rem", fontWeight: 900, color: "#10B981" }}>{p.unitPrice}</div>
                <div style={{ fontSize: "0.62rem", color: "#94A3B8" }}>Cost: {p.costPrice}</div>
              </div>
            </div>

            <button
              onClick={() => { setSelectedProduct(p); setIsRestockOpen(true); }}
              style={{ width: "100%", padding: "8px", borderRadius: "10px", background: "#EEF2FF", color: "#4F46E5", fontSize: "0.75rem", fontWeight: 800, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}
            >
              <Package size={13} /> Restock Product Units
            </button>
          </div>
        ))}
      </div>

      {/* Restock Modal */}
      {isRestockOpen && selectedProduct && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(15, 23, 42, 0.65)", backdropFilter: "blur(6px)", zIndex: 9990, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: "440px", background: "#FFFFFF", borderRadius: "24px 24px 0 0", padding: "20px 18px", boxShadow: "0 -10px 40px rgba(0,0,0,0.2)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "14px" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, color: "#0F172A" }}>Restock: {selectedProduct.name}</h3>
              <button onClick={() => setIsRestockOpen(false)} style={{ width: "30px", height: "30px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}><X size={15} /></button>
            </div>
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "0.75rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "4px" }}>Add Quantity</label>
              <input type="number" value={addUnits} onChange={e => setAddUnits(e.target.value)} style={{ width: "100%", padding: "10px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.85rem", outline: "none" }} />
            </div>
            <button onClick={handleRestock} style={{ width: "100%", padding: "12px", borderRadius: "12px", background: "linear-gradient(135deg, #4F46E5, #6366F1)", color: "#FFFFFF", fontSize: "0.85rem", fontWeight: 800, border: "none", cursor: "pointer" }}>Confirm Restock</button>
          </div>
        </div>
      )}
    </div>
  );
}

/* 4. MAIN MORE MENU WRAPPER */
export default function MobileMore() {
  const [section, setSection] = useState(null);

  if (section === "staff") return <StaffSection onBack={() => setSection(null)} />;
  if (section === "crm") return <CRMSection onBack={() => setSection(null)} />;
  if (section === "inventory") return <InventorySection onBack={() => setSection(null)} />;
  if (section === "payments") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <BackHeader title="Payments & Instant Payouts" onBack={() => setSection(null)} />
      <div style={{ flex: 1, overflowY: "auto" }}><MobilePayments /></div>
    </div>
  );
  if (section === "offers") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <BackHeader title="Marketing & Flash Offers" onBack={() => setSection(null)} />
      <div style={{ flex: 1, overflowY: "auto" }}><MobileOffers /></div>
    </div>
  );
  if (section === "reviews") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <BackHeader title="Customer Reviews & AI Replies" onBack={() => setSection(null)} />
      <div style={{ flex: 1, overflowY: "auto" }}><MobileReviews /></div>
    </div>
  );
  if (section === "settings") return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <BackHeader title="Business Profile & Opening Hours" onBack={() => setSection(null)} />
      <div style={{ flex: 1, overflowY: "auto" }}><MobileSettings /></div>
    </div>
  );

  const menuItems = [
    { id: "staff", label: "Staff & Shift Rosters", icon: <UserCheck size={20} color="#4F46E5" />, bg: "#EEF2FF", desc: "3 specialists, live shifts & commissions" },
    { id: "crm", label: "Customer CRM & Formulas", icon: <Users size={20} color="#06B6D4" />, bg: "#ECFEFF", desc: "124 client dossiers & color notes" },
    { id: "inventory", label: "Inventory & Salon Supplies", icon: <Package size={20} color="#8B5CF6" />, bg: "#F5F3FF", desc: "Consumables & retail stock tracker" },
    { id: "payments", label: "Payments & Instant Payouts", icon: <CreditCard size={20} color="#10B981" />, bg: "#ECFDF5", desc: "₹47,700 weekly ledger & GST invoices" },
    { id: "offers", label: "Marketing & Promo Campaigns", icon: <Tag size={20} color="#F59E0B" />, bg: "#FFFBEB", desc: "3 active voucher codes & discounts" },
    { id: "reviews", label: "Customer Reviews & AI Replies", icon: <Star size={20} color="#F43F5E" />, bg: "#FFF1F2", desc: "4.9 average • 342 verified reviews" },
    { id: "settings", label: "Business Profile & Settings", icon: <Settings size={20} color="#64748B" />, bg: "#F1F5F9", desc: "Operating hours, salon pictures & KYC" },
  ];

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px" }}>
      {/* Business Hero Card */}
      <div style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E1B4B 50%, #4F46E5 100%)", padding: "20px 16px", margin: "14px", borderRadius: "20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: -20, right: -20, width: "120px", height: "120px", borderRadius: "50%", background: "rgba(99,102,241,0.3)", filter: "blur(25px)" }} />
        <div style={{ display: "flex", alignItems: "center", gap: "14px", position: "relative" }}>
          <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.3)" }}>
            <Camera size={24} color="#FFFFFF" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.05rem", fontWeight: 900, color: "#FFFFFF" }}>Urban Cut Studio</div>
            <div style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>Sector 14, Gurugram • Premium Salon</div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", marginTop: "5px" }}>
              <ShieldCheck size={13} color="#10B981" />
              <span style={{ fontSize: "0.68rem", color: "#34D399", fontWeight: 800 }}>Verified Merchant • BIZ-00192</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Navigation Grid */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "14px 16px",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              gap: "14px",
              textAlign: "left",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              cursor: "pointer",
              transition: "all 0.2s"
            }}
          >
            <div style={{ width: "42px", height: "42px", borderRadius: "12px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              {item.icon}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "0.88rem", fontWeight: 800, color: "#0F172A" }}>{item.label}</div>
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", marginTop: "2px" }}>{item.desc}</div>
            </div>
            <ChevronRight size={16} color="#CBD5E1" />
          </button>
        ))}
      </div>
    </div>
  );
}
