import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigationData';
import { SYMPOSIUM_CONFIG } from '../../data/symposiumData';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-shadow duration-300 ${
        isScrolled
          ? 'shadow-[0_4px_20px_-4px_rgba(11,27,61,0.08)] border-slate-300/80'
          : 'shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-[72px]">
          
          {/* LEFT: SYNEXIA association logo (Original aspect ratio, no distortion) */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center group flex-shrink-0"
            aria-label={`${siteConfig.symposiumName} Home`}
          >
            <img
              src={siteConfig.synexiaLogo || SYMPOSIUM_CONFIG.logo}
              alt={`${siteConfig.symposiumName} Logo`}
              className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-transform duration-200 group-hover:opacity-95"
            />
          </Link>

          {/* CENTER / RIGHT Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-navy font-bold bg-slate-100/90'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: Register button (visually stands out using SYNEXIA magenta/navy branding) */}
          <div className="hidden md:flex items-center">
            <Link
              to="/register"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl bg-brand-navy text-white border border-brand-navy/60 hover:border-brand-magenta hover:bg-brand-navy-light hover:shadow-subtle transition-all duration-300 active:scale-[0.98] group"
            >
              <span>Register</span>
              <ArrowRight className="w-4 h-4 text-brand-magenta-light transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* MOBILE: Clean Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              to="/register"
              className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy"
            >
              Register
            </Link>
            <button
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE MENU: Smooth animated drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-slate-100 bg-white ${
          isOpen ? 'max-h-[380px] opacity-100 shadow-lg' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={({ isActive }) =>
                `block px-3.5 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? 'text-brand-navy font-bold bg-slate-100'
                    : 'text-slate-700 hover:text-brand-navy hover:bg-slate-50'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Register Link */}
          <div className="pt-3 mt-2 border-t border-slate-100">
            <NavLink
              to="/register"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isActive
                    ? 'bg-brand-magenta text-white shadow-magenta-glow'
                    : 'bg-brand-navy text-white hover:bg-brand-navy-light'
                }`
              }
            >
              <span>Register</span>
              <ArrowRight className="w-4 h-4 text-brand-magenta-light" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}
