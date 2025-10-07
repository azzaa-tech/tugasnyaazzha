"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; 

function Home () {
const styles = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#FDECEC',
      fontFamily: "'Poppins', sans-serif",
    },
    card: {
      backgroundColor: '#FFEAF2',
      border: '4px solid #F8A8C0',
      borderRadius: '200px',
      padding: '40px',
      textAlign: 'center',
      color: '#5A3E36',
      width: '700px',
      boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
      fontSize: '20px',
      fontWeight: 'bold',
    },
    button: {
      marginTop: '20px',
      padding: '12px 24px',
      backgroundColor: '#F8A8C0',
      border: 'none',
      borderRadius: '30px',
      color: 'white',
      fontWeight: 'bold',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    },
    
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2>🌸 HHAALLOOWW ‼️👋</h2>
        <p>semuanya~ ✨</p>
        <p>Perkenalkan aku Azzzaa 💕 🎀</p>
        <p>Yuk jelajahi hal-hal seru bareng aku~ 🫶</p>
        <strong>SELAMAT DATANG DI AZZAAMOOD 💖</strong>
        <p>Aku akan membantu kalian dalam web ini</p>
        <button style={styles.button}>Ayo Mulai!</button>
      </div>
    </div>
  );
}

export default Home;


