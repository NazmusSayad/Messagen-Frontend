import React from 'react'
import { Provider } from 'react-redux'
import { createRoot } from 'react-dom/client'
import store from '$store'

import 'css-reset-plus'
import './styles/index.scss'
import App from './App'
import ErrorBoundary from 'error-boundary-react'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('Root')
const root = createRoot(rootElement as any)

root.render(
  <Provider store={store}>
    <ErrorBoundary element={<h1>Error</h1>}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
    </ErrorBoundary>
  </Provider>
)
