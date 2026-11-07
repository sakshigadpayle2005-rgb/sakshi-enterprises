import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Layers } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { ContactForm } from '../components/ContactForm';
import { ALUMINIUM_SERVICES } from '../data/servicesData';
import { assetUrl } from '../data/businessConfig';
import { usePageMeta } from '../hooks/usePageMeta';

export const Aluminium: React.FC = () => {
  usePageMeta({
    title:
      'Aluminium Windows, Sliding Doors & Glass Partitions in Nagpur | Sakshi Enterprises',
    description:
      'Custom aluminium fabrication in Nagpur: aluminium windows, multi-track sliding windows, sliding doors, and architectural glass partitions for homes and commercial offices.',
  });

  return (
    <div>
      {/* Dedicated Hero: "Modern Frames. Better Spaces." */}
      <ServiceHero
        breadcrumbLabel="Aluminium Solutions"
        eyebrow="ALUMINIUM SOLUTIONS • NAGPUR"
        headline="Modern Frames. Better Spaces."
        accentWord="Better Spaces."
        description="Custom-fabricated aluminium windows, smooth-gliding sliding windows, architectural sliding doors, and interior glass partitions engineered for residential and commercial spaces in Nagpur."
        backgroundImage="/images/hero-aluminium.jpg"
        imageAlt="Modern aluminium sliding windows and frameless-look glass partition doors in a luxury contemporary interior"
        primaryCtaText="Request Aluminium Quote"
        primaryCtaLink="/contact?service=Aluminium+Work#enquiry-form"
        whatsappPrefill="Hello Sakshi Enterprises, I would like to enquire about Aluminium Windows, Sliding Doors, or Glass Partitions in Nagpur."
        specs={[
          { label: 'Window Systems', value: 'Casement, Fixed & Sliding Windows' },
          { label: 'Door Systems', value: 'Architectural Aluminium Sliding Doors' },
          { label: 'Interior Zoning', value: 'Framed Glass Partitions' },
          { label: 'Execution', value: 'Custom Fabrication & Installation' },
        ]}
      />

      {/* SECTION 1: Architectural Aluminium Portfolio Breakdown */}
      <section
        aria-labelledby="aluminium-systems-heading"
        className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-3 mb-14 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              01 // ARCHITECTURAL ALUMINIUM PORTFOLIO
            </span>
            <h2 id="aluminium-systems-heading" className="section-headline text-[#1A1A1A]">
              Precision Aluminium Fabrication &amp; Glazing Systems
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">
              Every aluminium frame and glass partition is fabricated according to on-site
              aperture measurements, ensuring smooth track operation and clean architectural
              alignment.
            </p>
          </div>

          <div className="space-y-8">
            {ALUMINIUM_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 bg-[#F5F5F5] border border-black/15 overflow-hidden reveal-on-scroll"
              >
                <div className="lg:col-span-4 bg-[#1A1A1A] text-white p-7 sm:p-9 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between border-b border-white/15 pb-3 mb-5">
                      <span className="text-xs font-mono font-bold text-[#FF6B35]">
                        ALUMINIUM 0{index + 1}
                      </span>
                      <Layers className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF6B35] mt-2">
                      {service.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/15">
                    <span className="block text-[10px] font-mono uppercase tracking-[0.16em] text-white/60 mb-2">
                      Primary Spaces
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.applications.map((app) => (
                        <span
                          key={app}
                          className="px-2.5 py-1 bg-white/10 text-[11px] text-white/90"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-8 p-7 sm:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <p className="text-base text-[#333333] leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      {service.features.map((feat) => (
                        <div
                          key={feat}
                          className="p-4 bg-white border border-black/10 flex items-start gap-2.5"
                        >
                          <Check
                            className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5"
                            aria-hidden="true"
                          />
                          <span className="text-xs sm:text-sm text-[#1A1A1A] font-medium">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-medium text-[#333333]">
                      Measured, fabricated &amp; installed across Nagpur
                    </span>
                    <Link
                      to={`/contact?service=Aluminium+Work&product=${encodeURIComponent(
                        service.title
                      )}#enquiry-form`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#e85a25] text-white text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
                    >
                      <span>Enquire for {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Glass Partition & Sliding System Spotlight */}
      <section className="py-20 lg:py-28 bg-[#1A1A1A] text-white border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
                02 // INTERIOR ARCHITECTURE
              </span>
              <h2 className="section-headline text-white">
                Glass Partitions &amp; Integrated Mosquito Mesh Tracks
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Whether dividing a commercial office floor with sleek aluminium-framed glass
                partitions or installing residential sliding windows with dedicated mosquito screen
                tracks, Sakshi Enterprises coordinates both framing and insect protection under one
                roof.
              </p>
              <ul className="space-y-3 text-sm text-white/85 pt-2">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                  <span>Full-height office cabin glass partitions &amp; doors</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                  <span>2-track &amp; 3-track sliding windows with mosquito mesh integration</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                  <span>On-site measurement and custom fabrication in Nagpur</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-6 reveal-on-scroll reveal-delay-100">
              <div className="border border-white/20 bg-[#121212] p-4">
                <img
                  src={assetUrl('/images/detail-glass-partition.svg')}
                  alt="Architectural elevation of aluminium-framed glass partitions and sliding doors"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Direct Enquiry Form */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              ALUMINIUM WORK ENQUIRY
            </span>
            <h2 className="section-headline text-[#1A1A1A]">
              Request an Aluminium Fabrication Quotation
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
