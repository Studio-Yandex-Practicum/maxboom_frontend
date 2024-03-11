import React from 'react'
import ReactDOM from 'react-dom/client'

import './app/styles/index.scss'
import { StoreProvider } from '@/app/providers/StoreProvider'

import 'leaflet/dist/leaflet.css'
import App from './app/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <React.StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </React.StrictMode>
)
