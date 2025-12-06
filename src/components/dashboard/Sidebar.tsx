"use client";

import Link from "next/link";
import { Settings, FileCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Sidebar = () => {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/dashboard",
      icon: Settings,
      label: "Configurações de Rota",
    },
    {
      href: "/dashboard/approval-page",
      icon: FileCheck,
      label: "Editor da Página",
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r border-gray-700 bg-[#242527] sm:flex">
      <div className="flex h-16 items-center border-b border-gray-700 px-4">
        <Link href="/dashboard" className="flex items-center gap-3 font-semibold text-white">
          <img
            src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/94e94392-0815-4bb4-9cfa-ca4362c3495f-zzhjEezm98VoMWqEUpkxkCiEYvH7rp.png"
            alt="Logo"
            className="h-8 w-8"
          />
          <span>Painel de Controle</span>
        </Link>
      </div>
      <nav className="flex-grow px-4 py-4">
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-400 transition-all hover:bg-gray-700 hover:text-white",
                pathname === item.href && "bg-gray-800 text-white"
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  );
};