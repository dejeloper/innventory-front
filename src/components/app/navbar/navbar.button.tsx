import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export function NavbarButton() {
  return (
    <>
      <Button variant={"ghost"} className="w-8 h-8 p-0">
        <Search size={20} />
      </Button>
    </>
  );
}
