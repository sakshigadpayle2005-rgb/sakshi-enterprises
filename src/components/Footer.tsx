import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, ArrowUpRight, PhoneCall, Mail } from 'lucide-react';
import { Logo } from './Logo';
import {
  BUSINESS_CONFIG,
  buildWhatsAppUrl,
  getActiveContactConfig,
} from '../data/businessConfig';

export const Footer: React.FC = () => {
  const { phoneNumber } = getActiveContactConfig();
  const socialEntries = Object.entries(BUSINESS_CONFIG.socialLinks).filter(
    ([, url]) => Boolean(url && url.trim().length > 0)
  );

  return (
    <footer className="bg-[#1A1A1A] text-white border-t border-white/15">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Column 1: Brand Identity (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" aria-label="Sakshi Enterprises Home">
              <Logo variant="dark-bg" size="lg" showTagline />
            </Link>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              {BUSINESS_CONFIG.description}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/15 text-xs text-white/85">
              <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
              <span>{BUSINESS_CONFIG.fullLocation}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Our Projects', to: '/projects' },
                { label: 'Contact Us', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/80 hover:text-[#FF6B35] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Service Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  to="/mosquito-net-solutions"
                  className="text-white/80 hover:text-[#FF6B35] transition-colors block"
                >
                  Mosquito Net Solutions
                  <span className="block text-xs text-white/50">
                    Fiberglass, Polyester &amp; Aluminium Mesh
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/aluminium-solutions"
                  className="text-white/80 hover:text-[#FF6B35] transition-colors block"
                >
                  Aluminium Solutions
                  <span className="block text-xs text-white/50">
                    Sliding Windows, Doors &amp; Glass Partitions
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/steel-fabrication"
                  className="text-white/80 hover:text-[#FF6B35] transition-colors block"
                >
                  Steel Fabrication
                  <span className="block text-xs text-white/50">
                    Balcony, Staircase &amp; Custom Steel Railings
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Contact & Enquiry (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-heading font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              Contact &amp; Enquiries
            </h3>
            <div className="space-y-3 text-sm text-white/85">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_CONFIG.fullLocation}</span>
              </p>
              {phoneNumber && (
                <p className="flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#FF6B35] shrink-0" aria-hidden="true" />
                  <a
                    href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
                    className="hover:text-[#FF6B35] transition-colors font-semibold text-white"
                  >
                    {phoneNumber}
                  </a>
                </p>
              )}
              {BUSINESS_CONFIG.email && (
                <p className="flex items-center gap-2.5 break-all">
                  <Mail className="w-4 h-4 text-[#FF6B35] shrink-0" aria-hidden="true" />
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="hover:text-[#FF6B35] transition-colors"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </p>
              )}
            </div>

            <div className="pt-2 space-y-2.5">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white border border-white/25 text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                <span>WhatsApp: {phoneNumber}</span>
              </a>
              <Link
                to="/contact#enquiry-form"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#FF6B35] hover:bg-[#e85a25] text-white text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {socialEntries.length > 0 && (
              <div className="pt-3 flex items-center gap-3">
                {socialEntries.map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs uppercase tracking-wider text-white/70 hover:text-[#FF6B35]"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Bottom Copyright & Brand Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} Sakshi Enterprises — Vathoda, Nagpur, Maharashtra. All
            rights reserved.
          </p>
          <p className="font-heading tracking-wide text-white/75">
            &ldquo;{BUSINESS_CONFIG.tagline}&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
};
