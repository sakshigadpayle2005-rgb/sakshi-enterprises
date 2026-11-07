import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowUpRight, Hammer } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { ContactForm } from '../components/ContactForm';
import { STEEL_SERVICES } from '../data/servicesData';
import { usePageMeta } from '../hooks/usePageMeta';

export const SteelFabrication: React.FC = () => {
  usePageMeta({
    title:
      'Steel Railing Fabrication in Nagpur | Balcony & Staircase Railings — Sakshi Enterprises',
    description:
      'Custom steel railing fabrication in Nagpur: balcony railings, staircase railings, steel railings, and bespoke steel manufacturing for residential and commercial spaces.',
  });

  return (
    <div>
      {/* Dedicated Hero: "Built with Strength. Finished with Precision." */}
      <ServiceHero
        breadcrumbLabel="Steel Fabrication"
        eyebrow="STEEL FABRICATION • NAGPUR"
        headline="Built with Strength. Finished with Precision."
        accentWord="Finished with Precision."
        description="Customized steel railings, balcony railings, staircase balustrades, and bespoke steel manufacturing fabricated around your structural requirements in Nagpur."
        backgroundImage="/images/hero-steel.svg"
        imageAlt="Modern architectural steel staircase and balcony railing fabrication"
        primaryCtaText="Request Steel Fabrication Quote"
        primaryCtaLink="/contact?service=Steel+Fabrication#enquiry-form"
        whatsappPrefill="Hello Sakshi Enterprises, I would like to enquire about Steel Railings / Custom Steel Fabrication in Nagpur."
        specs={[
          { label: 'Balcony Systems', value: 'Custom Steel Balcony Railings' },
          { label: 'Staircase Systems', value: 'Ergonomic Staircase Balustrades' },
          { label: 'Perimeter Work', value: 'Walkway & Deck Steel Railings' },
          { label: 'Custom Work', value: 'Bespoke Steel Manufacturing' },
        ]}
      />

      {/* SECTION 1: Steel Fabrication Capabilities */}
      <section
        aria-labelledby="steel-services-heading"
        className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-3 mb-14 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              01 // STRUCTURAL STEEL PORTFOLIO
            </span>
            <h2 id="steel-services-heading" className="section-headline text-[#1A1A1A]">
              Balcony Railings, Staircase Railings &amp; Custom Steel Work
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">
              Fabricated from accurate on-site dimensions to provide dependable safety, clean weld
              finishing, and architectural character for homes, apartments, societies, and
              commercial buildings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {STEEL_SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#F5F5F5] border border-black/15 p-8 sm:p-10 flex flex-col justify-between hover:border-[#FF6B35] transition-colors reveal-on-scroll"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-xs font-mono font-bold text-[#FF6B35]">
                      STEEL 0{index + 1}
                    </span>
                    <Hammer className="w-4 h-4 text-[#1A1A1A]" aria-hidden="true" />
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#1A1A1A]">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#FF6B35] mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2.5 pt-2">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]">
                        <Check
                          className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-black/10 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {service.applications.map((app) => (
                      <span
                        key={app}
                        className="px-2.5 py-1 bg-white border border-black/10 text-xs text-[#333333]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/contact?service=Steel+Fabrication&product=${encodeURIComponent(
                      service.title
                    )}#enquiry-form`}
                    className="w-full inline-flex items-center justify-between px-5 py-3.5 bg-[#1A1A1A] hover:bg-[#FF6B35] text-white text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
                  >
                    <span>Request {service.title} Quote</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Direct Enquiry Form */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              STEEL FABRICATION ENQUIRY
            </span>
            <h2 className="section-headline text-[#1A1A1A]">
              Schedule a Railing or Steel Fabrication Measurement
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
