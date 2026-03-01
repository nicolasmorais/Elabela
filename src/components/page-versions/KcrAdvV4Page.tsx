"use client";

import React, { ReactNode } from 'react';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';

// --- Sub-componentes de Estilo ---

const SectionDivider = () => <div className="text-center text-[#BBBBBB] text-2xl my-12 font-serif">· · ·</div>;

const Bold = ({ children }: { children: ReactNode }) => <strong className="font-bold text-[#1A1A1A]">{children}</strong>;

const CTAButton = ({ label }: { label?: string }) => (
  <div className="flex justify-center my-10">
    <Link href="https://seguro.elabela.store/r/RC8ASYUL88" className="w-full">
      <button className="w-full bg-[#8B1A1A] text-white font-bold py-5 px-4 rounded shadow-lg text-base md:text-lg uppercase tracking-tight hover:brightness-110 transition-all text-center leading-tight">
        {label || " >> CLIQUE AQUI — Ver Kit com Desconto na elabela.store << "}
      </button>
    </Link>
  </div>
);

const TestimonialBox = ({ text, author }: { text: string; author: string }) => (
  <div className="border-l-4 border-[#8B1A1A] bg-[#F9F9F9] p-6 my-8 italic text-[#444]">
    <p className="mb-3">"{text}"</p>
    <p className="not-italic font-bold text-[#8B1A1A] text-sm">— {author}</p>
  </div>
);

interface CommentProps {
  name: string;
  time: string;
  text: string;
  replies?: Array<{ name: string; time: string; text: string }>;
}

