import React from 'react';
import Navbar from '../components/Navbar'; // Adjust path if needed

export default function SosScreen({
  onHome, onQuests, onGames, onLearn, onProfile
}) {
  return (
    <div style={styles.bg}>
      <Navbar
        active="sos"
        onHome={onHome}
        onQuests={onQuests}
        onGames={onGames}
        onLearn={onLearn}
        onSOS={() => {}} // already here
        onProfile={onProfile}
      />

      <div style={styles.page}>
        <div style={styles.card}>
          <img
            src="https://img.icons8.com/color/96/000000/alarm.png"
            alt="SOS Alert"
            style={{marginBottom: 18}}
          />
          <div style={styles.sosText}>SOS Activated</div>
          <div style={styles.descText}>
            We are sending your alert.<br />
            Help is on its way, please stay calm.
          </div>
          <button style={styles.sosBtn} onClick={() => window.open('tel:112')}>
            <span role="img" aria-label="call" style={{marginRight: 8}}>📞</span>
            Call Emergency Contact
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    display: "flex",
    flexDirection: "column",
    
  },
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  card: {
    background: "#23253C",
    borderRadius: 28,
    boxShadow: "0 6px 42px #0008",
    padding: "46px 32px 34px 32px",
    minWidth: 360,
    marginTop: 64,
    display: "flex", flexDirection: "column", alignItems: "center"
  },
  sosText: {
    color: "#dc2626",
    fontWeight: 900,
    fontSize: 33,
    letterSpacing: 2,
    marginBottom: 9,
    textShadow: "0 1px 6px #fbbfbf55"
  },
  descText: {
    color: "#f4f4f4",
    fontSize: 17,
    textAlign: "center",
    marginBottom: 28
  },
  sosBtn: {
    background: "#dc2626",
    color: "#fff",
    fontWeight: 700,
    fontSize: 19,
    border: "none",
    borderRadius: 8,
    padding: "15px 36px",
    marginBottom: 12,
    marginTop: 0,
    boxShadow: "0 2px 18px #dc262666",
    cursor: "pointer",
    letterSpacing:1,
    transition: 'background 0.18s'
  }
};
