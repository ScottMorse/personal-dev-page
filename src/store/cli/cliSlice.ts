
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CliLogGroup, SubmitCommandPayload, AddLogGroupToHistoryPayload } from './cliDomain'

const MAX_COMM_HIST = 50

export interface CliState {
  isLoading: boolean;
  cliCommandHistory: Array<string>;
  cliLogHistory: Array<CliLogGroup>;
  activeLog: CliLogGroup;
}

export const initialCliState: CliState = {
  isLoading: false,
  cliCommandHistory: [],
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
    addCommandToHistory: (state, { payload: { command } }: PayloadAction<SubmitCommandPayload>) => {
      if(!command) return
      state.cliCommandHistory.unshift(command)
      const len = state.cliCommandHistory.length
      if(len >= MAX_COMM_HIST){
        state.cliCommandHistory = state.cliCommandHistory.slice(0, MAX_COMM_HIST)
      }
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
