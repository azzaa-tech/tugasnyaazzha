import React from "react";
import Navbar from "./header/page"
import Left from "./leftsidebar/page"
import Main from "./main/page"
import Right from "./rightsidebar/page"
import Footer from "./footer/page"
import Image from "next/image";

export default function Layout() {
  return (
    <div className="bg-gradient-to-b from-[#A8FFEF] via-[#C9F8FF] to-white h-auto w-full flex flex-col font-poppins">

      {/* Header */}
      <Navbar></Navbar>

      {/* Main Layout */}
      <div className="grid grid-cols-[220px_1fr_220px] gap-6 flex-grow p-6 max-md:grid-cols-1">

        {/* Left Sidebar */}
        <Left></Left>

        {/* Main Section */}
        <Main></Main>

        {/* Right Sidebar */}
        <Right></Right>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}
