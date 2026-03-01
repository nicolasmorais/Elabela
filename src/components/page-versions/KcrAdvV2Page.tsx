"use client";

import React, { ReactNode } from 'react';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';
import { 
  Clock, 
  Calendar, 
  Check, 
  Star, 
  MessageSquare, 
  ArrowRight, 
  ShoppingBag,
  ShieldCheck,
  AlertCircle,
  Zap,
  Heart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Componentes de Design Inspirados na KCR Promo ---

const Meta = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-wrap items-center gap-4 text-slate-400 text-[11px] md:text-xs font-black uppercase tracking-[0.2em] mb-10 border-b border-slate-100 pb-6">
    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-orange-500" /> {children}</span>
  </div>
);

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="font-sans font-black text-3xl md:text-6xl text-slate-950 leading-[1.1] tracking-tighter mb-6">
    {children}
  </h1>
);

const H1Sub = ({ children }: { children: ReactNode }) => (
  <h2 className="font-sans font-bold text-xl md:text-3xl text-orange-600 leading-tight mb-12 tracking-tight italic">
    {children}
  </h2>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-sans font-black text-2xl md:text-4xl text-slate-900 mt-16 mb-8 tracking-tighter uppercase">
    {children}
  </h3>
);

const P = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("font-sans text-lg md:text-2xl text-slate-600 leading-relaxed mb-8 font-medium", className)}>
    {children}
  </p>
);

const Ancora = ({ children }: { children: ReactNode }) => (
  <p className="font-sans font-black text-xl md:text-3xl text-slate-950 my-10 leading-tight tracking-tighter underline decoration-orange-500/30 decoration-8 underline-offset-4">
    {children}
  </p>
);

const PullQuote = ({ children }: { children: ReactNode }) => (
  <div className="relative p-8 md:p-12 bg-white rounded-[3rem] border border-orange-100 shadow-[0_20px_50px_-20px_rgba(249,115,22,0.2)] my-12 overflow-hidden group">
    <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-orange-600 group-hover:rotate-12 transition-transform duration-700">
        <Heart size={150} fill="currentColor" />
    </div>
    <div className="relative z-10 font-sans font-black italic text-2xl md:text-4xl text-orange-700 leading-tight tracking-tighter">
      "{children}"
    </div>
  </div>
);

const Citacao = ({ text, author }: { text: string; author: string }) => (
  <div className="bg-[#FDF8F3] border-l-8 border-orange-500 p-8 md:p-12 my-12 rounded-r-[3rem] shadow-sm">
    <p className="font-sans italic text-xl md:text-3xl text-slate-700 leading-relaxed mb-6 font-medium">"{text}"</p>
    <p className="font-sans font-black text-xs md:text-sm text-orange-600 uppercase tracking-[0.3em] flex items-center gap-3">
        <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
        {author}
    </p>
  </div>
);

const Divisor = () => (
  <div className="flex items-center justify-center gap-4 my-16 opacity-20">
    <div className="h-px w-20 bg-orange-500"></div>
    <div className="h-2 w-2 rounded-full bg-orange-600"></div>
    <div className="h-px w-20 bg-orange-500"></div>
  </div>
);

