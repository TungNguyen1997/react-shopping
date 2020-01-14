import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import ProductListReducer from './Reducer/ProductList.reducer'

import thunk from 'redux-thunk'

 const reducers=combineReducers({ProductListReducer})
 export const store= createStore(reducers,compose
    (
        applyMiddleware(thunk),

    )
    )
    