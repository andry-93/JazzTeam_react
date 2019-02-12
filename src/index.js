import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import App from './components/App';

import './img/favicons/android-icon-192x192.png';
import './img/favicons/apple-icon-120x120.png';
import './img/favicons/ms-icon-144x144.png';
import './img/favicons/favicon-32x32.png';

const store = createStore(rootReducer);

// Render the main component into the dom
render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'),
);
