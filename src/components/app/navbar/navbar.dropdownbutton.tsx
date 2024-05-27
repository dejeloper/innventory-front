import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NavbarButton } from "./navbar.button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface NavbarDropdownButtonProps {
  type?: "icon" | "button";
  icon?: LucideIcon;
  iconSize?: number;
  iconClassname?: string;
  buttonContent?: React.ReactNode;
  buttonVariant?: ButtonVariant;
  buttonClassname?: string;
  dropdownMenuContent: React.ReactNode;
  dropdownMenuContentClassName?: string;
  dropdownMenuLabel?: string;
}

export function NavbarDropdownButton({
  type = "icon",
  icon,
  iconSize = 20,
  iconClassname,
  buttonVariant,
  buttonClassname,
  buttonContent,
  dropdownMenuContent,
  dropdownMenuContentClassName,
  dropdownMenuLabel,
}: NavbarDropdownButtonProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          {type === "icon" && icon && (
            <NavbarButton
              icon={icon}
              size={iconSize}
              classname={iconClassname}
            />
          )}
          {type === "button" && buttonVariant && (
            <Button variant={buttonVariant} className={buttonClassname}>
              {buttonContent}
            </Button>
          )}
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
