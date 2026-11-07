import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Shield, Layers, Hammer, MapPin } from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { FeatureStrip } from '../components/FeatureStrip';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { BUSINESS_CONFIG } from '../data/businessConfig';
import { TARGET_AUDIENCES } from '../data/servicesData';
import { usePageMeta } from '../hooks/usePageMeta';

export const About: React.FC = () => {
  usePageMeta({
    title: 'About Sakshi Enterprises | Mosquito Nets, Aluminium & Steel Fabrication in Nagpur',
    description:
      'Sakshi Enterprises provides customized mosquito protection, aluminium and steel fabrication solutions for residential and commercial spaces in Nagpur, Maharashtra.',
  });

  return (
    <div>
      <ServiceHero
        breadcrumbLabel="About Us"
        eyebrow="ABOUT SAKSHI ENTERPRISES • NAGPUR"
        headline="Creating Better Spaces Through Practical Solutions."
        accentWord="Practical Solutions."
        description={BUSINESS_CONFIG.aboutDescription}
        backgroundImage="/images/hero-home.jpg"
        imageAlt="Modern residential living space in Nagpur with aluminium sliding windows and mosquito mesh screens"
        primaryCtaText="Contact Our Team"
        primaryCtaLink="/contact#enquiry-form"
        specs={[
          { label: 'Location', value: 'Nagpur, Maharashtra, India' },
          { label: 'Segment 01', value: 'Mosquito Net Solutions' },
          { label: 'Segment 02', value: 'Aluminium Solutions' },
          { label: 'Segment 03', value: 'Steel Fabrication' },
        ]}
      />

      {/* Core Business Segments Overview */}
      <section className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-6 space-y-4 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
                OUR IDENTITY &amp; FOCUS
              </span>
              <h2 className="section-headline text-[#1A1A1A]">
                Protecting Spaces. Enhancing Living.
              </h2>
              <p className="text-base text-[#333333] leading-relaxed">
                {BUSINESS_CONFIG.aboutDescription}
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#F5F5F5] border border-black/15 p-7 sm:p-9 space-y-4 reveal-on-scroll">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B35]">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>Serving Residential &amp; Commercial Spaces in Nagpur</span>
              </div>
              <p className="text-sm text-[#333333] leading-relaxed">
                Every space has unique window dimensions, ventilation priorities, and structural
                needs. Rather than offering one-size-fits-all products, we focus on on-site
                measurement, flexible material choices, and neat installation.
              </p>
            </div>
          </div>

          {/* Three Pillars Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <Shield className="w-8 h-8 text-[#FF6B35]" aria-hidden="true" />
                <h3 className="font-heading font-extrabold text-2xl">
                  A. Mosquito Net Solutions
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Fiberglass, polyester, and aluminium mosquito mesh in black, grey, and cream
                  shades—custom-sized for windows and doors with washable Velcro and chain-based
                  fitting systems.
                </p>
              </div>
              <Link
                to="/mosquito-net-solutions"
                className="mt-8 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.14em] text-[#FF6B35] hover:text-white"
              >
                <span>Explore Mosquito Nets</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <Layers className="w-8 h-8 text-[#FF6B35]" aria-hidden="true" />
                <h3 className="font-heading font-extrabold text-2xl">
                  B. Aluminium Solutions
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Custom aluminium windows, horizontal sliding windows, sliding doors, and
                  architectural glass partitions fabricated and installed for homes, offices, and
                  commercial interiors.
                </p>
              </div>
              <Link
                to="/aluminium-solutions"
                className="mt-8 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.14em] text-[#FF6B35] hover:text-white"
              >
                <span>Explore Aluminium Work</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="bg-[#1A1A1A] text-white p-8 sm:p-10 flex flex-col justify-between">
              <div className="space-y-4">
                <Hammer className="w-8 h-8 text-[#FF6B35]" aria-hidden="true" />
                <h3 className="font-heading font-extrabold text-2xl">
                  C. Steel Fabrication
                </h3>
                <p className="text-sm text-white/75 leading-relaxed">
                  Steel railings, balcony railings, staircase railings, and custom steel
                  manufacturing engineered around your site layout and structural requirements.
                </p>
              </div>
              <Link
                to="/steel-fabrication"
                className="mt-8 inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-[0.14em] text-[#FF6B35] hover:text-white"
              >
                <span>Explore Steel Fabrication</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-2xl space-y-3 mb-12 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              CLIENT SEGMENTS
            </span>
            <h2 className="section-headline text-[#1A1A1A]">Who We Work With</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TARGET_AUDIENCES.map((aud) => (
              <div
                key={aud.title}
                className="bg-white border border-black/15 p-7 space-y-2.5 reveal-on-scroll"
              >
                <h3 className="font-heading font-bold text-xl text-[#1A1A1A]">{aud.title}</h3>
                <p className="text-sm text-[#333333] leading-relaxed">{aud.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureStrip />
      <ProcessTimeline />
    </div>
  );
};
