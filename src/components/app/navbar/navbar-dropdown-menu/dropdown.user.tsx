import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { CreditCard, KeyRound, LogOut, User } from "lucide-react";

const dropdownMenuItems = [
  {
    icon: User,
    label: "Perfil",
  },
  {
    icon: KeyRound,
    label: "Cambio Contraseña",
  },
  {
    icon: CreditCard,
    label: "Pendientes",
  },
  {
    icon: LogOut,
    label: "Cerrar Sesión",
  },
];

export function NavbarDropdownUserContent() {
  return (
    <DropdownMenuGroup>
      {dropdownMenuItems &&
        dropdownMenuItems.map((item, index) => (
          <DropdownMenuItem key={index}>
            <item.icon className="mr-2 h-4 w-4" />
            <span>{item.label}</span>
          </DropdownMenuItem>
        ))}
    </DropdownMenuGroup>
  );
}

export function NavbarDropdownUserHeader() {
  return (
    <Avatar className="h-10 w-10 p-0 m-0">
      <AvatarImage
        src="https://www.dejeloper.com/images/me_01.jpg"
        alt="avatar Perfil"
      />
    </Avatar>
  );
}
