import * as React from 'react'
import { Provider } from 'react-redux'

import Navigation from './navigation'
import UIProvider from './providers/ui.provider'

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <UIProvider>
        <Navigation />
      </UIProvider>
    </Provider>
  )
}

export default App
