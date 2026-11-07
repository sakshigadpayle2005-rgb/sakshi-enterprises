import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../data/businessConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={buildWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sakshi Enterprises on WhatsApp"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2.5 px-4 py-3.5 bg-[#1A1A1A] hover:bg-[#FF6B35] text-white border-2 border-[#FF6B35] shadow-2xl transition-all duration-300 group"
    >
      <MessageCircle
        className="w-5 h-5 text-[#FF6B35] group-hover:text-white transition-colors"
        aria-hidden="true"
      />
      <span className="hidden sm:inline font-heading font-bold text-xs uppercase tracking-[0.14em]">
        WhatsApp Us
      </span>
    </a>
  );
};
