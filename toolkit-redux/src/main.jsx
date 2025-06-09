import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import { PokemonApp } from './PokemonApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>

    <PokemonApp />
    </Provider>
  </StrictMode>,
)
