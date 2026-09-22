import React, { useState } from 'react';
import { Search, Filter, AlertCircle } from 'lucide-react';
import { SYMPOSIUM_CONFIG } from '../data/symposiumData';
import { allEvents } from '../data/events';
import PageHero from '../components/common/PageHero';
import EventCard from '../components/events/EventCard';
import Seo from '../components/common/Seo';

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = SYMPOSIUM_CONFIG.eventCategories;
  const events = allEvents;

  const filteredEvents = events.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const matchesSearch = 
      event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (event.categoryName && event.categoryName.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      <Seo title="Events & Tracks | SYNEXIA'26" description="Explore the full official event catalog of SYNEXIA'26 — technical, non-technical, and special tracks at EGS Pillay Engineering College." />
      <PageHero
        badge="Official Events Catalog"
        title="Symposium Events & Tracks"
        subtitle="Explore technical, non-technical, and special workshop tracks structured for SYNEXIA'26."
        breadcrumbs={[{ label: "Events" }]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Info notice explaining TBA status */}
        <div className="flex items-start gap-3 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 mb-8 text-sm leading-relaxed">
          <AlertCircle className="w-5 h-5 text-brand-navy flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-900">Event Track Announcement Status:</span>
            <span className="ml-1">
              The Department of Computer Science and Business Systems is finalizing the official event titles, problem statements, and judging panels. Track placeholders are structured below and will update automatically once official brochures are published.
            </span>
          </div>
        </div>

        {/* Filter and Search Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  selectedCategory === cat.id
                    ? 'bg-brand-navy text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search tracks..."
              aria-label="Search tracks"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-navy/20 focus:border-brand-navy"
            />
          </div>

        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
            <p className="text-slate-600 font-medium">No events found matching your criteria.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs font-semibold text-brand-magenta hover:underline"
            >
              Clear filters and view all events
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
