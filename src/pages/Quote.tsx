import React from 'react';
import { MessageSquare, Upload, CheckCircle2, Send } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';

export default function Quote() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    product: '',
    quantity: '',
    dimensions: '',
    materials: '',
    deadline: '',
    delivery: 'pickup',
    notes: ''
  });

  const whatsappTemplates = [
    {
      label: "Print Services",
      text: `Hi VORX Prints, I'd like a quote for Print Services:\n\nProduct: [Product Name]\nQuantity: [Quantity]\nSize: [Size]\nFinishing: [Binding/Laminating/Cutting]\nDeadline: [Date]\nDelivery: [Pickup/Delivery]\n\nI have artwork / I need design support.`
    },
    {
      label: "Branding & Signage",
      text: `Hi VORX Prints, I'm interested in Branding & Signage:\n\nService: [Shop Branding/Vehicle Branding/Signage]\nDimensions: [Approx Size]\nDeadline: [Date]\n\nI have a logo / I need design support.`
    },
    {
      label: "Apparel & Sublimation",
      text: `Hi VORX Prints, I need a quote for apparel branding:\n\nGarment: [Golf Shirt/T-shirt/Tracksuit/etc]\nQuantity: [Quantity]\nBranding Method: [Embroidery/Heat Press/Sublimation]\nDeadline: [Date]`
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Request a Quote</h1>
            <p className="text-xl text-zinc-400 leading-relaxed">
              Provide your project details below, and our team will get back to you with a professional, transparent quote.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <form className="space-y-8 bg-dark-surface/50 p-8 md:p-12 rounded-3xl border border-white/5 glass">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Full Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Email Address</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Phone Number</label>
                    <input type="tel" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="+263..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Service Category</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all appearance-none">
                      <option value="" className="bg-dark-surface">Select a service</option>
                      {SERVICES.map(s => <option key={s.id} value={s.id} className="bg-dark-surface">{s.name}</option>)}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Product Details</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. Brochures, Gazebo branding, Golf shirts" />
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Quantity</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. 500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Size/Dimensions</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="e.g. A4, 90x50mm" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Needed By</label>
                    <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest block">Finishing Options</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {['Lamination', 'Spot UV', 'Foil', 'Binding', 'Folding', 'Die-cut'].map(opt => (
                      <label key={opt} className="flex items-center space-x-3 cursor-pointer group">
                        <div className="w-5 h-5 border-2 border-white/10 rounded group-hover:border-primary transition-colors flex items-center justify-center">
                          <div className="w-2.5 h-2.5 bg-primary rounded-sm opacity-0 group-active:opacity-100" />
                        </div>
                        <span className="text-sm text-zinc-400">{opt}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Additional Notes</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" placeholder="Tell us more about your project..."></textarea>
                </div>

                <div className="p-8 border-2 border-dashed border-white/10 rounded-2xl text-center hover:border-primary/50 transition-colors cursor-pointer group">
                  <Upload className="mx-auto text-zinc-600 group-hover:text-primary mb-4" size={32} />
                  <p className="font-bold text-white mb-1">Upload Artwork</p>
                  <p className="text-xs text-zinc-500">Allowed: PDF, AI, EPS, PSD, High-res JPG/PNG (Max 20MB)</p>
                </div>

                <button type="button" className="w-full bg-primary text-white py-5 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all flex items-center justify-center space-x-3 neon-purple">
                  <Send size={20} />
                  <span>Submit Quote Request</span>
                </button>
              </form>
            </div>

            <div className="space-y-12">
              <div>
                <h3 className="text-xl font-bold text-white mb-6">File Prep Guidance</h3>
                <ul className="space-y-4">
                  {[
                    "Use CMYK colour profile for all print files.",
                    "Include 3mm bleed on all edges.",
                    "Ensure all fonts are outlined or embedded.",
                    "Images should be 300dpi at final size.",
                    "Supply vector files for signage and logos."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle2 className="text-secondary-cyan shrink-0 mt-1" size={18} />
                      <span className="text-sm text-zinc-400 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5">
                <div className="flex items-center space-x-3 mb-6 text-secondary-cyan">
                  <MessageSquare size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">WhatsApp Templates</span>
                </div>
                <p className="text-sm text-zinc-500 mb-8">Copy and paste these templates to our WhatsApp for a faster response.</p>
                
                <div className="space-y-6">
                  {whatsappTemplates.map((template, i) => (
                    <div key={i} className="space-y-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">{template.label}</p>
                      <div className="bg-white/5 p-4 rounded-xl border border-white/10 relative group">
                        <pre className="text-[10px] whitespace-pre-wrap font-mono text-zinc-400 leading-relaxed">
                          {template.text}
                        </pre>
                        <a 
                          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(template.text)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-2 right-2 p-2 bg-white/10 rounded-lg hover:bg-secondary-cyan hover:text-zinc-900 transition-all"
                        >
                          <Send size={14} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
