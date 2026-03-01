"use client";

import React, { ReactNode } from 'react';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';

// --- Utilitários de Estilo ---

const Meta = ({ children }: { children: ReactNode }) => (
  <div className="font-sans text-[13px] text-[#999999] border-b border-[#EEEEEE] pb-2 mb-8 uppercase tracking-tight">
    {children}
  </div>
);

const H1 = ({ children }: { children: ReactNode }) => (
  <h1 className="font-serif font-bold text-[26px] md:text-[36px] text-[#1A1A1A] leading-tight mb-4">
    {children}
  </h1>
);

const H1Sub = ({ children }: { children: ReactNode }) => (
  <h2 className="font-serif font-bold text-[22px] md:text-[28px] text-[#8B1A1A] leading-tight mb-10">
    {children}
  </h2>
);

const H2 = ({ children }: { children: ReactNode }) => (
  <h3 className="font-serif font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mt-12 mb-6">
    {children}
  </h3>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="font-serif text-[15px] md:text-[16px] text-[#222222] leading-[1.85] mb-[22px] text-left">
    {children}
  </p>
);

const Ancora = ({ children }: { children: ReactNode }) => (
  <p className="font-serif font-bold text-[18px] text-[#1A1A1A] my-4 leading-snug">
    {children}
  </p>
);

const PullQuote = ({ children }: { children: ReactNode }) => (
  <div className="font-serif font-bold italic text-[19px] text-[#8B1A1A] border-l-[5px] border-[#8B1A1A] pl-6 my-8 leading-relaxed">
    {children}
  </div>
);

const Citacao = ({ text, author }: { text: string; author: string }) => (
  <div className="font-serif italic text-[16px] text-[#555555] border-l-[4px] border-[#8B1A1A] p-4 md:p-6 bg-[#F9F9F9] my-8">
    <p>"{text}"</p>
    <p className="not-italic font-bold mt-2 text-[#8B1A1A]">— {author}</p>
  </div>
);

const Divisor = () => (
  <div className="text-center text-[#BBBBBB] text-2xl my-10 font-serif tracking-[10px]">···</div>
);

const Timeline = ({ items }: { items: Array<{ label: string; text: string }> }) => (
  <div className="my-8 font-serif overflow-hidden rounded-sm border border-[#EEEEEE]">
    {items.map((item, i) => (
      <div key={i} className="flex flex-col md:flex-row border-b border-[#EEEEEE] last:border-0">
        <div className="md:w-1/4 bg-[#8B1A1A] text-white font-bold text-[14px] p-3 md:p-4 flex items-center">
          {item.label}
        </div>
        <div className="md:w-3/4 bg-[#FDF5F5] text-[#222222] text-[16px] p-4 leading-relaxed">
          {item.text}
        </div>
      </div>
    ))}
  </div>
);

const BoxLista = ({ title, items }: { title: string; items: ReactNode[] }) => (
  <div className="bg-[#FDF5F5] border-y-[3px] border-[#8B1A1A] p-5 md:p-6 my-8 font-serif">
    <h4 className="font-bold text-[18px] mb-4 text-[#1A1A1A]">{title}</h4>
    <ul className="space-y-3">
      {items.map((item, i) => <li key={i} className="text-[16px] leading-relaxed">{item}</li>)}
    </ul>
  </div>
);

const BoxAlerta = ({ children }: { children: ReactNode }) => (
  <div className="bg-[#FDF5F5] border-y-[3px] border-[#8B1A1A] p-5 md:p-6 my-8 font-serif text-[16px] leading-relaxed">
    {children}
  </div>
);

const Depoimento = ({ name, text }: { name: string; text: string }) => (
  <div className="bg-[#F9F9F9] border-l-[4px] border-[#8B1A1A] p-5 md:p-6 my-6 font-serif">
    <p className="font-serif italic text-[16px] text-[#222222] leading-relaxed mb-3">"{text}"</p>
    <p className="font-serif font-bold italic text-[15px] text-[#8B1A1A]">{name}</p>
  </div>
);

const CTAButton = () => (
  <div className="flex flex-col items-center my-10 px-4 md:px-0">
    <Link href="https://seguro.elabela.store/r/RC8ASYUL88" className="w-full md:w-auto">
      <button className="w-full bg-[#8B1A1A] text-white font-bold text-[18px] py-[18px] px-9 rounded-[4px] shadow-md hover:brightness-110 transition-all uppercase leading-tight text-center">
        >> CLIQUE AQUI — Ver Kit com Desconto na elabela.store <<
      </button>
    </Link>
    <p className="font-serif italic text-[14px] text-[#999999] mt-3 text-center">
      (Verificar se o desconto ainda está disponível)
    </p>
  </div>
);

