import React from 'react';
import Login from './components/navbar/Login';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Router as Router} from 'react-router-dom';
import Routes from './Routes'
import history from './Services/history';


import App from './App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(

<App />

, document.getElementById('root'));
registerServiceWorker();
