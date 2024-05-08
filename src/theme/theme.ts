import { createTheme } from '@mui/material/styles';
import { MuiButtonConfig } from './button.config';
import { MuiIconButtonConfig } from './iconButton.config';
import { MuiButtonBaseConfig } from './LikeIconButton.config';
import { MuiLinkConfig } from './link.config';
import { MuiPaginationConfig } from './pagination.config';
import Dosis from '../fonts/Dosis.ttf';
import FugazOne from '../fonts/FugazOne.ttf';
import Goldman from '../fonts/Goldman.ttf';
import Karantina from '../fonts/Karantina.ttf';
import MedulaOne from '../fonts/MedulaOne.ttf';
import Mohave from '../fonts/Mohave.ttf';
import MonomaniacOne from '../fonts/MonomaniacOne.ttf';
import Raleway from '../fonts/Raleway.ttf';

// A custom theme for this app
const theme = createTheme({
  palette: {
    common: {
      white: '#FFFFFF',
      black: '#000000'
    },
    primary: {
      main: '#921FED',
      dark: '#A239F4',
      light: '#B568F2',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#FFCF32',
      light: '#F7E4A8',
      dark: '#921FED',
      contrastText: '#FFFFFF'
    },
    text: {
      primary: '#5F556D'
    },
    grey: {
      100: '#FCFAFA',
      300: '#FBFAFC',
      500: '#E6E6E6',
      600: '#ADA7B8'
    },
    action: {
      hover: '#A239F4',
      selected: '#B568F2'
    },
    warning: {
      main: '#FFCF32'
    },
    background: {
      paper: '#FBFAFC'
    }
  },
  typography: {
    fontSize: 20,
    fontFamily: [
      'Dosis, FugazOne, Karantina, MedulaOne, Goldman, Mohave, MonomaniacOne, Raleway'
    ].join(','),
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 600
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `@font-face {
        font-family: 'Dosis';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        src: local('Dosis'), local('Dosis'), url(${Dosis}) format('truetype');
        unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
      }
        @font-face {
          font-family: 'FugazOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('FugazOne'), local('FugazOne'), url(${FugazOne}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Karantina';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Karantina'), local('Karantina'), url(${Karantina}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'MedulaOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('MedulaOne'), local('MedulaOne'), url(${MedulaOne}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Goldman';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Goldman'), local('Goldman'), url(${Goldman}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'Mohave';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Mohave'), local('Mohave'), url(${Mohave}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
        @font-face {
          font-family: 'MonomaniacOne';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('MonomaniacOne'), local('MonomaniacOne'), url(${MonomaniacOne}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
         @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway'), url(${Raleway}) format('truetype');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `
    },

    MuiTab: {
      defaultProps: {
        disableRipple: true
      }
    },

    MuiButton: MuiButtonConfig,
    MuiIconButton: MuiIconButtonConfig,
    MuiButtonBase: MuiButtonBaseConfig,
    MuiLink: MuiLinkConfig,
    MuiPagination: MuiPaginationConfig
  }
});

export default theme;
