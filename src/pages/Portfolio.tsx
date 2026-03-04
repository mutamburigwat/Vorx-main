import React from 'react';
import { Filter, ExternalLink } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = React.useState('All');

  const projects = [
    {
      title: "Corporate Identity Pack",
      service: "Lithographic Printing",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "120gsm Bond, 350gsm Art Board",
      finish: "Matt Lamination, Spot UV",
      turnaround: "5-7 Days",
      brief: "Full stationery set for a leading Harare law firm.",
      category: "Lithographic"
    },
    {
      title: "Retail Window Graphics",
      service: "Large Format Printing",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Contravision, High-tack Vinyl",
      finish: "UV Protection",
      turnaround: "3 Days",
      brief: "Full shopfront branding for a boutique in Farm & City Mall.",
      category: "Large"
    },
    {
      title: "Premium Product Labels",
      service: "Packaging & Labels",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Metallic Foil Stock",
      finish: "Gloss Varnish, Die-cut",
      turnaround: "10 Days",
      brief: "High-end labels for a local organic skincare brand.",
      category: "Packaging"
    },
    {
      title: "Executive Staff Uniforms",
      service: "Embroidery & Garment Branding",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "100% Cotton Pique",
      finish: "High-density Embroidery",
      turnaround: "7 Days",
      brief: "Branded golf shirts and caps for a corporate event.",
      category: "Embroidery"
    },
    {
      title: "Annual Report Print Run",
      service: "Print Services",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "170gsm Art Paper, 300gsm Cover Stock",
      finish: "Perfect Binding, Matt Lamination",
      turnaround: "6 Days",
      brief: "Multi-department annual report print package for a financial institution.",
      category: "Lithographic"
    },
    {
      title: "School Magazine Production",
      service: "Print Services",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "Gloss Text, Silk Cover Board",
      finish: "Saddle Stitching",
      turnaround: "5 Days",
      brief: "Term-end magazine production for a private school group.",
      category: "Lithographic"
    },
    {
      title: "Business Card Rush Print",
      service: "Print Services",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "350gsm Art Board",
      finish: "Round Corner, Matt Lamination",
      turnaround: "24 Hours",
      brief: "Urgent business cards for a startup launch week.",
      category: "Digital"
    },
    {
      title: "Flyer & Brochure Campaign",
      service: "Print Services",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "150gsm Gloss, 250gsm Folded Brochure Stock",
      finish: "Trim & Fold",
      turnaround: "2 Days",
      brief: "Mass campaign collateral for a retail promo weekend.",
      category: "Digital"
    },
    {
      title: "Notebook & Diary Set",
      service: "Print Services",
      image: "/placeholders/portfolio-corporate-identity.svg",
      materials: "Hard Cover Board, Cream Bond",
      finish: "Wire Binding, Foil Cover",
      turnaround: "4 Days",
      brief: "Custom branded diaries and notebooks for executive gifting.",
      category: "Digital"
    },
    {
      title: "Telescopic Banner Series",
      service: "Sublimation of Field Banners",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "PVC Banner Media",
      finish: "Stand Assembly, Eyelets",
      turnaround: "2 Days",
      brief: "Branch-level telescopic banners for a telecom rollout.",
      category: "Large"
    },
    {
      title: "Field Banner Campaign",
      service: "Sublimation of Field Banners",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Outdoor Flex Banner",
      finish: "Hemming, Reinforced Eyelets",
      turnaround: "3 Days",
      brief: "Field-side branding for a regional sports event.",
      category: "Large"
    },
    {
      title: "Highway Campaign Billboards",
      service: "Branding & Signage",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Weatherproof Banner Skin",
      finish: "UV Coat, Frame Fitment",
      turnaround: "5 Days",
      brief: "Billboard production and placement kit for a road campaign.",
      category: "Signage"
    },
    {
      title: "Office Wayfinding System",
      service: "Branding & Signage",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Acrylic, ACP Panels",
      finish: "CNC Cut, Wall Mounting",
      turnaround: "6 Days",
      brief: "Directional and compliance signage for a corporate HQ floor.",
      category: "Signage"
    },
    {
      title: "Reception 3D Logo Sign",
      service: "Branding & Signage",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Acrylic Lettering, LED Modules",
      finish: "Gloss Edge Polish",
      turnaround: "4 Days",
      brief: "Illuminated 3D reception sign for a consulting firm.",
      category: "Signage"
    },
    {
      title: "Fleet Vehicle Branding",
      service: "Branding & Signage",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Cast Vinyl, Reflective Strips",
      finish: "Wrap Application",
      turnaround: "5 Days",
      brief: "Full branding rollout across a delivery fleet.",
      category: "Branding"
    },
    {
      title: "Shopfront Rebrand Installation",
      service: "Branding & Signage",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Vinyl Graphics, Lightbox Faces",
      finish: "On-site Install",
      turnaround: "4 Days",
      brief: "Complete external and internal visual refresh for a retail chain.",
      category: "Branding"
    },
    {
      title: "Premium Beverage Labels",
      service: "Packaging & Labels",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Waterproof Vinyl Label Stock",
      finish: "Contour Die-cut",
      turnaround: "4 Days",
      brief: "Bottle label production for a new beverage line.",
      category: "Packaging"
    },
    {
      title: "Cosmetic Sticker Series",
      service: "Packaging & Labels",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Matte Polypropylene",
      finish: "Kiss-cut Sheets",
      turnaround: "3 Days",
      brief: "Product family labels with variant color coding.",
      category: "Packaging"
    },
    {
      title: "Custom Box Sleeve Set",
      service: "Packaging & Labels",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "350gsm Packaging Board",
      finish: "Crease, Fold, Spot UV",
      turnaround: "7 Days",
      brief: "Retail-ready sleeve packaging for personal care products.",
      category: "Packaging"
    },
    {
      title: "Safari Shirt Teamwear",
      service: "Corporate Wear & Apparel Branding",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "Khaki Cotton Twill",
      finish: "Left-chest Embroidery",
      turnaround: "6 Days",
      brief: "Branded safari shirts for a travel operations team.",
      category: "Embroidery"
    },
    {
      title: "Construction PPE Branding",
      service: "Corporate Wear & Apparel Branding",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "Hi-vis Workwear Fabric",
      finish: "Heat Press Reflective Marks",
      turnaround: "5 Days",
      brief: "Safety-compliant branded workwear for a construction contractor.",
      category: "Embroidery"
    },
    {
      title: "School Sports Kit Package",
      service: "Sublimation of Clothing",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "Sublimation Polyester",
      finish: "Full-color Press",
      turnaround: "8 Days",
      brief: "Complete all-sport kit package for a high school.",
      category: "Sublimation"
    },
    {
      title: "Club Tracksuit Collection",
      service: "Sublimation of Clothing",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "Brushed Performance Fabric",
      finish: "Sublimation Panels",
      turnaround: "9 Days",
      brief: "Custom tracksuit production for a community sports club.",
      category: "Sublimation"
    },
    {
      title: "Bucket Hat Promo Series",
      service: "Sublimation of Clothing",
      image: "/placeholders/portfolio-staff-uniforms.svg",
      materials: "Lightweight Polyester Twill",
      finish: "All-over Sublimation",
      turnaround: "6 Days",
      brief: "Summer campaign bucket hats for a beverage activation.",
      category: "Sublimation"
    },
    {
      title: "Expo Backdrop & Gazebo Kit",
      service: "Sublimation of Field Banners",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Fabric Backdrop, Branded Gazebo Canopy",
      finish: "Hardware Setup & Packing",
      turnaround: "4 Days",
      brief: "Turnkey event booth kit for an industry expo.",
      category: "Events"
    },
    {
      title: "Teardrop Banner Activation Set",
      service: "Sublimation of Field Banners",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Polyester Flag Fabric",
      finish: "Pole System Assembly",
      turnaround: "3 Days",
      brief: "Roadshow-ready teardrop banners and bases.",
      category: "Events"
    },
    {
      title: "Branded Table Cloth Collection",
      service: "Sublimation of Field Banners",
      image: "/placeholders/portfolio-retail-window-graphics.svg",
      materials: "Dye-sub Fabric",
      finish: "Hemmed Edge",
      turnaround: "3 Days",
      brief: "Table cloth branding for sales counters and events.",
      category: "Events"
    },
    {
      title: "Corporate Gift Starter Pack",
      service: "Corporate Gifts & Promotional Items",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Pens, Mugs, Key Rings",
      finish: "Pad Print & Laser Engrave",
      turnaround: "5 Days",
      brief: "Mixed branded gift pack for onboarding clients.",
      category: "Promotional"
    },
    {
      title: "Conference Drinkware Batch",
      service: "Corporate Gifts & Promotional Items",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Steel Bottles, Flasks",
      finish: "UV Print",
      turnaround: "6 Days",
      brief: "Custom drinkware for a technology conference.",
      category: "Promotional"
    },
    {
      title: "Awards Medals Production",
      service: "Corporate Gifts & Promotional Items",
      image: "/placeholders/portfolio-product-labels.svg",
      materials: "Metal Alloy Medals, Ribbons",
      finish: "Laser Engraving",
      turnaround: "7 Days",
      brief: "Event medals and branded ribbons for an annual awards night.",
      category: "Promotional"
    }
  ];

  const categories = ['All', ...Array.from(new Set(projects.map((project) => project.category)))];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Our Work</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              A showcase of precision, quality, and modern branding. Explore our recent projects across Harare.
            </p>
          </div>

          <div className="flex items-center space-x-4 mb-12 overflow-x-auto pb-4 scrollbar-hide">
            <Filter size={20} className="text-zinc-500 shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  activeFilter === cat 
                    ? 'bg-primary text-white shadow-lg neon-purple' 
                    : 'bg-white/5 text-zinc-500 hover:bg-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <div key={i} className="futuristic-card group overflow-hidden">
                <div className="aspect-video bg-dark-surface relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg to-transparent opacity-60" />
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 glass text-[10px] font-bold rounded-full text-primary uppercase tracking-widest border border-white/10">
                      {project.service}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    <ExternalLink size={20} className="text-zinc-500 group-hover:text-primary transition-colors" />
                  </div>
                  <p className="text-zinc-400 mb-8 leading-relaxed">{project.brief}</p>
                  
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8 pt-6 border-t border-white/5">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Materials</p>
                      <p className="text-sm font-medium text-zinc-300">{project.materials}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Finish</p>
                      <p className="text-sm font-medium text-zinc-300">{project.finish}</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 mb-1">Turnaround</p>
                      <p className="text-sm font-medium text-zinc-300">{project.turnaround}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Inspired by our work?"
        subtitle="Let's create something exceptional for your brand."
      />
    </div>
  );
}
