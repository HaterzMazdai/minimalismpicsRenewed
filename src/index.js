import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import searchReducer from './reducers/searchReducer'

import { Provider } from 'react-redux'
import { createStore } from 'redux'


const store = createStore(searchReducer, '')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
