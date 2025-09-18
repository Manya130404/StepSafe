import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


export default function PersonalSafetyPage() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#181C24 60%,#232946 100%)"
    }}>
      <Navbar />

      <main style={{
        maxWidth: 850,
        margin: "48px auto 0 auto",
        padding: "32px 16px",
        borderRadius: 25,
        background: "linear-gradient(90deg,#22264A 82%, #23253C 100%)",
        boxShadow: "0 7px 28px rgba(110,120,224,0.13)",
        color: "#FFD600"
      }}>
        <h1 style={{
          color: "#FFD600",
          fontSize: "clamp(29px,6vw,46px)",
          fontWeight: 900,
          letterSpacing: "2px",
          textAlign: "center",
          marginBottom: 17
        }}>Personal Safety Basics</h1>
        <div style={{
          color: "#B8AFFF",
          fontSize: 18,
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 32
        }}>
          Simple, practical steps for staying safe in daily life. Start here, build your confidence for all adventures!
        </div>
        <section style={{
          background: "#191D2E",
          border: "2px solid #7C3AED",
          borderRadius: 22,
          padding: 32,
          color: "#FFD600",
          marginBottom: 32,
          boxShadow: "0 2px 12px #7c3aed25"
        }}>
          <h2 style={{ color: "#FFD600", marginBottom: 12, fontSize: 22 }}>Quick Tips:</h2>
          <ul style={{
            color: "#ffeeb2",
            fontSize: 16.5,
            paddingLeft: 26,
            margin: "0 0 25px 0",
            lineHeight: "1.6"
          }}>
            <li>Share your travel details with someone you trust.</li>
            <li>Trust your instincts—if a situation feels wrong, remove yourself.</li>
            <li>Stick to well-lit, populated paths after dark.</li>
            <li>Keep emergency numbers on speed dial.</li>
            <li>Carry a charged phone and ID at all times.</li>
            <li>Stay alert: avoid excessive phone/music distraction in public.</li>
            <li>Learn and use basic self-defense stances.</li>
          </ul>
          <div style={{
            color: "#B8AFFF",
            fontWeight: 500,
            marginTop: 10,
            fontSize: 15
          }}>
            For more safety drills, check the other modules!
          </div>
        </section>
      </main>
      <button
        onClick={() => navigate("/learn")}
        style={{
          position: "fixed",
          left: 28,
          top: 88,
          background: "#FFD600",
          color: "#22264A",
          fontWeight: 700,
          border: "none",
          borderRadius: 99,
          boxShadow: "0 2px 12px #FFD60033",
          padding: "11px 26px",
          fontSize: 17,
          cursor: "pointer",
          zIndex: 2228
        }}
      >← Back to Learn</button>
      <Footer />
      <style>{`
        @media (max-width: 780px) {
          main { 
            padding: 3vw 2vw !important;
            max-width: 100vw !important;
          }
          button[style] {
            left: 7px !important; top: 60px !important; padding: 8px 14px !important; font-size: 15px !important; 
          }
        }
      `}</style>
    </div>
  );
}
