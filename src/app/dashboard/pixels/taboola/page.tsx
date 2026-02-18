"use client";

import { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { 
  Zap, 
  Layout, 
  Globe, 
  Save, 
  Loader2, 
  Info, 
  Search, 
  Filter, 
  Settings2,
  FileText,
  LayoutGrid,
  ShoppingBag
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TaboolaConfig {
  globalId: string;
  pageOverrides: Record<string, string>;
}

// Centralizando a lista de páginas do sistema para garantir que todas apareçam aqui
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
  { id: 'clareador', name: 'Clareador', category: 'Vendas' },
  { id: 'novoclareador', name: 'Novo Clareador V2', category: 'Vendas' },
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
        const [configRes, dynamicRes] = await Promise.all([
          fetch('/api/settings/pixels/taboola'),
          fetch('/api/custom-advertorials')
        ]);
        const configData = await configRes.json();
        const dynamicData = await dynamicRes.json();
        
        setConfig({
            globalId: configData.globalId || '',
            pageOverrides: configData.pageOverrides || {}
        });
        setDynamicPages(Array.isArray(dynamicData) ? dynamicData : []);
      } catch (e) {
        toast.error("Erro ao carregar configurações de pixel.");
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
      if (res.ok) {
          toast.success("Configurações de Pixel aplicadas com sucesso!");
      } else {
          throw new Error();
      }
    } catch (e) {
      toast.error("Erro ao salvar configurações.");
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

  const filteredSystemPages = useMemo(() => 
    SYSTEM_PAGES.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
    ), [searchTerm]);

  const filteredDynamicPages = useMemo(() => 
    dynamicPages.filter(p => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        p.id.toLowerCase().includes(searchTerm.toLowerCase())
    ), [dynamicPages, searchTerm]);

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
      
      {/* Header com Ação */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight flex items-center gap-3 text-slate-900 dark:text-white">
              <div className="p-2 bg-[#0061FF] rounded-xl text-white shadow-lg shadow-blue-500/20">
                <Zap size={24} />
              </div>
              Pixel do Taboola
          </h1>
          <p className="text-slate-500 font-medium mt-1">Gerencie o rastreamento global e específico por página.</p>
        </div>
        <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="h-12 px-8 bg-[#0061FF] hover:bg-[#0050D1] text-white rounded-xl font-bold shadow-xl shadow-blue-500/20 transition-all hover:scale-[1.02] active:scale-95"
        >
            {isSaving ? <Loader2 className="h-5 w-5 animate-spin mr-2" /> : <Save className="h-5 w-5 mr-2" />}
            Salvar Configurações
        </Button>
      </div>

      {/* 1. CONFIGURAÇÃO GLOBAL */}
      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-[2rem] overflow-hidden border-l-4 border-l-[#0061FF]">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-xl flex items-center gap-3">
            <Globe className="h-5 w-5 text-blue-500" /> 
            ID do Pixel Global
          </CardTitle>
          <CardDescription>Este ID será disparado em todas as páginas que não possuírem um ID específico configurado abaixo.</CardDescription>
        </CardHeader>
        <CardContent className="p-8">
          <div className="max-w-md space-y-3">
            <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ID da Conta Taboola (Global)</Label>
            <div className="relative group">
                <Input 
                    placeholder="Ex: 1234567" 
                    value={config.globalId}
                    onChange={e => setConfig({...config, globalId: e.target.value})}
                    className="h-14 rounded-2xl bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-lg font-mono focus:ring-4 focus:ring-blue-500/10 transition-all"
                />
                <div className="absolute inset-y-0 right-4 flex items-center text-slate-300 group-focus-within:text-blue-500 transition-colors">
                    <Settings2 size={20} />
                </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. OVERRIDES POR PÁGINA */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
                <LayoutGrid className="text-slate-400" size={20} />
                <h2 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Configurações Específicas</h2>
            </div>
            <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input 
                    placeholder="Buscar página ou ID..." 
                    className="pl-10 h-11 rounded-xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
            {/* Páginas do Sistema */}
            <Card className="border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden">
                <CardHeader className="border-b border-slate-50 dark:border-slate-800">
                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Páginas de Vendas e Sistema</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-50 dark:divide-slate-800">
                        {filteredSystemPages.length === 0 && (
                            <div className="p-12 text-center text-slate-400 font-medium italic">Nenhuma página encontrada para sua busca.</div>
                        )}
                        {filteredSystemPages.map(page => (
                            <div key={page.id} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all">
                                        {page.category === 'Vendas' ? <ShoppingBag size={20} className="text-pink-500" /> : <Layout size={20} className="text-blue-500" />}
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-900 dark:text-white leading-none mb-1">{page.name}</p>
                                        <code className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">/{page.id}</code>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 md:w-72">
                                    <Input 
                                        placeholder="ID do Pixel (Ex: 987654)" 
                                        className="h-11 rounded-xl bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 font-mono text-sm"
                                        value={config.pageOverrides[page.id] || ''}
                                        onChange={e => updateOverride(page.id, e.target.value)}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Advertoriais Dinâmicos */}
            <Card className="border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden">
                <CardHeader className="border-b border-slate-50 dark:border-slate-800">
                    <CardTitle className="text-sm font-black uppercase tracking-[0.2em] text-slate-400">Advertoriais Dinâmicos (Criados por Você)</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="divide-y divide-slate-50 dark:divide-slate-800">
                        {filteredDynamicPages.length === 0 ? (
                            <div className="p-12 text-center text-slate-400 font-medium italic">
                                {searchTerm ? "Nenhum advertorial dinâmico encontrado." : "Você ainda não criou nenhum advertorial dinâmico."}
                            </div>
                        ) : (
                            filteredDynamicPages.map(page => (
                                <div key={page.id} className="group flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors">
                                    <div className="flex items-center gap-4 overflow-hidden">
                                        <div className="p-3 bg-white dark:bg-slate-950 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all shrink-0">
                                            <FileText size={20} className="text-slate-400" />
                                        </div>
                                        <div className="truncate">
                                            <p className="font-bold text-slate-900 dark:text-white leading-none mb-1 truncate">{page.name}</p>
                                            <code className="text-[10px] font-mono text-slate-400 uppercase tracking-widest truncate">ID: {page.id}</code>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 md:w-72">
                                        <Input 
                                            placeholder="ID do Pixel Específico" 
                                            className="h-11 rounded-xl bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 font-mono text-sm"
                                            value={config.pageOverrides[page.id] || ''}
                                            onChange={e => updateOverride(page.id, e.target.value)}
                                        />
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>

      {/* Explicação e Dicas */}
      <div className="bg-[#FDF8F3] dark:bg-slate-900 p-8 rounded-[2.5rem] border border-orange-100 dark:border-slate-800 flex items-start gap-6">
        <div className="p-4 bg-orange-100 dark:bg-orange-950/30 text-orange-700 rounded-2xl shrink-0">
            <Info size={28} />
        </div>
        <div className="space-y-3">
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-tight">Como o Rastreamento é Aplicado</h3>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                O sistema utiliza uma hierarquia inteligente para decidir qual ID de Pixel disparar:
            </p>
            <ol className="space-y-2 text-sm text-slate-500 dark:text-slate-400 list-decimal pl-4 font-bold">
                <li><span className="text-slate-900 dark:text-white font-black">1º Prioridade:</span> ID Específico definido nesta página para o caminho acessado.</li>
                <li><span className="text-slate-900 dark:text-white font-black">2º Prioridade:</span> Se não houver específico, usa o ID Global definido no topo.</li>
                <li><span className="text-slate-900 dark:text-white font-black">3º Prioridade:</span> Se nenhum for configurado, o pixel não será disparado.</li>
            </ol>
        </div>
      </div>

      {/* Botão Flutuante de Salvar para Layouts Longos */}
      <div className="sticky bottom-6 flex justify-center z-40 pointer-events-none">
        <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="pointer-events-auto bg-[#0061FF] hover:bg-[#0050D1] text-white rounded-2xl font-black h-16 px-12 shadow-2xl shadow-blue-500/40 text-lg transition-all hover:scale-105 active:scale-95"
        >
            {isSaving ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Save className="h-6 w-6 mr-3" />}
            APLICAR ALTERAÇÕES
        </Button>
      </div>
    </div>
  );
}