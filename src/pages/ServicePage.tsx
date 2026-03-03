import { useParams, Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';

type ServiceContent = {
  title: string;
  intro: string;
  bestFor: string[];
  products: string[];
  materials?: string[];
  finishing?: string[];
  artwork: string;
  turnaround: string;
};

const SERVICE_CONTENT: Record<string, ServiceContent> = {
  'print-services': {
    title: 'Print Services',
    intro: 'Professional high-quality printing for corporate, marketing, and publishing needs. We handle lithographic and digital runs plus complete finishing from concept to production.',
    bestFor: ['Corporate marketing materials', 'Publishing and editorial jobs', 'Bulk and repeat print production'],
    products: ['Magazines', 'Books', 'Corporate publications', 'Bulk print production', 'Brochures', 'Flyers', 'Business cards', 'Folders', 'Diaries', 'Notebooks', 'Notepads'],
    materials: ['Bond and art paper stocks', 'Premium digital stocks', 'Coated and uncoated boards', 'Specialty paper options on request'],
    finishing: ['Binding', 'Laminating', 'Cutting and folding', 'Professional finishing solutions'],
    artwork: 'Print-ready PDF preferred (CMYK, 300dpi, 3mm bleed). We can assist if artwork is not ready.',
    turnaround: 'Standard jobs in 2-5 working days; bulk and complex finishing quoted per project.',
  },
  'branding-signage': {
    title: 'Branding & Signage',
    intro: 'Complete visual branding solutions for businesses and commercial spaces, from installations to permanent signage.',
    bestFor: ['Retail and shop branding', 'Corporate premises and wayfinding', 'Vehicle and window branding'],
    products: ['Shop branding', 'Vehicle branding', 'Window graphics', 'Corporate branding installations', '3D signs', 'Building signage', 'Billboards', 'Directional and corporate signs'],
    materials: ['Cast and monomeric vinyl', 'Acrylic/Perspex', 'ACM and metal sign substrates', 'Outdoor-rated media and laminates'],
    finishing: ['Installation-ready trimming', 'Mounting and fitting', 'UV and weather protection', 'Post-install support'],
    artwork: 'Vector artwork is ideal for signage and scaling. We can create or clean up files in-house.',
    turnaround: 'Most branding and signage projects are delivered in 3-10 working days depending on size and installation.',
  },
  'large-format-event-branding': {
    title: 'Sublimation of Field Banners',
    intro: 'High-impact field banner and event visuals designed for visibility, promotions, and outdoor marketing.',
    bestFor: ['Events and activations', 'Outdoor campaigns and roadshows', 'Exhibitions and branded setups'],
    products: ['Fabric Printing', 'Gazebos', 'Teardrop banners', 'Telescopic banners', 'Backdrop banners', 'Snake banners', 'Pop-up banners', 'Table cloth branding', 'Event fabric branding', 'Sports and promotional displays', 'Custom branded textiles'],
    materials: ['PVC flex and banner media', 'Fabric and sublimation textiles', 'Display hardware systems', 'Outdoor durable inks'],
    finishing: ['Eyelets and hemming', 'Heat finishing for fabrics', 'Frame and stand setup', 'Pack-ready event kits'],
    artwork: 'Large-format artwork should be high resolution at scale, or vector where possible.',
    turnaround: 'Typical event branding jobs take 2-6 working days based on quantities and kit complexity.',
  },
  'corporate-wear-apparel-branding': {
    title: 'Corporate Wear & Apparel Branding',
    intro: 'Professional branded clothing for teams, organizations, and promotions.',
    bestFor: ['Staff uniforms and corporate identity', 'Campaign and event apparel', 'Teamwear and promotional wear'],
    products: ['Golf shirts', 'Roundneck T-shirts', 'Branded formal shirts', 'Work suits', 'Khaki shirts', 'Safari shirts', 'Jackets and puff jackets', 'Caps and flop hats'],
    materials: ['Cotton and polyester blends', 'Workwear-grade garments', 'Performance and outdoor fabrics'],
    finishing: ['Embroidery', 'Heat press', 'Sublimation printing'],
    artwork: 'Vector logos are preferred for embroidery digitizing and clean branding output.',
    turnaround: 'Apparel branding is typically completed in 4-10 working days depending on volumes and method.',
  },
  'sublimation-fabric-printing': {
    title: 'Sublimation of Clothing',
    intro: 'Custom full-color clothing sublimation for apparel and sportswear with vibrant, durable output.',
    bestFor: ['Sports teams and schools', 'Custom apparel lines', 'Campaign and identity wear'],
    products: ['Sublimation golf T-shirts', 'Roundneck T-shirts', 'Zim T-shirts', 'Zambia print T-shirts', 'Custom African print T-shirts', 'School sports kits', 'Tracksuits', 'Bucket hats'],
    materials: ['Sublimation-ready polyester fabrics', 'Performance jersey materials', 'Custom cut-and-sew options'],
    finishing: ['Full-color heat transfer', 'Panel alignment and finishing', 'Size-set production runs'],
    artwork: 'Vector or high-resolution print files with clear sizing and colour references.',
    turnaround: 'Most sublimation orders are delivered in 5-12 working days depending on kit size and style mix.',
  },
  'corporate-gifts-promotional-items': {
    title: 'Corporate Gifts & Promotional Items',
    intro: 'Branded promotional products that increase brand visibility and keep your business top-of-mind.',
    bestFor: ['Corporate gifting programs', 'Marketing giveaways', 'Exhibition and activation packs'],
    products: ['Key rings', 'Mugs', 'Pens', 'Bottles and drinkware', 'Flasks', 'Medals', 'Lanyards', 'Gift bags', 'Helmets'],
    materials: ['Metal, plastic, ceramic, and glass options', 'Premium gift-grade item selections'],
    finishing: ['Pad printing', 'Laser engraving', 'UV and transfer branding'],
    artwork: 'Vector logo files produce the cleanest result on small surfaces and curved items.',
    turnaround: 'Lead times are usually 5-10 working days depending on stock availability and branding method.',
  },
  'packaging-labels': {
    title: 'Packaging & Labels',
    intro: 'Professional packaging solutions for retail and product businesses.',
    bestFor: ['Product-based businesses', 'Retail shelf visibility', 'Branded packaging systems'],
    products: ['Product labels', 'Barcode labels', 'Sticker printing', 'Custom packaging solutions'],
    materials: ['Self-adhesive paper and vinyl', 'Kraft and board packaging substrates', 'Specialty label stocks'],
    finishing: ['Die-cutting', 'Lamination and sealing', 'Variable data and barcode support'],
    artwork: 'Label and packaging artwork should include size specs, dielines, and print-ready files where possible.',
    turnaround: 'Most label and packaging projects are completed in 4-10 working days, depending on complexity.',
  },
  'graphic-design-services': {
    title: 'Graphic Design Services',
    intro: 'Creative design solutions that ensure every print and brand asset looks professional.',
    bestFor: ['New and growing brands', 'Businesses needing print-ready assets', 'Campaigns requiring cohesive visuals'],
    products: ['Brochures', 'Flyers', 'Magazines', 'Company profiles', 'Letterheads', 'Business cards', 'Logo design', 'Brand identity development', 'Layout design', 'Print-ready artwork', 'Packaging design', 'Signage mockups'],
    materials: ['Digital mockups and print-ready exports', 'Brand guideline-ready asset packs'],
    finishing: ['Concept development', 'Revision cycles', 'Final production-ready file delivery'],
    artwork: 'Share your brief, preferred style, and brand references. We can start from scratch if needed.',
    turnaround: 'Design timelines vary by scope; most focused design jobs are delivered in 2-7 working days.',
  },
  'embroidery-screen-printing': {
    title: 'Embroidery & Screen Printing',
    intro: 'Additional branding solutions for garments, uniforms, and promotional wear with durable stitched and printed finishes.',
    bestFor: ['Workwear and uniforms', 'Promotional apparel runs', 'Bulk garment branding'],
    products: ['Embroidery', 'Screen printing'],
    materials: ['Cotton, polyester, and blended garments', 'Uniform and promotional wear fabrics'],
    finishing: ['Digitizing and stitch setup', 'Single-colour and multi-colour screen printing'],
    artwork: 'Vector artwork is preferred for clean screen separation and accurate embroidery digitizing.',
    turnaround: 'Typical embroidery and screen printing orders are completed in 4-10 working days, depending on volume and garment type.',
  },
};

export default function ServicePage() {
  const { slug } = useParams();
  const content = SERVICE_CONTENT[slug || ''];

  if (!content) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <Link to="/services" className="text-primary hover:underline">Back to all services</Link>
      </div>
    );
  }

  const infoTiles = [
    { value: `${content.products.length}+`, label: 'Typical product outputs' },
    { value: `${content.materials?.length ?? 0}+`, label: 'Material and option references' },
    { value: `${content.finishing?.length ?? 0}+`, label: 'Finishing and execution choices' },
  ];

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-zinc-500 hover:text-primary mb-10 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Services</span>
          </Link>

          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-start">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Service Detail
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">{content.title}</h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">{content.intro}</p>

              <div className="mt-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Best For</p>
                <div className="mt-5 grid gap-4">
                  {content.bestFor.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4">
                      <CheckCircle2 className="mt-1 shrink-0 text-secondary-cyan" size={18} />
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-10">
              <div className="grid gap-4 sm:grid-cols-3">
                {infoTiles.map((tile) => (
                  <div key={tile.label} className="rounded-[1.5rem] border border-white/10 bg-dark-bg/35 p-5">
                    <p className="text-2xl font-display font-bold text-white">{tile.value}</p>
                    <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{tile.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-dark-bg/35 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Artwork Requirements</p>
                <p className="mt-4 text-zinc-400 leading-relaxed">{content.artwork}</p>
              </div>

              <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-dark-bg/35 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Turnaround Guidance</p>
                <p className="mt-4 text-zinc-400 leading-relaxed">{content.turnaround}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 border-y border-white/5 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">What We Produce</p>
                <h2 className="mt-4 text-3xl font-display font-bold text-white">Core outputs within this service line.</h2>
              </div>
              <ArrowRight size={24} className="hidden md:block text-white/20" />
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.products.map((item, index) => (
                <div key={item} className="flex items-center justify-between gap-4 rounded-[1.35rem] border border-white/10 bg-dark-bg/35 px-4 py-4">
                  <span className="text-sm font-medium text-zinc-300">{item}</span>
                  <span className="text-xs font-display font-bold text-white/25">{`0${(index % 9) + 1}`}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {content.materials && (
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Materials and Options</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {content.materials.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-zinc-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {content.finishing && (
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Finishing Options</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {content.finishing.map((item) => (
                    <span key={item} className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary neon-purple">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title={`Ready to start your ${content.title} project?`}
        subtitle="Share your specs, quantities, or brand requirements and we will guide the right production approach."
      />
    </div>
  );
}
