import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import "@fontsource/yaldevi"

const mainTheme = responsiveFontSizes(createTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#465362',
        light: '#7d8896',
        dark: '#414d5a',
        contrastText: '#f5f5f5',
      },
      secondary: {
        main: '#9fc490',
        light: '#b7d8d6',
        dark: '#7a9897',
      },
      background: {
        default: '#011936',
        paper: '#78909c',
      },
      divider: '#303030',
      info: {
        main: '#2196f3',
      },
      text: {
        primary: '#eeeeee',
        secondary: '#e0e0e0',
        disabled: '#9e9e9e',
        hint: '#cfd8dc',
      },
      tertiary: {
          main: '#82a3a1',
          light: '#a4bebc',
          dark: '#698f8d',
      },
      quaternary: {
        main: '#c0dfa1',
        light: '#a7d27c',
        dark: '#d9ecc6',
      },
    },
    typography: {
      fontFamily: 'yaldevi',
    },
    props: {
      MuiList: {
        dense: true,
      },
      MuiMenuItem: {
        dense: true,
      },
      MuiTable: {
        size: 'small',
      },
      MuiButton: {
        size: 'small',
      },
      MuiButtonGroup: {
        size: 'small',
      },
      MuiCheckbox: {
        size: 'small',
      },
      MuiFab: {
        size: 'small',
      },
      MuiFormControl: {
        margin: 'dense',
        size: 'small',
      },
      MuiFormHelperText: {
        margin: 'dense',
      },
      MuiIconButton: {
        size: 'small',
      },
      MuiInputBase: {
        margin: 'dense',
      },
      MuiInputLabel: {
        margin: 'dense',
      },
      MuiRadio: {
        size: 'small',
      },
      MuiSwitch: {
        size: 'small',
      },
      MuiTextField: {
        margin: 'dense',
        size: 'small',
      },
    },
}));

export default mainTheme;