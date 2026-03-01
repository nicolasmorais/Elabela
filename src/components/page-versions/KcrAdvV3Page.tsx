"use client";

import React, { ReactNode } from 'react';
import { PageTracker } from "./PageTracker";
import Link from 'next/link';

// Componentes auxiliares com sintaxe de função padrão para evitar erros de parser
function Divider() {
  return <div className="text-center text-[#BBBBBB] text-2xl my-10 font-serif">· · ·</div>;
}

function Bold({ children }: { children: ReactNode }) {
  return <strong className="font-bold text-[#1A1A1A]">{children}</strong>;
}

function CTAButton() {
  return (
    <div className="flex justify-center my-8">
      <Link href="https://seguro.elabela.store/r/RC8ASYUL88" className="w-full">
        <button className="w-full bg-[#8B1A1A] text-white font-bold py-[18px] px-[36px] rounded-[4px] text-[18px] md:text-[18px] uppercase tracking-tight hover:brightness-110 transition-all text-center">
          {" >> CLIQUE AQUI — Ver Kit com Desconto na elabela.store << "}
        </button>
      </Link>
    </div>
  );
}

interface CommentProps {
  name: string;
  time: string;
  text: string;
  avatar?: string;
  replies?: Array<{ name: string; time: string; text: string; avatar?: string }>;
}

