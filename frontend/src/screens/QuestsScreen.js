import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function QuestsScreen() {
  // Example quest data—customize as needed!
  const quests = [
    {
      title: "Explore a New Safe Route",
      status: "Active",
      desc: "Discover a new safe route to your school or college and submit a safety report on StepSafe.",
      points: 60
    },
    {
      title: "Invite a Friend",
      status: "Active",
      desc: "Refer someone to StepSafe. Both you and your friend earn bonus points!",
      points: 40
    },
    {
      title: "Attend a Safety Workshop",
      status: "Completed",
      desc: "Complete a StepSafe online safety webinar.",
      points: 100
    },
    {
      title: "First SOS Simulation",
      status: "Completed",
      desc: "Successfully complete your first 'SOS' simulation.",
      points: 35
    },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#181C24 60%,#232946 100%)" }}>
      <Navbar />
      <main className="quests-main" style={{
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
        }}>StepSafe Quests</h1>
        <div style={{
          color: "#B8AFFF",
          fontSize: 18,
          textAlign: "center",
          fontWeight: 600,
          marginBottom: 38,
        }}>Complete quests to earn Aura Points, badges and improve your real-world safety IQ!</div>

        <section style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 34,
          justifyContent: "center"
        }}>
          {quests.map((q, i) => (
            <div key={q.title + q.status} style={{
              flex: "1 1 320px",
              maxWidth: 340,
              background: "#191D2E",
              border: q.status === "Active" ? "2.2px solid #FFD600" : "2.2px solid #7C3AED",
              borderRadius: 18,
              padding: "22px 19px 28px 19px",
              color: "#FFD600",
              textAlign: "left",
              boxShadow: "0 2px 18px #8b5cf633",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              opacity: q.status !== "Active" ? 0.7 : 1
            }}>
              <div style={{
                position: "absolute",
                right: 13,
                top: 13,
                background: q.status === "Active" ? "#FFD600" : "#7C3AED",
                color: q.status === "Active" ? "#191D2E" : "#FFD600",
                fontWeight: 795,
                fontSize: 14,
                borderRadius: 13,
                padding: "5px 15px",
                letterSpacing: "1px"
              }}>{q.status}</div>
              <h2 style={{
                color: "#FFD600",
                fontSize: 22,
                margin: "0 0 2px 0",
                fontWeight: 800
              }}>
                {q.title}
              </h2>
              <div style={{
                color: "#B8AFFF",
                fontSize: 16,
                fontWeight: 590,
                margin: "13px 0 7px 0"
              }}>{q.desc}</div>
              <span style={{
                fontSize: 15,
                color: "#A5B4FC",
                fontWeight: 700,
                background: "#2B2F47",
                borderRadius: "9px",
                padding: "6px 13px",
                marginTop: "auto"
              }}>
                <span role="img" aria-label="lightning" style={{marginRight:2}}>⚡</span>
                {q.points} Aura Points
              </span>
            </div>
          ))}
        </section>
      </main>
      <Footer />
      <style>{`
        @media (max-width: 780px) {
          .quests-main {
            padding: 3vw 2vw !important;
            max-width: 100vw !important;
          }
          h1 { font-size: 26px !important; }
        }
      `}</style>
    </div>
  );
}
