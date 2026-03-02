"use client";

import React, { ReactNode } from 'react';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';
import { 
  Calendar, 
  Check, 
  Star, 
  MessageSquare, 
  ShoppingBag,
  Heart,
  User,
  Share2,
  Clock,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

// --- Componentes de Design Blog Nativo & Feminino ---

const HeaderMeta = () => (
  <div className="flex flex-col gap-4 border-b border-pink-100 pb-8 mb-10 font-merriweather">
    <div className="flex items-center gap-2 text-pink-600 text-[10px] font-black uppercase tracking-[0.3em]">
      <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
      Saúde & Bem-Estar Feminino
    </div>
    <div className="flex flex-wrap items-center gap-4 text-slate-400 text-xs font-bold">
      <span className="flex items-center gap-1.5"><Calendar size={14} className="text-pink-300" /> 14 de Junho de 2025</span>
      <span className="opacity-20">|</span>
      <span className="flex items-center gap-1.5"><Clock size={14} className="text-pink-300" /> 7 min de leitura</span>
      <span className="opacity-20">|</span>
      <span className="text-pink-500 font-black uppercase tracking-widest">Brasília, DF</span>
    </div>
  </div>
);

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="font-merriweather font-black text-3xl md:text-5xl text-slate-900 leading-[1.15] tracking-tight mb-6">
    {children}
  </h1>
);

const H1Sub = ({ children }: { children: ReactNode }) => (
  <h2 className="font-merriweather font-bold text-xl md:text-2xl text-pink-700 leading-relaxed mb-12 italic opacity-80">
    {children}
  </h2>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-merriweather font-black text-2xl md:text-3xl text-slate-800 mt-16 mb-6 tracking-tight border-l-4 border-pink-200 pl-4">
    {children}
  </h3>
);

const P = ({ children, className }: { children: ReactNode; className?: string }) => (
  <p className={cn("font-merriweather text-[19px] md:text-[21px] text-slate-600 leading-[1.8] mb-8 font-medium", className)}>
    {children}
  </p>
);

const Ancora = ({ children }: { children: ReactNode }) => (
  <p className="font-merriweather font-black text-xl md:text-2xl text-slate-900 my-8 leading-tight tracking-tight border-b-2 border-pink-100 inline-block">
    {children}
  </p>
);

const PullQuote = ({ children }: { children: ReactNode }) => (
  <div className="my-12 py-4 text-center">
    <div className="h-px w-20 bg-pink-100 mx-auto mb-8"></div>
    <p className="font-merriweather font-black italic text-2xl md:text-4xl text-pink-800 leading-tight tracking-tighter max-w-2xl mx-auto">
      "{children}"
    </p>
    <div className="h-px w-20 bg-pink-100 mx-auto mt-8"></div>
  </div>
);

const Citacao = ({ text, author }: { text: string; author: string }) => (
  <div className="bg-pink-50/30 border-l-4 border-pink-400 p-8 my-12 rounded-r-2xl">
    <p className="font-merriweather italic text-xl md:text-2xl text-slate-700 leading-relaxed mb-4">"{text}"</p>
    <p className="font-merriweather font-black text-xs text-pink-600 uppercase tracking-widest flex items-center gap-2">
        — {author}
    </p>
  </div>
);

const Timeline = ({ items }: { items: Array<{ label: string; text: string }> }) => (
  <div className="my-12 space-y-6">
    {items.map((item, i) => (
      <div key={i} className="flex gap-6 items-start group">
        <div className="shrink-0 w-16 h-16 rounded-2xl bg-pink-50 flex flex-col items-center justify-center text-pink-600 font-black text-[10px] uppercase tracking-tighter border border-pink-100 group-hover:bg-pink-500 group-hover:text-white transition-all">
          <span>{item.label.split(' ')[0]}</span>
          <span className="text-lg leading-none">{item.label.split(' ')[1]}</span>
        </div>
        <div className="pt-2">
          <p className="font-merriweather text-lg md:text-xl text-slate-600 leading-relaxed font-bold">
            {item.text}
          </p>
        </div>
      </div>
    ))}
  </div>
);

