"use client";

import { useState, useEffect } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  Database, 
  CheckCircle, 
  XCircle, 
  Clock, 
  Route, 
  LayoutGrid, 
  TrendingUp, 
  Lock, 
  RefreshCw, 
  Settings, 
  AlertTriangle,
  Activity,
  ShieldCheck,
  Server,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

interface StatusMetrics {
    routes: number;
    advertorials: number;
    pageViews: number;
    lastPageView: string;
}

interface SystemStatus {
    status: 'OK' | 'ERROR';
    database: 'OK' | 'DOWN';
    authStatus: 'Configurado' | 'Padrão/Não Configurado';
    metrics: StatusMetrics;
    timestamp: string;
    message?: string;
}

interface DbTestResult {
  success: boolean;
  message?: string;
  error?: string;
  details?: any;
  data?: any;
  timestamp: string;
}

const StatusIndicator = ({ status, label }: { status: string, label?: string }) => {
    const isOk = status === 'OK' || status === 'Configurado' || status === 'Ativo';
    const Icon = isOk ? CheckCircle : XCircle;
    const color = isOk ? 'text-emerald-500' : 'text-red-500';
    
    return (
        <div className="space-y-1">
            {label && <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">{label}</p>}
            <div className={cn("flex items-center gap-2 font-bold text-lg", color)}>
                <Icon className="h-5 w-5" />
                {status || 'Erro'}
            </div>
        </div>
    );
};

export default function SettingsPage() {
  const [status, setStatus] = useState<SystemStatus | null>(null);
  const [dbResult, setDbResult] = useState<DbTestResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isTestingDb, setIsTestingDb] = useState(false);

  const fetchStatus = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/status');
      const data = await res.json();
      if (data && typeof data === 'object') setStatus(data);
    } catch (error) {
      toast.error("Erro ao carregar status do sistema.");
    } finally {
      setIsLoading(false);
    }
  };

  const runDbTest = async () => {
    setIsTestingDb(true);
    setDbResult(null);
    try {
      const response = await fetch('/api/simple-db-test');
      const data = await response.json();
      setDbResult(data);
      if (data.success) toast.success("Conexão com o banco OK!");
      else toast.error("Falha na conexão com o banco.");
    } catch (error) {
      toast.error("Erro na requisição de teste.");
    } finally {
      setIsTestingDb(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  // Estilos
  const primaryColor = '#0061FF';
  const cardClasses = "border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm overflow-hidden";

  return (
    <>
      <Toaster richColors position="top-center" />
      
      <div className="max-w-6xl mx-auto space-y-8 pb-20">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Configurações & Diagnóstico</h1>
            <p className="text-slate-500 dark:text-slate-400 font-medium">Monitore a saúde do sistema e valide conexões de infraestrutura.</p>
          </div>
          <Button onClick={fetchStatus} disabled={isLoading} variant="outline" className="h-12 rounded-xl font-bold px-6 border-slate-200">
            <RefreshCw className={cn("mr-2 h-4 w-4", isLoading && "animate-spin")} />
            Atualizar Status
          </Button>
        </div>

        {/* 1. SAÚDE DO SISTEMA (Resumo) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className={cardClasses}>
                <CardContent className="p-8 flex items-center gap-6">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 rounded-3xl">
                        <Activity size={32} />
                    </div>
                    <StatusIndicator 
                        label="Status da Aplicação" 
                        status={isLoading ? 'Carregando...' : (status?.status === 'OK' ? 'Ativo' : 'Erro')} 
                    />
                </CardContent>
            </Card>

            <Card className={cardClasses}>
                <CardContent className="p-8 flex items-center gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-950/30 text-[#0061FF] rounded-3xl">
                        <Database size={32} />
                    </div>
                    <StatusIndicator 
                        label="Banco de Dados" 
                        status={isLoading ? '...' : (status?.database === 'OK' ? 'Conectado' : 'Offline')} 
                    />
                </CardContent>
            </Card>

            <Card className={cardClasses}>
                <CardContent className="p-8 flex items-center gap-6">
                    <div className="p-4 bg-purple-50 dark:bg-purple-950/30 text-purple-600 rounded-3xl">
                        <ShieldCheck size={32} />
                    </div>
                    <StatusIndicator 
                        label="Segurança (Auth)" 
                        status={status?.authStatus || 'Padrão'} 
                    />
                </CardContent>
            </Card>
        </div>

        {/* 2. MÉTRICAS E TESTE DE CONEXÃO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Métricas Detalhadas */}
            <Card className={cardClasses}>
                <CardHeader className="border-b border-slate-50 dark:border-slate-800 pb-6">
                    <CardTitle className="flex items-center gap-2">
                        <Server className="text-slate-400" size={20} />
                        Métricas de Infraestrutura
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Rotas Criadas</p>
                            <p className="text-3xl font-black">{status?.metrics?.routes || 0}</p>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Page Views (Total)</p>
                            <p className="text-3xl font-black">{status?.metrics?.pageViews || 0}</p>
                        </div>
                    </div>
                    
                    <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-slate-100 dark:border-slate-800">
                        <div className="flex items-center gap-3 text-slate-500 mb-2">
                            <TrendingUp size={16} />
                            <span className="text-xs font-bold uppercase tracking-widest">Atividade Recente</span>
                        </div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Último acesso registrado: <span className="font-bold text-slate-900 dark:text-white">
                                {(status?.metrics?.lastPageView && status.metrics.lastPageView !== 'N/A') 
                                    ? formatDistanceToNow(parseISO(status.metrics.lastPageView), { addSuffix: true, locale: ptBR })
                                    : 'Nenhum registro ainda'}
                            </span>
                        </p>
                    </div>
                </CardContent>
            </Card>

            {/* Diagnóstico de Banco */}
            <Card className={cn(cardClasses, "border-l-4 border-l-[#0061FF]")}>
                <CardHeader className="border-b border-slate-50 dark:border-slate-800 pb-6">
                    <CardTitle className="flex items-center gap-2">
                        <Database className="text-[#0061FF]" size={20} />
                        Diagnóstico de Banco (PostgreSQL)
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                    <p className="text-sm text-slate-500 font-medium">Verifique a latência e a saúde da conexão direta com o servidor Dokploy/Postgres.</p>
                    
                    <Button 
                        onClick={runDbTest} 
                        disabled={isTestingDb}
                        className="w-full h-14 rounded-2xl font-black text-white shadow-lg shadow-blue-500/20"
                        style={{ backgroundColor: primaryColor }}
                    >
                        {isTestingDb ? (
                            <><RefreshCw className="mr-2 h-5 w-5 animate-spin" /> Testando...</>
                        ) : (
                            <><Zap className="mr-2 h-5 w-5" /> Executar Teste de Conexão</>
                        )}
                    </Button>

                    {dbResult && (
                        <div className={cn(
                            "p-5 rounded-2xl border animate-in fade-in slide-in-from-top-2",
                            dbResult.success ? "bg-emerald-50 border-emerald-100 text-emerald-800" : "bg-red-50 border-red-100 text-red-800"
                        )}>
                            <div className="flex items-center gap-2 mb-3">
                                {dbResult.success ? <CheckCircle2 size={18} /> : <AlertTriangle size={18} />}
                                <span className="font-bold">{dbResult.success ? "Conexão Estabelecida com Sucesso" : "Falha Crítica de Conexão"}</span>
                            </div>
                            {dbResult.success && dbResult.data && (
                                <div className="text-xs space-y-1 font-mono opacity-80">
                                    <p>Versão: {dbResult.data.version.split(',')[0]}</p>
                                    <p>Server Time: {dbResult.data.timestamp}</p>
                                </div>
                            )}
                            {!dbResult.success && (
                                <p className="text-xs font-mono bg-red-100/50 p-2 rounded-lg">{dbResult.error}</p>
                            )}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>

        {/* 3. AÇÕES DE MANUTENÇÃO */}
        <Card className={cardClasses}>
            <CardHeader className="bg-slate-50/50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                <CardTitle className="text-lg">Zona de Perigo & Manutenção</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-1">
                        <h4 className="font-bold text-slate-900 dark:text-white">Inicialização de Tabelas</h4>
                        <p className="text-sm text-slate-500">Se o banco estiver vazio, use esta opção para criar as tabelas e rotas padrão.</p>
                    </div>
                    <Link href="/init-database">
                        <Button variant="outline" className="border-red-200 text-red-600 hover:bg-red-50 rounded-xl font-bold h-11 px-6">
                            <AlertTriangle className="mr-2 h-4 w-4" />
                            Inicializar Banco
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>

      </div>
    </>
  );
}