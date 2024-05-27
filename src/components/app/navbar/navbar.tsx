"use client";

import { NavbarButton } from "./navbar.button";
import { NavbarSearch } from "./navbar.search";
import { Bell, Mail } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle-button";
import { NavbarDropdownButton } from "./navbar.dropdownbutton";
import {
  NavbarDropdownUserContent,
  NavbarDropdownUserHeader,
} from "./navbar-dropdown-menu/dropdown.user";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full sm:ml-[270px] pl-16 sm:pl-0 h-16 border-b select-none z-0 bg-background">
      <div className="flex h-full sm:w-[calc(100%-278px)] w-[calc(100%-12px)] justify-between items-center">
        <div className="space-x-0">
          <NavbarSearch classname="hidden sm:flex" />
        </div>
        <div className="flex flex-row justify-center items-center gap-1">
          <NavbarButton icon={Bell} />
          <NavbarButton icon={Mail} />
          <ModeToggle />
          <div className=" flex flex-row h-full justify-center items-center">
            <NavbarDropdownButton
              type="button"
              buttonVariant="ghost"
              buttonClassname="flex flex-row justify-center items-center h-10 w-10 p-0 m-0 bg-transparent hover:bg-transparent"
              buttonContent={<NavbarDropdownUserHeader />}
              dropdownMenuContent={<NavbarDropdownUserContent />}
              dropdownMenuContentClassName="w-56"
              dropdownMenuLabel="Perfil y cuenta"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
