import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Simple mobile detection
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return isMobile;
}

export default function Navbar({ user = {
    name: "Priya Mehra",
    avatar: "/generated-image (1).png",
    points: 1230
  }
}) {
  const location = useLocation();
  const path = location.pathname;
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

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

  if (isMobile) {
    return (
      <>
        <div style={{
          width: "100%", background: "#23253C", display: "flex",
          alignItems: "center", justifyContent: "space-between",
          padding: "10px 14px", zIndex: 100, position: "relative"
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <img src="/logo.png" alt="logo" style={{ width: 28, height: 28, borderRadius: 6, background: "#22264A" }} />
            <span style={{ color: "#FFD600", fontWeight: 800, fontSize: 20, letterSpacing: 1 }}>StepSafe</span>
          </div>
          <button
            style={{ fontSize: 29, background: "none", border: "none", color: "#FFD600", cursor: "pointer" }}
            onClick={() => setOpen(true)}>
            ☰
          </button>
        </div>
        {open &&
          <div
            style={{
              position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
              background: "rgba(13,16,26,0.67)", zIndex: 1001
            }}
            onClick={() => setOpen(false)}
          >
            <aside
              style={{
                width: "77vw", maxWidth: 320, minHeight: "100vh", background: "#161C24",
                position: "fixed", top: 0, left: 0, zIndex: 1101, padding: "28px 19px 12px 21px",
                boxShadow: "3px 0 25px #0007", borderRadius: "0 24px 24px 0",
                display: "flex", flexDirection: "column"
              }}
              onClick={e => e.stopPropagation()}
            >
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 18
              }}>
                <img src={user.avatar} alt="avatar"
                  style={{
                    width: 30, height: 30, background: "#363759",
                    borderRadius: "50%", border: "2px solid #FFD600"
                  }}
                />
                <div>
                  <div style={{ color: "#FFD600", fontWeight: 600, fontSize: 18 }}>{user.name}</div>
                  <div style={{ color: "#B8AFFF", fontWeight: 700, fontSize: 16 }}>
                    <span style={{ color: "#FFD600" }}>⚡</span> {user.points}
                  </div>
                </div>
                <button
                  style={{ marginLeft: "auto", fontSize: 20, background: "none", border: "none", color: "#FFD600", cursor: "pointer" }}
                  onClick={() => setOpen(false)}
                >✕</button>
              </div>
              <nav style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 4 }}>
                <Link to="/home"    style={path === "/home"    ? activeBox : navLink}   onClick={()=>setOpen(false)}>Home</Link>
                <Link to="/quests"  style={path === "/quests"  ? activeBox : navLink}   onClick={()=>setOpen(false)}>Quests</Link>
                <Link to="/games"   style={path === "/games"   ? activeBox : navLink}   onClick={()=>setOpen(false)}>Games</Link>
                <Link to="/learn"   style={path === "/learn"   ? activeBox : navLink}   onClick={()=>setOpen(false)}>Learn</Link>
                <Link to="/sos"     style={sosSpecial}                                onClick={()=>setOpen(false)}>SOS</Link>
                <Link to="/assistant" style={path === "/assistant" ? activeBox : navLink} onClick={()=>setOpen(false)}>Assistant</Link>
                <Link to="/profile" style={path === "/profile" ? activeBox : navLink} onClick={()=>setOpen(false)}>Profile</Link>
              </nav>
            </aside>
          </div>
        }
      </>
    );
  }

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
        <span role="img" aria-label="shield" style={{ marginRight: 6 }}>🛡️</span>
        StepSafe
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Link to="/home"    style={path === "/home"    ? activeBox : navLink}>Home</Link>
        <Link to="/quests"  style={path === "/quests"  ? activeBox : navLink}>Quests</Link>
        <Link to="/games"   style={path === "/games"   ? activeBox : navLink}>Games</Link>
        <Link to="/learn"   style={path === "/learn"   ? activeBox : navLink}>Learn</Link>
        <Link to="/sos"     style={sosSpecial}>SOS</Link>
        <Link to="/assistant" style={path === "/assistant" ? activeBox : navLink}>Assistant</Link>
        <Link to="/profile" style={path === "/profile" ? activeBox : navLink}>Profile</Link>
      </div>
      {/* User avatar/name */}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        background: "#181c24", borderRadius: 12, padding: "4px 11px 4px 15px",
        boxShadow: "0 1px 5px #23253c22"
      }}>
        <span style={{ color: "#FFD600", fontWeight: 600, fontSize: 17 }}>{user.name}</span>
        <span style={{ color: "#B8AFFF", fontWeight: 700, fontSize: 16 }}>
          <span style={{ color: "#FFD600" }}>⚡</span> {user.points}
        </span>
        <img src={user.avatar} alt="avatar"
          style={{
            width: 32, height: 32, borderRadius: "50%",
            marginLeft: 8, background: "#363759", border: "2px solid #FFD600"
          }} />
      </div>
    </nav>
  );
}
