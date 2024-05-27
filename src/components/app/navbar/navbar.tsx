"use client";

import { Button } from "@/components/ui/button";
import { NavbarButton } from "./navbar.button";
import { NavbarSearch } from "./navbar.search";
import { Bell, CreditCard, Mail, User, UserCheck } from "lucide-react";
import { ModeToggle } from "@/components/theme-toggle-button";
import { NavbarDropdownButton } from "./navbar.dropdownbutton";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full sm:ml-[270px] pl-16 sm:pl-0 h-16 border-b select-none z-0 bg-background">
      <div className="flex h-full sm:w-[calc(100%-278px)] w-[calc(100%-12px)] justify-between items-center">
        <div className="space-x-0">
          <h3 className="text-2xl font-semibold text-foreground sm:hidden">
            Innventtory
          </h3>
          <NavbarSearch classname="hidden sm:flex" />
        </div>
        <div className="flex flex-row justify-center items-center space-x-0 gap-2">
          <div className="flex flex-row gap-1">
            <NavbarDropdownButton
              icon={UserCheck}
              dropdownMenuContent={
                <>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      <span>Profile</span>
                      <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <CreditCard className="mr-2 h-4 w-4" />
                      <span>Billing</span>
                      <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </>
              }
              dropdownMenuContentClassName="w-56"
              dropdownMenuLabel="Perfil y cuenta"
            />
            <NavbarButton icon={Bell} />
            <NavbarButton icon={Mail} />
            <ModeToggle />
          </div>

          <div className="flex flex-row gap-1 justify-center items-center text-center">
            <Button variant={"secondary"} className="h-10 w-10 rounded-full">
              <span className="font-semibold">JG</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
