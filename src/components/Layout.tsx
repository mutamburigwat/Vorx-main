import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="h-12 w-auto object-contain transition-opacity group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-all hover:text-primary",
                  location.pathname === link.href ? "text-primary" : "text-zinc-400"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/quote"
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-all neon-purple"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-primary p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden glass border-t border-white/5 pb-6 shadow-2xl">
          <div className="px-4 pt-4 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-4 text-base font-medium rounded-lg transition-all",
                  location.pathname === link.href ? "bg-primary/10 text-primary" : "text-zinc-400 hover:bg-white/5"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Link
                to="/quote"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary text-white px-6 py-4 rounded-xl text-base font-semibold neon-purple"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-surface pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-6 group">
              <img
                src={BUSINESS_INFO.logo}
                alt={BUSINESS_INFO.name}
                className="h-10 w-auto max-w-[180px] object-contain transition-opacity group-hover:opacity-90"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium printing and branding solutions in Harare. Modern, confident, and sharp.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-xs tracking-widest">Services</h4>
            <ul className="space-y-3">
              {SERVICES.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to={`/services/${s.slug}`} className="text-zinc-500 hover:text-primary text-sm transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-primary font-medium text-sm">View All Services →</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-zinc-500 hover:text-primary text-sm">About Us</Link></li>
              <li><Link to="/portfolio" className="text-zinc-500 hover:text-primary text-sm">Our Work</Link></li>
              <li><Link to="/contact" className="text-zinc-500 hover:text-primary text-sm">Contact</Link></li>
              <li><Link to="/quote" className="text-zinc-500 hover:text-primary text-sm">Request Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase text-xs tracking-widest">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-zinc-500 text-sm">{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-primary shrink-0" size={18} />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="text-zinc-500 hover:text-primary text-sm transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-zinc-500 text-sm">{BUSINESS_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} VORX Prints. All rights reserved. British Spelling.
          </p>
          <div className="flex space-x-6">
            <a 
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`} 
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-primary transition-colors"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
