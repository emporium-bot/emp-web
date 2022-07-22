import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  theme: darkTheme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      primary: '#D64045',

      void: '#000000',
      background: '#323232',
    },
    space: {
      1: '0.25rem',
      2: '0.5rem',
      3: '1rem',
      4: '2rem',
      5: '4rem',
    },
    fonts: {},
    shadows: {
      default: 'none',
      active: 'none',
    },
    fontSizes: {
      1: '1rem',
      2: '1.4rem',
      3: '2.2rem',
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
    },
    zIndices: {},
    transitions: {},
  },
  media: {
    sm: '(max-width: 640px)',
    md: '(max-width: 850px)',
    lg: '(max-width: 1140px)',
    large: '(min-width: 1140px)',
  },
  utils: {},
});

export const lightTheme = createTheme({
  colors: {
    void: '#FFFFFF',
    background: '#E6E9EF',
  },
  shadows: {
    default: '0px 0px 8px #E6E9EF',
    active: '0px 0px 16px #E6E9EF',
  },
});
