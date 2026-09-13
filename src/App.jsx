import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import TechnicalEventsPage from './pages/TechnicalEventsPage';
import NonTechnicalEventsPage from './pages/NonTechnicalEventsPage';
import EventDetailPage from './pages/EventDetailPage';
import CoordinatorsPage from './pages/CoordinatorsPage';
import AboutPage from './pages/AboutPage';
import GuidelinesPage from './pages/GuidelinesPage';
import RegistrationPage from './pages/RegistrationPage';
import ContactPage from './pages/ContactPage';
import DesignSystemPage from './pages/DesignSystemPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          
          {/* Phase 2 Navigation Routes */}
          <Route path="technical-events" element={<TechnicalEventsPage />} />
          <Route path="non-technical-events" element={<NonTechnicalEventsPage />} />
          <Route path="coordinators" element={<CoordinatorsPage />} />
          <Route path="register" element={<RegistrationPage />} />
          
          {/* Detailed & Supporting Routes */}
          <Route path="events" element={<EventsPage />} />
          <Route path="events/:eventId" element={<EventDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="guidelines" element={<GuidelinesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="design-system" element={<DesignSystemPage />} />
          
          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}
