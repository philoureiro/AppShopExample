export type ThemeType = typeof theme;

export const theme = {
  colors: {
    primaryBlue: '#1C55FF',
    gray: '#C4C4C4',
    lightGray: '#C8C8C8',
    darkGray: '#777777',
    green: '#09D666',
    black: '#000000',
    white: '#FFFFFF',
    lightWhite: '#E7EDFF80',
    mediumWhite: '#E5E5E5',
    red: '#dc3545',
  },
  font: {
    family: 'Poppins',
    sizes: {
      small: 14,
      medium: 16,
      large: 24,
    },
    weight: {
      bolder: 900,
      bold: 700,
      medium: 400,
    },
  },

  spacings: {
    xxsmall: 8,
    xsmall: 14,
    small: 20,
    medium: 30,
    large: 60,
  },
  icons: {
    sizes: {
      small: 24,
      medium: 30,
      large: 94,
    },
  },
  radius: {
    medium: 16,
  },

  zIndex: {
    medium: 100,
  },
};
