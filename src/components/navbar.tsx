import React from "react";
import { ModeToggle } from "./theme-toggle-button";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h2>Innventtory</h2>
      <ModeToggle />
    </nav>
  );
}

export default Navbar;
