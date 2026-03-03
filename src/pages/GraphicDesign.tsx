import { Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export default function GraphicDesign() {
  const designServices = [
    'Logo design',
    'Brand identity development',
    'Brochures and flyers',
    'Business cards and letterheads',
    'Packaging design',
    'Signage mockups',
    'Company profiles',
    'Print-ready artwork',
  ];

  const process = [
    { step: '01', title: 'Discovery', desc: 'We align on goals, audience, format, and the feeling the final piece should communicate.' },
    { step: '02', title: 'Concept', desc: 'Initial visual directions are developed with print and brand application in mind.' },
    { step: '03', title: 'Refinement', desc: 'The chosen route is sharpened through structured feedback and technical adjustment.' },
    { step: '04', title: 'Approval', desc: 'Final artwork is signed off with the right dimensions, finishes, and production specs.' },
    { step: '05', title: 'Production', desc: 'The design moves straight into print or branding with clean, usable output files.' },
  ];

  const prepList = [
    'Your current logo or brand assets',
    'Preferred colours or brand guidelines',
    'Examples of styles you like',
    'All text content in a document',
    'High-resolution images where needed',
    'Final dimensions and print specifications',
  ];

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                <Palette size={16} />
                <span>In-House Design Studio</span>
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">
                Design work that already looks ready for production.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                We bridge creative direction with real print execution, helping brands create visuals that look sharp on screen and hold up once produced.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {['Professional designers', 'Print-aware artwork setup', 'Fast turnaround', 'Vector-first execution'].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                    <CheckCircle2 className="text-secondary-cyan shrink-0" size={18} />
                    <span className="font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What We Design</p>
              <h2 className="mt-4 text-3xl font-display font-bold text-white">Brand assets built to move cleanly into print.</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {designServices.map((service) => (
                  <div key={service} className="rounded-[1.5rem] border border-white/10 bg-dark-bg/30 px-4 py-4 text-sm font-medium text-zinc-300">
                    {service}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Process</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">A design flow built to reduce rework and improve output quality.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {process.map((item) => (
              <div key={item.step} className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6">
                <span className="absolute right-5 top-5 text-5xl font-display font-bold text-white/6">{item.step}</span>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary-cyan">Step {item.step}</p>
                <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What to Send Us</p>
            <h2 className="mt-4 text-3xl font-display font-bold text-white">Inputs that help the design move faster.</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {prepList.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-dark-bg/30 p-4">
                  <ArrowRight size={16} className="mt-1 shrink-0 text-secondary-cyan" />
                  <span className="text-sm font-medium text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2.5rem] border border-white/10 bg-dark-bg/35 p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Design + Print Advantage</p>
            <h2 className="mt-4 text-3xl font-display font-bold text-white">One team shaping both the idea and the output.</h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              Because the design and production conversation happens under one roof, artwork decisions can be made with stock, size, finish, and execution already in view.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/6 p-6">
              <p className="font-semibold text-secondary-cyan">Bundle and Save</p>
              <p className="mt-3 text-sm text-zinc-400">
                Ask about combined Design + Print packages if you want a full branded solution without splitting creative and production across different suppliers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Need a professional design?"
        subtitle="Our team is ready to create print-ready visuals that give your brand more presence."
      />
    </div>
  );
}
