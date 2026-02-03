"use client";

import React, { useState, useEffect } from 'react';
import { 
  Check, 
  Star, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  Zap, 
  Heart, 
  Sparkles, 
  Award,
  CreditCard,
  ShoppingBag,
  DollarSign,
  Home,
  Dumbbell,
  Microscope,
  Truck,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTracker } from "./PageTracker";
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

const GALLERY_IMAGES = [
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896113265-ChatGPT-Image-31-de-jan.-de-2026,-18_44_47.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896120372-ChatGPT-Image-31-de-jan.-de-2026,-18_42_42.png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896125840-Gemini_Generated_Image_kw7t7bkw7t7bkw7t-(1).png",
  "https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769896189867-ChatGPT-Image-31-de-jan.-de-2026,-18_49_38.png"
];

const TIKTOK_VIDEOS = [
  "https://vhost.onebasex.pro/video/1769896865284-ssstik.io_%40renatadelpasso_1769896654074.mp4",
  "https://vhost.onebasex.pro/video/1769897057244-ssstik.io_%40donademim_pvh_1769896463897.mp4",
  "https://vhost.onebasex.pro/video/1769897045880-ssstik.io_%40studioestefaniribeiro_1769896850804.mp4"
];

export function HairCarePage() {
  const [timeLeft, setTimeLeft] = useState(1194); 
  
  const [config, setConfig] = useState({
      priceCard: 'R$ 157,00',
      pricePix: '97,00',
      installmentText: 'Em até 12x sem juros',
      checkoutUrl: '#'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    
    fetch('/api/page-settings/cavalo-de-raca')
        .then(res => res.json())
        .then(data => {
            if (data) {
                setConfig(prev => ({
                    ...prev,
                    ...data,
                    installmentText: data.installmentText || 'Em até 12x sem juros'
                }));
            }
        })
        .catch(e => console.error("Erro ao carregar preços."));

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <>
      <PageTracker contentId="cavalo-de-raca" />
      <div className="bg-[#FDF8F3] text-slate-900 font-sans selection:bg-orange-100 antialiased min-h-screen">
        
        {/* BARRA DE URGÊNCIA */}
        <div className="bg-slate-950 py-2 px-4 text-center border-b border-orange-900/20 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-orange-200 flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
                Promoção Exclusiva Direto da Indústria
            </p>
            <div className="hidden md:flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest bg-orange-900/40 px-4 py-1 rounded-full border border-orange-500/20">
              <Clock size={12} className="text-orange-400" />
              Oferta termina em: <span className="font-mono text-orange-400">{formatTime(timeLeft)}</span>
            </div>
          </div>
        </div>

        {/* HERO SECTION */}
        <header className="relative pt-12 md:pt-24 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-100/50 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-orange-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8 border border-orange-500/30 shadow-2xl">
                <Award size={14} /> Tecnologia Bio Instinto
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-950 mb-8 max-w-4xl">
              Finalmente Solte Esse Cabelo <span className="text-orange-800 italic underline decoration-orange-500/30 underline-offset-8">Sem Medo, Sem Vergonha, Sem Desculpas</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-600 mb-12 font-medium max-w-2xl leading-relaxed">
              Recupere em 7 dias a força, o brilho e a autoestima que você perdeu - com a mesma tecnologia profissional que salões cobram R$ 500 por sessão.
            </p>

            <div className="relative group max-w-3xl w-full">
              <img 
                src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769844571647-ChatGPT-Image-31-de-jan.-de-2026,-04_29_21.png" 
                alt="Kit Cavalo de Raça Bio Instinto" 
                className="rounded-[3rem] relative z-10 mx-auto"
              />
            </div>
          </div>
        </header>

        {/* GALERIA */}
        <section className="py-24 px-6 bg-white border-y border-orange-100">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4">
              <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
                O kit mais Amado do Brasil
              </h2>
              <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {GALLERY_IMAGES.map((url, i) => (
                <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md border border-orange-100">
                   <img 
                      src={url} 
                      alt={`Imagem ${i + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                   />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DIFERENCIAIS */}
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row items-start gap-16">
                    <div className="flex-1 space-y-8">
                        <span className="inline-block text-orange-800 font-black text-xs uppercase tracking-[0.4em] mb-2">A SOLUÇÃO QUE VOCÊ PRECISAVA</span>
                        <h2 className="text-3xl md:text-5xl font-black text-slate-950 tracking-tighter leading-tight">
                            Resultado de salão no seu chuveiro. <span className="text-orange-700">Sem gastar R$ 300 todo mês.</span>
                        </h2>

                        <div className="pt-8 space-y-6">
                            <h4 className="text-2xl font-black text-slate-950 border-b-2 border-orange-200 inline-block pb-1 uppercase tracking-tight">PARA VOCÊ QUE:</h4>
                            <ul className="space-y-4">
                                {[
                                    "Trabalha, cuida da casa, tem mil coisas pra resolver",
                                    "Não tem R$ 300 livre no orçamento todo mês",
                                    "Não pode passar o sábado inteiro no salão",
                                    "Não abre mão de se sentir bonita e confiante"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-lg font-bold text-slate-700">
                                        <div className="bg-orange-100 p-1 rounded-full text-orange-600"><Check size={16} strokeWidth={3} /></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    
                    <div className="flex-1 relative w-full">
                        <img 
                            src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769820004362-ChatGPT-Image-30-de-jan.-de-2026,-21_39_39.png" 
                            alt="Mulher Confiante" 
                            className="relative z-10 w-full h-auto drop-shadow-2xl rounded-[3rem] border-8 border-white"
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* VÍDEOS */}
        <section className="py-24 px-6 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase leading-tight">
                      Aperte o Play ✨
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TIKTOK_VIDEOS.map((url, i) => (
                        <div key={i} className="relative aspect-[9/16] bg-slate-950 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <iframe src={url} className="absolute inset-0 w-full h-full" frameBorder="0" allowFullScreen allow="autoplay; fullscreen"></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* PRICING & OFFER */}
        <section id="pricing" className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="text-4xl md:text-7xl font-black text-slate-950 mb-16 tracking-tighter leading-none text-center">
                    Qual dessas mulheres você quer ser <br /> <span className="text-orange-700 underline decoration-orange-300">daqui a 7 dias?</span>
                </h2>

                <div className="bg-white rounded-[4rem] p-8 md:p-16 shadow-[0_64px_128px_-24px_rgba(139,94,60,0.3)] relative border-[6px] border-white space-y-12 mx-auto">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                        {/* OPÇÃO CARTÃO */}
                        <div className="bg-amber-400 p-10 rounded-[3rem] border-4 border-white shadow-xl flex flex-col justify-center gap-4">
                            <div className="flex items-center justify-center gap-2 text-slate-900 font-black text-xs md:text-sm uppercase tracking-[0.3em] opacity-80">
                                <CreditCard size={18} /> Pagamento no Cartão
                            </div>
                            <div className="space-y-1">
                                <p className="text-5xl md:text-6xl font-black text-slate-950 tracking-tighter">
                                    {config.priceCard}
                                </p>
                                <p className="text-sm md:text-base font-black text-slate-900/60 uppercase tracking-widest">{config.installmentText}</p>
                            </div>
                        </div>

                        {/* OPÇÃO PIX */}
                        <div className="bg-emerald-600 p-10 rounded-[3rem] border-4 border-white shadow-2xl flex flex-col justify-center gap-4 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10 text-white">
                                <Zap size={80} />
                            </div>
                            <div className="flex items-center justify-center gap-2 text-white font-black text-xs md:text-sm uppercase tracking-[0.3em] relative z-10">
                                <Zap size={14} fill="currentColor" /> Desconto Exclusivo PIX
                            </div>
                            <div className="space-y-1 relative z-10">
                                <div className="flex items-start justify-center gap-1">
                                    <span className="text-2xl font-black text-emerald-100 mt-4">R$</span>
                                    <span className="text-7xl md:text-8xl font-black text-white tracking-tighter">
                                        {config.pricePix.split(',')[0]}<span className="text-4xl">,{config.pricePix.split(',')[1] || '00'}</span>
                                    </span>
                                </div>
                                <p className="text-xs md:text-sm font-black text-emerald-100 uppercase tracking-widest bg-black/10 py-1 rounded-full px-4 inline-block">À vista no PIX</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-8 py-6 border-y border-slate-100">
                        <p className="text-green-600 font-black text-xs md:text-sm uppercase tracking-[0.2em] flex items-center gap-2">
                            <Truck size={18} /> Frete Grátis Para Todo Brasil
                        </p>
                    </div>

                    <Link href={config.checkoutUrl || '#'} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full h-24 bg-green-600 hover:bg-green-700 text-white rounded-[2.5rem] shadow-2xl transition-all hover:scale-[1.03] active:scale-95 group overflow-hidden">
                            <div className="flex flex-col items-center">
                                <span className="flex items-center gap-4 text-xl md:text-3xl font-black">
                                    <ShoppingBag className="h-6 w-6 md:h-10 md:w-10 group-hover:scale-110 transition-transform" />
                                    COMPRAR AGORA
                                </span>
                            </div>
                        </Button>
                    </Link>
                </div>
            </div>
        </section>

        {/* NOVO RODAPÉ DETALHADO */}
        <footer className="bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left mb-12">
              {/* Seção de Avisos */}
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-widest">
                  Avisos e Isenções de Responsabilidade
                </h3>
                <div className="text-sm space-y-4 leading-relaxed">
                  <div>
                    <p className="font-bold text-gray-300 mb-1 text-xs uppercase tracking-wider">Isenção de Responsabilidade</p>
                    <p>Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer mudança na dieta, no consumo de chás, suplementos ou rotina de bem-estar.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-300 mb-1 text-xs uppercase tracking-wider">Declaração de Risco</p>
                    <p>O uso de qualquer produto natural deve ser feito com responsabilidade. Pessoas com condições médicas pré-existentes, gestantes, lactantes ou usuários de medicamentos devem buscar orientação profissional antes do consumo.</p>
                  </div>
                  <div>
                    <p className="font-bold text-gray-300 mb-1 text-xs uppercase tracking-wider">Aviso de Idade</p>
                    <p>Conteúdo destinado a maiores de 18 anos.</p>
                  </div>
                </div>
              </div>

              {/* Informações da Empresa */}
              <div className="space-y-6">
                <h3 className="text-base font-bold text-white uppercase tracking-widest">
                  Informações da Empresa
                </h3>
                <div className="text-sm space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10 leading-relaxed">
                  <p><span className="font-bold text-gray-300 uppercase text-[10px] tracking-widest block mb-1">Empresa</span> OneConversion Soluções Digitais</p>
                  <p><span className="font-bold text-gray-300 uppercase text-[10px] tracking-widest block mb-1">Endereço</span> Av. Digital, 123, Sala 4, Aparecida de Goiania - GO</p>
                  <p><span className="font-bold text-gray-300 uppercase text-[10px] tracking-widest block mb-1">CNPJ</span> 60.357.932/0001-18</p>
                  <p><span className="font-bold text-gray-300 uppercase text-[10px] tracking-widest block mb-1">Contato</span> suporte@oneconversion.pro</p>
                </div>
              </div>
            </div>

            {/* Links de Políticas */}
            <div className="pt-12 border-t border-gray-800 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-xs font-bold uppercase tracking-widest">
              
              {/* Termos e Condições */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Termos e Condições</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader>
                  <ScrollArea className="h-[450px] pr-4 mt-4 text-sm leading-relaxed text-slate-600">
                    <p className="mb-4">Ao acessar este site, o usuário concorda que todo o conteúdo exibido — incluindo textos, imagens, vídeos e informações — possui caráter exclusivamente informativo.</p>
                    <p className="mb-4">Os produtos apresentados não substituem consultas, diagnósticos ou recomendações de profissionais da saúde.</p>
                    <p className="mb-4">As informações sobre preços, disponibilidade, frete e políticas comerciais podem ser modificadas a qualquer momento, sem aviso prévio.</p>
                    <p>O uso dos produtos adquiridos é de responsabilidade do consumidor, que deve sempre seguir as orientações descritas na embalagem ou no material que acompanha o produto.</p>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

              {/* Política de Reembolso */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Política de Reembolso</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader>
                  <ScrollArea className="h-[450px] pr-4 mt-4 text-sm leading-relaxed text-slate-600">
                    <p className="mb-4">Por se tratar de um produto digital, o acesso ao conteúdo é liberado imediatamente após a confirmação do pagamento. Ainda assim, oferecemos uma política de reembolso transparente para garantir a satisfação do cliente.</p>
                    <p className="mb-4 font-bold">Você pode solicitar o reembolso em até 7 dias corridos após a compra, conforme o Código de Defesa do Consumidor.</p>
                    
                    <h4 className="font-bold text-slate-900 mt-6 mb-2">Como solicitar o reembolso</h4>
                    <p className="mb-4">Para iniciar o processo, envie um e-mail para nosso suporte: <span className="font-bold">suporte@oneconversion.pro</span></p>
                    
                    <h4 className="font-bold text-slate-900 mt-6 mb-2">Processo de avaliação</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li>Nossa equipe irá confirmar os dados da compra.</li>
                      <li>O acesso ao produto digital será revogado para evitar novos downloads.</li>
                      <li>O pedido de reembolso será processado em até 5 dias úteis.</li>
                    </ul>

                    <h4 className="font-bold text-slate-900 mt-6 mb-2">Forma de reembolso</h4>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                      <li><strong>Pagamentos via cartão:</strong> o estorno será solicitado à operadora e pode levar de 5 a 15 dias úteis.</li>
                      <li><strong>Pagamentos via Pix:</strong> o valor é devolvido na mesma chave em até 5 dias úteis.</li>
                    </ul>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

              {/* Política de Privacidade */}
              <Dialog>
                <DialogTrigger asChild>
                  <button className="hover:text-white transition-colors">Política de Privacidade</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px]">
                  <DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader>
                  <ScrollArea className="h-[450px] pr-4 mt-4 text-sm leading-relaxed text-slate-600">
                    <p className="mb-4">Valorizamos sua privacidade. Todas as informações fornecidas voluntariamente pelo usuário — como nome, e-mail ou dados inseridos em formulários — são utilizadas apenas para fins de atendimento, envio de comunicações solicitadas ou suporte relacionado aos produtos oferecidos.</p>
                    <p className="mb-4">Não compartilhamos, vendemos ou divulgamos dados a terceiros sem autorização do usuário, exceto quando exigido por lei.</p>
                    <p>O usuário pode solicitar a remoção ou alteração de seus dados a qualquer momento por meio de nossos canais de suporte. Consulte esta página regularmente, pois nossa Política de Privacidade pode ser atualizada conforme necessário.</p>
                  </ScrollArea>
                </DialogContent>
              </Dialog>

            </div>

            {/* Copyright */}
            <div className="mt-12 text-center text-[10px] text-gray-500 font-bold uppercase tracking-[0.3em]">
              <p>© 2024 OneConversion Soluções Digitais • Todos os direitos reservados</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}