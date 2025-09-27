import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PortfolioWithForm } from "./screens/PortfolioWithForm/PortfolioWithForm";
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <PortfolioWithForm />
  </StrictMode>,
)
