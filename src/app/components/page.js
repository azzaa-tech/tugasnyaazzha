"use client";
import React from "react";

function Page() {
  const styles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#F3E5D8",
    },
    sidebar: {
      width: "200px",
      backgroundColor: "#A67B5B",
      color: "#fff",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "15px",
    },
    menuItem: {
      fontSize: "18px",
      fontWeight: "600",
      cursor: "pointer",
    },
    daleman: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "25px",
    },
    card: {
      border: "3px solid #A67B5B",
      borderRadius: "15px",
      padding: "10px",
      textAlign: "center",
      color: "#4B2E2E",
      width: "220px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#F3E5D8",
    },
    img: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderRadius: "10px",
      marginTop: "8px",
    },
    title: {
      fontSize: "16px",
      fontWeight: "600",
    },
    desc: {
      fontSize: "13px",
      marginTop: "4px",
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.sidebar}>
        <div style={styles.menuItem}>Home</div>
        <div style={styles.menuItem}>Product</div>
      </div>
      <div style={styles.daleman}>
        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>kamu tau Tumblerkan?</div>
            <img src="/assest/tumbler.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/boyfie.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/bukuu.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/nono.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/hi.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/lvl10.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/lvl10.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/boyfie.jpg" alt="tumbler" style={styles.img} />
          </div>

          <div style={styles.card}>
            <div style={styles.title}>Ini produk Tumbler</div>
            <div style={styles.desc}>Snoopy yuppy</div>
            <img src="/assest/hi.jpg" alt="tumbler" style={styles.img} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
