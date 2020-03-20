import { createMuiTheme } from '@material-ui/core/styles'

export const background = {
  appBar: '#8F1C20',
  sideMenu: '#333',
  page: '#FAFAFA',
  paper: '#fff',
}

export const primary = {
  light: '#E7EDFA',
  main: '#366CD9',
  dark: '#224FCA',
  contrastText: '#fff',
}

export const secondary = {
  light: '#D6D6D6',
  main: '#888888',
  dark: '#666666',
  darkest: '#333333',
  contrastText: '#fff',
}

export const error = {
  light: '#F9E0E0',
  main: '#CC0000',
  dark: '#AA0000',
  contrastText: '#fff',
}

export const warning = {
  light: '#FCEDE0',
  main: '#E86900',
  dark: '#B85330',
  contrastText: '#fff',
}

export const success = {
  main: '#008300',
}

export const defaultGrey = {
  main: '#D6D6D6',
  contrastText: '#000',
}

export const inputDisabled = {
  backgroundColor: '#eeeeee',
}
const ThemeConfig = createMuiTheme({
  palette: {
    background,
    primary,
    secondary,
    error,
    warning,
    defaultGrey,
    inputDisabled,
    success,
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: 20,
      color: '#fff',
    },
    h2: {
      fontWeight: 700,
      fontSize: 20,
      color: '#333333',
    },
    h3: {
      fontWeight: 700,
      fontSize: 18,
      color: '#333333',
    },
    h4: {
      fontWeight: 700,
      fontSize: 15,
      color: '#333333',
      textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 700,
      fontSize: 14,
      color: '#666666',
    },
    inputText: {
      fontWeight: 400,
      fontSize: 16,
      color: '#333333',
    },
    body1: {
      fontWeight: 400,
      fontSize: 14,
      color: '#333333',
    },
    body2: {
      fontWeight: 400,
      fontSize: 12,
      color: '#333333',
    },
    fontFamily: 'Roboto, "Helvetica Neue", sans-serif',
  },
})

export default ThemeConfig