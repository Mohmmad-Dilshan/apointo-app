import React, { useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  Clock,
  ChevronRight,
  Phone,
  Plus,
  QrCode,
  Calendar,
  User,
  Scissors,
  DollarSign,
  MessageSquare,
  Sparkles,
  AlertCircle,
  FileText,
  X,
  Filter
} from "lucide-react";

export default function MobileAppointments({ onOpenPOS, onOpenScanner }) {
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const [appointmentsList, setAppointmentsList] = useState([
    {
      id: "APT-98241",
      customer: "Dilshan Perera",
      phone: "+91 98765 43210",
      service: "Classic Haircut & Styling",
      staff: "Rahul Sharma",
      date: "Today, 14 Aug 2026",
      time: "02:30 PM",
      duration: "45 min",
      price: 299,
      tax: 30,
      totalAmount: 329,
      paymentMethod: "UPI (Google Pay)",
      status: "In Service",
      otp: "4892",
      notes: "Likes low fade on sides, scissor trim on top.",
      visitsCount: 12
    },
    {
      id: "APT-87120",
      customer: "Arjun Kapoor",
      phone: "+91 98123 45678",
      service: "Beard Crafting Combo",
      staff: "Vikram Singh",
      date: "Today, 14 Aug 2026",
      time: "10:30 AM",
      duration: "30 min",
      price: 499,
      tax: 0,
      totalAmount: 499,
      paymentMethod: "Cash at Desk",
      status: "Completed",
      otp: "1923",
      notes: "Eucalyptus hot towel treatment requested.",
      visitsCount: 8
    },
    {
      id: "APT-76510",
      customer: "Rohan Malhotra",
      phone: "+91 99887 76655",
      service: "Royal Deluxe Grooming",
      staff: "Priya Verma",
      date: "Today, 14 Aug 2026",
      time: "05:00 PM",
      duration: "90 min",
      price: 899,
      tax: 50,
      totalAmount: 949,
      paymentMethod: "Card (POS)",
      status: "Waiting",
      otp: "6612",
      notes: "First time visit, recommend Charcoal face scrub.",
      visitsCount: 1
    },
    {
      id: "APT-92144",
      customer: "Vikram Malhotra",
      phone: "+91 98111 22334",
      service: "Head Spa & Scalp Massage",
      staff: "Rahul Sharma",
      date: "Tomorrow, 15 Aug 2026",
      time: "11:00 AM",
      duration: "45 min",
      price: 399,
      tax: 20,
      totalAmount: 419,
      paymentMethod: "UPI (PhonePe)",
      status: "Confirmed",
      otp: "3389",
      notes: "Regular client. Prefers Rahul.",
      visitsCount: 15
    },
    {
      id: "APT-65430",
      customer: "Siddharth Nair",
      phone: "+91 97766 55443",
      service: "Hair Coloring & Highlights",
      staff: "Priya Verma",
      date: "12 Aug 2026",
      time: "04:00 PM",
      duration: "120 min",
      price: 1299,
      tax: 80,
      totalAmount: 1379,
      paymentMethod: "Cancelled (Refunded)",
      status: "Cancelled",
      otp: "9910",
      notes: "Client rescheduled due to emergency.",
      visitsCount: 3
    }
  ]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleUpdateStatus = (aptId, newStatus) => {
    setAppointmentsList(appointmentsList.map(a => a.id === aptId ? { ...a, status: newStatus } : a));
    if (selectedAppointment && selectedAppointment.id === aptId) {
      setSelectedAppointment({ ...selectedAppointment, status: newStatus });
    }
    showToast(`Appointment #${aptId} marked as ${newStatus}`);
  };

  const filters = ["all", "In Service", "Waiting", "Confirmed", "Completed", "Cancelled"];

  const filtered = appointmentsList.filter(a => {
    const matchesFilter = filterStatus === "all" || a.status === filterStatus;
    const matchesSearch =
      a.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.staff.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const statusStyle = (s) => {
    if (s === "In Service") return { color: "#4F46E5", bg: "#EEF2FF", border: "#C7D2FE", icon: <Scissors size={12} /> };
    if (s === "Waiting") return { color: "#D97706", bg: "#FFFBEB", border: "#FDE68A", icon: <Clock size={12} /> };
    if (s === "Completed") return { color: "#059669", bg: "#ECFDF5", border: "#A7F3D0", icon: <CheckCircle2 size={12} /> };
    if (s === "Confirmed") return { color: "#2563EB", bg: "#EFF6FF", border: "#BFDBFE", icon: <Calendar size={12} /> };
    return { color: "#DC2626", bg: "#FEF2F2", border: "#FECACA", icon: <XCircle size={12} /> };
  };

  return (
    <div style={{ background: "#F8FAFC", minHeight: "100%", paddingBottom: "30px", position: "relative" }}>
      {/* Toast Alert */}
      {toastMessage && (
        <div style={{
          position: "fixed",
          top: "60px",
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

      {/* Header with Search and Action Buttons */}
      <div style={{ padding: "16px 14px 12px", background: "#FFFFFF", borderBottom: "1px solid #E2E8F0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
          <div>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>Bookings & Billing</h2>
            <p style={{ fontSize: "0.7rem", color: "#64748B" }}>{filtered.length} total appointments loaded</p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              onClick={onOpenScanner}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "10px",
                background: "#F1F5F9",
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <QrCode size={17} color="#4F46E5" />
            </button>
            <button
              onClick={onOpenPOS}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                padding: "8px 12px",
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
              <Plus size={15} /> + Walk-in POS
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#F1F5F9", padding: "10px 14px", borderRadius: "12px" }}>
          <Search size={16} color="#64748B" />
          <input
            type="text"
            placeholder="Search by customer, OTP, staff or service..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{ border: "none", background: "transparent", fontSize: "0.82rem", outline: "none", flex: 1, color: "#0F172A", fontWeight: 600 }}
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} style={{ background: "none", border: "none", cursor: "pointer" }}>
              <X size={14} color="#94A3B8" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Pills */}
      <div style={{ padding: "12px 14px", display: "flex", gap: "8px", overflowX: "auto" }} className="no-scrollbar">
        {filters.map(f => {
          const isActive = filterStatus === f;
          return (
            <button
              key={f}
              onClick={() => setFilterStatus(f)}
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                fontSize: "0.74rem",
                fontWeight: 800,
                whiteSpace: "nowrap",
                background: isActive ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                color: isActive ? "#FFFFFF" : "#64748B",
                border: isActive ? "none" : "1px solid #E2E8F0",
                boxShadow: isActive ? "0 3px 10px rgba(79,70,229,0.3)" : "none",
                cursor: "pointer"
              }}
            >
              {f === "all" ? "All Bookings" : f}
            </button>
          );
        })}
      </div>

      {/* Appointments List */}
      <div style={{ padding: "0 14px", display: "flex", flexDirection: "column", gap: "12px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px", background: "#FFFFFF", borderRadius: "16px", border: "1px dashed #CBD5E1" }}>
            <Calendar size={36} color="#94A3B8" style={{ marginBottom: "10px" }} />
            <h4 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#0F172A" }}>No appointments found</h4>
            <p style={{ fontSize: "0.75rem", color: "#64748B", marginTop: "4px" }}>Try adjusting your search or filter tags</p>
          </div>
        ) : (
          filtered.map(apt => {
            const st = statusStyle(apt.status);
            return (
              <div
                key={apt.id}
                onClick={() => setSelectedAppointment(apt)}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "18px",
                  padding: "16px",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
                  cursor: "pointer",
                  transition: "all 0.2s"
                }}
              >
                {/* Top Row: Customer & Status */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>{apt.customer}</span>
                      <span style={{ fontSize: "0.62rem", background: "#EEF2FF", color: "#4F46E5", padding: "1px 6px", borderRadius: "4px", fontWeight: 700 }}>
                        {apt.visitsCount} visits
                      </span>
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                      #{apt.id} • {apt.date}
                    </div>
                  </div>

                  <span style={{
                    fontSize: "0.68rem",
                    fontWeight: 800,
                    color: st.color,
                    background: st.bg,
                    border: `1px solid ${st.border}`,
                    padding: "4px 9px",
                    borderRadius: "999px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px"
                  }}>
                    {st.icon}
                    <span>{apt.status}</span>
                  </span>
                </div>

                {/* Middle Box: Service & Specialist */}
                <div style={{ background: "#F8FAFC", borderRadius: "12px", padding: "10px 12px", marginBottom: "12px", border: "1px solid #F1F5F9" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "#0F172A" }}>{apt.service}</div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "4px", fontSize: "0.72rem", color: "#64748B" }}>
                    <span>Specialist: <strong style={{ color: "#4F46E5" }}>{apt.staff}</strong></span>
                    <span>Duration: {apt.duration}</span>
                  </div>
                </div>

                {/* Bottom Row: Time, OTP, Price */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "8px", borderTop: "1px solid #F1F5F9" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#4F46E5" }}>{apt.time}</div>
                    <span style={{ fontSize: "0.68rem", background: "#F1F5F9", padding: "2px 6px", borderRadius: "6px", fontWeight: 800, color: "#0F172A" }}>
                      OTP: {apt.otp}
                    </span>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: "0.95rem", fontWeight: 900, color: "#0F172A" }}>₹{apt.totalAmount}</div>
                    <div style={{ fontSize: "0.62rem", color: "#10B981", fontWeight: 700 }}>{apt.paymentMethod}</div>
                  </div>
                </div>

                {/* Quick Action Button Bar */}
                <div style={{ display: "flex", gap: "6px", marginTop: "12px" }}>
                  {apt.status === "Waiting" && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleUpdateStatus(apt.id, "In Service"); }}
                      style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#4F46E5", color: "#FFFFFF", fontSize: "0.75rem", fontWeight: 800, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                    >
                      <Scissors size={13} /> Start Service
                    </button>
                  )}
                  {apt.status === "In Service" && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleUpdateStatus(apt.id, "Completed"); }}
                      style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#10B981", color: "#FFFFFF", fontSize: "0.75rem", fontWeight: 800, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "4px" }}
                    >
                      <CheckCircle2 size={13} /> Complete & Bill
                    </button>
                  )}
                  {apt.status === "Confirmed" && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleUpdateStatus(apt.id, "Waiting"); }}
                      style={{ flex: 1, padding: "8px", borderRadius: "10px", background: "#EEF2FF", color: "#4F46E5", fontSize: "0.75rem", fontWeight: 800, border: "none", cursor: "pointer" }}
                    >
                      Mark Arrived at Reception
                    </button>
                  )}
                  <a
                    href={`tel:${apt.phone}`}
                    onClick={(e) => e.stopPropagation()}
                    style={{ width: "36px", height: "34px", borderRadius: "10px", background: "#F1F5F9", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
                  >
                    <Phone size={14} color="#475569" />
                  </a>
                  <a
                    href={`https://wa.me/${apt.phone.replace(/[^0-9]/g, '')}?text=Hi%20${encodeURIComponent(apt.customer)},%20your%20appointment%20for%20${encodeURIComponent(apt.service)}%20at%20Urban%20Cut%20Studio%20is%20ready!`}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{ width: "36px", height: "34px", borderRadius: "10px", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}
                  >
                    <MessageSquare size={14} color="#059669" />
                  </a>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Appointment Details Full Modal */}
      {selectedAppointment && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(15, 23, 42, 0.65)",
          backdropFilter: "blur(6px)",
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
              <div>
                <span style={{ fontSize: "0.68rem", fontWeight: 700, color: "#64748B" }}>Booking Dossier</span>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>{selectedAppointment.customer}</h3>
              </div>
              <button
                onClick={() => setSelectedAppointment(null)}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            {/* Status Segment */}
            <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "12px", marginBottom: "14px", border: "1px solid #E2E8F0" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 700, color: "#64748B", marginBottom: "8px" }}>Live Lifecycle Status:</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "6px" }}>
                {["Waiting", "In Service", "Completed"].map(st => (
                  <button
                    key={st}
                    onClick={() => handleUpdateStatus(selectedAppointment.id, st)}
                    style={{
                      padding: "8px",
                      borderRadius: "8px",
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      border: selectedAppointment.status === st ? "none" : "1px solid #E2E8F0",
                      background: selectedAppointment.status === st ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#FFFFFF",
                      color: selectedAppointment.status === st ? "#FFFFFF" : "#475569",
                      cursor: "pointer"
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            {/* Stylist Formula Notes */}
            <div style={{ background: "#FFFBEB", borderRadius: "12px", padding: "12px", marginBottom: "14px", border: "1px solid #FDE68A" }}>
              <div style={{ fontSize: "0.72rem", fontWeight: 800, color: "#B45309", display: "flex", alignItems: "center", gap: "4px", marginBottom: "4px" }}>
                <Sparkles size={13} color="#D97706" />
                <span>Client Preference & Formula Notes</span>
              </div>
              <p style={{ fontSize: "0.78rem", color: "#78350F", margin: 0 }}>{selectedAppointment.notes}</p>
            </div>

            {/* Invoice Summary */}
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", background: "#F8FAFC", borderRadius: "12px", padding: "12px", marginBottom: "16px", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#64748B" }}>
                <span>Service Fee ({selectedAppointment.service})</span>
                <span style={{ fontWeight: 700, color: "#0F172A" }}>₹{selectedAppointment.price}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.78rem", color: "#64748B" }}>
                <span>GST & Service Tax (18%)</span>
                <span style={{ fontWeight: 700, color: "#0F172A" }}>₹{selectedAppointment.tax}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", fontWeight: 900, color: "#0F172A", paddingTop: "6px", borderTop: "1px solid #E2E8F0" }}>
                <span>Total Amount Paid</span>
                <span style={{ color: "#10B981" }}>₹{selectedAppointment.totalAmount}</span>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div style={{ display: "flex", gap: "8px" }}>
              <button
                onClick={() => {
                  handleUpdateStatus(selectedAppointment.id, "Cancelled");
                  setSelectedAppointment(null);
                }}
                style={{ flex: 1, padding: "12px", borderRadius: "12px", background: "#FEF2F2", color: "#DC2626", fontSize: "0.8rem", fontWeight: 800, border: "none", cursor: "pointer" }}
              >
                Cancel Booking
              </button>
              <button
                onClick={() => {
                  handleUpdateStatus(selectedAppointment.id, "Completed");
                  setSelectedAppointment(null);
                }}
                style={{ flex: 2, padding: "12px", borderRadius: "12px", background: "linear-gradient(135deg, #10B981, #059669)", color: "#FFFFFF", fontSize: "0.8rem", fontWeight: 800, border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
              >
                <CheckCircle2 size={16} /> Mark Completed & Paid
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
