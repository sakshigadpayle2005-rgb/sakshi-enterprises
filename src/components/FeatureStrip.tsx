import React from 'react';
import {
  Sliders,
  Layers,
  Ruler,
  AppWindow,
  Hammer,
  Wrench,
} from 'lucide-react';
import { WHY_CHOOSE_US_ITEMS } from '../data/servicesData';

const ICON_MAP = [Sliders, Layers, Ruler, AppWindow, Hammer, Wrench];

export const FeatureStrip: React.FC = () => {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14 reveal-on-scroll">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              CAPABILITIES &amp; COMMITMENT
            </span>
            <h2 id="why-choose-heading" className="section-headline text-[#1A1A1A]">
              Why Choose Sakshi Enterprises?
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-base text-[#333333] leading-relaxed">
              Practical architectural solutions built around your actual aperture dimensions,
              selected mesh or metal materials, and clean installation across Nagpur.
            </p>
          </div>
        </div>

        {/* 6 Capability Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black/10">
          {WHY_CHOOSE_US_ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[idx % ICON_MAP.length];
            return (
              <div
                key={item.id}
                className="p-7 sm:p-9 border-r border-b border-black/10 bg-white hover:bg-[#F5F5F5] transition-colors group reveal-on-scroll"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white flex items-center justify-center group-hover:bg-[#FF6B35] transition-colors">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs font-mono font-bold text-[#333333]/50 group-hover:text-[#FF6B35] transition-colors">
                    {item.id}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-[#1A1A1A] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#333333] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
