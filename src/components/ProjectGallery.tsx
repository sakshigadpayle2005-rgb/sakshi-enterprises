import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  MessageCircle,
  ArrowUpRight,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Eye,
  ShieldAlert,
} from 'lucide-react';
import {
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectGalleryItem,
  VERIFIED_CUSTOMER_PROJECTS,
  ILLUSTRATIVE_CAPABILITY_SPECIMENS,
} from '../data/projectsData';
import { buildWhatsAppUrl, assetUrl } from '../data/businessConfig';

interface ProjectGalleryProps {
  allowSpecimenPreview?: boolean;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({
  allowSpecimenPreview = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | ProjectCategory>('All');
  const [showIllustrativeSpecimens, setShowIllustrativeSpecimens] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasVerifiedProjects = VERIFIED_CUSTOMER_PROJECTS.length > 0;
  const activeDataset: ProjectGalleryItem[] = hasVerifiedProjects
    ? VERIFIED_CUSTOMER_PROJECTS
    : showIllustrativeSpecimens
    ? ILLUSTRATIVE_CAPABILITY_SPECIMENS
    : [];

  const filteredItems =
    selectedCategory === 'All'
      ? activeDataset
      : activeDataset.filter((item) => item.category === selectedCategory);

  const showCategoryFilters = activeDataset.length >= 4;

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredItems.length
        );
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section
      aria-labelledby="our-projects-heading"
      className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Heading */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 reveal-on-scroll">
          <div className="space-y-3 max-w-2xl">
            <span className="inline-block text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              WORK &amp; INSTALLATIONS • NAGPUR
            </span>
            <h2 id="our-projects-heading" className="section-headline text-[#1A1A1A]">
              Our Projects
            </h2>
            <p className="text-base text-[#333333] leading-relaxed">
              Dedicated to customized Mosquito Net Installations, Aluminium Windows and Doors,
              Glass Partitions, and Steel Railings across residential and commercial properties in
              Nagpur.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={buildWhatsAppUrl(
                'Hello Sakshi Enterprises, please share recent installation photographs for your work in Nagpur.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
              <span>Request Installation Photos on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Strict Content Rule Compliance:
            "Do not present stock or generated images as completed customer projects.
             If real project photographs are not available, omit the project gallery until genuine images are supplied." */}
        {!hasVerifiedProjects && !showIllustrativeSpecimens ? (
          <div className="bg-white border border-black/15 p-8 sm:p-12 shadow-sm reveal-on-scroll">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1A1A1A] text-white text-[11px] font-semibold uppercase tracking-[0.16em]">
                  <Camera className="w-3.5 h-3.5 text-[#FF6B35]" aria-hidden="true" />
                  <span>Authentic Site Photography Policy</span>
                </div>

                <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                  Genuine Nagpur Site Photographs Are Curated Directly
                </h3>

                <p className="text-sm sm:text-base text-[#333333] leading-relaxed">
                  In accordance with our commitment to transparency, Sakshi Enterprises does not
                  display stock or generated photographs as completed customer projects. Our public
                  project gallery is reserved exclusively for verified on-site installation
                  photographs from Nagpur homes, apartments, and commercial establishments.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={buildWhatsAppUrl(
                      'Hello Sakshi Enterprises, I would like to view site photographs of your recent installations in Nagpur.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Request Real Site Photos via WhatsApp</span>
                  </a>

                  <Link
                    to="/contact#enquiry-form"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                  >
                    <span>Book On-Site Measurement</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </Link>

                  {allowSpecimenPreview && (
                    <button
                      type="button"
                      onClick={() => setShowIllustrativeSpecimens(true)}
                      className="inline-flex items-center gap-2 px-5 py-3.5 border border-black/25 hover:border-[#1A1A1A] bg-[#F5F5F5] text-[#1A1A1A] font-heading font-bold text-xs uppercase tracking-[0.12em] transition-colors"
                    >
                      <Eye className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                      <span>Preview Illustrative Capability Reference Grid</span>
                    </button>
                  )}
                </div>
              </div>

              {/* 4 Project Categories Summary */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PROJECT_CATEGORIES.map((cat, idx) => (
                  <div
                    key={cat}
                    className="p-5 bg-[#F5F5F5] border border-black/10 flex flex-col justify-between"
                  >
                    <span className="text-xs font-mono font-bold text-[#FF6B35]">
                      CATEGORY 0{idx + 1}
                    </span>
                    <h4 className="font-heading font-bold text-base text-[#1A1A1A] mt-2">
                      {cat}
                    </h4>
                    <span className="text-[11px] text-[#333333] mt-2">
                      Verified site photos shared on enquiry
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Disclosure banner when viewing Illustrative Capability Specimens */}
            {!hasVerifiedProjects && showIllustrativeSpecimens && (
              <div className="bg-[#1A1A1A] text-white p-4 sm:p-5 border-l-4 border-[#FF6B35] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                  <div className="text-xs sm:text-sm text-white/90">
                    <strong className="text-white uppercase tracking-wider mr-2">
                      Illustrative Capability Reference Mode:
                    </strong>
                    These visuals illustrate material and architectural specifications and are{' '}
                    <span className="underline">not</span> claimed as completed customer projects.
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setShowIllustrativeSpecimens(false);
                    setLightboxIndex(null);
                  }}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white shrink-0"
                >
                  Hide Illustrative Preview
                </button>
              </div>
            )}

            {/* Category Filter Buttons */}
            {showCategoryFilters && (
              <div
                role="tablist"
                aria-label="Filter project categories"
                className="flex flex-wrap items-center gap-2"
              >
                {(['All', ...PROJECT_CATEGORIES] as const).map((cat) => {
                  const active = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setLightboxIndex(null);
                      }}
                      className={`px-4 py-2.5 text-xs font-heading font-bold uppercase tracking-[0.12em] border transition-all ${
                        active
                          ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                          : 'bg-white text-[#333333] border-black/15 hover:border-[#FF6B35]'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Asymmetric Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {filteredItems.map((item, idx) => {
                const colSpan =
                  idx % 3 === 0
                    ? 'md:col-span-7'
                    : idx % 3 === 1
                    ? 'md:col-span-5'
                    : 'md:col-span-6';

                return (
                  <div
                    key={item.id}
                    className={`${colSpan} group relative bg-[#1A1A1A] border border-black/15 overflow-hidden flex flex-col justify-between`}
                  >
                    <button
                      type="button"
                      onClick={() => setLightboxIndex(idx)}
                      aria-label={`Open ${item.title} in lightbox viewer`}
                      className="relative w-full aspect-[16/11] overflow-hidden text-left block"
                    >
                      <img
                        src={assetUrl(item.image)}
                        alt={item.title}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent" />

                      {/* Badge */}
                      <div className="absolute top-3.5 left-3.5 flex flex-wrap gap-2">
                        <span className="px-2.5 py-1 bg-[#1A1A1A]/90 border border-white/20 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#FF6B35]">
                          {item.category}
                        </span>
                        {!item.verifiedCustomerProject && (
                          <span className="px-2.5 py-1 bg-black/80 border border-white/20 text-[10px] font-medium uppercase tracking-[0.12em] text-white/80">
                            Illustrative Specification
                          </span>
                        )}
                      </div>

                      {/* Hover Zoom Indicator */}
                      <div className="absolute top-3.5 right-3.5 w-9 h-9 bg-[#1A1A1A]/80 border border-white/20 flex items-center justify-center text-white opacity-80 group-hover:opacity-100 group-hover:bg-[#FF6B35] transition-all">
                        <ZoomIn className="w-4 h-4" aria-hidden="true" />
                      </div>

                      {/* Bottom Overlay Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                        <h3 className="font-heading font-bold text-lg text-white">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/75 mt-1">{item.materialSpec}</p>
                        {item.verifiedCustomerProject && item.verifiedCaption && (
                          <p className="text-xs text-[#FF6B35] mt-1">{item.verifiedCaption}</p>
                        )}
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Accessible Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox Viewer"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#1A1A1A] border border-white/20 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/15 bg-[#121212] text-white">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-[#FF6B35]">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">
                  {filteredItems[lightboxIndex].category}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close lightbox"
                onClick={() => setLightboxIndex(null)}
                className="w-9 h-9 flex items-center justify-center border border-white/20 text-white hover:border-[#FF6B35] hover:text-[#FF6B35]"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative aspect-[16/10] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={assetUrl(filteredItems[lightboxIndex].image)}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />

              {filteredItems.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={() =>
                      setLightboxIndex(
                        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#1A1A1A]/90 border border-white/25 text-white flex items-center justify-center hover:bg-[#FF6B35]"
                  >
                    <ChevronLeft className="w-5 h-5" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={() =>
                      setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#1A1A1A]/90 border border-white/25 text-white flex items-center justify-center hover:bg-[#FF6B35]"
                  >
                    <ChevronRight className="w-5 h-5" aria-hidden="true" />
                  </button>
                </>
              )}
            </div>

            {/* Caption Bar */}
            <div className="p-5 bg-[#1A1A1A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-heading font-bold text-lg">
                  {filteredItems[lightboxIndex].title}
                </h4>
                <p className="text-xs text-white/75 mt-1">
                  {filteredItems[lightboxIndex].materialSpec}
                </p>
              </div>
              {!filteredItems[lightboxIndex].verifiedCustomerProject && (
                <span className="px-3 py-1 bg-white/10 border border-white/20 text-[11px] text-white/80 shrink-0">
                  Illustrative Specification Visual
                </span>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
