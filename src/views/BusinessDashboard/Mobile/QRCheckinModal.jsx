import React, { useState, useEffect } from "react";
import {
  X,
  QrCode,
  CheckCircle2,
  AlertCircle,
  Scissors,
  User,
  Clock,
  Hash,
  Camera,
  Sparkles,
  Zap,
  Check
} from "lucide-react";

import { usePlatform } from "../../../context/PlatformContext";

export default function QRCheckinModal({ isOpen, onClose, onVerifySuccess }) {
  const { bookings } = usePlatform();
  const [enteredOtp, setEnteredOtp] = useState("");
  const [verifiedAppointment, setVerifiedAppointment] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scanMode, setScanMode] = useState("otp"); // Default to 'otp' for easy testing

  const activeWaitingList = (bookings || []).filter(
    b => b.status === "Waiting in Lounge" || b.status === "Waiting" || b.status === "Confirmed"
  );
  const targetBooking = activeWaitingList[0] || (bookings || [])[0];

  // Auto-set the latest booking's OTP when modal opens
  useEffect(() => {
    if (isOpen) {
      setErrorMessage(null);
      setVerifiedAppointment(null);
      if (targetBooking?.otp) {
        setEnteredOtp(targetBooking.otp);
      }
    }
  }, [isOpen, targetBooking?.otp]);

  if (!isOpen) return null;

  const handleVerifyOtp = (codeToVerify) => {
    const code = String(codeToVerify !== undefined ? codeToVerify : enteredOtp).trim().replace("#", "");
    if (!code) {
      setErrorMessage("Please enter an OTP or Booking ID.");
      return;
    }

    const match = (bookings || []).find(b => 
      String(b.otp) === code || 
      String(b.id) === code || 
      String(b.code) === code ||
      String(b.id).replace("APT-", "") === code
    );

    if (match) {
      setVerifiedAppointment({
        id: match.id,
        customer: match.customer || match.customerName || "Dilshan P.",
        service: match.serviceName || match.service || "Classic Haircut & Styling",
        staff: match.staffName || match.staff || "Rahul Sharma",
        time: match.time || "02:30 PM",
        price: `₹${match.totalPaid || match.price || 329}`,
        otp: match.otp || code,
        status: match.status
      });
      setErrorMessage(null);
    } else {
      setErrorMessage(`Invalid OTP "${code}". Please select or enter a valid booking OTP.`);
      setVerifiedAppointment(null);
    }
  };

  const handleSimulateQRScan = (specificOtp) => {
    const code = specificOtp || targetBooking?.otp || "4892";
    handleVerifyOtp(code);
  };

  const handleConfirmCheckin = () => {
    if (onVerifySuccess && verifiedAppointment) {
      onVerifySuccess(verifiedAppointment);
    }
    onClose();
  };

  // Extract distinct real OTPs from bookings for quick chips
  const dynamicBookingList = (bookings || []).filter(b => b.otp || b.id);

  return (
    <div 
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(15, 23, 42, 0.82)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        zIndex: 9999,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        padding: "0 10px"
      }}
    >
      <div 
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: "460px",
          background: "#FFFFFF",
          borderRadius: "28px 28px 0 0",
          padding: "22px 20px 28px",
          boxShadow: "0 -10px 40px rgba(0,0,0,0.35)",
          maxHeight: "88vh",
          overflowY: "auto"
        }}
        className="animate-slide-up"
      >
        {/* Modal Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "12px", background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <QrCode size={20} color="#4F46E5" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A", margin: 0 }}>Reception Check-in</h3>
              <p style={{ fontSize: "0.72rem", color: "#64748B", margin: 0 }}>Instant OTP Verification & QR Scanner</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ width: "34px", height: "34px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
            title="Close"
          >
            <X size={18} color="#64748B" />
          </button>
        </div>

        {/* View Switcher: OTP vs Camera */}
        <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "12px", marginBottom: "16px" }}>
          <button
            onClick={() => setScanMode("otp")}
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "9px",
              fontSize: "0.78rem",
              fontWeight: 800,
              border: "none",
              background: scanMode === "otp" ? "#FFFFFF" : "transparent",
              color: scanMode === "otp" ? "#4F46E5" : "#64748B",
              boxShadow: scanMode === "otp" ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <span>🔢 4-Digit OTP Entry</span>
          </button>
          <button
            onClick={() => setScanMode("camera")}
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "9px",
              fontSize: "0.78rem",
              fontWeight: 800,
              border: "none",
              background: scanMode === "camera" ? "#FFFFFF" : "transparent",
              color: scanMode === "camera" ? "#4F46E5" : "#64748B",
              boxShadow: scanMode === "camera" ? "0 2px 6px rgba(0,0,0,0.08)" : "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px"
            }}
          >
            <span>📷 Camera Simulator</span>
          </button>
        </div>

        {/* OTP ENTRY VIEW */}
        {scanMode === "otp" && !verifiedAppointment && (
          <div style={{ marginBottom: "16px" }}>
            {/* 1-Tap Auto-Try OTP Banner */}
            {targetBooking && (
              <div 
                onClick={() => {
                  const otpCode = targetBooking.otp || "4892";
                  setEnteredOtp(otpCode);
                  handleVerifyOtp(otpCode);
                }}
                style={{
                  background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
                  border: "1px solid #C7D2FE",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  marginBottom: "14px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  transition: "transform 0.15s ease"
                }}
                title="Click to auto-try this client's OTP"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "8px", background: "#4F46E5", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Zap size={16} color="#FFFFFF" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.76rem", fontWeight: 800, color: "#1E1B4B" }}>
                      ⚡ 1-Tap Auto-Try OTP: <span style={{ color: "#4F46E5" }}>#{targetBooking.otp || "4892"}</span>
                    </div>
                    <div style={{ fontSize: "0.68rem", color: "#6366F1" }}>
                      {targetBooking.customer || "Dilshan P."} • {targetBooking.serviceName}
                    </div>
                  </div>
                </div>
                <span style={{ fontSize: "0.72rem", fontWeight: 800, background: "#4F46E5", color: "#FFFFFF", padding: "4px 10px", borderRadius: "8px" }}>
                  Try OTP →
                </span>
              </div>
            )}

            <label style={{ fontSize: "0.76rem", fontWeight: 800, color: "#475569", display: "block", marginBottom: "6px" }}>
              Enter or Select Customer's 4-Digit OTP
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <input
                type="text"
                maxLength={8}
                placeholder="4892"
                value={enteredOtp}
                onChange={e => {
                  const val = e.target.value;
                  setEnteredOtp(val);
                  if (val.length === 4) {
                    handleVerifyOtp(val);
                  }
                }}
                onKeyDown={e => {
                  if (e.key === "Enter") handleVerifyOtp();
                }}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "14px",
                  border: "2px solid #CBD5E1",
                  fontSize: "1.3rem",
                  fontWeight: 900,
                  textAlign: "center",
                  letterSpacing: "0.2em",
                  color: "#0F172A",
                  outline: "none",
                  background: "#F8FAFC"
                }}
                autoFocus
              />
              <button
                onClick={() => handleVerifyOtp()}
                style={{
                  padding: "0 22px",
                  borderRadius: "14px",
                  background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 14px rgba(79,70,229,0.35)"
                }}
              >
                Verify
              </button>
            </div>

            {/* Quick Test OTP Chips */}
            <div style={{ marginTop: "8px" }}>
              <span style={{ fontSize: "0.7rem", color: "#94A3B8", fontWeight: 700, display: "block", marginBottom: "6px" }}>
                Active Booking OTPs (Tap any to verify):
              </span>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {dynamicBookingList.slice(0, 4).map(b => {
                  const otpCode = b.otp || (b.id ? b.id.replace("APT-", "").slice(0, 4) : "4892");
                  return (
                    <button
                      key={b.id}
                      onClick={() => {
                        setEnteredOtp(otpCode);
                        handleVerifyOtp(otpCode);
                      }}
                      style={{
                        fontSize: "0.72rem",
                        padding: "4px 10px",
                        borderRadius: "8px",
                        background: "#F8FAFC",
                        border: "1px solid #CBD5E1",
                        cursor: "pointer",
                        fontWeight: 800,
                        color: "#4F46E5",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      <span>#{otpCode}</span>
                      <span style={{ color: "#64748B", fontWeight: 600 }}>({b.customer?.split(" ")[0] || "Guest"})</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* CAMERA SCANNER VIEW */}
        {scanMode === "camera" && !verifiedAppointment && (
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div style={{
              width: "200px",
              height: "200px",
              margin: "0 auto",
              background: "#090D16",
              borderRadius: "20px",
              position: "relative",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "2px solid #4F46E5",
              boxShadow: "0 0 24px rgba(79,70,229,0.3)"
            }}>
              {/* Laser Scanning Beam Animation */}
              <div style={{
                position: "absolute",
                top: "20%",
                left: 0,
                right: 0,
                height: "3px",
                background: "#10B981",
                boxShadow: "0 0 12px #10B981, 0 0 24px #10B981"
              }} />

              <QrCode size={110} color="rgba(255,255,255,0.4)" />
            </div>

            <p style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "10px" }}>
              Camera simulation active — Point at customer's digital boarding pass
            </p>

            <button
              onClick={() => handleSimulateQRScan(targetBooking?.otp)}
              style={{
                marginTop: "10px",
                padding: "10px 18px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)",
                color: "#FFFFFF",
                fontSize: "0.8rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 14px rgba(79,70,229,0.3)"
              }}
            >
              Simulate Scan ({targetBooking?.customer || "Dilshan P."} • #{targetBooking?.otp || "4892"})
            </button>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "14px", padding: "10px 14px", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "#DC2626", fontSize: "0.76rem", fontWeight: 700 }}>
            <AlertCircle size={16} flexShrink={0} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Verified Appointment Card */}
        {verifiedAppointment && (
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "20px", padding: "18px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
              <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#10B981", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Check size={16} color="#FFFFFF" strokeWidth={3} />
              </div>
              <span style={{ fontSize: "0.9rem", fontWeight: 900, color: "#065F46" }}>Boarding Pass Verified Successfully!</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.8rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857", fontWeight: 600 }}>Client Name:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.customer}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857", fontWeight: 600 }}>Service Booked:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.service}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857", fontWeight: 600 }}>Assigned Specialist:</span>
                <strong style={{ color: "#4F46E5" }}>{verifiedAppointment.staff}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857", fontWeight: 600 }}>Slot Time:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.time}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857", fontWeight: 600 }}>Desk OTP Verified:</span>
                <strong style={{ color: "#059669", background: "#D1FAE5", padding: "1px 8px", borderRadius: "6px" }}>
                  #{verifiedAppointment.otp}
                </strong>
              </div>
            </div>

            <button
              onClick={handleConfirmCheckin}
              style={{
                width: "100%",
                marginTop: "16px",
                padding: "13px",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #059669, #10B981)",
                color: "#FFFFFF",
                fontSize: "0.88rem",
                fontWeight: 900,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 6px 18px rgba(16,185,129,0.35)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px"
              }}
            >
              <CheckCircle2 size={18} />
              <span>Confirm Check-in & Mark In-Service</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
