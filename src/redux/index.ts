import { applyMiddleware, combineReducers, createStore } from "redux"
import { tasks } from './tasks'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension"
import { persistReducer } from "redux-persist"
import persistStore from "redux-persist/lib/persistStore"

import session from "redux-persist/lib/storage/session"
// import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage: session,
  whiteList: ['tasks'],
}

const combinedReducer = combineReducers({ tasks })

const rootReducer = persistReducer(persistConfig, combinedReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

export const persistor = persistStore(store as any);

export type RootState = ReturnType<typeof rootReducer>;