// --- Componentes de Comentário (Estilo FB) ---

const CommentItem = ({ name, date, text, likes, isReply = false }: { name: string; date: string; text: string; likes: number; isReply?: boolean }) => (
  <div className={`py-4 flex gap-3 ${isReply ? 'ml-12 border-l-2 border-[#EEEEEE] pl-4' : 'border-b border-[#EEEEEE]'}`}>
    <div className={`shrink-0 rounded-full bg-[#8B1A1A] flex items-center justify-center text-white font-bold uppercase ${isReply ? 'w-8 h-8 text-[10px]' : 'w-12 h-12 text-[14px]'}`}>
      {name.charAt(0)}
    </div>
    <div className="flex-1">
      <div className="flex items-center gap-2 mb-1">
        <span className="font-sans font-bold text-[15px] text-[#8B1A1A] cursor-pointer hover:underline">{name}</span>
        <span className="font-sans text-[13px] text-[#AAAAAA]">{date}</span>
      </div>
      <p className="font-serif text-[15px] text-[#333333] leading-[1.7] mb-2">{text}</p>
      <div className="font-sans text-[13px] text-[#AAAAAA] flex items-center gap-3">
        <button className="hover:underline font-bold">Curtir</button>
        <span>·</span>
        <button className="hover:underline font-bold">Responder</button>
        {likes > 0 && (
          <>
            <span>·</span>
            <span className="flex items-center gap-1">
              <span className="bg-[#8B1A1A] text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center">👍</span>
              {likes}
            </span>
          </>
        )}
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export default function KcrAdvV2Page() {
  return (
    <div className="bg-white min-h-screen antialiased">
      <PageTracker contentId="kcr-adv-v2" />

      {/* Container Principal */}
      <article className="max-w-[720px] mx-auto px-4 py-8 md:py-12">
        
        <Meta>Meu Diário de Saúde e Beleza  |  Por Cláudia Mendes  |  Brasília, DF  |  Leitura: 7 minutos</Meta>

        <H1>Eu chorava toda vez que olhava para o ralo do meu chuveiro.</H1>
        <H1Sub>Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.</H1Sub>

        <P>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</P>
        <P>Durante quase dois anos, eu evitei espelhos.</P>
        <P>Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</P>
        <P>Porque toda vez que eu me via, o que eu enxergava não era eu.</P>
        <Ancora>Era uma versão de mim que estava... desaparecendo.</Ancora>
        <P>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem.</P>
        <P>Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</P>
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
        <P>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade.</P>
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
            <strong className="text-[#8B1A1A]">5. Tônico Capilar Antiqueda — age no folículo. Estimula os fios novos a nascer.</strong>
          ]}
        />

        <P>Eu sei que parece caro à primeira vista. <strong>Mas faz a conta comigo:</strong></P>
        <PullQuote>R$ 159,90 ÷ 90 dias de tratamento = menos de R$ 1,80 por dia.</PullQuote>
        <P>Menos que um café. Por 5 produtos profissionais aprovados pela ANVISA, com frete grátis e garantia de resultado.</P>
        <P>Lembra que eu joguei R$ 800 fora em coisas que não funcionaram? <strong>Isso é menos de um quinto daquilo.</strong></P>

        <BoxAlerta>
          ⚠️ Importante: o Kit Cavalo de Raça Original está disponível em <strong className="text-[#8B1A1A]">elabela.store</strong>. Tem muita cópia barata circulando sem a fórmula completa. Compre só pelo link abaixo pra garantir o original com desconto e frete grátis.
        </BoxAlerta>

        <div className="text-center my-8">
          <p className="font-serif font-bold text-[28px] text-[#8B1A1A]">De R$ 227,00 por R$ 159,90 + Frete Grátis</p>
          <p className="font-serif text-[15px] text-[#666666] mt-1 italic">
            Aprovado e testado pela ANVISA  |  Garantia de resultado  |  Dinheiro de volta se não gostar
          </p>
        </div>

        <P className="text-center">⏳ <strong>ATENÇÃO: O desconto é por tempo limitado.</strong></P>
        
        <CTAButton />

        <Divisor />

        <H2>Da última vez que olhei pro ralo...</H2>
        <P>Você lembra que eu comecei esse texto falando do ralo do chuveiro? Que eu chorava toda vez que olhava pra ele?</P>
        <P>Da última vez que olhei pro ralo depois do banho, eu estava sorrindo. Foi a mesma mulher. O mesmo chuveiro. O mesmo ralo. Tudo diferente.</P>
        <Ancora>Não é assim mesmo. Eu sou prova disso. A Renata é prova. E as centenas de mulheres que me escreveram são prova.</Ancora>
        <P>Só te peço uma coisa: não desiste de você mesma.</P>
        
        <CTAButton />

        <div className="mt-12 font-serif text-[16px]">
          <p>Com amor,</p>
          <p className="font-bold mt-2">Cláudia Mendes</p>
          <p className="text-[#999999] text-[14px]">Brasília, DF</p>
        </div>

        <Divisor />

        {/* Seção de Comentários */}
        <section className="mt-12 border-t-2 border-[#EEEEEE] pt-8">
          <div className="flex items-baseline gap-2 mb-8">
            <h4 className="font-serif font-bold text-[22px] text-[#1A1A1A]">O que as leitoras estão dizendo:</h4>
            <span className="font-sans text-[13px] text-[#999999]">20 comentários</span>
          </div>

          <div className="space-y-2">
            <CommentItem name="Fatima Oliveira" date="3 horas atrás" likes={47} text="Gente, eu ERA cética. Já tinha tentado o shampoo Pantogar, a biotina, óleo de rícino... nada funcionou. Comprei o Cavalo de Raça sem muita esperança. *Na segunda semana, o ralo do chuveiro estava visivelmente mais limpo.* Não consigo acreditar. Já pedi o segundo kit." />
            
            <CommentItem name="Rosimeire Santos" date="1 dia atrás" likes={38} text="Comprei numa terça-feira à noite e chegou na quinta de manhã! Vim logo comentar porque achei que ia demorar muito mais. Embalagem muito caprichada, todos os produtos bem protegidos. *Já usei na primeira lavagem e o cheiro é maravilhoso.* Ainda vou contar o resultado depois, mas começou bem!" />
            
            <CommentItem name="Cleide Aparecida" date="2 dias atrás" likes={61} text="Preciso deixar meu relato aqui porque talvez ajude alguma mulher na mesma situação que eu. Estou na menopausa há 2 anos e meu cabelo caiu muito com as mudanças hormonais. *Com 3 semanas de kit, a queda reduziu de um jeito que eu não via há muito tempo.* 55 anos e meu cabelo está reagindo sim." />
            
            <CommentItem name="Marcia Gomes" date="1 semana atrás" likes={41} text="Moro no interior do Pará e fiquei com medo de demorar muito ou chegar danificado. *Chegou em 4 dias, embalado com plástico bolha, todos os frascos com lacre intacto.* Loja profissional demais." />
            <CommentItem name="Cláudia Mendes" date="6 dias atrás" likes={7} isReply={true} text="Márcia, que alegria que chegou bem! Moro aqui em Brasília e também tive boa experiência com a entrega. Obrigada por contar, isso ajuda muito quem está em dúvida! 💛" />
            
            <CommentItem name="Luciana Braga" date="3 semanas atrás" likes={67} text="Fui à dermatologista e ela me orçou um tratamento de R$ 1.800 em sessões. Não tinha esse dinheiro. Comprei pra testar. *Dois meses depois minha dermatologista olhou meu cabelo e perguntou o que eu tinha feito.* Quando falei o preço ela ficou surpresa." />
          </div>
        </section>

        {/* Rodapé Legal */}
        <footer className="mt-16 pt-8 border-t border-[#EEEEEE]">
          <p className="font-sans italic text-[12px] text-[#AAAAAA] leading-relaxed text-center">
            Este post pode conter links de afiliados. Isso significa que posso receber uma comissão se você comprar através do link, sem custo adicional para você. Só recomendo produtos que usei e acredito de verdade. Resultados podem variar de pessoa para pessoa. Produto aprovado e testado pela ANVISA.
            <br /><br />
            © 2024 Meu Diário de Saúde e Beleza. Todos os direitos reservados.
          </p>
        </footer>

      </article>
    </div>
  );
}