import React from 'react';
import { MessageSquare, Upload, CheckCircle2, Send, ArrowRight } from 'lucide-react';
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
    notes: '',
  });

  const whatsappTemplates = [
    {
      label: 'Print Services',
      text: `Hi VORX Prints, I'd like a quote for Print Services:\n\nProduct: [Product Name]\nQuantity: [Quantity]\nSize: [Size]\nFinishing: [Binding/Laminating/Cutting]\nDeadline: [Date]\nDelivery: [Pickup/Delivery]\n\nI have artwork / I need design support.`,
    },
    {
      label: 'Branding & Signage',
      text: `Hi VORX Prints, I'm interested in Branding & Signage:\n\nService: [Shop Branding/Vehicle Branding/Signage]\nDimensions: [Approx Size]\nDeadline: [Date]\n\nI have a logo / I need design support.`,
    },
    {
      label: 'Apparel & Sublimation',
      text: `Hi VORX Prints, I need a quote for apparel branding:\n\nGarment: [Golf Shirt/T-shirt/Tracksuit/etc]\nQuantity: [Quantity]\nBranding Method: [Embroidery/Heat Press/Sublimation]\nDeadline: [Date]`,
    },
  ];

  const checklist = [
    'Use CMYK colour profile for all print files.',
    'Include 3mm bleed on all edges.',
    'Ensure all fonts are outlined or embedded.',
    'Images should be 300dpi at final size.',
    'Supply vector files for signage and logos.',
  ];

  const handleFieldChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  return (
    <div className="pt-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] items-end">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Quotation Desk
              </div>
              <h1 className="mt-8 text-4xl md:text-6xl font-display font-bold text-white leading-[1.04]">
                Tell us the brief. We will shape the right production route around it.
              </h1>
              <p className="mt-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
                Use the form below to share quantities, specifications, deadlines, and artwork status. The clearer the brief, the faster we can quote accurately.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { value: 'Fast', label: 'WhatsApp and email response during business hours' },
                { value: 'Clear', label: 'Practical advice on print, branding, materials, and finish' },
                { value: 'Flexible', label: 'Support whether artwork is ready or still in progress' },
              ].map((item) => (
                <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.18)]">
                  <p className="text-2xl font-display font-bold text-white">{item.value}</p>
                  <p className="mt-2 text-sm text-zinc-500 leading-relaxed">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <form className="rounded-[2.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-10 space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Full Name</label>
                  <input name="name" value={formData.name} onChange={handleFieldChange} type="text" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Email Address</label>
                  <input name="email" value={formData.email} onChange={handleFieldChange} type="email" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Phone Number</label>
                  <input name="phone" value={formData.phone} onChange={handleFieldChange} type="tel" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="+263..." />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Service Category</label>
                  <select name="service" value={formData.service} onChange={handleFieldChange} className="w-full appearance-none rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option value="" className="bg-dark-surface">Select a service</option>
                    {SERVICES.map((service) => (
                      <option key={service.id} value={service.id} className="bg-dark-surface">
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Product Details</label>
                <input name="product" value={formData.product} onChange={handleFieldChange} type="text" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. brochures, gazebo branding, golf shirts, packaging labels" />
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Quantity</label>
                  <input name="quantity" value={formData.quantity} onChange={handleFieldChange} type="text" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. 500" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Size or Dimensions</label>
                  <input name="dimensions" value={formData.dimensions} onChange={handleFieldChange} type="text" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. A4, 90x50mm, 3x2m" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Needed By</label>
                  <input name="deadline" value={formData.deadline} onChange={handleFieldChange} type="date" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Materials or Preferences</label>
                <input name="materials" value={formData.materials} onChange={handleFieldChange} type="text" className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="e.g. matt lamination, cotton fabric, vinyl, premium board" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase tracking-[0.28em]">Additional Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleFieldChange} rows={5} className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/20" placeholder="Tell us more about the project, artwork status, delivery preference, or anything that affects the quote." />
              </div>

              <div className="rounded-[1.75rem] border-2 border-dashed border-white/10 bg-dark-bg/25 p-8 text-center transition-colors hover:border-primary/40">
                <Upload className="mx-auto mb-4 text-zinc-500" size={32} />
                <p className="font-bold text-white">Artwork Upload Area</p>
                <p className="mt-2 text-sm text-zinc-500">Allowed: PDF, AI, EPS, PSD, high-resolution JPG or PNG.</p>
              </div>

              <button type="button" className="w-full rounded-2xl bg-primary py-5 text-lg font-bold text-white transition-all hover:bg-primary/90 flex items-center justify-center gap-3 neon-purple">
                <Send size={20} />
                Submit Quote Request
              </button>
            </form>

            <div className="space-y-6">
              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">File Prep Guidance</p>
                <ul className="mt-6 space-y-4">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 shrink-0 text-secondary-cyan" size={18} />
                      <span className="text-sm font-medium text-zinc-400">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-6">
                <div className="flex items-center gap-3 text-secondary-cyan">
                  <MessageSquare size={22} />
                  <p className="text-xs font-semibold uppercase tracking-[0.28em]">WhatsApp Templates</p>
                </div>
                <p className="mt-4 text-sm text-zinc-500">
                  If you prefer a faster conversation, use one of these templates to start the quote process on WhatsApp.
                </p>

                <div className="mt-6 space-y-5">
                  {whatsappTemplates.map((template) => (
                    <div key={template.label} className="rounded-[1.5rem] border border-white/10 bg-dark-bg/30 p-4">
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">{template.label}</p>
                        <a
                          href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}?text=${encodeURIComponent(template.text)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-3 py-2 text-xs font-semibold text-white transition-all hover:bg-white/10"
                        >
                          Use
                          <ArrowRight size={14} />
                        </a>
                      </div>
                      <pre className="mt-4 whitespace-pre-wrap font-mono text-[10px] leading-relaxed text-zinc-400">
                        {template.text}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-dark-bg/30 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Direct Line</p>
                <p className="mt-4 text-zinc-400 leading-relaxed">
                  Need to discuss the project first? Call or WhatsApp us on <span className="font-semibold text-white">{BUSINESS_INFO.phone}</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
