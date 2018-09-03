import {combineReducers} from 'redux';

import notification from './notification';
import theme from './theme';

const rootReducer = combineReducers({
  notification,
  theme,
});

export default rootReducer;