import { MoreHorizontal } from "lucide-react";
import { SidebarButton } from "./sidebar-button";

export const SidebarExtra = () => (
  <div className="flex flex-col gap-2">
    <SidebarButton icon={MoreHorizontal} className="w-full">
      More
    </SidebarButton>
    <SidebarButton
      className="w-full justify-center text-white"
      variant={"outline"}
    >
      Buy
    </SidebarButton>
  </div>
);
