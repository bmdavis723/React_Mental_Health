import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import Main from './components/Main';
import './css/LoginPage.css'

ReactDOM.render(<Main />, document.getElementById('root'));
