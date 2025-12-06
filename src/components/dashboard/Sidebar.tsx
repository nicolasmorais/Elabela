"use client";

import Link from "next/link";
import { Settings, LayoutDashboard, FileCheck } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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
      label: "Editor da Página de Aprovação",
    },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r border-gray-700 bg-[#242527] sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-white md:h-8 md:w-8 md:text-base"
        >
          <LayoutDashboard className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Painel</span>
        </Link>
        <TooltipProvider>
          {navItems.map((item) => (
            <Tooltip key={item.href}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-gray-400 transition-colors hover:text-white md:h-8 md:w-8",
                    pathname === item.href && "bg-gray-800 text-white"
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">{item.label}</TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
    </aside>
  );
};