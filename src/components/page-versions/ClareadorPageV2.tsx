"use client";

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Truck, 
  Clock, 
  Zap,
  ArrowRight,
  Shield,
  ThumbsUp,
  Award
} from 'lucide-react';
import KitSelector from '@/components/KitSelector';

export const ClareadorPageV2 = () => {
  const [selectedKit, setSelectedKit] = useState(2); // Padrão no kit recomendado

  const handleBuyNow = () => {
    // Redirecionamento para o checkout baseado no kit selecionado
    console.log(`Comprando kit ${selectedKit}`);
    window.location.href = `https://checkout.exemplo.com/kit-${selectedKit}`;
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Header Promo */}
      <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">
        🔥 OFERTA POR TEMPO LIMITADO: 50% DE DESCONTO + FRETE GRÁTIS HOJE!
      </div>

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-1 mb-4 text-amber-400">
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <Star size={20} fill="currentColor" />
              <span className="text-slate-600 text-sm ml-2">(+50.000 Clientes Satisfeitos)</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              O Sorriso dos Seus Sonhos em <span className="text-blue-600">Apenas 10 Minutos.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Diga adeus às manchas amareladas sem sensibilidade. Nossa fórmula avançada remove anos de café, vinho e fumo em apenas 7 dias de uso.
            </p>

            <ul className="space-y-4 mb-10">
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="text-green-500" size={24} /> 0% de Sensibilidade Garantido
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="text-green-500" size={24} /> Resultados Visíveis na 1ª Aplicação
              </li>
              <li className="flex items-center gap-3 font-medium">
                <CheckCircle2 className="text-green-500" size={24} /> Tecnologia de Led Nano-Vibratória
              </li>
            </ul>

            {/* Seletor de Kits */}
            <KitSelector selectedKit={selectedKit} onSelect={setSelectedKit} />

            <button 
              onClick={handleBuyNow}
              className="w-full md:w-auto bg-green-500 hover:bg-green-600 text-white px-12 py-6 rounded-2xl text-xl font-bold shadow-xl shadow-green-200 transition-all transform hover:scale-105 flex items-center justify-center gap-3 mb-6"
            >
              COMPRAR AGORA <ArrowRight />
            </button>

            <div className="flex flex-wrap items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Truck size={18} /> Frete Grátis
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} /> Compra Segura
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} /> 30 Dias de Garantia
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-blue-100 absolute inset-0 rounded-full blur-3xl opacity-30 -z-10 animate-pulse"></div>
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
              alt="Sorriso Perfeito" 
              className="rounded-3xl shadow-2xl"
            />
            
            {/* Social Proof Float */}
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl max-w-[240px] border border-slate-100 animate-bounce-slow">
              <div className="flex gap-1 mb-2">
                <Star size={14} className="text-amber-400" fill="currentColor" />
                <Star size={14} className="text-amber-400" fill="currentColor" />
                <Star size={14} className="text-amber-400" fill="currentColor" />
                <Star size={14} className="text-amber-400" fill="currentColor" />
                <Star size={14} className="text-amber-400" fill="currentColor" />
              </div>
              <p className="text-xs font-bold mb-1">"Simplesmente incrível!"</p>
              <p className="text-[10px] text-slate-500">Meus dentes nunca estiveram tão brancos e sem dor.</p>
              <p className="text-[10px] font-bold mt-2 text-blue-600">— Mariana S.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Por que escolher nossa tecnologia?</h2>
            <p className="text-slate-600">Desenvolvido por dentistas, aprovado por sorrisos.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Ação Ultra Rápida</h3>
              <p className="text-slate-600">Nossa luz fria de LED acelera as moléculas clareadoras, reduzindo o tempo de tratamento pela metade.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Seguro para o Esmalte</h3>
              <p className="text-slate-600">Fórmula com pH balanceado que protege seu esmalte enquanto remove as manchas profundas.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-bold mb-4">Qualidade Profissional</h3>
              <p className="text-slate-600">O mesmo gel utilizado em clínicas odontológicas, agora no conforto da sua casa por uma fração do preço.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <div className="bg-blue-600 rounded-[40px] p-12 text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Satisfação Garantida ou Seu Dinheiro de Volta</h2>
            <p className="text-blue-100 text-lg mb-10">
              Estamos tão confiantes nos resultados que oferecemos uma garantia incondicional de 30 dias. Se você não vir diferença, nós devolvemos cada centavo.
            </p>
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
              <ThumbsUp />
              <span className="font-bold">Risco Zero para Você</span>
            </div>
          </div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-12 px-4 border-t border-slate-100 text-center text-slate-400 text-sm">
        <p>© 2024 Sorriso White Pro. Todos os direitos reservados.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-slate-600">Termos de Uso</a>
          <a href="#" className="hover:text-slate-600">Privacidade</a>
          <a href="#" className="hover:text-slate-600">Contato</a>
        </div>
      </footer>
    </div>
  );
};

export default ClareadorPageV2;