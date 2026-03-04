import { MessageSquare, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { CTASection } from '../components/CTASection';

export default function Contact() {
  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Get in Touch</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Have a question about a project or need to discuss a custom branding solution? We're here to help.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <div className="space-y-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary neon-purple">
                    <MessageSquare size={24} />
                  </div>
                  <h3 className="font-bold text-white">WhatsApp & Phone</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Chat with us for quick queries and quotes.<br />
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-white hover:text-primary transition-colors"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-secondary-cyan neon-cyan">
                    <Mail size={24} />
                  </div>
                  <h3 className="font-bold text-white">Email</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Send us your artwork and detailed briefs.<br />
                    <span className="font-bold text-white">{BUSINESS_INFO.email}</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-secondary-yellow">
                    <MapPin size={24} />
                  </div>
                  <h3 className="font-bold text-white">Address</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {BUSINESS_INFO.address}<br />
                    <span className="text-xs text-zinc-400 italic">Inside Farm & City Mall</span>
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-zinc-500">
                    <Clock size={24} />
                  </div>
                  <h3 className="font-bold text-white">Hours</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    Mon–Fri: {BUSINESS_INFO.hours.monFri}<br />
                    Sat: {BUSINESS_INFO.hours.sat}<br />
                    Sun: {BUSINESS_INFO.hours.sun}
                  </p>
                </div>
              </div>

              <div className="futuristic-card">
                <h3 className="font-bold text-white mb-4">Response Time</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  We aim to respond to all WhatsApp messages within 1 hour during business hours. Email quotes are typically processed within 4–6 hours.
                </p>
              </div>
            </div>

            <div className="glass rounded-[3rem] overflow-hidden relative min-h-[400px] flex items-center justify-center border border-white/5">
              <div className="text-center p-12 relative z-10">
                <MapPin size={48} className="text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">Visit Our Shop</h3>
                <p className="text-zinc-400 mb-8">We are centrally located in Harare CBD for easy collection and consultations.</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary font-bold hover:underline"
                >
                  <span>Get Directions</span>
                  <ArrowRight size={18} />
                </a>
              </div>
              {/* Map Placeholder Background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:20px_20px]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
