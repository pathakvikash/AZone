/**
 * Design Tokens - Centralized design system values
 * Used for consistent styling across components
 * Based on 4px spacing scale
 */

// ============================================
// BREAKPOINTS
// ============================================
export const breakpoints = {
  xs: '480px',   // Large phones
  sm: '640px',   // Small tablets
  md: '768px',   // Tablets
  lg: '1024px',  // Small laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large screens
} as const;

export type Breakpoint = keyof typeof breakpoints;

// ============================================
// SPACING (4px base scale)
// ============================================
export const spacing = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
} as const;

export type Spacing = keyof typeof spacing;

// ============================================
// COLORS - Brand
// ============================================
export const colors = {
  brand: {
    primary: '#131921',
    primaryLight: '#232F3A',
    accent: '#FEBD69',
    background: '#EAEDED',
    surface: '#FFFFFF',
  },
  // Semantic colors
  semantic: {
    error: '#CC0000',
    errorLight: '#FF6B6B',
    success: '#007600',
    successLight: '#00B800',
    warning: '#FF9900',
    warningLight: '#FFB84D',
    info: '#007185',
    infoLight: '#4DB6C4',
  },
  // Text colors
  text: {
    primary: '#131921',
    secondary: '#555555',
    muted: '#888888',
    inverse: '#FFFFFF',
  },
  // Border colors
  border: {
    default: '#DDDBDA',
    light: '#F0F0F0',
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================
export const typography = {
  fontFamily: {
    sans: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'SF Mono', 'Fira Code', monospace",
  },
  fontSize: {
    xs: ['12px', { lineHeight: '16px' }],
    sm: ['14px', { lineHeight: '20px' }],
    base: ['16px', { lineHeight: '24px' }],
    lg: ['18px', { lineHeight: '28px' }],
    xl: ['20px', { lineHeight: '28px' }],
    '2xl': ['24px', { lineHeight: '32px' }],
    '3xl': ['30px', { lineHeight: '36px' }],
    '4xl': ['36px', { lineHeight: '40px' }],
  },
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const;

// ============================================
// BORDER RADIUS
// ============================================
export const borderRadius = {
  none: '0px',
  sm: '2px',
  DEFAULT: '4px',
  md: '6px',
  lg: '8px',
  xl: '12px',
  '2xl': '16px',
  full: '9999px',
} as const;

// ============================================
// SHADOWS
// ============================================
export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const;

// ============================================
// TRANSITIONS
// ============================================
export const transitions = {
  duration: {
    fast: '75ms',
    DEFAULT: '150ms',
    slow: '300ms',
    slower: '500ms',
  },
  timing: {
    DEFAULT: 'ease-in-out',
    linear: 'linear',
    ease: 'ease',
    'ease-in': 'ease-in',
    'ease-out': 'ease-out',
    'ease-in-out': 'ease-in-out',
  },
} as const;

// ============================================
// Z-INDEX
// ============================================
export const zIndex = {
  0: 0,
  10: 10,
  20: 20,
  30: 30,
  40: 40,
  50: 50,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  'modal-backdrop': 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

// ============================================
// GRID CONFIGURATIONS
// ============================================
export const grid = {
  // Responsive column counts
  columns: {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    wide: 4,
  },
  // Gap values
  gap: {
    mobile: '16px',
    tablet: '20px',
    desktop: '24px',
  },
} as const;

// ============================================
// RESPONSIVE HELPERS
// ============================================
/**
 * Generate responsive grid classes
 * @param mobile - columns for mobile
 * @param tablet - columns for tablet (md+)
 * @param desktop - columns for desktop (lg+)
 * @param wide - columns for wide screens (xl+)
 */
export function responsiveGrid(
  mobile: number,
  tablet?: number,
  desktop?: number,
  wide?: number
): string {
  const classes = [`grid-cols-${mobile}`];
  if (tablet) classes.push(`md:grid-cols-${tablet}`);
  if (desktop) classes.push(`lg:grid-cols-${desktop}`);
  if (wide) classes.push(`xl:grid-cols-${wide}`);
  return classes.join(' ');
}

/**
 * Generate responsive gap classes
 */
export function responsiveGap(
  mobile: string | number,
  tablet?: string | number,
  desktop?: string | number
): string {
  const classes = [`gap-${mobile}`];
  if (tablet) classes.push(`md:gap-${tablet}`);
  if (desktop) classes.push(`lg:gap-${desktop}`);
  return classes.join(' ');
}

// ============================================
// EXPORT ALL TOKENS AS OBJECT
// ============================================
export const designTokens = {
  breakpoints,
  spacing,
  colors,
  typography,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  grid,
} as const;

export default designTokens;