import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/styles/index.scss'
import App from './app/App'
import { StoreProvider } from '@/app/providers/SroreProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
