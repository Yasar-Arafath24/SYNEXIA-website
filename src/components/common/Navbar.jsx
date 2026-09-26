import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, ExternalLink } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigationData';
import { SYMPOSIUM_CONFIG } from '../../data/symposiumData';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  const registrationUrl = siteConfig.registrationUrl && siteConfig.registrationUrl.trim().length > 0 
    ? siteConfig.registrationUrl 
    : '/register';
  const isExternalReg = registrationUrl.startsWith('http');

  // Track scroll position for subtle elevation and reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
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

  // Close the mobile menu with Escape and restore focus to the toggle
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Focus the first link when the menu opens and trap Tab navigation within it
  useEffect(() => {
    if (!isOpen) return;

    const menu = menuRef.current;
    if (!menu) return;

    const focusables = Array.from(
      menu.querySelectorAll('a[href], button:not([disabled])')
    );
    focusables[0]?.focus();

    const handleTab = (e) => {
      if (e.key !== 'Tab' || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || !menu.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !menu.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    menu.addEventListener('keydown', handleTab);
    return () => menu.removeEventListener('keydown', handleTab);
  }, [isOpen]);

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
              alt="SYNEXIA association logo"
              className="h-10 sm:h-12 w-auto max-w-[200px] sm:max-w-[240px] object-contain transition-transform duration-200 group-hover:opacity-95"
            />
          </Link>

          {/* CENTER / RIGHT Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'text-brand-navy font-bold bg-brand-navy/5'
                      : 'text-slate-600 hover:text-brand-navy hover:bg-slate-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    <span 
                      aria-hidden="true"
                      className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-magenta transition-all duration-300 ${
                        isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                      }`} 
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT: Register button (visually stands out using SYNEXIA magenta/navy branding) */}
          <div className="hidden md:flex items-center">
            {isExternalReg ? (
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl bg-brand-navy text-white border border-brand-navy/60 hover:border-brand-magenta hover:bg-brand-navy-light hover:shadow-magenta-glow transition-all duration-300 active:scale-[0.98] group shadow-subtle cursor-pointer"
                aria-label="Register for SYNEXIA'26 (Opens official registration form)"
              >
                <span>Register</span>
                <ExternalLink className="w-4 h-4 text-brand-magenta-light transition-transform duration-300 group-hover:scale-110" />
              </a>
            ) : (
              <Link
                to="/register"
                className="relative inline-flex items-center gap-2 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl bg-brand-navy text-white border border-brand-navy/60 hover:border-brand-magenta hover:bg-brand-navy-light hover:shadow-subtle transition-all duration-300 active:scale-[0.98] group"
              >
                <span>Register</span>
                <ArrowRight className="w-4 h-4 text-brand-magenta-light transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>

          {/* MOBILE: Clean Hamburger Toggle & Register Button */}
          <div className="flex md:hidden items-center gap-2">
            {isExternalReg ? (
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy shadow-xs active:scale-95 transition-all"
                aria-label="Register for SYNEXIA'26"
              >
                <span>Register</span>
                <ExternalLink className="w-3 h-3 text-brand-magenta-light" />
              </a>
            ) : (
              <Link
                to="/register"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-brand-navy text-white hover:bg-brand-navy-light border border-brand-navy"
              >
                Register
              </Link>
            )}
            <button
              ref={toggleRef}
              onClick={toggleMenu}
              type="button"
              className="p-2 rounded-lg text-brand-navy hover:bg-slate-100 focus:outline-none transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Interactive Scroll Progress Neon Line right below the sticky header */}
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-blue via-brand-magenta to-brand-magenta-light transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* MOBILE MENU: Smooth animated drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        inert={!isOpen}
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
            {isExternalReg ? (
              <a
                href={registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl font-semibold text-sm bg-brand-navy text-white hover:bg-brand-navy-light shadow-sm transition-all"
              >
                <span>Register Online</span>
                <ExternalLink className="w-4 h-4 text-brand-magenta-light" />
              </a>
            ) : (
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
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
