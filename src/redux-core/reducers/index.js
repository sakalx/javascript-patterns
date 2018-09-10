import {combineReducers} from 'redux';

import disqus from './disqus';
import theme from './theme';

const rootReducer = combineReducers({
  disqus,
  theme,
});

export default rootReducer;