import React from 'react'

import { StoreProvider } from './store'
import { StoreStyleLayer } from './StoreStyleLayer'
import { Layout } from './layout'

const App = () => (
  <StoreProvider>
    <StoreStyleLayer>
      <Layout/>
    </StoreStyleLayer>
  </StoreProvider>
)

export default App
