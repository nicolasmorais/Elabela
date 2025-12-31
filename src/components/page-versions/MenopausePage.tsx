"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  AlertCircle,
  BookOpen,
  Zap,
  Smile,
  Video,
  Play,
  ArrowRight,
  TrendingDown,
  Timer,
  Lock,
  CreditCard
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';

const TESTIMONIAL_VIDEOS = [
  {
    url: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/729b9773-837a-4701-be78-26a8f00395be-DP3.mp4",
    poster: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/depoimento1-poster-8a7b3c5d2e9f4b6a1c2d3e4f5a6b7c8d9e0f1.jpg"
  },
  {
    url: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/e6acb5f6-e381-4d6d-94e4-81538e8856e8-dp-menopausa-001.mp4",
    poster: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/depoimento2-poster-9b8c7d6e3f2a1b4c5d6e7f8a9b0c1d2e3f4.jpg"
  },
  {
    url: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/bfb848bc-e1f8-4c87-a126-5a8bb2d16495-DP2.mp4",
    poster: "https://ydo1oposreyoyzh5.public.blob.vercel-storage.com/depoimento3-poster-5d6e7f8a9b2c3d4e5f6a7b8c9d0e1f2a3b4.jpg"
  }
];

const VideoPlayer = ({ video }: { video: typeof TESTIMONIAL_VIDEOS[0] }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative aspect-[9/16] w-full max-w-[280px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-black group">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={video.poster}
        playsInline
        loop
        onClick={togglePlay}
      >
        <source src={video.url} type="video/mp4" />
      </video>
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 pointer-events-none">
          <div className="bg-pink-600 p-5 rounded-full shadow-glow animate-pulse">
            <Play size={32} className="text-white fill-current ml-1" />
          </div>
        </div>
      )}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
        </div>
        <span className="text-[10px] font-black text-gray-900 uppercase">Verificado</span>
      </div>
    </div>
  );
};

