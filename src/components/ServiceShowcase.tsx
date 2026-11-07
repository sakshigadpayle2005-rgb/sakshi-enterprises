import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Layers, Shield, Hammer, Sliders } from 'lucide-react';
import { MESH_MATERIALS, MESH_SHADES, FITTING_SYSTEMS } from '../data/servicesData';
import { assetUrl } from '../data/businessConfig';

export const ServiceShowcase: React.FC = () => {
  const [selectedShade, setSelectedShade] = useState<'black' | 'grey' | 'cream'>('black');
  const [selectedMeshId, setSelectedMeshId] = useState<string>('fiberglass');
  const [selectedAluminiumIdx, setSelectedAluminiumIdx] = useState<number>(0);

  const activeShade = MESH_SHADES.find((s) => s.id === selectedShade) || MESH_SHADES[0];
  const activeMesh = MESH_MATERIALS.find((m) => m.id === selectedMeshId) || MESH_MATERIALS[0];

  const aluminiumHighlights = [
    {
      name: 'Aluminium Windows',
      spec: 'Custom casement & fixed frames measured to exact residential or commercial apertures.',
      tag: 'RESIDENTIAL & COMMERCIAL',
    },
    {
      name: 'Sliding Windows',
      spec: 'Smooth 2-track and 3-track horizontal gliding systems with optional integrated mesh tracks.',
      tag: 'SPACE-SAVING GLIDE',
    },
    {
      name: 'Sliding Doors',
      spec: 'Wide-span balcony, terrace, and patio glass sliding doors with sturdy aluminium profiles.',
      tag: 'INDOOR–OUTDOOR FLOW',
    },
    {
      name: 'Glass Partitions',
      spec: 'Slim-framed architectural glass dividers for modern offices, shops, cabins, and home studies.',
      tag: 'ACOUSTIC & VISUAL CLARITY',
    },
    {
      name: 'Custom Aluminium Fabrication',
      spec: 'Tailored enclosures, ventilators, and architectural framing fabricated on-site in Nagpur.',
      tag: 'BESPOKE DIMENSIONS',
    },
  ];

  const steelHighlights = [
    {
      code: 'ST-01',
      title: 'Balcony Railings',
      detail: 'Protective exterior balustrades engineered for independent homes and apartment elevations.',
    },
    {
      code: 'ST-02',
      title: 'Staircase Railings',
      detail: 'Ergonomic handrails and vertical balusters custom-fitted to internal and common stair flights.',
    },
    {
      code: 'ST-03',
      title: 'Steel Railings',
      detail: 'Durable perimeter guards for walkways, terraces, access ramps, and commercial decks.',
    },
    {
      code: 'ST-04',
      title: 'Custom Steel Fabrication',
      detail: 'Bespoke structural frames, gates, grilles, and architectural steel work built to drawing.',
    },
    {
      code: 'ST-05',
      title: 'Other Steel Manufacturing Work',
      detail: 'Specialized residential, society, and commercial steel fabrication solutions in Nagpur.',
    },
  ];

  return (
    <div id="services-showcase">
      {/* =====================================================================
          HERO EXPERIENCE 02 — MOSQUITO NET SOLUTIONS
          Asymmetric Dark Architectural Split with Live Mesh & Shade Visualizer
         ===================================================================== */}
      <section
        id="hero-mosquito-nets"
        aria-labelledby="heading-mosquito-hero"
        className="relative min-h-[100svh] w-full bg-[#1A1A1A] text-white flex items-center py-20 lg:py-28 border-t border-white/10 overflow-hidden"
      >
        {/* Subtle ambient radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 82% 24%, rgba(255,107,53,0.10) 0%, transparent 50%)',
          }}
        />

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Oversized Editorial Typography + Interactive Material Specifier */}
            <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 border border-white/15">
                <Shield className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                  HERO EXPERIENCE 02 • MOSQUITO NET SOLUTIONS
                </span>
              </div>

              <h2 id="heading-mosquito-hero" className="showcase-headline text-white">
                Comfort Without <span className="text-[#FF6B35]">Compromise.</span>
              </h2>

              <p className="editorial-lead text-white/80">
                Customized mosquito-net solutions designed to fit your windows and doors, offering
                practical protection with flexible material and fitting options.
              </p>

              {/* Interactive Material Tabs */}
              <div className="bg-white/[0.04] border border-white/15 p-5 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/70 inline-flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                    Select Mesh Material
                  </span>
                  <span className="text-xs text-[#FF6B35] font-medium">
                    Washable &amp; Reusable
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2" role="tablist" aria-label="Mosquito mesh materials">
                  {MESH_MATERIALS.map((mat) => {
                    const isSelected = mat.id === selectedMeshId;
                    return (
                      <button
                        key={mat.id}
                        type="button"
                        role="tab"
                        aria-selected={isSelected}
                        onClick={() => setSelectedMeshId(mat.id)}
                        className={`px-3 py-2.5 text-left border transition-all ${
                          isSelected
                            ? 'bg-[#FF6B35] border-[#FF6B35] text-white font-bold'
                            : 'bg-white/5 border-white/15 text-white/80 hover:border-white/40'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-heading leading-tight">
                          {mat.name.replace(' Mosquito Mesh', '')}
                        </div>
                        <div className="text-[10px] opacity-80 mt-0.5">Mesh Option</div>
                      </button>
                    );
                  })}
                </div>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  <strong className="text-white">{activeMesh.name}:</strong> {activeMesh.description}
                </p>

                {/* Fitting Systems & Shade Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 mb-2">
                      Mesh Shades (Click to Preview)
                    </span>
                    <div className="flex items-center gap-2.5">
                      {MESH_SHADES.map((shade) => (
                        <button
                          key={shade.id}
                          type="button"
                          onClick={() => setSelectedShade(shade.id)}
                          aria-label={`Preview ${shade.name} mosquito mesh shade`}
                          aria-pressed={selectedShade === shade.id}
                          className={`inline-flex items-center gap-2 px-2.5 py-1.5 text-xs border transition-all ${
                            selectedShade === shade.id
                              ? 'border-[#FF6B35] bg-white/15 text-white font-semibold'
                              : 'border-white/15 bg-white/5 text-white/75 hover:border-white/35'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border"
                            style={{
                              backgroundColor: shade.hex,
                              borderColor: shade.borderHex,
                            }}
                          />
                          <span className="capitalize">{shade.id}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-white/60 mb-2">
                      Fitting Systems
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {FITTING_SYSTEMS.map((fit) => (
                        <span
                          key={fit.id}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs bg-white/5 border border-white/15 text-white/90"
                        >
                          <Check className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                          {fit.id === 'velcro' ? 'Velcro Fitting' : 'Chain-Based Fitting'}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Dual Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/mosquito-net-solutions"
                  className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3.5 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all group"
                >
                  <span>Explore Mosquito Net Solutions</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/contact?service=Mosquito+Net+Solutions#enquiry-form"
                  className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3.5 bg-transparent hover:bg-white hover:text-[#1A1A1A] text-white border border-white/30 font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Dramatic Architectural Window & Fine Mesh Texture Visual */}
            <div className="lg:col-span-6 reveal-on-scroll reveal-delay-100">
              <div className="relative group overflow-hidden border border-white/15 bg-[#121212] shadow-2xl">
                <div className="aspect-[4/5] sm:aspect-[16/13] w-full overflow-hidden relative">
                  <img
                    src={assetUrl('/images/hero-mosquito-net.jpg')}
                    alt="Close-up architectural photograph of a modern window fitted with a fine black mosquito mesh screen in a residential interior"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dynamic Mesh Shade Tint & Woven Texture Loupe Overlay */}
                  <div
                    className="absolute inset-0 transition-colors duration-500 pointer-events-none"
                    style={{
                      backgroundColor:
                        selectedShade === 'black'
                          ? 'rgba(18, 18, 20, 0.22)'
                          : selectedShade === 'grey'
                          ? 'rgba(120, 126, 135, 0.20)'
                          : 'rgba(234, 226, 211, 0.18)',
                    }}
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      backgroundImage: `linear-gradient(to right, ${activeShade.hex}33 1px, transparent 1px), linear-gradient(to bottom, ${activeShade.hex}33 1px, transparent 1px)`,
                      backgroundSize: '5px 5px',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
                </div>

                {/* Live Architectural Mesh Loupe Badge */}
                <div className="p-5 sm:p-6 bg-[#1A1A1A]/95 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full border"
                        style={{
                          backgroundColor: activeShade.hex,
                          borderColor: activeShade.borderHex,
                        }}
                      />
                      <span className="text-xs font-heading font-bold uppercase tracking-[0.14em] text-white">
                        {activeMesh.name} — {activeShade.name}
                      </span>
                    </div>
                    <p className="text-xs text-white/70 mt-1">{activeShade.visibilityNote}</p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="inline-block px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] bg-[#FF6B35]/20 text-[#FF6B35] border border-[#FF6B35]/40">
                      Custom Window &amp; Door Fit
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          HERO EXPERIENCE 03 — ALUMINIUM SOLUTIONS
          Editorial High-Contrast Architectural Showcase (Light Surface)
         ===================================================================== */}
      <section
        id="hero-aluminium"
        aria-labelledby="heading-aluminium-hero"
        className="relative min-h-[100svh] w-full bg-[#F5F5F5] text-[#1A1A1A] flex items-center py-20 lg:py-28 border-t border-black/10 architectural-grid-bg overflow-hidden"
      >
        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          {/* Top Editorial Header Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10 lg:mb-12 reveal-on-scroll">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#1A1A1A] text-white">
                <Layers className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                  HERO EXPERIENCE 03 • ALUMINIUM SOLUTIONS
                </span>
              </div>

              <h2 id="heading-aluminium-hero" className="showcase-headline text-[#1A1A1A]">
                Designed for <span className="text-[#FF6B35]">Modern Spaces.</span>
              </h2>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <p className="editorial-lead text-[#333333]">
                Explore customized aluminium windows, sliding doors and elegant glass partition
                solutions for residential and commercial spaces.
              </p>
            </div>
          </div>

          {/* Main Asymmetric Architectural Composition */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Large Dramatic Photograph Column (7 Cols) */}
            <div className="lg:col-span-7 reveal-on-scroll">
              <div className="relative h-full min-h-[380px] sm:min-h-[480px] bg-[#1A1A1A] border border-black/15 overflow-hidden group flex flex-col justify-end">
                <img
                  src={assetUrl('/images/hero-aluminium.jpg')}
                  alt="Modern aluminium sliding windows and glass partition doors in a luxury residential and commercial interior"
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />

                <div className="relative z-10 p-6 sm:p-8 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div className="space-y-1.5 max-w-lg">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                      {aluminiumHighlights[selectedAluminiumIdx].tag}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {aluminiumHighlights[selectedAluminiumIdx].name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80">
                      {aluminiumHighlights[selectedAluminiumIdx].spec}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-white/60 shrink-0">
                    0{selectedAluminiumIdx + 1} / 05
                  </span>
                </div>
              </div>
            </div>

            {/* Right Interactive Architectural Portfolio Index (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between bg-white border border-black/10 p-6 sm:p-8 shadow-xl reveal-on-scroll reveal-delay-100">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-3 border-b border-black/10">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1A1A1A]">
                    Aluminium Systems Portfolio
                  </span>
                  <span className="text-xs text-[#333333]">Nagpur Fabrication</span>
                </div>

                <div className="divide-y divide-black/10">
                  {aluminiumHighlights.map((item, idx) => {
                    const isSelected = idx === selectedAluminiumIdx;
                    return (
                      <button
                        key={item.name}
                        type="button"
                        onClick={() => setSelectedAluminiumIdx(idx)}
                        className={`w-full text-left py-3.5 px-3 transition-all flex items-start justify-between gap-3 ${
                          isSelected
                            ? 'bg-[#1A1A1A] text-white'
                            : 'hover:bg-[#F5F5F5] text-[#1A1A1A]'
                        }`}
                      >
                        <div>
                          <div className="font-heading font-bold text-sm sm:text-base flex items-center gap-2">
                            <span
                              className={`text-xs font-mono ${
                                isSelected ? 'text-[#FF6B35]' : 'text-[#333333]/60'
                              }`}
                            >
                              0{idx + 1}
                            </span>
                            <span>{item.name}</span>
                          </div>
                          <p
                            className={`text-xs mt-1 leading-relaxed ${
                              isSelected ? 'text-white/80' : 'text-[#333333]'
                            }`}
                          >
                            {item.spec}
                          </p>
                        </div>
                        <ArrowUpRight
                          className={`w-4 h-4 shrink-0 mt-1 ${
                            isSelected ? 'text-[#FF6B35]' : 'text-[#333333]/40'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dual CTAs */}
              <div className="pt-6 mt-6 border-t border-black/10 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/aluminium-solutions"
                  className="flex-1 inline-flex items-center justify-center gap-2 min-h-[50px] px-5 py-3 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <span>Explore Aluminium Solutions</span>
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact?service=Aluminium+Work#enquiry-form"
                  className="inline-flex items-center justify-center gap-2 min-h-[50px] px-6 py-3 bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <span>Get a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          HERO EXPERIENCE 04 — STEEL FABRICATION
          Monolithic Structural Dark Hero Showcase
         ===================================================================== */}
      <section
        id="hero-steel"
        aria-labelledby="heading-steel-hero"
        className="relative min-h-[100svh] w-full bg-[#1A1A1A] text-white flex items-center py-20 lg:py-28 border-t border-white/10 overflow-hidden"
      >
        {/* Background Architectural Visual + High-Contrast Structural Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={assetUrl('/images/hero-steel.svg')}
            alt="Architectural steel staircase and balcony railings showing geometric balusters, precision welds, and brushed steel handrail finishing"
            className="w-full h-full object-cover object-center opacity-45"
            loading="lazy"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(95deg, rgba(26,26,26,0.96) 0%, rgba(26,26,26,0.84) 52%, rgba(26,26,26,0.68) 100%)',
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Architectural Visual Framing Card (5 Cols) */}
            <div className="lg:col-span-5 order-2 lg:order-1 reveal-on-scroll">
              <div className="border border-white/20 bg-[#141414] overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={assetUrl('/images/hero-steel.svg')}
                    alt="Modern custom steel balcony and staircase railing system"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#1A1A1A]/90 border border-white/20 text-[11px] font-mono uppercase tracking-[0.16em] text-[#FF6B35]">
                    Custom Steel Work • Nagpur
                  </div>
                </div>
                <div className="p-6 space-y-3 border-t border-white/15">
                  <h3 className="font-heading font-bold text-lg text-white">
                    Precision Geometry &amp; Structural Rigidity
                  </h3>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                    Every balcony railing, staircase balustrade, and custom steel assembly is
                    fabricated to site measurements for residential homes, duplexes, societies, and
                    commercial buildings.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Oversized Typography & Product Matrix (7 Cols) */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 reveal-on-scroll reveal-delay-100">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 bg-white/5 border border-white/15">
                <Hammer className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                  HERO EXPERIENCE 04 • STEEL FABRICATION
                </span>
              </div>

              <h2 id="heading-steel-hero" className="showcase-headline text-white">
                Strength in <span className="text-[#FF6B35]">Every Detail.</span>
              </h2>

              <p className="editorial-lead text-white/85 max-w-2xl">
                Customized steel railing and fabrication solutions designed around your space and
                requirements.
              </p>

              {/* 5 Steel Fabrication Offerings Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {steelHighlights.map((item, idx) => (
                  <div
                    key={item.code}
                    className={`p-4 bg-white/[0.04] border border-white/15 hover:border-[#FF6B35]/60 transition-colors ${
                      idx === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-heading font-bold text-sm sm:text-base text-white">
                        {item.title}
                      </span>
                      <span className="text-[11px] font-mono text-[#FF6B35]">{item.code}</span>
                    </div>
                    <p className="text-xs text-white/70 leading-relaxed">{item.detail}</p>
                  </div>
                ))}
              </div>

              {/* Dual Hero CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
                <Link
                  to="/steel-fabrication"
                  className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3.5 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all group"
                >
                  <span>Explore Steel Fabrication</span>
                  <ArrowUpRight
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <Link
                  to="/contact?service=Steel+Fabrication#enquiry-form"
                  className="inline-flex items-center justify-center gap-3 min-h-[52px] px-7 py-3.5 bg-transparent hover:bg-white hover:text-[#1A1A1A] text-white border border-white/30 font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all"
                >
                  <span>Request a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
