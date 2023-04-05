import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("1ca0683316cb07090834bf5f119dcd46b")

ReactDOM.render(
    <App />
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
