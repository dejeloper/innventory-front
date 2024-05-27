import { MessageSquareDot, UserRoundCog } from "lucide-react";
import { SidebarButton } from "./sidebar-button";
import { ModeToggle } from "../../theme-toggle-button";

export const SidebarExtra = () => (
  <div className="flex flex-col gap-2">
    <SidebarButton icon={UserRoundCog} className="w-full" variant={"outline"}>
      Cuenta
    </SidebarButton>
    <SidebarButton
      icon={MessageSquareDot}
      className="w-full"
      variant={"outline"}
    >
      Notificaciones
    </SidebarButton>
  </div>
);