const CommentItem = ({ name, time, text, replies = [] }: CommentProps) => (
  <div className="py-5 border-b border-gray-100 last:border-0">
    <div className="flex gap-3">
      <div className="w-10 h-10 rounded-full bg-[#8B1A1A] shrink-0 flex items-center justify-center text-white font-bold text-xs uppercase">
        {name.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-[#3B5998] text-[14px] hover:underline cursor-pointer">{name}</span>
        </div>
        <p className="text-[#1C1E21] text-[15px] leading-normal mb-2">{text}</p>
        <div className="flex items-center gap-3 text-[12px] text-[#90949c] font-bold">
          <span className="hover:underline cursor-pointer">Curtir</span>
          <span className="hover:underline cursor-pointer">Responder</span>
          <span className="font-normal">· {time}</span>
        </div>
        
        {replies.map((reply, i) => (
          <div key={i} className="mt-4 flex gap-3 border-l-2 border-gray-200 pl-4">
             <div className="w-8 h-8 rounded-full bg-[#E9EBEE] shrink-0 flex items-center justify-center text-[#8B1A1A] font-bold text-[10px] uppercase">
                {reply.name.charAt(0)}
             </div>
             <div className="flex-1">
                <span className="font-bold text-[#3B5998] text-[13px]">{reply.name}</span>
                <p className="text-[#1C1E21] text-[14px] leading-normal">{reply.text}</p>
                <div className="flex items-center gap-2 text-[11px] text-[#90949c] font-bold mt-1">
                  <span>Curtir</span> · <span>{reply.time}</span>
                </div>
             </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// --- Componente Principal ---

export function KcrAdvV4Page() {
  return (
    <div className="bg-white min-h-screen font-serif antialiased selection:bg-red-100">
      <PageTracker contentId="adv-kcr-v4" />
      
      <style dangerouslySetInnerHTML={{ __html: `
        .article-body p { margin-bottom: 1.6rem; line-height: 1.8; color: #333; font-size: 17px; }
        @media (max-width: 768px) { .article-body p { font-size: 16px; } }
      `}} />

      <article className="max-w-[700px] mx-auto px-5 py-10 md:py-16">
        
        {/* Header/Meta */}
        <header className="mb-10 text-[#666] font-sans text-sm border-b border-gray-100 pb-6">
            <p className="uppercase tracking-widest font-bold text-[11px] mb-1">Meu Diário de Saúde e Beleza</p>
            <p>Por <span className="text-[#1A1A1A] font-semibold">Cláudia Mendes</span></p>
            <p>Brasília, DF  |  Leitura: 7 minutos</p>
        </header>

        {/* Headlines */}
        <h1 className="text-[28px] md:text-[40px] font-bold text-[#1A1A1A] leading-[1.15] mb-6 font-sans tracking-tight">
            Eu chorava toda vez que olhava para o ralo do meu chuveiro.
        </h1>
        <h2 className="text-[20px] md:text-[24px] text-[#8B1A1A] font-medium leading-[1.3] mb-10 italic">
            Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.
        </h2>

        {/* Conteúdo Principal */}
        <div className="article-body">
            <p>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</p>
            <p>Durante quase dois anos, eu evitei espelhos.</p>
            <p>Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</p>
            <p>Porque toda vez que eu me via, o que eu enxergava não era eu.</p>
            <p>Era uma versão de mim que estava... <Bold>desaparecendo.</Bold></p>
            <p>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem.</p>
            <p>Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</p>
            <p>Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</p>
            <p>Eu ficava contando os fios no chuveiro. Sabe quando você começa a fazer isso? É quando você sabe que chegou num lugar muito feio dentro de si mesma.</p>
            <p className="font-sans font-bold text-lg text-[#1A1A1A]">Eu tinha 51 anos. E aí vem aquela coisa que ninguém avisa direito:</p>
            <p>Depois dos 45, o cabelo muda. Os hormônios mudam. O corpo inteiro muda.</p>
            <p>Ninguém te fala isso com clareza. Te falam sobre menopausa, sobre colesterol, sobre pressão. Mas ninguém te avisa que você pode acordar um dia e o seu cabelo não ser mais o mesmo.</p>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">O dia que eu quase não saí mais de casa</h3>
            <p>Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam.</p>
            <p><span className="italic">"Cláudia, que cabelo lindo o seu."</span> Eu ouvia isso a vida toda.</p>
            <p>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</p>
            <p>Comecei a usar truques de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o volume que tinha sumido.</p>
            <p>Chapéu virou meu acessório favorito. E eu odeio chapéu.</p>
            <p>Meu marido, o Marcos, perguntou uma vez: "Você tá bem? Você tá diferente." Eu disse que estava cansada do trabalho. Mas a verdade é que eu tinha vergonha.</p>
            <p>Vergonha de ter 51 anos e estar com menos cabelo do que minha mãe com 72.</p>
            <p>E ainda tinha aquela voz na cabeça: <span className="italic">"é a idade, Cláudia. É a menopausa. É o que acontece com a gente."</span> Como se depois dos 50 a gente tivesse que aceitar virar outra pessoa.</p>
            <p>Teve um domingo que eu não fui ao churrasco da família. Inventei dor de cabeça. Na verdade, eu não conseguia arranjar um penteado que me fizesse sentir presentável. Não aguentava a ideia de todo mundo olhando.</p>
            <p className="font-bold text-[#8B1A1A]">Aquele domingo foi o fundo do poço pra mim.</p>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">Os R$ 800 que eu joguei fora tentando resolver sozinha</h3>
            <p>Antes de te contar o que funcionou, preciso te contar tudo que NÃO funcionou.</p>
            <p>Comecei com o shampoo antiqueda da farmácia. O famoso, o caro, o que aparece em toda propaganda. Usei três meses. <Bold>A queda não parou.</Bold></p>
            <p>Depois fui atrás de vitaminas. Biotina, colágeno, zinco — tomei tudo junto achando que quanto mais, melhor. Fiz exame, estava tudo normal. E o cabelo continuava caindo.</p>
            <p>Uma vizinha me ensinou uma simpatia com alho. Coloquei alho amassado no couro cabeludo às 10 da noite. <Bold>Fiquei parecendo uma lasanha.</Bold> Não funcionou.</p>
            <p>Fui ao dermatologista. Ele pediu exames, olhou tudo e disse: "seus hormônios estão alterados, é natural nessa fase." E me receitou um shampoo de R$ 120. Aquele mesmo que você já conhece. Que não funciona.</p>
            <p>Cheguei a pesquisar sobre transplante capilar. Quando vi o preço, sentei e chorei ali mesmo, na frente do computador.</p>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">A mensagem que mudou tudo — e eu quase nem li</h3>
            <p>Foi minha prima Renata quem me mandou. A gente se fala bastante por Whatsapp. Quando ela me mandou uma foto do cabelo dela com a mensagem "Cláudia, você precisa ver isso", eu quase ignorei.</p>
            <p>Mas a foto me chamou atenção. O cabelo dela estava diferente. Mais cheio. Com um brilho diferente.</p>
            <p>Ela me contou que estava usando o <Bold>Kit Cavalo de Raça</Bold>. Me disse que o diferencial é que ele não trata só o sintoma — ele trata as três causas da queda ao mesmo tempo, com cinco produtos que trabalham em sistema.</p>
            <p>Ela me disse: "Cláudia, eu tenho 53. Funciona exatamente porque é feito pra fios que já passaram por mudança hormonal. É diferente de produto pra menina de 20 anos com cabelo virgem."</p>

            <div className="border-l-[6px] border-[#8B1A1A] pl-8 py-2 my-10 italic text-[19px] md:text-[21px] text-[#555]">
                "É como tentar consertar uma cadeira pregando um parafuso quando os outros três estão soltos. Não adianta." — <span className="font-bold">Renata, minha prima</span>
            </div>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">O que aconteceu semana a semana</h3>

            <div className="my-10 border border-[#DDD] rounded overflow-hidden font-sans text-sm md:text-base">
                {[
                    { label: "1ª Lavagem", text: "Couro cabeludo leve. Limpo de um jeito que eu não lembrava de ter sentido." },
                    { label: "3º Dia", text: "Olhei pro ralo no chuveiro. Estava quase limpo. Fiquei parada olhando." },
                    { label: "1ª Semana", text: "A queda diminuiu de um jeito que eu não via há dois anos. Chorei de alívio." },
                    { label: "3 Semanas", text: "Fios novos na frente. Bebê, sabe? Curtos demais pra deitar. Nascendo." },
                    { label: "1º Mês", text: "Minha cabeleireira perguntou: 'Cláudia, o que você fez? Seu cabelo tá diferente.'" },
                    { label: "3 Meses", text: "Meu cabelo voltou. O volume, o brilho, a vida. Melhor do que antes." }
                ].map((item, idx) => (
                    <div key={idx} className={`flex border-b border-[#DDD] last:border-0`}>
                        <div className="w-1/3 md:w-1/4 bg-[#8B1A1A] text-white p-4 font-bold flex items-center">{item.label}</div>
                        <div className="w-2/3 md:w-3/4 p-4 bg-white text-[#444]">{item.text}</div>
                    </div>
                ))}
            </div>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">Três meses depois: eu não me reconhecia — do jeito bom</h3>
            <p>Hoje meu cabelo voltou. Não do jeito que estava antes da queda começar. <Bold>Melhor.</Bold></p>
            <p>O volume voltou. A queda está em zero. Os fios novos cresceram e já se misturaram com o restante.</p>
            <p>No domingo passado, eu fui ao churrasco da família. Arrumei o cabelo solto. Botei um brinco bonito. Quando minha cunhada disse "Cláudia, você tá ótima, o que aconteceu?", eu consegui responder sem travar: "Tô bem, obrigada."</p>
            <p>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade. <Bold>É identidade.</Bold></p>

            <SectionDivider />

            <h3 className="text-2xl font-bold text-[#1A1A1A] mb-6 font-sans">Não sou só eu — leia o que outras mulheres estão dizendo</h3>
            
            <TestimonialBox 
                text="Achei que era tarde demais pra mim. Meu cabelo estava caindo há dois anos e o dermatologista disse que era da menopausa, que eu tinha que aceitar. Na segunda semana já estava diferente." 
                author="Maria Luíza, 54 anos, Goiânia, GO" 
            />
            <TestimonialBox 
                text="Minha autoestima estava no chão. Com um mês de kit, minha filha me perguntou o que eu tinha feito no cabelo. Quase chorei ali na frente dela." 
                author="Sônia Aparecida, 49 anos, Belo Horizonte, MG" 
            />
            <TestimonialBox 
                text="Já tinha gastado mais de R$ 600 em produtos que não funcionaram. A queda parou na primeira semana. Agora estou vendo os fios novos nascendo." 
                author="Rosângela, 52 anos, Recife, PE" 
            />

            <SectionDivider />

            <div className="bg-[#FDF5F5] border-y-2 border-[#8B1A1A] p-8 my-10 font-sans">
                <h4 className="font-bold text-xl mb-6">O que você recebe no Kit Cavalo de Raça:</h4>
                <ul className="space-y-4 text-[16px]">
                    <li><Bold>1. Shampoo Reconstrutor</Bold> — ancora a raiz. O fio para de soltar.</li>
                    <li><Bold>2. Máscara Anti-Queda Intensiva</Bold> — reconstrói a fibra. O fio fica forte.</li>
                    <li><Bold>3. Condicionador Fortificante</Bold> — sela as cutículas. O fio para de quebrar.</li>
                    <li><Bold>4. Leave-in Protetor</Bold> — protege o fio reconstruído no dia a dia.</li>
                    <li><Bold>5. Tônico Capilar Antiqueda</Bold> — age no folículo. Estimula os fios novos a nascer.</li>
                </ul>

                <div className="mt-10 pt-6 border-t border-[#EEDDDD] text-center">
                    <p className="text-gray-400 line-through text-lg">De R$ 227,00</p>
                    <p className="text-3xl font-bold text-[#8B1A1A] mb-2">Por R$ 159,90 + Frete Grátis</p>
                    <p className="text-xs font-bold uppercase tracking-widest text-green-600">Aprovado pela ANVISA | Garantia de Resultado</p>
                </div>
            </div>

            <CTAButton label=">> CLIQUE AQUI — Ver Kit com Desconto na elabela.store <<" />

            <div className="mt-16 pt-8 border-t border-gray-100 italic text-[#666]">
                <p>Com amor,</p>
                <p className="font-bold text-[#8B1A1A] text-xl not-italic">Cláudia Mendes</p>
                <p className="text-sm">Brasília, DF</p>
            </div>

            <SectionDivider />

            {/* Comentários */}
            <div className="mt-10 font-sans">
                <h4 className="font-bold text-lg mb-6 border-b border-gray-100 pb-2">O que as leitoras estão dizendo:</h4>
                <div className="space-y-1">
                    <CommentItem 
                        name="Fatima Oliveira" time="3 horas atrás" 
                        text="Gente, eu ERA cética. Já tinha tentado o shampoo Pantogar, a biotina, óleo de rícino... nada funcionou. Comprei o Cavalo de Raça sem muita esperança. *Na segunda semana, o ralo do chuveiro estava visivelmente mais limpo.* Não consigo acreditar." 
                    />
                    <CommentItem 
                        name="Rosimeire Santos" time="1 dia atrás" 
                        text="Comprei numa terça-feira à noite e chegou na quinta de manhã! Vim logo comentar porque achei que ia demorar muito mais. Embalagem muito caprichada. Já usei na primeira lavagem e o cheiro é maravilhoso." 
                    />
                    <CommentItem 
                        name="Cleide Aparecida" time="2 dias atrás" 
                        text="Estou na menopausa há 2 anos e meu cabelo caiu muito. Com 3 semanas de kit, a queda reduziu de um jeito que eu não via há muito tempo. 55 anos e meu cabelo está reagindo sim." 
                    />
                    <CommentItem 
                        name="Adriana Melo" time="3 dias atrás" 
                        text="Fiquei em dúvida no preço, mas aí fiz a conta: são 5 produtos profissionais para 3 meses de tratamento. Dá menos de R$ 2 por dia. Eu gastava mais do que isso todo mês em shampoo e vitamina que não funcionavam." 
                    />
                    <CommentItem 
                        name="Simone Carvalho" time="4 dias atrás" 
                        text="Eu me preocupei que ia ser complicado, mas é exatamente igual ao seu banho normal. Você só troca os produtos. Simples demais." 
                    />
                    <CommentItem 
                        name="Vera Lucia Teixeira" time="5 dias atrás" 
                        text="Minha dúvida era se funcionava para cabelo pintado. Confirmaram que sim. Usei e a cor ficou até mais viva. O shampoo não desbota." 
                    />
                    <CommentItem 
                        name="Patricia Drummond" time="6 dias atrás" 
                        text="Fiz uma pergunta sobre queda pós-parto e me responderam em menos de 30 minutos. Isso me deu confiança pra fechar. Chegou em 2 dias." 
                    />
                    <CommentItem 
                        name="Geralda Ferreira" time="1 semana atrás" 
                        text="48 anos e chorava toda manhã na frente do travesseiro cheio de cabelo. Comecei o kit há 6 semanas. Minha filha notou a diferença. Isso valeu tudo." 
                    />
                    <CommentItem 
                        name="Marcia Gomes" time="1 semana atrás" 
                        text="Moro no interior do Pará e fiquei com medo de demorar. Chegou em 4 dias, embalado com plástico bolha, todos os frascos com lacre intacto." 
                        replies={[{
                            name: "Cláudia Mendes",
                            time: "6 dias atrás",
                            text: "Márcia, que alegria que chegou bem! Moro aqui em Brasília e também tive boa experiência com a entrega. 💛"
                        }]}
                    />
                    <CommentItem 
                        name="Neusa Rodrigues" time="2 semanas atrás" 
                        text="Menopausa precoce aos 48. Tentei 3 marcas diferentes, nenhuma funcionou. Uma amiga de 57 anos me indicou esse kit e em um mês minha queda reduziu mais de 70%." 
                    />
                    <CommentItem 
                        name="Luciana Braga" time="3 semanas atrás" 
                        text="Fui à dermatologista e ela me orçou um tratamento de R$ 1.800. Não tinha esse dinheiro. Comprei o kit. Dois meses depois ela ficou surpresa com o resultado." 
                    />
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-100 text-[12px] text-gray-400 text-center font-sans space-y-4">
                <p>Este post pode conter links de afiliados. Resultados podem variar de pessoa para pessoa. Produto aprovado e testado pela ANVISA.</p>
                <p>© 2024 Meu Diário de Saúde e Beleza. Todos os direitos reservados.</p>
            </footer>

        </div>
      </article>
    </div>
  );
}