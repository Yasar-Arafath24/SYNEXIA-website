import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PageTransition from '../components/common/PageTransition';
import AmbientBackground from '../components/common/AmbientBackground';

/**
 * Layout — Global layout for SYNEXIA'26
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-brand-magenta selection:text-white relative">
      {/* Interactive Cyber Ambient Glow Effect */}
      <AmbientBackground />
      {/* Skip to content link for keyboard / screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-brand-navy focus:text-white focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Scroll restoration & back to top button */}
      <ScrollToTop />

      {/* Sticky, elevated-on-scroll Navbar */}
      <Navbar />

      {/* Main Content Area with restrained page transition */}
      <main id="main-content" className="flex-grow">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Clean minimal Footer */}
      <Footer />
    </div>
  );
}
