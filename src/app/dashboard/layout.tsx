import { Sidebar } from "@/components/dashboard/Sidebar";
import { LogoutButton } from "@/components/auth/LogoutButton";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background font-sans">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-64">
        {/* Header com botão de logout */}
        <header className="sticky top-0 z-10 flex h-16 items-center justify-end gap-4 border-b bg-background px-4 sm:px-6">
          <LogoutButton />
        </header>
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}