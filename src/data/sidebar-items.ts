import { SidebarItems } from "@/interfaces/types";
import {
  Box,
  ContactRound,
  LayoutDashboard,
  ShoppingBag,
  ShoppingBasket,
  ShoppingCart,
  SquareLibrary,
  Truck,
} from "lucide-react";

export const sidebarItems: SidebarItems = {
  links: [
    {
      label: "Clientes",
      href: "/item/customers",
      icon: ContactRound,
    },
    {
      label: "Productos",
      href: "/item/products",
      icon: Box,
    },
    {
      label: "POS",
      href: "/item/pos",
      icon: ShoppingBag,
    },
    {
      label: "Ventas",
      href: "/item/sales",
      icon: ShoppingCart,
    },
    {
      label: "Compras",
      href: "/item/shopping",
      icon: ShoppingBasket,
    },
    {
      label: "Proveedores",
      href: "/item/providers",
      icon: Truck,
    },
    {
      label: "Administración",
      href: "/item/Admin",
      icon: LayoutDashboard,
    },
    {
      label: "Reportes",
      href: "/item/reports",
      icon: SquareLibrary,
    },
  ],
};
