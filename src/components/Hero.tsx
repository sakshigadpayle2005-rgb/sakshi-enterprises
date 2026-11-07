import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, CheckCircle2, MapPin } from 'lucide-react';
import { assetUrl } from '../data/businessConfig';

export const Hero: React.FC = () => {
  const scrollToShowcase = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('hero-mosquito-nets');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      aria-label="Sakshi Enterprises Homepage Hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between bg-[#1A1A1A] text-white overflow-hidden pt-28 pb-10 lg:pt-32 lg:pb-14"
    >
      {/* Full-Viewport Architectural Photograph + Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={assetUrl('/images/hero-home.jpg')}
          alt="Modern residential interior in Nagpur featuring matte black aluminium sliding windows with integrated fine mosquito mesh screens overlooking a sunlit terrace"
          className="w-full h-full object-cover object-center hero-bg-animate"
          fetchPriority="high"
        />
        {/* Multi-layered architectural gradient & radial glow for WCAG AA contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,26,26,0.92) 0%, rgba(26,26,26,0.76) 48%, rgba(26,26,26,0.45) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 18% 35%, rgba(255,107,53,0.14) 0%, transparent 52%), linear-gradient(to top, rgba(26,26,26,0.96) 0%, transparent 32%)',
          }}
        />
        <div className="absolute inset-0 mesh-texture-overlay pointer-events-none" />
      </div>

      {/* Top Architectural Coordinate Bar */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <div className="inline-flex flex-wrap items-center gap-3 px-3.5 py-1.5 bg-white/[0.07] backdrop-blur-md border border-white/15 text-xs tracking-[0.16em] uppercase font-medium text-white/90">
          <span className="w-2 h-2 bg-[#FF6B35]" aria-hidden="true" />
          <span>PREMIUM ARCHITECTURAL SOLUTIONS</span>
          <span className="text-white/30" aria-hidden="true">|</span>
          <span className="inline-flex items-center gap-1 text-white/75">
            <MapPin className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
            Nagpur, Maharashtra
          </span>
        </div>
      </div>

      {/* Main Hero Content Grid */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 my-auto py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
          <div className="lg:col-span-8 space-y-6 sm:space-y-8 reveal-on-scroll is-revealed">
            <h1 className="hero-headline text-white">
              Protecting Spaces.
              <span className="block text-white mt-1 sm:mt-2">
                Enhancing <span className="text-[#FF6B35]">Living.</span>
              </span>
            </h1>

            <p className="editorial-lead text-white/85 max-w-2xl font-normal">
              From customized mosquito-net solutions to modern aluminium windows and durable steel
              fabrication, we bring quality, precision and functionality to your spaces.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#hero-mosquito-nets"
                onClick={scrollToShowcase}
                className="inline-flex items-center justify-center gap-3 min-h-[54px] px-8 py-4 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-sm uppercase tracking-[0.14em] transition-all shadow-lg shadow-[#FF6B35]/20 group"
              >
                <span>Explore Our Services</span>
                <ArrowDown
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </a>

              <Link
                to="/contact#enquiry-form"
                className="inline-flex items-center justify-center gap-3 min-h-[54px] px-8 py-4 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white border border-white/30 font-heading font-bold text-sm uppercase tracking-[0.14em] backdrop-blur-sm transition-all group"
              >
                <span>Get a Quote</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Architectural Segment Quick-Jump Ledger on Right */}
          <div className="lg:col-span-4">
            <div className="bg-[#1A1A1A]/85 backdrop-blur-md border border-white/15 p-5 sm:p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                  Three Core Disciplines
                </span>
                <span className="text-[11px] font-mono text-white/50">01 — 03</span>
              </div>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#hero-mosquito-nets"
                    onClick={scrollToShowcase}
                    className="flex items-center justify-between py-1.5 text-white/90 hover:text-[#FF6B35] transition-colors group"
                  >
                    <span className="font-heading font-semibold">01. Mosquito Net Solutions</span>
                    <span className="text-xs text-white/50 group-hover:text-[#FF6B35]">
                      Fiberglass • Polyester • Aluminium →
                    </span>
                  </a>
                </li>
                <li className="border-t border-white/10 pt-2.5">
                  <a
                    href="#hero-aluminium"
                    className="flex items-center justify-between py-1.5 text-white/90 hover:text-[#FF6B35] transition-colors group"
                  >
                    <span className="font-heading font-semibold">02. Aluminium Solutions</span>
                    <span className="text-xs text-white/50 group-hover:text-[#FF6B35]">
                      Sliding Windows • Partitions →
                    </span>
                  </a>
                </li>
                <li className="border-t border-white/10 pt-2.5">
                  <a
                    href="#hero-steel"
                    className="flex items-center justify-between py-1.5 text-white/90 hover:text-[#FF6B35] transition-colors group"
                  >
                    <span className="font-heading font-semibold">03. Steel Fabrication</span>
                    <span className="text-xs text-white/50 group-hover:text-[#FF6B35]">
                      Balcony &amp; Staircase Railings →
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Capability Trust Strip + Scroll Indicator */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-6 border-t border-white/15">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 w-full md:w-auto">
            {[
              'Measurement-Based Customization',
              'Fiberglass, Polyester & Aluminium Mesh',
              'Velcro & Chain Fitting Systems',
              'Residential & Commercial Installation',
            ].map((capability) => (
              <div key={capability} className="flex items-center gap-2 text-xs text-white/85">
                <CheckCircle2 className="w-4 h-4 text-[#FF6B35] shrink-0" aria-hidden="true" />
                <span>{capability}</span>
              </div>
            ))}
          </div>

          <a
            href="#hero-mosquito-nets"
            onClick={scrollToShowcase}
            aria-label="Scroll down to Mosquito Net Solutions Hero Showcase"
            className="hidden xl:inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/70 hover:text-[#FF6B35] transition-colors shrink-0"
          >
            <span>Scroll to Showcases</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#FF6B35] animate-bounce" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
