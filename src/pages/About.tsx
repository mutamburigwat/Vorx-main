import { CheckCircle2, MapPin, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';

export default function About() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Modern Printing for Modern Brands.</h1>
              <p className="text-xl text-zinc-400 leading-relaxed mb-8">
                VORX Prints is a premium printing and branding house based in Harare, Zimbabwe. We believe that every print is a reflection of a brand's ambition, and we are dedicated to making that reflection as sharp and professional as possible.
              </p>
              <p className="text-lg text-zinc-500 leading-relaxed">
                Located at Farm & City Mall, we serve businesses across the city with a focus on precision, quality materials, and efficient service. From the first sketch to the final press, we are your partners in branding.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square bg-dark-surface rounded-[3rem] overflow-hidden relative shadow-2xl border border-white/5">
                <img 
                   src="/placeholders/about-workshop.svg" 
                   alt="VORX Prints Workshop" 
                   className="w-full h-full object-cover opacity-60"
                   referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary-cyan/40 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center p-12">
                   <img 
                     src={BUSINESS_INFO.logo} 
                     alt={BUSINESS_INFO.name} 
                     className="w-full h-full object-contain opacity-20 grayscale brightness-200"
                     referrerPolicy="no-referrer"
                   />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 glass p-8 rounded-2xl shadow-xl border border-white/10 max-w-xs neon-purple">
                <div className="flex items-center space-x-3 mb-4">
                  <MapPin className="text-primary" size={20} />
                  <span className="font-bold text-white">Harare, Zimbabwe</span>
                </div>
                <p className="text-sm text-zinc-400">Find us at Shop 4, Farm & City Mall, 1 Wynne St.</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-2xl font-display font-bold text-primary mb-8 uppercase tracking-widest text-sm">What we stand for</h2>
              <div className="space-y-6">
                {[
                  { title: "Precision", desc: "Every millimetre matters. We obsess over the details so you don't have to." },
                  { title: "Quality", desc: "We only use premium stocks and inks that stand the test of time." },
                  { title: "Reliability", desc: "When we commit to a deadline, we meet it. Professionalism is our baseline." },
                  { title: "Innovation", desc: "We stay ahead of print trends to offer you the most modern solutions." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 glass rounded-full flex items-center justify-center shrink-0 border border-white/5">
                      <span className="text-primary font-bold">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-sm text-zinc-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-display font-bold text-secondary-cyan mb-8 uppercase tracking-widest text-sm">Why clients choose us</h2>
              <div className="grid gap-4">
                {[
                  "Full-service catalogue from design to finishing.",
                  "Central, accessible location in Harare CBD.",
                  "Direct WhatsApp support for quick queries.",
                  "Transparent pricing with no hidden fees.",
                  "Modern digital and lithographic technology.",
                  "Expert advice on materials and processes."
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 glass rounded-xl border border-white/5 hover:bg-white/5 transition-all">
                    <CheckCircle2 className="text-secondary-cyan" size={20} />
                    <span className="font-medium text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
