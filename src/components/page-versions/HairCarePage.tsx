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
  ShoppingBag,
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
  StarHalf,
  XCircle,
  AlertCircle,
  Frown,
  Ban
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
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-950 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-800 italic underline decoration-orange-500/30 underline-offset-8">Sem Medo, Sem Vergonha, Sem Desculpas</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 font-medium max-w-3xl leading-relaxed">
              Recupere em 7 dias a força, o brilho e a autoestima que você perdeu - com a mesma tecnologia profissional que salões cobram R$ 500 por sessão.
            </p>

            {/* IMAGEM DO PRODUTO */}
            <div className="relative group max-w-3xl w-full">
              <img 
                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" 
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

        {/* SECTION DOR/PROBLEMA - NOVA COPY */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-4xl mx-auto space-y-16">
            
            {/* Bloco 1: Fundo do Poço */}
            <div className="space-y-8 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-red-600 leading-tight">
                VOCÊ ESTÁ NO FUNDO DO POÇO CAPILAR. E EU SEI DISSO.
              </h2>
              <div className="space-y-6 text-xl md:text-2xl text-slate-700 font-medium leading-relaxed">
                <p>Porque eu vejo nos seus olhos toda vez que você olha no espelho.</p>
                <p>Aquela <span className="font-black text-slate-950 underline decoration-red-200">TRISTEZA PROFUNDA</span> quando você passa a mão no cabelo e sente ele quebrando entre seus dedos.</p>
                <p>Aquela <span className="font-black text-slate-950 underline decoration-red-200">VERGONHA QUEIMANDO</span> quando você precisa sair e a única opção é ESCONDER tudo em um coque apertado.</p>
                <p>Aquele <span className="font-black text-slate-950 underline decoration-red-200">APERTO NO PEITO</span> quando você vê mechas inteiras no ralo do chuveiro e pensa: "Meu Deus, não vai sobrar nada..."</p>
              </div>
            </div>

            {/* Bloco 2: O Pior não é o cabelo */}
            <div className="p-8 md:p-12 bg-red-50 rounded-[3rem] border border-red-100 space-y-10">
              <h3 className="text-2xl md:text-4xl font-black text-red-800 text-center uppercase tracking-tight">MAS O PIOR NÃO É O CABELO EM SI.</h3>
              <p className="text-xl md:text-2xl text-red-900/80 font-bold text-center">O pior é o que isso fez com VOCÊ.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Você DESISTIU de soltar o cabelo",
                  "Você FOGE de fotos (ou edita até não parecer mais você)",
                  "Você INVENTA DESCULPAS pra não sair quando o cabelo tá \"impossível\"",
                  "Você CHORA NO CHUVEIRO vendo seu cabelo cair",
                  "Você PERDEU A AUTOESTIMA que tinha antes",
                  "Você NÃO SE SENTE BONITA há meses (ou anos)"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/60 p-4 rounded-2xl border border-red-100">
                    <Frown size={24} className="text-red-500 shrink-0" />
                    <span className="font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center space-y-4 pt-6 border-t border-red-200">
                <p className="text-xl font-bold text-red-900">E o pior de tudo?</p>
                <p className="text-lg text-red-800/70 italic">
                  Você começou a ACEITAR que "é assim mesmo".<br />
                  Que seu cabelo "não tem mais jeito".<br />
                  Que você "já tentou de tudo".<br />
                  Que talvez você "não nasceu pra ter cabelo bonito".
                </p>
              </div>
            </div>

            {/* Bloco 3: Tudo Mentira */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950 text-center">
                MENTIRA. TUDO MENTIRA.
              </h2>
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <p className="text-xl font-bold text-slate-600 leading-relaxed">
                  Sabe por quê você não tem resultado? Porque você está sendo <span className="text-red-600">ENGANADA</span>.
                </p>
                <p className="text-lg text-slate-500">Você já desperdiçou CENTENAS (talvez MILHARES) de reais em:</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Hidratação de salão R$ 250-400 → Durou 1 semana e voltou tudo",
                  "Shampoo \"milagroso\" de influencer R$ 120 → Fez zero diferença",
                  "Ampolas \"reconstrução profunda\" R$ 35 cada → Comprou 10, jogou 9 fora",
                  "Receitas caseiras → Babosa, abacate, ovo... que SUJEIRA pra nada",
                  "Cronograma capilar complicado → Desistiu na segunda semana",
                  "Máscaras \"importadas\" R$ 80-150 → Mais embalagem bonita que resultado",
                  "Vitaminas pra crescimento → Seu bolso que ficou mais fraco"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200 group hover:border-red-200 transition-colors">
                    <XCircle size={20} className="text-red-500 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="font-bold text-slate-700 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="text-center bg-slate-950 p-10 rounded-[3rem] text-white space-y-4 shadow-2xl">
                <p className="text-2xl font-black text-orange-400">E CADÊ O RESULTADO?</p>
                <p className="text-4xl font-black">NENHUM.</p>
                <p className="text-xl opacity-80">Seu cabelo continua QUEBRADIÇO. Continua SEM VIDA. Continua TE FAZENDO SENTIR MAL.</p>
              </div>
            </div>

            {/* Bloco 4: Esperança que morre */}
            <div className="space-y-8 py-10">
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950 text-center uppercase">
                SABE O QUE DÓI MAIS?
              </h2>
              <div className="max-w-3xl mx-auto space-y-6 text-xl md:text-2xl text-center leading-relaxed font-medium text-slate-600">
                <p>Não é o dinheiro jogado fora. Não é o tempo perdido.</p>
                <p className="text-slate-950 font-black text-3xl md:text-4xl tracking-tight leading-none italic">
                    É A ESPERANÇA QUE MORRE A CADA VEZ.
                </p>
                <p>Você compra o produto CHEIO DE FÉ. "Dessa vez vai funcionar... dessa vez vai ser diferente..."</p>
                <p>Usa. Espera. Torce. E NÃO FUNCIONA. De novo. E de novo. E de novo. Até que você para de acreditar que existe solução.</p>
              </div>
            </div>

            {/* Bloco 5: Conformismo */}
            <div className="bg-orange-50/50 p-10 md:p-16 rounded-[4rem] border border-orange-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-5"><Users size={200} /></div>
                <div className="relative z-10 space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black tracking-tighter text-slate-950 text-center">
                        E AÍ VOCÊ SE CONFORMA.
                    </h2>
                    <div className="space-y-6 text-xl text-slate-700 leading-relaxed font-medium">
                        <p>Começa a viver como "a mulher do cabelo problemático". A que SEMPRE usa coque. A que NUNCA aparece bem nas fotos. A que EVITA sair em dias de umidade. A que DESISTIU de ter aquele cabelo que sempre sonhou.</p>
                        <p className="text-2xl font-black text-slate-950 italic">Enquanto outras mulheres ao seu redor...</p>
                        <p>Têm cabelos LINDOS, VOLUMOSOS, BRILHANTES. Soltam o cabelo com confiança. Recebem elogios toda hora. Tiram foto e ficam INCRÍVEIS.</p>
                        <div className="p-6 bg-white rounded-3xl border border-orange-200 text-center space-y-2">
                            <p className="italic">"Por que comigo é diferente?"</p>
                            <p className="italic">"Por que eu não consigo?"</p>
                            <p className="italic">"O que tem de errado comigo?"</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bloco 6: Não tem nada errado */}
            <div className="space-y-12 text-center md:text-left">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-slate-950 leading-tight">
                    NADA. NÃO TEM NADA DE ERRADO COM VOCÊ.
                </h2>
                <div className="h-2 w-24 bg-green-600 rounded-full hidden md:block"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-xl text-slate-700 leading-relaxed">
                    <p>O problema é que você nunca teve acesso ao que <span className="font-black text-slate-950">REALMENTE FUNCIONA.</span></p>
                    <p>Você foi enganada por:</p>
                    <ul className="space-y-4">
                        <li className="flex items-center gap-3"><Ban size={18} className="text-red-500 shrink-0" /> <span className="font-bold">Produtos genéricos de prateleira</span></li>
                        <li className="flex items-center gap-3"><Ban size={18} className="text-red-500 shrink-0" /> <span className="font-bold">Marcas que investem mais em propaganda</span></li>
                        <li className="flex items-center gap-3"><Ban size={18} className="text-red-500 shrink-0" /> <span className="font-bold">Influencers vendendo qualquer porcaria</span></li>
                        <li className="flex items-center gap-3"><Ban size={18} className="text-red-500 shrink-0" /> <span className="font-bold">Salões que te prendem em tratamentos caros</span></li>
                    </ul>
                </div>
                <div className="bg-slate-900 p-8 rounded-[3rem] text-white shadow-2xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                        A Verdade Revelada
                    </div>
                    <p className="text-2xl font-black italic">A solução REAL sempre esteve disponível.</p>
                    <p className="text-lg opacity-80 font-medium">A solução que CABELEIREIROS PROFISSIONAIS usam. A solução que REALMENTE TRANSFORMA cabelos destruídos.</p>
                    <p className="text-xl font-bold text-orange-400">A solução que você NUNCA TEVE ACESSO... até agora.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SOLUÇÃO SECTION */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">A Solução Profissional</span>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter leading-none">
                            A Força que seus fios estavam <span className="text-orange-700">Implorando.</span>
                        </h2>
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Apresentamos o <strong>Kit Capilar Cavalo de Raça Bio Instinto</strong>. Uma solução PROFISSIONAL desenvolvida em laboratório com tecnologia brasileira.
                        </p>
                        
                        <div className="space-y-6">
                            {[
                                { t: "Ação na Raiz do Problema", d: "Não mascaramos, tratamos a fibra capilar." },
                                { t: "Tecnologia Profissional", d: "Mesma qualidade usada pelos grandes cabeleireiros." },
                                { t: "Resultado Imediato", d: "Sinta a diferença logo na primeira lavagem." }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 group">
                                    <div className="bg-white p-3 rounded-2xl text-orange-700 shadow-md group-hover:scale-110 transition-transform"><Check size={24} /></div>
                                    <div>
                                        <p className="font-black text-slate-900 text-xl">{item.t}</p>
                                        <p className="text-slate-500 font-medium">{item.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1 relative">
                        <div className="absolute inset-0 bg-orange-300 rounded-full blur-[100px] opacity-20"></div>
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                            alt="Kit Completo Profissional" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[2rem]"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* O QUE TEM NO KIT (PRODUTOS) */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">O Que Tem no Kit?</h2>
                    <p className="text-slate-400 font-bold uppercase tracking-widest">4 Passos para o Cabelo de Rainha</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { n: "1. Shampoo", v: "300ml", t: "Limpeza Profunda", d: "Remove impurezas sem ressecar e prepara para a reconstrução." },
                        { n: "2. Condicionador", v: "300ml", t: "Sela e Brilha", d: "Desembaraça instantaneamente e deixa os fios macios como seda." },
                        { n: "3. Máscara", v: "250g", t: "Reconstrução", d: "Penetra na fibra capilar transformando fios quebradiços em aço." },
                        { n: "4. Creme Pentear", v: "200ml", t: "Finalização", d: "Proteção térmica e controle de frizz o dia inteiro." }
                    ].map((item, i) => (
                        <div key={i} className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between hover:border-orange-200 transition-all hover:-translate-y-2 group">
                            <div className="space-y-4">
                                <div className="text-orange-800 font-black text-xs uppercase tracking-widest">{item.v}</div>
                                <h3 className="text-2xl font-black text-slate-900 leading-tight">{item.n}</h3>
                                <p className="text-orange-700 font-bold text-sm uppercase tracking-widest">{item.t}</p>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                            </div>
                            <div className="mt-8 pt-6 border-t border-slate-200">
                                <div className="h-2 w-12 bg-orange-600 rounded-full group-hover:w-full transition-all duration-500"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* BENEFÍCIOS SECTION */}
        <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
                            Benefícios que <span className="text-orange-400 italic">Transformam.</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                "Força Real nos Fios", "Resistência Absurda", "Hidratação Intensa", 
                                "Maciez de Comercial", "Brilho Natural", "Perfume Inesquecível", 
                                "Crescimento Saudável", "Adeus Pontas Duplas"
                            ].map((benef, i) => (
                                <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/10">
                                    <Sparkles size={16} className="text-orange-400" />
                                    <span className="font-bold text-sm">{benef}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white text-slate-950 p-10 md:p-16 rounded-[4rem] shadow-2xl relative">
                        <div className="absolute -top-6 -right-6 bg-orange-500 text-white w-20 h-20 rounded-full flex items-center justify-center font-black rotate-12 shadow-xl">
                            100% OK
                        </div>
                        <h3 className="text-3xl font-black mb-8 leading-tight">Garantia Bio Instinto</h3>
                        <p className="text-lg text-slate-600 mb-8 font-medium">A Bio Instinto é uma das maiores indústrias do Brasil. Qualidade garantida para o seu tratamento.</p>
                        <ul className="space-y-4">
                            {["Produto 100% Original", "Envio Direto da Fábrica", "Pronta Entrega Imediata"].map((g, i) => (
                                <li key={i} className="flex items-center gap-3 font-bold">
                                    <ShieldCheck className="text-orange-600" /> {g}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        {/* TESTEMUNHOS */}
        <section className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-950 tracking-tighter">Mulheres Reais</h2>
                    <div className="flex justify-center gap-1 text-orange-500">
                        {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { n: "Mariana R.", i: "34 anos", t: "Chorei na primeira vez que usei. Eu não acreditava que meu cabelo pudesse voltar a ser assim." },
                        { n: "Juliana S.", i: "29 anos", t: "Meu marido perguntou se eu tinha ido ao salão. O perfume é incrível e o brilho é absurdo!" },
                        { n: "Camila F.", i: "41 anos", t: "Gastava R$200 todo mês no salão. Esse kit me deu resultado profissional em casa por muito menos." }
                    ].map((test, i) => (
                        <div key={i} className="bg-white p-10 rounded-[3rem] border border-orange-100 shadow-xl relative group hover:-translate-y-2 transition-all">
                            <div className="absolute -top-6 -left-4 text-orange-100 text-9xl font-serif select-none pointer-events-none group-hover:text-orange-200 transition-colors opacity-50">“</div>
                            <p className="italic text-slate-700 text-lg font-medium leading-relaxed relative z-10 mb-8">"{test.t}"</p>
                            <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center font-black text-orange-800">{test.n[0]}</div>
                                <div>
                                    <p className="font-black text-slate-950">{test.n}</p>
                                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">{test.i}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PRICING & OFFER */}
        <section id="pricing" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-16 tracking-tighter leading-none">
                    Qual dessas mulheres você quer ser <br /> <span className="text-orange-700 underline decoration-orange-300">daqui a 7 dias?</span>
                </h2>

                <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-[0_64px_128px_-24px_rgba(139,94,60,0.3)] relative border-[6px] border-white">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-950 text-orange-400 px-10 py-3 rounded-full font-black text-sm tracking-[0.3em] shadow-2xl border-4 border-white">
                        OFERTA ESPECIAL DIRETO DA INDÚSTRIA
                    </div>

                    <div className="mb-12 space-y-4">
                        <p className="text-slate-400 font-black text-sm uppercase tracking-widest">Kit Completo (Shampoo + Cond. + Máscara + Creme)</p>
                        <div className="flex flex-col items-center">
                            <span className="text-slate-300 line-through text-2xl font-bold">R$ 199,90</span>
                            <div className="flex items-start gap-1">
                                <span className="text-3xl font-black mt-4">R$</span>
                                <span className="text-8xl md:text-9xl font-black tracking-tighter text-slate-950">147<span className="text-5xl">,90</span></span>
                            </div>
                            <p className="text-green-600 font-black text-sm uppercase tracking-[0.2em] mt-2">Pagamento Único • Tratamento para 3 meses</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto mb-12 bg-[#FDF8F3] p-8 rounded-[2.5rem] border border-orange-100">
                        {["Kit Completo 4 Passos", "Frascos de Tamanho Profissional", "Menos de R$ 2 por dia", "Envio Imediato", "Garantia de 7 Dias"].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-slate-700 text-sm">
                                <div className="bg-green-100 p-1 rounded-full text-green-600"><Check size={16} /></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>

                    <Button className="w-full h-24 bg-slate-950 hover:bg-slate-900 text-orange-400 rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 group overflow-hidden">
                        <div className="flex flex-col items-center">
                            <span className="flex items-center gap-4 text-xl md:text-3xl font-black">
                                ✨ QUERO MEU CABELO LINDO AGORA ✨ 
                                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-60 mt-2 text-white">Compra 100% Segura - Últimas unidades!</span>
                        </div>
                    </Button>

                    <div className="flex flex-wrap justify-center gap-8 mt-12 opacity-30 grayscale">
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><ShieldCheck size={20} /> ORIGINAL</div>
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><Zap size={20} /> ENVIO EXPRESS</div>
                        <div className="flex items-center gap-2 text-[10px] font-black tracking-widest"><CreditCard size={20} /> PIX / CARTÃO</div>
                    </div>
                </div>
            </div>
        </section>

        {/* GARANTIA */}
        <section className="py-24 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">
                <div className="bg-[#FDF8F3] border-[6px] border-dashed border-orange-500/30 p-12 md:p-24 rounded-[4rem] relative overflow-hidden">
                    <ShieldCheck className="mx-auto h-24 w-24 text-orange-700 mb-10" />
                    <h2 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter uppercase text-slate-950">Satisfação ou seu Dinheiro de Volta</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium italic mb-10">
                        Use o Kit Cavalo de Raça por 7 dias. Se você não AMAR o resultado, nós devolvemos 100% do seu dinheiro. Sem perguntas. Porque temos certeza que você vai se apaixonar.
                    </p>
                    <div className="inline-block px-8 py-2 bg-slate-950 text-orange-400 rounded-full text-xs font-black uppercase tracking-[0.4em]">Compromisso Bio Instinto</div>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="py-24 bg-slate-950 text-center border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 space-y-12">
            <img 
                src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/94e94392-0815-4bb4-9cfa-ca4362c3495f%20%281%29%20%281%29-cWKpykzfXjyKf02ITuUtmE2iq5JYZn.png" 
                alt="PageShift Logo" 
                className="h-8 mx-auto brightness-200 opacity-50"
            />
            <div className="flex justify-center gap-8 text-white/20">
              <Lock size={24} /> <ShieldCheck size={24} /> <CreditCard size={24} />
            </div>
            <div className="space-y-4">
                <p className="text-white/40 text-xs font-bold uppercase tracking-widest">© 2024 Cavalo de Raça - Bio Instinto. Todos os direitos reservados.</p>
                <p className="text-white/20 text-[10px] leading-relaxed uppercase tracking-[0.15em] max-w-3xl mx-auto border-t border-white/5 pt-8 italic">
                IMPORTANTE: Os resultados podem variar de pessoa para pessoa. Este produto é um cosmético de uso externo. Em caso de irritação, suspenda o uso e procure orientação médica.
                </p>
            </div>
          </div>
        </footer>

      </div>
    </>
  );
}