
import { createSlice } from '@reduxjs/toolkit'
 
export interface CliState {
  isLoading: boolean;
}

export const initialCliState: CliState = {
  isLoading: false,
}

export const cliSlice = createSlice({
  name: "cli",
  initialState: initialCliState,
  reducers: {
    toggleLoading: (state) => {
      state.isLoading = !state.isLoading
    }
  }
})
