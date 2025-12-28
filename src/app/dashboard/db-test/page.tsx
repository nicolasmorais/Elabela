"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, RefreshCw, CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function DbTestPage() {
  const [result, setResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const testConnection = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/db-test');
      const data = await res.json();
      setResult(data);
    } catch (error) {
      setResult({ success: false, error: 'Falha na requisição' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Diagnóstico de Conexão</h1>
      
      <Card className="bg-white dark:bg-[#1e293b] border-gray-200 dark:border-[#334155]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5" />
            Teste de Conexão PostgreSQL
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-500 dark:text-zinc-400">
            Clique no botão abaixo para realizar uma consulta direta (SELECT 1) no banco de dados configurado.
          </p>
          
          <Button 
            onClick={testConnection} 
            disabled={isLoading}
            className="bg-[#6B16ED] hover:bg-[#5512C7] text-white"
          >
            {isLoading ? (
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Database className="mr-2 h-4 w-4" />
            )}
            {isLoading ? "Testando..." : "Testar Conexão Agora"}
          </Button>

          {result && (
            <div className={cn(
              "mt-6 p-4 rounded-lg border",
              result.success ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800" : "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
            )}>
              <div className="flex items-center gap-2 mb-2">
                {result.success ? (
                  <CheckCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-600" />
                )}
                <span className={cn("font-bold", result.success ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400")}>
                  {result.success ? "Conexão Estabelecida!" : "Falha na Conexão"}
                </span>
              </div>
              <pre className="text-xs font-mono overflow-auto p-2 bg-black/5 dark:bg-black/20 rounded">
                {JSON.stringify(result, null, 2)}
              </pre>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}