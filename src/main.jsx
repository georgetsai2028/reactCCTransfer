import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import Test from './Test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Test />
  </StrictMode>,
)
