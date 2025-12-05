"use client";

const testimonials = [
  {
    name: "João, 62 anos",
    text: "Gostei de como o guia é explicado. Nunca tinha parado para preparar um chá com tanto cuidado.",
  },
  {
    name: "Renata, 54 anos",
    text: "O vídeo ajuda muito. Foi legal aprender uma prática nova.",
  },
  {
    name: "Sérgio, 58 anos",
    text: "Achei o conteúdo didático e diferente.",
  },
  {
    name: "Eduardo, 65 anos",
    text: "Recebi o acesso logo após o pagamento. Tudo muito direto.",
  },
];

export const TestimonialsV3 = () => {
  return (
    <section className="my-12">
      <h2 className="text-3xl font-bold mb-8 text-center font-sans">
        💬 Depoimentos de leitores
      </h2>
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6"
          >
            <blockquote className="text-xl italic text-gray-700 dark:text-gray-300">
              "{testimonial.text}"
            </blockquote>
            <cite className="mt-4 block not-italic font-semibold text-right">
              — {testimonial.name}
            </cite>
          </div>
        ))}
      </div>
      <p className="text-center mt-6 text-sm text-gray-500">
        (Todos os depoimentos representam opiniões pessoais de leitores.)
      </p>
    </section>
  );
};