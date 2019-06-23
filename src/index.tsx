import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import './reset.scss';
import { BrowserRouter } from 'react-router-dom';
import Amplify from 'aws-amplify';
// import config from './aws-exports';

// Amplify.configure(config);

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement,
);
