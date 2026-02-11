"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, CheckCircle, RefreshCw } from 'lucide-react';
import { toast, Toaster } from 'sonner';
import Link from 'next/link';

export const runtime = 'edge';

export default function InitDatabasePage() {
  const [isInitializing, setIsInitializing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const handleInit = async () => {
    setIsInitializing(true);
    try {
      const res = await fetch('/api/db/reset', { method: 'POST' });
      const data = await res.json();
      if (data.success) {
        toast.success("Tabelas criadas com sucesso!");
        setIsDone(true);
      } else {
        toast.error("Erro: " + data.error);
      }
    } catch (error) {
      toast.error("Erro de conexão.");
    } finally {
      setIsInitializing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <Toaster richColors />
      <Card className="max-w-md w-full rounded-[2rem] shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 p-3 rounded-full w-fit mb-4"><Database className="h-8 w-8 text-blue-600" /></div>
          <CardTitle className="text-2xl font-black">Setup Inicial</CardTitle>
          <CardDescription>Configure seu banco de dados na Cloudflare.</CardDescription>
        </CardHeader>
        <CardContent>
            {isDone ? <div className="p-4 bg-green-50 text-green-700 rounded-2xl font-bold flex items-center gap-2"><CheckCircle size={20} /> Banco de dados configurado!</div> : <p className="text-sm text-slate-500">Este processo criará as tabelas `routes`, `settings`, `custom_advertorials` e as rotas padrão.</p>}
        </CardContent>
        <CardFooter className="flex flex-col gap-3">
          {!isDone ? <Button onClick={handleInit} disabled={isInitializing} className="w-full h-14 bg-[#0061FF] text-white font-bold rounded-2xl">{isInitializing ? "Configurando..." : "Iniciar Configuração"}</Button> : <Link href="/login" className="w-full"><Button className="w-full h-14 bg-green-600 text-white font-bold rounded-2xl">Ir para o Login</Button></Link>}
        </CardFooter>
      </Card>
    </div>
  );
}