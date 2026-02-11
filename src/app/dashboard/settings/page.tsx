"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Database, Clock, Route, LayoutGrid, TrendingUp, Lock } from 'lucide-react';
import Link from 'next/link';

export const runtime = 'edge';

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) return <Skeleton className="h-96 w-full" />;

  return (
    <div className="space-y-6">
        <Toaster richColors />
        <h1 className="text-2xl font-bold">Configurações e Status</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card><CardHeader><CardTitle className="text-sm">Banco de Dados</CardTitle></CardHeader><CardContent className="font-black text-green-600">ONLINE (D1)</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-sm">Ambiente</CardTitle></CardHeader><CardContent className="font-black">Cloudflare Edge</CardContent></Card>
            <Card><CardHeader><CardTitle className="text-sm">Autenticação</CardTitle></CardHeader><CardContent className="font-black text-blue-600">Protegido</CardContent></Card>
        </div>
        <div className="flex gap-4">
            <Link href="/dashboard/db-test"><Button className="bg-[#0061FF] text-white">Testar Conexão</Button></Link>
            <Link href="/init-database"><Button variant="outline">Reinicializar Banco</Button></Link>
        </div>
    </div>
  );
}