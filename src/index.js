import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import * as serviceWorker from './frontend/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// To reload only the module you modify in the dev phase
if(module.hot){
    module.hot.accept();
}