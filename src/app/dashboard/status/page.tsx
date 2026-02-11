"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Database, Clock, Route, TrendingUp } from 'lucide-react';

export const runtime = 'edge';

export default function StatusPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  if (isLoading) return <Skeleton className="h-96 w-full" />;

  return (
    <div className="space-y-6">
        <Toaster richColors />
        <h1 className="text-2xl font-bold">Monitoramento do Sistema</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card><CardHeader><CardTitle>Serviços</CardTitle></CardHeader><CardContent className="space-y-2"><p>Banco D1: OK</p><p>Edge Runtime: OK</p></CardContent></Card>
            <Card><CardHeader><CardTitle>Métricas</CardTitle></CardHeader><CardContent className="space-y-2"><p>Rotas Ativas: 5</p><p>Analytics: Ativo</p></CardContent></Card>
        </div>
    </div>
  );
}