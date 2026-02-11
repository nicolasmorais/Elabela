"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, RefreshCw, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast, Toaster } from 'sonner';
import Link from 'next/link';

export const runtime = 'edge';

interface TestResult {
  success: boolean;
  message?: string;
  error?: string;
  details?: any;
  data?: any;
  timestamp: string;
}

export default function DbTestPage() {
  const [result, setResult] = useState<TestResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const runTest = async () => {
    setIsLoading(true);
    setResult(null);
    try {
      const response = await fetch('/api/debug/db');
      const data = await response.json();
      setResult({ success: data.success, data: data, timestamp: data.timestamp, error: data.error });
      if (data.success) toast.success("Conexão bem-sucedida!");
      else toast.error("Falha na conexão");
    } catch (error) {
      toast.error("Erro na requisição");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster richColors />
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Diagnóstico de Banco</h1>
          <p className="text-gray-500">Teste de conexão com o banco Cloudflare D1.</p>
        </div>
        <Card className="border-2">
          <CardHeader><CardTitle>Status da Conexão</CardTitle></CardHeader>
          <CardContent className="space-y-6">
            <Button onClick={runTest} disabled={isLoading} className="bg-[#0061FF] text-white">
              {isLoading ? "Testando..." : "Testar Conexão"}
            </Button>
            {result && (
              <div className={cn("p-4 rounded-lg border", result.success ? "bg-green-50" : "bg-red-50")}>
                <p className="font-bold">{result.success ? "Conectado" : "Erro"}</p>
                <p className="text-sm">{result.error || "Acesso normal ao D1."}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}