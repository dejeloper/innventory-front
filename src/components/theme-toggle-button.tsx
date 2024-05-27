"use client";

import { useTheme } from "next-themes";
import { NavbarButton } from "./app/navbar/navbar.button";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <NavbarButton
        icon={theme === "light" ? Moon : Sun}
        onClick={changeTheme}
      />
    </>
  );
}
