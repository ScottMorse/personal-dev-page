import React from 'react'

import { ThemeProvider, GlobalStyle } from './styled'
import { useSelector } from './store'

export const StoreStyleLayer = ({ children }: { children: React.ReactNode }) => {

  const { theme, fontSizePx } = useSelector(({ uvs }) => uvs)
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <div style={{ fontSize: fontSizePx + "px" }}>
        {children}
      </div>
    </ThemeProvider>
  )
}