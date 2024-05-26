"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarButton } from "./sidebar-button";
import { SidebarItems } from "@/interfaces/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { LogOut, MoreHorizontal, Settings } from "lucide-react";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop({ sidebarItems }: SidebarDesktopProps) {
  const pathname = usePathname();
  return (
    <aside className="w-[270px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r">
      <div className="h-full px-3 py-4 ">
        <Button className="w-full" variant={"ghost"}>
          <h3 className="mx-3 text-lg font-semibold text-foreground">
            Innventtory
          </h3>
        </Button>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? "secondary" : "ghost"}
                  icon={link.icon}
                  className="w-full"
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {sidebarItems.extras}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute left-0 -top-3 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"ghost"} className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className=" flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage
                          src="https://www.dejeloper.com/images/me_01.jpg"
                          alt="avatar Perfil"
                        />
                        <AvatarFallback>Fullstack Developer</AvatarFallback>
                      </Avatar>
                      <span>Fullstack Developer</span>
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-3 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link href={"/"}>
                    <SidebarButton
                      size={"sm"}
                      icon={Settings}
                      className="w-full"
                    >
                      Configuraciones
                    </SidebarButton>
                  </Link>
                  <SidebarButton size={"sm"} icon={LogOut} className="w-full">
                    Salir
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
