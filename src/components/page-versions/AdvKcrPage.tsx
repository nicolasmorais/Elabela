"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { 
  Clock, 
  Calendar,
  Share2,
  Facebook,
  Instagram
} from 'lucide-react';
import Link from 'next/link';

export function AdvKcrPage() {
  const [city, setCity] = useState('');

  useEffect(() => {
    fetch('https://ipapi.co/json/')
      .then(res => res.json())
      .then(data => { if (data.city) setCity(data.city); })
      .catch(() => {});
  }, []);

  const checkoutUrl = "https://seguro.elabela.store/r/M1MW6QA99S";

  return (
    <>
      <PageTracker contentId="advkcr" />
      <div className="bg-[#fcfcfc] text-slate-800 font-merriweather antialiased min-h-screen">
        
        {/* NAVEGAÇÃO ESTILO BLOG */}
        <nav className="bg-white border-b border-slate-100 py-6 px-6 sticky top-0 z-50 shadow-sm font-sans">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
                <span className="text-xl font-serif italic font-bold tracking-tighter text-pink-600">Meu Diário de Saúde e Beleza</span>
                <div className="hidden md:flex gap-6 text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span className="hover:text-pink-500 cursor-pointer">Início</span>
                    <span className="hover:text-pink-500 cursor-pointer">Sobre Mim</span>
                    <span className="hover:text-pink-500 cursor-pointer">Contato</span>
                </div>
                <Share2 size={20} className="text-slate-300 md:hidden" />
            </div>
        </nav>

        <main className="max-w-3xl mx-auto px-6 py-10 md:py-16 space-y-10">
          
          {/* CABEÇALHO DO POST */}
          <header className="space-y-6 font-sans">
            <div className="flex items-center gap-4 text-slate-400 text-xs font-medium border-b border-slate-100 pb-4">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> 14 de junho de 2025</span>
                <span className="hidden sm:inline opacity-30">|</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> 6 min de leitura</span>
                <span className="hidden sm:inline opacity-30">|</span>
                <span className="text-pink-600 font-bold uppercase tracking-widest">{city || 'Brasília, DF'}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-black leading-[1.1] text-slate-900 tracking-tight">
                Eu chorava toda vez que olhava para o ralo do meu chuveiro. Hoje meu cabelo voltou a crescer — e eu finalmente me reconheço no espelho.
            </h1>
            
            <div className="flex items-center gap-3 pt-2">
                <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">CM</div>
                <div>
                    <p className="text-sm font-bold text-slate-900 leading-none">Cláudia Mendes</p>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest mt-1">Especialista em Bem-Estar Feminino</p>
                </div>
            </div>
          </header>

          {/* CONTEÚDO DO TEXTO */}
          <article className="max-w-none space-y-8 text-xl leading-relaxed text-slate-700">
            <p>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</p>
            <p>Durante quase dois anos, eu evitei espelhos. Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</p>
            
            <img 
              src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771643127487-unnamed.jpg" 
              alt="Minha jornada com a queda de cabelo" 
              className="w-full h-auto rounded-lg shadow-sm"
            />

            <p>Porque toda vez que eu me via, o que eu enxergava não era eu. Era uma version de mim que estava... desaparecendo.</p>
            <p>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem. Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã. Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</p>
            <p>Eu ficava contando os fios. Sabe quando você começa a fazer isso? Quando você separa o cabelo no chuveiro pra contar quantos caíram? É quando você sabe que chegou num lugar muito feio dentro de si mesma.</p>
            
            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">O dia que eu quase não saí mais de casa</h2>
            <p>Eu tenho 47 anos. Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam quando me encontravam.</p>
            <p>"Cláudia, que cabelo lindo o seu." Eu ouvia isso a vida toda.</p>
            <p>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</p>
            <p>Eu comecei a usar técnicas de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o quanto tinha diminuído no volume. Chapéu virou meu acessório favorito — e eu odeio chapéu.</p>
            <p>Meu marido, o Marcos, perguntou uma vez: "Você tá bem? Você tá diferente."</p>
            <p>Eu disse que estava cansada do trabalho.</p>
            <p>Mas a verdade é que eu tinha vergonha. Vergonha de ter 47 anos e estar com menos cabelo do que minha mãe com 70. Vergonha de sentar no salão e ver a cabeleireira fazer aquela cara de "nossa, você perdeu muito". Vergonha de mim mesma.</p>
            <p>Teve um domingo que eu não fui ao churrasco da família. Inventei dor de cabeça. Na verdade, eu não conseguia arranjar um penteado que me fizesse sentir presentável. E eu não aguentava a ideia de todo mundo olhando.</p>
            <p>Aquele domingo foi o fundo do poço pra mim.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Os R$ 800 que eu joguei fora tentando resolver sozinha</h2>
            <p>Antes de te contar o que funcionou, preciso te contar tudo que NÃO funcionou. Porque eu sei que você provavelmente já tentou várias dessas coisas também.</p>
            <p>Comecei com o shampoo antiqueda da farmácia. O famoso, o caro, o que aparece em toda propaganda. Usei três meses. A queda não parou.</p>
            <p>Depois fui atrás de vitaminas. Biotina, colágeno, zinco — eu tomei tudo junto num ponto, achando que quanto mais, melhor. Fiz exame, estava tudo normal nos resultados. E o cabelo continuava caindo.</p>
            <p>Uma vizinha me ensinou uma simpatia com alho. Eu coloquei alho amassado no couro cabeludo às 10 da noite uma quarta-feira. Fiquei parecendo uma lasanha. Não funcionou.</p>
            <p>Tentei óleo de rícino, óleo de argan, esfoliação do couro cabeludo, massagem capilar todo dia. Alguns ajudavam um pouco, mas nada mudava de verdade.</p>
            <p>Cheguei a pesquisar sobre transplante capilar. Quando vi o preço, sentei e chorei ali mesmo, na frente do computador.</p>
            <p>O pior não era gastar dinheiro à toa. O pior era a esperança que eu colocava em cada coisa nova — e o tombo quando não funcionava. Cada produto que não dava resultado era mais uma prova de que talvez não tivesse solução.</p>
            <p>Eu comecei a acreditar que esse era o meu destino. Que eu ia ficar assim.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">A mensagem que mudou tudo — e eu quase nem li</h2>
            <p>Foi minha prima Renata quem me mandou. Quando ela me mandou uma foto do cabelo dela com a mensagem "Cláudia, você precisa ver isso", eu quase ignorei.</p>
            <p>Mais a foto me chamou atenção. O cabelo dela estava diferente. Mais cheio. Com um brilho diferente. E eu sabia que a Renata tinha passado pelo mesmo problema que eu — ela tinha até me contado, meses antes, que estava muito mal com a queda.</p>
            <p>Liguei pra ela na hora.</p>
            <p>Ela me contou que tinha começado a usar um kit chamado Cavalo de Raça, da Bio Instinto. Me disse que o diferencial desse kit é que ele não trata só o sintoma — ele trata as três causas principais da queda ao mesmo tempo.</p>
            <p>Ela me explicou do jeito dela, simples mesmo: "Renata, o cabelo cai porque a raiz fraqueja, porque o fio quebra no meio, e porque as cutículas ficam abertas e ele vai embora com qualquer coisa. Esse kit age nas três coisas ao mesmo tempo. Um produto não adianta nada sozinho."</p>
            <p>Aquilo fez sentido pra mim de um jeito que nenhum outro produto tinha feito antes.</p>
            <p>Todos os outros produtos que eu tinha tentado atacavam um problema só. O shampoo antiqueda cuidava da raiz, mas o fio continuava fraco. A vitamina nutria por dentro, mas por fora continuava quebrando. Faltava o sistema completo.</p>
            <p className="italic">"É como tentar consertar uma cadeira só pregando um parafuso quando os outros três estão soltos. Não adianta."— Renata, minha prima, que me salvou sem saber</p>
            <p>Pedi o link pra ela. Comprei naquela mesma noite.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">O que aconteceu na primeira semana (e eu não esperava)</h2>
            <p>Eu não vou mentir pra você e dizer que acreditei 100%. Depois de tudo que eu tinha tentado, minha esperança estava muito guardada. Eu comprei quase por desespero, mais do que por fé.</p>
            <p>Mas na primeira lavagem, eu senti uma coisa diferente. O couro cabeludo ficou leve. Não aquela sensação de ressecado, nem de oleoso. Leve. Limpo de um jeito que eu não lembrava de ter sentido.</p>
            <p>No terceiro dia, eu estava no chuveiro e reparei: o ralo estava quase limpo. Fechei o chuveiro. Fiquei parada olhando pro ralo por um bom tempo. Eu pensei que tinha sido coincidência. Mas no quarto dia, o mesmo. No quinto dia, o mesmo. Na escova pela manhã, menos fios. No travesseiro, quase nada.</p>
            <p>Na primeira semana, a queda tinha diminuído de um jeito que eu não via há dois anos.</p>
            <p>Chorei. No banheiro mesmo, de emoção. Aquelas lágrimas diferentes — não de tristeza, mas de alívio.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">No primeiro mês, minha cabeleireira perguntou o que eu tinha feito</h2>
            <p>Eu continuei usando o kit completo: o shampoo reconstrutor todo dia, a máscara intensiva duas vezes na semana, o condicionador e o leave-in sempre. Do jeito que mandava.</p>
            <p>Com três semanas, eu percebi uns fios pequenos na frente. Bebê, sabe? Aqueles fios novos que nascem e ficam em pezinho porque são curtos demais pra deitar.</p>
            <p>No primeiro mês completo, fui ao salão pela primeira vez em meses sem querer morrer de vergonha.</p>
            <p>A minha cabeleireira, a Patrícia, passou os dedos no meu cabelo e disse: "Cláudia, o que você fez? Seu cabelo tá diferente. Mais encorpado."</p>
            <p>Eu sorri tanto que quase chorei ali na cadeira.</p>
            <p>Essa frase, vinda de uma profissional que cuida do meu cabelo há quase oito anos, valeu mais do que qualquer resultado de exame.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Três meses depois: eu não me reconhecia — do jeito bom</h2>
            <p>Hoje, com três meses de uso, meu cabelo voltou. Não do jeito que estava antes da queda começar. Melhor.</p>
            <p>O volume voltou. A queda está em zero — aqueles fios normais que todo mundo perde, nada além disso. Os fios novos cresceram e já se misturaram com o restante. Tem uma vida no meu cabelo que eu não via há anos.</p>
            <p>Mas o que mudou mais foi outra coisa.</p>
            <p>No domingo passado, eu fui ao churrasco da família. Arrumei o cabelo solto. Botei um brinco bonito. E quando minha cunhada disse "Cláudia, você tá ótima, o que aconteceu?", eu consegui responder sem travar: "Tô bem, obrigada."</p>
            <p>Eu tô bem. Faz tanto tempo que eu não podia dizer isso de verdade.</p>
            <p>O Marcos me olhou diferente naquele domingo. A gente conversou mais, riu mais. Coisas que a gente tinha parado de fazer sem nem perceber, porque minha insegurança tinha criado uma distância.</p>
            <p>Cabelo é vaidade? Pode ser. Mas quando você está perdendo, você entende que não é só vaidade. É identidade. É como você se apresenta pro mundo. É como você se sente digna de ocupar espaço.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">Por que estou escrevendo isso aqui hoje</h2>
            <p>Desde que eu postei uma foto nova no meu perfil (a primeira foto com o cabelo solto em mais de um ano), recebi dezenas de mensagens perguntando o que eu tinha feito.</p>
            <p>Amigas, conhecidas, mulheres que eu nem sei de onde me conhecem — todas com a mesma história. A queda, a vergonha, as tentativas que não funcionaram, o desânimo.</p>
            <p>Eu respondi todas individualmente. Mas chegou um ponto que eu não conseguia mais uma por uma, então resolvi escrever aqui de vez.</p>
            <p>Entrei em contato com a Bio Instinto, fabricante do Kit Cavalo de Raça, e expliquei que muitas leitoras do meu blog estavam perguntando sobre o produto. Eles foram muito receptivos e me passaram um link especial com um desconto exclusivo pra quem vier daqui.</p>
            <p>Não é indicação paga. Não tenho interesse comercial nisso. Só quero que as mulheres que me perguntaram tenham acesso ao mesmo tratamento que mudou a minha vida — com o melhor preço possível.</p>
            <p>O Kit Cavalo de Raça inclui:</p>
            <ul className="list-disc pl-6 space-y-2">
                <li>Shampoo Reconstrutor — ancora a raiz (o fio para de soltar)</li>
                <li>Máscara Anti-Queda Intensiva — reconstrói a fibra (fio fica forte)</li>
                <li>Condicionador Fortificante — sela as cutículas (fio para de quebrar)</li>
                <li>Leave-in Protetor — protege o fio reconstruído no dia a dia</li>
            </ul>

            {/* SEÇÃO DESIGN SOLICITADO NA IMAGEM */}
            <div className="space-y-8 pt-6">
                <p>Eles comprovam 87% menos queda em 7 dias, e têm garantia de 7 dias com dinheiro de volta se você não gostar. Ou seja, você não tem nada a perder.</p>
                
                <p>O valor normal é R$ 187,00 — mas pelo link que consegui, está saindo por R$ 147,00 no Pix (e parcela em até 12x no cartão). Confesso que quando vi o preço, lembrei dos R$ 800 que gastei em outras coisas que não funcionaram. Uma fração disso, com resultado de verdade.</p>

                <div className="text-center space-y-4">
                    <p className="text-[#8B1A1A] font-black text-2xl uppercase tracking-tight">ATENÇÃO: O desconto é por tempo limitado.</p>
                    <p className="text-slate-600 font-medium">Não sei até quando o link fica ativo com esse preço especial. Se você está lendo isso hoje, aproveita agora.</p>
                </div>

                <div className="pt-4 flex flex-col items-center">
                    <Link href={checkoutUrl} className="w-full">
                        <button className="w-full bg-[#8B1A1A] hover:bg-[#701515] text-white font-black text-xl md:text-2xl py-6 px-4 rounded-sm shadow-md transition-all uppercase tracking-tighter leading-tight flex items-center justify-center gap-2">
                            <span>{">>"}</span>
                            <span>CLIQUE AQUI PARA VER O KIT CAVALO DE RAÇA COM DESCONTO ESPECIAL</span>
                            <span>{"<<"}</span>
                        </button>
                    </Link>
                    <p className="mt-6 text-slate-400 text-sm italic font-sans">(Verificar se o desconto ainda está disponível no site oficial)</p>
                </div>
            </div>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <p>Se você chegou até aqui, é porque você também está cansada. Cansada de fingir que está tudo bem, de esconder o couro cabeludo, de evitar olhar pro espelho.</p>
            <p>Eu entendo. Eu estive exatamente aí. Só te peço uma coisa: não desiste de você mesma. Eu quase desisti — e ia ser o maior erro da minha vida.</p>

            <div className="pt-10 border-t border-slate-100 font-sans">
                <p className="text-slate-900 font-serif font-black italic text-2xl">Com amor,</p>
                <p className="text-pink-600 font-bold text-xl mt-2">Cláudia Mendes</p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{city || 'Brasília, DF'}</p>
            </div>
          </article>

          {/* FOOTER DO BLOG */}
          <footer className="pt-20 pb-10 space-y-10 border-t border-slate-100 font-sans">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                <div className="flex gap-4 text-slate-900">
                    <Facebook size={20} /> <Instagram size={20} /> <Share2 size={20} />
                </div>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    <span>Sobre o Blog</span>
                    <span>Políticas</span>
                    <span>Contato</span>
                </div>
            </div>

            <div className="bg-slate-100 p-6 rounded-2xl text-[10px] text-slate-400 leading-relaxed text-justify italic">
                Este post pode conter links de afiliados. Isso significa que posso receber uma comissão se você comprar através do link, sem custo adicional para você. Só recomendo produtos que usei e acredito de verdade. Resultados podem variar de pessoa para pessoa.
            </div>
            
            <p className="text-center text-[10px] text-slate-300 font-bold uppercase tracking-[0.2em]">
                © 2024 Meu Diário de Saúde e Beleza. Todos os direitos reservados.
            </p>
          </footer>

        </main>
      </div>
    </>
  );
}