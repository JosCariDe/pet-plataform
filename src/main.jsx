import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserProvider } from './context/UserContext/UserContext.jsx'
import { FavoritesProvider } from './context/FavoritesContext/FavoritesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <FavoritesProvider>
        <App/>
      </FavoritesProvider>
    </UserProvider>
  </StrictMode>,
)
