import { 
  Award, 
  Star, 
  ShoppingBag, 
  ArrowRight, 
  Zap,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface AntiHairLossHeroProps {
  activeImageIndex: number;
  setActiveImageIndex: (index: number) => void;
  productImages: string[];
  config: any;
  timeLeft: number;
  formatTime: (s: number) => string;
}

export function AntiHairLossHero({
  activeImageIndex,
  setActiveImageIndex,
  productImages,
  config,
  timeLeft,
  formatTime
}: AntiHairLossHeroProps) {
  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % productImages.length);
  };

  const prevImage = () => {
    setActiveImageIndex((activeImageIndex - 1 + productImages.length) % productImages.length);
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* ESQUERDA: GALERIA (50%) - DESIGN MELHORADO */}
        <div className="lg:col-span-6 space-y-6">
            <div className="relative aspect-square bg-[#FDFDFD] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] group">
                <img 
                  src={productImages[activeImageIndex]} 
                  alt="Produto Principal" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]" 
                />
                
                {/* Botões de Navegação Lateral (Desktop Only) */}
                <button 
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg border border-slate-100 text-slate-400 hover:text-orange-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 hidden md:block"
                >
                  <ChevronRight size={24} />
                </button>
                
                {/* Contador Visual */}
                <div className="absolute bottom-6 right-6 bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
                  {activeImageIndex + 1} / {productImages.length}
                </div>
            </div>

            {/* Thumbnails Estilizados */}
            <div className="grid grid-cols-3 gap-4 px-2">
                {productImages.map((img, i) => (
                    <button 
                        key={i} 
                        onClick={() => setActiveImageIndex(i)}
                        className={cn(
                            "aspect-square rounded-2xl overflow-hidden border-2 transition-all duration-300 relative group",
                            activeImageIndex === i 
                              ? "border-orange-500 shadow-[0_0_0_4px_rgba(249,115,22,0.1)] scale-105" 
                              : "border-slate-100 opacity-60 hover:opacity-100 hover:border-slate-300"
                        )}
                    >
                        <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                        {activeImageIndex === i && (
                          <div className="absolute inset-0 bg-orange-500/5 pointer-events-none"></div>
                        )}
                    </button>
                ))}
            </div>
        </div>

        {/* DIREITA: INFOS DE COMPRA (50%) */}
        <div className="lg:col-span-6 space-y-6">
            
            {/* Badge de Destaque */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl shadow-sm text-[11px] font-bold text-slate-600">
                <div className="bg-pink-500 p-1 rounded-md text-white">
                    <Award size={14} />
                </div>
                Eleito o melhor Kit Antiqueda do Brasil
            </div>

            <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                    Kit Cavalo de Raça - Reconstrução + Antiqueda Intensiva
                </h1>
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500">
                    <div className="flex gap-0.5 text-orange-400">
                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                    <span>4.9 | 2322 avaliações 5 estrelas</span>
                </div>
                <p className="text-emerald-600 font-bold text-sm">
                    Mais de 50800 compras no mês passado.
                </p>
            </div>

            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-slate-400 line-through text-lg">{config.priceCard}</span>
                    <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-black">21% OFF</span>
                </div>
                <div className="flex items-baseline gap-2 leading-none">
                    <span className="text-5xl font-black text-slate-950">R$ {config.pricePix}</span>
                    <span className="text-emerald-600 font-bold text-xl">no pix</span>
                </div>
                <p className="text-slate-500 font-medium text-sm">
                    {config.installmentText}
                </p>
            </div>

            {/* DEPOIMENTO ABAIXO DO PREÇO */}
            <div className="bg-orange-50/50 border-l-4 border-orange-400 p-5 rounded-r-2xl space-y-2">
                <p className="text-slate-800 font-black text-xl italic leading-tight">
                    "Todo Dia Era um Bolo de Cabelo no Pente... <br />
                    Hoje Não Cai Quase Nada."
                </p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest italic">
                    Ass: Ana Júlia, Brasília
                </p>
            </div>

            {/* BOTÃO COMPRAR AGORA */}
            <div className="space-y-4 pt-4">
                <Link href={config.checkoutUrl} target="_blank">
                    <Button 
                        className="w-full h-20 text-white rounded-full font-black text-2xl uppercase tracking-widest shadow-2xl transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-4 group"
                        style={{ backgroundColor: '#35c867' }}
                    >
                        <ShoppingBag size={28} />
                        {config.buttonText}
                        <ArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
                    </Button>
                </Link>
                
                {/* ENTREGA FULL BANNER */}
                <div className="bg-emerald-50/80 border border-emerald-100 rounded-2xl p-5 flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                        <div className="bg-emerald-500 text-white p-2 rounded-lg">
                            <Zap size={20} fill="currentColor" />
                        </div>
                        <div>
                            <p className="text-xs font-black text-slate-900 uppercase">ENTREGA FULL — <span className="text-slate-500 font-bold">Envio imediato em até 24h</span></p>
                            <p className="text-[10px] font-bold text-slate-500">Comprando dentro das próximas <span className="text-slate-900 font-black">{formatTime(timeLeft)}</span></p>
                        </div>
                    </div>
                    <ShieldCheck className="text-emerald-500/30 group-hover:text-emerald-500 transition-colors" size={24} />
                </div>
            </div>

        </div>
      </div>
    </main>
  );
}
