import { globalCss } from '@stitches/react';
import { darkTheme, lightTheme } from './config';

export const themeGlobals = globalCss({
  'html, body': {
    height: '100%',

    '&.light': {
      backgroundColor: lightTheme.colors.void.value,
    },

    '&.dark': {
      backgroundColor: darkTheme.colors.void.value,
    },
  },
});
