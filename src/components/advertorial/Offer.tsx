"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertTriangle,
  Check,
  Leaf,
  Package,
  Star,
  Zap,
} from "lucide-react";

const ingredients = [
  { name: "Chlorella Vulgaris", desc: "Desinflama e regenera o pâncreas." },
  { name: "Feno Grego", desc: "Aumenta a sensibilidade à insulina." },
  { name: "Fibra de Beterraba", desc: "Retarda a absorção de carboidratos." },
  { name: "Picolinato de Cromo", desc: "Reduz a compulsão por doces." },
  { name: "Laranja Moro", desc: "Reduz a gordura visceral." },
  { name: "Vitamina D3", desc: "Estimula a produção de insulina." },
];

export const Offer = () => {
  return (
    <section id="offer" className="mb-12 space-y-8">
      <div className="text-center p-6 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
        <h3 className="text-3xl font-extrabold">
          O Protocolo Natural Agora Está Disponível no Brasil
        </h3>
        <p className="text-xl mt-2">
          Em cápsulas prontas para uso diário:
        </p>
        <p className="text-5xl font-bold text-blue-600 dark:text-blue-400 mt-4">
          Glicelidina
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-600" />
            6 Ativos Naturais em Sinergia
          </CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ingredients.map((ing, i) => (
            <div key={i} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-green-500 mt-1" />
              <div>
                <p className="font-bold">{ing.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {ing.desc}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="text-center">
        <h3 className="text-3xl font-bold">Escolha o Seu Tratamento</h3>
        <p className="text-lg mt-2">
          O tempo de exposição aos ativos é o que permite a reversão
          progressiva dos danos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <Package className="h-10 w-10 mx-auto text-gray-500" />
            <CardTitle>KIT INICIAL</CardTitle>
            <p className="font-bold text-lg">Leve 3, Pague 2</p>
            <p className="text-sm text-gray-500">Duração: 3 meses</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">R$ 197</p>
            <Button className="w-full mt-4">Comprar Agora</Button>
          </CardContent>
        </Card>
        <Card className="border-2 border-yellow-500 relative">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Star className="h-4 w-4 mr-1" /> Mais Vendido
          </Badge>
          <CardHeader className="text-center">
            <Package className="h-10 w-10 mx-auto text-yellow-500" />
            <CardTitle>KIT INTENSIVO</CardTitle>
            <p className="font-bold text-lg">Leve 6, Pague 3</p>
            <p className="text-sm text-gray-500">Duração: 6 meses</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">R$ 297</p>
            <Button variant="default" className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600">
              Comprar Agora
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-center">
            <Zap className="h-10 w-10 mx-auto text-blue-500" />
            <CardTitle>KIT AVANÇADO</CardTitle>
            <p className="font-bold text-lg">Leve 10, Pague 5</p>
            <p className="text-sm text-gray-500">Duração: 10 meses</p>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-3xl font-bold">R$ 397</p>
            <Button className="w-full mt-4">Comprar Agora</Button>
          </CardContent>
        </Card>
      </div>
      <div className="text-center">
        <Button size="lg" className="h-14 text-xl font-bold">
          QUERO ESCOLHER MEU KIT AGORA!
        </Button>
      </div>
    </section>
  );
};