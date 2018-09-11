import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './redux-core/store';

import CssBaseline from '@material-ui/core/CssBaseline';

import ErrorBoundary from './components/error-boundary';
import App from './App';

(function () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
})();

ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>

    <Provider store={store}>
      <ErrorBoundary>
        <App/>
      </ErrorBoundary>
    </Provider>

  </React.Fragment>
  , document.getElementById('app'));