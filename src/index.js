import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebaseInit from './firebase';
import {createStore, applyMiddleware } from 'redux';
import  rootReducer  from './Reducer/index';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {composeWithDevTools} from 'redux-devtools-extension';
firebaseInit();
var middleware =[thunk]

const store = createStore(

    rootReducer,composeWithDevTools(applyMiddleware(...middleware))
    
    )
    

ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
