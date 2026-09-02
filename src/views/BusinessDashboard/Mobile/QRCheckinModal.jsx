import React, { useState } from "react";
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
  Sparkles
} from "lucide-react";

export default function QRCheckinModal({ isOpen, onClose, onVerifySuccess }) {
  if (!isOpen) return null;

  const [enteredOtp, setEnteredOtp] = useState("");
  const [verifiedAppointment, setVerifiedAppointment] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [scanMode, setScanMode] = useState("camera"); // 'camera' | 'otp'

  const mockDatabase = [
    { otp: "4892", id: "APT-98241", customer: "Dilshan Perera", service: "Classic Haircut & Styling", staff: "Rahul Sharma", time: "02:30 PM", price: "₹329" },
    { otp: "1923", id: "APT-87120", customer: "Arjun Kapoor", service: "Beard Crafting Combo", staff: "Vikram Singh", time: "10:30 AM", price: "₹499" },
    { otp: "6612", id: "APT-76510", customer: "Rohan Malhotra", service: "Royal Deluxe Grooming", staff: "Priya Verma", time: "05:00 PM", price: "₹899" }
  ];

  const handleVerifyOtp = (codeToVerify) => {
    const code = codeToVerify || enteredOtp;
    const match = mockDatabase.find(m => m.otp === code);

    if (match) {
      setVerifiedAppointment(match);
      setErrorMessage(null);
    } else {
      setErrorMessage("Invalid Check-in Pass or OTP. Please check with customer.");
      setVerifiedAppointment(null);
    }
  };

  const handleSimulateQRScan = () => {
    // Simulate camera scanning Dilshan's QR code
    setTimeout(() => {
      handleVerifyOtp("4892");
    }, 800);
  };

  const handleConfirmCheckin = () => {
    if (onVerifySuccess && verifiedAppointment) {
      onVerifySuccess(verifiedAppointment);
    }
    onClose();
  };

  return (
    <div style={{
      position: "absolute",
      inset: 0,
      background: "rgba(15, 23, 42, 0.8)",
      backdropFilter: "blur(8px)",
      WebkitBackdropFilter: "blur(8px)",
      zIndex: 9999,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
    }}>
      <div style={{
        width: "100%",
        maxWidth: "440px",
        background: "#FFFFFF",
        borderRadius: "28px 28px 0 0",
        padding: "20px 18px 24px",
        boxShadow: "0 -10px 40px rgba(0,0,0,0.3)",
        maxHeight: "85vh",
        overflowY: "auto"
      }}>
        {/* Modal Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "10px", background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <QrCode size={18} color="#4F46E5" />
            </div>
            <div>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, color: "#0F172A" }}>Reception Check-in Scanner</h3>
              <p style={{ fontSize: "0.68rem", color: "#64748B" }}>Scan customer Apple/Android Pass QR or enter 4-digit OTP</p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ width: "32px", height: "32px", borderRadius: "50%", background: "#F1F5F9", border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <X size={16} color="#64748B" />
          </button>
        </div>

        {/* View Switcher: Camera View vs Keypad OTP */}
        <div style={{ display: "flex", background: "#F1F5F9", padding: "3px", borderRadius: "12px", marginBottom: "14px" }}>
          <button
            onClick={() => { setScanMode("camera"); handleSimulateQRScan(); }}
            style={{
              flex: 1,
              padding: "7px",
              borderRadius: "9px",
              fontSize: "0.75rem",
              fontWeight: 800,
              border: "none",
              background: scanMode === "camera" ? "#FFFFFF" : "transparent",
              color: scanMode === "camera" ? "#4F46E5" : "#64748B",
              boxShadow: scanMode === "camera" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer"
            }}
          >
            📷 Camera Scanner
          </button>
          <button
            onClick={() => setScanMode("otp")}
            style={{
              flex: 1,
              padding: "7px",
              borderRadius: "9px",
              fontSize: "0.75rem",
              fontWeight: 800,
              border: "none",
              background: scanMode === "otp" ? "#FFFFFF" : "transparent",
              color: scanMode === "otp" ? "#4F46E5" : "#64748B",
              boxShadow: scanMode === "otp" ? "0 2px 6px rgba(0,0,0,0.06)" : "none",
              cursor: "pointer"
            }}
          >
            🔢 4-Digit OTP Entry
          </button>
        </div>

        {/* CAMERA SCANNER VIEW */}
        {scanMode === "camera" && !verifiedAppointment && (
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <div style={{
              width: "220px",
              height: "220px",
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
                height: "2px",
                background: "#10B981",
                boxShadow: "0 0 10px #10B981, 0 0 20px #10B981"
              }} />

              <QrCode size={120} color="rgba(255,255,255,0.4)" />
            </div>

            <p style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "10px" }}>
              Point reception camera at customer's phone boarding pass
            </p>

            <button
              onClick={handleSimulateQRScan}
              style={{
                marginTop: "10px",
                padding: "8px 16px",
                borderRadius: "10px",
                background: "#EEF2FF",
                color: "#4F46E5",
                fontSize: "0.76rem",
                fontWeight: 800,
                border: "none",
                cursor: "pointer"
              }}
            >
              Simulate Scan Customer QR (Pass #4892)
            </button>
          </div>
        )}

        {/* OTP KEYPAD VIEW */}
        {scanMode === "otp" && !verifiedAppointment && (
          <div style={{ marginBottom: "16px" }}>
            <label style={{ fontSize: "0.74rem", fontWeight: 700, color: "#64748B", display: "block", marginBottom: "6px" }}>
              Enter 4-Digit Desk OTP
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
              <input
                type="text"
                maxLength={4}
                placeholder="4892"
                value={enteredOtp}
                onChange={e => setEnteredOtp(e.target.value)}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "12px",
                  border: "2px solid #CBD5E1",
                  fontSize: "1.4rem",
                  fontWeight: 900,
                  textAlign: "center",
                  letterSpacing: "0.3em",
                  color: "#0F172A",
                  outline: "none"
                }}
              />
              <button
                onClick={() => handleVerifyOtp()}
                style={{
                  padding: "0 20px",
                  borderRadius: "12px",
                  background: "linear-gradient(135deg, #4F46E5, #6366F1)",
                  color: "#FFFFFF",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                  border: "none",
                  cursor: "pointer"
                }}
              >
                Verify
              </button>
            </div>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
              <span style={{ fontSize: "0.68rem", color: "#94A3B8" }}>Quick Test OTPs:</span>
              {["4892", "1923", "6612"].map(testOtp => (
                <button
                  key={testOtp}
                  onClick={() => { setEnteredOtp(testOtp); handleVerifyOtp(testOtp); }}
                  style={{ fontSize: "0.68rem", padding: "2px 6px", borderRadius: "6px", background: "#F1F5F9", border: "1px solid #E2E8F0", cursor: "pointer", fontWeight: 700, color: "#4F46E5" }}
                >
                  #{testOtp}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Error Alert */}
        {errorMessage && (
          <div style={{ background: "#FEF2F2", border: "1px solid #FECACA", borderRadius: "12px", padding: "10px 12px", marginBottom: "14px", display: "flex", alignItems: "center", gap: "8px", color: "#DC2626", fontSize: "0.75rem", fontWeight: 700 }}>
            <AlertCircle size={16} />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Verified Appointment Card */}
        {verifiedAppointment && (
          <div style={{ background: "#ECFDF5", border: "1px solid #A7F3D0", borderRadius: "18px", padding: "16px", marginBottom: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "10px" }}>
              <CheckCircle2 size={18} color="#10B981" />
              <span style={{ fontSize: "0.85rem", fontWeight: 900, color: "#065F46" }}>Verified Boarding Pass Found!</span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "6px", fontSize: "0.78rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857" }}>Client Name:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.customer}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857" }}>Service Booked:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.service}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857" }}>Assigned Specialist:</span>
                <strong style={{ color: "#4F46E5" }}>{verifiedAppointment.staff}</strong>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#047857" }}>Slot Time:</span>
                <strong style={{ color: "#065F46" }}>{verifiedAppointment.time}</strong>
              </div>
            </div>

            <button
              onClick={handleConfirmCheckin}
              style={{
                width: "100%",
                marginTop: "14px",
                padding: "12px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #059669, #10B981)",
                color: "#FFFFFF",
                fontSize: "0.85rem",
                fontWeight: 900,
                border: "none",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(16,185,129,0.3)"
              }}
            >
              ✓ Confirm Check-in & Mark In-Service
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