const Timeline = ({ items }: { items: Array<{ label: string; text: string }> }) => (
  <div className="my-12 space-y-4">
    {items.map((item, i) => (
      <div key={i} className="flex flex-col md:flex-row bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden group hover:border-orange-200 transition-all">
        <div className="md:w-1/4 bg-slate-900 text-white font-black text-[10px] md:text-xs p-6 flex items-center justify-center text-center uppercase tracking-[0.3em] group-hover:bg-orange-600 transition-colors">
          {item.label}
        </div>
        <div className="md:w-3/4 p-8 md:p-10 text-slate-600 text-lg md:text-xl leading-relaxed font-bold">
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

const BoxLista = ({ title, items }: { title: string; items: ReactNode[] }) => (
  <div className="bg-white border-4 border-white rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] p-8 md:p-16 my-16 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none text-orange-600"><ShoppingBag size={200} /></div>
    <h4 className="font-sans font-black text-2xl md:text-4xl mb-10 text-slate-950 tracking-tighter uppercase flex items-center gap-4">
        <div className="p-3 bg-orange-600 text-white rounded-2xl shadow-lg"><Zap size={24} fill="currentColor" /></div>
        {title}
    </h4>
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="text-lg md:text-2xl leading-tight font-black text-slate-800 flex items-center gap-4 group">
            <div className="bg-emerald-50 p-1 rounded-full text-emerald-600 shadow-sm border border-emerald-100 group-hover:scale-110 transition-transform"><Check size={20} strokeWidth={4} /></div>
            {item}
        </li>
      ))}
    </ul>
  </div>
);

const BoxAlerta = ({ children }: { children: ReactNode }) => (
  <div className="bg-red-50 border-2 border-red-100 p-8 md:p-12 my-12 rounded-[3.5rem] shadow-sm relative overflow-hidden group">
    <div className="absolute top-0 right-0 p-8 opacity-[0.05] text-red-600 group-hover:scale-110 transition-transform"><AlertCircle size={120} /></div>
    <div className="relative z-10 font-sans text-lg md:text-2xl leading-relaxed font-black text-red-900 italic">
        {children}
    </div>
  </div>
);

const Depoimento = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-white border border-slate-100 p-10 md:p-12 my-10 rounded-[3rem] shadow-xl relative group transition-all hover:-translate-y-1">
    <div className="absolute -top-6 -left-4 text-orange-100 text-[12rem] font-serif select-none pointer-events-none group-hover:text-orange-200 transition-colors opacity-40">“</div>
    <p className="font-sans italic text-xl md:text-2xl text-slate-700 leading-relaxed mb-8 relative z-10 font-medium">"{text}"</p>
    <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center font-black text-orange-800 text-xl">{name.charAt(0)}</div>
        <p className="font-sans font-black text-sm md:text-base text-slate-900 uppercase tracking-widest">{name}</p>
    </div>
  </div>
);

const CTAButton = () => (
  <div className="flex flex-col items-center my-20 px-2 md:px-0">
    <Link href="https://seguro.elabela.store/r/RC8ASYUL88" className="w-full max-w-2xl group/btn">
      <Button 
        className="w-full h-24 md:h-28 text-white rounded-[2.5rem] font-black text-xl md:text-3xl uppercase tracking-widest shadow-[0_20px_50px_rgba(53,200,103,0.4)] transition-all hover:scale-[1.03] active:scale-95 flex flex-col items-center justify-center gap-1 overflow-hidden"
        style={{ backgroundColor: '#35c867' }}
      >
        <span className="flex items-center gap-4">
            <ShoppingBag className="h-6 w-6 md:h-10 md:w-10 group-hover/btn:scale-110 transition-transform" />
            Clique Aqui — Ver Kit com Desconto
        </span>
        <span className="text-[10px] font-black uppercase opacity-60 tracking-[0.2em]">Site Oficial elabela.store | Envio Imediato</span>
      </Button>
    </Link>
    <p className="font-sans font-bold text-xs text-slate-400 mt-6 text-center uppercase tracking-[0.3em] animate-pulse">
       ⚠️ Verifique a disponibilidade da oferta hoje
    </p>
  </div>
);

