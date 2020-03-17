import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';
import { Provider } from 'react-redux'

// 传递全局store
const EnhancedApp = <Provider store={store}><App /></Provider>

ReactDOM.render(EnhancedApp, document.getElementById('root'));