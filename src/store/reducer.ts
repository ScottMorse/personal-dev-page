import { combineReducers } from '@reduxjs/toolkit'

import { cliSlice } from './cli'
import { uvsSlice } from './userViewSettings'

export const rootReducer = combineReducers({
  cli: cliSlice.reducer,
  uvs: uvsSlice.reducer
})

export type RootStoreState = ReturnType<typeof rootReducer>