import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import Main from './components/Main';
import registerServiceWorker from './registerServiceWorker';
import Articles from './components/Articles';
//
//
// const express: = require('express');
// const {key} = require('./config');
//
// const apiKey = process.env.APIKEY || key
//
//
// const app = express();

// app.use(express.static(`$`))


ReactDOM.render(<Articles />, document.getElementById('root'));
registerServiceWorker();
