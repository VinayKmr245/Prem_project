import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FormDataProvider } from "./context/FormDataContext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormDataProvider>
    <div className='bg-gray-300 w-full h-full '>
    <App />
    </div>
    </FormDataProvider>
  </React.StrictMode>,
)
