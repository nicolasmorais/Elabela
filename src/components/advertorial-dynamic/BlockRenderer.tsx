"use client";

import { ContentBlock } from '@/lib/database';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AlertTriangle, Zap, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils'; // Importando cn para construir classes dinâmicas

interface BlockRendererProps {
  block: ContentBlock;
}

const TextBlock = ({ value, fontSize }: { value: string, fontSize?: string }) => {
    // Processa o texto para substituir *texto* por <strong>texto</strong> e novas linhas por <br>
    const formattedText = value
        .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br />');

    // Define a classe de tamanho de fonte padrão ou usa a fornecida
    const sizeClass = fontSize ? `text-${fontSize}` : 'text-xl';
    
    // Se o valor for um tamanho em px (ex: '16px'), usamos style, senão usamos a classe Tailwind
    const style = fontSize && fontSize.endsWith('px') ? { fontSize: fontSize } : {};

    return (
        <div 
            className={cn("prose prose-xl max-w-none text-gray-800 dark:text-gray-200 leading-relaxed", sizeClass)}
            style={style}
        >
            <div dangerouslySetInnerHTML={{ __html: formattedText }} />
        </div>
    );
};

const ImageBlock = ({ value }: { value: string }) => {
    return (
        <img
            src={value}
            alt="Imagem do advertorial"
            className="w-full h-auto rounded-lg my-6 shadow-md"
        />
    );
};

const AlertBlock = ({ block }: { block: ContentBlock }) => {
    const variant = block.alertVariant;
    
    let classes = "text-left";
    let iconClasses = "h-5 w-5";
    let titleClasses = "font-bold text-2xl mb-2";
    let descriptionClasses = "text-xl";

    if (variant === 'destructive') {
        classes += " bg-red-50 dark:bg-red-900/20 border-red-500";
        iconClasses += " text-red-600";
        titleClasses += " text-red-800 dark:text-red-200";
        descriptionClasses += " text-red-700 dark:text-red-300";
    } else if (variant === 'warning') {
        classes += " bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500";
        iconClasses += " text-yellow-600";
        titleClasses += " text-yellow-800 dark:text-yellow-200";
        descriptionClasses += " text-yellow-700 dark:text-yellow-300";
    } else {
        // Default/Blue variant
        classes += " bg-blue-50 dark:bg-blue-900/20 border-blue-500";
        iconClasses += " text-blue-600";
        titleClasses += " text-blue-800 dark:text-blue-200";
        descriptionClasses += " text-blue-700 dark:text-blue-300";
    }

    return (
        <Alert 
            variant={variant === 'destructive' ? 'destructive' : 'default'} // Use default for warning/blue, as Shadcn Alert only supports default/destructive
            className={classes}
        >
            <AlertTriangle className={iconClasses} />
            <AlertTitle className={titleClasses}>
                {block.alertTitle || 'Aviso'}
            </AlertTitle>
            <AlertDescription className={descriptionClasses}>
                {block.value}
            </AlertDescription>
        </Alert>
    );
};

const PricingBlock = ({ block }: { block: ContentBlock }) => {
    return (
        <div className="my-12 text-center space-y-8">
            <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 border-2 border-green-500 rounded-xl shadow-2xl p-8 space-y-6">
                <p className="text-xl font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300">
                    {block.prePriceText}
                </p>
                <div className="flex items-baseline justify-center gap-4">
                    <p className="text-8xl font-extrabold text-green-600">{block.price}</p>
                </div>
                <p className="text-lg font-semibold text-gray-600 dark:text-gray-300">
                    {block.paymentType}
                </p>

                <a href={block.buttonUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                        size="lg"
                        className="w-full h-20 text-2xl font-bold animate-pulse bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-lg"
                    >
                        <Zap className="mr-4 h-8 w-8" />
                        {block.buttonText}
                    </Button>
                </a>

                <p className="text-sm text-gray-500 flex items-center justify-center gap-2">
                    <ShieldCheck className="h-4 w-4" />
                    {block.postButtonText}
                </p>
            </div>
        </div>
    );
};


export function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case 'text':
      return <TextBlock value={block.value} fontSize={block.fontSize} />;
    case 'image':
      return <ImageBlock value={block.value} />;
    case 'alert':
      return <AlertBlock block={block} />;
    case 'pricing':
      return <PricingBlock block={block} />;
    default:
      return <div className="text-red-500">Tipo de bloco desconhecido: {block.type}</div>;
  }
}