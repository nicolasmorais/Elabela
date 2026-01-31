"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Sparkles, 
  Timer,
  Lock,
  CreditCard,
  Award,
  CheckCircle2,
  Image as ImageIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';

export function HairCarePage() {
  const [timeLeft, setTimeLeft] = useState(1194); // 19:54

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="cavalo-de-raca" />
      <div className="bg-[#FDF9F6] text-slate-800 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* BARRA DE URGÊNCIA SUAVE */}
        <div className="bg-[#1E293B] py-2 px-4 text-center border-b border-orange-900/10 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                Promoção Exclusiva Direto da Indústria
            </p>
            <div className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full border border-white/10">
              <Clock size={12} className="text-orange-300" />
              Oferta termina em: <span className="font-mono text-orange-300">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/40 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#334155] text-orange-300 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-white/10 shadow-lg">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-700 italic underline decoration-orange-400/30 underline-offset-8">Sem Medo, Sem Vergonha</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-500 mb-12 font-medium max-w-2xl leading-relaxed">
              Recupere em 7 dias a força e o brilho com tecnologia profissional, sem precisar gastar fortunas em sessões de salão.
            </p>

            <div className="relative group max-w-2xl w-full">
              <img 
                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" 
                alt="Kit Cavalo de Raça Bio Instinto" 
                className="rounded-[3rem] relative z-10 mx-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-5 rounded-2xl shadow-xl border border-orange-100 hidden md:block animate-in fade-in zoom-in duration-1000 delay-500">
                <div className="flex gap-1 text-orange-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-xs font-black text-slate-800 uppercase tracking-widest">Aprovado por Milhares</p>
              </div>
            </div>
          </div>
        </header>

        {/* GALERIA SUAVE */}
        <section className="py-24 px-6 bg-white border-y border-orange-50">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600/70 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase">
                O kit mais Amado do Brasil
              </h2>
              <div className="h-1 w-24 bg-orange-200 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-[#FDF9F6] rounded-[2.5rem] border border-orange-100 flex flex-col items-center justify-center text-orange-200 group hover:border-orange-300 transition-all cursor-pointer overflow-hidden relative shadow-sm">
                   <ImageIcon size={32} className="mb-2 opacity-40 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-40">Em breve</span>
                   <div className="absolute inset-0 bg-orange-900/[0.02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* O QUE VEM NO KIT - DESIGN SUAVE */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase">O QUE VEM NESSE KIT COMPLETO:</h2>
                    <p className="text-orange-700/70 font-bold text-sm md:text-base uppercase tracking-widest">
                        🧴 4 PRODUTOS PROFISSIONAIS QUE VÃO RESSUSCITAR SEU CABELO
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { 
                          n: "1️⃣ SHAMPOO", 
                          v: "300ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Limpa PROFUNDAMENTE sem destruir",
                            "Espuma cremosa incomparável",
                            "Perfume viciante que dura DIAS",
                            "Prepara para reconstrução REAL"
                          ] 
                        },
                        { 
                          n: "2️⃣ CONDICIONADOR", 
                          v: "300ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Desembaraça na PRIMEIRA PASSADA",
                            "Sinta a diferença IMEDIATAMENTE",
                            "Brilho absurdo, maciez real",
                            "Sela as cutículas e protege"
                          ] 
                        },
                        { 
                          n: "3️⃣ MÁSCARA", 
                          v: "250g", 
                          t: "CONDICIONANTE", 
                          bullets: [
                            "Onde a MÁGICA ACONTECE",
                            "Reconstrução PROFUNDA na fibra",
                            "Força e resistência visível",
                            "Tratamento de choque positivo"
                          ] 
                        },
                        { 
                          n: "4️⃣ CREME DE PENTEAR", 
                          v: "200ml", 
                          t: "CAVALO DE RAÇA", 
                          bullets: [
                            "Finalização IMPECÁVEL",
                            "Controla frizz e protege do calor",
                            "Acabamento luxuoso de salão",
                            "Fios nutridos e alinhados"
                          ] 
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[3rem] border border-orange-100 flex flex-col justify-between hover:shadow-xl hover:shadow-orange-900/5 transition-all group">
                            <div className="space-y-4">
                                <div className="text-orange-800/60 font-black text-[10px] uppercase tracking-widest">{item.n} ({item.v})</div>
                                <h3 className="text-xl font-black text-slate-900 leading-tight">{item.t}</h3>
                                <div className="space-y-3 pt-2">
                                  {item.bullets.map((bullet, idx) => (
                                    <p key={idx} className="text-slate-500 text-sm font-medium leading-snug flex items-start gap-2">
                                      <Check size={14} className="text-orange-500 shrink-0 mt-0.5" />
                                      {bullet}
                                    </p>
                                  ))}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-orange-50">
                                <div className="h-1 w-8 bg-orange-200 rounded-full group-hover:w-full transition-all duration-700"></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RESULTADOS - DESIGN SUAVE E ELEGANTE */}
                <div className="bg-[#FFF7F0] rounded-[4rem] p-10 md:p-20 border border-orange-100 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
                      <Sparkles size={240} className="text-orange-300" />
                    </div>
                    
                    <div className="text-center mb-16 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase text-slate-900 mb-4">
                          ✨ RESULTADOS QUE VÃO TE ENCANTAR:
                        </h2>
                        <div className="h-1 w-24 bg-orange-400/30 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 relative z-10">
                        {[
                          { t: "FORÇA ABSURDA", d: "Fios que aguentam o dia a dia" },
                          { t: "ZERO QUEBRA", d: "Cabelo forte da raiz às pontas" },
                          { t: "HIDRATAÇÃO REAL", d: "Nutrição profunda e duradoura" },
                          { t: "MACIEZ INSANA", d: "Toque sedoso e aveludado" },
                          { t: "BRILHO DE REVISTA", d: "Luminosidade natural e intensa" },
                          { t: "CRESCIMENTO", d: "Fios saudáveis crescem melhor" },
                          { t: "AUTOESTIMA", d: "Sinta-se linda todos os dias" }
                        ].map((res, i) => (
                          <div key={i} className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-5 rounded-2xl border border-white shadow-sm hover:bg-white transition-colors group">
                              <div className="bg-orange-100 p-2 rounded-full text-orange-700 group-hover:scale-110 transition-transform">
                                <CheckCircle2 size={20} />
                              </div>
                              <div>
                                <span className="font-black text-orange-800 text-sm tracking-tight mr-2">{res.t}</span>
                                <span className="font-medium text-slate-500 text-sm">- {res.d}</span>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* PRICING - CORES MAIS SUAVES */}
        <section id="pricing" className="py-24 px-6 bg-[#FDF9F6]">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-16 tracking-tighter leading-none">
                    Recupere seu brilho <br /> <span className="text-orange-700 underline decoration-orange-200">daqui a 7 dias.</span>
                </h2>

                <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-[0_40px_100px_-20px_rgba(234,179,8,0.1)] relative border border-orange-100">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#334155] text-orange-200 px-8 py-3 rounded-full font-black text-[10px] tracking-[0.3em] shadow-xl border-4 border-white">
                        OFERTA EXCLUSIVA DIRETO DA FÁBRICA
                    </div>

                    <div className="mb-12 space-y-4">
                        <div className="flex flex-col items-center">
                            <span className="text-slate-300 line-through text-xl font-bold">R$ 199,90</span>
                            <div className="flex items-start gap-1">
                                <span className="text-2xl font-black mt-4 text-slate-400">R$</span>
                                <span className="text-8xl md:text-9xl font-black tracking-tighter text-slate-900">147<span className="text-4xl text-slate-400">,90</span></span>
                            </div>
                            <p className="text-orange-700/60 font-black text-xs uppercase tracking-[0.2em] mt-4 italic">Pagamento Único • Kit Completo 4 Itens</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-xl mx-auto mb-12 bg-orange-50/30 p-8 rounded-[2.5rem] border border-orange-100/50">
                        {["Kit Completo 4 Passos", "Frascos de 300ml/250g", "Qualidade Profissional", "Envio Direto Bio Instinto", "Garantia de 7 Dias"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-slate-600 text-sm">
                                <Check size={16} className="text-orange-500" />
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full h-24 bg-[#1E293B] hover:bg-[#0F172A] text-orange-300 rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.02] group overflow-hidden">
                        <div className="flex flex-col items-center">
                            <span className="flex items-center gap-4 text-xl md:text-3xl font-black">
                                ✨ QUERO MEU KIT AGORA ✨ 
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40 mt-2 text-white">Últimas unidades em estoque</span>
                        </div>
                    </Button>

                    <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-30 grayscale">
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><ShieldCheck size={18} /> ORIGINAL</div>
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><Zap size={18} /> ENVIO EXPRESS</div>
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><CreditCard size={18} /> PIX / CARTÃO</div>
                    </div>
                </div>
            </div>
        </section>

        {/* GARANTIA SUAVE */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-[#FDF9F6] border-4 border-dashed border-orange-200/50 p-12 md:p-20 rounded-[4rem] relative">
                    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-sm border border-orange-100">
                      <ShieldCheck className="text-orange-700" size={40} />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-900">7 Dias de Satisfação</h2>
                    <p className="text-xl text-slate-500 leading-relaxed font-medium italic mb-10">
                        Use o Kit Cavalo de Raça. Se você não sentir seu cabelo mais forte e macio, nós devolvemos o valor investido. Temos total confiança na nossa tecnologia profissional.
                    </p>
                    <div className="inline-block px-8 py-2 bg-[#334155] text-orange-200 rounded-full text-[10px] font-black uppercase tracking-[0.4em]">Compromisso Bio Instinto</div>
                </div>
            </div>
        </section>

        {/* FOOTER DISCRETO */}
        <footer className="py-24 bg-[#1E293B] text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <div className="flex justify-center gap-8 text-white/10">
              <Lock size={20} /> <ShieldCheck size={20} /> <CreditCard size={20} />
            </div>
            <div className="space-y-4">
                <p className="text-white/30 text-[10px] font-bold uppercase tracking-widest">© 2024 Cavalo de Raça - Bio Instinto Profissional</p>
                <p className="text-white/10 text-[9px] leading-relaxed uppercase tracking-[0.15em] max-w-2xl mx-auto border-t border-white/5 pt-8 italic">
                IMPORTANTE: Os resultados podem variar de pessoa para pessoa. Este produto é um cosmético de uso externo. Bio Instinto Indústria Cosmética Ltda.
                </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}