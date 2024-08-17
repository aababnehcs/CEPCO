import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from '../components/Sidebar';
function MainLayout({ children }) {
  const [Sidebarone, openslidebar] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Navbar
        openslidebar={() => {
          openslidebar(!Sidebarone);
        }}
      />
      {children}
      <Sidebar open={Sidebarone}/>
    </div>
  );
}

export default MainLayout;
