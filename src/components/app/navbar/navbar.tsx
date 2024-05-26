"use client";

import { Button } from "@/components/ui/button";
import { NavbarButton } from "./navbar.button";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full sm:ml-[270px] pl-16 sm:pl-0 h-16 border-b select-none z-0 bg-white">
      <div className="flex h-full sm:w-[calc(100%-278px)] w-[calc(100%-12px)] justify-between items-center bg-white">
        <div className="space-x-0 bg-white">
          <h3 className="text-2xl font-semibold text-foreground sm:hidden">
            Innventtory
          </h3>
        </div>
        <div className="flex flex-row justify-center items-center space-x-0 gap-2 bg-white">
          <div className="flex flex-row gap-1">
            <NavbarButton />
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
