import { CheckCircle2, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';

export default function About() {
  const values = [
    { title: 'Precision', desc: 'Every millimetre matters. We pay attention to layout, finish, registration, and final presentation.' },
    { title: 'Quality', desc: 'We work with materials and finishing choices that help brands look intentional, not improvised.' },
    { title: 'Reliability', desc: 'Production only matters if it lands on time and communicates clearly with the client throughout.' },
    { title: 'Visual Discipline', desc: 'From a business card to a field banner, we aim for one strong standard across every output.' },
  ];

  const reasons = [
    'Full-service catalogue from design through print, finishing, signage, and apparel branding.',
    'A central Harare location that makes consultation, collection, and revisions practical.',
    'Direct WhatsApp support for urgent questions, quote follow-ups, and live coordination.',
    'Transparent pricing and guidance when clients are still deciding on materials or finishes.',
    'Production thinking shaped around real brand use, not just isolated print items.',
    'A sharper visual standard that helps clients look more premium in the market.',
  ];

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                About VORX Prints
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">
                Modern printing for brands that want to look more resolved.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                VORX Prints is a premium printing and branding house based in Harare. We believe every printed piece should reflect a brand's ambition, not just carry its logo.
              </p>
              <p className="mt-5 text-zinc-500 leading-relaxed">
                From concept development to final production, we help businesses translate ideas into print, signage, apparel, packaging, and promotional assets that feel consistent and commercially ready.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { value: 'Harare', label: 'Based in the CBD for easier access and coordination' },
                  { value: 'End-to-End', label: 'Design, branding, print, finishing, and apparel support' },
                  { value: 'Brand-Led', label: 'Output shaped around presentation, not just production' },
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-xl font-display font-bold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
                <div className="relative aspect-square overflow-hidden rounded-[2.25rem]">
                  <img
                    src="/placeholders/about-workshop.svg"
                    alt="VORX Prints Workshop"
                    className="h-full w-full object-cover opacity-75"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(139,92,246,0.22),rgba(34,211,238,0.16))]" />
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <img
                      src={BUSINESS_INFO.logo}
                      alt={BUSINESS_INFO.name}
                      className="h-full w-full object-contain opacity-20 grayscale brightness-200"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                <div className="absolute bottom-8 left-8 max-w-xs rounded-[1.75rem] border border-white/10 bg-dark-bg/70 p-6 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <MapPin className="text-primary" size={18} />
                    <span className="font-semibold text-white">Harare, Zimbabwe</span>
                  </div>
                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">Find us at Shop 4, Farm & City Mall, 1 Wynne St.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What We Stand For</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">The business should feel professional before the client reads a word.</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => (
              <div key={item.title} className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">{`0${index + 1}`}</p>
                <h3 className="mt-4 text-2xl font-display font-bold text-white">{item.title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Why Clients Choose Us</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">A practical production partner with a stronger visual standard.</h2>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
            >
              <MessageSquare size={18} className="text-secondary-cyan" />
              Chat With Us
            </a>
          </div>

          <div className="grid gap-4">
            {reasons.map((item) => (
              <div key={item} className="flex items-start gap-4 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-secondary-cyan" size={20} />
                <span className="font-medium text-zinc-300 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
