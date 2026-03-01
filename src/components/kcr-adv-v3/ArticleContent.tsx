"use client";

import React from 'react';

export const ArticleContent = () => {
  return (
    <div className="max-w-none space-y-8 text-xl leading-relaxed text-slate-700">
      <img 
        src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1771644725841-Gemini_Generated_Image_bi45tvbi45tvbi45.png" 
        alt="Cláudia Mendes antes e depois" 
        className="w-full h-auto rounded-3xl shadow-2xl border-4 border-white"
      />
      
      <p className="first-letter:text-5xl first-letter:font-black first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left">
        Eu preciso te contar uma coisa que nunca tive coragem de falar nem pra minha irmã. Durante quase dois anos, eu evitei espelhos. Não o espelho do banheiro, não a câmera do celular, não o reflexo em vitrine de loja. Nada.
      </p>
      
      <p>Porque toda vez que eu me via, o que eu enxergava não era eu. Era uma versão de mim que estava... desaparecendo. Meu cabelo estava caindo. E não era aquela queda normal que todo mundo tem. Era tufo. Era bola de cabelo no ralo. Era travesseiro cheio de fios pela manhã.</p>
      
      <p>Eu ficava contando os fios. Sabe quando você começa a fazer isso? Quando você separa o cabelo no chuveiro pra contar quantos caíram? É quando você sabe que chegou num lugar muito feio dentro de si mesma.</p>
      
      <h2 className="text-2xl md:text-3xl font-serif font-black text-slate-900 tracking-tight pt-4">O dia que eu quase não saí mais de casa</h2>
      <p>Tenho 47 anos e meu cabelo era a minha identidade. Quando ele começou a cair, comecei a usar técnicas de penteado pra esconder as falhas. Rabinho alto disfarçava o couro cabeludo aparecendo na frente. Chapéu virou meu acessório favorito.</p>
      
      <p>Teve um domingo que eu não fui ao churrasco da família. Inventei uma dor de cabeça porque eu não conseguia arranjar um penteado que me fizesse sentir apresentável. Aquele domingo foi o fundo do poço pra mim.</p>

      <div className="bg-slate-50 p-8 rounded-[2rem] border-l-4 border-pink-500 italic text-lg text-slate-600">
        "Eu gastei mais de R$ 800 em shampoos de farmácia, vitaminas e até simpatias com alho. Nada funcionava por mais de 3 dias."
      </div>
    </div>
  );
};