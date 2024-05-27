"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarButton } from "./app/navbar/navbar.button";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      {theme === "light" ? (
        <NavbarButton icon={Moon} onClick={() => setTheme("dark")} />
      ) : (
        <NavbarButton icon={Sun} onClick={() => setTheme("light")} />
      )}
    </>
  );
}
