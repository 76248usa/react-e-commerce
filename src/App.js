import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import About from './pages/AboutPage'
import Home from './pages/HomePage'
import Products from './pages/ProductsPage'
import SingleProduct from './pages/SingleProductPage'
import Cart from './pages/CartPage'
import ErrorPage from './pages/ErrorPage'
import Checkout from './pages/CheckoutPage'

//import PrivateRoute from './pages/PrivateRoute'

function App() {
  return (
    <Router>
     <Navbar />
     <Sidebar />
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='about' element={<About/>} />
        <Route path='cart' element={<Cart />} />
        <Route path='products' element={<Products />} />
        <Route path='products/:id' element={<SingleProduct/>} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage/>} />
     </Routes>
     <Footer />
    </Router>
  )
}


export default App
