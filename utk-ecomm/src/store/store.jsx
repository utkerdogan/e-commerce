
import { legacy_createStore as createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';

import clientReducer from './reducers/clientReducer';
import productReducer from './reducers/productReducer';
import shoppingCartReducer from './reducers/shoppingCartReducer';

const rootReducer = combineReducers({
    client: clientReducer,
    product: productReducer,
    shoppingCart: shoppingCartReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk, logger))
    
);

export default store;
