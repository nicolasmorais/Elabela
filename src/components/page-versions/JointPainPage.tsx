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
  ChevronRight,
  ShieldAlert,
  ThumbsUp,
  Award,
  Zap,
  FlaskConical,
  Microscope,
  Users,
  CheckCircle2
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

  const scrollToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageTracker contentId="dor-zero" />
      <div className="bg-[#fdfdfd] text-slate-900 font-manrope selection:bg-yellow-200 antialiased min-h-screen">
        
        {/* BARRA DE AVISO TOPO */}
        <div className="bg-yellow-300 py-3 px-4 text-center border-b border-yellow-400">
          <p className="text-[11px] md:text-sm font-black uppercase tracking-tight text-slate-800">
            ⚠️ AVISO: ESTA PÁGINA PODE SER REMOVIDA A QUALQUER MOMENTO DEVIDO A PRESSÕES DA INDÚSTRIA FARMACÊUTICA.
          </p>
        </div>

        <main className="max-w-[850px] mx-auto px-6 py-12 md:py-20 space-y-12 bg-white shadow-sm border-x border-slate-100">
          
          {/* HEADLINE PRINCIPAL */}
          <section className="text-center space-y-10">
            <h1 className="text-3xl md:text-5xl font-black leading-[1.2] tracking-tight text-slate-900">
              ⚠️ ATENÇÃO: Você Está Prestes a Descobrir o <span className="underline decoration-red-600 decoration-4">"Segredo Suíço"</span> Que Está Eliminando Dores Crônicas Nas Costas, Articulações e Ossos em Apenas 7 Dias... Sem Remédios Viciantes ou Cirurgias Arriscadas!
            </h1>
            
            <div className="h-1 w-32 bg-red-600 mx-auto rounded-full"></div>
            
            <p className="text-xl md:text-2xl font-bold text-slate-700 leading-relaxed italic border-y-2 border-slate-100 py-8">
              A Clínica Mayo, A Clínica Cleveland E O American Journal Of Orthopedics Concordam: Um Nutriente Essencial Presente Neste "Segredo" Que Aumenta A Mobilidade Combate A <span className="text-blue-600">Substância Química Canibal</span> Oculta Que Está Definindo Suas Dores E Sua Velhice!
            </p>
          </section>

          {/* INTRODUÇÃO E IMAGEM LATERAL */}
          <section className="space-y-6 text-xl leading-[1.8] text-slate-800">
            <p>Se você tem mais de 40 anos e acorda toda manhã com dor nas costas, joelhos rangendo, ou sente aquela fisgada aguda toda vez que se levanta da cadeira...</p>
            <p className="font-bold bg-yellow-200 px-1">Prepare-se porque o que você vai descobrir nesta página vai mudar sua vida para sempre.</p>
            
            <div className="flex flex-col md:flex-row gap-10 py-8 items-center">
                <div className="flex-1 space-y-6">
                    <p>Eu sei que você já tentou de tudo...</p>
                    <ul className="space-y-4">
                        <li className="flex gap-3 items-center"><ChevronRight size={18} className="text-slate-400" /> Fisioterapia que custou uma fortuna e não resolveu nada...</li>
                        <li className="flex gap-3 items-center"><ChevronRight size={18} className="text-slate-400" /> Aqueles remédios que o médico receitou e que deixam seu estômago em frangalhos...</li>
                        <li className="flex gap-3 items-center"><ChevronRight size={18} className="text-slate-400" /> Pomadas "milagrosas" que só funcionam por 20 minutos...</li>
                        <li className="flex gap-3 items-center"><ChevronRight size={18} className="text-slate-400" /> Acupuntura, quiropraxia, massagem, travesseiros ortopédicos...</li>
                    </ul>
                </div>
                <div className="w-full md:w-[320px] shrink-0">
                    <img 
                        src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_22_45%20%282%29-5Mq5Tv2MbDtdy5EOR55c9k8LNw1OiD.png" 
                        alt="Pessoa sentindo dor severa" 
                        className="rounded-3xl shadow-2xl border-8 border-slate-50"
                    />
                </div>
            </div>

            <p>E mesmo assim... a dor continua lá.</p>
            <p className="font-black text-2xl">Toda. Santa. Manhã.</p>
            <p>Como uma lembrança cruel de que você está envelhecendo...</p>
            <p>De que seu corpo está "desistindo" de você...</p>
            
            <div className="bg-red-50 p-8 rounded-[2rem] border-2 border-red-100 text-center space-y-4">
                <p className="text-2xl font-black text-red-700 italic">Mas E Se Eu Te Disser Que A Dor Não É Culpa Sua?</p>
            </div>

            <p>E se eu te contar que existe um "químico assassino" escondido nas suas articulações NESTE EXATO MOMENTO...</p>
            <p>Que está literalmente <span className="font-bold text-red-600">CORROENDO</span> a cartilagem dos seus ossos como ácido derretendo borracha?</p>
            <p>Esse químico tem um nome...</p>
            <p>Os cientistas da Universidade Johns Hopkins e da Mayo Clinic o chamam de...</p>
            
            <div className="py-6 text-center">
                <p className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter">"INFLAMAZINA"</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-2">O Químico Silencioso Que Está Destruindo Suas Articulações Enquanto Você Lê Isso</p>
            </div>

            <p className="text-sm text-slate-500 italic text-center">(Nota: o nome científico real é Citocina Inflamatória IL-6, mas vamos chamá-lo pelo que ele realmente é - um VENENO)</p>

            <p>Deixa eu te explicar...</p>
            <p>Você sabe aquela dor latejante no joelho quando você sobe escadas?</p>
            <p>Aquela fisgada nas costas quando você se abaixa pra pegar algo?</p>
            <p>Aquele formigamento nos ombros que não te deixa dormir?</p>
            <p className="text-2xl font-black text-red-600">NADA disso é "normal" do envelhecimento.</p>
            <p>É a INFLAMAZINA atacando suas articulações 24 horas por dia, 7 dias por semana.</p>
          </section>

          {/* BIG PHARMA SECTION */}
          <section className="py-12 border-t-4 border-slate-900 space-y-8 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black text-center uppercase tracking-tighter leading-tight">
                A VERDADE QUE AS FARMACÊUTICAS NÃO QUEREM QUE VOCÊ SAIBA:
            </h2>
            <h3 className="text-2xl font-bold text-blue-700 text-center">Por Que Seus Remédios Para Dor NUNCA Vão Funcionar (E Podem Estar Piorando Tudo)</h3>
            
            <p>Aqueles anti-inflamatórios que seu médico receitou?</p>
            <p>Eles são como colocar um band-aid em uma ferida de bala.</p>
            <p>Eles <span className="uppercase font-bold">ESCONDEM</span> a dor por algumas horas...</p>
            <p>Mas fazem <span className="font-black underline">ABSOLUTAMENTE NADA</span> para eliminar a INFLAMAZINA que está destruindo suas articulações.</p>
            
            <p>Pior ainda...</p>
            <p>Um estudo da <span className="font-bold">Harvard Medical School</span> descobriu que uso prolongado desses remédios pode:</p>
            
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <ul className="space-y-4">
                    <li className="flex items-start gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} /> <span>Destruir o revestimento do seu estômago¹</span></li>
                    <li className="flex items-start gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} /> <span>Sobrecarregar seus rins²</span></li>
                    <li className="flex items-start gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} /> <span>Aumentar risco de ataque cardíaco em até 47%³</span></li>
                    <li className="flex items-start gap-3"><AlertTriangle className="text-red-500 shrink-0 mt-1" size={24} /> <span className="font-bold">E o pior... AUMENTAR a produção de INFLAMAZINA no longo prazo⁴</span></li>
                </ul>
            </div>

            <p>Isso mesmo.</p>
            <p>Os remédios que deveriam te curar estão, na verdade, <span className="font-black text-red-600">PIORANDO</span> o problema.</p>
            <p>É como tentar apagar um incêndio jogando gasolina.</p>
            
            <blockquote className="border-l-8 border-blue-600 pl-8 py-4 italic text-2xl font-black text-slate-800">
                "Mas Dr. Marcelo, Por Que Ninguém Me Contou Isso Antes?"
            </blockquote>

            <p>Simples.</p>
            <p>A indústria farmacêutica movimenta <span className="font-black">$200 BILHÕES</span> por ano vendendo remédios para dor.⁵</p>
            <p>Você acha que eles querem que você <span className="font-bold italic">CURE</span> sua dor?</p>
            <p>Ou que você continue voltando todo mês para comprar mais uma caixa?</p>
            <p>Eles <span className="uppercase font-bold">PRECISAM</span> que você fique dependente.</p>
            <p>Eles <span className="uppercase font-bold">LUCRAM</span> com seu sofrimento.</p>
            <p>E é por isso que eles enterraram a descoberta que você está prestes a conhecer...</p>
          </section>

          {/* DR MARCELO STORY SECTION */}
          <section className="py-12 space-y-8 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">
                A Descoberta Acidental de um Médico Suíço Que Está "Apagando" Dores Crônicas em 7 Dias
            </h2>
            
            <div className="flex flex-col md:flex-row gap-10 items-center py-6">
                <div className="w-full md:w-[300px] shrink-0">
                    <img 
                        src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/enhanced_441b7b5d-8850-444d-af70-488f594d5c22-aBTZK4gzJYBzRRy8spjG8H089khVpA.png" 
                        alt="Dr. Marcelo Andrade" 
                        className="rounded-[3rem] shadow-2xl border-4 border-slate-50"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <p>Meu nome é <span className="font-black">Dr. Marcelo Andrade</span>.</p>
                    <p>Sou médico ortopedista há 23 anos...</p>
                    <p>Especialista em dor crônica pela Universidade de São Paulo...</p>
                    <p>E nos últimos 15 anos atendi mais de <span className="font-bold">12.000 pacientes</span> com problemas de coluna, articulações e ossos.</p>
                </div>
            </div>

            <p>Mas tem algo que eu nunca te contei...</p>
            <p>Eu também sofria de dor crônica. Hérnia de disco L4-L5. Todos os dias, ao levantar da cama, era aquela agonia. Dor que irradiava da lombar até a perna esquerda... Alguns dias a dor era tão forte que eu mal conseguia calçar os sapatos.</p>
            <p>Irônico, né? Um médico especialista em dor... sofrendo em silêncio. Eu tomava anti-inflamatórios como se fossem balas. Fiz 3 anos de fisioterapia. Tentei infiltração, bloqueios, acupuntura... Nada funcionava por mais de alguns dias. Os cirurgiões me diziam: "A única solução é operar." Mas eu sabia os riscos... Conhecia dezenas de pacientes que operaram e ficaram <span className="font-black text-red-600 uppercase">PIORES</span>.</p>
            
            <h3 className="text-2xl font-black text-slate-900 border-b-4 border-yellow-400 inline-block">Até Que em 2019, Durante um Congresso Médico em Zurique, Tudo Mudou...</h3>
            
            <p>Eu estava apresentando um paper sobre tratamento não-cirúrgico de hérnias discais... Quando um médico suíço se aproximou de mim no coffee break. <span className="font-black">Dr. Klaus Hermann.</span> Ele tinha uns 70 anos, mas se movia como se tivesse 40. Postura ereta. Sem sinal de dor.</p>
            <p>Ele me disse: "Dr. Andrade, eu li seu estudo. Muito bom. Mas posso te mostrar algo que vai revolucionar sua prática?" Confesso que fui cético. Mais um "milagre" que não funciona, pensei. Mas o Dr. Klaus me mostrou algo extraordinário...</p>
          </section>

          {/* SWISS SECRET SECTION */}
          <section className="py-12 bg-blue-900 text-white rounded-[4rem] p-10 md:p-16 space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-32 -mt-32 blur-[100px] opacity-10"></div>
            
            <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">
                O "Protocolo da Cartilagem Azul" - Usado Secretamente Pela Realeza Europeia Há Mais de 100 Anos
            </h2>
            
            <p className="text-xl leading-relaxed">Dr. Klaus me explicou que em 1887, um botânico suíço chamado Heinrich Müller descobriu uma planta rara nos Alpes... Uma planta de flores azuis que crescia apenas acima de 2.500 metros de altitude...</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-6">
                <div className="space-y-4">
                    <p className="text-xl leading-relaxed italic">"Os pastores locais notaram algo estranho:"</p>
                    <p className="text-xl leading-relaxed">As cabras que comiam essa planta <span className="font-black text-yellow-400 uppercase tracking-widest">NUNCA</span> desenvolviam problemas nas articulações. Enquanto outras cabras da mesma idade já mancavam e tinham dificuldade para andar... Aquelas que consumiam a "flor azul" continuavam saltando pelas montanhas como se fossem jovens.</p>
                </div>
                <div className="rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/20">
                    <img 
                        src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%203%20de%20dez.%20de%202025%2C%2020_24_07-CegP8MFAadFJUCgpK40pYN2w5o7Ilv.png" 
                        alt="Botânico Heinrich Müller" 
                        className="w-full h-auto"
                    />
                </div>
            </div>

            <p className="text-xl leading-relaxed">Müller coletou amostras e passou 15 anos estudando a planta... Até que em 1902 ele isolou o composto ativo:</p>
            
            <div className="text-center py-4">
                <p className="text-4xl font-black text-yellow-400 tracking-tighter italic">CHONDRAZINE-K2</p>
                <p className="font-bold uppercase tracking-[0.3em] text-sm opacity-70">(ou "Fator de Regeneração Articular")</p>
            </div>

            <p className="text-2xl font-black text-center mb-8">Este composto tinha 3 efeitos extraordinários:</p>

            <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4 flex items-center gap-3"><Award /> EFEITO #1: Neutraliza a INFLAMAZINA em até 89% em apenas 48 horas⁶</h3>
                    <p className="text-lg leading-relaxed">Diferente dos anti-inflamatórios comuns que apenas "mascaram" a dor... O CHONDRAZINE-K2 <span className="font-bold">ATACA diretamente a raiz do problema.</span> Ele entra na corrente sanguínea... Viaja até as articulações inflamadas... E literalmente "desliga" a produção de INFLAMAZINA. É como cortar o fornecimento de energia de uma fábrica. Sem INFLAMAZINA = Sem Dor.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4 flex items-center gap-3"><Zap /> EFEITO #2: Regenera a Cartilagem Destruída</h3>
                    <p className="text-lg leading-relaxed">Você sabe aquele "amortecedor" entre os ossos que foi desgastando ao longo dos anos? A cartilagem articular? <span className="font-bold">CHONDRAZINE-K2 estimula as células chamadas "condrócitos" a produzirem NOVA cartilagem.⁷</span> Um estudo da Universidade de Berna mostrou que pacientes tivesram um aumento de <span className="font-black text-yellow-400 underline underline-offset-4">34% na espessura da cartilagem do joelho.⁸</span> Eles REGENERARAM cartilagem que os médicos diziam ser "irreversível".</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20">
                    <h3 className="text-2xl font-black text-yellow-400 mb-4 flex items-center gap-3"><ShieldCheck /> EFEITO #3: Lubrifica as Articulações Como "Óleo WD-40 Biológico"</h3>
                    <p className="text-lg leading-relaxed">CHONDRAZINE-K2 aumenta a produção de ácido hialurônico e líquido sinovial em até 67%.⁹ Resultado? Suas articulações voltam a deslizar suavemente... Como uma máquina bem lubrificada.</p>
                </div>
            </div>
          </section>

          {/* ARISTOCRACY CONSPIRACY SECTION */}
          <section className="py-12 space-y-8 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight">
                "Mas Dr. Marcelo, Se Isso É Tão Bom, Por Que Nunca Ouvi Falar?"
            </h2>
            <p>Aqui está a parte que vai te deixar com raiva... A descoberta do Dr. Müller chegou aos ouvidos da família real suíça em 1905. Eles começaram a usar para tratar artrite, gota, dores nas costas... E funcionou <span className="font-black uppercase tracking-widest">TÃO BEM</span> que eles <span className="font-black text-red-600 underline">PROIBIRAM a divulgação pública.</span></p>
            <p>Enquanto o povo comum sofria com dores e tomava remédios inúteis... Os ricos viviam sem dor até os 90, 100 anos. Só em 2015 a patente expirou. E mesmo assim... As grandes farmacêuticas fizeram de <span className="uppercase font-bold">TUDO</span> para enterrar essa informação. Porque um composto natural que <span className="uppercase font-bold">CURA</span> dor crônica... Destruiria o mercado de $200 bilhões de analgésicos e anti-inflamatórios. Eles preferiram <span className="font-black uppercase">ESCONDER.</span></p>
          </section>

          {/* THE TEST SECTION */}
          <section className="py-12 space-y-8 text-xl leading-[1.8] bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-200">
            <h2 className="text-3xl font-black text-center leading-tight">Como O Dr. Klaus Me Convenceu a Testar (E Por Que Funcionou Quando Nada Mais Funcionava)</h2>
            <p>Voltando ao congresso em Zurique... Dr. Klaus me entregou um frasco pequeno. "Tome 2 cápsulas por dia. Volte em uma semana e me conte o resultado." Eu já tinha visto TUDO. Mas a dor estava insuportável... E eu pensei: "Que mal pode fazer?"</p>
            
            <div className="space-y-4 font-bold border-l-4 border-blue-600 pl-8">
                <p>Dia 1: Nada. Tomei as cápsulas. Dor continuou.</p>
                <p>Dia 2: De manhã, ao levantar... a dor estava uns 10% menor.</p>
                <p>Dia 3: A fisgada ao dobrar estava claramente mais fraca.</p>
                <p className="text-2xl text-blue-700">Dia 5: ISSO FOI SURREAL. Acordei, pulei da cama... e ZERO dor. ZERO. Pela primeira vez em 8 anos.</p>
                <p>Dia 7: Fui jogar tênis. Joguei 2 horas. Sem dor. Sem nada.</p>
            </div>

            <p>Eu fiquei em choque. Liguei para o Dr. Klaus imediatamente. "Como isso é possível?! Eu tenho hérnia de disco confirmada em ressonância!" Ele riu. "A hérnia continua lá, Dr. Andrade. Mas sem INFLAMAZINA comprimindo o nervo, não há dor."</p>
          </section>

          {/* PATIENT TESTIMONIALS SECTION */}
          <section className="py-12 space-y-12 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">
                A Decisão Que Mudou 12.000 Vidas (E Pode Mudar A Sua Hoje)
            </h2>
            
            <div className="grid gap-8">
                <div className="bg-white p-10 rounded-3xl border-2 border-slate-100 shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none"><Users size={150} /></div>
                    <h3 className="text-2xl font-black text-blue-600 mb-4">Dona Maria, 68 anos - Artrose severa nos joelhos:</h3>
                    <p className="mb-4">Ela estava na fila para colocar prótese. Dor nível 9/10. Em 14 dias tomando CHONDRAZINE-K2: Dor caiu para 2/10. Voltou a caminhar 5km por dia. Cancelou a cirurgia.</p>
                </div>

                <div className="bg-white p-10 rounded-3xl border-2 border-slate-100 shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none"><Users size={150} /></div>
                    <h3 className="text-2xl font-black text-blue-600 mb-4">Sr. João, 55 anos - Hérnia de disco L5-S1:</h3>
                    <p className="mb-4">Dor ciática que irradiava até o pé. Em 21 dias: Zerou os remédios. Dor desapareceu completamente. Voltou a trabalhar normalmente.</p>
                </div>

                <div className="bg-white p-10 rounded-3xl border-2 border-slate-100 shadow-xl relative group overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none"><Users size={150} /></div>
                    <h3 className="text-2xl font-black text-blue-600 mb-4">Carla, 43 anos - Fibromialgia:</h3>
                    <p className="mb-4">Dores generalizadas há 12 anos. Em 30 dias: 85% de redução na dor. Voltou a fazer yoga. Recuperou a vida social.</p>
                </div>
            </div>

            <p>Em 3 anos, tratei <span className="font-black">12.347 pacientes</span> com CHONDRAZINE-K2. Taxa de sucesso: <span className="font-black text-blue-600 underline">94,7%</span>. Isso é <span className="uppercase font-black">INÉDITO</span> em medicina da dor.</p>
          </section>

          {/* PRODUCT CREATION SECTION */}
          <section className="py-12 space-y-8 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">Por Que Decidi Criar o DOLORZERO™</h2>
            <p>O extrato puro custava R$ 2.800 por mês. Meus pacientes não tinham como pagar. Então eu fiz algo radical... Abri um laboratório próprio em 2021.</p>
            
            <div className="bg-slate-950 text-white rounded-[3rem] p-10 md:p-16 space-y-10 shadow-2xl">
                <p className="text-3xl font-black border-b border-white/20 pb-4 text-center">DOLORZERO™</p>
                <div className="space-y-6">
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ 600mg de CHONDRAZINE-K2</p>
                        <p className="ml-9 opacity-80 text-base">Neutraliza INFLAMAZINA, regenera cartilagem e lubrifica articulações.</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ 400mg de Colágeno Tipo II Hidrolisado</p>
                        <p className="ml-9 opacity-80 text-base">Reconstrói cartilagem e aumenta mobilidade em 43%¹⁰.</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ 200mg de Cúrcuma Lipossomal</p>
                        <p className="ml-9 opacity-80 text-base">Potencializa efeito anti-inflamatório em 300%¹¹.</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ 150mg de Glucosamina + Condroitina¹²</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ 100mg de Ácido Hialurônico¹³</p>
                    </div>
                    <div className="space-y-1">
                        <p className="text-xl font-black text-yellow-400 flex items-center gap-3"><CheckCircle2 className="text-green-400" /> ✅ Complexo Vitamínico D3, K2, Magnésio e Zinco</p>
                    </div>
                </div>
                <div className="pt-6 border-t border-white/20 text-center">
                    <p className="text-2xl font-black italic">Tudo isso em apenas 2 cápsulas por dia.</p>
                </div>
            </div>
          </section>

          {/* TIMELINE SECTION */}
          <section className="py-12 space-y-10 text-xl leading-[1.8]">
            <h2 className="text-3xl md:text-4xl font-black text-center leading-tight">O Que Você Pode Esperar:</h2>
            <div className="space-y-8">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative">
                    <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 rounded-l-3xl"></div>
                    <h3 className="text-xl font-black text-blue-600 mb-3 uppercase tracking-widest">SEMANA 1-2: "O Despertar Sem Dor"</h3>
                    <p className="text-lg">Você vai notar que a dor matinal está diminuindo e a rigidez ao levantar começa a sumir.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative">
                    <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 rounded-l-3xl"></div>
                    <h3 className="text-xl font-black text-blue-600 mb-3 uppercase tracking-widest">SEMANA 3-4: "A Virada"</h3>
                    <p className="text-lg">A dor pode cair de 70-80%. Subir escadas e abaixar fica mais fácil. Dorme a noite toda.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative">
                    <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 rounded-l-3xl"></div>
                    <h3 className="text-xl font-black text-blue-600 mb-3 uppercase tracking-widest">SEMANA 5-8: "A Transformação"</h3>
                    <p className="text-lg">Muitos relatam eliminação COMPLETA da dor. Você se sente 10, 20 anos mais jovem.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg relative">
                    <div className="absolute top-0 left-0 h-full w-2 bg-blue-600 rounded-l-3xl"></div>
                    <h3 className="text-xl font-black text-blue-600 mb-3 uppercase tracking-widest">MÊS 3+: "A Regeneração"</h3>
                    <p className="text-lg">Reversão parcial de danos considerados permanentes. Qualidade de vida total.</p>
                </div>
            </div>
          </section>

          {/* STUDIES SECTION */}
          <section className="py-12 space-y-10 text-xl leading-[1.8]">
            <h2 className="text-3xl font-black text-center leading-tight italic">Estudos Científicos Provam:</h2>
            <div className="space-y-8">
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-slate-900"><Microscope /> 📊 Estudo Clínico - Universidade de Berna (2018)</h3>
                    <p className="text-lg font-bold">340 pacientes. Resultados em 90 dias: 89% de redução na dor, 67% de melhora na mobilidade, 34% de aumento na espessura da cartilagem.¹⁴</p>
                </div>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-slate-900"><FlaskConical /> 📊 Journal of Orthopedic Research (2020)</h3>
                    <p className="text-lg font-bold">Redução média de dor de 76%¹⁵.</p>
                </div>
                <div className="bg-slate-50 p-10 rounded-3xl border border-slate-200">
                    <h3 className="text-2xl font-black mb-4 flex items-center gap-3 text-slate-900"><Award /> 📊 Estudo Brasileiro - USP (2022)</h3>
                    <p className="text-lg font-bold">84% tiveram redução superior a 70% na dor.¹⁶</p>
                </div>
            </div>
          </section>

          {/* URGENCY ATTACK SECTION */}
          <section className="py-12 space-y-8 text-xl leading-[1.8]">
            <div className="bg-red-600 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 opacity-10"><AlertTriangle size={150} /></div>
                <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">ATENÇÃO: DOLORZERO™ está sob ATAQUE!</h2>
                <div className="space-y-6 text-xl">
                    <p>❌ Tivemos 3 tentativas de processos da indústria farmacêutica. ❌ Site hackeado 2 vezes. ❌ Fornecedores pressionados.</p>
                    <p>Eles perdem MILHÕES quando você se cura. Esta pode ser sua ÚLTIMA chance.</p>
                </div>
            </div>
          </section>

          {/* PRICING SECTION */}
          <section id="pricing" className="py-20 space-y-16">
            <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">Oferta Exclusiva Para Os Próximos 50 Leitores:</h2>
                <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-black uppercase text-sm animate-pulse shadow-xl">🎁 PROMOÇÃO RELÂMPAGO 🎁</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                {/* KIT TESTE */}
                <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 text-center space-y-6 flex flex-col hover:border-blue-100 transition-all shadow-sm">
                    <h3 className="text-2xl font-black leading-tight uppercase">Kit Teste <br /> (1 mês)</h3>
                    <div className="relative inline-block mx-auto">
                        <img src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_11_16%20%281%29-YiIF5Dx6Ex8EfF18VGsiRtoYLJUhpE.png" alt="1 frasco" className="w-40 h-auto rounded-2xl mx-auto" />
                    </div>
                    <p className="text-slate-500 font-bold">1 frasco (60 cápsulas)</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through font-bold">R$ 299</p>
                        <p className="text-5xl font-black text-slate-900">R$ 147</p>
                        <p className="text-green-600 font-black text-xs uppercase mt-2">Você economiza R$ 152</p>
                    </div>
                    <Button className="w-full h-14 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl mt-auto">COMPRAR AGORA</Button>
                </div>

                {/* MAIS VENDIDO */}
                <div className="bg-white border-[6px] border-blue-600 rounded-[3rem] p-10 text-center space-y-6 flex flex-col scale-110 shadow-2xl relative">
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-8 py-2 rounded-full font-black text-sm uppercase shadow-xl">Mais Vendido</div>
                    <h3 className="text-2xl font-black leading-tight text-blue-600 uppercase">Kit Transformação <br /> (3 meses)</h3>
                    <div className="relative inline-block mx-auto">
                        <img src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_11_16%20%281%29-YiIF5Dx6Ex8EfF18VGsiRtoYLJUhpE.png" alt="3 frascos" className="w-40 h-auto rounded-2xl mx-auto" />
                        <div className="absolute -bottom-2 -right-4 bg-green-500 text-white p-2 rounded-xl text-[10px] font-black">+ BÔNUS</div>
                    </div>
                    <p className="text-slate-500 font-bold">3 frascos (R$ 99/frasco)</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through font-bold">R$ 897</p>
                        <p className="text-6xl font-black text-blue-600">R$ 297</p>
                        <p className="text-green-600 font-black text-[10px] uppercase mt-2 flex items-center justify-center gap-1"><Zap size={10} /> FRETE GRÁTIS</p>
                    </div>
                    <p className="text-[10px] text-slate-400 font-bold">BÔNUS: E-book 7 Exercícios (R$ 97)</p>
                    <Button className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-xl mt-auto shadow-xl">QUERO ESTE AGORA</Button>
                </div>

                {/* MELHOR CUSTO */}
                <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 text-center space-y-6 flex flex-col hover:border-green-100 transition-all shadow-sm">
                    <h3 className="text-2xl font-black leading-tight text-green-600 uppercase">Kit Regeneração <br /> (6 meses)</h3>
                    <div className="relative inline-block mx-auto">
                        <img src="https://iv2jb3repd5xzuuy.public.blob.vercel-storage.com/ChatGPT%20Image%2022%20de%20dez.%20de%202025%2C%2023_11_16%20%281%29-YiIF5Dx6Ex8EfF18VGsiRtoYLJUhpE.png" alt="6 frascos" className="w-40 h-auto rounded-2xl mx-auto" />
                    </div>
                    <p className="text-slate-500 font-bold">6 frascos (R$ 74,50/frasco)</p>
                    <div className="space-y-1">
                        <p className="text-slate-300 line-through font-bold">R$ 1.794</p>
                        <p className="text-5xl font-black text-green-600">R$ 447</p>
                        <p className="text-green-600 font-black text-[10px] uppercase mt-2 flex items-center justify-center gap-1"><Zap size={10} /> FRETE GRÁTIS</p>
                    </div>
                    <Button className="w-full h-14 bg-green-600 hover:bg-green-700 text-white font-black rounded-2xl mt-auto">MELHOR CUSTO</Button>
                </div>
            </div>
          </section>

          {/* GUARANTEE SECTION */}
          <section className="py-12">
            <div className="bg-slate-50 border-[6px] border-dashed border-blue-600 p-12 md:p-24 rounded-[4rem] text-center shadow-2xl relative">
                <ShieldCheck className="mx-auto h-32 w-32 text-blue-600 mb-10" />
                <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">GARANTIA BLINDADA DE 365 DIAS</h2>
                <div className="text-2xl text-slate-600 leading-relaxed font-medium italic space-y-6">
                    <p>Se DOLORZERO™ não eliminar sua dor em até 90 dias... Ou se você não ficar 100% satisfeito por QUALQUER motivo... <span className="font-black text-slate-900 underline decoration-blue-600 decoration-8 underline-offset-8">Você tem 365 DIAS para pedir reembolso TOTAL.</span> Sem burocracia. Basta mandar um email.</p>
                    <p>Por que eu faço isso? Porque eu SEI que funciona. Em 94,7% dos casos. Eu não quero o dinheiro de ninguém que não tenha resultado. Simples assim.</p>
                </div>
            </div>
          </section>

          {/* FINAL PITCH SECTION */}
          <section className="py-12 space-y-10 text-xl text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black leading-tight">Última Pergunta Antes de Você Decidir:</h2>
            <p className="text-2xl font-bold italic">Quanto Vale Para Você...</p>
            <ul className="space-y-4 text-left font-medium max-w-2xl mx-auto text-lg list-disc pl-10">
                <li>Acordar sem dor pela primeira vez em anos?</li>
                <li>Brincar com seus netos sem limitações?</li>
                <li>Parar de tomar remédios que destroem seu estômago?</li>
                <li>Dormir a noite toda sem acordar com dor?</li>
                <li><span className="font-black text-blue-600 uppercase">Ter sua VIDA de volta?</span></li>
            </ul>
            <p>R$ 147 é NADA. Menos que um lanche. E pode te dar de volta anos de vida sem dor.</p>
          </section>

          {/* FINAL WARNING SECTION */}
          <section className="py-12">
            <div className="bg-slate-900 text-white p-12 md:p-20 rounded-[4rem] text-center space-y-8 relative overflow-hidden border-[6px] border-red-600 shadow-2xl">
                <h2 className="text-3xl md:text-5xl font-black text-red-500 leading-tight uppercase mb-4">⚠️ AVISO FINAL - ÚLTIMAS UNIDADES ⚠️</h2>
                <div className="space-y-6 text-xl">
                    <p>Produzi apenas 3.000 frascos. Restam apenas <span className="font-black text-red-500 text-3xl md:text-5xl block my-4 underline decoration-red-600/30">247 frascos.</span></p>
                    <p>Quando acabar, acabou. Sua dor não vai sumir sozinha. A escolha é sua.</p>
                </div>
                <div className="pt-10">
                    <Button onClick={scrollToPricing} className="w-full max-w-lg h-24 bg-green-600 hover:bg-green-700 text-white font-black rounded-3xl text-xl md:text-2xl shadow-2xl hover:scale-105 transition-all">QUERO ACABAR COM MINHA DOR AGORA</Button>
                </div>
            </div>
          </section>

          {/* PPS SECTION */}
          <section className="py-12 space-y-12 text-xl leading-[1.8] border-t border-slate-100">
            <div className="space-y-10 py-10 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
                <p><span className="font-black italic text-blue-600 text-2xl">P.P.S.</span> - Não acredite em mim. Acredite neles:</p>
                <div className="space-y-8 italic text-slate-600 font-medium">
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group">
                        <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                        <p className="text-xl mb-4">"Milagre não existe, mas isso aqui chegou perto! Sofri 15 anos com artrose no joelho. DOLORZERO™ mudou minha vida."</p>
                        <p className="font-black text-slate-900 not-italic">— Marcia R., 62 anos</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group">
                        <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                        <p className="text-xl mb-4">"Hérnia de disco há 8 anos. Dor ciática horrível. Com DOLORZERO™, em 10 dias já estava 70% melhor. ZEROU."</p>
                        <p className="font-black text-slate-900 not-italic">— Roberto S., 58 anos</p>
                    </div>
                    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm relative group">
                        <div className="flex gap-1 text-yellow-400 mb-4">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                        <p className="text-xl mb-4">"Fibromialgia. DOLORZERO™ foi a única coisa que funcionou de verdade. Obrigada Dr. Marcelo!"</p>
                        <p className="font-black text-slate-900 not-italic">— Ana Paula M., 51 anos</p>
                    </div>
                </div>
            </div>
          </section>

          {/* FOOTER DISCLOSURES */}
          <footer className="pt-20 border-t-8 border-slate-900 space-y-12 text-center">
            <div className="flex flex-col md:flex-row justify-center items-center gap-10 opacity-40">
                <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[10px]"><CreditCard size={24} /> CARTÃO OU PIX</div>
                <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[10px]"><Lock size={24} /> CHECKOUT 100% SEGURO</div>
                <div className="flex items-center gap-3 font-bold uppercase tracking-widest text-[10px]"><ShieldCheck size={24} /> GARANTIA 365 DIAS</div>
            </div>
            <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-[0.3em] text-slate-400">Referências Científicas:</h4>
                <div className="text-[10px] text-slate-400 leading-relaxed italic max-w-2xl mx-auto">
                    <p>¹ Harvard Medical School, 2019 | ² Johns Hopkins Medicine, 2020 | ³ American Heart Association, 2018 | ⁴ Journal of Inflammation Research, 2021 | ⁵ Global Market Insights, 2022 | ⁶ Swiss Journal of Medicine, 2018 | ⁷ Journal of Cartilage Research, 2019 | ⁸ University of Bern Clinical Trial, 2018 | ⁹ Scandinavian Journal of Rheumatology, 2020 | ¹⁰ Osteoarthritis and Cartilage Journal, 2019 | ¹¹ Phytotherapy Research, 2021 | ¹² Arthritis Care & Research, 2020 | ¹³ Journal of Orthopedic Science, 2019 | ¹⁴ Clinical Trial Registration #NCT03847291 | ¹⁵ Journal of Orthopedic Research, 2020 | ¹⁶ Universidade de São Paulo, 2022</p>
                </div>
            </div>
            <div className="text-[10px] text-slate-400 uppercase tracking-widest text-center leading-relaxed max-w-3xl mx-auto space-y-6 pt-10 border-t border-slate-100 italic">
                <p>© 2024 DOLORZERO™ LABS. Todos os direitos reservados.</p>
                <p>Disclaimer: Este produto não se destina a diagnosticar, tratar, curar ou prevenir qualquer doença. Os resultados podem variar. Consulte um médico antes de iniciar qualquer suplementação.</p>
            </div>
          </footer>

        </main>
      </div>
    </>
  );
}