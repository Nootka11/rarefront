import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/fonts/poppins/poppins.css'
import './assets/fonts/GoudyBookLetter/goudyBookLetter.css'
import './index.css'

import App from './App.jsx'
import AnimalProvider from './context/AnimalProvider.jsx'
import ProductProvider from './context/ProductProvider.jsx'
import VegetableProvider from './context/VegetableProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AnimalProvider>
      <VegetableProvider>
      <ProductProvider>
        <App />
      </ProductProvider>
      </VegetableProvider>
    </AnimalProvider>
  </StrictMode>,
)
