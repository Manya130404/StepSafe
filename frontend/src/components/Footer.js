import React from 'react';

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <img src="/logo.png" alt="StepSafe Logo" style={styles.logo} />
      <span style={styles.appName}>StepSafe</span>
      <span style={styles.spacer}>|</span>
      <span style={styles.copyright}>
        &copy; {new Date().getFullYear()} StepSafe. All rights reserved.
      </span>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#181C24",      // Changed to match the main background color
    color: "#9CA3AF",
    padding: "15px 0 11px 0",
    fontSize: 15,
    textAlign: "center",
   
    boxShadow: "0 -2px 10px 0 rgba(10,12,18,0.10)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    width: "100%",
  
    flexWrap: "wrap"
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 5,
    display: "inline-block"
  },
  appName: {
    fontWeight: 700,
    fontSize: 17,
    color: "#FFD600"
  },
  spacer: {
    color: "#393E5A",
    margin: "0 9px",
    fontSize: 20
  },
  copyright: {
    fontSize: 14,
    color: "#9CA3AF"
  }
};
