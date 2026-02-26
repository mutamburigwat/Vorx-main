import { Palette, CheckCircle2, ArrowRight } from 'lucide-react';
import { CTASection } from '../components/CTASection';

export default function GraphicDesign() {
  const designServices = [
    "Logo design",
    "Brand identity development",
    "Layout design",
    "Print-ready artwork",
    "Packaging design",
    "Signage mockups"
  ];

  const process = [
    { step: "01", title: "Discovery", desc: "We discuss your goals, audience, and visual preferences." },
    { step: "02", title: "Concept", desc: "Our designers create initial drafts for your review." },
    { step: "03", title: "Refinement", desc: "We tweak the chosen concept based on your feedback." },
    { step: "04", title: "Approval", desc: "You sign off on the final design and technical specs." },
    { step: "05", title: "Production", desc: "We move straight to print with perfect artwork files." }
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 border border-primary/20 neon-purple">
                <Palette size={18} />
                <span className="text-sm font-bold uppercase tracking-wider">Design Studio</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Design That Prints Perfectly.</h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-10">
                Creative design solutions that ensure every print and brand asset looks professional. Our in-house studio bridges creative thinking with print production requirements.
              </p>
              <div className="space-y-4">
                {["Professional designers", "Technical print expertise", "Fast turnaround", "Vector-first approach"].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-secondary-cyan" size={20} />
                    <span className="font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-yellow/10 rounded-full blur-3xl" />
              <h3 className="text-2xl font-bold text-white mb-8">What we design</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {designServices.map((service, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                    <span className="text-sm font-medium text-zinc-400">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="text-3xl font-display font-bold text-white mb-12 text-center">Our Design Process</h2>
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((item, i) => (
                <div key={i} className="text-center group">
                  <span className="text-4xl font-display font-bold text-primary/20 mb-4 block group-hover:text-primary/40 transition-colors">{item.step}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="glass text-white p-12 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
            <div className="max-w-3xl relative z-10">
              <h3 className="text-2xl font-bold mb-6">What to send us</h3>
              <p className="text-zinc-400 mb-8">To get started on a design project, please provide:</p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Your current logo (if any)",
                  "Brand guidelines or colours",
                  "Examples of styles you like",
                  "All text content in a document",
                  "High-resolution images",
                  "Dimensions and print specs"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <ArrowRight size={16} className="text-secondary-cyan" />
                    <span className="text-sm font-medium text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="p-6 glass rounded-xl border border-white/10">
                <p className="font-bold text-secondary-cyan mb-2">Bundle & Save</p>
                <p className="text-sm text-zinc-400">Ask about our Design + Print bundles for a complete, stress-free solution.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection 
        title="Need a professional design?"
        subtitle="Our team is ready to help you create high-impact visuals for your brand."
      />
    </div>
  );
}
