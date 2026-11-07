import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, MessageCircle, ArrowUpRight, Shield, Layers, Hammer } from 'lucide-react';
import { Logo } from './Logo';
import { buildWhatsAppUrl } from '../data/businessConfig';

const SERVICE_LINKS = [
  {
    name: 'Mosquito Net Solutions',
    path: '/mosquito-net-solutions',
    subtitle: 'Fiberglass, Polyester & Aluminium Mesh • Velcro & Chain Systems',
    icon: Shield,
  },
  {
    name: 'Aluminium Solutions',
    path: '/aluminium-solutions',
    subtitle: 'Sliding Windows, Doors & Architectural Glass Partitions',
    icon: Layers,
  },
  {
    name: 'Steel Fabrication',
    path: '/steel-fabrication',
    subtitle: 'Balcony Railings, Staircase Railings & Custom Steel Work',
    icon: Hammer,
  },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isServiceRouteActive = SERVICE_LINKS.some((s) => location.pathname === s.path);

  const navBarClasses = isScrolled || mobileMenuOpen
    ? 'bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
    : 'bg-gradient-to-b from-[#1A1A1A]/85 via-[#1A1A1A]/40 to-transparent border-b border-white/10 py-5';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBarClasses}`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          to="/"
          aria-label="Sakshi Enterprises Home"
          className="focus-visible:outline-offset-4"
        >
          <Logo variant="dark-bg" size="md" />
        </Link>

        {/* Desktop Primary Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                isActive
                  ? 'text-[#FF6B35] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Home
                {isActive && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#FF6B35]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                isActive
                  ? 'text-[#FF6B35] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                About Us
                {isActive && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#FF6B35]" />
                )}
              </>
            )}
          </NavLink>

          {/* Accessible Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
              onClick={() => setDropdownOpen((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                isServiceRouteActive
                  ? 'text-[#FF6B35] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? 'rotate-180 text-[#FF6B35]' : ''
                }`}
                aria-hidden="true"
              />
              {isServiceRouteActive && (
                <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#FF6B35]" />
              )}
            </button>

            {/* Dropdown Panel */}
            <div
              role="menu"
              aria-label="Sakshi Enterprises Services"
              className={`absolute left-0 top-full pt-3 w-[380px] transition-all duration-200 origin-top-left ${
                dropdownOpen
                  ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                  : 'opacity-0 -translate-y-2 pointer-events-none invisible'
              }`}
            >
              <div className="bg-[#1A1A1A] border border-white/15 shadow-2xl p-2 divide-y divide-white/10">
                <div className="px-3.5 py-2.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#FF6B35]">
                    Core Architectural Segments
                  </p>
                </div>
                <div className="py-1">
                  {SERVICE_LINKS.map((item) => {
                    const Icon = item.icon;
                    const active = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        role="menuitem"
                        className={`flex items-start gap-3.5 px-3.5 py-3 transition-colors group ${
                          active
                            ? 'bg-white/10 text-[#FF6B35]'
                            : 'hover:bg-white/5 text-white'
                        }`}
                      >
                        <div className="w-9 h-9 shrink-0 border border-white/15 bg-white/5 flex items-center justify-center mt-0.5 group-hover:border-[#FF6B35] transition-colors">
                          <Icon className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-heading font-bold text-sm text-white group-hover:text-[#FF6B35] transition-colors">
                              {item.name}
                            </span>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 text-white/40 group-hover:text-[#FF6B35] transition-colors"
                              aria-hidden="true"
                            />
                          </div>
                          <p className="text-xs text-white/65 mt-0.5 leading-relaxed">
                            {item.subtitle}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                isActive
                  ? 'text-[#FF6B35] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Our Projects
                {isActive && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#FF6B35]" />
                )}
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `px-3.5 py-2 text-sm font-medium tracking-wide transition-colors relative ${
                isActive
                  ? 'text-[#FF6B35] font-semibold'
                  : 'text-white/90 hover:text-white'
              }`
            }
          >
            {({ isActive }) => (
              <>
                Contact Us
                {isActive && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2px] bg-[#FF6B35]" />
                )}
              </>
            )}
          </NavLink>
        </nav>

        {/* Desktop CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white border border-white/25 hover:border-[#FF6B35] hover:bg-white/5 transition-all"
          >
            <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
            <span>WhatsApp Us</span>
          </a>
          <Link
            to="/contact#enquiry-form"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.12em] bg-[#FF6B35] text-white hover:bg-[#e55a25] transition-colors"
          >
            <span>Get a Quote</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Hamburger Control */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Sakshi Enterprises"
            className="inline-flex items-center justify-center w-11 h-11 border border-white/20 text-white hover:border-[#FF6B35] transition-colors"
          >
            <MessageCircle className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />
          </a>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center w-11 h-11 border border-white/20 text-white hover:border-[#FF6B35] transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-[#FF6B35]" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation-drawer"
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#1A1A1A] border-b border-white/15 ${
          mobileMenuOpen ? 'max-h-[85vh] opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <nav aria-label="Mobile Navigation" className="px-4 pt-3 pb-6 space-y-1 overflow-y-auto max-h-[80vh]">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-3.5 text-base font-heading font-bold border-b border-white/10 ${
                isActive ? 'text-[#FF6B35]' : 'text-white'
              }`
            }
          >
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-3.5 text-base font-heading font-bold border-b border-white/10 ${
                isActive ? 'text-[#FF6B35]' : 'text-white'
              }`
            }
          >
            <span>About Us</span>
          </NavLink>

          {/* Mobile Services Accordion */}
          <div className="border-b border-white/10">
            <button
              type="button"
              aria-expanded={mobileServicesOpen}
              onClick={() => setMobileServicesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between px-3 py-3.5 text-base font-heading font-bold text-white"
            >
              <span className={isServiceRouteActive ? 'text-[#FF6B35]' : 'text-white'}>
                Services
              </span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  mobileServicesOpen ? 'rotate-180 text-[#FF6B35]' : 'text-white/70'
                }`}
                aria-hidden="true"
              />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 pr-2 pb-3 space-y-1.5">
                {SERVICE_LINKS.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className={({ isActive }) =>
                      `block p-3 border ${
                        isActive
                          ? 'border-[#FF6B35] bg-white/10 text-[#FF6B35]'
                          : 'border-white/10 bg-white/5 text-white'
                      }`
                    }
                  >
                    <div className="font-heading font-bold text-sm">{service.name}</div>
                    <div className="text-xs text-white/65 mt-0.5">{service.subtitle}</div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-3.5 text-base font-heading font-bold border-b border-white/10 ${
                isActive ? 'text-[#FF6B35]' : 'text-white'
              }`
            }
          >
            <span>Our Projects</span>
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-3.5 text-base font-heading font-bold border-b border-white/10 ${
                isActive ? 'text-[#FF6B35]' : 'text-white'
              }`
            }
          >
            <span>Contact Us</span>
          </NavLink>

          <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white border border-white/25 hover:border-[#FF6B35]"
            >
              <MessageCircle className="w-4 h-4 text-[#FF6B35]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              to="/contact#enquiry-form"
              className="flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] bg-[#FF6B35] text-white"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};
