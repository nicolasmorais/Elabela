"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader2, Save, ArrowLeft, ShieldAlert } from "lucide-react";
import Link from 'next/link';
import { toast } from "sonner";

export default function PageEditor() {
    const params = useParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [page, setPage] = useState<any>(null);

    useEffect(() => {
        fetch(`/api/page-settings/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setPage(data);
                setLoading(false);
            })
            .catch(() => {
                toast.error("Erro ao carregar página");
                router.push('/dashboard');
            });
    }, [params.id]);

    const handleSave = async () => {
        setSaving(true);
        try {
            const res = await fetch(`/api/page-settings/${params.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(page)
            });
            if (res.ok) {
                toast.success("Configurações salvas com sucesso!");
            } else {
                throw new Error();
            }
        } catch (e) {
            toast.error("Erro ao salvar");
        } finally {
            setSaving(false);
        }
    };

    if (loading) return <div className="flex h-screen items-center justify-center"><Loader2 className="animate-spin" /></div>;

    return (
        <div className="p-8 max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary flex items-center gap-1">
                        <ArrowLeft size={14} /> Voltar
                    </Link>
                    <h1 className="text-3xl font-bold tracking-tight">Editar Página: {page.name}</h1>
                </div>
                <Button onClick={handleSave} disabled={saving}>
                    {saving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
                    Salvar Alterações
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>Informações Básicas</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Nome da Página</Label>
                            <Input value={page.name} onChange={e => setPage({...page, name: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <Label>Slug (URL)</Label>
                            <Input value={page.slug} disabled className="bg-slate-50" />
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>Preços e Checkout</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Preço Cartão (Texto)</Label>
                            <Input value={page.priceCard} onChange={e => setPage({...page, priceCard: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <Label>Preço Pix (Valor)</Label>
                            <Input value={page.pricePix} onChange={e => setPage({...page, pricePix: e.target.value})} />
                        </div>
                        <div className="space-y-2">
                            <Label>Link de Checkout</Label>
                            <Input value={page.checkoutUrl} onChange={e => setPage({...page, checkoutUrl: e.target.value})} />
                        </div>
                    </CardContent>
                </Card>

                {/* SEÇÃO BLACK REDIRECT */}
                <Card className="md:col-span-2 border-orange-200 bg-orange-50/30">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-orange-800">
                            <ShieldAlert size={20} /> Black Redirect (Back Redirect)
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>URL de Redirecionamento</Label>
                            <Input 
                                placeholder="https://seu-checkout-com-desconto.com" 
                                value={page.backRedirectUrl || ''} 
                                onChange={e => setPage({...page, backRedirectUrl: e.target.value})}
                                className="bg-white border-orange-200"
                            />
                            <p className="text-xs text-orange-600 font-medium">
                                Quando o usuário clicar no botão "Voltar" do navegador, ele será enviado para este link em vez de sair do site.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}