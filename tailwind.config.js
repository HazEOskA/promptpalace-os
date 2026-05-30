/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#050508',
          surface: '#0d0d16',
          elevated: '#13131f',
          overlay: '#1a1a2e',
        },
        border: {
          DEFAULT: 'rgba(139,92,246,0.15)',
          strong: 'rgba(139,92,246,0.35)',
          cyan: 'rgba(6,182,212,0.2)',
        },
        violet: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          900: '#1e0d3b',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
          900: '#0a2030',
        },
        amber: {
          400: '#fbbf24',
          500: '#f59e0b',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
        },
        rose: {
          400: '#fb7185',
          500: '#f43f5e',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#94a3b8',
          muted: '#475569',
          accent: '#a78bfa',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)
        `,
        'violet-glow': 'radial-gradient(ellipse at center, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'cyan-glow': 'radial-gradient(ellipse at center, rgba(6,182,212,0.1) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'violet': '0 0 20px rgba(139,92,246,0.25), 0 0 60px rgba(139,92,246,0.08)',
        'cyan': '0 0 20px rgba(6,182,212,0.2), 0 0 60px rgba(6,182,212,0.06)',
        'card': '0 4px 24px rgba(0,0,0,0.4)',
        'glow-sm': '0 0 8px rgba(139,92,246,0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 8px rgba(139,92,246,0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(139,92,246,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
