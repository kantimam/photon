import { createMuiTheme, Theme } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    navBar?: {
      height?: React.CSSProperties['height'],
      expandedHeight?: React.CSSProperties['height']
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    navBar?: {
      height?: React.CSSProperties['height'],
      expandedHeight?: React.CSSProperties['height']
    }
  }
}


// Create a theme instance.
const theme: Theme = createMuiTheme({
  navBar: {
    height: "48px"
  }
});

export default theme;
