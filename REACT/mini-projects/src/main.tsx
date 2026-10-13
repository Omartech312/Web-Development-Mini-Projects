import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {Page} from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>Color Picker</h1>
    <Page />
  </StrictMode>,
)
