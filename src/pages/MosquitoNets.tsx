import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  ArrowUpRight,
  MessageCircle,
  Droplets,
  Ruler,
  AppWindow,
  DoorOpen,
} from 'lucide-react';
import { ServiceHero } from '../components/ServiceHero';
import { ContactForm } from '../components/ContactForm';
import {
  MESH_MATERIALS,
  MESH_SHADES,
  FITTING_SYSTEMS,
} from '../data/servicesData';
import { buildWhatsAppUrl, assetUrl } from '../data/businessConfig';
import { usePageMeta } from '../hooks/usePageMeta';

export const MosquitoNets: React.FC = () => {
  const [selectedShadeId, setSelectedShadeId] = useState<'black' | 'grey' | 'cream'>('black');
  const activeShade = MESH_SHADES.find((s) => s.id === selectedShadeId) || MESH_SHADES[0];

  usePageMeta({
    title:
      'Mosquito Net Solutions in Nagpur | Fiberglass, Polyester & Aluminium Mesh — Sakshi Enterprises',
    description:
      'Custom-sized mosquito nets for windows and doors in Nagpur. Choose fiberglass, polyester, or aluminium mosquito mesh in black, grey, and cream with Velcro or chain-based fitting systems.',
  });

  return (
    <div>
      {/* Dedicated Hero Section: "Protection That Fits Your Space." */}
      <ServiceHero
        breadcrumbLabel="Mosquito Net Solutions"
        eyebrow="MOSQUITO NET SOLUTIONS • NAGPUR"
        headline="Protection That Fits Your Space."
        accentWord="Your Space."
        description="Customized mosquito-net solutions for residential and commercial windows and doors—combining fiberglass, polyester, and aluminium mesh options with washable Velcro and chain-based fitting systems."
        backgroundImage="/images/hero-mosquito-net.jpg"
        imageAlt="Modern window fitted with fine black mosquito mesh screen in a refined residential interior"
        primaryCtaText="Request Mosquito Net Quote"
        primaryCtaLink="/contact?service=Mosquito+Net+Solutions#enquiry-form"
        whatsappPrefill="Hello Sakshi Enterprises, I would like to enquire about custom Mosquito Net Solutions for my windows/doors in Nagpur."
        specs={[
          { label: 'Mesh Materials', value: 'Fiberglass • Polyester • Aluminium' },
          { label: 'Available Shades', value: 'Black • Grey • Cream' },
          { label: 'Fitting Systems', value: 'Velcro & Chain-Based Systems' },
          { label: 'Maintenance', value: 'Washable & Reusable Design' },
        ]}
      />

      {/* SECTION 1: Three Mesh Materials Editorial Breakdown */}
      <section
        aria-labelledby="mesh-materials-heading"
        className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="max-w-3xl space-y-3 mb-14 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              01 // MESH MATERIAL OPTIONS
            </span>
            <h2 id="mesh-materials-heading" className="section-headline text-[#1A1A1A]">
              Three Specialized Mosquito Mesh Weaves
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">
              Every opening has distinct airflow, exposure, and cleaning demands. We fabricate
              custom screens across three proven mesh materials.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {MESH_MATERIALS.map((mat, index) => (
              <div
                key={mat.id}
                className="bg-[#F5F5F5] border border-black/15 p-7 sm:p-9 flex flex-col justify-between hover:border-[#FF6B35] transition-colors reveal-on-scroll"
              >
                <div className="space-y-5">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <span className="text-xs font-mono font-bold text-[#FF6B35]">
                      MATERIAL 0{index + 1}
                    </span>
                    <span className="px-2.5 py-1 bg-[#1A1A1A] text-white text-[10px] font-semibold uppercase tracking-[0.14em]">
                      Custom-Sized
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A]">
                      {mat.name}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#FF6B35] mt-1">
                      {mat.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-[#333333] leading-relaxed">{mat.description}</p>

                  <ul className="space-y-2.5 pt-2">
                    {mat.characteristics.map((char) => (
                      <li key={char} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1A1A1A]">
                        <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{char}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-black/10 space-y-4">
                  <div>
                    <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#333333]/70">
                      Ideal Application
                    </span>
                    <p className="text-xs font-medium text-[#1A1A1A] mt-0.5">
                      {mat.recommendedFor}
                    </p>
                  </div>

                  <Link
                    to={`/contact?service=Mosquito+Net+Solutions&product=${encodeURIComponent(
                      mat.name
                    )}#enquiry-form`}
                    className="w-full inline-flex items-center justify-between px-4 py-3 bg-[#1A1A1A] hover:bg-[#FF6B35] text-white text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
                  >
                    <span>Enquire for {mat.name.split(' ')[0]}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Interactive Mesh Shade Selector (Black, Grey, Cream) */}
      <section
        aria-labelledby="mesh-shades-heading"
        className="py-20 lg:py-28 bg-[#1A1A1A] text-white border-t border-white/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
                02 // ARCHITECTURAL COLOUR PALETTE
              </span>
              <h2 id="mesh-shades-heading" className="section-headline text-white">
                Mesh Colour Options: Black, Grey &amp; Cream
              </h2>
              <p className="text-base text-white/80 leading-relaxed">
                Select a mesh shade that complements your window frames, wall finishes, and outward
                visibility preferences.
              </p>

              <div className="space-y-3 pt-2">
                {MESH_SHADES.map((shade) => {
                  const isSelected = shade.id === selectedShadeId;
                  return (
                    <button
                      key={shade.id}
                      type="button"
                      onClick={() => setSelectedShadeId(shade.id)}
                      className={`w-full text-left p-5 border transition-all flex items-start gap-4 ${
                        isSelected
                          ? 'bg-white/10 border-[#FF6B35]'
                          : 'bg-white/[0.03] border-white/15 hover:border-white/35'
                      }`}
                    >
                      <span
                        className="w-7 h-7 rounded-full border-2 shrink-0 mt-0.5"
                        style={{
                          backgroundColor: shade.hex,
                          borderColor: shade.borderHex,
                        }}
                      />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="font-heading font-bold text-base text-white">
                            {shade.name}
                          </span>
                          {isSelected && (
                            <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-[#FF6B35] text-white">
                              Active Preview
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-white/75">{shade.visibilityNote}</p>
                        <p className="text-xs text-white/55">{shade.interiorMatch}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Interactive Mesh Aperture Visualizer Card */}
            <div className="lg:col-span-6 reveal-on-scroll reveal-delay-100">
              <div className="border border-white/20 bg-[#121212] p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-mono text-[#FF6B35] uppercase">
                      LIVE WEAVE SIMULATION
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white">
                      {activeShade.name} Mesh Screen
                    </h3>
                  </div>
                  <span
                    className="w-8 h-8 rounded-full border-2"
                    style={{
                      backgroundColor: activeShade.hex,
                      borderColor: activeShade.borderHex,
                    }}
                  />
                </div>

                <div className="relative aspect-[16/10] overflow-hidden border border-white/15">
                  <img
                    src={assetUrl('/images/hero-mosquito-net.jpg')}
                    alt={`${activeShade.name} mosquito mesh preview`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 transition-all duration-500"
                    style={{
                      backgroundColor:
                        selectedShadeId === 'black'
                          ? 'rgba(18, 18, 20, 0.25)'
                          : selectedShadeId === 'grey'
                          ? 'rgba(120, 126, 135, 0.28)'
                          : 'rgba(234, 226, 211, 0.26)',
                      backgroundImage: `linear-gradient(to right, ${activeShade.hex}55 1px, transparent 1px), linear-gradient(to bottom, ${activeShade.hex}55 1px, transparent 1px)`,
                      backgroundSize: '4px 4px',
                    }}
                  />
                </div>

                <div className="text-xs text-white/80 space-y-1">
                  <p>
                    <strong className="text-white">Optical Performance:</strong>{' '}
                    {activeShade.visibilityNote}
                  </p>
                  <p>
                    <strong className="text-white">Architectural Pairing:</strong>{' '}
                    {activeShade.interiorMatch}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Fitting Systems (Velcro vs. Chain-Based) */}
      <section
        aria-labelledby="fitting-systems-heading"
        className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
            <div className="lg:col-span-7 space-y-3 reveal-on-scroll">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
                03 // CUSTOM FITTING SYSTEMS
              </span>
              <h2 id="fitting-systems-heading" className="section-headline text-[#1A1A1A]">
                Velcro-Based &amp; Chain-Based Fitting Systems
              </h2>
              <p className="text-base text-[#333333] leading-relaxed">
                Designed for straightforward daily operation, convenient window handle access, and
                easy removal whenever you wish to wash and reuse your mosquito nets.
              </p>
            </div>
            <div className="lg:col-span-5 reveal-on-scroll">
              <div className="bg-white border border-black/15 p-4">
                <img
                  src={assetUrl('/images/detail-fitting-systems.svg')}
                  alt="Technical architectural diagram showing Velcro perimeter tape fitting and Chain zippered track access"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {FITTING_SYSTEMS.map((fit, idx) => (
              <div
                key={fit.id}
                className="bg-white border border-black/15 p-8 sm:p-10 space-y-5 shadow-sm reveal-on-scroll"
              >
                <div className="flex items-center justify-between border-b border-black/10 pb-4">
                  <span className="text-xs font-mono font-bold text-[#FF6B35]">
                    FITTING SYSTEM 0{idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#333333]">{fit.mechanism}</span>
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A]">
                  {fit.name}
                </h3>

                <p className="text-sm text-[#333333] leading-relaxed">{fit.description}</p>

                <ul className="space-y-2.5 pt-2">
                  {fit.highlights.map((hl) => (
                    <li key={hl} className="flex items-start gap-2.5 text-sm text-[#1A1A1A]">
                      <Check className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4">
                  <Link
                    to={`/contact?service=Mosquito+Net+Solutions&product=${encodeURIComponent(
                      fit.name
                    )}#enquiry-form`}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] hover:bg-[#FF6B35] text-white text-xs font-heading font-bold uppercase tracking-[0.14em] transition-colors"
                  >
                    <span>Request {fit.name} Quote</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Window, Door & Washable Capabilities Strip */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] text-white p-7 space-y-2">
              <AppWindow className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-lg">Window Applications</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Custom-sized for sliding windows, casement shutters, louvers, and utility
                ventilators across wooden, aluminium, and UPVC frames.
              </p>
            </div>
            <div className="bg-[#1A1A1A] text-white p-7 space-y-2">
              <DoorOpen className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-lg">Door &amp; Balcony Openings</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Tailored mosquito screens for balcony doors, kitchen utility doors, and terrace
                entrances to maintain fresh air circulation.
              </p>
            </div>
            <div className="bg-[#1A1A1A] text-white p-7 space-y-2">
              <Droplets className="w-6 h-6 text-[#FF6B35]" aria-hidden="true" />
              <h3 className="font-heading font-bold text-lg">Washable &amp; Reusable</h3>
              <p className="text-xs text-white/75 leading-relaxed">
                Easily detach the mesh panel for gentle water rinsing and dust removal, then refit
                cleanly for long-term hygiene.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Direct Enquiry Form */}
      <section className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35] inline-flex items-center gap-1.5">
              <Ruler className="w-3.5 h-3.5" aria-hidden="true" />
              MEASUREMENT &amp; INSTALLATION IN NAGPUR
            </span>
            <h2 className="section-headline text-[#1A1A1A]">
              Book Your Mosquito Net Measurement
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
