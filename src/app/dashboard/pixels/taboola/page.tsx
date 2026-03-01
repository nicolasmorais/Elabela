"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Zap, Layout, Globe, Save, Loader2, Search, Settings2, LayoutGrid, ShoppingBag } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaboolaConfig { globalId: string; pageOverrides: Record<string, string>; }

const SYSTEM_PAGES = [
  { id: 'v1', name: 'Advertorial Principal V1', category: 'Estática' },
  { id: 'v2', name: 'Advertorial Japonês V2', category: 'Estática' },
  { id: 'v3', name: 'Advertorial Editorial V3', category: 'Estática' },
  { id: 'ap', name: 'Página de Aprovação (AP)', category: 'Sistema' },
  { id: 'menopausa', name: 'Menopausa Nunca Mais', category: 'Vendas' },
  { id: 'dor-zero', name: 'Dolorzero (Articulações)', category: 'Vendas' },
  { id: 'cavalo-de-raca', name: 'Kit Cavalo de Raça (Cabelo)', category: 'Vendas' },
  { id: 'antiqueda', name: 'Tratamento Antiqueda V1', category: 'Vendas' },
  { id: 'antiqueda2', name: 'Tratamento Antiqueda V2', category: 'Vendas' },
  { id: 'antiqueda3', name: 'Tratamento Antiqueda V3', category: 'Vendas' },
  { id: 'kcrpromo', name: 'KCR Promo', category: 'Vendas' },
  { id: 'clareador', name: 'Clareador', category: 'Vendas' },
  { id: 'novoclareador', name: 'Novo Clareador V2', category: 'Vendas' },
  { id: 'advkcr', name: 'Advertorial KCR', category: 'Vendas' },
  { id: 'adv-kcr-v2', name: 'Advertorial KCR V2 (Relato)', category: 'Vendas' }, // NEW
  { id: 'adv-kcr-v3', name: 'Advertorial KCR V3 (Diário)', category: 'Vendas' },
];

export default function TaboolaPixelPage() {
  const [config, setConfig] = useState<TaboolaConfig>({ globalId: '', pageOverrides: {} });
  const [dynamicPages, setDynamicPages] = useState<{id: string, name: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [configRes, dynamicRes] = await Promise.all([fetch('/api/settings/pixels/taboola'), fetch('/api/custom-advertorials')]);
        const configData = await configRes.json();
        const dynamicData = await dynamicRes.json();
        setConfig({ globalId: configData.globalId || '', pageOverrides: configData.pageOverrides || {} });
        setDynamicPages(Array.isArray(dynamicData) ? dynamicData : []);
      } catch (e) { toast.error("Erro ao carregar."); } finally { setIsLoading(false); }
    };
    fetchData();
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/pixels/taboola', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(config) });
      if (res.ok) toast.success("Pixel atualizado!");
    } catch (e) { toast.error("Erro ao salvar."); } finally { setIsSaving(false); }
  };

  const updateOverride = (pageId: string, val: string) => { setConfig(prev => ({ ...prev, pageOverrides: { ...prev.pageOverrides, [pageId]: val } })); };
  const filteredSystemPages = useMemo(() => SYSTEM_PAGES.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase())), [searchTerm]);
  const filteredDynamicPages = useMemo(() => dynamicPages.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase())), [dynamicPages, searchTerm]);

  if (isLoading) return <div className="max-w-5xl mx-auto space-y-8 animate-pulse"><Skeleton className="h-12 w-48" /><Skeleton className="h-40 w-full" /><Skeleton className="h-96 w-full" /></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <Toaster richColors position="top-center" />
      <div className="flex items-center justify-between border-b pb-8">
        <div><h1 className="text-3xl font-black tracking-tight flex items-center gap-3"><div className="p-2 bg-[#0061FF] rounded-xl text-white shadow-lg"><Zap size={24} /></div> Pixel do Taboola</h1><p className="text-slate-500 font-medium">Rastreamento global e por página.</p></div>
        <Button onClick={handleSave} disabled={isSaving} className="h-12 px-8 bg-[#0061FF] font-bold rounded-xl">{isSaving ? <Loader2 className="animate-spin" /> : <Save />} Salvar</Button>
      </div>

      <Card className="border-l-4 border-l-[#0061FF]"><CardHeader><CardTitle className="flex items-center gap-2"><Globe size={20} /> Pixel Global</CardTitle><CardDescription>Usado em todas as páginas sem ID específico.</CardDescription></CardHeader><CardContent className="p-8"><div className="max-w-md space-y-2"><Label className="text-[10px] font-black uppercase">ID Taboola Global</Label><Input value={config.globalId} onChange={e => setConfig({...config, globalId: e.target.value})} className="h-12 rounded-xl" /></div></CardContent></Card>

      <div className="space-y-6">
        <div className="flex items-center justify-between"><div className="flex items-center gap-2"><LayoutGrid size={20} /><h2 className="text-xl font-black uppercase">Configurações Específicas</h2></div><div className="relative w-80"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" /><Input placeholder="Buscar página..." className="pl-10 h-11 rounded-xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div></div>
        <Card className="rounded-[2rem] overflow-hidden"><CardHeader className="border-b"><CardTitle className="text-xs font-black uppercase text-slate-400">Páginas do Sistema</CardTitle></CardHeader><CardContent className="p-0"><div className="divide-y">{filteredSystemPages.map(page => (<div key={page.id} className="flex items-center justify-between p-6"><div><p className="font-bold">{page.name}</p><code className="text-xs text-slate-400">/{page.id}</code></div><Input placeholder="ID do Pixel" className="w-72 h-11" value={config.pageOverrides[page.id] || ''} onChange={e => updateOverride(page.id, e.target.value)} /></div>))}</div></CardContent></Card>
      </div>
    </div>
  );
}