function Comment({ name, time, text, avatar, replies = [] }: CommentProps) {
  return (
    <div className="flex gap-3 py-4 border-b border-gray-100 last:border-0">
      <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0 overflow-hidden">
          <img src={avatar || `https://ui-avatars.com/api/?name=${name}&background=8B1A1A&color=fff`} alt={name} />
      </div>
      <div className="space-y-1">
        <p className="text-[#8B1A1A] font-bold text-[15px]">{name}</p>
        <p className="text-[#333333] text-[15px] leading-[1.7]">{text}</p>
        <div className="flex items-center gap-3 text-[13px] text-[#AAAAAA] pt-1">
          <span className="font-bold cursor-pointer hover:underline">Curtir</span>
          <span className="font-bold cursor-pointer hover:underline">Responder</span>
          <span>· {time}</span>
        </div>
        {replies.map((reply, i) => (
          <div key={i} className="mt-4 flex gap-3 border-l-2 border-gray-100 pl-4">
             <div className="w-10 h-10 rounded-full bg-gray-200 shrink-0 overflow-hidden">
                  <img src={reply.avatar || `https://ui-avatars.com/api/?name=${reply.name}&background=8B1A1A&color=fff`} alt={reply.name} />
              </div>
              <div className="space-y-1">
                  <p className="text-[#8B1A1A] font-bold text-[15px]">{reply.name}</p>
                  <p className="text-[#333333] text-[15px] leading-[1.7]">{reply.text}</p>
                  <div className="flex items-center gap-3 text-[13px] text-[#AAAAAA] pt-1">
                      <span className="font-bold cursor-pointer hover:underline">Curtir</span>
                      <span className="font-bold cursor-pointer hover:underline">Responder</span>
                      <span>· {reply.time}</span>
                  </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function KcrAdvV3Page() {
  const customStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
    
    .kcr-page-container {
        font-family: Georgia, 'Times New Roman', Times, serif !important;
    }

    @media (max-width: 768px) {
        .kcr-article {
            padding-left: 16px;
            padding-right: 16px;
        }
    }
  `;

  return (
    <div className="bg-white min-h-screen kcr-page-container">
      <PageTracker contentId="adv-kcr-v3" />
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      
      <article className="max-w-[720px] mx-auto px-4 md:px-0 py-8 text-[#222222] text-[15px] md:text-[16px] leading-[1.85] text-left antialiased kcr-article">
        
        <div className="text-[13px] text-[#999999] border-b border-gray-100 pb-4 mb-8">
            Meu Diário de Saúde e Beleza  |  Por Cláudia Mendes<br />
            Brasília, DF  |  Leitura: 7 minutos
        </div>

        <h1 className="font-bold text-[26px] md:text-[36px] text-[#1A1A1A] leading-[1.2] mb-4">
            Eu chorava toda vez que olhava para o ralo do meu chuveiro.
        </h1>
        <h2 className="font-bold text-[22px] md:text-[28px] text-[#8B1A1A] leading-[1.2] mb-8">
            Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.
        </h2>

        <div className="space-y-[22px]">
            <p>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</p>
            <p>Durante quase dois anos, eu evitei espelhos.</p>
            <p>Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</p>
            <p>Porque toda vez que eu me via, o que eu enxergava não era eu.</p>
            <p>Era uma versão de mim que estava... desaparecendo.</p>
            <p>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem.</p>
            <p>Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</p>
            <p>Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</p>
            
            <p className="text-[18px] text-[#1A1A1A] font-bold">Eu tinha 51 anos. E aí vem aquela coisa que ninguém avisa direito:</p>
            
            <p>Depois dos 45, o cabelo muda. Os hormônios mudam. O corpo inteiro muda.</p>
            <p>Ninguém te fala isso com clareza. Te falam sobre menopausa, sobre colesterol, sobre pressão. Mas ninguém te avisa que você pode acordar um dia e o seu cabelo não ser mais o mesmo.</p>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">O dia que eu quase não saí mais de casa</h2>
            <p>Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam.</p>
            <p>"Cláudia, que cabelo lindo o seu." Eu ouvia isso a vida toda.</p>
            <p>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</p>
            <p>Comecei a usar truques de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o volume que tinha sumido.</p>
            <p>E ainda tinha aquela voz na cabeça: <Bold>"é a idade, Cláudia. É a menopausa. É o que acontece com a gente."</Bold></p>
            <p className="text-[18px] text-[#1A1A1A] font-bold">Aquele domingo foi o fundo do poço pra mim.</p>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">Os R$ 800 que eu joguei fora tentando resolver sozinha</h2>
            <p>Antes de te contar o que funcionou, preciso te contar tudo que NÃO funcionou.</p>
            <p>Comecei com o shampoo antiqueda da farmácia. O famoso, o caro, o que aparece em toda propaganda. Usei três meses.</p>
            <p className="text-[18px] text-[#1A1A1A] font-bold">A queda não parou.</p>
            <p>Depois fui atrás de vitaminas. Biotina, colágeno, zinco — tomei tudo junto achando que quanto mais, melhor.</p>
            <p>O pior não era gastar dinheiro à toa. O pior era a esperança que eu colocava em cada coisa nova — e o tombo quando não funcionava.</p>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">A mensagem que mudou tudo — e eu quase nem li</h2>
            <p>Foi minha prima Renata quem me mandou.</p>
            <p>Ela me contou que estava usando o Kit Cavalo de Raça. Me disse que o diferencial é que ele não trata só o sintoma — ele trata as três causas da queda ao mesmo tempo.</p>

            <div className="border-l-[5px] border-[#8B1A1A] pl-6 py-2 my-8">
                <p className="text-[19px] italic font-bold text-[#8B1A1A]">
                    "É como tentar consertar uma cadeira pregando um parafuso quando os outros três estão soltos. Não adianta." — Renata, minha prima
                </p>
            </div>

            <p>E o tônico foi o que mais me surpreendeu depois. Você aplica direto no couro cabeludo e ele age dentro do folículo — onde o fio nasce.</p>
            <p className="text-[18px] text-[#1A1A1A] font-bold">O tônico cuida do fio que ainda vai nascer.</p>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">O que aconteceu semana a semana</h2>

            <div className="my-8 overflow-hidden border border-[#8B1A1A] rounded-sm">
                <div className="flex flex-col md:flex-row border-b border-[#8B1A1A] last:border-0">
                    <div className="md:w-1/3 bg-[#8B1A1A] text-white p-4 font-bold flex items-center justify-center text-center">1ª Lavagem</div>
                    <div className="md:w-2/3 bg-[#FDF5F5] text-[#222222] p-4">Couro cabeludo leve. Limpo de um jeito que eu não lembrava de ter sentido.</div>
                </div>
                <div className="flex flex-col md:flex-row border-b border-[#8B1A1A] last:border-0">
                    <div className="md:w-1/3 bg-[#8B1A1A] text-white p-4 font-bold flex items-center justify-center text-center">3º Dia</div>
                    <div className="md:w-2/3 bg-[#FDF5F5] text-[#222222] p-4">Olhei pro ralo no chuveiro. Estava quase limpo. Fiquei parada olhando.</div>
                </div>
                <div className="flex flex-col md:flex-row border-b border-[#8B1A1A] last:border-0">
                    <div className="md:w-1/3 bg-[#8B1A1A] text-white p-4 font-bold flex items-center justify-center text-center">1ª Semana</div>
                    <div className="md:w-2/3 bg-[#FDF5F5] text-[#222222] p-4">A queda diminuiu de um jeito que eu não via há dois anos. Chorei de alívio.</div>
                </div>
                <div className="flex flex-col md:flex-row border-b border-[#8B1A1A] last:border-0">
                    <div className="md:w-1/3 bg-[#8B1A1A] text-white p-4 font-bold flex items-center justify-center text-center">1º Mês</div>
                    <div className="md:w-2/3 bg-[#FDF5F5] text-[#222222] p-4">Minha cabeleireira perguntou: "Cláudia, o que você fez? Seu cabelo tá diferente."</div>
                </div>
            </div>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">Três meses depois: eu não me reconhecia — do jeito bom</h2>
            <p>Hoje meu cabelo voltou. Não do jeito que estava antes da queda começar. <Bold>Melhor.</Bold></p>
            <p>O volume voltou. A queda está em zero. Os fios novos cresceram e já se misturaram com o restante.</p>
            <p className="text-[18px] text-[#1A1A1A] font-bold">Eu não me conformei. E você também não precisa.</p>
            <p>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade. É identidade.</p>

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">Não sou só eu — leia o que outras mulheres estão dizendo</h2>
            
            {[
                { n: "Maria Luíza, 54 anos, Goiânia, GO", t: "Achei que era tarde demais pra mim. Meu cabelo estava caindo há dois anos e o dermatologista disse que era da menopausa. Comprei o kit sem muita esperança. Na segunda semana já estava diferente." },
                { n: "Sônia Aparecida, 49 anos, Belo Horizonte, MG", t: "Minha autoestima estava no chão. Com um mês de kit, minha filha me perguntou o que eu tinha feito no cabelo. Quase chorei ali na frente dela." }
            ].map((dep, i) => (
                <div key={i} className="border-l-4 border-[#8B1A1A] bg-[#F9F9F9] p-6 my-6">
                    <p className="italic mb-2">"{dep.t}"</p>
                    <p className="font-bold text-[#8B1A1A] text-[14px]">-- {dep.n}</p>
                </div>
            ))}

            <Divider />

            <h2 className="font-bold text-[21px] md:text-[26px] text-[#8B1A1A] mb-4">O que você recebe no Kit Cavalo de Raça:</h2>
            
            <div className="bg-[#FDF5F5] border-y-[3px] border-[#8B1A1A] p-6 my-8">
                <ol className="list-decimal pl-5 space-y-2">
                    <li><Bold>Shampoo Reconstrutor</Bold> — ancora a raiz.</li>
                    <li><Bold>Máscara Anti-Queda Intensiva</Bold> — reconstrói a fibra.</li>
                    <li><Bold>Condicionador Fortificante</Bold> — sela as cutículas.</li>
                    <li><Bold>Leave-in Protetor</Bold> — protege o fio reconstruído.</li>
                    <li><Bold>Tônico Capilar Antiqueda</Bold> — age no folículo.</li>
                </ol>
            </div>

            <div className="text-center py-6">
                <p className="text-[20px] line-through text-gray-400">De R$ 227,00</p>
                <p className="text-[32px] font-bold text-[#8B1A1A]">por R$ 159,90 + Frete Grátis</p>
                <p className="text-sm font-bold uppercase tracking-widest text-green-600 mt-2">Aprovado pela ANVISA | Garantia de Resultado</p>
            </div>

            <CTAButton />

            <div className="pt-10">
                <p className="italic">Com amor,</p>
                <p className="font-bold text-[#8B1A1A] text-xl">Cláudia Mendes</p>
                <p className="text-sm text-gray-500">Brasília, DF</p>
            </div>

            <Divider />

            <div className="pt-8 border-t border-gray-100">
                <p className="font-bold text-lg mb-6 text-[#1A1A1A]">Comentários recentes</p>
                <div className="space-y-2">
                    <Comment 
                        name="Fatima Oliveira" 
                        time="3 horas atrás" 
                        text="Gente, eu ERA cética. Já tinha tentado tudo. Comprei o Cavalo de Raça sem muita esperança. Na segunda semana, o ralo do chuveiro estava visivelmente mais limpo." 
                    />
                    <Comment 
                        name="Rosimeire Santos" 
                        time="1 dia atrás" 
                        text="Comprei numa terça-feira à noite e chegou na quinta de manhã! Vim logo comentar porque achei que ia demorar muito mais." 
                    />
                    <Comment 
                        name="Marcia Gomes" 
                        time="1 semana atrás" 
                        text="Moro no interior do Pará e fiquei com medo de demorar. Chegou em 4 dias. Profissional demais." 
                        replies={[{
                            name: "Cláudia Mendes",
                            time: "6 dias atrás",
                            text: "Márcia, que alegria que chegou bem! Moro aqui em Brasília e também tive boa experiência. 💛"
                        }]}
                    />
                </div>
            </div>

            <footer className="mt-20 pt-10 border-t border-gray-100 text-[12px] text-gray-400 text-center space-y-4">
                <p>Este post pode conter links de afiliados. Resultados podem variar de pessoa para pessoa.</p>
                <p>© 2024 Meu Diário de Saúde e Beleza. Todos os direitos reservados.</p>
            </footer>

        </div>
      </article>
    </div>
  );
}