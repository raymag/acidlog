export default {
  colors: {
    primary: '#3EE878',
    accent: '#fc0ac8',
    dark: '#343434',
    grayish: '#222',
    primaryWatered: '#3EE878dd',
    accentWatered: '#fc0ac8dd',
    darkWatered: '#545454',
    white: '#fff',
  },
  fonts: {
    content: 'roboto',
  },
};

export type themeType = {
  theme: {
    colors: {
      primary: string;
      accent: string;
      dark: string;
      grayish: string;
      primaryWatered: string;
      accentWatered: string;
      darkWatered: string;
      white: string;
    };
    fonts: {
      content: string;
    };
  };
};
