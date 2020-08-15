import React, { ReactNode } from 'react'

import { ThemeProvider as PlainThemeProvider } from 'styled-components'

import { ThemeType } from './themeType'

export const ThemeProvider = ({ theme, children }: { theme: ThemeType; children: ReactNode }) => (
  <PlainThemeProvider theme={theme}>
    {children}
  </PlainThemeProvider>
)