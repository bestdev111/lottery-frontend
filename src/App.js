import React from 'react'
import { Web3ReactProvider } from '@web3-react/core'
import { ModalProvider } from '@pancakeswap-libs/uikit'
import { Provider } from 'react-redux'

import { ThemeContextProvider } from './wallet/ThemeContext'
import { getLibrary } from './wallet/web3React'
import UnlockButton from './wallet/UnlockButton'
import BuyTicketButton from './BuyTicketButton'
import store from './wallet/state'

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ThemeContextProvider>
          <ModalProvider><UnlockButton /> <BuyTicketButton /></ModalProvider>
        </ThemeContextProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default App;
