import React from 'react'

import { ThemeProvider } from './styled'
import { useSelector } from './store'

export const StoreStyleLayer = ({ children }: { children: React.ReactNode }) => {
  
  const { theme, fontSizePx } = useSelector(({ uvs }) => uvs)
  
  return (
    <ThemeProvider theme={theme}>
      <div style={{ fontSize: fontSizePx + "px" }}>
        {children}
      </div>
    </ThemeProvider>
  )
}