const BoxLista = ({ title, items }: { title: string; items: ReactNode[] }) => (
  <div className="bg-white border border-pink-100 rounded-3xl p-8 md:p-12 my-16 shadow-sm">
    <h4 className="font-merriweather font-black text-xl md:text-2xl mb-8 text-slate-900 tracking-tight uppercase flex items-center gap-3">
        <Heart className="text-pink-500" size={24} fill="currentColor" />
        {title}
    </h4>
    <ul className="space-y-6">
      {items.map((item, i) => (
        <li key={i} className="text-lg md:text-xl leading-snug font-bold text-slate-700 flex items-start gap-4">
            <div className="bg-pink-50 p-1 rounded-full text-pink-600 mt-1"><Check size={16} strokeWidth={4} /></div>
            {item}
        </li>
      ))}
    </ul>
  </div>
);

const BoxAlerta = ({ children }: { children: ReactNode }) => (
  <div className="bg-rose-50 border border-rose-100 p-8 my-12 rounded-2xl flex gap-4 items-start">
    <AlertCircle className="text-rose-500 shrink-0" size={24} />
    <div className="font-merriweather text-lg md:text-xl leading-relaxed font-bold text-rose-900 italic">
        {children}
    </div>
  </div>
);

const Depoimento = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-slate-50 p-8 md:p-10 my-10 rounded-3xl relative group">
    <p className="font-merriweather italic text-lg md:text-xl text-slate-600 leading-relaxed mb-6 font-medium">"{text}"</p>
    <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-pink-100 flex items-center justify-center font-black text-pink-600 text-sm">{name.charAt(0)}</div>
        <p className="font-merriweather font-black text-xs text-slate-400 uppercase tracking-widest">{name}</p>
    </div>
  </div>
);

const CTAButton = () => (
  <div className="flex flex-col items-center my-16">
    <Link href="https://seguro.elabela.store/r/RC8ASYUL88" className="w-full max-w-xl">
      <Button 
        className="w-full h-20 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest shadow-xl shadow-pink-200 transition-all active:scale-95 flex items-center justify-center gap-3 font-merriweather"
      >
        <ShoppingBag size={24} />
        Clique Aqui para ver o Kit
      </Button>
    </Link>
    <p className="font-merriweather font-bold text-[10px] text-slate-400 mt-4 text-center uppercase tracking-[0.3em]">
       Verifique a disponibilidade hoje no site oficial
    </p>
  </div>
);

