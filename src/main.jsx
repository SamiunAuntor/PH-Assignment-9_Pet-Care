import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './router.jsx'
import { Toaster } from 'react-hot-toast';


createRoot(document.getElementById('root')).render(
  <>
    <Toaster position="top-right" reverseOrder={false} />
    <StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </StrictMode>,
  </>
)
