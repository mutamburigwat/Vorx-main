import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { CTASection } from '../components/CTASection';
import { ArrowRight } from 'lucide-react';

export default function ServicesHub() {
  const serviceSections = [
    {
      title: 'Print Services',
      description: 'Professional high-quality printing for corporate, marketing, and publishing needs.',
      blocks: [
        {
          title: 'Lithographic (Offset) Printing',
          items: ['Magazines', 'Books', 'Corporate publications', 'Bulk print production'],
        },
        {
          title: 'Digital Printing',
          items: ['Brochures', 'Flyers', 'Business cards', 'Folders', 'Diaries', 'Notebooks', 'Notepads'],
        },
        {
          title: 'Print Finishing',
          items: ['Binding', 'Laminating', 'Cutting & folding', 'Professional finishing solutions'],
        },
      ],
    },
    {
      title: 'Branding & Signage',
      description: 'Complete visual branding solutions for businesses and commercial spaces.',
      blocks: [
        {
          title: 'Branding Solutions',
          items: ['Shop branding', 'Vehicle branding', 'Window graphics', 'Corporate branding installations'],
        },
        {
          title: 'Signage',
          items: ['3D signs', 'Building signage', 'Billboards', 'Directional & corporate signs'],
        },
      ],
    },
    {
      title: 'Sublimation of Field Banners',
      description: 'High-impact banner and event visuals designed for visibility, promotions, and outdoor marketing.',
      blocks: [
        {
          title: 'Field Banner Products',
          items: [
            'Fabric Printing',
            'Gazebos',
            'Teardrop banners',
            'Telescopic banners',
            'Backdrop banners',
            'Snake banners',
            'Pop-up banners',
            'Table cloth branding',
          ],
        },
        {
          title: 'Event Fabric Branding',
          items: ['Event fabric branding', 'Sports & promotional displays', 'Custom branded textiles'],
        },
      ],
    },
    {
      title: 'Corporate Wear & Apparel Branding',
      description: 'Professional branded clothing for teams, organizations, and promotions.',
      blocks: [
        {
          title: 'Apparel',
          items: [
            'Golf shirts',
            'Roundneck T-shirts',
            'Branded formal shirts',
            'Work suits',
            'Khaki shirts',
            'Safari shirts',
            'Jackets & puff jackets',
            'Caps & flop hats',
          ],
        },
        {
          title: 'Branding Methods',
          items: ['Embroidery', 'Heat press', 'Sublimation printing'],
        },
      ],
    },
    {
      title: 'Sublimation of Clothing',
      description: 'Custom full-color clothing sublimation for apparel, uniforms, and sportswear.',
      blocks: [
        {
          title: 'Products',
          items: [
            'Sublimation golf T-shirts',
            'Roundneck T-shirts',
            'Zim T-shirts',
            'Zambia print T-shirts',
            'Custom African print T-shirts',
            'School sports kits (all sports)',
            'Tracksuits',
            'Bucket hats',
          ],
        },
      ],
    },
    {
      title: 'Corporate Gifts & Promotional Items',
      description: 'Branded promotional products that increase brand visibility.',
      blocks: [
        {
          title: 'Items',
          items: ['Key rings', 'Mugs', 'Pens', 'Bottles & drinkware', 'Flasks', 'Medals', 'Lanyards', 'Gift bags', 'Helmets'],
        },
      ],
    },
    {
      title: 'Packaging & Labels',
      description: 'Professional packaging solutions for retail and product businesses.',
      blocks: [
        {
          title: 'Solutions',
          items: ['Product labels', 'Barcode labels', 'Sticker printing', 'Custom packaging solutions'],
        },
      ],
    },
    {
      title: 'Graphic Design Services',
      description: 'Creative design solutions that ensure every print and brand asset looks professional.',
      blocks: [
        {
          title: 'Design Support',
          items: [
            'Brochures',
            'Flyers',
            'Magazines',
            'Company profiles',
            'Letterheads',
            'Business cards',
            'Logo design',
            'Brand identity development',
            'Layout design',
            'Print-ready artwork',
            'Packaging design',
            'Signage mockups',
          ],
        },
      ],
    },
    {
      title: 'Embroidery & Screen Printing',
      description: 'Additional garment branding solutions for uniforms, promotional wear, and bulk apparel runs.',
      blocks: [
        {
          title: 'Services',
          items: ['Embroidery', 'Screen printing'],
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Our Services</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Complete Branding, Printing & Visual Communication Solutions - from concept to production.
            </p>
            <p className="text-lg text-zinc-500 leading-relaxed mt-4">
              We provide end-to-end printing, branding, signage, apparel, and promotional solutions designed to help businesses stand out, communicate clearly, and grow their brand presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="futuristic-card group"
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">Professional {service.name.toLowerCase()} solutions for your business.</p>
                <span className="text-primary text-sm font-semibold flex items-center">
                  View Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {serviceSections.map((section, index) => (
            <div key={section.title} className="glass p-8 md:p-10 rounded-3xl border border-white/10">
              <div className="flex items-center space-x-4 mb-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary font-display font-bold">
                  {index + 1}
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">{section.title}</h2>
              </div>
              <p className="text-zinc-400 mb-8 text-base md:text-lg">{section.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {section.blocks.map((block) => (
                  <div key={block.title} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                    <h3 className="text-white font-bold mb-4">{block.title}</h3>
                    <ul className="space-y-2">
                      {block.items.map((item) => (
                        <li key={item} className="text-zinc-300 text-sm md:text-base flex items-start space-x-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-secondary-cyan shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to start your project?"
        subtitle="Get a professional quote or chat with us on WhatsApp today."
      />
    </div>
  );
}
