import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'mobx-react'
import stores from './store'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider {...stores}>
        <App />
    </Provider>, 
document.getElementById('root'));

serviceWorker.unregister();
