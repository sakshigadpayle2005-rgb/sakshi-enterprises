import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Send,
  Settings,
  MapPin,
  Download,
} from 'lucide-react';
import {
  EnquiryPayload,
  saveEnquiryRecord,
  formatWhatsAppEnquiryMessage,
  buildWhatsAppUrl,
  getActiveContactConfig,
  setRuntimeContactOverride,
} from '../data/businessConfig';

type ServiceCategoryOption =
  | 'Mosquito Net Solutions'
  | 'Aluminium Work'
  | 'Steel Fabrication';

const PRODUCT_SUGGESTIONS: Record<ServiceCategoryOption, string[]> = {
  'Mosquito Net Solutions': [
    'Fiberglass Mosquito Mesh (Window / Door)',
    'Polyester Mosquito Mesh (Window / Door)',
    'Aluminium Mosquito Mesh (Window / Door)',
    'Velcro-Based Fitting Mosquito Net',
    'Chain-Based Fitting Mosquito Net',
    'Complete Home Window & Door Mosquito Nets',
  ],
  'Aluminium Work': [
    'Aluminium Sliding Windows',
    'Aluminium Casement / Fixed Windows',
    'Aluminium Sliding Doors',
    'Aluminium Framed Glass Partitions',
    'Custom Aluminium Fabrication & Installation',
  ],
  'Steel Fabrication': [
    'Balcony Steel Railings',
    'Staircase Steel Railings',
    'Perimeter / Walkway Steel Railings',
    'Custom Steel Manufacturing & Fabrication',
  ],
};

interface FormErrors {
  customerName?: string;
  phoneNumber?: string;
  serviceCategory?: string;
  productRequired?: string;
  location?: string;
}

