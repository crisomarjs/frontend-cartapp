import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CartApp from './CartApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartApp />
  </StrictMode>,
)
