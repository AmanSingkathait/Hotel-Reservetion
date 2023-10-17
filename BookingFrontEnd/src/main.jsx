import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchContextProvider } from './Context/SearchContext.jsx'
import { AuthContextProvider } from './Context/AuthContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
      <SearchContextProvider>
        <App />
        <ToastContainer/>
      </SearchContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
)
