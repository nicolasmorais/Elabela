"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Database, ShoppingBag, Save, RefreshCw, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function SettingsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [hairConfig, setHairConfig] = useState({ priceCard: '', pricePix: '', checkoutUrl: '' });

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/settings/haircare');
      const data = await res.json();
      setHairConfig(data);
    } catch (error) {
      toast.error("Erro ao carregar configurações.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSaveHair = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/haircare', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(hairConfig)
      });
      if (res.ok) toast.success("Preços e links atualizados!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <div className="p-8 space-y-4"><Skeleton className="h-40 w-full" /><Skeleton className="h-40 w-full" /></div>;

  return (
    <>
      <Toaster richColors />
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Configurações do Sistema</h1>
          <p className="text-gray-500">Gerencie preços de ofertas e status do banco.</p>
        </div>

        {/* EDITOR DO CAVALO DE RAÇA */}
        <Card className="border-orange-200 dark:border-orange-900/30 shadow-sm">
          <CardHeader className="bg-orange-50/50 dark:bg-orange-950/10">
            <CardTitle className="flex items-center gap-2 text-orange-950 dark:text-orange-200">
              <ShoppingBag className="h-5 w-5" /> 
              Oferta: Cavalo de Raça
            </CardTitle>
            <CardDescription>Edite os valores exibidos na página /cavalo-de-raca</CardDescription>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Preço Cartão (Texto livre)</Label>
                    <Input 
                        value={hairConfig.priceCard} 
                        onChange={e => setHairConfig({...hairConfig, priceCard: e.target.value})} 
                        placeholder="Ex: R$ 157,00"
                    />
                </div>
                <div className="space-y-2">
                    <Label>Preço PIX (Somente números)</Label>
                    <Input 
                        value={hairConfig.pricePix} 
                        onChange={e => setHairConfig({...hairConfig, pricePix: e.target.value})} 
                        placeholder="Ex: 97,00"
                    />
                </div>
            </div>
            <div className="space-y-2">
                <Label>Link do Botão de Compra (Checkout)</Label>
                <Input 
                    value={hairConfig.checkoutUrl} 
                    onChange={e => setHairConfig({...hairConfig, checkoutUrl: e.target.value})} 
                    placeholder="https://pay.oneconversion.pro/..."
                />
            </div>
            <div className="flex justify-end pt-2">
                <Button onClick={handleSaveHair} disabled={isSaving} className="bg-orange-600 hover:bg-orange-700 text-white font-bold">
                    {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Salvar Preços
                </Button>
            </div>
          </CardContent>
        </Card>

        {/* OUTRAS OPÇÕES EXISTENTES */}
        <Card className="border-gray-200 dark:border-slate-800">
            <CardHeader><CardTitle className="text-lg">Diagnóstico</CardTitle></CardHeader>
            <CardContent className="flex gap-4">
                <Link href="/dashboard/db-test">
                    <Button variant="outline" className="flex items-center gap-2">
                        <Database size={16} /> Teste de Banco
                    </Button>
                </Link>
                <Button onClick={fetchData} variant="ghost" className="flex items-center gap-2">
                    <RefreshCw size={16} /> Atualizar Status
                </Button>
            </CardContent>
        </Card>
      </div>
    </>
  );
}