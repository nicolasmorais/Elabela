"use client";

import Link from "next/link";
import { Settings, Wand2, LayoutGrid, Database, Monitor, CheckCircle, ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { LogoutButton } from "@/components/auth/LogoutButton";

const mainNavItems = [
  {
    href: "/dashboard",
    icon: Settings,
    label: "Route Control",
  },
  {
    href: "/dashboard/sales-pages",
    icon: ShoppingBag,
    label: "Páginas de Vendas",
  },
  {
    href: "/dashboard/custom-advertorials",
    icon: LayoutGrid,
    label: "Meus Advertoriais",
  },
  {
    href: "/dashboard/approval-page",
    icon: Wand2,
    label: "Página de Aprovação",
  },
];

const systemNavItems = [
  {
    href: "/dashboard/status",
    icon: CheckCircle,
    label: "Status de Sistema",
  },
  {
    href: "/dashboard/settings",
    icon: Monitor,
    label: "Configurações",
  },
  {
    href: "/dashboard/db-test",
    icon: Database,
    label: "Status Banco",
  },
];

export const Sidebar = () => {
  const pathname = usePathname();
  const LOGO_URL = "https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/94e94392-0815-4bb4-9cfa-ca4362c3495f%20%281%29%20%281%29%20%281%29-cWKpykzfXjyKf02ITuUtmE2iq5JYZn.png";

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    
    return cn(
        "group relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200",
        // Estilos Inativos
        "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100",
        // Estilos Ativos
        isActive && [
            "bg-blue-50/50 text-[#0061FF] dark:bg-blue-900/10 dark:text-[#0061FF]",
            "after:absolute after:left-0 after:h-5 after:w-1 after:rounded-full after:bg-[#0061FF]"
        ]
    );
  };

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-10 hidden w-64 flex-col border-r bg-white dark:bg-[#020617] border-slate-200 dark:border-slate-800 sm:flex"
    )}>
      {/* Logo Section */}
      <div className="flex h-24 items-center px-8">
        <Link href="/dashboard" className="transition-opacity hover:opacity-80">
          <img
            src={LOGO_URL}
            alt="Elabela Logo"
            className="h-10 w-auto"
          />
        </Link>
      </div>

      {/* Navigation Section */}
      <div className="flex flex-1 flex-col overflow-y-auto px-4 py-4 scrollbar-none">
        <div className="space-y-8">
          
          {/* Menu Principal */}
          <div className="space-y-2">
            <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Gestão de Conteúdo
            </h3>
            <nav className="space-y-1">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClasses(item.href)}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    pathname === item.href ? "text-[#0061FF]" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  )} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Menu Sistema */}
          <div className="space-y-2">
            <h3 className="px-4 text-[10px] font-black uppercase tracking-[0.15em] text-slate-400 dark:text-slate-500">
              Monitoramento
            </h3>
            <nav className="space-y-1">
              {systemNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={getLinkClasses(item.href)}
                >
                  <item.icon className={cn(
                    "h-5 w-5 transition-colors",
                    pathname === item.href ? "text-[#0061FF]" : "text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300"
                  )} />
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

        </div>
      </div>
      
      {/* Footer Section */}
      <div className="mt-auto p-4 border-t border-slate-100 dark:border-slate-800/50 bg-slate-50/50 dark:bg-slate-900/20">
        <LogoutButton />
      </div>
    </aside>
  );
};