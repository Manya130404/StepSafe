import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  // The active style for Home/Profile/SOS
  const activeBox = {
    background: "#FFD600",
    color: "#23253C",
    borderRadius: 15,
    padding: "4px 19px",
    fontWeight: 700,
    margin: "0 5px",
    fontSize: 18,
    boxShadow: "0 2px 14px #FFD60033",
    display: "inline-block",
    transition: ".19s"
  };

  const sosSpecial = {
    background: path === "/sos" ? "#F8274C" : "#FFD600",
    color: path === "/sos" ? "#fff" : "#23253C",
    borderRadius: 16,
    padding: path === "/sos" ? "6px 25px" : "4px 19px",
    fontWeight: 700,
    margin: "0 5px",
    fontSize: 18,
    boxShadow: "0 2px 14px #FFD60033",
    display: "inline-block",
    transition: ".19s"
  };

  const navLink = {
    color: "#B8AFFF",
    textDecoration: "none",
    fontWeight: 600,
    padding: "4px 14px",
    fontSize: 17,
    margin: "0 4px",
    borderRadius: 11,
    transition: ".18s"
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: "13px 34px 13px 28px",
      background: "#23253C",
      boxShadow: "0 2px 12px #23294635",
      fontFamily: 'Poppins, Segoe UI, sans-serif',
      minHeight: 56,
      zIndex: 109,
      position: 'relative'
    }}>
      <div style={{ fontWeight: 900, color: "#FFD600", fontSize: 27, letterSpacing: 1.5 }}>
        <span role="img" aria-label="shield" style={{marginRight:6}}>🛡️</span>
        StepSafe
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link
          to="/home"
          style={path === "/home" ? activeBox : navLink}
        >Home</Link>
        <Link
          to="/quests"
          style={navLink}
        >Quests</Link>
        <Link
          to="/games"
          style={navLink}
        >Games</Link>
        <Link
          to="/learn"
          style={navLink}
        >Learn</Link>
        <Link
          to="/sos"
          style={sosSpecial}
        >SOS</Link>
        <Link
          to="/profile"
          style={path === "/profile" ? activeBox : navLink}
        >Profile</Link>
      </div>
      {/* Example: Top-right user/profile area could go here */}
    </nav>
  );
}
