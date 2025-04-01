import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import App from './App.tsx'
import { pokemonApi } from './app/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={pokemonApi}>
      <App />
    </ApiProvider>

  </StrictMode>,
)
