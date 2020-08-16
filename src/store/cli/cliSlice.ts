
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CliLogGroup, AddLogGroupToHistoryPayload } from './cliDomain'

export interface CliState {
  isLoading: boolean;
  commandHistory: Array<string>;
  cliLogHistory: Array<CliLogGroup>;
  activeLog: CliLogGroup;
}

export const initialCliState: CliState = {
  isLoading: false,
  commandHistory: [],
  cliLogHistory: [],
  activeLog: { lines: [] }
}

export const cliSlice = createSlice({
  name: "cli",
  initialState: initialCliState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    },
    addLogGroupToHistory: (
      state, 
      { payload: { logGroup } }: PayloadAction<AddLogGroupToHistoryPayload>
    ) => {
      state.cliLogHistory.push(logGroup)
    },
    convertActiveLogToHistory: (state) => {
      state.cliLogHistory.push(state.activeLog)
      state.activeLog = initialCliState.activeLog
    },
    clearHistory: (state) => {
      state.cliLogHistory = []
    },
  }
})
