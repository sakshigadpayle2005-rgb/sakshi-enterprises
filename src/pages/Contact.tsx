import React from 'react';
import { ServiceHero } from '../components/ServiceHero';
import { ContactForm } from '../components/ContactForm';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { usePageMeta } from '../hooks/usePageMeta';

export const Contact: React.FC = () => {
  usePageMeta({
    title: 'Contact Sakshi Enterprises Nagpur | Request a Quote for Mosquito Nets, Aluminium & Steel',
    description:
      'Contact Sakshi Enterprises in Nagpur, Maharashtra for customized mosquito nets, aluminium sliding windows, glass partitions, and steel railing fabrication.',
  });

  return (
    <div>
      <ServiceHero
        breadcrumbLabel="Contact Us"
        eyebrow="CONTACT &amp; ENQUIRIES • NAGPUR"
        headline="Let's Find the Right Solution for Your Space."
        accentWord="Your Space."
        description="Share your requirements with us and explore customized mosquito-net, aluminium, and steel fabrication solutions for your home or business in Nagpur."
        backgroundImage="/images/hero-home.jpg"
        imageAlt="Modern residential window and interior by Sakshi Enterprises in Nagpur"
        primaryCtaText="Jump to Enquiry Form"
        primaryCtaLink="/contact#enquiry-form"
        specs={[
          { label: 'Service City', value: 'Nagpur, Maharashtra' },
          { label: 'Enquiry Channels', value: 'Online Form & WhatsApp' },
          { label: 'Customization', value: 'On-Site Measurement Based' },
          { label: 'Client Types', value: 'Residential & Commercial' },
        ]}
      />

      <section className="py-20 lg:py-28 bg-[#F5F5F5] text-[#1A1A1A] border-t border-black/10 architectural-grid-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <ContactForm />
        </div>
      </section>

      <ProcessTimeline />
    </div>
  );
};