export const ContactForm: React.FC = () => {
  const [searchParams] = useSearchParams();

  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [serviceCategory, setServiceCategory] = useState<ServiceCategoryOption>(
    'Mosquito Net Solutions'
  );
  const [productRequired, setProductRequired] = useState(
    PRODUCT_SUGGESTIONS['Mosquito Net Solutions'][0]
  );
  const [measurements, setMeasurements] = useState('');
  const [location, setLocation] = useState('');
  const [additionalRequirements, setAdditionalRequirements] = useState('');

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedEnquiry, setSubmittedEnquiry] = useState<EnquiryPayload | null>(null);
  const [copiedText, setCopiedText] = useState(false);

  // Runtime contact configuration state (for owner/admin testing without fake defaults)
  const [contactConfig, setContactConfig] = useState(() => getActiveContactConfig());
  const [showAdminConfig, setShowAdminConfig] = useState(false);
  const [adminWhatsappInput, setAdminWhatsappInput] = useState(contactConfig.whatsappNumber);
  const [adminPhoneInput, setAdminPhoneInput] = useState(contactConfig.phoneNumber);
  const [configSavedNotice, setConfigSavedNotice] = useState(false);

  // Sync URL query parameters (e.g. ?service=Aluminium+Work)
  useEffect(() => {
    const paramService = searchParams.get('service');
    if (
      paramService === 'Mosquito Net Solutions' ||
      paramService === 'Aluminium Work' ||
      paramService === 'Steel Fabrication'
    ) {
      setServiceCategory(paramService);
      setProductRequired(PRODUCT_SUGGESTIONS[paramService][0]);
    }
    const paramProduct = searchParams.get('product');
    if (paramProduct) {
      setProductRequired(paramProduct);
    }
  }, [searchParams]);

  const handleCategoryChange = (newCategory: ServiceCategoryOption) => {
    setServiceCategory(newCategory);
    setProductRequired(PRODUCT_SUGGESTIONS[newCategory][0]);
    if (errors.serviceCategory) {
      setErrors((prev) => ({ ...prev, serviceCategory: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!customerName.trim() || customerName.trim().length < 2) {
      newErrors.customerName = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanedPhone = phoneNumber.replace(/[\s\-()]/g, '');
    const indianMobileRegex = /^(?:\+?91)?[6-9]\d{9}$/;
    const generalPhoneRegex = /^\+?\d{10,14}$/;
    if (!cleanedPhone) {
      newErrors.phoneNumber = 'Please enter your mobile or phone number.';
    } else if (!indianMobileRegex.test(cleanedPhone) && !generalPhoneRegex.test(cleanedPhone)) {
      newErrors.phoneNumber =
        'Please enter a valid 10-digit Indian mobile number (e.g., 98XXXXXXXX).';
    }

    if (!serviceCategory) {
      newErrors.serviceCategory = 'Please select a service category.';
    }

    if (!productRequired.trim()) {
      newErrors.productRequired = 'Please specify or select the product required.';
    }

    if (!location.trim() || location.trim().length < 2) {
      newErrors.location = 'Please enter your area or locality in Nagpur.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const payload: EnquiryPayload = {
      id: `SE-${Date.now().toString().slice(-6)}`,
      createdAt: new Date().toLocaleString('en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }),
      customerName: customerName.trim(),
      phoneNumber: phoneNumber.trim(),
      serviceCategory,
      productRequired: productRequired.trim(),
      measurements: measurements.trim() || 'On-site measurement requested',
      location: location.trim(),
      additionalRequirements: additionalRequirements.trim(),
    };

    // Persist enquiry so it is never silently discarded
    saveEnquiryRecord(payload);
    setSubmittedEnquiry(payload);
  };

  const handleCopyEnquiry = async () => {
    if (!submittedEnquiry) return;
    const formatted = formatWhatsAppEnquiryMessage(submittedEnquiry);
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedText(true);
      setTimeout(() => setCopiedText(false), 3000);
    } catch {
      // Fallback if clipboard API is restricted
    }
  };

  const handleDownloadReceipt = () => {
    if (!submittedEnquiry) return;
    const text = formatWhatsAppEnquiryMessage(submittedEnquiry);
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Sakshi-Enterprises-Enquiry-${submittedEnquiry.id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSaveRuntimeConfig = (e: React.FormEvent) => {
    e.preventDefault();
    setRuntimeContactOverride(adminWhatsappInput, adminPhoneInput);
    setContactConfig(getActiveContactConfig());
    setConfigSavedNotice(true);
    setTimeout(() => setConfigSavedNotice(false), 3500);
  };

  return (
    <div id="enquiry-form" className="scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Direct Channels, Nagpur Coverage & Configurable Contact Status */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#1A1A1A] text-white p-7 sm:p-9 border border-white/15 space-y-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF6B35]">
                DIRECT COMMUNICATION
              </span>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mt-2">
                Enquire for Custom Measurements &amp; Quotation
              </h3>
              <p className="text-sm text-white/75 mt-2 leading-relaxed">
                Share your window, door, partition, or railing requirements. Our team coordinates
                on-site measurements and material selection across Nagpur.
              </p>
            </div>

            {/* Direct Action Buttons (WhatsApp + Click-to-Call) */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between px-5 py-4 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>WhatsApp: {contactConfig.phoneNumber}</span>
                </span>
                <span>Open Chat →</span>
              </a>

              <a
                href={`tel:${contactConfig.phoneNumber.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-between px-5 py-4 bg-white/10 hover:bg-white hover:text-[#1A1A1A] text-white border border-white/25 font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-colors"
              >
                <span className="inline-flex items-center gap-2.5">
                  <PhoneCall className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                  <span>Click to Call: {contactConfig.phoneNumber}</span>
                </span>
                <span>Dial →</span>
              </a>
            </div>

            {/* Service Location & Email Details */}
            <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-white block">Address &amp; Coverage Area</strong>
                  <span>
                    Vathoda, Nagpur, Maharashtra, India — Serving Residential Homes, Apartments,
                    Societies, Commercial Offices &amp; Retail Establishments across Nagpur.
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Send className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <strong className="text-white block">Official Email</strong>
                  <a
                    href="mailto:subodhgadpayle2610@gmail.com"
                    className="text-white/90 hover:text-[#FF6B35] underline transition-colors"
                  >
                    subodhgadpayle2610@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: 7-Field Professional Customer Enquiry Form */}
        <div className="lg:col-span-7">
          {submittedEnquiry ? (
            <div
              role="status"
              aria-live="polite"
              className="bg-white border-2 border-[#1A1A1A] p-7 sm:p-10 shadow-xl space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#FF6B35] text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.16em] text-[#FF6B35] font-bold">
                    ENQUIRY REFERENCE #{submittedEnquiry.id}
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl text-[#1A1A1A] mt-1">
                    Enquiry Recorded &amp; Ready for WhatsApp Dispatch
                  </h3>
                  <p className="text-sm text-[#333333] mt-1">
                    Thank you, <strong>{submittedEnquiry.customerName}</strong>. Your specification
                    has been saved locally so it is never lost. Click below to send it directly via
                    WhatsApp or download a copy.
                  </p>
                </div>
              </div>

              {/* Summary Table */}
              <div className="bg-[#F5F5F5] border border-black/10 p-5 space-y-2.5 text-xs sm:text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Customer Name:</span>
                  <span className="sm:col-span-2 font-bold text-[#1A1A1A]">
                    {submittedEnquiry.customerName}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Phone Number:</span>
                  <span className="sm:col-span-2 font-bold text-[#1A1A1A]">
                    {submittedEnquiry.phoneNumber}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Service Category:</span>
                  <span className="sm:col-span-2 font-bold text-[#FF6B35]">
                    {submittedEnquiry.serviceCategory}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Product Required:</span>
                  <span className="sm:col-span-2 text-[#1A1A1A]">
                    {submittedEnquiry.productRequired}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Measurements:</span>
                  <span className="sm:col-span-2 text-[#1A1A1A]">
                    {submittedEnquiry.measurements}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1 border-b border-black/10">
                  <span className="font-semibold text-[#333333]">Customer Location:</span>
                  <span className="sm:col-span-2 text-[#1A1A1A]">{submittedEnquiry.location}</span>
                </div>
                {submittedEnquiry.additionalRequirements && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-1 py-1">
                    <span className="font-semibold text-[#333333]">Additional Notes:</span>
                    <span className="sm:col-span-2 text-[#1A1A1A]">
                      {submittedEnquiry.additionalRequirements}
                    </span>
                  </div>
                )}
              </div>

              {/* Dispatch Actions */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl(formatWhatsAppEnquiryMessage(submittedEnquiry))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2.5 min-h-[52px] px-6 py-3.5 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs uppercase tracking-[0.14em] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Send Enquiry on WhatsApp Now</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEnquiry}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3.5 bg-[#1A1A1A] hover:bg-[#333333] text-white font-heading font-bold text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  {copiedText ? (
                    <>
                      <Check className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                      <span>Copy Details</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleDownloadReceipt}
                  className="inline-flex items-center justify-center gap-2 min-h-[52px] px-5 py-3.5 border border-black/25 hover:border-[#1A1A1A] text-[#1A1A1A] font-heading font-bold text-xs uppercase tracking-[0.12em] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                  <span>Download Receipt</span>
                </button>
              </div>

              <div className="pt-2 border-t border-black/10 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => setSubmittedEnquiry(null)}
                  className="text-xs font-heading font-bold uppercase tracking-wider text-[#FF6B35] hover:underline"
                >
                  ← Submit Another Enquiry
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white border border-black/15 p-7 sm:p-10 shadow-xl space-y-6"
            >
              <div className="border-b border-black/10 pb-4">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#FF6B35]">
                  CUSTOMER ENQUIRY FORM
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#1A1A1A] mt-1">
                  Request a Custom Quotation
                </h3>
                <p className="text-xs sm:text-sm text-[#333333] mt-1">
                  Fields marked with <span className="text-[#FF6B35] font-bold">*</span> are
                  required.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 1. Customer Name */}
                <div>
                  <label
                    htmlFor="enquiry-customer-name"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    1. Customer Name <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    id="enquiry-customer-name"
                    name="customerName"
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => {
                      setCustomerName(e.target.value);
                      if (errors.customerName) {
                        setErrors((prev) => ({ ...prev, customerName: undefined }));
                      }
                    }}
                    placeholder="Enter your full name"
                    aria-invalid={Boolean(errors.customerName)}
                    aria-describedby={errors.customerName ? 'err-customer-name' : undefined}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F5F5] border ${
                      errors.customerName ? 'border-red-600' : 'border-black/20'
                    } text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors`}
                  />
                  {errors.customerName && (
                    <p
                      id="err-customer-name"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.customerName}</span>
                    </p>
                  )}
                </div>

                {/* 2. Phone Number */}
                <div>
                  <label
                    htmlFor="enquiry-phone"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    2. Phone Number <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    id="enquiry-phone"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={phoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                      if (errors.phoneNumber) {
                        setErrors((prev) => ({ ...prev, phoneNumber: undefined }));
                      }
                    }}
                    placeholder="10-digit mobile number"
                    aria-invalid={Boolean(errors.phoneNumber)}
                    aria-describedby={errors.phoneNumber ? 'err-phone' : undefined}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F5F5] border ${
                      errors.phoneNumber ? 'border-red-600' : 'border-black/20'
                    } text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors`}
                  />
                  {errors.phoneNumber && (
                    <p
                      id="err-phone"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.phoneNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 3. Service Category */}
                <div>
                  <label
                    htmlFor="enquiry-service-category"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    3. Service Category <span className="text-[#FF6B35]">*</span>
                  </label>
                  <select
                    id="enquiry-service-category"
                    name="serviceCategory"
                    value={serviceCategory}
                    onChange={(e) =>
                      handleCategoryChange(e.target.value as ServiceCategoryOption)
                    }
                    className="w-full px-4 py-3 text-sm bg-[#F5F5F5] border border-black/20 text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors"
                  >
                    <option value="Mosquito Net Solutions">Mosquito Net Solutions</option>
                    <option value="Aluminium Work">Aluminium Work</option>
                    <option value="Steel Fabrication">Steel Fabrication</option>
                  </select>
                </div>

                {/* 4. Product Required */}
                <div>
                  <label
                    htmlFor="enquiry-product-required"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    4. Product Required <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    id="enquiry-product-required"
                    name="productRequired"
                    list="product-suggestions-list"
                    type="text"
                    required
                    value={productRequired}
                    onChange={(e) => {
                      setProductRequired(e.target.value);
                      if (errors.productRequired) {
                        setErrors((prev) => ({ ...prev, productRequired: undefined }));
                      }
                    }}
                    placeholder="Select or type required product"
                    aria-invalid={Boolean(errors.productRequired)}
                    aria-describedby={errors.productRequired ? 'err-product' : undefined}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F5F5] border ${
                      errors.productRequired ? 'border-red-600' : 'border-black/20'
                    } text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors`}
                  />
                  <datalist id="product-suggestions-list">
                    {PRODUCT_SUGGESTIONS[serviceCategory].map((suggestion) => (
                      <option key={suggestion} value={suggestion} />
                    ))}
                  </datalist>
                  {/* Quick-select pills */}
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {PRODUCT_SUGGESTIONS[serviceCategory].slice(0, 3).map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setProductRequired(item)}
                        className={`text-[10px] px-2 py-0.5 border transition-colors ${
                          productRequired === item
                            ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                            : 'bg-[#F5F5F5] text-[#333333] border-black/15 hover:border-[#FF6B35]'
                        }`}
                      >
                        {item.replace(' (Window / Door)', '')}
                      </button>
                    ))}
                  </div>
                  {errors.productRequired && (
                    <p
                      id="err-product"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.productRequired}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* 5. Approximate Measurements */}
                <div>
                  <label
                    htmlFor="enquiry-measurements"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    5. Approximate Measurements
                  </label>
                  <input
                    id="enquiry-measurements"
                    name="measurements"
                    type="text"
                    value={measurements}
                    onChange={(e) => setMeasurements(e.target.value)}
                    placeholder="e.g., 4ft x 5ft (3 windows) or Need site measurement"
                    className="w-full px-4 py-3 text-sm bg-[#F5F5F5] border border-black/20 text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors"
                  />
                </div>

                {/* 6. Customer Location */}
                <div>
                  <label
                    htmlFor="enquiry-location"
                    className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                  >
                    6. Customer Location (Nagpur) <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    id="enquiry-location"
                    name="location"
                    type="text"
                    required
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (errors.location) {
                        setErrors((prev) => ({ ...prev, location: undefined }));
                      }
                    }}
                    placeholder="e.g., Dharampeth, Manish Nagar, Civil Lines, Nagpur"
                    aria-invalid={Boolean(errors.location)}
                    aria-describedby={errors.location ? 'err-location' : undefined}
                    className={`w-full px-4 py-3 text-sm bg-[#F5F5F5] border ${
                      errors.location ? 'border-red-600' : 'border-black/20'
                    } text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors`}
                  />
                  {errors.location && (
                    <p
                      id="err-location"
                      role="alert"
                      className="mt-1.5 text-xs text-red-600 flex items-center gap-1 font-medium"
                    >
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.location}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* 7. Additional Requirements */}
              <div>
                <label
                  htmlFor="enquiry-additional"
                  className="block text-xs font-heading font-bold uppercase tracking-[0.12em] text-[#1A1A1A] mb-2"
                >
                  7. Additional Requirements
                </label>
                <textarea
                  id="enquiry-additional"
                  name="additionalRequirements"
                  rows={3}
                  value={additionalRequirements}
                  onChange={(e) => setAdditionalRequirements(e.target.value)}
                  placeholder="Preferred mesh colour (black, grey, cream), Velcro or chain fitting, aluminium finish, or preferred time for measurement..."
                  className="w-full px-4 py-3 text-sm bg-[#F5F5F5] border border-black/20 text-[#1A1A1A] focus:bg-white focus:border-[#FF6B35] transition-colors"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 min-h-[54px] px-8 py-4 bg-[#FF6B35] hover:bg-[#e85a25] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.14em] transition-all shadow-lg shadow-[#FF6B35]/20"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Submit Enquiry &amp; Prepare WhatsApp Quote</span>
                </button>
                <span className="text-xs text-[#333333]">
                  Instant validation • Direct WhatsApp summary
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
