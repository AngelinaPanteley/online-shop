export const rem = pxSize => {
  const remSize = pxSize / 16;

  return `${remSize}rem`;
};

export const Theme = {
  fonts: {
    body: "Sen, sans-serif",
    heading: "Sen, sans-serif",
    logo: "Lobster, cursive"
  },
  fontSizes: [
    rem(12),
    rem(14),
    rem(16),
    rem(20),
    rem(24),
    rem(30),
  ],
  fontWeights: {
    regular: 400,
    bold: 700
  },
  lineHeights: {
    tiny: 1,
    body: 1.5,
    link: 1.714,
    heading: 1.25
  },
  space: [
    0,
    rem(2),
    rem(4),
    rem(8),
    rem(16),
    rem(32),
    rem(50),
    rem(64),
    rem(128),
    rem(256)
  ],
  colors: {
    brand: {
      
    },
    dark: {
      
    },
    light: {
      
    },
    mono: {
      black: "#000000",
      white: "#ffffff",
      gray: "#ссс",
    },
  }
};
