"use client"

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Wine,
  Image as ImageIcon,
  User2,
  LogOut,
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  Store
} from "lucide-react";
import { signOut } from "next-auth/react";
import Image from "next/image";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin"
  },
  {
    title: "Produtos",
    icon: Wine,
    href: "/admin/produtos"
  },
  {
    title: "Pedidos",
    icon: ShoppingBag,
    href: "/admin/pedidos"
  },
  {
    title: "Banners",
    icon: ImageIcon,
    href: "/admin/banners"
  },
  {
    title: "Usuários",
    icon: User2,
    href: "/admin/usuarios"
  }
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={cn(
      "bg-white border-r border-gray-200 h-screen transition-all duration-300",
      isCollapsed ? "w-20" : "w-64"
    )}>
      <div className="flex flex-col h-full">
        <div className="p-6 flex items-center justify-between">
          <div className={cn(
            "flex items-center space-x-2",
            isCollapsed && "justify-center"
          )}>
            {/* <Wine className="h-8 w-8 text-burgundy" /> */}
            <Image
              src="/images/logo.png"
              alt="Vino Veritas Logo"
              width={32}
              height={32}
              className="h-12 w-12"
            />
            {!isCollapsed && <span className="text-xl font-semibold">Admin</span>}
          </div>
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors",
                      pathname === item.href && "bg-burgundy/10 text-burgundy",
                      isCollapsed && "justify-center"
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {!isCollapsed && <span>{item.title}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-200 space-y-2">
          <button
            onClick={() => router.push('/')}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors",
              isCollapsed && "justify-center"
            )}
          >
            <Store className="h-5 w-5" />
            {!isCollapsed && <span>Voltar à Loja</span>}
          </button>
          <button
            onClick={() => signOut()}
            className={cn(
              "flex items-center space-x-3 px-3 py-2 w-full rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors",
              isCollapsed && "justify-center"
            )}
          >
            <LogOut className="h-5 w-5" />
            {!isCollapsed && <span>Sair</span>}
          </button>
        </div>
      </div>
    </div>
  );
}