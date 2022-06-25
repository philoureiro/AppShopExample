export type ThemeType = typeof theme

export const theme = {
  colors: {
    primaryGreen: "#27B161",
    black: "#000000",
    white: "#FFFFFF",
    lightWhite: "#f4f5f7",
    gray: "#BBBDCD",
    lightGreen: "#E9F7EF",
  },
  font: {
    familyBold: "Roboto_700Bold",
    familyLight: "Roboto_300Light",
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
}
