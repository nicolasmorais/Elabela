"use client";

interface ContentAPProps {
  imageUrl1: string;
  advertorialText: string;
  imageUrl2: string;
  guaranteeText: string;
}

export const ContentAP = ({ imageUrl1, advertorialText, imageUrl2, guaranteeText }: ContentAPProps) => {
  // Processa o texto para substituir *texto* por <strong>texto</strong> e novas linhas por <br>
  const formattedAdvertorialText = advertorialText
    .replace(/\*(.*?)\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br />');

  return (
    <section className="space-y-6 text-xl leading-relaxed py-8">
      {imageUrl1 && (
        <img
          src={imageUrl1}
          alt="Imagem principal do advertorial"
          className="w-full h-auto rounded-lg my-6 shadow-md"
        />
      )}
      
      <div className="prose prose-xl dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: formattedAdvertorialText }} />

      {imageUrl2 && (
        <img
          src={imageUrl2}
          alt="Imagem secundária do advertorial"
          className="w-full h-auto rounded-lg my-6 shadow-md"
        />
      )}

      {guaranteeText && (
        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 text-center">
          <p className="text-lg leading-relaxed">{guaranteeText}</p>
        </div>
      )}
    </section>
  );
};