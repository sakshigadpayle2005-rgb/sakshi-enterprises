import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/servicesData';

export const ProcessTimeline: React.FC = () => {
  return (
    <section
      aria-labelledby="how-we-work-heading"
      className="py-20 lg:py-28 bg-[#1A1A1A] text-white border-t border-white/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 reveal-on-scroll">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              WORKFLOW • NAGPUR
            </span>
            <h2 id="how-we-work-heading" className="section-headline text-white">
              How We Work
            </h2>
            <p className="text-base text-white/75 leading-relaxed">
              A straightforward four-step process from your initial enquiry to custom fabrication
              and on-site installation.
            </p>
          </div>

          <Link
            to="/contact#enquiry-form"
            className="inline-flex items-center gap-2.5 self-start lg:self-auto px-6 py-3.5 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
          >
            <span>Start Step 01: Enquiry</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* 4-Step Architectural Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-white/[0.03] border border-white/15 p-7 sm:p-8 flex flex-col justify-between hover:border-[#FF6B35] transition-colors group reveal-on-scroll"
            >
              {/* Top Step Badge & Connector */}
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                  <span className="font-heading font-extrabold text-3xl sm:text-4xl text-[#FF6B35]">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-[0.16em] text-white/50">
                    STEP {index + 1} OF 4
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-[#FF6B35] transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-white/75 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/50">
                <span>Sakshi Enterprises</span>
                <span className="w-2 h-2 bg-[#FF6B35] rounded-full" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
