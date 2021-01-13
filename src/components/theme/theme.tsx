import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { rgba } from 'polished';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      [key in keyof typeof colors]: string;
    };
    spaces: {
      [key in keyof typeof spaces]: number;
    };
    fonts: { [key in keyof typeof fonts]: string };
  }
}

const colors = {
  N800: '#333333',
  N700: '#484848',
  N400: '#777777',
  N300: '#999999',
  N100: '#B0B0B0',
  N75: '#C4C4C4',
  N50: '#DDDDDD',
  N25: '#EEEEEE',
  N0: '#FFFFFF',
  N50O: rgba('#EEEEEE', 0.7),
  C600: '#D1A505',
  C500: '#E0B105',
  C400: '#F9C506',
  C300: '#FACE2E',
  C200: '#FBD651',
  C300O: rgba('#FACE2E', 0.4),
  G600: '#328659',
  G500: '#3A9C68',
  G400: '#45BA7B',
  G300: '#63C590',
  G200: '#7DCFA2',
  G25A: '#EDFEEB',
  G50A: '#D7FAD3',
  G300O: rgba('#63C590', 0.4),
  R600: '#B1481B',
  R500: '#C7511F',
  R400: '#DD5A22',
  R300: '#E27545',
  R200: '#E68860',
  R25A: '#FDE1D8',
  R50A: '#FDCFBF',
  R300O: rgba('#E27545', 0.4),
  Y600: '#E57F06',
  Y500: '#FB8B04',
  Y400: '#FFAB00',
  Y300: '#FFC229',
  Y200: '#FFD23D',
  Y25A: '#FEF5D2',
  Y50A: '#FDEFB5',
  Y300O: rgba('#FFC229', 0.4),
  B600: '#0A52A3',
  B500: '#0A60C2',
  B400: '#096EE1',
  B300: '#137DF6',
  B200: '#2E8DFA',
  B25A: '#CCE9FF',
  B50A: '#B4DEFE',
  B300O: rgba('#137DF6', 0.4),
} as const;

const spaces = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
} as const;

const fonts = {
  base:
    '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", Oxygen, Ubuntu, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  monospace:
    '"Roboto Mono" source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
};

const theme = {
  colors,
  spaces,
  fonts,
};

export const ThemeProvider = () => <EmotionThemeProvider theme={theme} />;

export default theme;
