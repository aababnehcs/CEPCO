import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
function MainLayout({ children }) {
  const [Sidebarone, setopenslidebar] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Navbar
        openslidebar={() => {
          setopenslidebar(!Sidebarone);
        }}
      />
      {children}
      <Sidebar
        open={Sidebarone}
        toggleDrawer={() => {
          setopenslidebar(!Sidebarone);
        }}
      />
    </div>
  );
}

export default MainLayout;
