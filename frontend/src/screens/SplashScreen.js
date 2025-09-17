import React, { useEffect } from 'react';

export default function SplashScreen({ onProceed }) {
  useEffect(() => {
    const timeout = setTimeout(onProceed, 2500);
    return () => clearTimeout(timeout);
  }, [onProceed]);

  return (
    <div style={styles.container}>
      <div style={styles.logoContainer}>
        <img src="src/assets/logo.svg" alt="StepSafe" style={styles.logo} />
        <h1 style={styles.title}>StepSafe</h1>
        <p style={styles.tagline}>Your Safety Journey Starts Here</p>
      </div>
      <div style={styles.footer}>
        <p style={styles.footerText}>Tap anywhere to continue</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer'
  },
  logoContainer: {
    textAlign: 'center',
    animation: 'fadein 1.5s ease-out'
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
    borderRadius: '50%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
  },
  title: {
    fontSize: 48,
    fontWeight: 800,
    margin: '0 0 8px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
  },
  tagline: {
    fontSize: 18,
    fontWeight: 300,
    margin: 0,
    opacity: 0.9
  },
  footer: {
    position: 'absolute',
    bottom: 40,
  },
  footerText: {
    fontSize: 14,
    opacity: 0.7,
    animation: 'fadein 2s ease-out'
  }
};
