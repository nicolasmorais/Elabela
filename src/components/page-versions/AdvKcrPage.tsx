"use client";

import React, { useState, useEffect } from 'react';
import { PageTracker } from "./PageTracker";
import { 
  CheckCircle2, 
  ShoppingBag, 
  ArrowRight, 
  Star, 
  Heart, 
  Clock, 
  Calendar,
  Zap,
  ShieldCheck,
  Facebook,
  Instagram,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      <div className="bg-[#fcfcfc] text-slate-800 font-sans antialiased min-h-screen">
        
        {/* NAVEGAÇÃO ESTILO BLOG */}
        <nav className="bg-white border-b border-slate-100 py-6 px-6 sticky top-0 z-50 shadow-sm">
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
          <header className="space-y-6">
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
          <article className="prose prose-slate max-w-none space-y-8 text-lg md:text-xl leading-relaxed text-slate-700">
            <p>Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã.</p>
            <p>Durante quase dois anos, eu evitei espelhos. Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.</p>
            <p>Porque toda vez que eu me via, o que eu enxergava não era eu. Era uma versão de mim que estava... desaparecendo.</p>
            <p>Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem. Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã. Era escova com tanto cabelo que eu precisava limpar no meio do processo pra conseguir terminar de pentear.</p>
            
            <div className="bg-pink-50 p-8 rounded-3xl border-l-4 border-pink-500 italic font-serif">
                "Eu ficava contando os fios. Sabe quando você começa a fazer isso? Quando você separa o cabelo no chuveiro pra contar quantos caíram? É quando você sabe que chegou num lugar muito feio dentro de si mesma."
            </div>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-serif font-black text-pink-800 tracking-tight">O dia que eu quase não saí mais de casa</h2>
            <p>Eu tenho 47 anos. Nunca fui vaidosa no sentido de ficar horas me arrumando. Mas o meu cabelo era a minha coisa. Era longo, era cheio, era o que as pessoas comentavam quando me encontravam.</p>
            <p className="font-bold">"Cláudia, que cabelo lindo o seu." Eu ouvia isso a vida toda.</p>
            <p>Quando ele começou a cair, eu senti que estava perdendo um pedaço de mim. Literalmente.</p>
            <p>Eu comecei a usar técnicas de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Coque escondia o quanto tinha diminuído no volume. Chapéu virou meu acessório favorito — e eu odeio chapéu.</p>
            <p>Meu marido, o Marcos, perguntou uma vez: "Você tá bem? Você tá diferente."</p>
            <p>Eu disse que estava cansada do trabalho. Mas a verdade é que eu tinha vergonha. Vergonha de ter 47 anos e estar com menos cabelo do que minha mãe com 70. Vergonha de sentar no salão e ver a cabeleireira fazer aquela cara de "nossa, você perdeu muito". Vergonha de mim mesma.</p>
            
            <p>Teve um domingo que eu não fui ao churrasco da família. Inventei dor de cabeça. Na verdade, eu não conseguia arranjar um penteado que me fizesse sentir presentável. E eu não aguentava a ideia de todo mundo olhando. Aquele domingo foi o fundo do poço pra mim.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-serif font-black text-pink-800 tracking-tight">Os R$ 800 que eu joguei fora tentando resolver sozinha</h2>
            <p>Antes de te contar o que funcionou, preciso te contar tudo que NÃO funcionou. Porque eu sei que você provavelmente já tentou várias dessas coisas também.</p>
            <p>Comecei com o shampoo antiqueda da farmácia. O famoso, o caro, o que aparece em toda propaganda. Usei três meses. A queda não parou. Depois fui atrás de vitaminas. Biotina, colágeno, zinco — eu tomei tudo junto num ponto, achando que quanto mais, melhor.</p>
            <p>Uma vizinha me ensinou uma simpatia com alho. Eu coloquei alho amassado no couro cabeludo às 10 da noite uma quarta-feira. Fiquei parecendo uma lasanha. Não funcionou.</p>
            
            <p>O pior não era gastar dinheiro à toa. O pior era a esperança que eu colocava em cada coisa nova — e o tombo quando não funcionava. Eu comecei a acreditar que esse era o meu destino. Que eu ia ficar assim.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-serif font-black text-pink-800 tracking-tight">A mensagem que mudou tudo — e eu quase nem li</h2>
            <p>Foi minha prima Renata quem me mandou. Quando ela me mandou uma foto do cabelo dela com a mensagem "Cláudia, você precisa ver isso", eu quase ignorei.</p>
            <p>O cabelo dela estava diferente. Mais cheio. Com um brilho diferente. Liguei pra ela na hora.</p>
            <p>Ela me contou que tinha começado a usar um kit chamado <strong className="text-pink-600">Cavalo de Raça, da Bio Instinto</strong>. Me disse que o diferencial desse kit é que ele não trata só o sintoma — ele trata as três causas principais da queda ao mesmo tempo.</p>
            
            <blockquote className="border-l-8 border-pink-200 pl-8 py-4 my-10 bg-slate-50 rounded-r-3xl">
                <p className="text-xl font-serif italic text-slate-600">
                    "É como tentar consertar uma cadeira só pregando um parafuso quando os outros três estão soltos. Não adianta."
                </p>
                <cite className="block mt-4 text-sm font-black uppercase text-pink-600">— Renata, minha prima</cite>
            </blockquote>

            <p>Pedi o link pra ela. Comprei naquela mesma noite.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-serif font-black text-pink-800 tracking-tight">O que aconteceu na primeira semana</h2>
            <p>No terceiro dia, eu estava no chuveiro e reparei: o ralo estava quase limpo. Fechei o chuveiro. Fiquei parada olhando pro ralo por um bom tempo. Na primeira semana, a queda tinha diminuído de um jeito que eu não via há dois anos.</p>
            <p>Chorei. No banheiro mesmo, de emoção. Aquelas lágrimas diferentes — não de tristeza, mas de alívio.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            <h2 className="text-2xl md:text-3xl font-serif font-black text-pink-800 tracking-tight">No primeiro mês, minha cabeleireira perguntou o que eu tinha feito</h2>
            <p>Com três semanas, eu percebi uns fios pequenos na frente. Bebê, sabe? Aqueles fios novos que nascem e ficam em pezinho.</p>
            <p>No primeiro mês completo, fui ao salão. A minha cabeleireira, a Patrícia, passou os dedos no meu cabelo e disse: <strong className="text-pink-600">"Cláudia, o que você fez? Seu cabelo tá diferente. Mais encorpado."</strong></p>
            <p>Essa frase valeu mais do que qualquer resultado de exame.</p>

            <div className="text-center py-4 text-slate-300 tracking-[1em]">···</div>

            {/* SEÇÃO DE OFERTA / PRODUTO */}
            <div className="my-16 bg-white border-2 border-pink-100 rounded-[3rem] p-8 md:p-12 shadow-xl shadow-pink-100/50 space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5 text-pink-600"><Heart size={200} /></div>
                
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-serif font-black text-slate-900 leading-tight">O Kit que me devolveu a Autoestima</h2>
                    <div className="h-1 w-20 bg-pink-500 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <img 
                        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1770414108426-ChatGPT-Image-6-de-fev.-de-2026,-18_41_41.png" 
                        alt="Kit Cavalo de Raça" 
                        className="rounded-3xl shadow-lg border border-slate-50"
                    />
                    <div className="space-y-6">
                        <p className="text-lg font-bold text-slate-600">O Kit Cavalo de Raça inclui:</p>
                        <ul className="space-y-3">
                            {[
                                { t: "Shampoo Reconstrutor", d: "ancora a raiz" },
                                { t: "Máscara Anti-Queda", d: "reconstrói a fibra" },
                                { t: "Condicionador", d: "sela as cutículas" },
                                { t: "Leave-in Protetor", d: "protege no dia a dia" }
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm md:text-base font-medium text-slate-700">
                                    <CheckCircle2 size={18} className="text-pink-500 shrink-0 mt-0.5" />
                                    <span><strong className="text-slate-900">{item.t}</strong> — {item.d}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 space-y-2">
                            <p className="text-emerald-600 font-black flex items-center gap-2">
                                <Zap size={16} fill="currentColor" /> 87% menos queda comprovada
                            </p>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Garantia de 7 dias ou seu dinheiro de volta</p>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-50 p-8 rounded-3xl text-center space-y-6 border border-slate-100">
                    <div className="space-y-1">
                        <p className="text-slate-400 line-through font-bold text-sm">De: R$ 187,00</p>
                        <p className="text-pink-600 font-black text-4xl md:text-5xl">R$ 147,00</p>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">No Pix ou 12x no Cartão</p>
                    </div>

                    <Link href={checkoutUrl} target="_blank">
                        <Button className="w-full h-16 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black text-xl shadow-lg shadow-pink-200 transition-all hover:scale-[1.02] uppercase tracking-tighter">
                            Acessar Desconto Especial
                            <ArrowRight className="ml-2" />
                        </Button>
                    </Link>
                    
                    <p className="text-xs text-slate-400 font-medium italic">(Verificar se o desconto ainda está disponível no site oficial)</p>
                </div>
            </div>

            <p>Se você chegou até aqui, é porque você também está cansada. Cansada de fingir que está tudo bem, de esconder o couro cabeludo, de evitar olhar pro espelho.</p>
            <p>Eu entendo. Eu estive exatamente aí. Só te peço uma coisa: não desiste de você mesma. Eu quase desisti — e ia ser o maior erro da minha vida.</p>

            <div className="pt-10 border-t border-slate-100">
                <p className="text-slate-900 font-serif font-black italic text-2xl">Com amor,</p>
                <p className="text-pink-600 font-bold text-xl mt-2">Cláudia Mendes</p>
                <p className="text-sm text-slate-400 font-bold uppercase tracking-widest">{city || 'Brasília, DF'}</p>
            </div>
          </article>

          {/* FOOTER DO BLOG */}
          <footer className="pt-20 pb-10 space-y-10 border-t border-slate-100">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-40">
                <div className="flex gap-4">
                    <Facebook size={20} /> <Instagram size={20} /> <Share2 size={20} />
                </div>
                <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest">
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