import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { NavbarButton } from "./navbar.button";

export function NavbarSearch({ classname }: { classname: string }) {
  return (
    <div
      className={cn(
        "flex flex-row gap-1 px-4 justify-center items-center",
        classname
      )}
    >
      <Input
        type="text"
        placeholder="Buscar..."
        className="h-10 w-64 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 px-4"
      />
      <NavbarButton icon={Search} />
    </div>
  );
}
