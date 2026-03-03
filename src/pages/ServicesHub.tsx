import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CTASection } from '../components/CTASection';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Motion';

const serviceSummaries: Record<string, { eyebrow: string; summary: string; outputs: string[] }> = {
  'print-services': {
    eyebrow: 'Offset + digital',
    summary: 'High-quality print production for publications, corporate material, and campaign collateral with finishing built in.',
    outputs: ['Brochures', 'Books', 'Magazines'],
  },
  'branding-signage': {
    eyebrow: 'Built environments',
    summary: 'Shopfronts, vehicles, windows, and signage systems that make the brand visible in real space.',
    outputs: ['Vehicle branding', '3D signs', 'Billboards'],
  },
  'large-format-event-branding': {
    eyebrow: 'Outdoor impact',
    summary: 'Field banners, branded event kits, and large visual formats designed to pull attention fast.',
    outputs: ['Fabric printing', 'Gazebos', 'Backdrop banners'],
  },
  'corporate-wear-apparel-branding': {
    eyebrow: 'Uniform presence',
    summary: 'Corporate wear and branded garments that help teams look aligned, polished, and recognisable.',
    outputs: ['Golf shirts', 'Formal shirts', 'Work suits'],
  },
  'sublimation-fabric-printing': {
    eyebrow: 'Full-colour garments',
    summary: 'Sublimation clothing for sportswear, custom collections, and African print-inspired apparel pieces.',
    outputs: ['Tracksuits', 'Sports kits', 'Zambia print tees'],
  },
  'corporate-gifts-promotional-items': {
    eyebrow: 'Brand recall',
    summary: 'Promotional items selected to keep the brand present at events, conferences, and everyday use points.',
    outputs: ['Lanyards', 'Gift bags', 'Mugs'],
  },
  'packaging-labels': {
    eyebrow: 'Shelf-ready',
    summary: 'Packaging and labels that make products look intentional, premium, and retail-ready.',
    outputs: ['Labels', 'Stickers', 'Packaging'],
  },
  'graphic-design-services': {
    eyebrow: 'Creative production',
    summary: 'Artwork and layouts built with real print output in mind, not just screen presentation.',
    outputs: ['Brochures', 'Business cards', 'Company profiles'],
  },
  'embroidery-screen-printing': {
    eyebrow: 'Garment finishing',
    summary: 'Embroidery and screen printing for uniforms, promotional runs, and stitched brand placement.',
    outputs: ['Embroidery', 'Screen printing', 'Uniform branding'],
  },
};

