import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'

// jsx
// javascript and XML
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/*👆Functiona Call */}
  </StrictMode>,
)
