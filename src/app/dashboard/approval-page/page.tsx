"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Trash2 } from 'lucide-react';

interface Policy { title: string; trigger: string; content: string; }
interface Disclaimer { title: string; text: string; }
interface CompanyInfo { name: string; address: string; cnpj: string; contact: string; }
interface ApprovalPageFooter { disclaimers: Disclaimer[]; companyInfo: CompanyInfo; policies: Policy[]; copyright: string; }
interface ApprovalPageContent {
  header: { preTitle: string; title: string; };
  content: { intro: string; pillarsTitle: string; pillars: string[]; outro: string; };
  footer: ApprovalPageFooter;
}

const LoadingSkeleton = () => (
  <div className="space-y-6">
    <Card className="bg-zinc-900/50 border-zinc-800"><CardHeader><Skeleton className="h-6 w-1/4 bg-zinc-800" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /></CardContent></Card>
    <Card className="bg-zinc-900/50 border-zinc-800"><CardHeader><Skeleton className="h-6 w-1/4 bg-zinc-800" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-20 w-full bg-zinc-800" /><Skeleton className="h-6 w-1/3 bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-20 w-full bg-zinc-800" /></CardContent></Card>
    <Card className="bg-zinc-900/50 border-zinc-800"><CardHeader><Skeleton className="h-6 w-1/4 bg-zinc-800" /></CardHeader><CardContent className="space-y-4"><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /><Skeleton className="h-10 w-full bg-zinc-800" /></CardContent></Card>
  </div>
);

