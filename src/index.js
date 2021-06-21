import { CssBaseline } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import Navigation from './navigation';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

