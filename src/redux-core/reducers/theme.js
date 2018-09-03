import {theme} from '../types';

const {TOGGLE_THEME} = theme;

const initState = {
  backgroundColor: '#fafafa',
  type: 'light',
};

export default function notification(state = initState, {type, payload}) {

  switch (type) {
    case TOGGLE_THEME:

      return state.type === 'light'
        ? ({
          ...state,
          backgroundColor: '#303030',
          type: 'dark'
        })
        : initState
  }

  return state;
}