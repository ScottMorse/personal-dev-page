import { configureStore, Middleware } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import { createLogger } from 'redux-logger'

import { rootReducer } from './reducer'
import { rootSaga } from './saga'

const sagaMiddleware = createSagaMiddleware()

const middleware: Array<Middleware> = [sagaMiddleware]

let devTools = false
if(process.env.NODE_ENV !== "production"){
  devTools = true
  const logger = createLogger({
    collapsed: true,
    level: "info",
    colors: {
      title: () => "",
      prevState: () => "",
      action: () => "",
      nextState: () => "",
      error: () => "",
    },
  }) as Middleware
  middleware.push(logger)
}

export const store = configureStore({
  reducer: rootReducer,
  devTools,
  middleware
})

sagaMiddleware.run(rootSaga)