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
import { ArrowLeftRight, Plus, Trash2, Save, Loader2, Search, Globe, ExternalLink, Link2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PageOption { id: string; name: string; }

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
  { id: 'kcrpromo', name: 'KCR Promo' },
  { id: 'kcroriginal', name: 'KCR Original Modular' },
  { id: 'clareador', name: 'Clareador' },
  { id: 'novoclareador', name: 'Novo Clareador V2' },
  { id: 'advkcr', name: 'Advertorial KCR' },
  { id: 'adv-kcr-v2', name: 'Advertorial KCR V2 (Relato)' },
  { id: 'adv-kcr-v3', name: 'Advertorial KCR V3 (Diário)' },
];

export default function BackRedirectsPage() {
  const [redirects, setRedirects] = useState<Record<string, string>>({});
  const [dynamicPages, setDynamicPages] = useState<PageOption[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [newTarget, setNewTarget] = useState('');

  const allPageOptions = useMemo(() => [...STATIC_PAGES, ...dynamicPages], [dynamicPages]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [redirectsRes, dynamicRes] = await Promise.all([fetch('/api/settings/page-back-redirects'), fetch('/api/custom-advertorials')]);
        const redirectsData = await redirectsRes.json();
        const dynamicData = await dynamicRes.json();
        setRedirects(redirectsData || {});
        setDynamicPages(Array.isArray(dynamicData) ? dynamicData : []);
      } catch (e) { toast.error("Erro ao carregar."); } finally { setIsLoading(false); }
    };
    fetchData();
  }, []);

  const handleSave = async (currentRedirects: Record<string, string>) => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/page-back-redirects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(currentRedirects) });
      if (res.ok) toast.success("Configurações atualizadas!");
    } catch (e) { toast.error("Erro ao salvar."); } finally { setIsSaving(false); }
  };

  const addRedirect = () => {
    if (!newSlug || !newTarget) { toast.error("Selecione a página e o destino."); return; }
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

  const filteredSlugs = Object.keys(redirects).filter(slug => slug.toLowerCase().includes(searchTerm.toLowerCase()) || redirects[slug].toLowerCase().includes(searchTerm.toLowerCase()));

  if (isLoading) return <div className="max-w-5xl mx-auto space-y-8 animate-pulse"><Skeleton className="h-12 w-48" /><Skeleton className="h-40 w-full" /><Skeleton className="h-96 w-full" /></div>;

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      <Toaster richColors position="top-center" />
      <div className="flex items-center justify-between border-b pb-8">
        <div><h1 className="text-3xl font-black tracking-tight flex items-center gap-3"><div className="p-2 bg-orange-600 rounded-xl text-white shadow-lg"><ArrowLeftRight size={24} /></div> Back Redirect Pro</h1><p className="text-slate-500 font-medium">Redirecionamentos individuais por página.</p></div>
      </div>

      <Card className="rounded-[2rem] overflow-hidden"><CardHeader className="bg-slate-50 border-b"><CardTitle className="text-lg">Novo Redirecionamento</CardTitle></CardHeader><CardContent className="p-8"><div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end"><div className="md:col-span-4 space-y-2"><Label className="text-[10px] font-black uppercase text-slate-400">Origem</Label><Select value={newSlug} onValueChange={setNewSlug}><SelectTrigger className="h-12 rounded-xl"><SelectValue placeholder="Página..." /></SelectTrigger><SelectContent>{allPageOptions.map(opt => (<SelectItem key={opt.id} value={opt.id}>{opt.name} (/{opt.id})</SelectItem>))}</SelectContent></Select></div><div className="md:col-span-5 space-y-2"><Label className="text-[10px] font-black uppercase text-slate-400">Destino</Label><div className="relative"><Input placeholder="/ap ou https://..." value={newTarget} onChange={e => setNewTarget(e.target.value)} className="h-12 rounded-xl pl-10" /><Link2 size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" /></div></div><div className="md:col-span-3"><Button onClick={addRedirect} disabled={isSaving} className="w-full h-12 bg-slate-900 font-bold"><Plus size={18} className="mr-2" /> Criar Regra</Button></div></div></CardContent></Card>

      <div className="space-y-6"><div className="flex items-center justify-between"><div className="flex items-center gap-2"><Globe className="text-slate-400" size={20} /><h2 className="text-xl font-black uppercase">Regras Ativas</h2></div><div className="relative w-80"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" /><Input placeholder="Filtrar..." className="pl-10 h-11 rounded-xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /></div></div><div className="grid grid-cols-1 gap-4">{filteredSlugs.map(slug => (<div key={slug} className="flex items-center justify-between p-6 bg-white border rounded-[2rem] shadow-sm hover:border-orange-200"><div><span className="text-[10px] font-black uppercase text-slate-400">/{slug}</span><div className="flex items-center gap-2"><span className="font-bold text-slate-900">Volta para: {redirects[slug]}</span></div></div><div className="flex gap-2"><Link href={`/${slug}`} target="_blank"><Button variant="ghost" size="sm" className="rounded-xl font-bold">Testar</Button></Link><Button variant="ghost" size="icon" onClick={() => removeRedirect(slug)} className="h-10 w-10 text-red-400"><Trash2 size={18} /></Button></div></div>))}</div></div>
    </div>
  );
}