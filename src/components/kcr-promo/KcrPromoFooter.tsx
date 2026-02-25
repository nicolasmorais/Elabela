"use client";

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShieldCheck, Lock, CreditCard } from 'lucide-react';

export const KcrPromoFooter = () => {
  return (
    <footer className="py-20 bg-[#FDF8F3] text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-orange-400 to-orange-600 opacity-30"></div>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* SEÇÃO JURÍDICA SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 pb-16 border-b border-orange-100">
            <div className="space-y-4">
                <h3 className="text-sm font-black text-orange-950 uppercase tracking-[0.2em]">Avisos e Isenções de Responsabilidade</h3>
                <div className="space-y-4 text-xs text-slate-500 leading-relaxed text-justify">
                    <div>
                        <p className="font-bold text-slate-700 mb-1">Isenção de Responsabilidade</p>
                        <p>Este conteúdo tem caráter exclusivamente informativo e educacional. Não oferece diagnóstico, tratamento ou cura de condições de saúde. Os resultados podem variar de pessoa para pessoa. Sempre consulte um profissional de saúde qualificado antes de iniciar qualquer mudança na dieta, no consumo de chás, suplementos ou rotina de bem-estar.</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-700 mb-1">Aviso de Idade</p>
                        <p>Conteúdo destinado a maiores de 18 anos.</p>
                    </div>
                    <div>
                        <p className="font-bold text-slate-700 mb-1">Declaração de Risco</p>
                        <p>O uso de qualquer produto natural deve ser feito com responsabilidade. Pessoas com condições médicas pré-existentes, gestantes, lactantes ou usuários de medicamentos devem buscar orientação profissional antes do consumo.</p>
                    </div>
                </div>
            </div>

            <div className="space-y-6 text-center md:text-right">
                <img 
                    src="https://pub-da9fd1c19b8e45d691d67626b9a7ba6d.r2.dev/1769910342967-ChatGPT-Image-31-de-jan.-de-2026,-22_38_10-(1).png" 
                    alt="OneBase Logo" 
                    className="h-14 mx-auto md:mx-0 md:ml-auto"
                />
                <div className="space-y-2">
                    <p className="text-sm font-black text-orange-800 uppercase tracking-widest">OneBase | Soluções Digitais</p>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        E-Business Rio Verde | Aparecida de Goiania - GO<br />
                        CNPJ: 60.357.932/0001-18
                    </p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-start mb-20">
          <div className="space-y-6 text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Links Úteis</p>
            <nav className="flex flex-col gap-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
                
                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Termos e Condições</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Termos e Condições</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                            <p>Ao acessar este site, o usuário concorda que todo o conteúdo exibido — incluindo textos, imagens, vídeos e informações — possui caráter exclusivamente informativo.</p><br/>
                            <p>Os produtos apresentados não substituem consultas, diagnósticos ou recomendações de profissionais da saúde.</p><br/>
                            <p>As informações sobre preços, disponibilidade, frete e políticas comerciais podem ser modificadas a qualquer momento, sem aviso prévio.</p><br/>
                            <p>O uso dos produtos adquiridos é de responsabilidade do consumidor, que deve sempre seguir as orientações descritas na embalagem ou no material que acompanha o produto.</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Privacidade</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Política de Privacidade</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600">
                            <p>Valorizamos sua privacidade. Todas as informações fornecidas voluntariamente pelo usuário — como nome, e-mail ou dados inseridos em formulários — são utilizadas apenas para fins de atendimento, envio de comunicações solicitadas ou suporte relacionado aos produtos oferecidos.</p><br/>
                            <p>Não compartilhamos, vendemos ou divulgamos dados a terceiros sem autorização do usuário, exceto quando exigido por lei.</p><br/>
                            <p>O usuário pode solicitar a remoção ou alteração de seus dados a qualquer momento por meio de nossos canais de suporte. Consulte esta página regularmente, pois nossa Política de Privacidade pode ser atualizada conforme necessário.</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

                <Dialog>
                    <DialogTrigger asChild><button className="hover:text-orange-600 transition-colors text-left">Política de Reembolso</button></DialogTrigger>
                    <DialogContent className="sm:max-w-[700px] max-h-[80vh]">
                        <DialogHeader><DialogTitle>Política de Reembolso</DialogTitle></DialogHeader>
                        <ScrollArea className="pr-4 py-4 text-sm leading-relaxed text-slate-600 space-y-4">
                            <p>Por se tratar de um produto digital, o acesso ao conteúdo é liberado imediatamente após a confirmação do pagamento. Ainda assim, oferecemos uma política de reembolso transparente para garantir a satisfação do cliente.</p>
                            <p>Você pode solicitar o reembolso em até 7 dias corridos após a compra, conforme o Código de Defesa do Consumidor, desde que respeitadas as condições abaixo:</p>
                            <p><strong>Como solicitar o reembolso:</strong> Para iniciar o processo, envie um e-mail para nosso suporte: 📩 contato@oneconversion.pro</p>
                            <p>Inclua obrigatoriamente as seguintes informações: Nome completo, E-mail utilizado na compra, Número do pedido, Data da compra e Motivo da solicitação (opcional).</p>
                            <p><strong>Processo de avaliação:</strong> Após recebermos seu e-mail: Nossa equipe irá confirmar os dados da compra; O acesso ao produto digital será revogado; O pedido de reembolso será processado em até 5 dias úteis.</p>
                            <p><strong>Forma de reembolso:</strong> Pagamentos via cartão (5 a 15 dias úteis); Pagamentos via Pix (até 5 dias úteis); Pagamentos via boleto (necessário informar conta bancária).</p>
                            <p><strong>Casos em que o reembolso pode ser recusado:</strong> Solicitação após 7 dias; evidência de uso excessivo ou violação de direitos autorais; falta de dados de identificação.</p>
                        </ScrollArea>
                    </DialogContent>
                </Dialog>

            </nav>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Precisa de Ajuda?</p>
            <div className="space-y-4">
                <div className="inline-block p-4 rounded-2xl bg-black/5 border border-slate-200 w-full">
                    <p className="text-[10px] font-black uppercase text-orange-800 mb-1">E-mail de Suporte</p>
                    <p className="text-sm font-bold text-slate-900">contato@cavalo-de-raca.pro</p>
                </div>
            </div>
          </div>

          <div className="space-y-6 text-center md:text-left">
            <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-900/80">Segurança</p>
            <div className="flex justify-center md:justify-start gap-4 opacity-50">
                <ShieldCheck size={40} strokeWidth={1} />
                <Lock size={40} strokeWidth={1} />
                <CreditCard size={40} strokeWidth={1} />
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-200 space-y-8">
            <div className="max-w-4xl mx-auto space-y-6">
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-[0.1em] text-center italic">
                    <strong>IMPORTANTE:</strong> Os resultados podem variar de pessoa para pessoa.
                </p>
                <div className="flex flex-col items-center gap-4">
                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">© 2024 Cavalo de Raça - Original Bio Instinto</p>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};