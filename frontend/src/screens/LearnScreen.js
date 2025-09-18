import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function LearnScreen() {
  const navigate = useNavigate();
  const modules = [
    {
      title: "Personal Safety Basics",
      desc: "Quick tips and common-sense ways to stay safe day-to-day.",
      level: "Beginner",
      route: "/learn/personal-safety"
    },
    {
      title: "Emergency Response Training",
      desc: "How to act quickly and calmly in dangerous situations.",
      level: "Intermediate",
      route: "/learn/emergency-response"
    },
    {
      title: "Self-Defense Moves",
      desc: "Step-by-step video and techniques for all ages.",
      level: "All Levels",
      route: "/learn/self-defense"
    },
    {
      title: "Online Safety & Scam Awareness",
      desc: "How to avoid digital risks, scams, and data leaks.",
      level: "Beginner",
      route: "/learn/online-safety"
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#181C24 60%,#232946 100%)" }}>
      <Navbar />
      <main className="learn-main" style={{
        maxWidth: 900,
        margin: "48px auto 0 auto",
        padding: "32px 16px",
        borderRadius: 25,
        background: "linear-gradient(90deg,#22264A 82%, #23253C 100%)",
        boxShadow: "0 7px 28px rgba(110,120,224,0.13)",
        color: "#FFD600"
      }}>
        <h1 style={{
          color: "#FFD600",
          fontSize: "clamp(34px,7vw,54px)",
          fontWeight: 900,
          letterSpacing: "2px",
          marginBottom: 20,
          textAlign: "center"
        }}>Learn Safety</h1>
        <div style={{
          color: "#B8AFFF",
          fontSize: 18,
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 40,
        }}>Sharpen your skills and knowledge in staying safe—online, in public, and at home.</div>
        <section style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 34,
          justifyContent: "center"
        }}>
          {modules.map((m, i) => (
            <div
              key={m.title}
              tabIndex={0}
              role="button"
              onClick={() => navigate(m.route)}
              onKeyPress={e => { if (e.key === "Enter") navigate(m.route) }}
              style={{
                flex: "1 1 320px",
                maxWidth: 340,
                background: "#191D2E",
                border: "2.2px solid #7C3AED",
                borderRadius: 18,
                padding: "23px 21px 31px 21px",
                color: "#FFD600",
                textAlign: "left",
                boxShadow: "0 2px 18px #8b5cf633",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                cursor: "pointer",
                outline: "none",
                transition: "box-shadow .13s, transform .14s"
              }}
              className="module-card"
            >
              <h2 style={{
                color: "#FFD600",
                fontSize: 23,
                margin: 0,
                letterSpacing: ".5px",
                fontWeight: 800
              }}>
                {m.title}
              </h2>
              <div style={{
                color: "#B8AFFF",
                fontSize: 17,
                fontWeight: 590,
                margin: "14px 0 7px 0"
              }}>{m.desc}</div>
              <span style={{
                fontSize: 15,
                color: "#7C3AED",
                fontWeight: 700,
                background: "#F5F6FF10",
                borderRadius: "10px",
                padding: "6px 15px",
                marginTop: "auto",
              }}>{m.level}</span>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 780px) {
          .learn-main { 
            padding: 3vw 2vw !important; 
            max-width: 100vw !important; 
          }
          h1 { font-size: 26px !important; }
        }
        .module-card:focus, .module-card:hover {
          box-shadow: 0 4px 23px #9149fc55;
          transform: scale(1.032);
          border-color: #FFD600;
        }
      `}</style>
    </div>
  );
}