const CommentItem = ({ name, date, text, likes, isReply = false }: { name: string; date: string; text: string; likes: number; isReply?: boolean }) => (
  <div className={cn("py-8 flex gap-6", isReply ? 'ml-12 md:ml-24 border-l-4 border-slate-50 pl-8' : 'border-b border-slate-50')}>
    <div className={cn("shrink-0 rounded-3xl bg-slate-100 flex items-center justify-center text-slate-900 font-black uppercase shadow-inner", isReply ? 'w-12 h-12 text-sm' : 'w-16 h-16 text-xl')}>
      {name.charAt(0)}
    </div>
    <div className="flex-1 space-y-3">
      <div className="flex items-center gap-3">
        <span className="font-sans font-black text-lg text-slate-900 cursor-pointer hover:text-orange-600 transition-colors">{name}</span>
        <span className="font-sans font-bold text-[10px] text-slate-300 uppercase tracking-widest">{date}</span>
      </div>
      <p className="font-sans text-lg md:text-xl text-slate-500 leading-relaxed font-medium">{text}</p>
      <div className="font-sans text-[10px] text-slate-400 flex items-center gap-6 font-black uppercase tracking-widest pt-2">
        <button className="hover:text-orange-600 transition-colors">Curtir</button>
        <button className="hover:text-orange-600 transition-colors">Responder</button>
        {likes > 0 && (
          <span className="flex items-center gap-2 ml-auto bg-white px-3 py-1.5 rounded-full border border-slate-100 shadow-sm">
            <span className="text-orange-500">❤️</span>
            <span className="text-slate-900 text-xs">{likes}</span>
          </span>
        )}
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function KcrAdvV2Page() {
  return (
    <div className="bg-[#FDFDFD] min-h-screen antialiased selection:bg-orange-100">
      <PageTracker contentId="adv-kcr-v2" />

      {/* NAVBAR ESTILO BLOG PREMIUM */}
      <nav className="bg-white border-b border-slate-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
              <span className="text-2xl font-sans font-black tracking-tighter text-slate-950 uppercase italic">
                Meu <span className="text-orange-600">Diário</span>
              </span>
              <div className="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                  <span className="hover:text-orange-600 cursor-pointer transition-colors">Saúde</span>
                  <span className="hover:text-orange-600 cursor-pointer transition-colors">Autoestima</span>
                  <span className="hover:text-orange-600 cursor-pointer transition-colors">Beleza</span>
              </div>
              <div className="bg-orange-50 text-orange-700 px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-100">
                  Relato Exclusivo
              </div>
          </div>
      </nav>

      <article className="max-w-[850px] mx-auto px-6 py-12 md:py-24">
        
        <Meta>Publicado em 14 de Junho de 2025  •  Brasília, DF  •  7 Minutos de Leitura</Meta>

        <H1>Eu chorava toda vez que olhava para o ralo do meu chuveiro.</H1>
        <H1Sub>Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.</H1Sub>

        <P>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</P>
        <P>Durante quase dois anos, eu evitei espelhos.</P>
        <P>Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</P>
        <P>Porque toda vez que eu me via, o que eu enxergava não era eu.</P>
        <Ancora>Era uma versão de mim que estava... desaparecendo.</Ancora>
        <P>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem. Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</P>
        <P>Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</P>
        <P>Eu ficava contando os fios no chuveiro. Sabe quando você começa a fazer isso? É quando você sabe que chegou num lugar muito feio dentro de si mesma.</P>
        <P>Eu tinha 51 anos. E aí vem aquela coisa que ninguém avisa direito:</P>
        <Ancora>Depois dos 45, o cabelo muda. Os hormônios mudam. O corpo inteiro muda.</Ancora>
        <P>Ninguém te fala isso com clareza. Te falam sobre menopausa, sobre colesterol, sobre pressão. Mas ninguém te avisa que você pode acordar um dia e o seu cabelo não ser mais o mesmo.</P>

        <Divisor />

        <H2>O dia que eu quase não saí mais de casa</H2>
        <P>Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam.</P>
        <P>"Cláudia, que cabelo lindo o seu." Eu ouvia isso a vida toda.</P>
        <P>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</P>
        <P>Comecei a usar truques de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o volume que tinha sumido.</P>
        <Ancora>Chapéu virou meu acessório favorito. E eu odeio chapéu.</Ancora>
        <P>Meu marido, o Marcos, perguntou uma vez: "Você tá bem? Você tá diferente." Eu disse que estava cansada do trabalho. Mas a verdade é que eu tinha vergonha. Vergonha de ter 51 anos e estar com menos cabelo do que minha mãe com 72.</P>
        <P>E ainda tinha aquela voz na cabeça: "é a idade, Cláudia. É a menopausa. É o que acontece com a gente."</P>
        <PullQuote>Como se depois dos 50 a gente tivesse que aceitar virar outra pessoa.</PullQuote>
        <P>Teve um domingo que eu não fui ao churrasco da família. Inventei dor de cabeça. Na verdade, eu não conseguia arranjar um penteado que me fizesse sentir presentável. Não aguentava a ideia de todo mundo olhando.</P>
        <Ancora>Aquele domingo foi o fundo do poço pra mim.</Ancora>

        <Divisor />

        <H2>Os R$ 800 que eu joguei fora tentando resolver sozinha</H2>
        <P>Antes de te contar o que funcionou, preciso te contar tudo que NÃO funcionou. Porque eu sei que você provavelmente já tentou várias dessas coisas também.</P>
        <P>Comecei com o shampoo antiqueda da farmácia. O famoso, o caro, o que aparece em toda propaganda. Usei três meses.</P>
        <Ancora>A queda não parou.</Ancora>
        <P>Depois fui atrás de vitaminas. Biotina, colágeno, zinco — tomei tudo junto achando que quanto mais, melhor. Fiz exame, estava tudo normal. E o cabelo continuava caindo.</P>
        <P>Uma vizinha me ensinou uma simpatia com alho. Coloquei alho amassado no couro cabeludo às 10 da noite. Fiquei parecendo uma lasanha. Não funcionou.</P>
        <P>Fui ao dermatologista. Ele pediu exames, olhou tudo e disse que os hormônios estavam alterados, que era natural nessa fase. E me receitou um shampoo de R$ 120.</P>
        <Ancora>Aquele mesmo que você já conhece. Que não funciona.</Ancora>
        <P>Cheguei a pesquisar sobre transplante capilar. Quando vi o preço, sentei e chorei ali mesmo, na frente do computador. O pior não era gastar dinheiro à toa.</P>
        <PullQuote>O pior era a esperança que eu colocava em cada coisa nova — e o tombo quando não funcionava.</PullQuote>
        <P>Eu comecei a acreditar que esse era o meu destino. Que eu ia ficar assim.</P>

        <Divisor />

        <H2>A mensagem que mudou tudo — e eu quase nem li</H2>
        <P>Foi minha prima Renata quem me mandou. A gente se fala bastante por Whatsapp. Quando ela me mandou uma foto do cabelo dela com a mensagem "Cláudia, você precisa ver isso", eu quase ignorei.</P>
        <P>Mas a foto me chamou atenção. O cabelo dela estava diferente. Mais cheio. Com um brilho diferente.</P>
        <P>Eu sabia que a Renata tinha passado pelo mesmo problema — ela tem 53 anos, passou pela menopausa cedo, e o cabelo dela tinha ficado horrível.</P>
        <Ancora>Liguei pra ela na hora.</Ancora>
        <P>Ela me contou que estava usando o Kit Cavalo de Raça. Me disse que o diferencial é que ele não trata só o sintoma — ele trata as três causas da queda ao mesmo tempo, com cinco produtos que trabalham em sistema.</P>
        <P>Perguntei logo: "mas funciona mesmo pra quem já tem uma certa idade? Porque eu já tentei de tudo..."</P>
        <P>Ela me disse: <strong>"Cláudia, eu tenho 53. Funciona exatamente porque é feito pra fios que já passaram por mudança hormonal. É diferente de produto pra menina de 20 anos com cabelo virgem."</strong></P>
        <Citacao text="É como tentar consertar uma cadeira pregando um parafuso quando os outros três estão soltos. Não adianta." author="Renata, minha prima" />
        <P>E o tônico foi o que mais me surpreendeu depois. Você aplica direto no couro cabeludo e ele age dentro do folículo — onde o fio nasce. Os outros produtos cuidam do fio que já existe.</P>
        <Ancora>O tônico cuida do fio que ainda vai nascer.</Ancora>
        <P>Pedi o link pra ela. Comprei naquela mesma noite.</P>

        <Divisor />

        <H2>O que aconteceu semana a semana</H2>
        <P>Vou te contar exatamente o que aconteceu. Sem exagero, sem enfeite.</P>
        <Timeline items={[
          { label: "1ª Lavagem", text: "Couro cabeludo leve. Limpo de um jeito que eu não lembrava de ter sentido." },
          { label: "3º Dia", text: "Olhei pro ralo no chuveiro. Estava quase limpo. Fiquei parada olhando." },
          { label: "1ª Semana", text: "A queda diminuiu de um jeito que eu não via há dois anos. Chorei de alívio." },
          { label: "3 Semanas", text: "Fios novos na frente. Bebê, sabe? Curtos demais pra deitar. Nascendo." },
          { label: "1º Mês", text: "Minha cabeleireira perguntou: 'Cláudia, o que você fez? Seu cabelo tá diferente.'" },
          { label: "3 Meses", text: "Meu cabelo voltou. O volume, o brilho, a vida. Melhor do que antes." }
        ]} />
        <P>No terceiro dia, eu fechei o chuveiro. Fiquei parada olhando pro ralo por um bom tempo. Pensei que tinha sido coincidência. Mas no quarto dia, o mesmo. No quinto dia, o mesmo.</P>
        <P>Na escova pela manhã, menos fios. No travesseiro, quase nada.</P>
        <Ancora>Chorei. No banheiro mesmo, de emoção. Aquelas lágrimas diferentes — não de tristeza, mas de alívio.</Ancora>

        <Divisor />

        <H2>No primeiro mês, minha cabeleireira notou antes de mim</H2>
        <P>Continuei usando o kit completo: shampoo todo dia, máscara duas vezes na semana, condicionador, leave-in e o tônico. Do jeito que mandava.</P>
        <P>No primeiro mês, fui ao salão pela primeira vez em meses sem querer morrer de vergonha.</P>
        <P>A Patrícia passou os dedos no meu cabelo e disse: "Cláudia, o que você fez? Seu cabelo tá diferente. Mais encorpado."</P>
        <PullQuote>Essa frase, de uma profissional que cuida do meu cabelo há oito anos, valeu mais do que qualquer resultado de exame.</PullQuote>

        <Divisor />

        <H2>Três meses depois: eu não me reconhecia — do jeito bom</H2>
        <P>Hoje meu cabelo voltou. Não do jeito que estava antes da queda começar.</P>
        <Ancora>Melhor.</Ancora>
        <P>O volume voltou. A queda está em zero. Os fios novos cresceram e já se misturaram com o restante. Mas o que mudou mais foi outra coisa.</P>
        <P>Aqui eu preciso falar especialmente pras mulheres que estão na mesma fase que eu — acima dos 45, acima dos 50.</P>
        <P>A gente cresce ouvindo que depois de uma certa idade tem que "se conformar". Com o corpo, com o cabelo, com a aparência.</P>
        <Ancora>Eu não me conformei. E você também não precisa.</Ancora>
        <P>No domingo passado, eu fui ao churrasco da família. Arrumei o cabelo solto. Botei um brinco bonito. Quando minha cunhada disse "Cláudia, você tá ótima, o que aconteceu?", eu consegui responder sem travar: "Tô bem, obrigada."</P>
        <P>Eu tô bem. Faz tanto tempo que eu não podia dizer isso de verdade.</P>
        <P>O Marcos me olhou diferente naquele domingo. A gente conversou mais, riu mais. Coisas que a gente tinha parado de fazer sem nem perceber.</P>
        <P>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade. </P>
        <PullQuote>É identidade. É como você se apresenta pro mundo. É como você se sente digna de ocupar espaço.</PullQuote>

        <Divisor />

        <H2>Imagina você daqui a 60 dias...</H2>
        <P>Fecha os olhos um segundo. Imagina você acordando de manhã, passando a mão no cabelo no travesseiro — e não encontrando quase nada.</P>
        <P>Imagina entrar no chuveiro sem aquela ansiedade de olhar pro ralo. Terminar o banho tranquila.</P>
        <Ancora>Imagina abrir o guarda-roupa e escolher aquela blusa que você evitava porque não queria mostrar o cabelo ralo.</Ancora>
        <P>Imagina postar uma foto e se reconhecer na imagem. Se gostar do que você vê. Isso não é sonho. Foi exatamente o que aconteceu comigo em 60 dias.</P>
        <Ancora>E pode acontecer com você também.</Ancora>

        <Divisor />

        <H2>Não sou só eu — leia o que outras mulheres estão dizendo</H2>
        <Depoimento name="Maria Luíza, 54 anos — Goiânia, GO" text="Achei que era tarde demais pra mim. Meu cabelo estava caindo há dois anos e o dermatologista disse que era da menopausa, que eu tinha que aceitar. Comprei o kit sem muita esperança. Na segunda semana já estava diferente. Não consigo mais parar de usar." />
        <Depoimento name="Sônia Aparecida, 49 anos — Belo Horizonte, MG" text="Eu escondia o couro cabeludo com progressiva porque estava tão ralo que dava pra ver. Minha autoestima estava no chão. Com um mês de kit, minha filha me perguntou o que eu tinha feito no cabelo. Quase chorei ali na frente dela." />
        <Depoimento name="Rosângela, 52 anos — Recife, PE" text="Já tinha gastado mais de R$ 600 em produtos que não funcionaram. Estava desacreditada. Comprei o kit como última tentativa. Foi a melhor decisão que tomei. A queda parou na primeira semana. Agora estou vendo os fios novos nascendo." />

        <Divisor />

        <BoxLista 
          title="O que você recebe no Kit Cavalo de Raça:"
          items={[
            "1. Shampoo Reconstrutor — ancora a raiz. O fio para de soltar.",
            "2. Máscara Anti-Queda Intensiva — reconstrói a fibra. O fio fica forte.",
            "3. Condicionador Fortificante — sela as cutículas. O fio para de quebrar.",
            "4. Leave-in Protetor — protege o fio reconstruído no dia a dia.",
            "5. Tônico Capilar Antiqueda — age no folículo. Estimula os fios novos a nascer."
          ]}
        />

        <P>Eu sei que parece caro à primeira vista. <strong>Mas faz a conta comigo:</strong></P>
        <div className="bg-slate-900 text-white p-10 rounded-[3rem] text-center my-12 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform"><ShieldCheck size={100} /></div>
            <p className="font-sans font-black text-3xl md:text-5xl tracking-tighter mb-4 text-orange-500">R$ 1,80 Por Dia.</p>
            <p className="font-sans text-lg md:text-xl font-medium opacity-80 uppercase tracking-widest leading-relaxed">Menos que um café para ter seu cabelo e sua confiança de volta.</p>
        </div>
        
        <P>Por 5 produtos profissionais aprovados pela ANVISA, com frete grátis e garantia de resultado. Lembra que eu joguei R$ 800 fora em coisas que não funcionaram? <strong>Isso é menos de um quinto daquilo.</strong></P>

        <BoxAlerta>
          ⚠️ <span className="underline">Importante:</span> o Kit Cavalo de Raça Original está disponível em <strong>elabela.store</strong>. Tem muita cópia barata circulando sem a fórmula completa. Compre só pelo link abaixo pra garantir o original com desconto e frete grátis.
        </BoxAlerta>

        <div className="text-center my-12 p-10 rounded-[3.5rem] bg-orange-50 border-2 border-orange-100">
          <p className="font-sans font-black text-[36px] md:text-[48px] text-orange-700 leading-none mb-4">De R$ 227,00 por R$ 159,90</p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-100 text-emerald-700 rounded-full font-black text-sm uppercase tracking-widest">
             <Check size={16} strokeWidth={4} /> Frete Grátis Para Todo Brasil
          </div>
          <p className="font-sans text-sm text-slate-400 mt-6 font-bold uppercase tracking-widest">
            Aprovado e testado pela ANVISA  |  Garantia de 7 Dias
          </p>
        </div>

        <CTAButton />

        <Divisor />

        <H2>Da última vez que olhei pro ralo...</H2>
        <P>Você lembra que eu comecei esse texto falando do ralo do chuveiro? Que eu chorava toda vez que olhava pra ele?</P>
        <P>Da última vez que olhei pro ralo depois do banho, eu estava sorrindo. Foi a mesma mulher. O mesmo chuveiro. O mesmo ralo. Tudo diferente.</P>
        <Ancora>Não é assim mesmo. Eu sou prova disso. A Renata é prova. E as centenas de mulheres que me escreveram são prova.</Ancora>
        <P>Só te peço uma coisa: não desiste de você mesma.</P>
        
        <CTAButton />

        <div className="mt-20 pt-10 border-t border-slate-100 font-sans">
          <p className="italic text-orange-600 text-3xl font-black mb-2">Com carinho,</p>
          <p className="text-3xl font-black text-slate-900 leading-none">Cláudia Mendes</p>
          <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mt-3">Brasília, DF</p>
        </div>

        <Divisor />

        {/* Seção de Comentários Estilo Moderno */}
        <section className="mt-20 pt-16 border-t-8 border-slate-50">
          <div className="flex items-center justify-between gap-3 mb-16">
            <h4 className="font-sans font-black text-2xl md:text-5xl text-slate-950 tracking-tighter uppercase leading-none">
                Leitoras <span className="text-orange-600">Comentando</span>
            </h4>
            <div className="bg-slate-100 px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-400">
                20 Relatos
            </div>
          </div>

          <div className="space-y-4">
            <CommentItem name="Fatima Oliveira" date="3 HORAS ATRÁS" likes={47} text="Gente, eu ERA cética. Já tinha tentado o shampoo Pantogar, a biotina, óleo de rícino... nada funcionou. Comprei o Cavalo de Raça sem muita esperança. *Na segunda semana, o ralo do chuveiro estava visivelmente mais limpo.* Não consigo acreditar. Já pedi o segundo kit." />
            
            <CommentItem name="Rosimeire Santos" date="1 DIA ATRÁS" likes={38} text="Comprei numa terça-feira à noite e chegou na quinta de manhã! Vim logo comentar porque achei que ia demorar muito mais. Embalagem muito caprichada, todos os produtos bem protegidos. *Já usei na primeira lavagem e o cheiro é maravilhoso.* Ainda vou contar o resultado depois, mas começou bem!" />
            
            <CommentItem name="Cleide Aparecida" date="2 DIAS ATRÁS" likes={61} text="Preciso deixar meu relato aqui porque talvez ajude alguma mulher na mesma situação que eu. Estou na menopausa há 2 anos e meu cabelo caiu muito com as mudanças hormonais. *Com 3 semanas de kit, a queda reduziu de um jeito que eu não via há muito tempo.* 55 anos e meu cabelo está reagindo sim. Não desistam!" />
            
            <CommentItem name="Marcia Gomes" date="1 SEMANA ATRÁS" likes={41} text="Moro no interior do Pará e fiquei com medo de demorar muito ou chegar danificado. *Chegou em 4 dias, embalado com plástico bolha, todos os frascos com lacre intacto.* Loja profissional demais." />
            <CommentItem name="Cláudia Mendes" date="6 DIAS ATRÁS" likes={7} isReply={true} text="Márcia, que alegria que chegou bem! Moro aqui em Brasília e também tive boa experiência com a entrega. Obrigada por contar, isso ajuda muito quem está em dúvida! 💛" />
          </div>
        </section>

        {/* Rodapé Moderno */}
        <footer className="mt-32 pt-16 border-t border-slate-100 space-y-12">
          <div className="flex justify-center gap-10 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
             <ShieldCheck size={32} /> <Zap size={32} /> <MessageSquare size={32} />
          </div>
          <p className="font-sans text-[10px] md:text-xs text-slate-400 leading-relaxed text-center font-bold uppercase tracking-[0.2em] max-w-2xl mx-auto italic">
            Aviso: Este post contém links de afiliados. Resultados variam de pessoa para pessoa. Produto aprovado pela ANVISA conforme normas vigentes.
            <br /><br />
            © 2025 MEU DIÁRIO DE SAÚDE E BELEZA. TODOS OS DIREITOS RESERVADOS.
          </p>
        </footer>

      </article>
    </div>
  );
}