import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import PageTransition from '../components/common/PageTransition';

/**
 * Layout — Global layout for SYNEXIA'26
 */
export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans antialiased selection:bg-brand-magenta selection:text-white">
      {/* Scroll restoration & back to top button */}
      <ScrollToTop />

      {/* Sticky, elevated-on-scroll Navbar */}
      <Navbar />

      {/* Main Content Area with restrained page transition */}
      <main className="flex-grow">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Clean minimal Footer */}
      <Footer />
    </div>
  );
}
