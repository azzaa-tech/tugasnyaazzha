import React from "react";
import Uangkas from './Uangkas/page'
import Login from './Login/page'
import Perkenalan from './Login/perkenlan'
import Anjay from './Anjay/page'
import Navbar from "./Navbar/Surat"


export default function page() {
  return(
    <div>
      <Uangkas/>
      <Login/>
      <Perkenalan/>
      <Anjay/>
      <Navbar/>

    </div>
  )
}