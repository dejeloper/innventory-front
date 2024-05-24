"use client";
import { SidebarItems } from "@/interfaces/types";
import { SidebarExtra } from "./sidebar-extra";
import { SidebarDesktop } from "./sidebar-desktop";
import { sidebarItems } from "@/data/sidebar-items";
import { useMediaQuery } from "usehooks-ts";
import { SidebarMobile } from "./sidebar-mobile";

export function Sidebar() {
  const items: SidebarItems = {
    ...sidebarItems,
    extras: <SidebarExtra />,
  };

  const isDesktop = useMediaQuery("(min-width: 640px)", {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={items} />;
  }

  return <SidebarMobile sidebarItems={items} />;
}
