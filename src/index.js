import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {BrowserRouter as Router} from 'react-router-dom'
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons'

import {store} from "./store/store";
import {ErrorBoundary} from "./components/common";
import App from './components/app/App';
import './index.css';

try {
    window.UIkit = require('uikit');
    window.Icons = require('uikit/dist/js/uikit-icons');

    UIkit.use(Icons);
} catch (e) {}

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <Router>
                <App/>
            </Router>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

