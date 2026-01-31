"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Heart, 
  Sparkles, 
  Timer,
  Lock,
  CreditCard,
  ChevronRight,
  Award,
  Users,
  CheckCircle2,
  Trash2,
  Droplets,
  Scissors,
  XCircle,
  AlertCircle,
  Frown,
  Ban,
  Image as ImageIcon,
  ShoppingBag,
  DollarSign,
  Home,
  Dumbbell
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

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageTracker contentId="cavalo-de-raca" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* BARRA DE URGÊNCIA */}
        <div className="bg-slate-950 py-2 px-4 text-center border-b border-orange-900/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                Promoção Exclusiva Direto da Indústria
            </p>
            <div className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-orange-900/40 px-4 py-1 rounded-full border border-orange-500/20">
              <Clock size={12} className="text-orange-400" />
              Oferta termina em: <span className="font-mono text-orange-400">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/30 shadow-2xl">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-955 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-800 italic underline decoration-orange-500/30 underline-offset-8">Sem Medo, Sem Vergonha, Sem Desculpas</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 font-medium max-w-2xl leading-relaxed">
              Recupere em 7 dias a força, o brilho e a autoestima que você perdeu - com a mesma tecnologia profissional que salões cobram R$ 500 por sessão.
            </p>

            {/* IMAGEM DO PRODUTO (HERO) */}
            <div className="relative group max-w-3xl w-full">
              <img 
                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769892740886-ChatGPT-Image-31-de-jan.-de-2026,-17_52_08.png" 
                alt="Kit Cavalo de Raça Bio Instinto" 
                className="rounded-[3rem] relative z-10 mx-auto"
              />
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 hidden lg:flex flex-col gap-4 z-20">
                 <div className="bg-white p-4 rounded-2xl shadow-xl border border-orange-100 animate-bounce">
                    <p className="text-[10px] font-black text-orange-800 uppercase tracking-widest mb-1">Resultados</p>
                    <p className="text-sm font-bold text-slate-700">Na 1ª Aplicação ✨</p>
                 </div>
              </div>
            </div>
          </div>
        </header>

        {/* 1. SEÇÃO: GALERIA DE IMAGENS */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                O kit mais Amado do Brasil
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            {/* Grid da Galeria */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="aspect-square bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 group hover:border-orange-200 hover:bg-orange-50/30 transition-all cursor-pointer overflow-hidden relative shadow-sm">
                   <ImageIcon size={40} className="mb-2 opacity-50 group-hover:scale-110 transition-transform" />
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-50">Imagem Galeria {i}</span>
                   <div className="absolute inset-0 bg-orange-900/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <p className="text-slate-500 font-medium italic">Milhares de mulheres compartilhando seus resultados reais todos os dias.</p>
            </div>
          </div>
        </section>

        {/* 2. SEÇÃO: SOLUÇÃO (ONDE FOI SOLICITADA A TROCA) */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">A SOLUÇÃO QUE VOCÊ PRECISAVA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Resultado de salão no seu chuveiro. <span className="text-orange-700">Sem gastar R$ 300 todo mês.</span>
                        </h2>

                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Trabalha, cuida da casa, tem mil coisas pra resolver",
                                    "Não tem R$ 300 livre no orçamento todo mês",
                                    "Não pode passar o sábado inteiro no salão",
                                    "Não abre mão de se sentir bonita e confiante"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <div className="bg-orange-100 p-1 rounded-full text-orange-600"><Check size={16} strokeWidth={3} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            
                            <div className="space-y-4 text-2xl font-black text-slate-900 tracking-tight leading-tight pt-4">
                                <p>Porque você merece olhar no espelho e gostar do que vê.</p>
                                <p className="text-orange-800 italic underline decoration-orange-300">Sem precisar escolher entre cabelo bonito ou pagar as contas.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex-1 lg:sticky lg:top-24 relative w-full">
                        <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-10"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769892740886-ChatGPT-Image-31-de-jan.-de-2026,-17_52_08.png" 
                            alt="Cabelo sendo tratado com profissionalismo" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* 3. SEÇÃO: DIFERENCIAIS */}
        <section className="py-32 px-6 bg-white relative">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <span className="inline-block text-orange-600 font-black text-[10px] md:text-xs uppercase tracking-[0.5em] mb-2">Por que somos os melhores</span>
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-none">
                        POR QUE ESSE KIT É <span className="text-orange-700">DIFERENTE?</span>
                    </h2>
                    <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: Sparkles, 
                                t: "Tecnologia Bio Instinto Profissional", 
                                d: "O mesmo produto que cabeleireiros usam para entregar resultados rápidos." 
                            },
                            { 
                                icon: Dumbbell, 
                                t: "Trata de verdade, não mascara", 
                                d: "Reconstrução real na fibra capilar, tratando o fio de dentro para fora." 
                            },
                            { 
                                icon: Zap, 
                                t: "Resultado na primeira aplicação", 
                                d: "Você sente a diferença no toque e no brilho assim que termina o banho." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 bg-[#FDF8F3] rounded-[3rem] border border-orange-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(139,94,60,0.1)] hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group">
                                <div className="p-5 rounded-[1.5rem] bg-white shadow-sm group-hover:scale-110 transition-transform w-fit">
                                    <item.icon className="h-8 w-8 text-orange-700" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-3">
                                    <p className="font-black text-slate-900 text-xl uppercase tracking-tight leading-tight">{item.t}</p>
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl lg:mx-auto">
                        {[
                            { 
                                icon: Home, 
                                t: "15 minutos no banho", 
                                d: "Desenvolvido para caber na rotina da mulher moderna que não tem tempo a perder." 
                            },
                            { 
                                icon: DollarSign, 
                                t: "Menos de R$ 2 por dia", 
                                d: "Um único kit rende de 2 a 3 meses de tratamento completo de alto nível." 
                            }
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col gap-6 p-10 bg-[#FDF8F3] rounded-[3rem] border border-orange-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_25px_60px_-15px_rgba(139,94,60,0.1)] hover:border-orange-300 transition-all duration-500 hover:-translate-y-2 group">
                                <div className="p-5 rounded-[1.5rem] bg-white shadow-sm group-hover:scale-110 transition-transform w-fit">
                                    <item.icon className="h-8 w-8 text-orange-700" strokeWidth={2.5} />
                                </div>
                                <div className="space-y-3">
                                    <p className="font-black text-slate-900 text-xl uppercase tracking-tight leading-tight">{item.t}</p>
                                    <p className="text-slate-500 font-medium leading-relaxed">{item.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* O restante do código permanece igual */}
        {/* 4. SEÇÃO: O QUE VEM NESSE KIT COMPLETO */}
        <section className="py-24 px-6 bg-[#FDF8F3] border-y border-orange-100">
            <div className="max-w-6xl mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter uppercase">O QUE VEM NESSE KIT COMPLETO:</h2>
                    <p className="text-orange-700 font-bold text-lg md:text-xl uppercase tracking-widest">
                        🧴 4 PRODUTOS PROFISSIONAIS QUE VÃO RESSUSCITAR SEU CABELO:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { n: "1️⃣ SHAMPOO", v: "300ml", t: "CAVALO DE RAÇA", bullets: ["Limpa PROFUNDAMENTE sem destruir", "Espuma cremosa que você NUNCA viu igual", "Perfume viciante que dura DIAS", "Prepara o fio pra reconstrução REAL"] },
                        { n: "2️⃣ CONDICIONADOR", v: "300ml", t: "CAVALO DE RAÇA", bullets: ["Desembaraça na PRIMEIRA PASSADA", "Você vai sentir a diferença IMEDIATAMENTE", "Brilho absurdo, maciez de comercial", "Sela as cutículas e protege os fios"] },
                        { n: "3️⃣ MÁSCARA", v: "250g", t: "CONDICIONANTE", bullets: ["Aqui é onde a MÁGICA ACONTECE", "Reconstrução PROFUNDA na fibra capilar", "Força e resistência que você VAI SENTIR", "É tipo esteróides pro seu cabelo (só que legal)"] },
                        { n: "4️⃣ CREME DE PENTEAR", v: "200ml", t: "CAVALO DE RAÇA", bullets: ["Finalização IMPECÁVEL", "Controla frizz, protege do calor, nutre", "Deixa aquele acabamento de salão", "Seu cabelo vai parecer de OUTRA PESSOA"] }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all hover:-translate-y-2 group shadow-sm">
                            <div className="space-y-4">
                                <div className="text-orange-800 font-black text-xs uppercase tracking-widest">{item.n} ({item.v})</div>
                                <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.t}</h3>
                                <div className="space-y-3 pt-2">
                                  {item.bullets.map((bullet, idx) => (
                                    <p key={idx} className="text-slate-600 text-sm font-medium leading-snug flex items-start gap-2">
                                      <span className="text-orange-600 shrink-0">→</span>
                                      {bullet}
                                    </p>
                                  ))}
                                </div>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="h-2 w-12 bg-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white text-slate-900 rounded-[3.5rem] p-10 md:p-16 shadow-xl relative overflow-hidden border border-orange-100">
                    <div className="absolute top-0 right-0 p-12 opacity-[0.15] pointer-events-none text-orange-200">
                      <Sparkles size={250} />
                    </div>
                    <div className="text-center mb-12 relative z-10">
                        <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase mb-4 text-orange-950">🔥 RESULTADOS QUE VÃO TE FAZER CHORAR:</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 relative z-10">
                        {[{ t: "FORÇA ABSURDA", d: "Fios que aguentam TUDO" }, { t: "ZERO QUEBRA", d: "Acabou aquele cabelo no pente" }, { t: "HIDRATAÇÃO REAL", d: "Não aquela ilusão temporária" }, { t: "MACIEZ INSANA", d: "Você não vai parar de passar a mão" }, { t: "BRILHO DE REVISTA", d: "Tipo aqueles comerciais impossíveis" }, { t: "CRESCIMENTO ACELERADO", d: "Fios fortes crescem RÁPIDO" }, { t: "AUTOESTIMA LÁ EM CIMA", d: "Isso não tem preço" }].map((res, i) => (
                          <div key={i} className="flex items-center gap-4 bg-slate-50/80 p-5 rounded-2xl border border-orange-100 shadow-sm hover:bg-white hover:border-orange-300 transition-all duration-300 group/item">
                              <div className="bg-orange-100 text-orange-700 p-2 rounded-full group-hover/item:scale-110 transition-transform">
                                <Check size={18} strokeWidth={4} />
                              </div>
                              <div>
                                <span className="font-black text-orange-900 mr-1 tracking-tight uppercase text-sm">{res.t}</span>
                                <span className="font-medium text-slate-500 text-sm">- {res.d}</span>
                              </div>
                          </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* PRICING & FOOTER (MANTIDOS IGUAIS) */}
        <section id="pricing" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-16 tracking-tighter leading-none">Qual dessas mulheres você quer ser <br /> <span className="text-orange-700 underline decoration-orange-300">daqui a 7 dias?</span></h2>
                <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-[0_64px_128px_-24px_rgba(139,94,60,0.3)] relative border-[6px] border-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 text-orange-400 px-10 py-3 rounded-full font-black text-sm tracking-[0.3em] shadow-2xl border-4 border-white">OFERTA ESPECIAL DIRETO DA INDÚSTRIA</div>
                    <div className="mb-12 space-y-4">
                        <div className="flex flex-col items-center">
                            <span className="text-slate-300 line-through text-2xl font-bold">R$ 199,90</span>
                            <div className="flex items-start gap-1">
                                <span className="text-3xl font-black mt-4">R$</span>
                                <span className="text-8xl md:text-9xl font-black tracking-tighter text-slate-950">147<span className="text-5xl">,90</span></span>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full h-24 bg-slate-950 hover:bg-slate-900 text-orange-400 rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 group overflow-hidden">
                        <div className="flex flex-col items-center">
                            <span className="flex items-center gap-4 text-xl md:text-3xl font-black">✨ QUERO MEU CABELO LINDO AGORA ✨ <ArrowRight className="group-hover:translate-x-2 transition-transform" /></span>
                        </div>
                    </Button>
                </div>
            </div>
        </section>

        <footer className="py-24 bg-slate-950 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 space-y-12 text-white/20">
            <p className="text-white/40 text-xs font-bold uppercase tracking-widest">© 2024 Cavalo de Raça - Bio Instinto. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </>
  );
}