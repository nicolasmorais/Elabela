"use client";

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Zap, Layout, Globe, Save, Loader2 } from 'lucide-react';

export const runtime = 'edge';

interface TaboolaConfig {
  globalId: string;
  pageOverrides: Record<string, string>;
}

const STATIC_PAGES = [
  { id: 'v1', name: 'Advertorial V1' },
  { id: 'v2', name: 'Advertorial V2' },
  { id: 'v3', name: 'Advertorial V3' },
  { id: 'ap', name: 'Página de Aprovação' },
];

export default function TaboolaPixelPage() {
  const [config, setConfig] = useState<TaboolaConfig>({ globalId: '', pageOverrides: {} });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/settings/pixels/taboola')
      .then(res => res.json())
      .then(data => { setConfig(data); setIsLoading(false); })
      .catch(() => { toast.error("Erro ao carregar."); setIsLoading(false); });
  }, []);

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await fetch('/api/settings/pixels/taboola', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(config)
      });
      toast.success("Salvo com sucesso!");
    } catch (e) {
      toast.error("Erro ao salvar.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <Skeleton className="h-96 w-full" />;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Toaster richColors />
      <h1 className="text-3xl font-black tracking-tight flex items-center gap-2"><Zap className="text-[#0061FF]" /> Pixel Taboola</h1>
      <Card className="rounded-3xl overflow-hidden">
        <CardHeader className="bg-slate-50/50 border-b">
          <CardTitle>Configuração Global</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
            <Label className="uppercase text-[10px] font-black">ID da Conta</Label>
            <Input value={config.globalId} onChange={e => setConfig({...config, globalId: e.target.value})} className="h-12 rounded-xl mt-1" />
        </CardContent>
      </Card>
      <Button onClick={handleSave} disabled={isSaving} className="bg-[#0061FF] text-white w-full h-16 font-black rounded-2xl">
        {isSaving ? "Salvando..." : "Salvar Configurações"}
      </Button>
    </div>
  );
}