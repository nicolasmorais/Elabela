"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CheckCircle,
  Leaf,
  ShieldCheck,
  Star,
  AlertTriangle,
  Info,
  XCircle,
  BookOpen,
  PlayCircle,
  FileText,
  CalendarDays,
  Gift,
  BarChart,
  Lock,
  HeartPulse,
} from "lucide-react";

const testimonials = [
  {
    name: "João Oliveira, 62 anos",
    text: "Recebi tudo no e-mail em 3 minutos! O vídeo é excelente, mostra cada detalhe. Comprei as folhas numa loja de produtos naturais aqui perto de casa, gastei R$ 45 e já fiz para o mês inteiro. Em 2 semanas minha glicemia caiu de 240 para 130. Estou impressionado e muito feliz!",
    time: "há 2 horas",
  },
  {
    name: "Renata Tanaka, 54 anos",
    text: "Eu era cética com essas coisas naturais, mas por R$ 29,90 resolvi tentar. Melhor decisão da minha vida! O chá é gostoso, fácil de fazer e realmente funciona. Já estou na terceira semana e minha glicose baixou 90 pontos. Meu médico ficou boquiaberto com os exames!",
    time: "há 5 horas",
  },
  {
    name: "Taiane F., 47 anos",
    text: "Gente, que protocolo maravilhoso! Super fácil de seguir, o material é muito bem explicado. Os ingredientes são baratos e fáceis de achar. Minha glicemia que era 320 agora tá em 105! Nem acredito que consegui isso de forma natural!",
    time: "há 1 dia",
  },
  {
    name: "Sérgio Vaz, 58 anos",
    text: "Achei que ia ser complicado, mas é muito simples! O vídeo mostra tudo passo a passo, qualquer pessoa consegue fazer. Já não sinto mais aquele formigamento terrível nas pernas. O chá virou parte da minha rotina. Vale MUITO a pena!",
    time: "há 1 dia",
  },
];

