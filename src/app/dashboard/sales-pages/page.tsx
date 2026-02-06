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
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Toaster, toast } from "sonner";
import { Skeleton } from '@/components/ui/skeleton';
import { ExternalLink, Search, ShoppingBag, Layout, Zap, Flame, Heart, Info, MoreVertical, Settings2, Save, Loader2, Scissors } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Label } from '@/components/ui/label';

interface CustomAdvertorial {
  id: string;
  name: string;
}

const STATIC_PAGES = [
  { id: 'v1', name: 'Advertorial Principal V1', type: 'Estática', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50 dark:bg-orange-950/20' },
  { id: 'v2', name: 'Advertorial Japonês V2', type: 'Estática', icon: Layout, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/20' },
  { id: 'v3', name: 'Advertorial Editorial V3', type: 'Estática', icon: Layout, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/20' },
  { id: 'ap', name: 'Página de Aprovação (AP)', type: 'Sistema', icon: Info, color: 'text-green-500', bg: 'bg-green-50 dark:bg-green-950/20' },
  { id: 'menopausa', name: 'Menopausa Nunca Mais', type: 'Vendas', icon: ShoppingBag, color: 'text-pink-500', bg: 'bg-pink-50 dark:bg-pink-950/20' },
  { id: 'dor-zero', name: 'Dolorzero (Articulações)', type: 'Vendas', icon: Zap, color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-950/20' },
  { id: 'cavalo-de-raca', name: 'Kit Cavalo de Raça (Cabelo)', type: 'Vendas', icon: Heart, color: 'text-red-500', bg: 'bg-red-50 dark:bg-red-950/20' },
  { id: 'antiqueda', name: 'Tratamento Antiqueda', type: 'Vendas', icon: Scissors, color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/20' },
];

export default function SalesPagesListPage() {
  const [advertorials, setAdvertorials] = useState<CustomAdvertorial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // State para o Editor
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isSavingConfig, setIsSavingConfig] = useState(false);
  const [activeSlug, setActiveSlug] = useState('');
  const [pageConfig, setPageConfig] = useState({
      priceCard: 'R$ 157,00',
      pricePix: '97,00',
      installmentText: 'Parcelamento em até 12x',
      buttonText: 'COMPRAR AGORA',
      checkoutUrl: ''
  });

  useEffect(() => {
    fetch('/api/custom-advertorials')
      .then((res) => res.json())
      .then((data) => {
        setAdvertorials(Array.isArray(data) ? data : []);
      })
      .catch(() => {
        toast.error("Erro ao carregar conteúdos dinâmicos.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const openEditDialog = async (slug: string) => {
      setActiveSlug(slug);
      try {
          const res = await fetch(`/api/page-settings/${slug}`);
          const data = await res.json();
          setPageConfig({
              priceCard: data.priceCard || 'R$ 157,00',
              pricePix: data.pricePix || '97,00',
              installmentText: data.installmentText || 'Parcelamento em até 12x',
              buttonText: data.buttonText || 'COMPRAR AGORA',
              checkoutUrl: data.checkoutUrl || ''
          });
          setIsEditDialogOpen(true);
      } catch (e) {
          toast.error("Erro ao carregar configurações.");
      }
  };

  const handleSaveConfig = async () => {
      setIsSavingConfig(true);
      try {
          const res = await fetch(`/api/page-settings/${activeSlug}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(pageConfig)
          });
          if (res.ok) {
              toast.success("Configurações atualizadas!");
              setIsEditDialogOpen(false);
          }
      } catch (e) {
          toast.error("Erro ao salvar.");
      } finally {
          setIsSavingConfig(false);
      }
  };

  const dynamicPages = advertorials.map(adv => ({
    id: adv.id,
    name: adv.name,
    type: 'Dinâmica',
    icon: Layout,
    color: 'text-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-800/50'
  }));

  const allPages = [...STATIC_PAGES, ...dynamicPages];

  const filteredPages = allPages.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Toaster richColors />
      
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Páginas de Vendas</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium">Visualize e acesse todos os seus links de destino ativos.</p>
        </div>

        <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input 
                placeholder="Filtrar por nome ou ID..." 
                className="pl-10 h-12 rounded-2xl border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>

        <Card className="border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-[2rem] overflow-hidden shadow-sm">
          <CardContent className="p-0">
            <Table>
              <TableHeader className="bg-slate-50/50 dark:bg-slate-900/50">
                <TableRow className="hover:bg-transparent border-slate-100 dark:border-slate-800 h-14">
                  <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em] pl-8">Conteúdo</TableHead>
                  <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em]">Tipo</TableHead>
                  <TableHead className="font-black text-slate-400 uppercase text-[10px] tracking-[0.2em]">Caminho / ID</TableHead>
                  <TableHead className="text-right font-black text-slate-400 uppercase text-[10px] tracking-[0.2em] pr-8">Ação</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <TableRow key={i} className="border-slate-50 dark:border-slate-800 h-20">
                      <TableCell className="pl-8"><Skeleton className="h-6 w-48 rounded-md" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-20 rounded-md" /></TableCell>
                      <TableCell><Skeleton className="h-6 w-32 rounded-md" /></TableCell>
                      <TableCell className="text-right pr-8"><Skeleton className="h-10 w-32 ml-auto rounded-xl" /></TableCell>
                    </TableRow>
                  ))
                ) : (
                  filteredPages.map((page) => (
                    <TableRow key={page.id} className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors border-slate-50 dark:border-slate-800 h-20">
                      <TableCell className="pl-8">
                        <div className="flex items-center gap-4">
                            <div className={cn("p-2.5 rounded-xl", page.bg, page.color)}>
                                <page.icon size={20} />
                            </div>
                            <div className="font-bold text-slate-900 dark:text-white">{page.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className={cn(
                            "rounded-full px-3 py-0.5 border-none font-bold text-[10px] uppercase tracking-widest",
                            page.type === 'Vendas' ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30" : 
                            page.type === 'Dinâmica' ? "bg-blue-50 text-blue-600 dark:bg-blue-950/30" : 
                            "bg-slate-100 text-slate-500 dark:bg-slate-800"
                        )}>
                            {page.type}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <code className="bg-slate-100 dark:bg-slate-800 text-slate-500 px-3 py-1.5 rounded-lg text-xs font-mono">
                          /{page.id}
                        </code>
                      </TableCell>
                      <TableCell className="text-right pr-8">
                        <div className="flex items-center justify-end gap-2">
                            <Link href={`/${page.id}`} target="_blank">
                            <Button variant="ghost" size="sm" className="rounded-xl font-bold h-10 px-4">
                                <ExternalLink size={14} className="mr-2" />
                                Ver Página
                            </Button>
                            </Link>

                            {(page.id === 'cavalo-de-raca' || page.id === 'antiqueda') && (
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
                                            <MoreVertical size={18} />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="w-48 rounded-xl">
                                        <DropdownMenuItem onClick={() => openEditDialog(page.id)} className="font-bold gap-2 cursor-pointer">
                                            <Settings2 size={16} />
                                            Editar Preços/Link
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Popup de Edição Dinâmica */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[425px] rounded-[2rem]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
                <Settings2 className="text-[#0061FF]" /> Configurações de Venda
            </DialogTitle>
            <DialogDescription>
              Edite as informações da página <strong>/{activeSlug}</strong>.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-6 py-4">
            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-400">Preço Cartão (Texto Livre)</Label>
              <Input 
                value={pageConfig.priceCard} 
                onChange={e => setPageConfig({...pageConfig, priceCard: e.target.value})}
                placeholder="Ex: R$ 157,00"
                className="rounded-xl h-12"
              />
            </div>
            
            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-400">Preço Pix (Apenas Números)</Label>
              <Input 
                value={pageConfig.pricePix} 
                onChange={e => setPageConfig({...pageConfig, pricePix: e.target.value})}
                placeholder="Ex: 97,00"
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-400">Texto de Parcelamento</Label>
              <Input 
                value={pageConfig.installmentText} 
                onChange={e => setPageConfig({...pageConfig, installmentText: e.target.value})}
                placeholder="Ex: Parcelamento em até 12x"
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-400">Texto do Botão</Label>
              <Input 
                value={pageConfig.buttonText} 
                onChange={e => setPageConfig({...pageConfig, buttonText: e.target.value})}
                placeholder="Ex: COMPRAR AGORA"
                className="rounded-xl h-12"
              />
            </div>

            <div className="space-y-2">
              <Label className="text-xs font-black uppercase text-slate-400">Link de Checkout</Label>
              <Input 
                value={pageConfig.checkoutUrl} 
                onChange={e => setPageConfig({...pageConfig, checkoutUrl: e.target.value})}
                placeholder="https://..."
                className="rounded-xl h-12"
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
                onClick={handleSaveConfig} 
                disabled={isSavingConfig}
                className="bg-[#0061FF] hover:bg-[#0050D1] text-white rounded-xl font-bold w-full h-12"
            >
              {isSavingConfig ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2" />}
              Salvar Alterações
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}