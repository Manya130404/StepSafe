import React, { useState } from 'react';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const [mode, setMode] = useState('login'); // 'login' or 'register'

  const handleSubmit = e => {
    e.preventDefault();
    // Replace the next line with real authentication logic!
    onLogin(email);
  };

  return (
    <div style={styles.bg}>
      <div style={styles.card}>
        <img src="/logo.png" alt="StepSafe" style={{width:50,marginBottom:12}} />
        <h2 style={{color:"#FFD600",marginBottom:2}}>StepSafe</h2>
        <h3 style={{color:"#b8aaff",fontWeight:500,marginBottom:16,letterSpacing:1}}>
          {mode === "login" ? "Login" : "Create your account"}
        </h3>
        <form onSubmit={handleSubmit} style={{display: "flex", flexDirection:"column",gap:14}}>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Gmail address"
            required
            style={styles.input}
          />
          <input
            type="password"
            value={pw}
            onChange={e => setPw(e.target.value)}
            placeholder="Password"
            minLength={6}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>
            {mode === 'login' ? "Login" : "Register"}
          </button>
        </form>
        <div style={{marginTop:16, color:"#cbd5e1"}}>
          {mode === 'login'
            ? <>New user? <button style={styles.link} onClick={()=>setMode('register')}>Register</button></>
            : <>Have an account? <button style={styles.link} onClick={()=>setMode('login')}>Login</button></>}
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
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    background: "#22264A",
    borderRadius: 18,
    boxShadow: "0 2px 16px #0005",
    padding: "32px 30px",
    width: 360,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  input: {
    background: "#23253C",
    border: "1.5px solid #7C3AED",
    borderRadius: 8,
    color: "#def",
    padding: "11px 17px",
    fontSize: 16
  },
  button: {
    background: "linear-gradient(90deg,#7931fa 10%, #2563eb 90%)",
    color: "#fff",
    fontWeight: 700,
    fontSize: 17,
    border: "none",
    borderRadius: 10,
    padding: "13px 3px",
    marginTop: 12,
    cursor: "pointer",
    letterSpacing: 1,
    boxShadow: "0 4px 16px #7C3AED30"
  },
  link: {
    background: "none",
    color: "#FFD600",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    fontWeight: 600,
    padding: 0,
    fontSize: 15
  }
};
