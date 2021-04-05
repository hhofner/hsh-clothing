import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist';

import logger from 'redux-logger';
import thunk from "redux-thunk";

import rootReducer from './root-reducer';

const middlewares = [logger, thunk];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

// Here we are just creating a persisted version of our store
const persistor = persistStore(store);

export {store, persistor};