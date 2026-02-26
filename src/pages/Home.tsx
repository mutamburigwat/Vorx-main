import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MessageSquare, FileText, Palette } from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';

export default function Home() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  const heroHeadlines = [
    "We Print Quality Quantity Quickly",
    "Your Vision, Printed to Perfection.",
    "Modern Branding Solutions for Bold Businesses.",
    "From Concept to Print: We Make You Look Good.",
    "High-Impact Printing That Commands Attention."
  ];

  const heroSubheadlines = [
    "Complete print services, branding, signage, apparel, packaging, and promotional solutions in Harare.",
    "From lithographic and digital printing to large-format event branding and corporate wear.",
    "Graphic design, sublimation fabric printing, and branded gifts delivered with speed and consistency."
  ];

  const popularProducts = [
    "Business Cards", "Brochures", "Books", "Vehicle Branding", "3D Signs", "Gazebos",
    "Teardrop Banners", "Golf Shirts", "Tracksuits", "Branded Mugs", "Product Labels", "Custom Packaging"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 leading-[1.1]">
                {heroHeadlines[0]}
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                {heroSubheadlines[0]}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-dark-bg transition-all text-center flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: [1, 1.02, 1],
              }}
              style={{ y }}
              transition={{ 
                opacity: { duration: 0.8, delay: 0.2 },
                scale: { 
                  duration: 4, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }
              }}
              className="relative hidden lg:block"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl relative border border-white/10 glass">
                {/* Insert a photographic hero instead of the abstract SVG.  Using a
                   relative path means the image will be served from the public
                   folder at build time. */}
                <img
                  src="/hero.png"
                  alt="Premium printing services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/40 to-transparent" />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary-cyan/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            </motion.div>
          </div>
        </div>
        
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4 z-0" />
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-secondary-cyan/5 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-secondary-yellow/5 rounded-full blur-2xl" />
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Our Services</h2>
            <p className="text-zinc-500 max-w-2xl mx-auto">Comprehensive printing and branding solutions tailored to your needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="futuristic-card group"
              >
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors">{service.name}</h3>
                <p className="text-sm text-zinc-500 mb-6">Premium quality {service.name.toLowerCase()} for professional results.</p>
                <span className="text-primary text-sm font-semibold flex items-center">
                  Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Popular Products</h2>
            <p className="text-zinc-500">The most requested items from our Harare workshop.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {popularProducts.map((product) => (
              <div key={product} className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all cursor-default">
                <span className="font-medium text-zinc-300">{product}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Graphic Design Support */}
      <section className="py-24 bg-primary text-white overflow-hidden relative neon-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6">
                <Palette size={18} />
                <span className="text-sm font-semibold uppercase tracking-wider">Design Services</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">No Artwork? No Problem.</h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Our in-house graphic design team can bring your ideas to life. From logo creation to full brand identities, we ensure your print materials look stunning before they hit the press.
              </p>
              <Link
                to="/graphic-design"
                className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-zinc-100 transition-all shadow-xl"
              >
                Explore Design Services
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-secondary-cyan/20 rounded-full blur-3xl" />
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
        </div>
      </section>

      {/* Why VORX */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Why Choose VORX Prints?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Complete Offering: Print, branding, signage, apparel, gifts, packaging, and design under one roof.",
              "Modern Technology: We use digital, offset, and large-format systems for crisp, reliable output.",
              "Quality Materials: We never compromise on stock, inks, fabric substrates, or finishing.",
              "Fast Turnaround: Efficient production workflows to meet urgent and scheduled deadlines.",
              "Central Location: Conveniently located at Farm & City Mall in Harare CBD.",
              "Transparent Pricing: Clear, competitive quotations with no hidden costs."
            ].map((bullet, i) => (
              <div key={i} className="glass p-8 rounded-2xl flex items-start space-x-4 hover:bg-white/10 transition-all">
                <CheckCircle2 className="text-primary shrink-0 mt-1" size={24} />
                <p className="text-zinc-300 font-medium">{bullet}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 bg-dark-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">How It Works</h2>
          </div>
          <div className="grid md:grid-cols-5 gap-8">
            {[
              { step: "01", title: "Request", desc: "Send us your specs via our quote form or WhatsApp." },
              { step: "02", title: "Quote", desc: "Receive a detailed, transparent quote within hours." },
              { step: "03", title: "Design", desc: "Approve your artwork or work with our design team." },
              { step: "04", title: "Print", desc: "We produce your order using premium materials." },
              { step: "05", title: "Deliver", desc: "Collect from our shop or arrange local delivery." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <span className="text-5xl font-display font-bold text-primary/20 absolute -top-4 -left-2">{item.step}</span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
