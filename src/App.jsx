import { useMemo, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import CartModal from './components/CartModal.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Products from './pages/Products.jsx'
import Checkout from './pages/Checkout.jsx'
import { CartProvider, useCart } from './context/CartContext.jsx'

function AppShell() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const { cartQuantity } = useCart()

  const pageTitle = useMemo(() => {
    if (location.pathname === '/checkout') return 'Checkout'
    if (location.pathname === '/products') return 'Produtos'
    return 'Home'
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar
        onCartOpen={() => setIsCartOpen(true)}
        cartCount={cartQuantity}
        onNavigate={navigate}
      />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-5 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Pascoal Distribuidora</p>
            <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{pageTitle}</h1>
          </div>
          <button
            type="button"
            className="hidden rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 sm:inline-flex"
            onClick={() => navigate('/products')}
          >
            Ver produtos
          </button>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}

function App() {
  return (
    <CartProvider>
      <AppShell />
    </CartProvider>
  )
}

export default App