export default function ServicesHub() {
  const serviceSections = [
    {
      title: 'Print Services',
      description: 'Professional high-quality printing for corporate, marketing, and publishing needs.',
      blocks: [
        { title: 'Lithographic (Offset) Printing', items: ['Magazines', 'Books', 'Corporate publications', 'Bulk print production'] },
        { title: 'Digital Printing', items: ['Brochures', 'Flyers', 'Business cards', 'Folders', 'Diaries', 'Notebooks', 'Notepads'] },
        { title: 'Print Finishing', items: ['Binding', 'Laminating', 'Cutting and folding', 'Professional finishing solutions'] },
      ],
    },
    {
      title: 'Branding & Signage',
      description: 'Complete visual branding solutions for businesses and commercial spaces.',
      blocks: [
        { title: 'Branding Solutions', items: ['Shop branding', 'Vehicle branding', 'Window graphics', 'Corporate branding installations'] },
        { title: 'Signage', items: ['3D signs', 'Building signage', 'Billboards', 'Directional and corporate signs'] },
      ],
    },
    {
      title: 'Sublimation of Field Banners',
      description: 'High-impact banner and event visuals designed for visibility, promotions, and outdoor marketing.',
      blocks: [
        { title: 'Field Banner Products', items: ['Fabric Printing', 'Gazebos', 'Teardrop banners', 'Telescopic banners', 'Backdrop banners', 'Snake banners', 'Pop-up banners', 'Table cloth branding'] },
        { title: 'Event Fabric Branding', items: ['Event fabric branding', 'Sports and promotional displays', 'Custom branded textiles'] },
      ],
    },
    {
      title: 'Corporate Wear & Apparel Branding',
      description: 'Professional branded clothing for teams, organizations, and promotions.',
      blocks: [
        { title: 'Apparel', items: ['Golf shirts', 'Roundneck T-shirts', 'Branded formal shirts', 'Work suits', 'Khaki shirts', 'Safari shirts', 'Jackets and puff jackets', 'Caps and flop hats'] },
        { title: 'Branding Methods', items: ['Embroidery', 'Heat press', 'Sublimation printing'] },
      ],
    },
    {
      title: 'Sublimation of Clothing',
      description: 'Custom full-color clothing sublimation for apparel, uniforms, and sportswear.',
      blocks: [
        { title: 'Products', items: ['Sublimation golf T-shirts', 'Roundneck T-shirts', 'Zim T-shirts', 'Zambia print T-shirts', 'Custom African print T-shirts', 'School sports kits', 'Tracksuits', 'Bucket hats'] },
      ],
    },
    {
      title: 'Corporate Gifts & Promotional Items',
      description: 'Branded promotional products that increase brand visibility.',
      blocks: [
        { title: 'Items', items: ['Key rings', 'Mugs', 'Pens', 'Bottles and drinkware', 'Flasks', 'Medals', 'Lanyards', 'Gift bags', 'Helmets'] },
      ],
    },
    {
      title: 'Packaging & Labels',
      description: 'Professional packaging solutions for retail and product businesses.',
      blocks: [
        { title: 'Solutions', items: ['Product labels', 'Barcode labels', 'Sticker printing', 'Custom packaging solutions'] },
      ],
    },
    {
      title: 'Graphic Design Services',
      description: 'Creative design solutions that ensure every print and brand asset looks professional.',
      blocks: [
        { title: 'Design Support', items: ['Brochures', 'Flyers', 'Magazines', 'Company profiles', 'Letterheads', 'Business cards', 'Logo design', 'Brand identity development', 'Layout design', 'Print-ready artwork', 'Packaging design', 'Signage mockups'] },
      ],
    },
    {
      title: 'Embroidery & Screen Printing',
      description: 'Additional garment branding solutions for uniforms, promotional wear, and bulk apparel runs.',
      blocks: [
        { title: 'Services', items: ['Embroidery', 'Screen printing'] },
      ],
    },
  ];

  const stats = [
    { value: `${SERVICES.length}`, label: 'Service lines under one roof' },
    { value: 'End-to-End', label: 'Design, print, finish, and delivery support' },
    { value: 'Harare', label: 'Central coordination for local businesses and events' },
  ];

  return (
    <div className="pt-24">
      <section className="py-20">
        <Reveal className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] items-end">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Full Production Catalogue
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">
                Services built to make brands feel complete, not pieced together.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
                We provide end-to-end printing, branding, signage, apparel, promotional, and design services with one visual standard across every output.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.value} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-2xl md:text-3xl font-display font-bold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {SERVICES.map((service, index) => {
              const highlight = serviceSummaries[service.slug];

              return (
                <Link
                  key={service.id}
                  to={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.09]"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-secondary-cyan">{highlight.eyebrow}</p>
                      <h2 className="mt-4 text-2xl font-display font-bold text-white">{service.name}</h2>
                    </div>
                    <span className="text-5xl font-display font-bold text-white/5">{`0${index + 1}`}</span>
                  </div>
                  <p className="mt-5 text-zinc-400 leading-relaxed">{highlight.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {highlight.outputs.map((item) => (
                      <span key={item} className="rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="mt-10 flex items-center text-primary text-sm font-semibold">
                    View Details
                    <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </Reveal>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {serviceSections.map((section, index) => (
            <Reveal key={section.title} delay={Math.min(index * 0.04, 0.2)}>
              <div className="grid gap-8 rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-8 md:p-10 lg:grid-cols-[0.75fr_1.25fr]">
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/6 text-primary font-display font-bold">
                    {index + 1}
                  </div>
                  <h2 className="mt-6 text-3xl font-display font-bold text-white">{section.title}</h2>
                  <p className="mt-4 text-zinc-400 leading-relaxed">{section.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  {section.blocks.map((block) => (
                    <div key={block.title} className="rounded-[1.75rem] border border-white/10 bg-dark-bg/30 p-6">
                      <h3 className="text-white font-bold text-lg mb-5">{block.title}</h3>
                      <ul className="space-y-3">
                        {block.items.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-zinc-300">
                            <span className="mt-2 h-2 w-2 rounded-full bg-secondary-cyan shrink-0" />
                            <span className="text-sm md:text-base">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to build your next branded project?"
        subtitle="Tell us what you need and we will shape the right mix of print, branding, apparel, and finishing around it."
      />
    </div>
  );
}
