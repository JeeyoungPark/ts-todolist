import { applyMiddleware, combineReducers, createStore } from "redux"
import { tasks } from './tasks'
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension"

const rootReducer = combineReducers({ tasks })

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger)),
);

export type RootState = ReturnType<typeof rootReducer>;
