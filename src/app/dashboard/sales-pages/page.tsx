"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from '@/components/ui/button';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Layout, ShoppingBag } from 'lucide-react';
import { Input } from '@/components/ui/input';

export const runtime = 'edge';

const STATIC_PAGES = [
  { id: 'v1', name: 'Advertorial Principal V1', type: 'Estática' },
  { id: 'ap', name: 'Página de Aprovação', type: 'Sistema' },
  { id: 'menopausa', name: 'Menopausa Nunca Mais', type: 'Vendas' },
];

export default function SalesPagesListPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 500);
  }, []);

  const filteredPages = STATIC_PAGES.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Toaster richColors />
      <div className="flex flex-col gap-8">
        <h1 className="text-3xl font-black tracking-tight text-slate-900">Páginas de Destino</h1>
        <Input placeholder="Filtrar..." className="w-96 h-12 rounded-2xl" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Card className="rounded-[2rem] overflow-hidden border-slate-200">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50">
                <TableRow><TableHead className="pl-8 uppercase text-[10px] font-black">Conteúdo</TableHead><TableHead className="uppercase text-[10px] font-black">Caminho</TableHead><TableHead className="text-right pr-8 uppercase text-[10px] font-black">Ação</TableHead></TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? <TableRow><TableCell colSpan={3} className="p-10"><Skeleton className="h-10 w-full" /></TableCell></TableRow> : filteredPages.map((page) => (
                    <TableRow key={page.id} className="h-20">
                      <TableCell className="pl-8 font-bold">{page.name}</TableCell>
                      <TableCell><code className="text-xs">/{page.id}</code></TableCell>
                      <TableCell className="text-right pr-8"><Link href={`/${page.id}`} target="_blank"><Button size="sm" className="font-bold">Ver Página</Button></Link></TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  );
}