export default function AdvertorialPage() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header Section */}
        <header className="text-center py-12">
          <h1 className="text-3xl md:text-5xl font-extrabold text-red-700 dark:text-red-500 leading-tight">
            Dr. Roberto Yano afirma: 7 em cada 10 diabéticos tipo 2 estão sendo
            tratados de forma errada no Brasil.
          </h1>
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            "A Metformina está sufocando o seu pâncreas".
          </h2>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
            Você já parou para pensar o por que da sua glicose continuar alta,
            mesmo tomando os remédios receitados corretamente, fazendo o que os
            médicos pedem e até mesmo comendo um pouco menos açúcar?
          </p>
          <p className="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
            Pois saiba que isso não é sua culpa.
          </p>
        </header>

        <Alert variant="destructive" className="mb-12">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Atenção!</AlertTitle>
          <AlertDescription>
            Este pode ser o texto mais importante que você já leu sobre a
            Diabetes Tipo 2. O que você fará nos próximos 5 minutos pode decidir
            se você irá vencer essa doença silenciosa ou continuar rumo a
            amputações, cegueira e dependência eterna de remédios. Leia com
            atenção.
          </AlertDescription>
        </Alert>

        {/* The Problem Section */}
        <section className="mb-12">
          <p className="text-lg mb-4">
            Um novo estudo conduzido por pesquisadores Japoneses na Universidade
            de Tóquio (Bunkyō), foi recebido pela Universidade de São Paulo
            (USP) aqui no brasil, e revelou que 7 em cada 10 pacientes
            diabéticos tipo 2 estão seguindo um protocolo de tratamento
            ultrapassado, ineficaz — e em muitos casos, perigoso.
          </p>
          <h3 className="text-3xl font-bold text-center my-6">
            O nome disso? Erro médico sistemático.
          </h3>
          <p className="text-lg mb-4">
            Os remédios receitados como Metformina, Glifage, Glicazida por vezes
            trazem aquela falsa sensação de que você está fazendo a coisa certa,
            parecem controlar momentaneamente o problema, mas por dentro você
            sabe: seu corpo continua entrando em colapso.
          </p>
        </section>

        {/* Authority Section */}
        <section className="mb-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src="https://i.pravatar.cc/150?u=dr-yano"
                alt="Dr. Roberto Yano"
              />
              <AvatarFallback>RY</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg">
                Quem afirma isso é o{" "}
                <span className="font-bold">Dr. Roberto Kazushigue Yano</span>,
                figura importante da medicina brasileira, ativo em redes sociais
                contando com mais de 7 milhões de seguidores, com cerca de 26
                anos de experiência em medicina alternativa integrativa.
              </p>
            </div>
          </div>
          <blockquote className="mt-6 border-l-4 border-red-500 pl-4 italic text-lg text-gray-700 dark:text-gray-300">
            <p className="font-semibold">Dr. Yano:</p>
            "Depois de acompanhar centenas de pacientes, tantas amputações que
            poderiam ter sido evitadas, tantos casos de cegueira parcial ou
            completa... vi com meus próprios olhos: os medicamentos só empurram
            a glicose para dentro das células à força!!!"
          </blockquote>
        </section>

        {/* Domino Effect */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-6">
            O erro de foco no seu tratamento que ninguém te contou...
          </h3>
          <p className="text-lg mb-4">
            A glicose alta não é a causa da doença, mas sim a consequência de
            algo muito mais profundo. A maioria dos medicamentos apenas obriga o
            corpo a baixar a glicose, sem resolver a inflamação crônica e os
            bloqueios celulares no pâncreas.
          </p>
          <h4 className="text-2xl font-bold text-center my-6 text-red-600 dark:text-red-400">
            E isso leva ao efeito dominó:
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
            {[
              "Glicose descontrolada",
              "Ganho de peso e gordura visceral",
              "Substituição por insulina",
              "Complicações circulatórias",
              "Neuropatia, amputações, cegueira",
              'E a pior frase de todas: "você vai ter que conviver com isso pra sempre"',
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow"
              >
                <XCircle className="text-red-500" /> {item}
              </div>
            ))}
          </div>
        </section>

        {/* Case Study: Manoel */}
        <section className="mb-12">
          <Card className="overflow-hidden">
            <CardHeader className="bg-blue-100 dark:bg-blue-900/50">
              <CardTitle className="text-2xl text-blue-800 dark:text-blue-200">
                Manoel — o diabético que fez "tudo certo"... mas quase parou em
                uma máquina de hemodiálise
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">
                Seu Manoel, 64 anos, diagnosticado há 22 anos, seguia tudo que o
                médico mandava: tomava 3 comprimidos de Metformina, controlava o
                açúcar, caminhava. Mesmo assim, sua glicose nunca ficava abaixo
                de 240 mg/dL e ele desenvolveu nefropatia diabética.
              </p>
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>A sorte é que ele foi salvo no limite!</AlertTitle>
                <AlertDescription>
                  Desesperado, ele me procurou. O que eu o ofereci foi um
                  protocolo totalmente diferente, baseado em uma bebida
                  medicinal japonesa ancestral.
                </AlertDescription>
              </Alert>
              <blockquote className="mt-6 border-l-4 border-blue-500 pl-4 italic text-lg">
                "O seu corpo ainda é capaz de controlar a glicose naturalmente.
                O que falta não é remédio. O que falta é desbloquear o que está
                travado dentro de você."
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* The Solution */}
        <section className="mb-12 text-center">
          <h3 className="text-3xl font-bold mb-2">
            O pâncreas de um diabético tipo 2 não está morto.
          </h3>
          <h3 className="text-3xl font-bold text-green-600 dark:text-green-400 mb-6">
            Ele está adormecido.
          </h3>
          <p className="text-lg mb-8">
            Existe uma forma de estimular essas células a voltarem a funcionar —
            sem química, sem agressão ao organismo.
          </p>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                O Chá Japonês Regenerativo — A base do protocolo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg">
                Uma fórmula ancestral japonesa preparada com uma combinação
                precisa de 6 folhas terapêuticas orientais.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                {[
                  {
                    name: "Folha de Chlorella Vulgaris",
                    desc: "Desinflama o tecido pancreático e estimula a regeneração.",
                  },
                  {
                    name: "Folha de Feno Grego",
                    desc: "Aumenta a sensibilidade à insulina.",
                  },
                  {
                    name: "Folha de Amora",
                    desc: "Retarda a absorção de carboidratos.",
                  },
                  {
                    name: "Folha de Gymnema Sylvestre",
                    desc: 'Conhecida como "destruidora de açúcar".',
                  },
                  {
                    name: "Folha de Pata de Vaca",
                    desc: "Alto poder hipoglicemiante.",
                  },
                  {
                    name: "Canela do Ceilão",
                    desc: "Completa a sinergia metabólica.",
                  },
                ].map((herb) => (
                  <div
                    key={herb.name}
                    className="flex flex-col gap-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <Leaf className="text-green-500 h-5 w-5 flex-shrink-0" />
                      <span className="font-bold">{herb.name}</span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {herb.desc}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Offer */}
        <section
          id="offer"
          className="mb-12 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-lg shadow-2xl border-2 border-green-500"
        >
          <h3 className="text-3xl font-extrabold text-center mb-2">
            O Protocolo do Chá Japonês agora está disponível em formato digital
          </h3>
          <p className="text-xl text-center mb-6">
            Acesso imediato por apenas R$ 29,90
          </p>

          <Card className="bg-white dark:bg-gray-800/50">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                O QUE VOCÊ RECEBE IMEDIATAMENTE:
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-lg">
              {[
                {
                  icon: BookOpen,
                  title: "MANUAL COMPLETO DO CHÁ JAPONÊS",
                  desc: "E-book PDF com a fórmula exata, métodos de preparo e onde comprar.",
                },
                {
                  icon: PlayCircle,
                  title: "VÍDEO-AULA EXCLUSIVA",
                  desc: "Dr. Yano mostra na prática o preparo tradicional japonês.",
                },
                {
                  icon: FileText,
                  title: "DIÁRIO DE CONTROLE GLICÊMICO",
                  desc: "PDF Editável para acompanhar sua evolução diária.",
                },
                {
                  icon: CalendarDays,
                  title: "PROTOCOLO DE 90 DIAS",
                  desc: "Cronograma completo com 4 fases de tratamento.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <item.icon className="text-green-500 mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <span className="font-bold">{item.title}:</span> {item.desc}
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h4 className="font-bold text-xl text-center mb-4 flex items-center justify-center gap-2">
                  <Gift className="h-6 w-6" /> BÔNUS EXCLUSIVOS:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Áudio de Meditação Guiada Anti-Estresse (MP3)</li>
                  <li>Checklist Visual de Sintomas da Diabetes (PDF)</li>
                  <li>Guia Ilustrado de Exercícios para Diabéticos (PDF)</li>
                  <li>Tabela de Índice Glicêmico de 200 Alimentos (PDF)</li>
                  <li>
                    Vídeo "Como Conversar com seu Médico sobre o Protocolo"
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="text-center my-8">
            <p className="text-lg">INVESTIMENTO ÚNICO DE APENAS:</p>
            <p className="text-2xl line-through text-gray-500">De R$ 127,00</p>
            <p className="text-6xl font-extrabold text-green-600 dark:text-green-400 my-2">
              R$ 29,90
            </p>
            <p className="font-semibold">✅ Pagamento único via PIX</p>
            <p className="font-semibold">✅ Acesso vitalício ao material</p>
          </div>

          <Button
            size="lg"
            className="w-full h-16 text-2xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg animate-pulse"
          >
            QUERO ACESSO IMEDIATO AGORA!
          </Button>
        </section>

        {/* Guarantee Section */}
        <section className="mb-12">
          <Alert className="border-2 border-blue-500 bg-blue-50 dark:bg-blue-900/30">
            <ShieldCheck className="h-6 w-6 text-blue-500" />
            <AlertTitle className="text-xl font-bold text-blue-800 dark:text-blue-200">
              GARANTIA INCONDICIONAL DE 7 DIAS
            </AlertTitle>
            <AlertDescription className="text-lg">
              Você não tem absolutamente NENHUM RISCO. Se em 7 dias você achar
              que o conteúdo não vale nem os R$ 29,90, basta enviar um único
              e-mail e devolvemos 100% do seu dinheiro. Sem perguntas. Sem
              burocracia.
            </AlertDescription>
          </Alert>
        </section>

        {/* Comparison Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Compare: Remédios vs. Protocolo Natural
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-red-500">
              <CardHeader>
                <CardTitle className="text-red-600 dark:text-red-400">
                  💊 Tratamento com Remédios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2">
                  <XCircle className="text-red-500" /> Custo mensal: R$ 150-400
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="text-red-500" /> Efeitos colaterais
                  frequentes
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="text-red-500" /> Sobrecarga nos rins e
                  fígado
                </p>
                <p className="flex items-center gap-2">
                  <XCircle className="text-red-500" /> Trata apenas sintomas
                </p>
              </CardContent>
            </Card>
            <Card className="border-green-500">
              <CardHeader>
                <CardTitle className="text-green-600 dark:text-green-400">
                  🍵 Protocolo do Chá Japonês
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Investimento
                  único: R$ 29,90
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Zero efeitos
                  colaterais
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> 100% natural
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="text-green-500" /> Trabalha a causa
                  raiz
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-6 text-xl font-bold bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-lg">
            ECONOMIA: Até R$ 4.170 por ano!
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Veja o que quem já está usando o protocolo diz:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="italic mb-4">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                    <p className="font-bold text-gray-800 dark:text-gray-200">
                      {testimonial.name}
                    </p>
                    <span>{testimonial.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Perguntas Frequentes
          </h3>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Onde encontro os ingredientes do chá?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Todos os ingredientes estão disponíveis em lojas de produtos
                naturais, farmácias de manipulação ou pela internet. No e-book,
                tem uma lista completa com links e sugestões de onde comprar.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Preciso parar meus medicamentos?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                NUNCA pare seus medicamentos por conta própria! Use o protocolo
                junto com seu tratamento atual. Conforme você melhorar, seu
                médico é quem decidirá sobre reduzir as doses.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                Funciona para diabetes tipo 1 também?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                SIM! O protocolo foi desenvolvido para diabetes tipo 1 e tipo 2.
                No manual, tem instruções específicas para cada tipo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                O material fica salvo para sempre?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                SIM! Você baixa todos os arquivos (PDFs, vídeos, áudios) e eles
                ficam salvos no seu dispositivo para sempre. É SEU para toda a
                vida!
              </-accordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Final CTA */}
        <section className="text-center py-12">
          <blockquote className="text-xl italic mb-8 max-w-2xl mx-auto">
            "Você está a apenas UMA DECISÃO de distância de transformar sua
            vida. São apenas R$ 29,90. Você gasta isso num almoço. Mas isso pode
            salvar seus rins, sua visão, suas pernas, sua vida."
            <cite className="block not-italic mt-2 font-semibold">
              — Dr. Roberto Yano
            </cite>
          </blockquote>
          <Button
            size="lg"
            className="w-full max-w-md mx-auto h-16 text-2xl font-bold bg-green-600 hover:bg-green-700 text-white shadow-lg"
          >
            ✅ SIM, QUERO VENCER A DIABETES!
          </Button>
          <p className="mt-4 text-sm text-gray-500">
            Pagamento único • Acesso imediato • Garantia total
          </p>
        </section>

        <footer className="text-center text-xs text-gray-500 dark:text-gray-400 pt-8 border-t">
          <p className="mb-4">
            <Lock className="inline h-4 w-4 mr-1" />
            Compra 100% Segura e Garantida. Seus dados estão protegidos.
          </p>
          <p>
            Este é um produto informacional digital. Nenhum produto físico será
            enviado. O acesso é 100% online. Resultados podem variar. Este
            material não substitui acompanhamento médico.
          </p>
        </footer>
      </div>
    </div>
  );
}