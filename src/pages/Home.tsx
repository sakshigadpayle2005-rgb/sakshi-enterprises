import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Building2 } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ServiceShowcase } from '../components/ServiceShowcase';
import { FeatureStrip } from '../components/FeatureStrip';
import { ProjectGallery } from '../components/ProjectGallery';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { ContactForm } from '../components/ContactForm';
import { BUSINESS_CONFIG, buildWhatsAppUrl } from '../data/businessConfig';
import { TARGET_AUDIENCES } from '../data/servicesData';
import { usePageMeta } from '../hooks/usePageMeta';

export const Home: React.FC = () => {
  usePageMeta({
    title:
      'Sakshi Enterprises | Mosquito Nets, Aluminium Windows & Steel Fabrication in Nagpur',
    description:
      'Sakshi Enterprises in Nagpur provides custom mosquito-net solutions (fiberglass, polyester, aluminium mesh), modern aluminium sliding windows, glass partitions, and steel railing fabrication.',
  });

  return (
    <div>
      {/* HERO EXPERIENCE 01: Full-Viewport Homepage Hero */}
      <Hero />

      {/* HERO EXPERIENCES 02, 03 & 04: Mosquito Nets, Aluminium Solutions, Steel Fabrication */}
      <ServiceShowcase />

      {/* SUPPORTING SECTION A: Why Choose Sakshi Enterprises? */}
      <FeatureStrip />

      {/* SUPPORTING SECTION B: Our Projects */}
      <ProjectGallery allowSpecimenPreview={true} />

      {/* SUPPORTING SECTION C: How We Work (01–04 Timeline) */}
      <ProcessTimeline />

      {/* SUPPORTING SECTION D: About Us Editorial Section */}
      <section
        aria-labelledby="home-about-heading"
        className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-white text-[11px] font-semibold uppercase tracking-[0.18em]">
                <Building2 className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span>ABOUT SAKSHI ENTERPRISES • NAGPUR</span>
              </div>

              <h2 id="home-about-heading" className="section-headline text-[#1A1A1A]">
                {BUSINESS_CONFIG.aboutHeading}
              </h2>

              <p className="editorial-lead text-[#333333]">
                {BUSINESS_CONFIG.aboutDescription}
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <span>Read More About Us</span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact#enquiry-form"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-black/25 hover:border-[#FF6B35] text-[#1A1A1A] font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <span>Discuss Your Space</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Who We Serve in Nagpur */}
            <div className="lg:col-span-6 reveal-on-scroll reveal-delay-100">
              <div className="bg-[#F5F5F5] border border-black/10 p-6 sm:p-8 space-y-5">
                <div className="flex items-center justify-between border-b border-black/10 pb-3">
                  <h3 className="font-heading font-bold text-sm uppercase tracking-[0.16em] text-[#1A1A1A]">
                    Spaces &amp; Clients We Serve
                  </h3>
                  <span className="text-xs font-semibold text-[#FF6B35]">
                    Residential &amp; Commercial
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {TARGET_AUDIENCES.map((aud) => (
                    <div
                      key={aud.title}
                      className="p-4 bg-white border border-black/10 hover:border-[#FF6B35] transition-colors"
                    >
                      <h4 className="font-heading font-bold text-base text-[#1A1A1A]">
                        {aud.title}
                      </h4>
                      <p className="text-xs text-[#333333] mt-1.5 leading-relaxed">
                        {aud.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Enquiry Section on Homepage */}
      <section
        aria-labelledby="home-enquiry-heading"
        className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10 architectural-grid-bg"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-2xl space-y-3 reveal-on-scroll">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              CUSTOM QUOTATION &amp; MEASUREMENT
            </span>
            <h2 id="home-enquiry-heading" className="section-headline text-[#1A1A1A]">
              Share Your Project Specifications
            </h2>
            <p className="text-base text-[#333333]">
              Complete the enquiry form below to receive a customized quotation or schedule an
              on-site measurement in Nagpur.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* SUPPORTING SECTION E: Final CTA */}
      <section
        aria-labelledby="final-cta-heading"
        className="py-20 lg:py-28 bg-[#1A1A1A] text-white border-t border-white/15 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 50% 50%, rgba(255,107,53,0.14) 0%, transparent 60%)',
          }}
        />
        <div className="relative z-10 max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 text-center space-y-6 reveal-on-scroll">
          <span className="inline-block px-3.5 py-1 bg-white/10 border border-white/20 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
            SAKSHI ENTERPRISES • NAGPUR
          </span>

          <h2 id="final-cta-heading" className="showcase-headline text-white">
            Let&apos;s Find the Right Solution for Your Space.
          </h2>

          <p className="editorial-lead text-white/80 max-w-2xl mx-auto">
            Share your requirements with us and explore customized solutions for your home or
            business.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 min-h-[54px] px-9 py-4 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>

            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 min-h-[54px] px-9 py-4 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white border border-white/30 font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