export default function ApprovalPageEditor() {
  const [content, setContent] = useState<ApprovalPageContent | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetch('/api/approval-page').then(res => res.json()).then(data => { setContent(data); setIsLoading(false); }).catch(() => { toast.error("Falha ao carregar o conteúdo da página."); setIsLoading(false); });
  }, []);

  const handleInputChange = (section: keyof ApprovalPageContent, field: string, value: string) => {
    setContent(prev => {
      if (!prev) return null;
      const newContent = { ...prev };
      (newContent[section] as any)[field] = value;
      return newContent;
    });
  };
  
  const handleNestedInputChange = (section: keyof ApprovalPageContent, nestedKey: string, field: string, value: string) => {
    setContent(prev => {
        if (!prev) return null;
        const newContent = { ...prev };
        (newContent[section] as any)[nestedKey][field] = value;
        return newContent;
    });
  };

  const handleArrayChange = <T extends object>(section: keyof ApprovalPageContent, arrayName: keyof ApprovalPageContent[keyof ApprovalPageContent], index: number, field: keyof T, value: string) => {
    setContent(prev => {
        if (!prev) return null;
        const newContent = { ...prev };
        ((newContent[section] as any)[arrayName] as T[])[index][field] = value as any;
        return newContent;
    });
  };

  const handlePillarChange = (index: number, value: string) => {
    setContent(prev => {
      if (!prev) return null;
      const newPillars = [...prev.content.pillars];
      newPillars[index] = value;
      return {
        ...prev,
        content: {
          ...prev.content,
          pillars: newPillars,
        },
      };
    });
  };
  const addPillar = () => { setContent(prev => prev ? { ...prev, content: { ...prev.content, pillars: [...prev.content.pillars, "Novo Pilar"] } } : null); };
  const removePillar = (index: number) => { setContent(prev => prev ? { ...prev, content: { ...prev.content, pillars: prev.content.pillars.filter((_, i) => i !== index) } } : null); };

  const handleSave = async () => {
    if (!content) return;
    setIsSaving(true);
    try {
      const response = await fetch('/api/approval-page', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(content) });
      if (!response.ok) throw new Error('Failed to save');
      toast.success("Conteúdo salvo com sucesso!");
    } catch (error) {
      toast.error("Falha ao salvar o conteúdo.");
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) return <LoadingSkeleton />;
  if (!content) return <p className="text-white">Não foi possível carregar o conteúdo. Por favor, tente atualizar a página.</p>;

  return (
    <>
      <Toaster richColors />
      <div className="space-y-6">
        <div className="flex items-center justify-between sticky top-4 z-10 py-2">
          <div>
            <h1 className="text-2xl font-bold text-white">Editor da Página de Aprovação</h1>
            <p className="text-zinc-400">Modifique o conteúdo exibido na página de aprovação.</p>
          </div>
          <Button onClick={handleSave} disabled={isSaving}>{isSaving ? "Salvando..." : "Salvar Alterações"}</Button>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800 text-white"><CardHeader><CardTitle>Cabeçalho</CardTitle></CardHeader><CardContent className="space-y-4"><div><Label className="text-zinc-300">Pré-Título</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.header.preTitle} onChange={e => handleInputChange('header', 'preTitle', e.target.value)} /></div><div><Label className="text-zinc-300">Título Principal</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.header.title} onChange={e => handleInputChange('header', 'title', e.target.value)} /></div></CardContent></Card>
        <Card className="bg-zinc-900/50 border-zinc-800 text-white"><CardHeader><CardTitle>Conteúdo Principal</CardTitle></CardHeader><CardContent className="space-y-4"><div><Label className="text-zinc-300">Parágrafo de Introdução</Label><Textarea className="bg-zinc-800 border-zinc-700 text-white" value={content.content.intro} onChange={e => handleInputChange('content', 'intro', e.target.value)} rows={3} /></div><div><Label className="text-zinc-300">Título da Seção de Pilares</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.content.pillarsTitle} onChange={e => handleInputChange('content', 'pillarsTitle', e.target.value)} /></div><div><Label className="text-zinc-300">Pilares</Label><div className="space-y-2">{content.content.pillars.map((pillar, index) => (<div key={index} className="flex items-center gap-2"><Input className="bg-zinc-800 border-zinc-700 text-white" value={pillar} onChange={e => handlePillarChange(index, e.target.value)} /><Button variant="ghost" size="icon" onClick={() => removePillar(index)}><Trash2 className="h-4 w-4" /></Button></div>))}<Button variant="outline" size="sm" onClick={addPillar} className="mt-2 bg-transparent border-zinc-700 hover:bg-zinc-800">Adicionar Pilar</Button></div></div><div><Label className="text-zinc-300">Parágrafo de Conclusão</Label><Textarea className="bg-zinc-800 border-zinc-700 text-white" value={content.content.outro} onChange={e => handleInputChange('content', 'outro', e.target.value)} rows={3} /></div></CardContent></Card>
        
        <Card className="bg-zinc-900/50 border-zinc-800 text-white">
            <CardHeader><CardTitle>Rodapé</CardTitle></CardHeader>
            <CardContent className="space-y-6">
                {/* Company Info */}
                <div className="space-y-4 p-4 border border-zinc-700 rounded-md">
                    <h3 className="font-semibold text-lg">Informações da Empresa</h3>
                    <div><Label className="text-zinc-300">Nome da Empresa</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.footer.companyInfo.name} onChange={e => handleNestedInputChange('footer', 'companyInfo', 'name', e.target.value)} /></div>
                    <div><Label className="text-zinc-300">Endereço</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.footer.companyInfo.address} onChange={e => handleNestedInputChange('footer', 'companyInfo', 'address', e.target.value)} /></div>
                    <div><Label className="text-zinc-300">CNPJ</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.footer.companyInfo.cnpj} onChange={e => handleNestedInputChange('footer', 'companyInfo', 'cnpj', e.target.value)} /></div>
                    <div><Label className="text-zinc-300">Contato</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.footer.companyInfo.contact} onChange={e => handleNestedInputChange('footer', 'companyInfo', 'contact', e.target.value)} /></div>
                </div>

                {/* Disclaimers */}
                <div className="space-y-4 p-4 border border-zinc-700 rounded-md">
                    <h3 className="font-semibold text-lg">Avisos e Isenções</h3>
                    {content.footer.disclaimers.map((disclaimer, index) => (
                        <div key={index} className="space-y-2 p-2 border-b border-zinc-800">
                            <div><Label className="text-zinc-300">Título do Aviso {index + 1}</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={disclaimer.title} onChange={e => handleArrayChange<Disclaimer>('footer', 'disclaimers', index, 'title', e.target.value)} /></div>
                            <div><Label className="text-zinc-300">Texto do Aviso {index + 1}</Label><Textarea className="bg-zinc-800 border-zinc-700 text-white" value={disclaimer.text} onChange={e => handleArrayChange<Disclaimer>('footer', 'disclaimers', index, 'text', e.target.value)} rows={3} /></div>
                        </div>
                    ))}
                </div>

                {/* Policies */}
                <div className="space-y-4 p-4 border border-zinc-700 rounded-md">
                    <h3 className="font-semibold text-lg">Políticas</h3>
                    {content.footer.policies.map((policy, index) => (
                        <div key={index} className="space-y-2 p-2 border-b border-zinc-800">
                            <div><Label className="text-zinc-300">Título da Política {index + 1}</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={policy.title} onChange={e => handleArrayChange<Policy>('footer', 'policies', index, 'title', e.target.value)} /></div>
                            <div><Label className="text-zinc-300">Texto do Gatilho (Link) {index + 1}</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={policy.trigger} onChange={e => handleArrayChange<Policy>('footer', 'policies', index, 'trigger', e.target.value)} /></div>
                            <div><Label className="text-zinc-300">Conteúdo da Política {index + 1}</Label><Textarea className="bg-zinc-800 border-zinc-700 text-white" value={policy.content} onChange={e => handleArrayChange<Policy>('footer', 'policies', index, 'content', e.target.value)} rows={8} /></div>
                        </div>
                    ))}
                </div>
                
                {/* Copyright */}
                <div><Label className="text-zinc-300">Direitos Autorais</Label><Input className="bg-zinc-800 border-zinc-700 text-white" value={content.footer.copyright} onChange={e => handleInputChange('footer', 'copyright', e.target.value)} /></div>
            </CardContent>
            <CardFooter className="flex justify-end"><Button onClick={handleSave} disabled={isSaving}>{isSaving ? "Salvando..." : "Salvar Alterações"}</Button></CardFooter>
        </Card>
      </div>
    </>
  );
}