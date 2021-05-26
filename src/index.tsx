import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './css/reset.css';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import GlobalProvider from './providers/GlobalProvider';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </Router>,
  document.getElementById('root'),
);
