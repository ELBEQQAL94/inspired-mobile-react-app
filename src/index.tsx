import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

import App from './App';

ReactDOM.render(
  <StoreProvider store={store}>
    <App />
  </StoreProvider>,
  document.getElementById('root'),
);
