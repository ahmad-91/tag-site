/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '375px',    // iPhone SE
      'sm': '640px',    // Mobile landscape
      'md': '768px',    // Tablet
      'lg': '1024px',   // Desktop
      'xl': '1280px',   // Large desktop
      '2xl': '1536px',  // Extra large
      '3xl': '1920px',  // Full HD
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
        },
        accent: {
          green: 'var(--color-accent-green)',
          lime: 'var(--color-accent-lime)',
          purple: 'var(--color-accent-purple)',
          'green-light': 'var(--color-accent-green-light)',
          'green-dark': 'var(--color-accent-green-dark)',
        },
        text: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          muted: 'var(--color-text-muted)',
          white: 'var(--color-text-white)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          alt: 'var(--color-background-alt)',
          dark: 'var(--color-background-dark)',
          gray: 'var(--color-background-gray)',
        },
      },
      fontFamily: {
        arabic: ['var(--font-arabic)', '"IBM Plex Sans Arabic"', 'sans-serif'],
        arabicBody: ['var(--font-arabic)', '"IBM Plex Sans Arabic"', 'sans-serif'],
        latin: ['var(--font-latin)', '"IBM Plex Sans Arabic"', 'sans-serif'],
        latinBody: ['var(--font-latin)', '"IBM Plex Sans Arabic"', 'sans-serif'],
      },
      fontWeight: {
        black: '900',
        extraBold: '800',
        semiBold: '600',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, var(--color-primary), var(--color-secondary))',
        'gradient-accent': 'linear-gradient(to right, var(--color-accent-green), var(--color-accent-lime))',
        'gradient-accent-purple': 'linear-gradient(to right, var(--color-accent-purple), var(--color-accent-green))',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1.2' }],
        '6xl': ['3.75rem', { lineHeight: '1.2' }],
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.1' }],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      minHeight: {
        'screen-75': '75vh',
        'screen-50': '50vh',
      },
    },
  },
  plugins: [],
  // RTL Support
  corePlugins: {
    preflight: true,
  },
}

