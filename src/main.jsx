import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes'
import AuthProvider from './provider/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider >

    <React.StrictMode>
      <div className='main'>
        <RouterProvider router={router} />
      </div>
    </React.StrictMode>,
  </AuthProvider>
)
