import { MessageSquare, FileText } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { Reveal } from './Motion';

export function CTASection({ title = "Ready to start your project?", subtitle = "Get a professional quote or chat with us on WhatsApp today." }) {
  return (
    <section className="py-20 bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Reveal>
          <div className="glass p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-cyan/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={BUSINESS_INFO.name}
                  className="h-16 w-auto max-w-[260px] object-contain drop-shadow-[0_0_24px_rgba(217,70,239,0.25)]"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">{title}</h2>
              <p className="text-lg text-zinc-400 mb-10 max-w-2xl mx-auto">{subtitle}</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/quote"
                  className="w-full sm:w-auto bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-primary/90 transition-all flex items-center justify-center space-x-2 neon-purple"
                >
                  <FileText size={20} />
                  <span>Get a Quote</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border-2 border-white text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-dark-bg transition-all flex items-center justify-center space-x-2"
                >
                  <MessageSquare size={20} />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
