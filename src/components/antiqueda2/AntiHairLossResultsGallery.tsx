export function AntiHairLossResultsGallery({ galleryImages }: { galleryImages: string[] }) {
  return (
    <section className="py-24 px-6 bg-white border-y border-orange-100">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <span className="inline-block text-orange-600 font-black text-xs uppercase tracking-[0.4em]">Paixão Nacional</span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 uppercase">
            Resultados Reais
          </h2>
          <div className="h-1.5 w-32 bg-orange-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {galleryImages.map((url, i) => (
            <div key={i} className="group relative aspect-square rounded-[2rem] overflow-hidden shadow-md border border-orange-100">
              <img
                src={url}
                alt={`Resultado ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="text-center pt-8">
          <p className="text-slate-500 font-medium italic">
            Milhares de mulheres compartilhando seus resultados reais todos os dias.
          </p>
        </div>
      </div>
    </section>
  );
}
