import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../constants';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Graphic Design', href: '/graphic-design' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-3 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.94),rgba(10,10,14,0.84))] shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="flex h-20 items-center justify-between px-4 lg:px-6">
            <div className="flex min-w-0 items-center gap-4">
              <Link to="/" className="flex items-center gap-3 group min-w-0">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={BUSINESS_INFO.name}
                  className="h-12 w-auto shrink-0 object-contain transition-opacity group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="hidden xl:block min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Print and Branding Studio</p>
                  <p className="truncate text-sm text-zinc-300">Premium output for campaigns, spaces, apparel, and packaging.</p>
                </div>
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'rounded-full px-4 py-2 text-sm font-medium transition-all',
                    location.pathname === link.href
                      ? 'bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'text-zinc-400 hover:bg-white/6 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-zinc-300 transition-all hover:bg-white/10 hover:text-white"
              >
                <MessageSquare size={16} className="text-secondary-cyan" />
                WhatsApp
              </a>
              <Link
                to="/quote"
                className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all neon-purple"
              >
                Get a Quote
              </Link>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="rounded-full border border-white/10 bg-white/6 p-2.5 text-zinc-300 transition-colors hover:text-white"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="mt-3 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.96),rgba(10,10,14,0.9))] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl md:hidden">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'block rounded-2xl px-4 py-4 text-base font-medium transition-all',
                    location.pathname === link.href
                      ? 'bg-white/10 text-white'
                      : 'text-zinc-400 hover:bg-white/6 hover:text-white'
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid gap-3">
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-base font-semibold text-white"
              >
                <MessageSquare size={18} className="text-secondary-cyan" />
                WhatsApp Us
              </a>
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-6 py-4 rounded-2xl text-base font-semibold neon-purple"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export function Footer() {
  const featuredServices = SERVICES.slice(0, 6);

  return (
    <footer className="bg-dark-surface pt-24 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] p-8 md:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="inline-flex items-center rounded-full border border-white/10 bg-white/6 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-300">
                Print. Brand. Deliver.
              </div>
              <h2 className="mt-6 max-w-2xl text-3xl md:text-5xl font-display font-bold text-white">
                Built for businesses that want their printed presence to feel considered.
              </h2>
              <p className="mt-5 max-w-2xl text-zinc-400 leading-relaxed">
                VORX Prints combines design, production, signage, apparel branding, packaging, and promotional work so your business can present one sharp visual standard across every surface.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {featuredServices.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.slug}`}
                    className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/10 hover:text-white"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-dark-bg/35 p-6">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-zinc-500">Direct Contact</p>
              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4 transition-all hover:bg-white/8"
                >
                  <Phone size={18} className="mt-1 text-primary shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">Phone</p>
                    <p className="text-sm text-zinc-400">{BUSINESS_INFO.phone}</p>
                  </div>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4 transition-all hover:bg-white/8"
                >
                  <MessageSquare size={18} className="mt-1 text-secondary-cyan shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">WhatsApp</p>
                    <p className="text-sm text-zinc-400">Fast quotes and project coordination.</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/5 p-4">
                  <MapPin size={18} className="mt-1 text-secondary-yellow shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-white">Visit Us</p>
                    <p className="text-sm text-zinc-400">{BUSINESS_INFO.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-10 border-t border-white/8 pt-10 md:grid-cols-4">
            <div>
              <Link to="/" className="flex items-center group mb-5">
                <img
                  src={BUSINESS_INFO.logo}
                  alt={BUSINESS_INFO.name}
                  className="h-10 w-auto max-w-[180px] object-contain transition-opacity group-hover:opacity-90"
                  referrerPolicy="no-referrer"
                />
              </Link>
              <p className="text-sm leading-relaxed text-zinc-500">
                Premium printing and branding solutions in Harare with a focus on visual quality, practical service, and fast turnaround.
              </p>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Navigation</h4>
              <ul className="space-y-3">
                {[
                  { name: 'Services', href: '/services' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Graphic Design', href: '/graphic-design' },
                  { name: 'About', href: '/about' },
                  { name: 'Contact', href: '/contact' },
                ].map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-zinc-400 transition-colors hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Production Hours</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>Mon-Fri: {BUSINESS_INFO.hours.monFri}</li>
                <li>Sat: {BUSINESS_INFO.hours.sat}</li>
                <li>Sun: {BUSINESS_INFO.hours.sun}</li>
                <li>Email: {BUSINESS_INFO.email}</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-zinc-500">Action</h4>
              <div className="space-y-3">
                <Link
                  to="/quote"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Request a Quote
                  <ArrowUpRight size={16} />
                </Link>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                >
                  Chat on WhatsApp
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            Copyright {new Date().getFullYear()} VORX Prints. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-zinc-600">
            <span>Harare, Zimbabwe</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center gap-2 transition-colors hover:text-zinc-400"
            >
              <Mail size={14} />
              {BUSINESS_INFO.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
