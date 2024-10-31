import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // tailwind styles
import './App.css' // custom styles
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)