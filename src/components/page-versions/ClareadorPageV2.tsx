"use client";

import React, { useState, useEffect } from 'react';
import { 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Award, 
  ShoppingBag, 
  Lock, 
  CreditCard, 
  Anchor, 
  Layers, 
  Microscope, 
  Verified, 
  Check, 
  ChevronRight, 
  ChevronLeft,
  Flame,
  Layout,
  Info,
  Droplets,
  Sparkles,
  Heart,
  Ban,
  AlertTriangle,
  Activity,
  UserCheck,
  CheckCircle2,
  Leaf,
  Sun,
  Moon,
  Lightbulb,
  Beaker,
  Package,
  Truck,
  ShieldAlert,
  Dna,
  History,
  Target,
  MinusCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { KitSelector, KitOption } from '@/components/clareador/KitSelector';

// IMAGENS EXCLUSIVAS DA GALERIA DE PRODUTO (TOPO)
const PRODUCT_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414009621-402142efc065a75d21591d74ab992d4d.jpg",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770558652832-5.png"
];

// NOVOS PREÇOS CONFORME SOLICITADO
const AMAZOLÉ_KITS: KitOption[] = [
  {
    id: '1-un',
    units: 1,
    discount: '28% OFF',
    price: '127,00', // PIX
    originalPrice: 'R$ 189,99',
    unitPrice: '127,00',
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '2-un',
    units: 2,
    discount: '50% OFF',
    price: '187,00', // PIX
    originalPrice: 'R$ 379,98',
    unitPrice: '93,50',
    badges: ['Mais Vendido'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  },
  {
    id: '3-un',
    units: 3,
    discount: '60% OFF',
    price: '237,00', // PIX
    originalPrice: 'R$ 569,97',
    unitPrice: '79,00',
    badges: ['Melhor Result'],
    checkoutUrl: 'https://seguro.elabela.store/r/M1MW6QA99S'
  }
];

const DELIVERY_TESTIMONIALS = [
  {
    text: "Usei por 1 mês nas axilas. Clareou MUITO! Já consigo usar regata sem vergonha. O cheiro é suave e não arde nada.",
    author: "Patrícia L., Curitiba"
  },
  {
    text: "Meu melasma diminuiu bastante em 6 semanas. Uso menos base agora. Produto natural, não irrita.",
    author: "Fernanda S., Belo Horizonte"
  },
  {
    text: "Virilha estava horrível. Com 3 semanas já vi diferença. Com 2 meses clareou uns 60%. Vale cada centavo!",
    author: "Juliana M., Salvador"
  },
  {
    text: "Foliculite nas coxas sumiu em 10 dias. O clareamento veio depois. Pele lisinha agora!",
    author: "Renata P., Recife"
  },
  {
    text: "Manchas de idade nas mãos clarearam bem. Uso há 2 meses. Minhas amigas perguntam o que usei!",
    author: "Maria C., Porto Alegre"
  },
  {
    text: "Cotovelos escuros desde criança. Esse foi o ÚNICO que clareou de verdade. 8 semanas = resultado incrível.",
    author: "Beatriz A., Rio de Janeiro"
  }
];

export function ClareadorPageV2() {
  const [city, setCity] = useState('');
  const [timeLeft, setTimeLeft] = useState(877); // 14:37
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedKit, setSelectedKit] = useState<KitOption>(AMAZOLÉ_KITS[1]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);

    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => {});

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const nextImage = () => setActiveImageIndex((prev) => (prev + 1) % PRODUCT_IMAGES.length);
  const prevImage = () => setActiveImageIndex((prev) => (prev - 1 + PRODUCT_IMAGES.length) % PRODUCT_IMAGES.length);

  return (
    <>
      <PageTracker contentId="novoclareador" />
      <div className="bg-white text-brand-text font-sans selection:bg-brand-blue/20 antialiased min-h-screen">
        
        {/* BARRA DE AVISO */}
        <div className="bg-brand-blue-dark py-2.5 px-4 text-center border-b border-white/10 sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-3">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-white">
                Fórmula Patenteada da Amazônia (Sem Ácidos que Ardem ou Descascam)
            </p>
          </div>
        </div>

        {/* HERO SECTION */}
        <main className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* ESQUERDA: GALERIA */}
                <div className="lg:col-span-6 space-y-6">
                    <div className="relative aspect-square bg-[#FDFDFD] rounded-[3rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] group">
                        <img 
                          src={PRODUCT_IMAGES[activeImageIndex]} 
                          alt="Amazolé" 
                          className="w-full h-full object-cover transition-all duration-700" 
                        />
                        <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block text-brand-blue-dark hover:text-brand-pink transition-colors"><ChevronLeft /></button>
                        <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hidden md:block text-brand-blue-dark hover:text-brand-pink transition-colors"><ChevronRight /></button>
                        <div className="absolute bottom-6 right-6 bg-brand-blue-dark/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                          {activeImageIndex + 1} / {PRODUCT_IMAGES.length}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 px-2">
                        {PRODUCT_IMAGES.map((img, i) => (
                            <button 
                                key={i} 
                                onClick={() => setActiveImageIndex(i)}
                                className={cn(
                                    "aspect-square rounded-2xl overflow-hidden border-2 transition-all",
                                    activeImageIndex === i ? "border-brand-blue scale-105" : "border-slate-100 opacity-60"
                                )}
                            >
                                <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* DIREITA: COMPRA */}
                <div className="lg:col-span-6 space-y-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-blue/10 border border-brand-blue/20 rounded-xl shadow-sm text-[11px] font-bold text-brand-blue-dark">
                        <div className="bg-brand-pink p-1 rounded-md text-white">
                            <Award size={14} />
                        </div>
                        Ativo Natural: O Segredo do Mulateiro Amazônico
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl md:text-6xl font-black tracking-tight text-brand-blue-dark uppercase leading-[0.9]">
                            POR QUE AMAZOLÉ <br /><span className="text-brand-pink italic">CLAREIA EM SEMANAS?</span>
                        </h1>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-500 pt-4">
                            <div className="flex gap-0.5 text-brand-pink">
                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                            </div>
                            <span className="font-bold text-brand-text">4.9 | 1.847 avaliações reais</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <span className="text-slate-400 line-through text-lg font-bold">{selectedKit.originalPrice}</span>
                            <span className="bg-brand-pink text-white px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{selectedKit.discount}</span>
                        </div>
                        <div className="flex items-baseline gap-2 leading-none">
                            <span className="text-5xl font-black text-brand-blue-dark">R$ {selectedKit.price}</span>
                            <span className="text-emerald-600 font-black text-xl uppercase tracking-tighter">no pix</span>
                        </div>
                    </div>

                    <div className="space-y-6 pt-4">
                        <KitSelector 
                            options={AMAZOLÉ_KITS}
                            selectedId={selectedKit.id}
                            onSelect={setSelectedKit}
                        />

                        <Link href={selectedKit.checkoutUrl} target="_blank">
                            <Button 
                                className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-[0_20px_50px_rgba(229,71,143,0.3)] transition-all hover:scale-[1.03] active:scale-[0.99] flex items-center justify-center gap-4 group bg-brand-pink hover:bg-brand-pink-dark"
                            >
                                <ShoppingBag size={28} />
                                Comprar agora
                                <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                            </Button>
                        </Link>
                        
                        <div className="flex items-center justify-center gap-8 opacity-40 grayscale">
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><ShieldCheck size={18} /> Seguro</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Lock size={18} /> SSL</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><CreditCard size={18} /> Cartão</div>
                            <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest"><Zap size={18} /> PIX</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        {/* 🔬 SEÇÃO CIÊNCIA SIMPLES */}
        <section className="py-24 px-6 bg-brand-gray-light border-y border-brand-blue/5">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-brand-blue/20 rounded-full text-brand-blue-dark text-[10px] font-black uppercase tracking-widest">
                        <Microscope size={14} /> Botânica Aplicada
                    </div>
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter leading-tight">
                        🔬 COMO FUNCIONA <br /> <span className="text-brand-pink">(Ciência Simples)</span>
                    </h2>
                    <p className="text-xl font-bold text-slate-500 uppercase tracking-widest">Sua mancha escura existe por 3 MOTIVOS:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "1", t: "MELANINA ACUMULADA", d: "Células produzem pigmento demais naquela área." },
                        { n: "2", t: "INFLAMAÇÃO CRÔNICA", d: "Atrito, depilação, suor mantém a pele irritada." },
                        { n: "3", t: "CÉLULAS MORTAS", d: "Camada de pele escura acumula e não sai." }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-brand-blue/10 shadow-sm space-y-4">
                            <div className="h-10 w-10 rounded-xl bg-brand-blue text-white flex items-center justify-center font-black text-xl">{item.n}</div>
                            <p className="font-black text-brand-blue-dark text-sm uppercase tracking-widest">{item.t}</p>
                            <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-10 rounded-[3rem] border-4 border-red-50 space-y-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-5 text-red-600"><Ban size={150} /></div>
                    <h3 className="text-2xl font-black text-red-600 uppercase tracking-tighter">O PERIGO DOS ÁCIDOS:</h3>
                    <p className="text-lg text-slate-700 font-medium leading-relaxed">
                        Produtos comuns usam ÁCIDOS para "queimar" a mancha. <br />
                        <strong>Resultado:</strong> Arde, descasca, irrita, e volta <span className="text-red-600 underline">PIOR.</span>
                    </p>
                    <p className="text-xl font-black text-brand-blue-dark uppercase pt-4">Amazolé é TOTALMENTE DIFERENTE:</p>
                </div>
            </div>
        </section>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ ETAPAS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <section className="py-24 px-6 space-y-32">
            
            {/* ETAPA 1 */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 1</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none">
                            BLOQUEIA MELANINA <span className="text-brand-pink italic">NA RAIZ</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-tight">(Mulateiro + Dolomita)</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg h-fit text-brand-blue-dark"><Leaf size={24} /></div>
                            <div>
                                <p className="font-black text-brand-blue-dark uppercase">MULATEIRO (Planta da Amazônia):</p>
                                <p className="text-slate-500 font-medium leading-relaxed">Inibe produção de melanina, é antioxidante e cicatrizante natural.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg h-fit text-brand-blue-dark"><Dna size={24} /></div>
                            <div>
                                <p className="font-black text-brand-blue-dark uppercase">DOLOMITA (Mineral amazônico):</p>
                                <p className="text-slate-500 font-medium leading-relaxed">Rico em cálcio e magnésio. Regenera e clareia naturalmente sem queimar.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">O que você sente:</p>
                        <div className="space-y-2">
                            {["✅ 1ª semana: Pele mais uniforme", "✅ 2 semanas: Tom começa a clarear", "✅ 4 semanas: Mancha visivelmente mais clara"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600">
                        <strong>Analogia:</strong> É como desligar a TORNEIRA que jorra tinta preta. Não adianta limpar se continua jorrando. Mulateiro FECHA a torneira.
                    </div>
                </div>
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770954500000-beach-woman.png" className="w-full h-auto" />
                </div>
            </div>

            {/* ETAPA 2 */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl order-2 lg:order-1">
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png" className="w-full h-auto" />
                </div>
                <div className="space-y-8 order-1 lg:order-2">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 2</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none">
                            ACALMA A <span className="text-brand-pink italic">INFLAMAÇÃO</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-tight">(Óleo de Melaleuca)</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg h-fit text-brand-blue-dark"><Droplets size={24} /></div>
                            <div>
                                <p className="font-black text-brand-blue-dark uppercase">ÓLEO DE MELALEUCA:</p>
                                <p className="text-slate-500 font-medium leading-relaxed">Antibacteriano e antifúngico. Acalma irritação de atrito e previne foliculite.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">O que você sente:</p>
                        <div className="space-y-2">
                            {["✅ Imediato: Pele para de coçar/arder", "✅ 3 dias: Vermelhidão diminui", "✅ 1 semana: Pele lisa (sem bolinhas)"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600">
                        <strong>Analogia:</strong> É como apagar um INCÊNDIO antes de pintar a parede. Se tá pegando fogo, não adianta pintar. Melaleuca APAGA o fogo.
                    </div>
                </div>
            </div>

            {/* ETAPA 3 */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <span className="text-brand-pink font-black text-xs uppercase tracking-[0.4em]">ETAPA 3</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase leading-none">
                            REMOVE <span className="text-brand-pink italic">CÉLULAS ESCURAS</span>
                        </h2>
                        <p className="text-xl text-slate-400 font-bold uppercase tracking-tight">(Argila Branca)</p>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-2 bg-brand-blue/10 rounded-lg h-fit text-brand-blue-dark"><Layers size={24} /></div>
                            <div>
                                <p className="font-black text-brand-blue-dark uppercase">ARGILA BRANCA AMAZÔNICA:</p>
                                <p className="text-slate-500 font-medium leading-relaxed">Esfolia suavemente sem arder. Absorve células mortas e clareia progressivamente.</p>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-3">
                        <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">O que você sente:</p>
                        <div className="space-y-2">
                            {["✅ 1ª aplicação: Pele macia ao toque", "✅ 1 semana: Textura lisa", "✅ 2 semanas: Tom mais claro visível"].map((t, i) => (
                                <p key={i} className="text-sm font-bold text-emerald-700">{t}</p>
                            ))}
                        </div>
                    </div>

                    <div className="bg-brand-blue/5 p-6 rounded-3xl border-l-4 border-brand-blue italic text-slate-600">
                        <strong>Analogia:</strong> É como LIXAR madeira antes de envernizar. Remove o escuro sem agredir. Argila faz isso naturalmente.
                    </div>
                </div>
                <div className="relative rounded-[4rem] overflow-hidden shadow-2xl">
                    <img src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770421102915-ChatGPT-Image-6-de-fev.-de-2026,-20_35_44.png" className="w-full h-auto" />
                </div>
            </div>
        </section>

        {/* 🏆 DIFERENCIAIS GRID */}
        <section className="py-24 px-6 bg-brand-blue-dark text-white rounded-[4rem] mx-4 md:mx-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-12 opacity-5"><Sparkles size={250} /></div>
            <div className="max-w-6xl mx-auto space-y-20 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">POR QUE AMAZOLÉ E <span className="text-brand-blue">OUTROS NÃO?</span></h2>
                    <p className="text-xl font-bold uppercase text-brand-blue tracking-widest">4 Ingredientes Naturais Que Fazem a Diferença</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { i: Leaf, t: "MULATEIRO", d: "Bloqueia melanina na origem. Cicatriza e uniformiza tom.", f: "Tom uniforme em 2 semanas" },
                        { i: Beaker, t: "DOLOMITA", d: "Regenera células da pele. Clareia SEM ácidos agressivos.", f: "Clareamento progressivo" },
                        { i: Droplets, t: "MELALEUCA", d: "Acalma inflamação e vermelhidão. Previne foliculite.", f: "Pele lisa, sem bolinhas" },
                        { i: Layers, t: "ARGILA BRANCA", d: "Esfolia suavemente. Remove células escuras.", f: "Textura macia imediata" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center space-y-4">
                            <item.i size={40} className="text-brand-blue" />
                            <p className="font-black text-lg uppercase tracking-widest">{item.t}</p>
                            <p className="text-white/60 text-sm font-medium">{item.d}</p>
                            <div className="pt-4 border-t border-white/5 w-full">
                                <p className="text-[10px] font-black text-brand-blue uppercase tracking-widest">Você Sente:</p>
                                <p className="text-sm font-bold">{item.f}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/10">
                    {["100% Natural (sem ácidos)", "pH Balanceado", "Fórmula Patenteada"].map((d, i) => (
                        <div key={i} className="flex items-center justify-center gap-3 font-black uppercase text-sm tracking-widest">
                            <CheckCircle2 className="text-emerald-400" /> {d}
                        </div>
                    ))}
                </div>

                <div className="text-center pt-10">
                    <div className="inline-block bg-brand-pink p-8 rounded-[3rem] shadow-2xl scale-110">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-2">Resultado Comprovado:</p>
                        <p className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">Clareamento em 4 Semanas</p>
                    </div>
                </div>
            </div>
        </section>

        {/* 📋 COMO USAR */}
        <section className="py-32 px-6">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">COMO USAR O AMAZOLÉ</h2>
                    <p className="text-xl font-bold text-slate-400 uppercase">Tão Fácil Quanto Passar Creme Hidratante</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="bg-brand-gray-light p-10 rounded-[4rem] border border-slate-100 space-y-12">
                        <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-3">
                            <Activity className="text-brand-blue" /> ROTINA DIÁRIA - 2X AO DIA
                        </h3>
                        <div className="space-y-10">
                            {[
                                { n: "1", t: "LIMPE A ÁREA", d: "Lave com sabonete neutro e seque MUITO bem.", time: "1 minuto" },
                                { n: "2", t: "APLIQUE O AMAZOLÉ", d: "Espalhe 1 grão de ervilha. Massageie até absorver. NÃO enxágue.", time: "2 minutos" },
                                { n: "3", t: "AGUARDE SECAR", d: "Espere 3-5 minutos antes de vestir ou maquiar.", time: "3 minutos" }
                            ].map((s, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="h-10 w-10 shrink-0 bg-brand-blue rounded-xl flex items-center justify-center font-black text-white">{s.n}</div>
                                    <div className="space-y-1">
                                        <div className="flex items-center gap-3">
                                            <p className="font-black text-brand-blue-dark text-sm uppercase tracking-widest">{s.t}</p>
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1"><Clock size={10} /> {s.time}</span>
                                        </div>
                                        <p className="text-slate-500 font-medium">{s.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
                                <Sun className="text-brand-blue" />
                                <p className="font-black text-brand-blue-dark uppercase tracking-widest">MANHÃ</p>
                                <p className="text-sm text-slate-500 font-medium">Após o banho, antes de se vestir. Deixa agir o dia todo.</p>
                            </div>
                            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-4">
                                <Moon className="text-brand-blue" />
                                <p className="font-black text-brand-blue-dark uppercase tracking-widest">NOITE</p>
                                <p className="text-sm text-slate-500 font-medium">Antes de dormir, com a pele limpa. Deixa agir a noite toda.</p>
                            </div>
                        </div>

                        <div className="p-8 bg-brand-blue-dark text-white rounded-[3rem] space-y-6 relative overflow-hidden">
                            <h4 className="text-lg font-black uppercase tracking-widest flex items-center gap-2 relative z-10"><Zap className="text-brand-blue" /> DICAS DE RESULTADO</h4>
                            <div className="space-y-4 relative z-10">
                                {["Use Protetor Solar (Melasma)", "Aplique Sempre em Pele Seca", "Não Misture Outros Cremes", "Seja Consistente (2x ao dia)"].map((tip, i) => (
                                    <p key={i} className="flex items-center gap-3 text-sm font-bold"><Check className="text-brand-blue" /> {tip}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* 🎯 ÁREAS E RENDIMENTO */}
        <section className="py-24 px-6 bg-brand-gray-light">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black text-brand-blue-dark uppercase tracking-tighter leading-none">ÁREAS QUE VOCÊ <br /> PODE TRATAR:</h2>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                        {["Axilas escuras", "Virilhas manchadas", "Melasma facial", "Manchas de idade", "Foliculite", "Cotovelos/Joelhos", "Pescoço manchado", "Entre coxas"].map((area, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-600 bg-white p-4 rounded-2xl border border-slate-100">
                                <CheckCircle2 className="text-brand-blue shrink-0" size={18} /> {area}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-brand-blue-dark p-12 rounded-[4rem] text-white space-y-6 text-center">
                    <Package size={60} className="mx-auto text-brand-blue" />
                    <h3 className="text-2xl font-black uppercase tracking-widest">Quanto Comprar?</h3>
                    <p className="text-4xl font-black tracking-tighter">1 FRASCO = 1 ÁREA</p>
                    <p className="text-white/60 font-medium">Trata 1 região por 30 dias. Recomendamos 2-3 frascos para clareamento completo de manchas mais antigas.</p>
                </div>
            </div>
        </section>

        {/* ⏰ LINHA DO TEMPO */}
        <section className="py-24 px-6">
            <div className="max-w-4xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter">LINHA DO TEMPO REAL</h2>
                    <p className="text-xl font-bold text-slate-400 uppercase">O Que Acontece Semana a Semana</p>
                </div>

                <div className="space-y-6">
                    {[
                        { w: "SEMANA 1", t: "O Despertar", d: ["Pele mais macia e uniforme", "Vermelhidão diminui", "Foliculite melhora"] },
                        { w: "SEMANA 2", t: "A Virada", d: ["Tom começa a clarear (sutil)", "Textura lisa", "Inflamação some"] },
                        { w: "SEMANA 3-4", t: "A Mudança Visível", d: ["Clareamento VISÍVEL", "Mancha 30-40% mais clara", "Outras pessoas NOTAM"] },
                        { w: "SEMANA 5-8", t: "A Transformação", d: ["Clareamento intensifica", "Mancha 50-70% mais clara", "Usa regata com confiança"] }
                    ].map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row gap-6 md:items-center bg-brand-gray-light p-8 rounded-[3rem] border border-slate-100 group hover:border-brand-blue transition-all">
                            <div className="md:w-48 shrink-0">
                                <p className="text-brand-pink font-black text-xs uppercase tracking-widest mb-1">{step.w}</p>
                                <p className="text-xl font-black text-brand-blue-dark uppercase leading-none">{step.t}</p>
                            </div>
                            <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {step.d.map((desc, idx) => (
                                    <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-500">
                                        <div className="h-1.5 w-1.5 rounded-full bg-brand-blue" /> {desc}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* 🧴 O QUE VOCÊ RECEBE */}
        <section className="py-24 px-6 bg-brand-blue-dark text-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">O QUE VOCÊ <br /> <span className="text-brand-blue">RECEBE:</span></h2>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="p-3 bg-brand-blue rounded-2xl h-fit shadow-lg shadow-brand-blue/20"><ShoppingBag size={24} /></div>
                            <div>
                                <p className="text-2xl font-black uppercase tracking-tight">AMAZOLÉ CLAREADOR (50g)</p>
                                <p className="text-white/60 font-medium">Rende 30 dias em 1 área.</p>
                            </div>
                        </div>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                            {["Fórmula 100% natural", "Mulateiro + Dolomita", "Melaleuca + Argila", "Textura leve", "Sem ácidos agressivos", "Dermatologicamente OK"].map((li, i) => (
                                <li key={i} className="flex items-center gap-3 text-sm font-bold"><Check className="text-brand-blue" /> {li}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {["FRETE GRÁTIS", "ENVIO IMEDIATO", "SEGURO DE ENTREGA", "GARANTIA 90 DIAS"].map((badge, i) => (
                        <div key={i} className="bg-white/5 p-6 rounded-[2.5rem] border border-white/10 text-center font-black text-[10px] tracking-[0.2em] uppercase">{badge}</div>
                    ))}
                </div>
            </div>
        </section>

        {/* 🌟 MILHARES JÁ ESTÃO CLAREANDO */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark uppercase tracking-tighter">MILHARES JÁ ESTÃO CLAREANDO ✨</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest">Fotos e depoimentos enviados por nossas clientes</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {DELIVERY_TESTIMONIALS.map((test, i) => (
                        <div key={i} className="bg-brand-gray-light p-10 rounded-[3rem] border border-slate-100 flex flex-col justify-between">
                            <div className="space-y-6">
                                <div className="flex gap-1 text-brand-pink">{[...Array(5)].map((_, idx) => <Star key={idx} size={14} fill="currentColor" />)}</div>
                                <p className="text-slate-600 font-medium italic leading-relaxed">"{test.text}"</p>
                            </div>
                            <p className="pt-6 border-t border-slate-200 mt-6 font-black text-brand-blue-dark text-xs uppercase tracking-widest">{test.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* ❓ FAQ */}
        <section className="py-24 px-6 bg-brand-gray-light">
            <div className="max-w-4xl mx-auto space-y-12">
                <h2 className="text-3xl md:text-5xl font-black text-brand-blue-dark text-center uppercase tracking-tighter mb-16">PERGUNTAS FREQUENTES</h2>
                
                <div className="space-y-10">
                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-brand-pink uppercase tracking-widest flex items-center gap-2"><ShoppingBag size={18} /> PRODUTO</h3>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {[
                                { q: "Funciona mesmo?", a: "SIM. 32.400 mulheres usaram no último mês. Clareamento visível em 4 semanas. Garantia de 90 dias: não clareou = dinheiro de volta." },
                                { q: "Por que este seria diferente?", a: "Porque os outros usam ÁCIDOS que ardem e irritam. Amazolé usa BOTÂNICA: Mulateiro bloqueia melanina NA RAIZ sem agredir." },
                                { q: "Funciona para melasma?", a: "SIM. O Mulateiro inibe a produção excessiva de melanina. Mas atenção: precisa usar protetor solar FPS 50+ todo dia." },
                                { q: "Arde ou descasca a pele?", a: "NÃO. Fórmula 100% natural. Pode sentir um formigamento leve na 1ª aplicação, que passa em 2 minutos." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border-none rounded-2xl px-6 shadow-sm"><AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger><AccordionContent className="text-slate-500 pb-6">{item.a}</AccordionContent></AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-black text-brand-pink uppercase tracking-widest flex items-center gap-2"><CreditCard size={18} /> PAGAMENTO</h3>
                        <Accordion type="single" collapsible className="w-full space-y-3">
                            {[
                                { q: "Por que R$ 137,00?", a: "Ingredientes importados e fórmula patenteada. Comparado ao laser (R$ 800+), é a solução mais barata que FUNCIONA." },
                                { q: "Posso parcelar?", a: "SIM. Até 12x de R$ 13,90 sem juros no cartão. Ou R$ 127 no PIX com desconto." }
                            ].map((item, i) => (
                                <AccordionItem key={i} value={`faq-pay-${i}`} className="bg-white border-none rounded-2xl px-6 shadow-sm"><AccordionTrigger className="text-left font-bold py-5">{item.q}</AccordionTrigger><AccordionContent className="text-slate-500 pb-6">{item.a}</AccordionContent></AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>

        {/* 🛡️ GARANTIA FINAL */}
        <section className="py-24 px-6 bg-white text-center">
            <div className="max-w-4xl mx-auto bg-brand-blue/5 border-[6px] border-dashed border-brand-blue/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                <ShieldCheck size={100} className="mx-auto text-brand-blue-dark mb-10" />
                <h2 className="text-4xl md:text-6xl font-black text-brand-blue-dark uppercase tracking-tighter mb-8">90 DIAS DE GARANTIA</h2>
                <p className="text-2xl text-slate-600 font-medium italic mb-10 leading-relaxed">
                    Use o Amazolé por 90 dias inteiros. Se não ver clareamento visível, devolvemos 100% do seu dinheiro. Sem perguntas.
                </p>
                <div className="inline-block px-10 py-3 bg-brand-blue-dark text-white rounded-full font-black text-xs uppercase tracking-[0.3em]">Selo de Compromisso Amazolé</div>
            </div>
        </section>

        {/* 🚀 OFERTA FINAL */}
        <section id="pricing" className="py-32 px-6 bg-brand-blue-dark text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-brand-pink/5 animate-pulse" />
            <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10">
                <div className="space-y-4">
                    <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">SUA ÚLTIMA CHANCE DE USAR <br /> <span className="text-brand-blue">QUALQUER ROUPA SEM MEDO</span></h2>
                    <div className="inline-block bg-brand-pink px-8 py-3 rounded-full font-black uppercase text-sm tracking-[0.2em] shadow-xl animate-bounce">OFERTA ENCERRA EM: {formatTime(timeLeft)}</div>
                </div>

                <div className="bg-white text-brand-text rounded-[4rem] p-10 md:p-20 shadow-2xl relative border-[8px] border-brand-blue">
                    <div className="flex flex-col items-center gap-10">
                        <div className="space-y-2">
                            <span className="text-brand-pink font-black text-[10px] uppercase tracking-[0.4em]">Escolha seu Tratamento</span>
                            <h3 className="text-3xl md:text-5xl font-black text-brand-blue-dark uppercase tracking-tighter leading-none">Kit Completo Amazolé</h3>
                        </div>

                        <div className="grid grid-cols-1 gap-6 w-full max-w-lg">
                            <div className="p-10 rounded-[3rem] bg-brand-blue/5 border-2 border-brand-blue/20">
                                <p className="text-sm font-bold text-slate-400 line-through">De: R$ 379,98</p>
                                <div className="flex items-baseline justify-center text-brand-blue-dark">
                                    <span className="text-2xl font-black mr-2">R$</span>
                                    <span className="text-9xl font-black tracking-tighter">187<span className="text-5xl">,00</span></span>
                                </div>
                                <p className="text-xs font-black uppercase text-emerald-600 mt-2">Valor promocional no PIX</p>
                            </div>
                        </div>

                        <div className="space-y-8 w-full">
                            <Link href={selectedKit.checkoutUrl} target="_blank">
                                <Button className="w-full h-28 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-[2.5rem] shadow-2xl text-2xl md:text-4xl font-black uppercase flex flex-col items-center justify-center transition-all hover:scale-[1.03] animate-pulse">
                                    <span>QUERO ESTE AGORA</span>
                                    <span className="text-[10px] font-bold opacity-60 tracking-[0.2em] mt-1">Frete Grátis | Envio Imediato</span>
                                </Button>
                            </Link>
                            
                            <div className="space-y-4">
                                <div className="flex items-center justify-center gap-2 text-red-600 font-black text-xs uppercase tracking-widest animate-pulse">
                                    <ShieldAlert size={18} /> RESTAM APENAS 47 KITS COM DESCONTO
                                </div>
                                <div className="h-3 w-full max-w-md mx-auto bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                    <div className="h-full bg-brand-pink rounded-full w-[82%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-20 bg-brand-gray-light text-brand-text">
          <div className="max-w-6xl mx-auto px-6 space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200 pb-16">
                <div className="space-y-4">
                    <h3 className="text-sm font-black uppercase tracking-[0.2em] text-brand-blue-dark">Avisos e Isenções</h3>
                    <p className="text-xs text-slate-400 leading-relaxed text-justify">Este produto tem caráter cosmético. Não oferece diagnóstico ou cura. Os resultados variam de pessoa para pessoa. Sempre consulte um dermatologista. Conteúdo destinado a maiores de 18 anos.</p>
                </div>
                <div className="text-center md:text-right space-y-6">
                    <span className="text-3xl font-black tracking-tighter text-brand-blue-dark uppercase">AMAZOLÉ</span>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-widest"><p>OneBase | Soluções Digitais</p></div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 opacity-30 grayscale text-[10px] font-black uppercase tracking-widest">
                <span>© 2025 Amazolé - Botânica Amazônica</span>
                <Link href="#">Termos</Link>
                <Link href="#">Privacidade</Link>
            </div>
          </div>
        </footer>

        {/* STICKY MOBILE */}
        <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-100 px-4 pt-2 pb-4 z-[100] md:hidden shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
            <Link href={selectedKit.checkoutUrl} className="block" target="_blank">
                <Button className="w-full h-16 bg-brand-pink hover:bg-brand-pink-dark text-white rounded-2xl shadow-xl flex items-center justify-between px-5 font-black uppercase">
                    <div className="flex flex-col items-start leading-tight border-r border-white/20 pr-4">
                        <span className="text-[10px] opacity-70">Apenas</span>
                        <span className="text-lg">R$ {selectedKit.price}</span>
                    </div>
                    <span className="flex-1 text-center text-xl italic tracking-tighter">Comprar agora <ArrowRight className="inline ml-1" size={20} /></span>
                </Button>
            </Link>
        </div>
      </div>
    </>
  );
}