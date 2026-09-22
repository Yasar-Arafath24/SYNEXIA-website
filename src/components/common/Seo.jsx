import { useEffect } from 'react';

/**
 * Seo — Per-page document title and meta description management
 *
 * Updates <title> and the <meta name="description"> tag when a page mounts.
 * Renders nothing to the DOM.
 */
const DEFAULT_TITLE = "SYNEXIA'26 | International Symposium | EGS Pillay Engineering College";
const DEFAULT_DESCRIPTION = "SYNEXIA'26 - International Symposium organized by the Department of Computer Science and Business Systems, E.G.S. Pillay Engineering College. Technical & non-technical events on October 14 & 15, 2026.";

export default function Seo({ title, description }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let el = document.querySelector('meta[name="description"]');
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', 'description');
        document.head.appendChild(el);
      }
      el.setAttribute('content', description);
    }
  }, [title, description]);

  return null;
}

export { DEFAULT_TITLE, DEFAULT_DESCRIPTION };