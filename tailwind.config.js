/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: {
            DEFAULT: '#0B1B3D',
            dark: '#060E21',
            light: '#152C5B',
          },
          blue: {
            DEFAULT: '#1B4D9B',
            light: '#2563EB',
          },
          magenta: {
            DEFAULT: '#C01368',
            light: '#E4358B',
          },
          surface: '#F8FAFC',
          border: '#E2E8F0',
          muted: '#64748B',
        },
        // CSS Variable Bindings
        token: {
          navy: 'var(--navy)',
          blue: 'var(--blue)',
          magenta: 'var(--magenta)',
          bg: 'var(--background)',
          surface: 'var(--surface)',
          text: 'var(--text)',
          muted: 'var(--muted)',
          border: 'var(--border)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(11, 27, 61, 0.04), 0 1px 2px -1px rgba(11, 27, 61, 0.03)',
        'hover-card': '0 8px 24px -4px rgba(11, 27, 61, 0.08), 0 4px 8px -4px rgba(11, 27, 61, 0.04)',
        'magenta-glow': '0 2px 10px -1px rgba(192, 19, 104, 0.12)',
        'navy-glow': '0 2px 10px -1px rgba(11, 27, 61, 0.10)',
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      screens: {
        'mobile-sm': '390px',
        'mobile-lg': '430px',
        'tablet': '768px',
        'desktop-sm': '1024px',
        'desktop-md': '1280px',
        'desktop-lg': '1440px',
      }
    },
  },
  plugins: [],
}