export function MenopausePage() {
  const [timeLeft, setTimeLeft] = useState(1187);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0)), 1000);
    const scroll = () => setShowSticky(window.scrollY > 800);
    window.addEventListener('scroll', scroll);
    return () => {
        clearInterval(timer);
        window.removeEventListener('scroll', scroll);
    };
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="menopausa" />
      
      <div className="bg-[#FFF5F7] text-slate-900 font-sans selection:bg-pink-200 antialiased overflow-x-hidden">
        
        {/* URGENCY BAR */}
        <div className="bg-pink-600 text-white py-2.5 px-4 text-xs font-black uppercase tracking-widest text-center sticky top-0 z-[100] shadow-md flex items-center justify-center gap-3">
            <Timer size={16} className="animate-pulse" />
            <span>Oferta Relâmpago: {formatTime(timeLeft)}</span>
        </div>

        {/* HERO - IMPACTO TOTAL */}
        <section className="relative pt-12 pb-24 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px] bg-white rounded-[100%] -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter mb-8 border border-pink-200">
                <Zap size={12} fill="currentColor" /> Método 100% Natural e Comprovado
            </div>
            
            <h1 className="text-3xl md:text-6xl font-black leading-[1.1] tracking-tight text-gray-900 mb-8">
                Zere os <span className="text-pink-600 underline decoration-pink-200 decoration-8 underline-offset-4">Calorões</span> e o Suor Noturno em apenas 7 dias!
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 font-medium mb-10 leading-relaxed max-w-2xl mx-auto">
                Recupere o controle do seu corpo e volte a dormir a noite toda sem gastar com hormônios ou remédios caros.
            </p>

            {/* HERO IMAGE WITH MOCKUP FEEL */}
            <div className="relative max-w-3xl mx-auto group">
                <div className="absolute inset-0 bg-pink-400 blur-[80px] opacity-20 rounded-full scale-75 group-hover:opacity-30 transition-opacity"></div>
                <img 
                    src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_11_16%20%281%29-YiIF5Dx6Ex8EfF18VGsiRtoYLJUhpE.png" 
                    alt="Transformação" 
                    className="relative z-10 rounded-[3rem] shadow-3xl border-8 border-white w-full"
                />
                <div className="absolute -bottom-6 -left-4 md:-left-12 z-20 bg-white p-4 rounded-3xl shadow-2xl border border-pink-50 flex items-center gap-4 animate-bounce">
                    <div className="bg-green-100 p-3 rounded-2xl text-green-600"><Smile size={24} /></div>
                    <div className="text-left"><p className="font-black text-sm text-gray-900">3.127 Alunas</p><p className="text-[10px] text-gray-400 font-bold">Vidas Transformadas</p></div>
                </div>
            </div>
          </div>
        </section>

        {/* PROVA SOCIAL EM VÍDEO (FLUIDO) */}
        <section className="py-20 px-4 bg-white rounded-t-[4rem] -mt-10 relative z-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-black text-center mb-4 tracking-tight">O que elas estão dizendo...</h2>
            <div className="flex justify-center gap-1 mb-12">
                {[...Array(5)].map((_, i) => <Star key={i} className="fill-yellow-400 text-yellow-400" size={24} />)}
            </div>

            <div className="flex overflow-x-auto pb-8 gap-6 no-scrollbar snap-x snap-mandatory px-4">
              {TESTIMONIAL_VIDEOS.map((video, i) => (
                <div key={i} className="snap-center shrink-0">
                    <VideoPlayer video={video} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PAIN & SOLUTION CARDS */}
        <section className="py-20 px-6">
            <div className="max-w-4xl mx-auto space-y-6">
                <div className="bg-red-50 border-2 border-red-100 p-8 rounded-[3rem] flex flex-col md:flex-row gap-8 items-center">
                    <div className="shrink-0 bg-red-100 p-6 rounded-[2rem] text-red-600"><TrendingDown size={48} /></div>
                    <div>
                        <h3 className="text-2xl font-black text-red-900 mb-4 tracking-tight">Você está cansada de...</h3>
                        <ul className="space-y-3 font-bold text-red-800 opacity-80">
                            <li className="flex items-center gap-2"><AlertCircle size={16} /> Acordar suada às 3 da manhã?</li>
                            <li className="flex items-center gap-2"><AlertCircle size={16} /> Explosões de raiva sem motivo?</li>
                            <li className="flex items-center gap-2"><AlertCircle size={16} /> Ganho de peso repentino?</li>
                        </ul>
                    </div>
                </div>

                <div className="bg-green-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                    <Zap className="absolute top-0 right-0 p-8 opacity-10" size={160} />
                    <h3 className="text-3xl font-black mb-6 leading-tight">O Protocolo 3-5-7 é o seu novo começo.</h3>
                    <p className="text-lg font-medium opacity-90 mb-8">Baseado em estudos avançados de saúde integrativa, este guia foca na regulação natural do seu sistema termorregulador.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><p className="text-2xl font-black">7 Dias</p><p className="text-xs opacity-70">Para Alívio Real</p></div>
                        <div className="bg-white/10 p-4 rounded-2xl border border-white/20"><p className="text-2xl font-black">100%</p><p className="text-xs opacity-70">Sem Hormônios</p></div>
                    </div>
                </div>
            </div>
        </section>

        {/* PRECIFICAÇÃO IRRESISTÍVEL (OFERTA POR IMPULSO) */}
        <section id="checkout" className="py-24 px-6 bg-pink-900 text-white relative">
            <div className="max-w-xl mx-auto">
                <div className="bg-white rounded-[3.5rem] p-10 text-gray-900 shadow-huge relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-yellow-400 px-6 py-2 rounded-bl-3xl font-black text-xs uppercase tracking-widest">Oferta Única</div>
                    
                    <div className="text-center mb-10">
                        <p className="text-gray-400 line-through font-bold mb-1">De R$ 147,00 por apenas:</p>
                        <div className="flex items-center justify-center gap-2">
                            <span className="text-3xl font-black text-pink-600 mt-2">R$</span>
                            <span className="text-8xl font-black text-pink-600 tracking-tighter">19,90</span>
                        </div>
                        <p className="text-xs font-bold text-gray-400 mt-2 uppercase tracking-widest">Ou 2x de R$ 10,38</p>
                    </div>

                    <div className="space-y-4 mb-10">
                        {[
                            "Guia Digital Sob Controle",
                            "Protocolo SOS Anti-Calorão",
                            "Bônus: Cardápio do Sono",
                            "Acesso Vitalício no E-mail"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 font-bold text-sm">
                                <Check className="text-green-500 shrink-0" size={20} /> {item}
                            </div>
                        ))}
                    </div>

                    <a href="https://oneconversion.pro/checkout?product_id=26455e6c-ddf9-4304-a72e-66a7ffa6beac" target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-20 bg-green-600 hover:bg-green-700 text-white text-xl font-black rounded-[2rem] shadow-glow transform active:scale-95 transition-all">
                            COMPRAR AGORA! <ArrowRight className="ml-2" />
                        </Button>
                    </a>

                    <div className="mt-8 flex flex-wrap justify-center gap-4 opacity-40 grayscale">
                        <Lock size={16} /> <CreditCard size={16} /> <ShieldCheck size={16} />
                    </div>
                </div>
            </div>
        </section>

        {/* GARANTIA BLINDADA */}
        <section className="py-20 px-6 bg-white border-t border-pink-50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="inline-block p-6 bg-pink-50 rounded-full mb-8"><ShieldCheck size={64} className="text-pink-600" /></div>
                <h2 className="text-3xl font-black mb-6">Sua Satisfação ou Seu Dinheiro de Volta + R$ 10</h2>
                <p className="text-lg text-gray-600 font-medium leading-relaxed max-w-2xl mx-auto mb-10">
                    Eu confio tanto no meu método que se em 7 dias você não sentir melhora, eu devolvo o seu dinheiro e ainda te pago R$ 10 pelo seu tempo.
                </p>
                <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Risco Zero • Garantia Total</p>
            </div>
        </section>

        {/* FAQ RÁPIDO */}
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-black text-center mb-12">Dúvidas Frequentes</h2>
                <Accordion type="single" collapsible className="space-y-4">
                    {[
                        { q: "Como eu recebo o guia?", a: "O acesso é imediato! Assim que o pagamento é confirmado, você recebe um e-mail com o link para download do PDF." },
                        { q: "É seguro comprar?", a: "Sim, usamos a maior e mais segura plataforma de pagamentos do Brasil, com criptografia de ponta a ponta." },
                        { q: "Preciso de equipamentos?", a: "Não! O guia foca em alimentos naturais e técnicas simples que você pode fazer hoje mesmo na sua casa." }
                    ].map((item, i) => (
                        <AccordionItem key={i} value={`item-${i}`} className="bg-white border border-gray-100 rounded-[2rem] px-6 overflow-hidden">
                            <AccordionTrigger className="text-left font-black py-6 hover:no-underline">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-gray-600 font-medium text-lg pb-6">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>

        {/* STICKY CTA MOBILE */}
        {showSticky && (
            <div className="fixed bottom-0 left-0 w-full p-4 z-[100] animate-in slide-in-from-bottom duration-500">
                <a href="#checkout">
                    <Button className="w-full h-16 bg-pink-600 text-white rounded-2xl font-black text-lg shadow-huge flex items-center justify-between px-8">
                        <span>Zere os Calorões Hoje!</span>
                        <Zap size={24} fill="currentColor" />
                    </Button>
                </a>
            </div>
        )}

        {/* FOOTER */}
        <footer className="py-12 bg-white text-center text-gray-400 border-t border-gray-50">
            <p className="text-xs font-black mb-2">© 2024 Menopausa Sob Controle</p>
            <p className="text-[10px] uppercase tracking-widest max-w-xs mx-auto">Conteúdo Educativo. Não substitui consulta médica profissional.</p>
        </footer>

      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        .shadow-glow { box-shadow: 0 0 20px rgba(219, 39, 119, 0.4); }
        .shadow-huge { box-shadow: 0 40px 80px -20px rgba(0,0,0,0.2); }
      `}</style>
    </>
  );
}