"use client";
import React from "react";

function Home() {
  const styles = {
	    wrapper: {
	      display: "flex",
	      justifyContent: "center",
	      alignItems: "center",
	      height: "100vh",
	      backgroundColor: "#26355D", 
	      fontFamily: "'Poppins', sans-serif",
	    },
    card: {
      backgroundColor: "#EAD4C0", 
      border: "4px solid #A67B5B", 
      borderRadius: "20px",
      padding: "40px",
      textAlign: "center",
      color: "#4B2E2E", 
      width: "400px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      fontSize: "18px",
      fontWeight: "bold",
    },
    persegi: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      borderRadius: "10px",
      border: "2px solid #A67B5B",
      backgroundColor: "#DCC3A1",
      color: "#4B2E2E",
      fontSize: "16px",
      textAlign: "left",
      pointerEvents: "none", 
    },
    button: {
      marginTop: "20px",
      padding: "12px 24px",
      backgroundColor: "#A67B5B",
      border: "none",
      borderRadius: "30px",
      color: "white",
      fontWeight: "bold", 
      fontSize: "16px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>HAYYYOOW</h2>
        <input
          style={styles.persegi}
          placeholder="Username"
          readOnly
        />
        <input
          style={styles.persegi}
          placeholder="Password"
          type="password"
          readOnly
        />
        <button style={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default Home;
