import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarButton } from "./navbar.button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarDropdownButtonProps {
  icon: LucideIcon;
  iconSize?: number;
  iconClassname?: string;
  dropdownMenuContent: React.ReactNode;
  dropdownMenuContentClassName?: string;
  dropdownMenuLabel?: string;
}

export function NavbarDropdownButton({
  icon,
  iconSize = 20,
  iconClassname,
  dropdownMenuContent,
  dropdownMenuContentClassName,
  dropdownMenuLabel,
}: NavbarDropdownButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <NavbarButton icon={icon} size={iconSize} classname={iconClassname} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={cn(dropdownMenuContentClassName)}>
        {dropdownMenuLabel && (
          <DropdownMenuLabel>{dropdownMenuLabel}</DropdownMenuLabel>
        )}
        {dropdownMenuContent}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
