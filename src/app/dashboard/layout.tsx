import { Sidebar } from "@/components/dashboard/Sidebar";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from "react";
import { cn } from "@/lib/utils";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.get('auth_session')?.value === 'true';

  if (!isAuthenticated) {
    redirect('/login');
  }

  return (
    <div className={cn("flex min-h-screen w-full flex-col bg-background font-quicksand")}>
      <Sidebar />
      <div className="flex flex-col sm:pl-64">
        <main className="flex-1 items-start gap-4 p-4 sm:px-6 sm:py-4 md:gap-8">
          {children}
        </main>
      </div>
    </div>
  );
}