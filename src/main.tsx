import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import { DataContextProvider } from '../src/context/DataProvider'
import { CartContextProvider } from '../src/context/CartContext'

import '@mantine/core/styles.css'
import App from './App/App'
const root = createRoot(document.getElementById('root')!)
const theme = {
  primaryColor: 'green',
  fontFamily: 'Inter, sans-serif',
  colors: {
    green: [
      '#e6f2e9',
      '#bfe0c5',
      '#9bcea3',
      '#75bc7f',
      '#54b46a',
      '#43a65d',
      '#32864a',
      '#236239',
      '#153726',
      '#081a12',
    ] as const,
    gray: [
      '#ffffff',
      '#f3f5fa',
      '#e9ecef',
      '#dee2e6',
      '#ced4da',
      '#adb5bd',
      '#868e96',
      '#495057',
      '#343a40',
      '#212529',
    ] as const,
  },
}
root.render(
  <MantineProvider defaultColorScheme="light" theme={theme}>
    <DataContextProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </DataContextProvider>
  </MantineProvider>
)
