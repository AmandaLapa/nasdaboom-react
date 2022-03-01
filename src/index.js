import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './Styles/reset.scss'
import './Styles/fonts.scss'
import './Styles/grid.scss'

import './Styles/mixins.scss'
import './Styles/variables.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
