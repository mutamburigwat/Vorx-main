import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, FileText, Palette } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';
import { Reveal } from '../components/Motion';

const serviceHighlights: Record<string, { eyebrow: string; summary: string; outputs: string[] }> = {
  'print-services': {
    eyebrow: 'Offset + digital',
    summary: 'Corporate literature, campaign collateral, and publishing work produced with crisp finishing and dependable turnaround.',
    outputs: ['Brochures', 'Books', 'Company profiles'],
  },
  'branding-signage': {
    eyebrow: 'Spaces that sell',
    summary: 'Shopfronts, vehicles, windows, and signage systems built to give brands a visible physical presence.',
    outputs: ['Vehicle branding', '3D signs', 'Window graphics'],
  },
  'large-format-event-branding': {
    eyebrow: 'Outdoor visibility',
    summary: 'Field banners, gazebos, and event branding kits designed to command attention from a distance.',
    outputs: ['Fabric printing', 'Gazebos', 'Backdrop banners'],
  },
  'corporate-wear-apparel-branding': {
    eyebrow: 'Uniform identity',
    summary: 'Professional apparel branding for teams, field staff, campaigns, and formal corporate presentation.',
    outputs: ['Golf shirts', 'Formal shirts', 'Work suits'],
  },
  'sublimation-fabric-printing': {
    eyebrow: 'Full-colour apparel',
    summary: 'Vibrant sublimation for sportswear, custom garments, and African print-inspired clothing lines.',
    outputs: ['Tracksuits', 'Zambia print T-shirts', 'Sports kits'],
  },
  'corporate-gifts-promotional-items': {
    eyebrow: 'Brand recall',
    summary: 'Promotional items selected to keep your brand visible at activations, conferences, and daily touchpoints.',
    outputs: ['Lanyards', 'Gift bags', 'Mugs'],
  },
  'packaging-labels': {
    eyebrow: 'Shelf presence',
    summary: 'Labels and packaging that make products look finished, retail-ready, and consistent across ranges.',
    outputs: ['Product labels', 'Stickers', 'Packaging'],
  },
  'graphic-design-services': {
    eyebrow: 'Creative production',
    summary: 'Artwork, layouts, and brand assets developed to move cleanly from concept to final print output.',
    outputs: ['Brochures', 'Magazines', 'Business cards'],
  },
  'embroidery-screen-printing': {
    eyebrow: 'Garment finishing',
    summary: 'Durable branding methods for uniforms, campaigns, bulk apparel runs, and stitched logo placement.',
    outputs: ['Embroidery', 'Screen printing', 'Uniform branding'],
  },
};

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 90]);

  const credibilityStats = [
    { value: '2-5 Days', label: 'Core print turnaround on standard jobs' },
    { value: 'End-to-End', label: 'Design, print, finishing, branding, and apparel' },
    { value: 'Harare CBD', label: 'Easy coordination, collection, and client support' },
  ];

  const featuredCollections = [
    {
      title: 'Campaign Launch Packs',
      summary: 'For promotions, activations, and product launches that need every touchpoint aligned.',
      items: ['Brochures', 'Flyers', 'Gazebos', 'Branded gifts'],
    },
    {
      title: 'Corporate Identity Sets',
      summary: 'For businesses that need a polished presentation across stationery, apparel, and signage.',
      items: ['Business cards', 'Letterheads', 'Formal shirts', 'Reception signage'],
    },
    {
      title: 'Sports & Teamwear',
      summary: 'For schools, teams, and clubs that need durable apparel with bold full-colour graphics.',
      items: ['Tracksuits', 'Sports kits', 'Bucket hats', 'Zambia print tees'],
    },
  ];

  const trustSignals = [
    'Complete offering under one roof, from design concept to final branded delivery.',
    'Production-focused output built for campaigns, retail visibility, uniforms, and events.',
    'Material quality and finishing standards that keep your brand looking deliberate, not improvised.',
    'Responsive coordination for urgent jobs, repeats, and large branded rollouts.',
    'A sharper visual standard across print, signage, apparel, packaging, and giveaways.',
    'Clear quoting and practical guidance when artwork or specs are still being prepared.',
  ];

  const serviceCards = SERVICES.map((service) => ({
    ...service,
    ...serviceHighlights[service.slug],
  }));

  return (
    <div className="pt-24">
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.16),transparent_24%),radial-gradient(circle_at_78%_14%,rgba(34,211,238,0.10),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_18%)]" />
        <div className="absolute inset-y-0 right-0 hidden lg:block w-[42%] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-zinc-300">
                <span className="h-2 w-2 rounded-full bg-secondary-cyan shadow-[0_0_14px_rgba(34,211,238,0.8)]" />
                Harare Print & Branding Studio
              </div>

              <h1 className="mt-8 max-w-4xl text-5xl md:text-7xl font-display font-bold leading-[1.02] text-white">
                Print work that looks ready for the boardroom, the street, and the spotlight.
              </h1>

              <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-zinc-400">
                VORX Prints delivers premium print, signage, apparel, packaging, and branded merchandise with a cleaner visual standard and production discipline that reflects serious businesses.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary/90 transition-all text-center flex items-center justify-center space-x-2 neon-purple"
                >
                  <FileText size={20} />
                  <span>Get a Quote</span>
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/15 bg-white/6 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {credibilityStats.map((stat) => (
                  <div
                    key={stat.value}
                    className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] px-5 py-5 shadow-[0_24px_50px_rgba(0,0,0,0.18)]"
                  >
                    <p className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{
                opacity: 1,
                scale: [1, 1.015, 1],
              }}
              style={{ y }}
              transition={{
                opacity: { duration: 0.8, delay: 0.2 },
                scale: {
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <img
                    src="/hero.png"
                    alt="Premium printing services"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,9,11,0.05)_0%,rgba(9,9,11,0.42)_100%)]" />
                </div>

                <div className="absolute left-7 right-7 top-7 flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-white/10 bg-dark-bg/55 px-4 py-3 backdrop-blur-md">
                    <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Signature Output</p>
                    <p className="mt-2 text-sm font-semibold text-white">Print, signage, apparel, and gifting that feels premium.</p>
                  </div>
                </div>

                <div className="absolute left-7 bottom-7 max-w-sm rounded-[1.75rem] border border-white/10 bg-dark-bg/70 p-6 backdrop-blur-md">
                  <p className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">Production Focus</p>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    {['Brochures', 'Field banners', 'Corporate wear', 'Labels', 'Promotional items', 'Embroidery'].map((item) => (
                      <div key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-medium text-zinc-200">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute -top-8 -right-4 h-28 w-28 rounded-full bg-primary/16 blur-3xl" />
              <div className="absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-secondary-cyan/12 blur-3xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Featured Production Lines</p>
              <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">What clients usually trust us to package together.</h2>
            </div>
            <p className="max-w-xl text-zinc-500">
              Not just single products. We build coordinated print and branding sets that make launches, uniforms, and campaigns feel complete.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredCollections.map((collection, index) => (
              <div
                key={collection.title}
                className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.025))] p-8"
              >
                <div className="absolute right-5 top-5 text-6xl font-display font-bold text-white/5">{`0${index + 1}`}</div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-secondary-cyan">Collection</p>
                <h3 className="mt-4 text-2xl font-display font-bold text-white">{collection.title}</h3>
                <p className="mt-4 text-zinc-400 leading-relaxed">{collection.summary}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {collection.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-zinc-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Our Services</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">A stronger presentation across every production line.</h2>
            <p className="mt-5 text-lg text-zinc-500 leading-relaxed">
              Each service is positioned to support brand visibility, consistency, and quality from first impression to final delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {serviceCards.map((service, index) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary-cyan">{service.eyebrow}</p>
                    <h3 className="mt-4 text-2xl font-display font-bold text-white leading-tight">{service.name}</h3>
                  </div>
                  <span className="text-5xl font-display font-bold text-white/5">{`0${index + 1}`}</span>
                </div>

                <p className="mt-5 text-zinc-400 leading-relaxed">{service.summary}</p>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.outputs.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex items-center text-primary text-sm font-semibold">
                  Learn More
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden py-24 text-white border-y border-white/5 bg-[linear-gradient(135deg,#0b0b10_0%,#14111c_45%,#09090b_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/8 border border-white/10 px-4 py-2 rounded-full mb-6">
                <Palette size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">Design Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">No Artwork? No Problem.</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our in-house graphic design team develops brochures, flyers, business cards, company profiles, magazines, and brand assets that already feel production-ready before they hit the press.
              </p>
              <Link
                to="/graphic-design"
                className="inline-block bg-white/10 border border-white/15 text-white px-8 py-4 rounded-full font-bold hover:bg-white/15 transition-all shadow-xl"
              >
                Explore Design Services
              </Link>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-cyan/12 rounded-full blur-3xl" />
                <div className="absolute -bottom-12 -right-8 w-56 h-56 bg-primary/12 rounded-full blur-3xl" />
                <div className="aspect-square bg-white/5 backdrop-blur-sm border border-white/10 p-4 rounded-[2rem] overflow-hidden shadow-2xl">
                  <img
                    src="/design.png"
                    alt="Graphic Design Studio"
                    className="w-full h-full object-cover rounded-2xl opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="py-24">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Why VORX</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-bold text-white">The work needs to feel polished before clients even touch it.</h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {trustSignals.map((bullet) => (
              <div key={bullet} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 shadow-[0_24px_50px_rgba(0,0,0,0.16)]">
                <CheckCircle2 className="text-primary" size={22} />
                <p className="mt-5 text-zinc-300 font-medium leading-relaxed">{bullet}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="py-24 bg-dark-surface/50 border-t border-white/5">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">How It Works</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-bold text-white">A production flow built to keep things moving.</h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Request', desc: 'Send specs, quantities, or brand references through the quote form or WhatsApp.' },
              { step: '02', title: 'Quote', desc: 'We prepare a clear scope with practical options on materials, finishing, and turnaround.' },
              { step: '03', title: 'Design', desc: 'Approve your supplied artwork or let our team prepare production-ready visuals.' },
              { step: '04', title: 'Produce', desc: 'Your job moves through print, branding, finishing, or garment production with quality checks.' },
              { step: '05', title: 'Deliver', desc: 'Collect in town or coordinate delivery once the job is complete and ready.' },
            ].map((item) => (
              <div key={item.step} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6">
                <span className="text-5xl font-display font-bold text-white/6 absolute top-4 right-4">{item.step}</span>
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary-cyan">Step {item.step}</p>
                  <h3 className="mt-4 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection />
    </div>
  );
}
