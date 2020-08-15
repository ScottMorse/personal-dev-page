import React from 'react'

import { StoreProvider } from './store'

import { StoreStyleLayer } from './StoreStyleLayer'

const App = () => (
  <StoreProvider>
    <StoreStyleLayer>
      App
    </StoreStyleLayer>
  </StoreProvider>
)

export default App
