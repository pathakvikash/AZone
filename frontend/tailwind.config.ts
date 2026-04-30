import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom breakpoints for responsive design
      screens: {
        'xs': '480px',  // Large phones
        'sm': '640px',  // Small tablets
        'md': '768px',  // Tablets
        'lg': '1024px', // Small laptops
        'xl': '1280px', // Desktops
        '2xl': '1536px', // Large screens
      },
      // Spacing scale (4px base)
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      // Typography scale
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
      },
      // Border radius tokens
      borderRadius: {
        'none': '0px',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '9999px',
      },
      // Shadow tokens
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'DEFAULT': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      // Colors - Amazon-inspired with semantic tokens
      colors: {
        // Brand colors
        amazonclone: {
          background: '#EAEDED',
          light_blue: '#232F3A',
          yellow: '#FEBD69',
          DEFAULT: '#131921',
        },
        // Semantic colors
        primary: {
          DEFAULT: '#131921',
          50: '#F0F2F3',
          100: '#E1E6E8',
          200: '#C4CCD0',
          300: '#A7B3B9',
          400: '#8999A1',
          500: '#6C808A',
          600: '#56686E',
          700: '#404F53',
          800: '#2A373C',
          900: '#131921',
        },
        secondary: {
          DEFAULT: '#232F3A',
          50: '#F4F6F7',
          100: '#E8ECEE',
          200: '#D1D9DD',
          300: '#BAC7CC',
          400: '#A3B4BB',
          500: '#8CA2AA',
          600: '#758590',
          700: '#5E6976',
          800: '#474D5C',
          900: '#232F3A',
        },
        accent: {
          DEFAULT: '#FEBD69',
          50: '#FFF9ED',
          100: '#FFF3DB',
          200: '#FFE7B7',
          300: '#FFDB93',
          400: '#FFCF6F',
          500: '#FEBD69',
          600: '#FDB044',
          700: '#F99B1F',
          800: '#E88A0C',
          900: '#C27500',
        },
        background: '#EAEDED',
        surface: '#FFFFFF',
        // State colors
        error: {
          DEFAULT: '#CC0000',
          light: '#FF6B6B',
          dark: '#990000',
        },
        success: {
          DEFAULT: '#007600',
          light: '#00B800',
          dark: '#005700',
        },
        warning: {
          DEFAULT: '#FF9900',
          light: '#FFB84D',
          dark: '#CC7A00',
        },
        info: {
          DEFAULT: '#007185',
          light: '#4DB6C4',
          dark: '#004D5C',
        },
      },
      // Grid column configurations
      gridTemplateColumns: {
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
      },
      // Z-index scale
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'dropdown': '1000',
        'sticky': '1020',
        'fixed': '1030',
        'modal-backdrop': '1040',
        'modal': '1050',
        'popover': '1060',
        'tooltip': '1070',
      },
      // Transition durations
      transitionDuration: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      // Animation
      animation: {
        'fade-in': 'fadeIn 0.2s ease-in-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'slide-out-right': 'slideOutRight 0.3s ease-in',
        'slide-out-left': 'slideOutLeft 0.3s ease-in',
        'slide-in-up': 'slideInUp 0.3s ease-out',
        'slide-out-down': 'slideOutDown 0.3s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
        slideOutLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideOutDown: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
