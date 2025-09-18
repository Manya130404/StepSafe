import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';

const avatars = [
  '/generated-image (1).png',
  '/generated-image (2).png',
  '/generated-image (3).png',
  '/generated-image (4).png',
  '/generated-image (5).png',
  '/generated-image (6).png',
  '/generated-image (7).png',
  '/generated-image (8).png',
  '/generated-image (9).png',
  '/generated-image (10).png'
];

export default function EditProfile({ initialName = '', initialAvatarIdx = 0 }) {
  const navigate = useNavigate(); // <-- Must be the very first thing in the component!
  const [name, setName] = useState(initialName);
  const [selectedAvatar, setSelectedAvatar] = useState(initialAvatarIdx);
  const [showPopup, setShowPopup] = useState(false);

  function handleSave() {
    alert(`Changes saved!`);
    navigate('/profile');
  }

  function handleDelete() {
    alert('Profile deleted. Go to login page.');
    navigate('/');
  }

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg,#181C24 60%,#232946 100%)",
      fontFamily: 'Poppins, Segoe UI, sans-serif'
    }}>
      <Navbar />
      <div style={{
        maxWidth: 470,
        margin: '46px auto',
        padding: "38px 34px",
        borderRadius: 28,
        background: "linear-gradient(90deg,#22264A 72%, #23253C 100%)",
        boxShadow: "0 7px 28px rgba(110,120,224,0.15)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
        <h2 style={{
          color: "#FFD600",
          fontWeight: 800,
          fontSize: 31,
          letterSpacing: 1,
          marginBottom: 23,
        }}>
          Edit Profile
        </h2>
        <label style={{
          display: 'block',
          marginBottom: 28,
          fontWeight: 500,
          color: "#B8AFFF",
          width: "100%"
        }}>
          Name:
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            style={{
              marginLeft: 10,
              fontSize: 20,
              border: "2.5px solid #B8AFFF",
              background: "#191D2E",
              color: "#FFD600",
              borderRadius: 11,
              padding: "11px 16px",
              width: "80%",
              marginTop: 8,
              fontWeight: 700,
              outline: "none",
              boxShadow: "0 1px 7px #181C2435"
            }}
          />
        </label>
        <div style={{ marginBottom: 30, width: "100%" }}>
          <b style={{ color: "#B8AFFF", fontWeight: 800 }}>Choose your avatar:</b>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 23,
            marginTop: 18, justifyContent: "center"
          }}>
            {avatars.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Avatar ${idx + 1}`}
                style={{
                  width: 78,
                  height: 78,
                  borderRadius: '50%',
                  border: selectedAvatar === idx
                    ? '4.5px solid #FFD600'
                    : '2px solid #7C3AED',
                  background: "#232946",
                  cursor: 'pointer',
                  boxShadow: selectedAvatar === idx
                    ? '0 0 13px 0px #FFD60090'
                    : '0 0 2px 0px #B8AFFF44',
                  transform: selectedAvatar === idx
                    ? "scale(1.13)"
                    : "scale(1.0)",
                  transition: "transform 0.2s, box-shadow 0.2s, border 0.14s"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.17)"}
                onMouseLeave={e => e.currentTarget.style.transform = selectedAvatar === idx ? "scale(1.13)" : "scale(1.0)"}
                onClick={() => setSelectedAvatar(idx)}
              />
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24, marginTop: 32 }}>
          <button
            onClick={handleSave}
            style={{
              padding: "11px 38px", background: "#FFD600",
              color: "#23264A", fontWeight: 700, border: "none",
              borderRadius: 13, fontSize: 19, fontFamily: "inherit",
              boxShadow: "0 2px 10px 0 #FFD60035", cursor: 'pointer',
              transition: "background 0.2s, color 0.15s"
            }}
            onMouseOver={e => { e.currentTarget.style.background = "#d6ba00"; e.currentTarget.style.color = "#fff"; }}
            onMouseOut={e => { e.currentTarget.style.background = "#FFD600"; e.currentTarget.style.color = "#23264A"; }}
          >Save</button>
          <button
            onClick={() => setShowPopup(true)}
            style={{
              padding: "11px 31px",
              background: "#F8274C",
              color: "#fff", fontWeight: 700, border: "none", borderRadius: 13,
              fontSize: 19, fontFamily: "inherit",
              boxShadow: "0 2px 17px 0 #F8274D44", cursor: 'pointer',
              transition: "background 0.2s"
            }}
            onMouseOver={e => e.currentTarget.style.background = "#c80a2f"}
            onMouseOut={e => e.currentTarget.style.background = "#F8274C"}
          >Delete Profile</button>
        </div>
        {showPopup && (
          <div style={{
            position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh',
            background: 'rgba(28,24,40,.62)', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            zIndex: 9999
          }}>
            <div style={{
              background: '#23253C', padding: 34, borderRadius: 18,
              boxShadow: "0 8px 38px #232946cc",
              textAlign: 'center', minWidth: 280
            }}>
              <p style={{ fontWeight: 600, color: "#FFD600", marginBottom: 18, fontSize: 20 }}>
                Do you want to delete this profile?
              </p>
              <button
                onClick={() => setShowPopup(false)}
                style={{
                  padding: "9px 22px", background: "none", color: "#B8AFFF",
                  fontWeight: 700, border: "2px solid #B8AFFF", borderRadius: 8, marginRight: 15, cursor: "pointer"
                }}
              >No</button>
              <button
                onClick={handleDelete}
                style={{
                  padding: "9px 22px", background: "#F8274C", color: "#fff",
                  fontWeight: 700, border: "none", borderRadius: 8, cursor: "pointer"
                }}
              >Yes</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
