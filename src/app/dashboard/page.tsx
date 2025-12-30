"use client";

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Route, Plus, RefreshCw, Layout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CreateRouteDialog } from '@/components/dashboard/CreateRouteDialog';
import { UTMLinkGenerator } from '@/components/dashboard/UTMLinkGenerator';
import { RouteCard } from '@/components/dashboard/RouteCard';
import { AutoRouteManager } from '@/components/dashboard/AutoRouteManager';

interface CustomAdvertorial {
  id: string;
  name: string;
}

interface ExistingRoute {
  path: string;
  name: string;
  contentId: string;
}

interface AutoRoute {
  [slug: string]: string;
}

const STATIC_CONTENT_OPTIONS: CustomAdvertorial[] = [
    { id: 'v1', name: 'Advertorial V1 (Original)' },
    { id: 'v2', name: 'Advertorial V2' },
    { id: 'v3', name: 'Advertorial V3' },
    { id: 'ap', name: 'Página de Aprovação (AP)' },
    { id: 'menopausa', name: 'Menopausa Nunca Mais' },
];

export default function DashboardPage() {
  const [advertorials, setAdvertorials] = useState<CustomAdvertorial[]>([]);
  const [existingRoutes, setExistingRoutes] = useState<ExistingRoute[]>([]);
  const [autoRoutes, setAutoRoutes] = useState<AutoRoute>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const allContentOptions = [...STATIC_CONTENT_OPTIONS, ...advertorials];

  const fetchAllData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const [advRes, routeRes, autoRouteRes] = await Promise.all([
        fetch('/api/custom-advertorials'),
        fetch('/api/routes'),
        fetch('/api/auto-routes')
      ]);

      if (!advRes.ok || !routeRes.ok || !autoRouteRes.ok) throw new Error('Falha ao buscar dados');

      const routeData = await routeRes.json();
      const advData = await advRes.json();
      const autoRouteData = await autoRouteRes.json();

      setAdvertorials(advData);
      setExistingRoutes(routeData);
      setAutoRoutes(autoRouteData);
    } catch (error: any) {
      toast.error(`Falha ao carregar os dados: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const handleSaveRoute = async (path: string, contentId: string, name?: string): Promise<void> => {
    try {
      const response = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, contentId, name }),
      });
      if (!response.ok) throw new Error('Failed to save route');
      toast.success(`Rota ${path} atualizada!`);
      fetchAllData();
    } catch (error) {
      toast.error("Falha ao salvar a rota.");
    }
  };

  const handleDeleteRoute = async (path: string, name: string): Promise<void> => {
    if (!window.confirm(`Excluir rota: ${name}?`)) return;
    try {
      const response = await fetch('/api/routes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      });
      if (!response.ok) throw new Error('Failed to delete');
      toast.success(`Rota excluída!`);
      fetchAllData();
    } catch (error) {
      toast.error("Falha ao excluir.");
    }
  };

  return (
    <>
      <Toaster richColors />
      
      <div className="max-w-6xl mx-auto pb-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="animate-in fade-in slide-in-from-left-4 duration-700">
              <h1 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Route Control</h1>
              <p className="mt-2 text-slate-500 dark:text-slate-400 font-medium max-w-lg">
                Gerencie URLs e redirecionamentos. Aponte caminhos amigáveis para seus advertoriais.
              </p>
          </div>
          <Button onClick={fetchAllData} variant="outline" className="h-11 rounded-xl font-bold border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 animate-in fade-in slide-in-from-right-4 duration-700">
            <RefreshCw className={cn("mr-2 h-4 w-4", isLoading && "animate-spin")} />
            Atualizar Status
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Coluna Esquerda: Auto Routes e Ferramentas */}
          <div className="lg:col-span-7 space-y-8">
            <div className="animate-in fade-in zoom-in-95 duration-500 delay-100">
                <AutoRouteManager 
                    autoRoutes={autoRoutes}
                    contentOptions={allContentOptions}
                    onRefresh={fetchAllData}
                />
            </div>

            <Card className="border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden shadow-sm animate-in fade-in zoom-in-95 duration-500 delay-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                        <Route className="h-5 w-5 text-[#6B16ED]" />
                        Gerador de Links UTM
                    </CardTitle>
                    <CardDescription>Rastreie suas campanhas com parâmetros dinâmicos.</CardDescription>
                </CardHeader>
                <CardContent>
                    <UTMLinkGenerator />
                </CardContent>
            </Card>
          </div>

          {/* Coluna Direita: Rotas Fixas */}
          <div className="lg:col-span-5 space-y-8 animate-in fade-in slide-in-from-right-4 duration-700 delay-300">
            <Card className="border-slate-200 dark:border-slate-800 rounded-3xl shadow-sm">
                <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-lg">Rotas Fixas</CardTitle>
                            <CardDescription>URLs permanentes no banco.</CardDescription>
                        </div>
                        <CreateRouteDialog 
                            contentOptions={allContentOptions}
                            onRouteCreated={fetchAllData}
                        />
                    </div>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <Skeleton key={i} className="h-40 w-full rounded-2xl bg-slate-50 dark:bg-slate-900" />
                        ))
                    ) : existingRoutes.length === 0 ? (
                        <div className="py-12 text-center opacity-40">
                            <Layout className="h-10 w-10 mx-auto mb-2" />
                            <p className="font-medium">Nenhuma rota fixa.</p>
                        </div>
                    ) : (
                        existingRoutes.map((route) => (
                            <RouteCard
                                key={route.path}
                                route={route}
                                contentOptions={allContentOptions}
                                onSave={handleSaveRoute}
                                onDelete={handleDeleteRoute}
                            />
                        ))
                    )}
                </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
}