import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, ChevronRight } from 'lucide-react';
import { buildWhatsAppUrl, assetUrl } from '../data/businessConfig';

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  accentWord?: string;
  description: string;
  backgroundImage: string;
  imageAlt: string;
  primaryCtaText?: string;
  primaryCtaLink?: string;
  whatsappPrefill?: string;
  specs?: { label: string; value: string }[];
  breadcrumbLabel: string;
}

export const ServiceHero: React.FC<ServiceHeroProps> = ({
  eyebrow,
  headline,
  accentWord,
  description,
  backgroundImage,
  imageAlt,
  primaryCtaText = 'Request a Quote',
  primaryCtaLink = '/contact#enquiry-form',
  whatsappPrefill,
  specs = [],
  breadcrumbLabel,
}) => {
  // Highlight accentWord if present in headline
  const renderHeadline = () => {
    if (!accentWord || !headline.includes(accentWord)) {
      return headline;
    }
    const parts = headline.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-[#FF6B35]">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      aria-label={`${breadcrumbLabel} Hero`}
      className="relative min-h-[88svh] lg:min-h-[92svh] w-full flex flex-col justify-between bg-[#1A1A1A] text-white overflow-hidden pt-28 pb-12 lg:pt-32 lg:pb-16"
    >
      {/* Background Image & Contrast Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={assetUrl(backgroundImage)}
          alt={imageAlt}
          className="w-full h-full object-cover object-center hero-bg-animate"
          fetchPriority="high"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(105deg, rgba(26,26,26,0.95) 0%, rgba(26,26,26,0.82) 52%, rgba(26,26,26,0.52) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 20% 35%, rgba(255,107,53,0.14) 0%, transparent 50%), linear-gradient(to top, rgba(26,26,26,0.98) 0%, transparent 30%)',
          }}
        />
      </div>

      {/* Breadcrumb Navigation */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/70">
          <Link to="/" className="hover:text-[#FF6B35] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-white/40" aria-hidden="true" />
          <span className="text-[#FF6B35] font-medium">{breadcrumbLabel}</span>
        </nav>
      </div>

      {/* Hero Core Content */}
      <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 my-auto py-10">
        <div className="max-w-3xl space-y-6 reveal-on-scroll is-revealed">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-white/10 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
            <span className="w-2 h-2 bg-[#FF6B35]" aria-hidden="true" />
            <span>{eyebrow}</span>
          </div>

          <h1 className="hero-headline text-white">{renderHeadline()}</h1>

          <p className="editorial-lead text-white/85 max-w-2xl">{description}</p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <Link
              to={primaryCtaLink}
              className="inline-flex items-center justify-center gap-3 min-h-[54px] px-8 py-4 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all group"
            >
              <span>{primaryCtaText}</span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <a
              href={buildWhatsAppUrl(whatsappPrefill)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[54px] px-7 py-4 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white border border-white/30 font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
              <span>WhatsApp Enquiry</span>
            </a>
          </div>
        </div>
      </div>

      {/* Specification Strip */}
      {specs.length > 0 && (
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10 pt-6 border-t border-white/15">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {specs.map((spec) => (
              <div key={spec.label} className="border-l-2 border-[#FF6B35] pl-3.5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.15em] text-white/60">
                  {spec.label}
                </div>
                <div className="text-sm font-heading font-bold text-white mt-0.5">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
