import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // Optional, bisa dihapus jika tidak pakai CSS global

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
