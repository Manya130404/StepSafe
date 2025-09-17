import React from 'react';

export default function Navbar({
  active,
  onHome,
  onQuests,
  onGames,
  onLearn,
  onSOS,
  onProfile
}) {
  return (
    <nav style={styles.nav}>
      <button style={active === "home" ? styles.activeBtn : styles.btn} onClick={onHome}>Home</button>
      <button style={active === "quest" ? styles.activeBtn : styles.btn} onClick={onQuests}>Quests</button>
      <button style={active === "games" ? styles.activeBtn : styles.btn} onClick={onGames}>Games</button>
      <button style={active === "learn" ? styles.activeBtn : styles.btn} onClick={onLearn}>Learn</button>
      <button style={active === "sos" ? styles.sosBtn : styles.btn} onClick={onSOS}>SOS</button>
      <button style={active === "profile" ? styles.activeBtn : styles.btn} onClick={onProfile}>Profile</button>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    background: "#23253C",
    padding: "2vw 1vw",
    display: "flex",
    flexWrap: "wrap",
    gap: "3vw",
    alignItems: "center",
    justifyContent: "space-around",
    boxSizing: "border-box",
    position: "sticky",
    top: 0,
    zIndex: 998
  },
  btn: {
    background: "none",
    color: "#b8aaff",
    border: "none",
    fontSize: "clamp(15px,4vw,19px)",
    minWidth: 64,
    padding: "10px 8px",
    fontWeight: 600,
    borderRadius: 12,
    cursor: "pointer"
  },
  activeBtn: {
    background: "#FFD600",
    color: "#23253C",
    border: "none",
    fontSize: "clamp(15px,4vw,19px)",
    minWidth: 64,
    padding: "10px 8px",
    fontWeight: 700,
    borderRadius: 12,
    boxShadow: "0 2px 6px #ffd60040",
    cursor: "pointer"
  },
  sosBtn: {
    background: "#dc2626",
    color: "#fff",
    border: "none",
    fontSize: "clamp(15px,4vw,19px)",
    minWidth: 64,
    padding: "10px 8px",
    fontWeight: 700,
    borderRadius: 12,
    boxShadow: "0 2px 8px #dc262688",
    cursor: "pointer"
  }
};
