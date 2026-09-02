import React, { useState } from "react";
import {
  X,
  Plus,
  Scissors,
  User,
  DollarSign,
  CheckCircle2,
  Receipt,
  Sparkles,
  CreditCard,
  QrCode,
  Banknote,
  Minus
} from "lucide-react";

export default function WalkInPOSModal({ isOpen, onClose, onCompleteBooking }) {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [selectedSpecialist, setSelectedSpecialist] = useState("Rahul Sharma");
  const [selectedServices, setSelectedServices] = useState(["Classic Haircut & Styling"]);
  const [customDiscount, setCustomDiscount] = useState("0");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [isInvoiceGenerated, setIsInvoiceGenerated] = useState(false);
  const [createdInvoiceData, setCreatedInvoiceData] = useState(null);

  const availableServices = [
    { name: "Classic Haircut & Styling", price: 299, duration: "45m" },
    { name: "Beard Crafting Combo", price: 499, duration: "45m" },
    { name: "Royal Deluxe Rejuvenation", price: 899, duration: "90m" },
    { name: "Express Charcoal Face Scrub", price: 249, duration: "30m" },
    { name: "Organic Scalp Therapy Spa", price: 699, duration: "60m" }
  ];

  const specialists = ["Rahul Sharma", "Priya Verma", "Vikram Singh"];

  const toggleService = (srvName) => {
    if (selectedServices.includes(srvName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter(s => s !== srvName));
      }
    } else {
      setSelectedServices([...selectedServices, srvName]);
    }
  };

  const subtotal = selectedServices.reduce((sum, srvName) => {
    const found = availableServices.find(s => s.name === srvName);
    return sum + (found ? found.price : 0);
  }, 0);

  const discountAmount = Number(customDiscount) || 0;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const gstAmount = Math.round(taxableAmount * 0.18);
  const finalTotal = taxableAmount + gstAmount;

  const handleCreateBill = () => {
    if (!customerName.trim()) {
      alert("Please enter customer name");
      return;
    }

    const invoice = {
      id: "WALK-" + Math.floor(1000 + Math.random() * 9000),
      customerName: customerName,
      customerPhone: customerPhone || "+91 98000 00000",
      services: selectedServices,
      specialist: selectedSpecialist,
      subtotal,
      discountAmount,
      gstAmount,
      finalTotal,
      paymentMethod,
      time: "Today, " + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setCreatedInvoiceData(invoice);
    setIsInvoiceGenerated(true);

    if (onCompleteBooking) {
      onCompleteBooking(invoice);
    }
  };

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      background: "rgba(15, 23, 42, 0.75)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "460px",
        background: "#FFFFFF",
        borderRadius: "28px 28px 0 0",
        padding: "20px 18px 24px",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
        maxHeight: "90vh",
        overflowY: "auto"
      }}>
        {!isInvoiceGenerated ? (
          <>
            {/* Modal Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Receipt size={18} color="#4F46E5" />
                </div>
                <div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 900, color: "#0F172A" }}>Walk-in Quick POS Billing</h3>
                  <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Ring up walk-in clients at the reception desk</p>
                </div>
              </div>
              <button
                onClick={onClose}
                style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
              >
                <X size={16} color="#64748B" />
              </button>
            </div>

            {/* Client Info Inputs */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "4px" }}>Customer Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Varun Dhawan"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A", fontWeight: 600 }}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "4px" }}>Phone Number</label>
                <input
                  type="text"
                  placeholder="+91 98..."
                  value={customerPhone}
                  onChange={e => setCustomerPhone(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A", fontWeight: 600 }}
                />
              </div>
            </div>

            {/* Specialist Assignment */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "6px" }}>Assign Specialist</label>
              <div style={{ display: "flex", gap: "8px" }}>
                {specialists.map(stf => (
                  <button
                    key={stf}
                    onClick={() => setSelectedSpecialist(stf)}
                    style={{
                      flex: 1,
                      padding: "8px 4px",
                      borderRadius: "10px",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      border: selectedSpecialist === stf ? "none" : "1px solid #E2E8F0",
                      background: selectedSpecialist === stf ? "linear-gradient(135deg, #4F46E5, #6366F1)" : "#F8FAFC",
                      color: selectedSpecialist === stf ? "#FFFFFF" : "#475569",
                      cursor: "pointer"
                    }}
                  >
                    {stf}
                  </button>
                ))}
              </div>
            </div>

            {/* Service Multi-Select */}
            <div style={{ marginBottom: "14px" }}>
              <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "6px" }}>Select Services</label>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                {availableServices.map(srv => {
                  const isSelected = selectedServices.includes(srv.name);
                  return (
                    <div
                      key={srv.name}
                      onClick={() => toggleService(srv.name)}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 12px",
                        borderRadius: "12px",
                        border: isSelected ? "1px solid #4F46E5" : "1px solid #E2E8F0",
                        background: isSelected ? "#EEF2FF" : "#FFFFFF",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <div style={{ width: "20px", height: "20px", borderRadius: "6px", background: isSelected ? "#4F46E5" : "#E2E8F0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                          {isSelected && <CheckCircle2 size={13} color="#FFFFFF" />}
                        </div>
                        <div>
                          <div style={{ fontSize: "0.82rem", fontWeight: 800, color: "#0F172A" }}>{srv.name}</div>
                          <div style={{ fontSize: "0.68rem", color: "#64748B" }}>Duration: {srv.duration}</div>
                        </div>
                      </div>
                      <span style={{ fontSize: "0.88rem", fontWeight: 900, color: "#0F172A" }}>₹{srv.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Discount & Payment Method */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "4px" }}>Discount (₹)</label>
                <input
                  type="number"
                  value={customDiscount}
                  onChange={e => setCustomDiscount(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A", fontWeight: 600 }}
                />
              </div>
              <div>
                <label style={{ fontSize: "0.72rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "4px" }}>Payment Method</label>
                <select
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                  style={{ width: "100%", padding: "9px 12px", borderRadius: "10px", border: "1px solid #CBD5E1", fontSize: "0.82rem", outline: "none", color: "#0F172A", fontWeight: 600 }}
                >
                  <option value="Cash">Cash at Desk</option>
                  <option value="UPI (QR Scan)">UPI / QR Scan</option>
                  <option value="Card (POS)">Credit / Debit Card</option>
                  <option value="Pay Later">Pay Later</option>
                </select>
              </div>
            </div>

            {/* Bill Calculation Box */}
            <div style={{ background: "#F8FAFC", borderRadius: "14px", padding: "12px 14px", marginBottom: "16px", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "#64748B", marginBottom: "4px" }}>
                <span>Subtotal ({selectedServices.length} items)</span>
                <span>₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "#DC2626", marginBottom: "4px" }}>
                  <span>Discount Applied</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.76rem", color: "#64748B", marginBottom: "6px" }}>
                <span>GST (18%)</span>
                <span>₹{gstAmount}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "1rem", fontWeight: 900, color: "#0F172A", paddingTop: "6px", borderTop: "1px solid #E2E8F0" }}>
                <span>Total Amount Due</span>
                <span style={{ color: "#10B981" }}>₹{finalTotal}</span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleCreateBill}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                color: "#FFFFFF",
                fontSize: "0.9rem",
                fontWeight: 900,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 16px rgba(79,70,229,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <CheckCircle2 size={18} /> Complete Billing & Assign Chair
            </button>
          </>
        ) : (
          /* DIGITAL INVOICE RECEIPT VIEW */
          <div style={{ textAlign: "center", padding: "10px 0" }}>
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#ECFDF5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 12px" }}>
              <CheckCircle2 size={32} color="#10B981" />
            </div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, color: "#0F172A" }}>Invoice Generated!</h3>
            <p style={{ fontSize: "0.74rem", color: "#64748B", marginTop: "2px" }}>Receipt #{createdInvoiceData.id} • {createdInvoiceData.time}</p>

            <div style={{ background: "#F8FAFC", borderRadius: "16px", padding: "16px", margin: "16px 0", border: "1px solid #E2E8F0", textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Client:</span>
                <strong style={{ fontSize: "0.82rem", color: "#0F172A" }}>{createdInvoiceData.customerName}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Specialist:</span>
                <strong style={{ fontSize: "0.82rem", color: "#4F46E5" }}>{createdInvoiceData.specialist}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Services:</span>
                <strong style={{ fontSize: "0.82rem", color: "#0F172A" }}>{createdInvoiceData.services.join(", ")}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                <span style={{ fontSize: "0.75rem", color: "#64748B" }}>Payment Mode:</span>
                <strong style={{ fontSize: "0.82rem", color: "#10B981" }}>{createdInvoiceData.paymentMethod}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", paddingTop: "8px", borderTop: "1px solid #E2E8F0", fontSize: "1rem", fontWeight: 900 }}>
                <span>Total Paid:</span>
                <span style={{ color: "#10B981" }}>₹{createdInvoiceData.finalTotal}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setIsInvoiceGenerated(false);
                onClose();
              }}
              style={{
                width: "100%",
                padding: "13px",
                borderRadius: "14px",
                background: "#0F172A",
                color: "#FFFFFF",
                fontSize: "0.88rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer"
              }}
            >
              Done & Return to Desk
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