const CommentItem = ({ name, date, text, likes, isReply = false }: { name: string; date: string; text: string; likes: number; isReply?: boolean }) => (
  <div className={cn("py-8 flex gap-4 font-merriweather", isReply ? 'ml-12 border-l-2 border-slate-50 pl-6' : 'border-b border-slate-50')}>
    <div className={cn("shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 font-bold uppercase", isReply ? 'w-10 h-10 text-xs' : 'w-12 h-12 text-sm')}>
      {name.charAt(0)}
    </div>
    <div className="flex-1 space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-merriweather font-black text-slate-900 text-base">{name}</span>
        <span className="font-merriweather font-bold text-[10px] text-slate-300 uppercase tracking-widest">{date}</span>
      </div>
      <p className="font-merriweather text-lg text-slate-500 leading-relaxed font-medium">{text}</p>
      <div className="font-merriweather text-[10px] text-pink-400 flex items-center gap-4 font-black uppercase tracking-widest pt-2">
        <button className="hover:text-pink-600 transition-colors">Curtir</button>
        <button className="hover:text-pink-600 transition-colors">Responder</button>
        {likes > 0 && <span className="text-slate-300 ml-auto flex items-center gap-1"><Heart size={10} fill="currentColor" /> {likes}</span>}
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function KcrAdvV2Page() {
  return (
    <div className="bg-white min-h-screen antialiased selection:bg-pink-100 font-merriweather">
      <PageTracker contentId="adv-kcr-v2" />

      {/* NAVBAR CLEAN BLOG */}
      <nav className="bg-white border-b border-slate-50 py-6 px-6 sticky top-0 z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
              <span className="text-xl font-merriweather font-black tracking-tighter text-slate-900 uppercase italic">
                Meu <span className="text-pink-600">Diário</span> de Beleza
              </span>
              <div className="flex items-center gap-4 text-slate-400">
                  <Share2 size={18} className="hover:text-pink-500 cursor-pointer transition-colors" />
                  <div className="h-4 w-px bg-slate-100"></div>
                  <User size={18} className="hover:text-pink-500 cursor-pointer transition-colors" />
              </div>
          </div>
      </nav>

      <article className="max-w-[750px] mx-auto px-6 py-12 md:py-20">
        
        <HeaderMeta />

        <H1>Eu chorava toda vez que olhava para o ralo do meu chuveiro.</H1>
        <H1Sub>Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.</H1Sub>

        {/* IMAGEM DE RELATO AJUSTADA: MAIOR NO MOBILE E ARREDONDAMENTO SUAVE */}
        <div className="my-10 -mx-6 md:mx-0">
          <img 
            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771644725841-Gemini_Generated_Image_bi45tvbi45tvbi45.png" 
            alt="Relato de Cláudia Mendes" 
            className="w-full h-auto rounded-xl md:rounded-2xl shadow-lg border-2 border-white"
          />
        </div>

        <P>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</P>
        <P>Durante quase dois anos, eu evitei espelhos. Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</P>
        <P>Porque toda vez que eu me via, o que eu enxergava não era eu. Era uma versão de mim que estava... desaparecendo.</P>
        <Ancora>Era uma versão de mim que estava... desaparecendo.</Ancora>
        <P>Meu cabelo estava cainoin. E não era aquela queda normal que todo mundo tem. Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</P>
        <P>Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</P>
        <P>Eu ficava contando os fios no chuveiro. Sabe quando você começa a fazer isso? É quando você sabe que chegou num lugar muito feio dentro de si mesma.</P>
        <P>Eu tinha 51 anos. E aí vem aquela coisa que ninguém avisa direito:</P>
        <Ancora>Depois dos 45, o cabelo muda. Os hormônios mudam. O corpo inteiro muda.</Ancora>
        <P>Ninguém te fala isso com clareza. Te falam sobre menopausa, sobre colesterol, sobre pressão. But ninguém te avisa que você pode acordar um dia e o seu cabelo não ser mais o mesmo.</P>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>O dia que eu quase não saí mais de casa</H2>
        <P>Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam.</P>
        <P>"Cláudia, que cabelo lindo o seu." Eu ouvia isso a vida toda.</P>
        <P>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</P>
        <P>Comecei a usar truques de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o volume que tinha sumido.</P>
        <Ancora>Chapéu virou meu acessório favorito. E eu odeio chapéu.</Ancora>
        <P>Meu marido, o Marcos, perguntou uma vez: "Você tá bem? Você tá diferente." Eu disse que estava cansada do trabalho. Mas a verdade é que eu tinha vergonha. Vergonha de tel 51 anos e estar com menos cabelo do que minha mãe com 72.</P>
        <P>E ainda tinha aquela voz na cabeça: "é a idade, Cláudia. É a menopausa. É o que acontece com a gente."</P>
        <PullQuote>Como se depois dos 50 a gente tivesse que aceitar virar outra pessoa.</PullQuote>
        <P>Teve um domingo que eu não fui ao churrasco da família. Inventei dor de cabeça. Na verdade, eu não conseguia arranjar um penteado que me fizesse sentir presentável. No aguentava a ideia de todo mundo olhando.</P>
        <Ancora>Aquele domingo foi o fundo do poço pra mim.</Ancora>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

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

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>A mensagem que mudou tudo — e eu quase nem li</H2>
        <P>Foi minha prima Renata quem me mandou. A gente se fala bastante por Whatsapp. Quando ela me mandou uma foto do cabelo dela com a mensagem "Cláudia, você precisa ver isso", eu quase ignorei.</P>
        <P>But a foto me chamou atenção. O cabelo dela estava diferente. Mais cheio. Com um brilho diferente.</P>
        <P>Eu sabia que a Renata tinha passado pelo mesmo problema — ela tem 53 anos, passou pela menopausa cedo, e o cabelo dela tinha ficado horrível.</P>
        <Ancora>Liguei pra ela na hora.</Ancora>
        <P>Ela me contou que estava usando o Kit Cavalo de Raça. Me disse que o diferencial é que ele não trata só o sintoma — ele trata as três causas da queda ao mesmo tempo, com cinco produtos que trabalham em sistema.</P>
        <P>Perguntei logo: "mas funciona mesmo pra quem já tem uma certa idade? Porque eu já tentei de tudo..."</P>
        <P>Ela me disse: <strong>"Cláudia, eu tenho 53. Funciona exatamente porque é feito pra fios que já passaram por mudança hormonal. É diferente de produto pra menina de 20 anos com cabelo virgem."</strong></P>
        <Citacao text="É como tentar consertar uma cadeira pregando um parafuso quando os outros três estão soltos. Não adianta." author="Renata, minha prima" />
        <P>E o tônico foi o que mais me surpreendeu depois. Você aplica direto no couro cabeludo e ele age dentro do folículo — onde o fio nasce. Os outros produtos cuidam do fio que já existe.</P>
        <Ancora>O tônico cuida do fio que ainda vai nascer.</Ancora>
        <P>Pedi o link pra ela. Comprei naquela mesma noite.</P>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>O que aconteceu semana a semana</H2>
        <P>Vou te contar exatamente o que aconteceu. Sem exagero, sem enfeite.</P>
        <Timeline items={[
          { label: "DIA 1", text: "Couro cabeludo leve. Limpo de um jeito que eu não lembrava de ter sentido." },
          { label: "DIA 3", text: "Olhei pro ralo no chuveiro. Estava quase limpo. Fiquei parada olhando." },
          { label: "SEM 1", text: "A queda diminuiu de um jeito que eu não via há dois anos. Chorei de alívio." },
          { label: "SEM 3", text: "Fios novos na frente. Bebê, sabe? Curtos demais pra deitar. Nascendo." },
          { label: "MÊS 1", text: "Minha cabeleireira perguntou: 'Cláudia, o que você fez? Seu cabelo tá diferente.'" },
          { label: "MÊS 3", text: "Meu cabelo voltou. O volume, o brilho, a vida. Melhor do que antes." }
        ]} />
        <P>No terceiro dia, eu fechei o chuveiro. Fiquei parada olhando pro ralo por um bom tempo. Pensei que tinha sido coincidência. Mas no quarto dia, o mesmo. No quinto dia, o mesmo.</P>
        <P>Na escova pela manhã, menos fios. No travesseiro, quase nada.</P>
        <Ancora>Chorei. No banheiro mesmo, de emoção. Aquelas lágrimas diferentes — não de tristeza, mas de alívio.</Ancora>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>No primeiro mês, minha cabeleireira notou antes de mim</H2>
        <P>Continuei usando o kit completo: shampoo todo dia, máscara duas vezes na semana, condicionador, leave-in e o tônico. Do jeito que mandava.</P>
        <P>No primeiro mês, fui ao salão pela primeira vez em meses sem querer morrer de vergonha.</P>
        <P>A Patrícia passou os dedos no meu cabelo e disse: "Cláudia, o que você fez? Seu cabelo tá diferente. Mais encorpado."</P>
        <PullQuote>Essa frase, de uma profissional que cuida do meu cabelo há oito anos, valeu mais do que qualquer resultado de exame.</PullQuote>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>Três meses depois: eu não me reconhecia — do jeito bom</H2>
        <P>Hoje meu cabelo voltou. Não do jeito que estava antes da queda começar.</P>
        <Ancora>Melhor.</Ancora>
        <P>O volume voltou. A queda está em zero. Os fios novos cresceram e já se misturaram com o restante. Mas o que mudou mais foi outra coisa.</P>
        <P>Aqui eu preciso falar especialmente pras mulheres que estão na mesma fase que eu — acima dos 45, acima dos 50.</P>
        <P>A gente cresce ouvindo que depois de uma certa idade tem que "se conformar". Com o corpo, com o cabelo, com a aparência.</P>
        <Ancora>Eu não me conformei. E você também não precisa.</Ancora>
        <P>No domingo passado, eu fui ao churrasco da família. Arrumei o cabelo solto. Botei um brinco bonito. Quando minha cunhada disse "Cláudia, você tá ótima, o que aconteceu?", eu consegui responder sem travar: "Tô bem, obrigada."</P>
        <P>Eu tô bem. Faz tanto tempo que eu não podia dizer isso de verdade.</P>
        <P>O Marcos me olhou diferente naquele domingo. A gente conversou mais, riu mais. Coisas que a gente tinha parado de fazer sem ni perceber.</P>
        <P>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade. </P>
        <PullQuote>É identidade. É como você se apresenta pro mundo. É como você se sente digna de ocupar espaço.</PullQuote>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>Imagina você daqui a 60 dias...</H2>
        <P>Fecha os olhos um segundo. Imagina você acordando de manhã, passando a mão no cabelo no travesseiro — e não encontrando quase nada.</P>
        <P>Imagina entrar no chuveiro sem aquela ansiedade de olhar pro ralo. Terminar o banho tranquila.</P>
        <Ancora>Imagina abrir o guarda-roupa e escolher aquela blusa que você evitava porque não queria mostrar o cabelo ralo.</Ancora>
        <P>Imagina postar uma foto e se reconhecer na imagem. Se gostar do que você vê. Isso não é sonho. Foi exatamente o que aconteceu comigo em 60 dias.</P>
        <Ancora>E pode acontecer com você também.</Ancora>

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>Não sou só eu — leia o que outras mulheres estão dizendo</H2>
        <P>Desde que postei minha foto nova, recebi centenas de mensagens. Mulheres acima dos 45, acima dos 50, com a mesma história. Peço licença pra compartilhar algumas aqui:</P>
        <Depoimento name="Maria Luíza, 54 anos — Goiânia, GO" text="Achei que era tarde demais pra mim. Meu cabelo estava caindo há dois anos e o dermatologista disse que era da menopausa, que eu tinha que aceitar. Comprei o kit sem muita esperança. Na segunda semana já estava diferente. Não consigo mais parar de usar." />
        <Depoimento name="Sônia Aparecida, 49 anos — Belo Horizonte, MG" text="Eu escondia o couro cabeludo com progressiva porque estava tão ralo que dava pra ver. Minha autoestima estava no chão. Com um mês de kit, minha filha me perguntou o que eu tinha feito no cabelo. Quase chorei ali na frente dela." />
        <Depoimento name="Rosângela, 52 anos — Recife, PE" text="Já tinha gastado mais de R$ 600 em produtos que não funcionaram. Estava desacreditada. Comprei o kit como última tentativa. Foi a melhor decisão que tomei. A queda parou na primeira semana. Agora estou vendo os fios novos nascendo." />

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>Por que estou escrevendo isso aqui hoje</H2>
        <P>Recebi tantas mensagens de mulheres perguntando qual foi o kit, que resolvi escrever aqui de vez.</P>
        <P>Entrei em contato com a loja onde comprei — a elabela.store — e expliquei que muitas leitoras do meu blog estavam perguntando. Eles me passaram um link com desconto exclusivo pra quem vier daqui.</p>
        <P>Não é indicação paga. Só quero que você tenha acesso ao mesmo tratamento que mudou a minha vida.</P>

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
        <div className="bg-pink-50 p-10 rounded-3xl text-center my-12 border border-pink-100">
            <p className="font-merriweather font-black text-3xl md:text-5xl tracking-tighter mb-4 text-pink-700">R$ 1,80 Por Dia.</p>
            <p className="font-merriweather text-lg md:text-xl font-medium text-slate-500 uppercase tracking-widest leading-relaxed">Menos que um café para ter seu cabelo e sua confiança de volta.</p>
        </div>
        
        <P>Por 5 produtos profissionais aprovados pela ANVISA, com frete grátis e garantia de resultado. Lembra que eu joguei R$ 800 fora em coisas que não funcionaram? <strong>Isso é menos de um quinto daquilo.</strong></P>

        <BoxAlerta>
          ⚠️ Importante: o Kit Cavalo de Raça Original está disponível em <strong className="text-slate-900">elabela.store</strong>. Tem muita cópia barata circulando sem a fórmula completa. Compre só pelo link abaixo pra garantir o original com desconto e frete grátis.
        </BoxAlerta>

        <div className="text-center my-10 space-y-2">
          <p className="font-merriweather font-black text-3xl md:text-4xl text-pink-600">De R$ 227,00 por R$ 159,90</p>
          <div className="flex justify-center items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-widest">
             <Check size={16} strokeWidth={4} /> Frete Grátis Para Todo Brasil
          </div>
          <p className="font-merriweather text-xs text-slate-400 font-bold uppercase tracking-widest pt-4">
            Aprovado pela ANVISA  |  Dinheiro de volta se não gostar
          </p>
        </div>

        <CTAButton />

        <div className="flex justify-center my-16 opacity-10">
            <div className="h-px w-full bg-slate-900"></div>
        </div>

        <H2>Da última vez que olhei pro ralo...</H2>
        <P>Você lembra que eu comecei esse texto falando do ralo do chuveiro? Que eu chorava toda vez que olhava pra ele?</P>
        <P>Da última vez que olhei pro ralo depois do banho, eu estava sorrindo. Foi a mesma mulher. O mesmo chuveiro. O mesmo ralo. Tudo diferente.</P>
        <Ancora>Não é assim mesmo. Eu sou prova disso. A Renata é prova. E as centenas de mulheres que me escreveram são prova.</Ancora>
        <P>Só te peço uma coisa: não desiste de você mesma.</P>
        
        <CTAButton />

        <div className="mt-20 pt-10 border-t border-slate-100 font-merriweather space-y-1">
          <p className="italic text-pink-600 text-2xl font-serif">Com amor,</p>
          <p className="text-2xl font-black text-slate-900">Cláudia Mendes</p>
          <p className="text-slate-400 text-xs font-black uppercase tracking-widest">Brasília, DF</p>
        </div>

        {/* Seção de Comentários Estilo Blog Nativo */}
        <section className="mt-24 pt-16 border-t border-slate-100 pb-20">
          <div className="flex items-center justify-between mb-12">
            <h4 className="font-merriweather font-black text-2xl md:text-3xl text-slate-900 tracking-tighter uppercase leading-none">
                Leitoras <span className="text-pink-600">Interagindo</span>
            </h4>
            <div className="bg-pink-50 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest text-pink-600">
                20 Relatos
            </div>
          </div>

          <div className="space-y-2">
            <CommentItem name="Fatima Oliveira" date="3 HORAS ATRÁS" likes={47} text="Gente, eu ERA cética. Já tinha tentado o shampoo Pantogar, a biotina, óleo de rícino... nada funcionou. Comprei o Cavalo de Raça sem muita esperança. *Na segunda semana, o ralo do chuveiro estava visivelmente mais limpo.* Não consigo acreditar. Já pedi o segundo kit." />
            
            <CommentItem name="Rosimeire Santos" date="1 DIA ATRÁS" likes={38} text="Comprei numa terça-feira à noite e chegou na quinta de manhã! Vim logo comentar porque achei que ia demorar muito mais. Embalagem muito caprichada, todos os produtos bem protegidos. *Já usei na primeira lavagem e o cheiro é maravilhoso.* Ainda vou contar o resultado depois, mas começou bem!" />
            
            <CommentItem name="Cleide Aparecida" date="2 DIAS ATRÁS" likes={61} text="Preciso deixar meu relato aqui porque talvez ajude alguma mulher na mesma situação que eu. Estou na menopausa há 2 anos e meu cabelo caiu muito com as mudanças hormonais. *Com 3 semanas de kit, a queda reduziu de um jeito que eu não via há muito tempo.* 55 anos e meu cabelo está reagindo sim. Não desistam!" />
            
            <CommentItem name="Marcia Gomes" date="1 SEMANA ATRÁS" likes={41} text="Moro no interior do Pará e fiquei com medo de demorar muito ou chegar danificado. *Chegou em 4 dias, embalado com plástico bolha, todos os frascos com lacre intacto.* Loja profissional demais." />
            <CommentItem name="Cláudia Mendes" date="6 DIAS ATRÁS" likes={7} isReply={true} text="Márcia, que alegria que chegou bem! Moro aqui em Brasília e também tive boa experiência com a entrega. Obrigada por contar, isso ajuda muito quem está em dúvida! 💛" />
          </div>
        </section>

        {/* Rodapé Blog */}
        <footer className="mt-32 pt-16 border-t border-slate-50 space-y-12">
          <div className="flex justify-center gap-8 opacity-20 grayscale">
             <ShieldCheck size={28} /> <Heart size={28} /> <MessageSquare size={28} />
          </div>
          <p className="font-merriweather text-[11px] text-slate-400 leading-relaxed text-center font-bold uppercase tracking-[0.2em] max-w-xl mx-auto italic">
            Este conteúdo é informativo e baseado em relatos pessoais. Resultados podem variar. Produto notificado na ANVISA.
            <br /><br />
            © 2025 MEU DIÁRIO DE BELEZA. TODOS OS DIREITOS RESERVADOS.
          </p>
        </footer>

      </article>
    </div>
  );
}