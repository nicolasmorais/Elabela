"use client";

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { 
  ArrowLeftRight, 
  Plus, 
  Trash2, 
  Save, 
  Loader2, 
  Search, 
  Globe,
  ExternalLink,
  Link2
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageOption {
    id: string;
    name: string;
}

const STATIC_PAGES = [
  { id: 'v1', name: 'Advertorial V1' },
  { id: 'v2', name: 'Advertorial V2' },
  { id: 'v3', name: 'Advertorial V3' },
  { id: 'ap', name: 'Página de Aprovação (AP)' },
  { id: 'menopausa', name: 'Menopausa Nunca Mais' },
  { id: 'dor-zero', name: 'Dolorzero' },
  { id: 'cavalo-de-raca', name: 'Kit Cavalo de Raça' },
  { id: 'antiqueda', name: 'Tratamento Antiqueda V1' },
  { id: 'antiqueda2', name: 'Tratamento Antiqueda V2' },
  { id: 'antiqueda3', name: 'Tratamento Antiqueda V3' },
  { id: 'clareador', name: 'Clareador' },
  { id: 'novoclareador', name: 'Novo Clareador V2' },
  { id: 'advkcr', name: 'Advertorial KCR' },
];

export default function BackRedirectsPage() {
  const [redirects, setRedirects] = useState<Record<string, string>>({});
  const [dynamicPages, setDynamicPages] = useState<PageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  // States para novo redirecionamento
  const [newSlug, setNewSlug] = useState('');
  const [newTarget, setNewTarget] = useState('');

  const allPageOptions = useMemo(() => [...STATIC_PAGES, ...dynamicPages], [dynamicPages]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [redirectsRes, dynamicRes] = await Promise.all([
          fetch('/api/settings/page-back-redirects'),
          fetch('/api/custom-advertorials')
        ]);
        const redirectsData = await redirectsRes.json();
        const dynamicData = await dynamicRes.json();
        
        setRedirects(redirectsData || {});
        setDynamicPages(Array.isArray(dynamicData) ? dynamicData : []);
      } catch (e) {
        toast.error("Erro ao carregar configurações.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSave = async (currentRedirects: Record<string, string>) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/page-back-redirects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentRedirects)
      });
      if (res.ok) toast.success("Configurações atualizadas!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  const addRedirect = () => {
    if (!newSlug || !newTarget) {
        toast.error("Selecione a página e o destino.");
        return;
    }
    const updated = { ...redirects, [newSlug]: newTarget };
    setRedirects(updated);
    handleSave(updated);
    setNewSlug('');
    setNewTarget('');
  };

  const removeRedirect = (slug: string) => {
    const updated = { ...redirects };
    delete updated[slug];
    setRedirects(updated);
    handleSave(updated);
  };

  const filteredSlugs = Object.keys(redirects).filter(slug => 
    slug.toLowerCase().includes(searchTerm.toLowerCase()) || 
    redirects[slug].toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) return (
    <div className="max-w-5xl mx-auto space-y-8 animate-pulse">
        <Skeleton className="h-12 w-48 rounded-lg" />
        <Skeleton className="h-40 w-full rounded-3xl" />
        <Skeleton className="h-96 w-full rounded-3xl" />
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <Toaster richColors position="top-center" />
      
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3 text-slate-900 dark:text-white">
              <div className="p-2 bg-orange-600 rounded-xl text-white shadow-lg shadow-orange-500/20">
                <ArrowLeftRight size={24} />
              </div>
              Back Redirect Pro
          </h1>
          <p className="text-slate-500 font-medium mt-1">Configure redirecionamentos individuais para quando o usuário clicar em "Voltar".</p>
        </div>
      </div>

      {/* 1. ADICIONAR NOVO */}
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] overflow-hidden">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100">
          <CardTitle className="text-lg">Novo Redirecionamento</CardTitle>
          <CardDescription>Vincule uma página a um destino de volta específico.</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-4 space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Página de Origem</Label>
                <Select value={newSlug} onValueChange={setNewSlug}>
                    <SelectTrigger className="h-12 rounded-xl bg-white dark:bg-slate-950">
                        <SelectValue placeholder="Selecione a página..." />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl">
                        {allPageOptions.map(opt => (
                            <SelectItem key={opt.id} value={opt.id}>{opt.name} (/{opt.id})</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            
            <div className="md:col-span-5 space-y-2">
                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">URL ou Caminho de Destino</Label>
                <div className="relative">
                    <Input 
                        placeholder="Ex: /ap ou https://site.com" 
                        value={newTarget}
                        onChange={e => setNewTarget(e.target.value)}
                        className="h-12 rounded-xl bg-white dark:bg-slate-950 pl-10"
                    />
                    <Link2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                </div>
            </div>

            <div className="md:col-span-3">
                <Button 
                    onClick={addRedirect} 
                    disabled={isSaving}
                    className="w-full h-12 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-bold gap-2"
                >
                    <Plus size={18} /> Criar Regra
                </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. LISTA DE REGRAS ATIVAS */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <Globe className="text-slate-400" size={20} />
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Regras Ativas</h2>
            </div>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input 
                    placeholder="Filtrar regras..." 
                    className="pl-10 h-11 rounded-xl bg-white dark:bg-slate-900"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
            {filteredSlugs.length === 0 ? (
                <div className="py-20 text-center bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-medium italic">Nenhuma regra de redirecionamento encontrada.</p>
                </div>
            ) : (
                filteredSlugs.map(slug => (
                    <div key={slug} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] shadow-sm hover:border-orange-200 transition-all">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Se estiver em:</span>
                                <div className="flex items-center gap-2">
                                    <Globe size={16} className="text-blue-500" />
                                    <span className="font-bold text-slate-900 dark:text-white">/{slug}</span>
                                </div>
                            </div>
                            <div className="hidden md:block text-slate-200"><ArrowLeftRight size={20} /></div>
                            <div className="flex flex-col">
                                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Voltar para:</span>
                                <div className="flex items-center gap-2">
                                    <Link2 size={16} className="text-orange-500" />
                                    <span className="font-bold text-slate-900 dark:text-white truncate max-w-[200px]">{redirects[slug]}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link href={`/${slug}`} target="_blank">
                                <Button variant="ghost" size="sm" className="rounded-xl font-bold h-10">
                                    <ExternalLink size={14} className="mr-2" /> Testar
                                </Button>
                            </Link>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                onClick={() => removeRedirect(slug)}
                                className="h-10 w-10 rounded-xl text-red-400 hover:text-red-600 hover:bg-red-50"
                            >
                                <Trash2 size={18} />
                            </Button>
                        </div>
                    </div>
                ))
            )}
        </div>
      </div>

    </div>
  );
}