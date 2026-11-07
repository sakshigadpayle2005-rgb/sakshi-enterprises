export interface BusinessConfig {
  name: string;
  tagline: string;
  city: string;
  state: string;
  country: string;
  fullLocation: string;
  description: string;
  aboutHeading: string;
  aboutDescription: string;
  whatsappNumber: string;
  phoneNumber: string;
  email: string;
  streetAddress: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
}

const envWhatsapp = import.meta.env.VITE_WHATSAPP_NUMBER || '919579541303';
const envPhone = import.meta.env.VITE_BUSINESS_PHONE || '+91 95795 41303';
const envEmail = import.meta.env.VITE_BUSINESS_EMAIL || 'subodhgadpayle2610@gmail.com';
const envAddress = import.meta.env.VITE_BUSINESS_ADDRESS || 'Vathoda, Nagpur';

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'Sakshi Enterprises',
  tagline: 'Protecting Spaces. Enhancing Living.',
  city: 'Nagpur',
  state: 'Maharashtra',
  country: 'India',
  fullLocation: 'Vathoda, Nagpur, Maharashtra, India',
  description:
    'Sakshi Enterprises provides customized solutions for residential and commercial spaces across mosquito-net solutions, aluminium fabrication and steel fabrication in Nagpur.',
  aboutHeading: 'Creating Better Spaces Through Practical Solutions.',
  aboutDescription:
    'Sakshi Enterprises provides customized mosquito protection, aluminium and steel fabrication solutions for residential and commercial spaces in Nagpur. With a focus on practical requirements, material choices and customized installations, we aim to make spaces more comfortable and functional.',
  whatsappNumber: envWhatsapp,
  phoneNumber: envPhone,
  email: envEmail,
  streetAddress: envAddress,
  socialLinks: {
    // Populate only when actual verified URLs are supplied by Sakshi Enterprises
  },
};

export interface EnquiryPayload {
  id: string;
  createdAt: string;
  customerName: string;
  phoneNumber: string;
  serviceCategory: 'Mosquito Net Solutions' | 'Aluminium Work' | 'Steel Fabrication';
  productRequired: string;
  measurements: string;
  location: string;
  additionalRequirements: string;
}

const STORAGE_KEY_ENQUIRIES = 'sakshi_enterprises_enquiries_v1';
const STORAGE_KEY_RUNTIME_CONTACT = 'sakshi_enterprises_contact_override_v1';

export function getActiveContactConfig(): { whatsappNumber: string; phoneNumber: string } {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_RUNTIME_CONTACT);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        whatsappNumber: parsed.whatsappNumber || BUSINESS_CONFIG.whatsappNumber,
        phoneNumber: parsed.phoneNumber || BUSINESS_CONFIG.phoneNumber,
      };
    }
  } catch {
    // Ignore storage read errors
  }
  return {
    whatsappNumber: BUSINESS_CONFIG.whatsappNumber,
    phoneNumber: BUSINESS_CONFIG.phoneNumber,
  };
}

export function setRuntimeContactOverride(whatsappNumber: string, phoneNumber: string): void {
  try {
    localStorage.setItem(
      STORAGE_KEY_RUNTIME_CONTACT,
      JSON.stringify({
        whatsappNumber: whatsappNumber.replace(/[^\d]/g, ''),
        phoneNumber: phoneNumber.trim(),
      })
    );
  } catch {
    // Ignore storage write errors
  }
}

export function saveEnquiryRecord(enquiry: EnquiryPayload): void {
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
    const existing: EnquiryPayload[] = existingRaw ? JSON.parse(existingRaw) : [];
    const updated = [enquiry, ...existing];
    localStorage.setItem(STORAGE_KEY_ENQUIRIES, JSON.stringify(updated));
  } catch {
    // Ignore storage errors
  }
}

export function getSavedEnquiries(): EnquiryPayload[] {
  try {
    const existingRaw = localStorage.getItem(STORAGE_KEY_ENQUIRIES);
    return existingRaw ? JSON.parse(existingRaw) : [];
  } catch {
    return [];
  }
}

export function formatWhatsAppEnquiryMessage(enquiry: Omit<EnquiryPayload, 'id' | 'createdAt'>): string {
  const lines = [
    `*NEW ENQUIRY — SAKSHI ENTERPRISES (NAGPUR)*`,
    `------------------------------------------`,
    `*Customer Name:* ${enquiry.customerName}`,
    `*Phone Number:* ${enquiry.phoneNumber}`,
    `*Service Category:* ${enquiry.serviceCategory}`,
    `*Product Required:* ${enquiry.productRequired}`,
    `*Approx. Measurements:* ${enquiry.measurements || 'To be measured on site'}`,
    `*Customer Location:* ${enquiry.location}`,
    enquiry.additionalRequirements
      ? `*Additional Requirements:* ${enquiry.additionalRequirements}`
      : `*Additional Requirements:* None specified`,
    `------------------------------------------`,
    `Sent via Sakshi Enterprises Official Website`,
  ];
  return lines.join('\n');
}

export function buildWhatsAppUrl(customMessage?: string): string {
  const { whatsappNumber } = getActiveContactConfig();
  const cleanNumber = whatsappNumber.replace(/[^\d]/g, '');
  const defaultText =
    customMessage ||
    'Hello Sakshi Enterprises (Vathoda, Nagpur), I would like to enquire about your customized Mosquito Net, Aluminium, or Steel Fabrication solutions.';
  const encoded = encodeURIComponent(defaultText);

  if (cleanNumber.length >= 10) {
    return `https://wa.me/${cleanNumber}?text=${encoded}`;
  }
  return `https://api.whatsapp.com/send?text=${encoded}`;
}

export function assetUrl(path: string): string {
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${clean}`;
}
