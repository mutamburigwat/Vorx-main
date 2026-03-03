import { MessageSquare, Mail, MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';

export default function Contact() {
  const contactCards = [
    {
      title: 'WhatsApp',
      detail: 'Fastest for quotes, updates, and live project questions.',
      value: BUSINESS_INFO.phone,
      href: `https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`,
      icon: MessageSquare,
      accent: 'text-secondary-cyan',
    },
    {
      title: 'Phone',
      detail: 'Call us for direct discussion around timelines and production needs.',
      value: BUSINESS_INFO.phone,
      href: `tel:${BUSINESS_INFO.phone}`,
      icon: Phone,
      accent: 'text-primary',
    },
    {
      title: 'Email',
      detail: 'Best for artwork files, detailed briefs, and more formal project documentation.',
      value: BUSINESS_INFO.email,
      href: `mailto:${BUSINESS_INFO.email}`,
      icon: Mail,
      accent: 'text-secondary-yellow',
    },
    {
      title: 'Hours',
      detail: `Mon-Fri: ${BUSINESS_INFO.hours.monFri}\nSat: ${BUSINESS_INFO.hours.sat}\nSun: ${BUSINESS_INFO.hours.sun}`,
      value: 'Production Hours',
      href: undefined,
      icon: Clock,
      accent: 'text-zinc-300',
    },
  ];

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Contact VORX Prints
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">
                Let us talk through the brief before it goes to print.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                Whether you need a quote, help choosing the right material, or guidance on signage, apparel, or finishing, we are available to help shape the project properly.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Visit Us</p>
              <h2 className="mt-4 text-2xl font-display font-bold text-white">Shop 4, Farm & City Mall</h2>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We are centrally located in Harare CBD, making consultations, pick-ups, and quick production coordination easier for local clients.
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Get Directions
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {contactCards.map((card) => {
              const Icon = card.icon;
              const content = (
                <div className="h-full rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6 transition-all hover:-translate-y-1 hover:border-white/20">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6 ${card.accent}`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-white">{card.title}</h3>
                  <p className="mt-3 text-sm text-zinc-500 leading-relaxed whitespace-pre-line">{card.detail}</p>
                  <p className="mt-5 text-sm font-semibold text-zinc-200">{card.value}</p>
                </div>
              );

              return card.href ? (
                <a key={card.title} href={card.href} target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  {content}
                </a>
              ) : (
                <div key={card.title}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Location</p>
            <h2 className="mt-4 text-3xl font-display font-bold text-white">Drop in, brief us, and collect with less friction.</h2>
            <p className="mt-5 text-zinc-400 leading-relaxed">
              Our CBD location works well for quick consultations, artwork reviews, sampling conversations, and collection once your job is ready.
            </p>
            <div className="mt-8 rounded-[2rem] border border-white/10 bg-dark-bg/30 p-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 shrink-0 text-secondary-yellow" size={22} />
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <p className="mt-2 text-zinc-400">{BUSINESS_INFO.address}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 rounded-[2rem] border border-white/10 bg-dark-bg/30 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Response Time</p>
              <p className="mt-4 text-zinc-400 leading-relaxed">
                We aim to respond to WhatsApp messages promptly during business hours. Email quote requests are typically reviewed the same working day.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-dark-bg/35 min-h-[420px]">
            <div className="absolute inset-0 opacity-35 pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:22px_22px]" />
            </div>
            <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-cyan">Production Consultation</p>
                <h2 className="mt-4 text-3xl font-display font-bold text-white">Need advice before you commit to the job?</h2>
                <p className="mt-5 text-zinc-400 leading-relaxed">
                  Send the rough idea first. We can help refine dimensions, materials, finishing, and output method before the final quote is issued.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-white font-semibold transition-all hover:bg-white/10"
                >
                  Start on WhatsApp
                  <ArrowRight size={18} />
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-4 text-white font-semibold transition-all hover:bg-white/10"
                >
                  Navigate to Shop
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
