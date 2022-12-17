import React from 'react'
import { Provider } from 'jotai'
import AppRender from './AppRender'

function App() {
  return (
    <Provider>
      <AppRender />
    </Provider>
  )
}

export default App
