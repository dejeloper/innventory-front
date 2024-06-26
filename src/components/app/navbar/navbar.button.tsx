import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface NavbarButtonProps {
  icon: LucideIcon;
  size?: number;
  classname?: string;
  onClick?: () => void;
}

export function NavbarButton({
  icon: Icon,
  size = 20,
  classname,
  onClick,
}: NavbarButtonProps) {
  return (
    <>
      <Button variant={"ghost"} className="w-8 h-8 p-0" onClick={onClick}>
        {Icon && <Icon size={size} className={classname} />}
      </Button>
    </>
  );
}
