import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
      navigator.serviceWorker.register('/serviceWorker.js').then(function (registration) {
          console.log('Service Worker registered with scope: ', registration.scope);
      }, function (err) {
          console.log('Service Worker registration failed: ', err);
      });
  });
}


serviceWorker.register();

