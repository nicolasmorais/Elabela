"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Zap, Layout, Globe, Save, Loader2, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaboolaConfig {
  globalId: string;
  pageOverrides: Record<string, string>;
}

const STATIC_PAGES = [
  { id: 'v1', name: 'Advertorial V1' },
  { id: 'v2', name: 'Advertorial V2' },
  { id: 'v3', name: 'Advertorial V3' },
  { id: 'ap', name: 'Página de Aprovação' },
  { id: 'menopausa', name: 'Menopausa Nunca Mais' },
  { id: 'dor-zero', name: 'Dolorzero' },
  { id: 'cavalo-de-raca', name: 'Kit Cavalo de Raça' },
];

export default function TaboolaPixelPage() {
  const [config, setConfig] = useState<TaboolaConfig>({ globalId: '', pageOverrides: {} });
  const [dynamicPages, setDynamicPages] = useState<{id: string, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [configRes, dynamicRes] = await Promise.all([
          fetch('/api/settings/pixels/taboola'),
          fetch('/api/custom-advertorials')
        ]);
        const configData = await configRes.json();
        const dynamicData = await dynamicRes.json();
        
        setConfig(configData);
        setDynamicPages(dynamicData);
      } catch (e) {
        toast.error("Erro ao carregar dados.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/pixels/taboola', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      if (res.ok) toast.success("Configurações aplicadas com sucesso!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  const updateOverride = (pageId: string, val: string) => {
    setConfig(prev => ({
      ...prev,
      pageOverrides: { ...prev.pageOverrides, [pageId]: val }
    }));
  };

  if (isLoading) return <div className="space-y-6"><Skeleton className="h-40 w-full" /><Skeleton className="h-96 w-full" /></div>;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Toaster richColors />
      
      <div>
        <h1 className="text-3xl font-black tracking-tight flex items-center gap-2">
            <Zap className="text-[#0061FF]" /> Pixel Taboola
        </h1>
        <p className="text-slate-500 font-medium">Gerencie o rastreamento de conversão em massa.</p>
      </div>

      {/* Global Config */}
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-lg flex items-center gap-2"><Globe className="h-5 w-5 text-blue-500" /> Pixel Global</CardTitle>
          <CardDescription>Este ID será aplicado automaticamente em todas as páginas que não tiverem um ID específico.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-400">ID da Conta Taboola</Label>
            <Input 
                placeholder="Ex: 1234567" 
                value={config.globalId}
                onChange={e => setConfig({...config, globalId: e.target.value})}
                className="h-12 rounded-xl bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800"
            />
          </div>
        </CardContent>
      </Card>

      {/* Overrides List */}
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-3xl">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2"><Layout className="h-5 w-5 text-purple-500" /> Configurações por Página</CardTitle>
          <CardDescription>Defina IDs específicos para substituir o global se necessário.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          
          <div className="space-y-4">
            <h3 className="font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em] border-b pb-2">Páginas de Sistema e Vendas</h3>
            {STATIC_PAGES.map(page => (
              <div key={page.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                <div className="font-bold text-sm text-slate-700 dark:text-slate-200">{page.name} <span className="text-[10px] opacity-50 ml-2">/{page.id}</span></div>
                <Input 
                  placeholder="ID específico (opcional)" 
                  className="md:w-64 h-10 rounded-lg bg-white dark:bg-slate-950"
                  value={config.pageOverrides[page.id] || ''}
                  onChange={e => updateOverride(page.id, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-4">
            <h3 className="font-bold text-slate-400 text-[10px] uppercase tracking-[0.2em] border-b pb-2">Seus Advertoriais Dinâmicos</h3>
            {dynamicPages.length === 0 ? (
                <p className="text-center py-6 text-sm text-slate-400 italic">Nenhum advertorial criado ainda.</p>
            ) : (
                dynamicPages.map(page => (
                    <div key={page.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50/50 dark:bg-slate-900/30 border border-slate-100 dark:border-slate-800">
                      <div className="font-bold text-sm text-slate-700 dark:text-slate-200 truncate max-w-[200px]">{page.name}</div>
                      <Input 
                        placeholder="ID específico (opcional)" 
                        className="md:w-64 h-10 rounded-lg bg-white dark:bg-slate-950"
                        value={config.pageOverrides[page.id] || ''}
                        onChange={e => updateOverride(page.id, e.target.value)}
                      />
                    </div>
                ))
            )}
          </div>
        </CardContent>
      </Card>

      <div className="sticky bottom-8 flex justify-center">
        <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-[#0061FF] hover:bg-[#0050D1] text-white rounded-2xl font-black h-16 px-12 shadow-xl shadow-blue-500/30 text-lg transition-all hover:scale-105 active:scale-95"
        >
            {isSaving ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Save className="h-6 w-6 mr-3" />}
            APLICAR TODAS AS CONFIGURAÇÕES
        </Button>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/10 p-6 rounded-3xl border border-blue-100 dark:border-blue-900/30 flex items-start gap-4">
        <Info className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
        <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
            <strong>Como funciona:</strong> O sistema primeiro verifica se existe um ID específico para a página. Se não existir, ele tenta usar o ID Global definido no topo desta página. Se nenhum for encontrado, o rastreamento do Taboola não será disparado.
        </p>
      </div>
    </div>
  );
}