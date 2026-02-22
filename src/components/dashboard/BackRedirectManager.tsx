"use client";

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DashboardSwitch } from '@/components/dashboard/DashboardSwitch';
import { ArrowLeftSquare, Save, Loader2, Link as LinkIcon } from 'lucide-react';
import { toast } from "sonner";
import { cn } from '@/lib/utils';

export const BackRedirectManager = () => {
  const [config, setConfig] = useState({ url: '', enabled: false });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/settings/back-redirect')
      .then(res => res.json())
      .then(data => {
        setConfig(data);
        setIsLoading(false);
      });
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      const res = await fetch('/api/settings/back-redirect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      if (res.ok) toast.success("Configuração de Back Redirect atualizada!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return null;

  return (
    <Card className="border-slate-200 dark:border-slate-800 rounded-[2rem] overflow-hidden shadow-sm">
      <CardHeader className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800">
        <CardTitle className="text-xl flex items-center gap-3">
          <ArrowLeftSquare className="h-5 w-5 text-orange-600" /> 
          Back Redirect Global
        </CardTitle>
        <CardDescription>Redirecione o usuário para outra página quando ele clicar no botão "Voltar" do navegador.</CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <div className="flex items-center justify-between p-4 bg-[#FDF8F3] dark:bg-slate-950 border border-orange-100 dark:border-slate-800 rounded-2xl">
          <div className="space-y-0.5">
            <Label className="text-sm font-bold">Ativar Redirecionamento</Label>
            <p className="text-xs text-slate-500">Se desativado, o botão voltar funcionará normalmente.</p>
          </div>
          <DashboardSwitch 
            checked={config.enabled}
            onCheckedChange={(checked) => setConfig({ ...config, enabled: checked })}
          />
        </div>

        <div className="space-y-3">
          <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">URL de Destino</Label>
          <div className="relative">
            <Input 
              placeholder="https://exemplo.com/pagina-de-vendas" 
              value={config.url}
              onChange={e => setConfig({ ...config, url: e.target.value })}
              className="h-14 rounded-2xl bg-white dark:bg-slate-950 border-slate-200 dark:border-slate-800 pl-12"
            />
            <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          </div>
          <p className="text-[10px] text-slate-400 font-medium">Recomendado: Use uma página de aprovação ou outra oferta similar.</p>
        </div>

        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold transition-all shadow-lg"
        >
          {isSaving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" />}
          Salvar Configuração de Back
        </Button>
      </CardContent>
    </Card>
  );
};