import React, { useState } from "react";

const palette = {
  primary: "#e3b06d",
  accent: "#fff3e0",
  border: "#b58c41",
  dark: "#413019",
  light: "#fdf6ed"
};

function JoinResearchTeam() {
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [form, setForm] = useState({ email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleJoin = () => setShowPopup(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(false);
    setShowThankYou(true);
    setTimeout(() => {
      setShowThankYou(false);
      setForm({ email: "", message: "" });
    }, 2000);
  };

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      background: `linear-gradient(120deg, ${palette.accent} 50%, ${palette.primary} 100%)`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "'Nunito', 'Roboto', Arial, sans-serif",
      position: "relative",
      boxSizing: "border-box"
    }}>
      {/* Central Hero Card */}
      <div
        style={{
          width: "100%",
          maxWidth: "640px",
          background: palette.light,
          borderRadius: "2rem",
          boxShadow: "0 10px 38px rgba(190,125,37,0.17)",
          border: `2px solid ${palette.border}`,
          padding: "64px 38px 54px 38px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontWeight: 800,
            fontSize: "2.9rem",
            color: palette.dark,
            marginBottom: "22px",
            letterSpacing: "-1.2px",
            lineHeight: "1.1"
          }}
        >
          Join as a Researcher
        </h1>
        <div
          style={{
            borderRadius: "1.1rem",
            padding: "25px",
            background: palette.accent,
            color: palette.dark,
            boxShadow: "0 2px 13px rgba(227,176,109,0.09)",
            marginBottom: "38px",
            fontWeight: 540,
            fontSize: "1.25rem",
            textAlign: "center",
            lineHeight: "1.5"
          }}
        >
          Become part of an enthusiastic research team.<br />
          Collaborate on projects, share ideas, and build something impactful!
        </div>
        <button
          onClick={handleJoin}
          style={{
            width: "80%",
            maxWidth: "320px",
            padding: "20px",
            fontWeight: 700,
            fontSize: "1.25rem",
            color: "#fff",
            background: `linear-gradient(90deg, ${palette.primary} 60%, ${palette.border})`,
            border: "none",
            borderRadius: "1rem",
            boxShadow: "0 4px 12px rgba(190,125,37,0.13)",
            cursor: "pointer",
            transition: "filter 0.18s",
            marginTop: "16px",
            marginBottom: "8px",
            letterSpacing: ".5px"
          }}
        >
          Join Team
        </button>
      </div>
      {/* Pop-up form bottom right */}
      <div
        style={{
          position: "fixed",
          right: "28px",
          bottom: showPopup ? "28px" : "-320px",
          background: palette.accent,
          borderRadius: "1.2rem",
          border: `2px solid ${palette.border}`,
          boxShadow: "0 11px 24px rgba(190,125,37,0.21)",
          zIndex: 1000,
          width: "350px",
          maxWidth: "90vw",
          padding: "32px 28px 24px 28px",
          transition: "bottom 0.4s cubic-bezier(.44,.03,.56,.94), opacity 0.3s ease",
          opacity: showPopup ? 1 : 0,
          pointerEvents: showPopup ? "auto" : "none",
        }}
      >
        <form onSubmit={handleSubmit} style={{ margin: "0" }}>
          <h2 style={{
            marginBottom: "18px",
            color: palette.dark,
            fontWeight: 700,
            fontSize: "1.3rem",
            textAlign: "center"
          }}>
            Get in touch
          </h2>
          <label
            style={{ fontWeight: 550, fontSize: "1.08rem", marginBottom: 7, color: palette.dark, display: "block" }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            style={{
              width: "100%",
              padding: "13px 13px",
              borderRadius: "0.8rem",
              border: `2px solid ${palette.primary}`,
              fontSize: "1.07rem",
              background: "#fff",
              marginBottom: "16px",
              color: palette.dark,
              outline: "none",
              fontWeight: 530,
              boxSizing: "border-box",
            }}
          />
          <label
            style={{ fontWeight: 550, fontSize: "1.08rem", marginBottom: 7, color: palette.dark, display: "block" }}>
            Message
          </label>
          <textarea
            name="message"
            required
            value={form.message}
            onChange={handleChange}
            placeholder="Say hello..."
            rows={3}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "0.8rem",
              border: `2px solid ${palette.primary}`,
              fontSize: "1.07rem",
              background: "#fff",
              color: palette.dark,
              outline: "none",
              fontWeight: 530,
              marginBottom: "12px",
              boxSizing: "border-box"
            }}
          />
          <button
            type="submit"
            style={{
              background: palette.primary,
              color: "#fff",
              padding: "12px 28px",
              border: "none",
              borderRadius: "1rem",
              fontWeight: "700",
              fontSize: "1.1rem",
              float: "right",
              marginTop: "9px",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
      {/* Thank You popup bottom right */}
      <div
        style={{
          position: "fixed",
          right: "28px",
          bottom: showThankYou ? "28px" : "-250px",
          transform: "none",
          background: palette.primary,
          color: "#fff",
          borderRadius: "1.2rem",
          fontWeight: 620,
          fontSize: "1.19rem",
          border: `2px solid ${palette.border}`,
          boxShadow: "0 9px 24px rgba(190,125,37,.17)",
          padding: "25px 22px",
          zIndex: 1100,
          textAlign: "center",
          opacity: showThankYou ? 1 : 0,
          pointerEvents: showThankYou ? "auto" : "none",
          transition: "bottom 0.35s cubic-bezier(.41,.12,.74,1), opacity 0.3s ease",
        }}
      >
        Thank you for your response, will contact you soon
      </div>
      {/* Responsive breakpoints */}
      <style>
        {`
          @media (max-width: 700px) {
            div[style*="maxWidth: 640px"] {
              padding: 32px 8vw !important;
            }
            div[style*="width: 350px"] {
              width: 95vw !important;
              padding: 20px 5vw !important;
              right: 4vw !important;
            }
          }
        `}
      </style>
    </div>
  );
}

export default JoinResearchTeam;
