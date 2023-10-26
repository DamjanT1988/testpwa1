import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker.js'; // you may remove this line

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Check to make sure service workers are supported in the current browser,
// and that the current page is accessed over HTTPS.
if ('serviceWorker' in navigator && window.location.protocol === 'http:') {
    // Register the service worker after the page is loaded.
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/serviceWorker.js')
            .then(function (registration) {
                // Registration was successful
                console.log('Service Worker registration successful with scope: ', registration.scope);
            }, function (err) {
                // registration failed :(
                console.log('Service Worker registration failed: ', err);
            });
    });
}

// if you want to unregister the service worker
//serviceWorker.unregister();