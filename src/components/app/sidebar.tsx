"use client";
import { SidebarDesktop } from "./sidebar-desktop";
import { sidebarItems } from "@/data/sidebar-items";
import { SidebarExtra } from "./sidebar-extra";
import { SidebarItems } from "@/interfaces/types";

export function Sidebar() {
  const items: SidebarItems = {
    ...sidebarItems,
    extras: <SidebarExtra />,
  };
  return <SidebarDesktop sidebarItems={items} />;
}
