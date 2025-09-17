import React from 'react';
import Navbar from "../components/Navbar"; // Adjust the path if needed
import Footer from "../components/Footer"; // Adjust the path if needed

export default function HomeScreen({
  onProfile, onSOS, onStartQuest, onPlayGames, onLearnGrow
}) {
  return (
    <>
      <div style={styles.bg}>
        <Navbar
          active="home"
          onHome={() => {}}
          onQuests={onStartQuest}
          onGames={onPlayGames}
          onLearn={onLearnGrow}
          onSOS={onSOS}
          onProfile={onProfile}
        />
        <div style={styles.page}>
          {/* Hero section */}
          <div style={styles.hero}>
            <img
              src="/logo.png"
              alt="StepSafe"
              style={styles.logo}
            />
            <h1 style={styles.title}>StepSafe</h1>
            <p style={styles.subtitle}>
              Your safety companion.<br />
              Track, play, learn, and stay protected—anytime, anywhere!
            </p>
          </div>
          {/* Actions/buttons */}
          <div style={styles.btnGroup}>
            <button style={styles.button} onClick={onStartQuest}>Start Quest</button>
            <button style={styles.button} onClick={onPlayGames}>Play Games</button>
            <button style={styles.button} onClick={onLearnGrow}>Learn & Grow</button>
            <button style={styles.sosBtn} onClick={onSOS}>SOS!</button>
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
    display: "flex", flexDirection: "column", alignItems: "center"
  },
  page: {
    width: "100%",
    maxWidth: "530px",
    margin: "0 auto",
    padding: "7vw 3vw",
    display: "flex", flexDirection: "column", alignItems: "center",
    boxSizing: "border-box"
  },
  hero: {
    display: "flex", flexDirection: "column", alignItems: "center",
    marginBottom: "9vw", marginTop: "6vw"
  },
  logo: {
    width: "18vw", maxWidth: 90, minWidth: 54,
    height: "18vw", maxHeight: 90, minHeight: 54,
    marginBottom: "5vw", borderRadius: "22%"
  },
  title: {
    fontSize: "9vw", maxFontSize: 44,
    color: "#FFD600", fontWeight: 900, letterSpacing:2,
    margin: 0, textAlign: "center"
  },
  subtitle: {
    color: "#B8AFFF", marginTop: "1vw", textAlign: "center", fontSize: "4.75vw", maxWidth: "88vw"
  },
  btnGroup: {
    width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "5vw"
  },
  button: {
    background: "linear-gradient(90deg, #7931fa 10%, #2563eb 90%)",
    color: "#fff",
    fontWeight: 700,
    fontSize: "5vw",
    border: "none",
    borderRadius: 12,
    padding: "12px 0",
    width: "86vw",
    maxWidth: 370,
    boxShadow: "0 2px 10px #7C3AED44",
    cursor: "pointer",
    marginBottom: 0,
    transition: 'background 0.18s'
  },
  sosBtn: {
    background: "#dc2626",
    color: "#fff",
    fontWeight: 800,
    fontSize: "5vw",
    border: "none",
    borderRadius: 12,
    padding: "14px 0",
    width: "86vw",
    maxWidth: 370,
    marginTop: "8vw",
    boxShadow: "0 4px 16px #dc262633",
    cursor: "pointer"
  }
};
