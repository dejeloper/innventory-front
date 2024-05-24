import { SidebarItems } from "@/interfaces/types";
import {
  Box,
  Home,
  List,
  ListChecks,
  Truck,
  User,
  UserCircle,
} from "lucide-react";

export const sidebarItems: SidebarItems = {
  links: [
    {
      label: "Home",
      href: "/",
      icon: Home,
    },
    {
      label: "Products",
      href: "/item/products",
      icon: Box,
    },
    {
      label: "Categories",
      href: "/item/categories",
      icon: List,
    },
    {
      label: "Suppliers",
      href: "/item/suppliers",
      icon: Truck,
    },
    {
      label: "Customers",
      href: "/item/customers",
      icon: UserCircle,
    },
    {
      label: "Orders",
      href: "/item/orders",
      icon: ListChecks,
    },
    {
      label: "Users",
      href: "/item/users",
      icon: User,
    },
  ],
};
