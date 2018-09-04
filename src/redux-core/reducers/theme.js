import {monokaiSublime, xcode} from 'react-syntax-highlighter/styles/hljs';
import {createMuiTheme} from "@material-ui/core/styles";
import {TOGGLE_THEME} from '../types';

const customizeThemeLight = {
  palette: {
    codeStyle: xcode,
    primary: {
      main: '#2196f3',
    },
    type: 'light',
  },
};

const customizeThemeDark = {
  palette: {
    codeStyle: monokaiSublime,
    primary: {
      main: '#2196f3',
    },
    type: 'dark',
  },
};

const initState = createMuiTheme(customizeThemeLight);

export default function notification(state = initState, {type}) {

  if (type === TOGGLE_THEME) {
    return state.palette.type === 'light'
      ? createMuiTheme(customizeThemeDark)
      : initState
  }

  return state;
}