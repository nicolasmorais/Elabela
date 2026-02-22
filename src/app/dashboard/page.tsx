"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { 
  Route, 
  Plus, 
  RefreshCw, 
  Search, 
  Globe, 
  Activity, 
  Zap, 
  Settings2,
  Filter,
  ArrowRightLeft,
  Link2,
  LayoutGrid
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { CreateRouteDialog } from '@/components/dashboard/CreateRouteDialog';
import { UTMLinkGenerator } from '@/components/dashboard/UTMLinkGenerator';
import { RouteCard } from '@/components/dashboard/RouteCard';
import { AutoRouteManager } from '@/components/dashboard/AutoRouteManager';
import { Input } from '@/components/ui/input';

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
    { id: 'dor-zero', name: 'Dolorzero (Dor Crônica)' },
    { id: 'cavalo-de-raca', name: 'Kit Cavalo de Raça (Cabelo)' },
    { id: 'antiqueda', name: 'Tratamento Antiqueda V1' },
    { id: 'antiqueda2', name: 'Tratamento Antiqueda V2' },
    { id: 'antiqueda3', name: 'Tratamento Antiqueda V3' },
    { id: 'kcrpromo', name: 'KCR Promo' }, // NEW
    { id: 'clareador', name: 'Clareador' },
    { id: 'novoclareador', name: 'Novo Clareador V2 (Duplicado)' },
    { id: 'advkcr', name: 'Advertorial KCR' },
];

export default function DashboardPage() {
  const [advertorials, setAdvertorials] = useState<CustomAdvertorial[]>([]);
  const [existingRoutes, setExistingRoutes] = useState<ExistingRoute[]>([]);
  const [autoRoutes, setAutoRoutes] = useState<AutoRoute>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState('');

  const allContentOptions = useMemo(() => [...STATIC_CONTENT_OPTIONS, ...advertorials], [advertorials]);

  const fetchAllData = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const [advRes, routeRes, autoRouteRes] = await Promise.all([
        fetch('/api/custom-advertorials'),
        fetch('/api/routes'),
        fetch('/api/auto-routes')
      ]);

      const advData = advRes.ok ? await advRes.json() : [];
      const routeData = routeRes.ok ? await routeRes.json() : [];
      const autoRouteData = autoRouteRes.ok ? await autoRouteRes.json() : {};

      setAdvertorials(Array.isArray(advData) ? advData : []);
      setExistingRoutes(Array.isArray(routeData) ? routeData : []);
      setAutoRoutes(autoRouteData && typeof autoRouteData === 'object' ? autoRouteData : {});
      
      if (!advRes.ok || !routeRes.ok) {
        toast.error("Alguns dados não puderam ser carregados. Verifique a conexão com o banco.");
      }
    } catch (error: any) {
      toast.error(`Falha ao carregar os dados.`);
      setAdvertorials([]);
      setExistingRoutes([]);
      setAutoRoutes({});
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const filteredRoutes = useMemo(() => {
    if (!Array.isArray(existingRoutes)) return [];
    return existingRoutes.filter(r => 
        (r.path?.toLowerCase() || '').includes(searchQuery.toLowerCase()) || 
        (r.name?.toLowerCase() || '').includes(searchQuery.toLowerCase())
    );
  }, [existingRoutes, searchQuery]);

  const handleSaveRoute = async (path: string, contentId: string, name?: string): Promise<void> => {
    try {
      const response = await fetch('/api/routes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, contentId, name }),
      });
      if (response.ok) {
        toast.success(`Rota atualizada!`);
        fetchAllData();
      }
    } catch (error) { toast.error("Falha ao salvar."); }
  };

  const handleDeleteRoute = async (path: string, name: string): Promise<void> => {
    if (!window.confirm(`Excluir rota: ${name}?`)) return;
    try {
      const response = await fetch('/api/routes', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      });
      if (response.ok) {
        toast.success(`Rota removida.`);
        fetchAllData();
      }
    } catch (error) { toast.error("Erro ao excluir."); }
  };

  return (
    <>
      <Toaster richColors position="top-center" />
      <div className="max-w-[1400px] mx-auto space-y-8 pb-20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
                <div className="p-2 bg-[#0061FF] rounded-lg text-white"><Settings2 size={20} /></div>
                <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Route Control</h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Gerencie o tráfego e redirecionamentos de seus advertoriais.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={fetchAllData} variant="outline" className="h-11 rounded-xl border-slate-200 bg-white font-bold px-4"><RefreshCw className={cn("h-4 w-4", isLoading && "animate-spin")} /></Button>
            <UTMLinkGenerator />
            <CreateRouteDialog contentOptions={allContentOptions} onRouteCreated={fetchAllData} />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
                { label: 'Rotas Fixas', val: Array.isArray(existingRoutes) ? existingRoutes.length : 0, icon: Globe, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                { label: 'Redirecionamentos', val: autoRoutes ? Object.keys(autoRoutes).length : 0, icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-900/20' },
                { label: 'Conteúdos', val: allContentOptions.length, icon: LayoutGrid, color: 'text-[#0061FF]', bg: 'bg-blue-50 dark:bg-blue-900/20' },
                { label: 'Status BD', val: isLoading ? '...' : 'Ativo', icon: Activity, color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-900/20' },
            ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 p-4 rounded-2xl flex items-center gap-4 shadow-sm">
                    <div className={cn("p-2 rounded-xl", stat.bg, stat.color)}><stat.icon size={20} /></div>
                    <div><p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</p><p className="text-lg font-black">{stat.val}</p></div>
                </div>
            ))}
        </div>

        <Tabs defaultValue="routes" className="space-y-6">
          <TabsList className="bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border h-12"><TabsTrigger value="routes" className="rounded-lg px-6 font-bold">Gerenciar Rotas</TabsTrigger><TabsTrigger value="auto" className="rounded-lg px-6 font-bold">Redirecionamentos Rápidos</TabsTrigger></TabsList>
          <TabsContent value="routes" className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white dark:bg-slate-900 p-6 rounded-3xl border shadow-sm">
                <div className="flex-1"><h2 className="text-xl font-black">Rotas Fixas e Permanentes</h2><p className="text-sm text-slate-500 font-medium">Gerencie URLs específicas mapeadas para seus conteúdos.</p></div>
                <div className="relative w-full md:w-80"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" /><Input placeholder="Buscar rota..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="bg-slate-50 border-slate-200 rounded-xl pl-10 h-11" /></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {isLoading ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} className="h-48 w-full rounded-3xl" />) : filteredRoutes.map((route) => <RouteCard key={route.path} route={route} contentOptions={allContentOptions} onSave={handleSaveRoute} onDelete={handleDeleteRoute} />)}
            </div>
          </TabsContent>
          <TabsContent value="auto"><AutoRouteManager autoRoutes={autoRoutes || {}} contentOptions={allContentOptions} onRefresh={fetchAllData} /></TabsContent>
        </Tabs>
      </div>
    </>
  );
}