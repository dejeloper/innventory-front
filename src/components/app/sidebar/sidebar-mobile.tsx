"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarButtonSheet as SidebarButton } from "./sidebar-button";
import { SidebarItems } from "@/interfaces/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { LogOut, Menu, MoreHorizontal, Settings, X } from "lucide-react";

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}
export function SidebarMobile(props: SidebarDesktopProps) {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="fixed top-0 left-0 bg-background border-b z-10">
          <Button
            size={"icon"}
            variant={"ghost"}
            className="fixed top-3 left-3 rounded-full"
          >
            <Menu size={20} />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="px-3 py-4" hideClose>
        <SheetHeader className="flex flex-row justify-between items-center space-y-0">
          <span className="text-lg font-semibold text-foreground mx-3">
            Innventtory
          </span>
          <SheetClose asChild>
            <Button className="h-7 w-7 p-0" variant="ghost">
              <X size={15} />
            </Button>
          </SheetClose>
        </SheetHeader>
        <div className="h-full">
          <div className=" mt-5 flex flex-col w-full gap-1">
            {props.sidebarItems.links.map((link, index) => (
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
            {props.sidebarItems.extras}
          </div>
          <div className="absolute w-full bottom-4 px-1 left-0">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Drawer>
              <DrawerTrigger asChild>
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
              </DrawerTrigger>
              <DrawerContent className="mb-2 p-2">
                <div className="flex flex-col space-y-2 mt-2">
                  <Link href={"/"}>
                    <SidebarButton
                      size={"sm"}
                      icon={Settings}
                      className="w-full"
                    >
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size={"sm"} icon={LogOut} className="w-full">
                    Logout
                  </SidebarButton>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
