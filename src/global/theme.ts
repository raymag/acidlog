export default {
  colors: {
    primary: '#3EE878',
    dark: '#343434',
    grayish: '#433E3Eee',
    primaryWatered: '#3EE878dd',
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
      dark: string;
      grayish: string;
      primaryWatered: string;
      white: string;
    };
    fonts: {
      content: string;
    };
  };
};
