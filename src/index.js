import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Lobster:400,700', 'Sen:300,400,600', 'sans-serif']
  }
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
