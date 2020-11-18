import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';

import rootReducer from './rootReducer';

const middleWare = [thunk];

const enhanceMiddleware =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middleWare))
    : applyMiddleware(...middleWare);

export const store = createStore(rootReducer, enhanceMiddleware);

export const persistor = persistStore(store);

export default { store, persistor };
