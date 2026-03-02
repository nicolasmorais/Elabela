import { Anchor, Layers, ShieldCheck } from 'lucide-react';

export function AntiHairLossScienceSection() {
  return (
    <section className="py-32 px-6 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto space-y-24">
        <div className="text-center space-y-6">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-slate-950 uppercase leading-[0.9]">
            TECNOLOGIA TRIPLA ANCORAGEM™
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Anchor,
              title: "CAMADA 1: ANCORA A RAIZ",
              desc: "Aminoácidos que travam o fio no folículo.",
              analogia: "É como cimentar um poste solto."
            },
            {
              icon: Layers,
              title: "CAMADA 2: RECONSTRÓI A FIBRA",
              desc: "Queratina biomimética que une pontas quebradas.",
              analogia: "É como consertar rachaduras na parede."
            },
            {
              icon: ShieldCheck,
              title: "CAMADA 3: SELA E PROTEGE",
              desc: "Fecha as cutículas contra calor e atrito.",
              analogia: "É como envernizar madeira."
            }
          ].map((step, i) => (
            <div
              key={i}
              className="flex flex-col p-8 bg-white rounded-[3.5rem] border border-orange-100 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="p-4 bg-[#FDF8F3] rounded-2xl w-fit mb-8 group-hover:scale-110 transition-transform">
                <step.icon className="h-8 w-8 text-orange-700" />
              </div>
              <h4 className="text-xl font-black text-slate-950 uppercase mb-4">{step.title}</h4>
              <p className="text-sm text-slate-500 mb-6 font-medium">{step.desc}</p>
              <div className="mt-auto p-5 bg-[#FDF8F3] rounded-3xl text-xs text-slate-500 italic">
                <strong>Analogia:</strong> {step.analogia}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
