import React from 'react';
import Navbar from '../components/Navbar'; // adjust the path if needed
import Footer from '../components/Footer'; // adjust the path if needed

export default function SosScreen({
  onHome, onQuests, onGames, onLearn, onProfile
}) {
  return (
    <>
      <div style={styles.bg}>
        <Navbar
          active="sos"
          onHome={onHome}
          onQuests={onQuests}
          onGames={onGames}
          onLearn={onLearn}
          onSOS={() => {}}
          onProfile={onProfile}
        />
        <div style={styles.page}>
          <div style={styles.card}>
            <img
              src="https://img.icons8.com/color/96/000000/alarm.png"
              alt="SOS"
              style={{marginBottom: 18, width: 64, height: 64, maxWidth: "18vw"}}
            />
            <div style={styles.sosText}>SOS Activated</div>
            <div style={styles.descText}>
              We are sending your alert.<br />
              Help is on its way, please stay calm.
            </div>
            <button style={styles.sosBtn} onClick={() => window.open('tel:112')}>
              <span role="img" aria-label="Call" style={{marginRight: 8}}>📞</span>
              Call Emergency Contact
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "4vw 2vw",
    boxSizing: "border-box"
  },
  card: {
    background: "#23253C",
    borderRadius: 22,
    boxShadow: "0 6px 34px #0007",
    padding: "8vw 6vw 7vw 6vw",
    maxWidth: "95vw",
    minWidth: 0,
    width: "100%",
    marginTop: "10vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  sosText: {
    color: "#dc2626",
    fontWeight: 900,
    fontSize: "8vw",
    letterSpacing: 1,
    marginBottom: 9,
    textShadow: "0 1px 6px #fbbfbf55",
    textAlign: "center"
  },
  descText: {
    color: "#f4f4f4",
    fontSize: "4vw",
    maxWidth: "90vw",
    textAlign: "center",
    marginBottom: 28
  },
  sosBtn: {
    background: "#dc2626",
    color: "#fff",
    fontWeight: 700,
    fontSize: "4.8vw",
    border: "none",
    borderRadius: 8,
    padding: "12px 0",
    width: "90vw",
    maxWidth: 350,
    boxShadow: "0 2px 10px #dc262655",
    cursor: "pointer",
    letterSpacing: 1,
    transition: 'background 0.18s',
    margin: "5vw 0 0 0"
  }
};
