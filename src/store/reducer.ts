import { combineReducers } from '@reduxjs/toolkit'

import { cliSlice } from './cli'

export const rootReducer = combineReducers({
  cli: cliSlice.reducer,
})

export type RootStoreState = ReturnType<typeof rootReducer>