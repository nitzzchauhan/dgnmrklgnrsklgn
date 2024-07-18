import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import {About} from './components/pages/About.jsx'
import Products from './components/pages/Products.jsx'
import ProductDetails from './components/pages/ProductDetails.jsx'
import Contact from './components/pages/Contact.jsx'
import Address from './components/Address.jsx'
import ContactUS from './components/ContactUS.jsx'
import Home from './components/pages/Home.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<Home />} />
      <Route path='products' element={<Products />} >
        <Route path=':id' element={<ProductDetails />} />
      </Route>
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} >
        <Route path='address' element={<Address />} />
        <Route path='contact-us' element={<ContactUS />} />

      </Route>
      <Route path='*' element={<h1>Page not found</h1>} />


    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
