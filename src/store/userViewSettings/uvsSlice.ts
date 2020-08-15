
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ThemeType, ThemeEnum } from '../../styled'

export interface UvsState {
  theme: ThemeType;
  fontSizePx: number;
}

export const uvsInitialState: UvsState = {
  theme: ThemeEnum.DEFAULT,
  fontSizePx: 12
}

export const uvsSlice = createSlice({
  name: 'usv',
  initialState: uvsInitialState,
  reducers: {
    selectTheme: (state, { payload: { theme } }: PayloadAction<{ theme: ThemeType }>) => {
      state.theme = theme
    },
    updateFontSize: (state, { payload: { size }}: PayloadAction<{ size: number }>) => {
      state.fontSizePx = size
    }
  }
})
