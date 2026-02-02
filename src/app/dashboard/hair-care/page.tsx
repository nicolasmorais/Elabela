"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { ShoppingBag, Save, Loader2, Link as LinkIcon, DollarSign } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HairCareConfig {
  cardPrice: string;
  pixPrice: string;
  checkoutUrl: string;
}

export default function HairCareEditorPage() {
  const [config, setConfig] = useState<HairCareConfig>({ cardPrice: '', pixPrice: '', checkoutUrl: '' });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/settings/hair-care')
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setIsLoading(false);
      })
      .catch(() => {
        toast.error("Erro ao carregar configurações.");
        setIsLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/hair-care', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      if (res.ok) toast.success("Preços e links atualizados!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-8 space-y-6"><Skeleton className="h-40 w-full" /><Skeleton className="h-64 w-full" /></div>;

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <Toaster richColors />
      
      <div>
        <h1 className="text-3xl font-black tracking-tight flex items-center gap-2">
            <ShoppingBag className="text-[#0061FF]" /> Editor: Cavalo de Raça
        </h1>
        <p className="text-slate-500 font-medium">Gerencie os valores e o destino de compra desta página.</p>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-3xl overflow-hidden">
        <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
          <CardTitle className="text-lg flex items-center gap-2"><DollarSign className="h-5 w-5 text-green-500" /> Precificação</CardTitle>
          <CardDescription>Estes valores serão exibidos nos blocos de oferta da página.</CardDescription>
        </CardHeader>
        <CardContent className="pt-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label className="text-xs font-black uppercase text-slate-400">Preço Cartão (Texto)</Label>
                <Input 
                    value={config.cardPrice}
                    onChange={e => setConfig({...config, cardPrice: e.target.value})}
                    placeholder="Ex: 157,00"
                    className="h-12 rounded-xl bg-white dark:bg-slate-950"
                />
            </div>
            <div className="space-y-2">
                <Label className="text-xs font-black uppercase text-slate-400">Preço PIX (Texto)</Label>
                <Input 
                    value={config.pixPrice}
                    onChange={e => setConfig({...config, pixPrice: e.target.value})}
                    placeholder="Ex: 97,00"
                    className="h-12 rounded-xl bg-white dark:bg-slate-950"
                />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-slate-200 dark:border-slate-800 shadow-sm rounded-3xl">
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2"><LinkIcon className="h-5 w-5 text-blue-500" /> Link de Checkout</CardTitle>
          <CardDescription>Para onde o usuário será enviado ao clicar no botão de compra.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs font-black uppercase text-slate-400">URL de Destino</Label>
            <Input 
                value={config.checkoutUrl}
                onChange={e => setConfig({...config, checkoutUrl: e.target.value})}
                placeholder="https://suaplataforma.com/checkout..."
                className="h-12 rounded-xl bg-white dark:bg-slate-950"
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-center pt-4">
        <Button 
            onClick={handleSave} 
            disabled={isSaving}
            className="bg-[#0061FF] hover:bg-[#0050D1] text-white rounded-2xl font-black h-16 px-12 shadow-xl shadow-blue-500/30 text-lg transition-all hover:scale-105 active:scale-95"
        >
            {isSaving ? <Loader2 className="h-6 w-6 animate-spin mr-3" /> : <Save className="h-6 w-6 mr-3" />}
            SALVAR ALTERAÇÕES
        </Button>
      </div>
    </div>
  );
}