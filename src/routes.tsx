import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categoties from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categoties />} />
    <Route path="/product/:id" element={<Product />} />
    <Route path="/checkout" element={<Checkout />} />
  </Routes>
)

export default Rotas
