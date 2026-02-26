import { useParams, Link } from 'react-router-dom';
import { CTASection } from '../components/CTASection';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

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
    intro:
      'Professional high-quality printing for corporate, marketing, and publishing needs. We handle lithographic and digital runs plus complete finishing from concept to production.',
    bestFor: ['Corporate marketing materials', 'Publishing and editorial jobs', 'Bulk and repeat print production'],
    products: [
      'Magazines',
      'Books',
      'Corporate publications',
      'Bulk print production',
      'Brochures',
      'Flyers',
      'Business cards',
      'Folders',
      'Diaries',
      'Notebooks',
      'Notepads',
    ],
    materials: ['Bond and art paper stocks', 'Premium digital stocks', 'Coated and uncoated boards', 'Specialty paper options on request'],
    finishing: ['Binding', 'Laminating', 'Cutting & folding', 'Professional finishing solutions'],
    artwork: 'Print-ready PDF preferred (CMYK, 300dpi, 3mm bleed). We can assist if artwork is not ready.',
    turnaround: 'Standard jobs in 2-5 working days; bulk and complex finishing quoted per project.',
  },
  'branding-signage': {
    title: 'Branding & Signage',
    intro:
      'Complete visual branding solutions for businesses and commercial spaces, from installations to permanent signage.',
    bestFor: ['Retail and shop branding', 'Corporate premises and wayfinding', 'Vehicle and window branding'],
    products: [
      'Shop branding',
      'Vehicle branding',
      'Window graphics',
      'Corporate branding installations',
      '3D signs',
      'Building signage',
      'Billboards',
      'Directional & corporate signs',
    ],
    materials: ['Cast and monomeric vinyl', 'Acrylic/Perspex', 'ACM and metal sign substrates', 'Outdoor-rated media and laminates'],
    finishing: ['Installation-ready trimming', 'Mounting and fitting', 'UV/weather protection', 'Post-install support'],
    artwork: 'Vector artwork is ideal for signage and scaling. We can create or clean up files in-house.',
    turnaround: 'Most branding and signage projects are delivered in 3-10 working days depending on size and installation.',
  },
  'large-format-event-branding': {
    title: 'Large Format & Event Branding',
    intro: 'High-impact visuals designed for visibility, promotions, and outdoor marketing.',
    bestFor: ['Events and activations', 'Outdoor campaigns and roadshows', 'Exhibitions and branded setups'],
    products: [
      'Field banners',
      'Gazebos',
      'Teardrop banners',
      'Telescopic banners',
      'Backdrop banners',
      'Snake banners',
      'Pop-up banners',
      'Table cloth branding',
      'Event fabric branding',
      'Sports & promotional displays',
      'Custom branded textiles',
    ],
    materials: ['PVC flex and banner media', 'Fabric and sublimation textiles', 'Display hardware systems', 'Outdoor durable inks'],
    finishing: ['Eyelets and hemming', 'Heat finishing for fabrics', 'Frame and stand setup', 'Pack-ready event kits'],
    artwork: 'Large-format artwork should be high resolution at scale, or vector where possible.',
    turnaround: 'Typical event branding jobs take 2-6 working days based on quantities and kit complexity.',
  },
  'corporate-wear-apparel-branding': {
    title: 'Corporate Wear & Apparel Branding',
    intro: 'Professional branded clothing for teams, organizations, and promotions.',
    bestFor: ['Staff uniforms and corporate identity', 'Campaign and event apparel', 'Teamwear and promotional wear'],
    products: ['Golf shirts', 'Roundneck T-shirts', 'Work suits', 'Khaki shirts', 'Safari shirts', 'Jackets & puff jackets', 'Caps & flop hats'],
    materials: ['Cotton and polyester blends', 'Workwear-grade garments', 'Performance and outdoor fabrics'],
    finishing: ['Embroidery', 'Heat press', 'Sublimation printing'],
    artwork: 'Vector logos are preferred for embroidery digitizing and clean branding output.',
    turnaround: 'Apparel branding is typically completed in 4-10 working days depending on volumes and method.',
  },
  'sublimation-fabric-printing': {
    title: 'Sublimation Fabric Printing',
    intro: 'Custom full-color fabric printing for apparel and sportswear with vibrant, durable output.',
    bestFor: ['Sports teams and schools', 'Custom apparel lines', 'Campaign and identity wear'],
    products: [
      'Sublimation golf T-shirts',
      'Roundneck T-shirts',
      'Zim T-shirts',
      'School sports kits (all sports)',
      'Tracksuits',
      'Bucket hats',
    ],
    materials: ['Sublimation-ready polyester fabrics', 'Performance jersey materials', 'Custom cut-and-sew options'],
    finishing: ['Full-color heat transfer', 'Panel alignment and finishing', 'Size-set production runs'],
    artwork: 'Vector or high-resolution print files with clear sizing and color references.',
    turnaround: 'Most sublimation orders are delivered in 5-12 working days depending on kit size and style mix.',
  },
  'corporate-gifts-promotional-items': {
    title: 'Corporate Gifts & Promotional Items',
    intro: 'Branded promotional products that increase brand visibility and keep your business top-of-mind.',
    bestFor: ['Corporate gifting programs', 'Marketing giveaways', 'Exhibition and activation packs'],
    products: ['Key rings', 'Mugs', 'Pens', 'Bottles & drinkware', 'Flasks', 'Medals'],
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
    finishing: ['Die-cutting', 'Lamination and sealing', 'Variable data/barcode support'],
    artwork: 'Label and packaging artwork should include size specs, dielines, and print-ready files where possible.',
    turnaround: 'Most label and packaging projects are completed in 4-10 working days, depending on complexity.',
  },
  'graphic-design-services': {
    title: 'Graphic Design Services',
    intro: 'Creative design solutions that ensure every print and brand asset looks professional.',
    bestFor: ['New and growing brands', 'Businesses needing print-ready assets', 'Campaigns requiring cohesive visuals'],
    products: ['Logo design', 'Brand identity development', 'Layout design', 'Print-ready artwork', 'Packaging design', 'Signage mockups'],
    materials: ['Digital mockups and print-ready exports', 'Brand guideline-ready asset packs'],
    finishing: ['Concept development', 'Revision cycles', 'Final production-ready file delivery'],
    artwork: 'Share your brief, preferred style, and brand references. We can start from scratch if needed.',
    turnaround: 'Design timelines vary by scope; most focused design jobs are delivered in 2-7 working days.',
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

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/services" className="inline-flex items-center text-zinc-500 hover:text-primary mb-12 transition-colors">
            <ArrowLeft size={18} className="mr-2" />
            <span>Back to Services</span>
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">{content.title}</h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-12">{content.intro}</p>
              
              <div className="mb-12">
                <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs">Best For</h3>
                <ul className="space-y-4">
                  {content.bestFor.map((item: string, i: number) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                      <span className="text-zinc-300 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 glass rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-4">Artwork Requirements</h3>
                <p className="text-zinc-400 mb-6">{content.artwork}</p>
                <h3 className="text-lg font-bold text-white mb-2">Turnaround Guidance</h3>
                <p className="text-zinc-400">{content.turnaround}</p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="glass p-10 rounded-3xl border border-white/5 shadow-sm">
                <h3 className="text-xl font-bold text-white mb-8">What we produce</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.products.map((item: string, i: number) => (
                    <div key={i} className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/5">
                      <div className="w-2 h-2 bg-secondary-cyan rounded-full shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                      <span className="text-sm font-medium text-zinc-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {content.materials && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs">Materials & Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {content.materials.map((item: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-white/5 text-zinc-400 rounded-full text-sm font-medium border border-white/5">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {content.finishing && (
                <div>
                  <h3 className="text-lg font-bold text-white mb-6 uppercase tracking-widest text-xs">Finishing Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {content.finishing.map((item: string, i: number) => (
                      <span key={i} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold border border-primary/20 neon-purple">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title={`Ready to start your ${content.title} project?`}
        subtitle={`Contact us for a bespoke quote or chat with us on WhatsApp today.`}
      />
    </div>
  );
}
