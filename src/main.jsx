import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './greetings.jsx'
import { Test, List, ListItem} from './Test.jsx'
import DisplayProfile from './Profile.jsx'
import {TodoList, Button, ChangeColor} from './Todo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ChangeColor />
  </StrictMode>,
)