import ReactDOM from 'react-dom';
import React from 'react';
import routes from './routes.js';

ReactDOM.hydrate(routes,
  document.getElementById('react')
)
