import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Button style snippets
const journeyButton = {
  background: "#232946",
  color: "#FFD600",
  border: "2px solid #B8AFFF",
  borderRadius: 11,
  fontWeight: 700,
  fontSize: 16,
  padding: "8px 17px",
  cursor: "pointer",
  minWidth: 92
};
const safeButton = {
  display: "block",
  background: "#7C3AED",
  color: "#FFD600",
  border: "none",
  borderRadius: 7,
  fontWeight: 700,
  fontSize: 16,
  padding: "11px 20px",
  margin: "8px 0",
  width: "100%",
  boxShadow: "0 1px 8px #7C3AED33",
  cursor: "pointer"
};
const dangerButton = {
  ...safeButton,
  background: "#F8274C",
  color: "#fff",
  margin: "8px 0"
};
const callButton = {
  background: "#FFD600",
  color: "#23264A",
  fontWeight: 600,
  borderRadius: 8,
  border: "none",
  fontSize: 15,
  padding: "7px 19px",
  cursor: "pointer"
};

export default function SosScreen() {
  const navigate = useNavigate();
  const [popup, setPopup] = useState("");

  const contacts = [
    { name: "Mom", type: "Family" },
    { name: "Emergency Contact", type: "Friend" }
  ];
  const journeyTimes = ["15 Minutes", "30 Minutes", "1 Hour", "2 Hours"];

  function closePopup() {
    setPopup("");
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#181C24 60%,#232946 100%)" }}>
      <Navbar
        onHome={() => navigate('/home')}
        onQuests={() => navigate('/quests')}
        onGames={() => navigate('/games')}
        onLearn={() => navigate('/learn')}
        onProfile={() => navigate('/profile')}
        onSOS={() => navigate('/sos')}
      />

      <main className="sos-main" style={{
        maxWidth: 820,
        margin: "44px auto 0 auto",
        padding: 24,
        borderRadius: 25,
        background: "linear-gradient(90deg,#22264A 82%, #23253C 100%)",
        boxShadow: "0 7px 28px rgba(110,120,224,0.17)",
        color: "#FFD600"
      }}>
        {/* SOS Banner */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 64, marginBottom: 18 }}>🔔</div>
          <h1 style={{
            fontSize: "clamp(32px,7vw,56px)",
            fontWeight: 900, color: "#F8274C", margin: 0
          }}>
            SOS Activated
          </h1>
          <div style={{ color: "#FFD600", fontWeight: 700, marginBottom: 10, fontSize: 21 }}>
            We are sending your alert
          </div>
          <div style={{ color: "#B8AFFF", fontWeight: 600, fontSize: 18 }}>
            Your emergency contacts are being notified.<br />
            Stay put. Help is on the way.
          </div>
        </div>
        {/* Journey Tracker */}
        <section style={{ margin: "38px 0", background: "#191D2E", borderRadius: 14, padding: "18px 15px" }}>
          <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
            Safe Journey Tracker
          </div>
          <div style={{ color: "#C8CBF7", fontSize: 16, marginBottom: 12 }}>
            Set a timer for your journey. If you don't check in, we'll alert your contacts.
          </div>
          <div style={{ display: "flex", gap: 13, flexWrap: "wrap" }}>
            {journeyTimes.map(t =>
              <button key={t}
                style={journeyButton}
                onClick={() => setPopup(`timer-${t}`)}
              >
                {t}
              </button>
            )}
          </div>
        </section>
        {/* Safe Haven Locator */}
        <section style={{ margin: "30px 0", background: "#191D2E", borderRadius: 14, padding: "18px 15px" }}>
          <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
            Safe Haven Locator
          </div>
          <div>
            <button style={safeButton} onClick={()=>setPopup("police")}>Nearest Police Station</button>
            <button style={safeButton} onClick={()=>setPopup("hospital")}>Nearest Hospital</button>
            <button style={safeButton} onClick={()=>setPopup("places")}>24/7 Safe Places</button>
          </div>
        </section>
        {/* Deception Tools */}
        <section style={{ margin: "30px 0", background: "#191D2E", borderRadius: 14, padding: "18px 15px" }}>
          <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
            Deception Tools
          </div>
          <button style={dangerButton} onClick={()=>setPopup("fakecall")}>Fake Emergency Call</button>
          <button style={dangerButton} onClick={()=>setPopup("distraction")}>Distraction Sound</button>
        </section>
        {/* Emergency Contacts */}
        <section style={{ margin: "30px 0", background: "#191D2E", borderRadius: 14, padding: "18px 15px" }}>
          <div style={{ color: "#FFD600", fontWeight: 700, fontSize: 20, marginBottom: 10 }}>
            Emergency Contacts
          </div>
          {contacts.map(c => (
            <div key={c.name} style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              background: "#232946", color: "#FFD600", borderRadius: 10, padding: "7px 14px",
              margin: "7px 0"
            }}>
              <span><b>{c.name}</b> <span style={{ color: "#B8AFFF" }}>({c.type})</span></span>
              <button style={callButton} onClick={()=>setPopup(`call-${c.name}`)}>Call</button>
            </div>
          ))}
        </section>
      </main>

      <Footer />

      {/* Popup Modal */}
      {popup && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(28, 24, 40, 0.68)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 8888
        }}>
          <div style={{
            background: "#23253C",
            borderRadius: 18,
            padding: "34px 36px",
            minWidth: 280,
            color: "#FFD600",
            textAlign: "center",
            boxShadow: "0 8px 38px #232946cc"
          }}>
            {popup.startsWith("timer-") && (
              <>
                <h2>Journey Timer Set</h2>
                <p>You'll be checked in after <span style={{ color: "#B8AFFF" }}>{popup.replace("timer-", "")}</span>. If you don't check in, your contacts will be notified.</p>
              </>
            )}
            {popup==="police" && (
              <>
                <h2>Police Station</h2>
                <p>Finding the nearest police station...</p>
              </>
            )}
            {popup==="hospital" && (
              <>
                <h2>Hospital Locator</h2>
                <p>Finding the nearest hospital...</p>
              </>
            )}
            {popup==="places" && (
              <>
                <h2>Safe Places Nearby</h2>
                <p>Listing certified 24/7 safe places for you...</p>
              </>
            )}
            {popup==="fakecall" && (
              <>
                <h2>Fake Emergency Call</h2>
                <p>A simulated emergency call audio will play.</p>
              </>
            )}
            {popup==="distraction" && (
              <>
                <h2>Distraction Sound</h2>
                <p>A noise or sound will play on your phone.</p>
              </>
            )}
            {popup.startsWith("call-") && (
              <>
                <h2>Calling {popup.replace("call-", "")}...</h2>
              </>
            )}
            <button
              style={{
                marginTop: 24,
                background: "#FFD600",
                color: "#23264A",
                padding: "10px 28px",
                borderRadius: 10,
                border: "none",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
              }}
              onClick={closePopup}
            >OK</button>
          </div>
        </div>
      )}

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 780px) {
          .sos-main {
            padding: 2vw !important;
            max-width: 100vw !important;
          }
          h1 { font-size: 34px !important; }
        }
      `}</style>
    </div>
  );
}
