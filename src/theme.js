import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import grey from '@material-ui/core/colors/grey'
import red from '@material-ui/core/colors/red'

const rawTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#DF265E'
    },
    secondary: {
      main: '#48509C'
    },
    warning: {
      main: '#ffc071',
      dark: '#ffb25e',
    }
  },
  typography: {
    htmlFontSize: 16,
    fontSize: 16,
    fontFamily: "'Work Sans', sans-serif",

    fontWeightExtraLight: 200, // Work Sans
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 500, // Roboto Condensed
    fontWeightBold: 700, // Roboto Condensed
    fontFamilySecondary: "'Oswald', sans-serif",
    useNextVariants: true,
    oswald: "'Oswald', sans-serif",
    ibm: "'IBM Plex Sans', sans-serif"
  },
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        '&:hover': {
          color: '#DF265E',
          backgroundColor: 'none'
        },
      },
      contained:{
        boxShadow: 'none',
      },
      root: {
        minWidth: 203,
      },
    },
    MuiGrid: {
      container: {
        textAlign:"center"
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: "1em", // 16px
      },
    },
  },
});

const fontHeader = {
  //color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightRegular,
  fontFamily: rawTheme.typography.oswald
};

let theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200],
    },
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      //color: rawTheme.palette.primary.main,
      letterSpacing: -1.5,
      //fontSize: 87.8,
      fontWeight: rawTheme.typography.fontWeightBold,
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      letterSpacing: -0.5,
      fontSize: "3.375rem",
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontWeight: rawTheme.typography.fontWeightMedium,
      //fontSize: 43.9,
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      //fontSize: 43.9,
      fontSize: "2.0rem",
      letterSpacing: 0.25,
      fontWeight: rawTheme.typography.fontWeightRegular,
    },
    h5: {
      ...rawTheme.typography.h5,
      //fontSize: 21.94,
      letterSpacing: 0,
      fontWeight: rawTheme.typography.fontWeightLight,
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: "1.3rem",
      fontWeight: rawTheme.typography.fontWeightBold,
      //fontSize: 18,
    },
    body1: {
      ...rawTheme.typography.body1,
      fontWeight: rawTheme.typography.fontWeightRegular,
      letterSpacing: 0.5,
      //fontSize: 16.91,
      //lineHeight: 28
    },
    body2: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightMedium,
      //fontSize: 14.79,
      //lineHeight: 20
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontFamily: rawTheme.typography.oswald,
      fontWeight: rawTheme.typography.fontWeightLight,
      letterSpacing: 0.15,
      //fontSize: 14.6,
    },
  },
};
theme = responsiveFontSizes(theme);

export default theme;
