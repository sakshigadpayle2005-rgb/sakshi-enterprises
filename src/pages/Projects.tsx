import React from 'react';
import { ServiceHero } from '../components/ServiceHero';
import { ProjectGallery } from '../components/ProjectGallery';
import { ContactForm } from '../components/ContactForm';
import { usePageMeta } from '../hooks/usePageMeta';

export const Projects: React.FC = () => {
  usePageMeta({
    title: 'Our Projects & Installations in Nagpur | Sakshi Enterprises',
    description:
      'Explore Sakshi Enterprises project categories in Nagpur: Mosquito Net Installations, Aluminium Windows and Doors, Glass Partitions, and Steel Railings.',
  });

  return (
    <div>
      <ServiceHero
        breadcrumbLabel="Our Projects"
        eyebrow="PORTFOLIO &amp; INSTALLATIONS • NAGPUR"
        headline="Crafted for Residential and Commercial Spaces."
        accentWord="Commercial Spaces."
        description="Explore our four core installation categories across Nagpur: Mosquito Net Installations, Aluminium Windows and Doors, Glass Partitions, and Steel Railings."
        backgroundImage="/images/hero-aluminium.jpg"
        imageAlt="Architectural aluminium sliding windows and interior glass partitions"
        primaryCtaText="Request Project Quote"
        primaryCtaLink="/contact#enquiry-form"
        specs={[
          { label: 'Category 01', value: 'Mosquito Net Installations' },
          { label: 'Category 02', value: 'Aluminium Windows & Doors' },
          { label: 'Category 03', value: 'Glass Partitions' },
          { label: 'Category 04', value: 'Steel Railings' },
        ]}
      />

      <ProjectGallery allowSpecimenPreview={true} />

      <section className="py-20 lg:py-28 bg-white text-[#1A1A1A] border-t border-black/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
              START YOUR PROJECT
            </span>
            <h2 className="section-headline text-[#1A1A1A]">
              Enquire About Your Residential or Commercial Project
            </h2>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};
