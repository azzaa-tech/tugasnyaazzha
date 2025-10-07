// import navbar from '../dashbord/home'
import React from "react";
import { Link } from "react-router-dom";

function Layout() {
   const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '30px 55px',
      backgroundColor: '#826836', 
      color: 'white',
    },
 }

 return (
  <div style={styles.navbar}>
    <Link to="/" style={styles.rightime}>Home</Link>
  </div>
 )
}

export default Layout;