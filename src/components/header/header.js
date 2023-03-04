import React, { useState } from "react";

import NavigationBar from "./NavigationBar";
import SideNavigation from "./SideNavigation";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <SideNavigation navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <NavigationBar setNavbarOpen={setNavbarOpen} />
    </>
  );
}
