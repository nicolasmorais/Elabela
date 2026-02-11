"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Plus, Trash2, Edit, ExternalLink, AlertTriangle, Search, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CustomAdvertorial } from '@/lib/advertorial-types';
import { Input } from '@/components/ui/input';

export const runtime = 'edge';

export default function CustomAdvertorialsPage() {
  const [advertorials, setAdvertorials] = useState<CustomAdvertorial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchAdvertorials = (): void => {
    setIsLoading(true);
    fetch('/api/custom-advertorials')
      .then((res: Response) => res.json())
      .then((data: CustomAdvertorial[]) => {
        setAdvertorials(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        toast.error("Falha ao carregar os advertoriais.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchAdvertorials();
  }, []);

  const handleDelete = async (id: string, name: string): Promise<void> => {
    if (!window.confirm(`Tem certeza que deseja excluir o advertorial: "${name}"?`)) return;
    try {
      const response = await fetch(`/api/custom-advertorials/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete');
      toast.success(`Advertorial excluído!`);
      fetchAdvertorials();
    } catch (error) {
      toast.error(`Falha ao excluir.`);
    }
  };

  const filteredAdvertorials = advertorials.filter(adv => 
    adv.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    adv.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Toaster richColors />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Meus Advertoriais</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Gerencie conteúdos dinâmicos.</p>
        </div>
        <Link href="/dashboard/custom-advertorials/new">
          <Button className="h-12 px-6 rounded-xl font-bold bg-[#0061FF] hover:bg-[#0050D1] text-white shadow-lg">
            <Plus className="mr-2 h-5 w-5" />
            Novo Advertorial
          </Button>
        </Link>
      </div>

      <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm">
        <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <CardTitle>Conteúdos Ativos</CardTitle>
            <div className="relative w-full md:w-72">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input 
                    placeholder="Buscar..." 
                    className="pl-10 h-10 rounded-xl"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
              <TableRow>
                <TableHead className="pl-6 uppercase text-[10px] font-black">Nome</TableHead>
                <TableHead className="uppercase text-[10px] font-black">ID</TableHead>
                <TableHead className="text-right pr-6 uppercase text-[10px] font-black">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                Array.from({ length: 4 }).map((_, i) => (
                  <TableRow key={i}><TableCell colSpan={3} className="p-4"><Skeleton className="h-5 w-full" /></TableCell></TableRow>
                ))
              ) : filteredAdvertorials.map((adv) => (
                <TableRow key={adv.id}>
                  <TableCell className="pl-6 font-bold">{adv.name}</TableCell>
                  <TableCell><code className="text-xs">{adv.id}</code></TableCell>
                  <TableCell className="text-right pr-6 space-x-2">
                    <Link href={`/dashboard/custom-advertorials/${adv.id}`}><Button variant="ghost" size="sm" className="font-bold">Editar</Button></Link>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(adv.id, adv.name)} className="text-red-500">Excluir</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}