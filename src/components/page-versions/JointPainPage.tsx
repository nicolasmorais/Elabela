"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  AlertTriangle, 
  Timer,
  Lock,
  CreditCard,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';

export function JointPainPage() {
  const [timeLeft, setTimeLeft] = useState(897); // 14:57

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="dor-zero" />
      <div className="bg-[#fdfdfd] text-slate-900 font-merriweather selection:bg-yellow-200 antialiased min-h-screen">
        
        {/* TOP WARNING BAR */}
        <div className="bg-yellow-300 py-2 px-4 text-center border-b border-yellow-400">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-slate-800">
            Atenção: Pessoas Com Mais De 40 Anos Com Dores Crônicas:
          </p>
        </div>

        <main className="max-w-[800px] mx-auto px-6 py-12 md:py-20 space-y-12 bg-white shadow-sm border-x border-slate-100">
          
          {/* MAIN HEADLINE SECTION */}
          <section className="text-center space-y-8">
            <h1 className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight text-slate-900">
              ⚠️ ATENÇÃO: Você Está Prestes a Descobrir o <span className="underline decoration-red-600 decoration-4">"Segredo Suíço"</span> Que Está Eliminando Dores Crônicas Nas Costas, Articulações e Ossos em Apenas 7 Dias... Sem Remédios Viciantes ou Cirurgias Arriscadas!
            </h1>
            
            <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic border-y-2 border-slate-100 py-6">
              A Clínica Mayo, A Clínica Cleveland E O American Journal Of Orthopedics Concordam: Um Nutriente Essencial Presente Neste "Segredo" Que Aumenta A Mobilidade Combate A <span className="text-blue-600">Substância Química Canibal</span> Oculta Que Está Definindo Suas Dores E Sua Velhice!
            </p>
          </section>

          {/* INTRO TEXT & SIDE IMAGE */}
          <section className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6 text-lg leading-[1.8]">
              <p>Se você tem mais de 40 anos e acorda toda manhã com dor nas costas, joelhos rangendo, ou sente aquela fisgada aguda toda vez que se levanta da cadeira...</p>
              <p className="font-bold underline decoration-yellow-400 decoration-4">Prepare-se porque o que você vai descobrir nesta página vai mudar sua vida para sempre.</p>
              <p>Eu sei que você já tentou de tudo...</p>
              <p>Fisioterapia que custou uma fortuna e não resolveu nada...</p>
              <p>Aqueles remédios que o médico receitou e que deixam seu estômago em frangalhos...</p>
            </div>
            <div className="w-full md:w-[280px] shrink-0">
                <img 
                    src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_22_45%20%282%29-5Mq5Tv2MbDtdy5EOR55c9k8LNw1OiD.png" 
                    alt="Pessoa com dor" 
                    className="rounded-2xl shadow-xl border-4 border-slate-50"
                />
            </div>
          </section>

          {/* INFLAMAZINA SECTION */}
          <section className="space-y-8 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200">
            <h2 className="text-3xl font-black text-center leading-tight">
              "Derrete" suas articulações como <span className="text-red-600">concreto se dissolvendo em ácido</span> de bateria...
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3">
                    <img 
                        src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/urina-com-espuma-scaled-1-kSjxkgXRuOWxUI7AaEm6uWo3FX7ZK2.jpg" 
                        alt="Inflamação" 
                        className="rounded-xl shadow-lg grayscale hover:grayscale-0 transition-all"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <p className="font-bold text-xl uppercase tracking-tighter">Mas E Se Eu Te Disser Que A Dor Não É Culpa Sua?</p>
                    <div className="space-y-3">
                        {[
                            "Dores latejantes nos joelhos",
                            "Fisgadas agudas nas costas",
                            "Formigamento nos ombros",
                            "Rigidez matinal severa"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-3 font-bold text-red-600">
                                <div className="h-2 w-2 bg-red-600 rounded-full"></div>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-center font-bold bg-yellow-200 px-4 py-2 inline-block w-full">
                Existe um "químico assassino" escondido nas suas articulações NESTE EXATO MOMENTO...
            </p>
            
            <div className="text-center space-y-4">
                <p className="text-2xl font-black italic">"INFLAMAZINA"</p>
                <p className="text-slate-500 text-sm">O Químico Silencioso Que Está Destruindo Suas Articulações Enquanto Você Lê Isso</p>
            </div>
          </section>

          {/* DR MARCELO STORY */}
          <section className="space-y-6 text-lg leading-[1.8]">
            <h2 className="text-3xl font-black border-b-4 border-blue-600 pb-2 inline-block">A Descoberta Acidental do Dr. Marcelo</h2>
            <p>Meu nome é <span className="font-black">Dr. Marcelo Andrade</span>. Sou médico ortopedista há 23 anos e nos últimos 15 anos atendi mais de 12.000 pacientes.</p>
            
            <div className="relative group float-right ml-8 mb-4 hidden md:block">
                <img 
                    src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/enhanced_441b7b5d-8850-444d-af70-488f594d5c22-aBTZK4gzJYBzRRy8spjG8H089khVpA.png" 
                    alt="Dr. Marcelo" 
                    className="w-[240px] rounded-3xl shadow-2xl border-4 border-white rotate-2"
                />
            </div>

            <p>Mas tem algo que eu nunca te contei... Eu também sofria de dor crônica. Hérnia de disco L4-L5. Todos os dias, ao levantar da cama, era aquela agonia.</p>
            <p>Até Que em 2019, Durante um Congresso Médico em Zurique, Tudo Mudou... Conheci o <span className="font-bold">Dr. Klaus Hermann</span>.</p>
            
            <div className="bg-blue-50 p-8 rounded-[2rem] border-l-8 border-blue-600">
                <p className="text-xl font-bold italic">"Dr. Andrade, eu li seu estudo. Muito bom. Mas posso te mostrar algo que vai revolucionar sua prática?"</p>
            </div>
          </section>

          {/* CHONDRAZINE BENEFITS SECTION */}
          <section className="space-y-12 py-12">
            <h2 className="text-4xl font-black text-center leading-tight">O <span className="text-blue-600 italic">"Protocolo da Cartilagem Azul"</span>: 3 Efeitos Extraordinários</h2>
            
            <div className="grid gap-8">
                {[
                    { t: "EFEITO #1: Neutraliza a INFLAMAZINA", d: "Neutraliza em até 89% em apenas 48 horas. Diferente dos remédios comuns, ele ATACA a raiz do problema.", icon: AlertTriangle },
                    { t: "EFEITO #2: Regenera a Cartilagem", d: "Estimula os condrócitos a produzirem NOVA cartilagem. Estudos mostram 34% de aumento na espessura.", icon: Check },
                    { t: "EFEITO #3: Lubrifica as Articulações", d: "Age como um 'Óleo WD-40 Biológico'. Aumenta o líquido sinovial em 67%, fazendo tudo deslizar suavemente.", icon: ShieldCheck }
                ].map((eff, i) => (
                    <div key={i} className="flex gap-6 p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-md transition-all">
                        <div className="shrink-0 bg-blue-600 p-3 rounded-2xl text-white"><eff.icon size={32} /></div>
                        <div>
                            <p className="text-2xl font-black mb-2">{eff.t}</p>
                            <p className="text-slate-600 leading-relaxed">{eff.d}</p>
                        </div>
                    </div>
                ))}
            </div>
          </section>

          {/* PRODUCT IMAGE & DOLORZERO DESCRIPTION */}
          <section className="text-center space-y-8 bg-slate-950 text-white rounded-[4rem] p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 blur-[100px] opacity-20"></div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter italic">DOLORZERO™</h2>
            <p className="text-xl font-bold text-slate-400">O Primeiro e Único Com Chondrazine-K2 No Brasil</p>
            <div className="max-w-md mx-auto">
                <img 
                    src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_11_16%20%281%29-YiIF5Dx6Ex8EfF18VGsiRtoYLJUhpE.png" 
                    alt="Frasco Dolorzero" 
                    className="rounded-[3rem] shadow-2xl border-4 border-white/10"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {[
                    "600mg Chondrazine-K2",
                    "400mg Colágeno Tipo II",
                    "Cúrcuma Lipossomal",
                    "Ácido Hialurônico",
                    "Vitaminas D3 + K2",
                    "Magnésio Bisglicinato"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 font-bold text-sm">
                        <Check className="text-green-400" size={16} />
                        {item}
                    </div>
                ))}
            </div>
          </section>

          {/* PRICING TABLE */}
          <section id="pricing" className="py-12 space-y-12">
            <div className="text-center">
                <span className="bg-red-600 text-white px-6 py-2 rounded-full font-black text-xs uppercase tracking-widest animate-bounce">Promoção Relâmpago Ativada</span>
                <p className="mt-4 font-bold text-red-600">Expira em {formatTime(timeLeft)}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* 1 MES */}
                <div className="border-2 border-slate-100 rounded-[2.5rem] p-8 text-center space-y-6 bg-white hover:border-blue-200 transition-all">
                    <p className="font-black uppercase tracking-widest text-xs text-slate-400">Kit Teste</p>
                    <p className="text-2xl font-black">1 MÊS</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through text-sm">R$ 299</p>
                        <p className="text-4xl font-black text-slate-900">R$ 147</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl">COMPRAR AGORA</Button>
                </div>

                {/* 3 MESES */}
                <div className="border-4 border-blue-600 rounded-[2.5rem] p-8 text-center space-y-6 bg-white relative scale-105 shadow-2xl">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">Mais Vendido</div>
                    <p className="font-black uppercase tracking-widest text-xs text-blue-600">Kit Transformação</p>
                    <p className="text-2xl font-black">3 MESES</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through text-sm">R$ 897</p>
                        <p className="text-5xl font-black text-blue-600">R$ 297</p>
                        <p className="text-xs font-bold text-green-600">FRETE GRÁTIS</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black rounded-xl h-12 shadow-lg">QUERO ESTE AGORA</Button>
                </div>

                {/* 6 MESES */}
                <div className="border-2 border-slate-100 rounded-[2.5rem] p-8 text-center space-y-6 bg-white hover:border-green-200 transition-all">
                    <p className="font-black uppercase tracking-widest text-xs text-slate-400">Kit Regeneração</p>
                    <p className="text-2xl font-black">6 MESES</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through text-sm">R$ 1.794</p>
                        <p className="text-4xl font-black text-green-600">R$ 447</p>
                        <p className="text-xs font-bold text-green-600">FRETE GRÁTIS</p>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-black rounded-xl">MELHOR CUSTO</Button>
                </div>
            </div>
          </section>

          {/* GUARANTEE SECTION */}
          <section className="bg-slate-50 border-4 border-dashed border-slate-300 p-10 rounded-[3rem] text-center space-y-6">
            <ShieldCheck size={80} className="mx-auto text-blue-600" />
            <h2 className="text-3xl font-black">GARANTIA BLINDADA DE 365 DIAS</h2>
            <p className="text-lg leading-relaxed italic text-slate-600">
                Se DOLORZERO™ não eliminar sua dor em até 90 dias... Ou se você não ficar 100% satisfeito por QUALQUER motivo... Você tem 365 DIAS para pedir reembolso TOTAL. Sem perguntas. Basta mandar um email.
            </p>
          </section>

          {/* TESTIMONIALS */}
          <section className="space-y-12">
            <h2 className="text-3xl font-black text-center">Relatos Que Emocionam</h2>
            <div className="space-y-6">
                {[
                    { n: "Marcia R., 62 anos", t: "Sofri 15 anos com artrose no joelho. Já tinha perdido as esperanças. DOLORZERO™ mudou minha vida. Em 3 semanas sem dor. Cancelei a cirurgia." },
                    { n: "Roberto S., 58 anos", t: "Hérnia de disco há 8 anos. Dor ciática horrível. Tomava 4-5 comprimidos por dia. Com DOLORZERO™, em 10 dias já estava 70% melhor. Hoje, zerou." }
                ].map((test, i) => (
                    <div key={i} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm flex gap-6 italic">
                        <div className="text-blue-200 text-6xl">“</div>
                        <div className="space-y-4">
                            <p className="text-lg leading-relaxed">{test.t}</p>
                            <p className="font-black text-slate-900 not-italic">— {test.n}</p>
                        </div>
                    </div>
                ))}
            </div>
          </section>

          {/* FOOTER DISCLOSURES */}
          <footer className="pt-20 border-t border-slate-100 space-y-12">
            <div className="flex flex-wrap justify-center gap-12 opacity-30">
                <Lock size={32} /> <CreditCard size={32} /> <ShieldCheck size={32} />
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center leading-relaxed max-w-2xl mx-auto space-y-4">
                <p>© 2024 DOLORZERO™ LABS. Todos os direitos reservados.</p>
                <p className="italic">AVISO LEGAL: Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar. Consulte um médico antes de iniciar qualquer suplementação.</p>
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}