import {createStore} from 'redux';

//import logger from 'redux-logger';
//import thunk from 'redux-thunk';
//import promise from 'redux-promise-middleware';

import rootReducer from './reducers';

//const middleware = applyMiddleware(logger);

const store = createStore(rootReducer);

export default store;