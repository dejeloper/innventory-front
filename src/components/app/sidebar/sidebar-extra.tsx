import { MoreHorizontal } from "lucide-react";
import { SidebarButton } from "./sidebar-button";
import { ModeToggle } from "../../theme-toggle-button";

export const SidebarExtra = () => (
  <div className="flex flex-col gap-2">
    <SidebarButton icon={MoreHorizontal} className="w-full">
      More
    </SidebarButton>
    <SidebarButton className="w-full justify-center" variant={"outline"}>
      Buy
    </SidebarButton>
    <div className="flex justify-start">
      <ModeToggle />
    </div>
  </div>
);
