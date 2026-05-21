import { Link } from 'react-router-dom'

function Navbar({ cartCount, onCartOpen, onNavigate }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group inline-flex items-center gap-3 font-semibold text-slate-900 transition hover:text-brand-700">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-500 text-white shadow-lg shadow-brand-200/50">
            P
          </span>
          <span className="text-lg">Pascoal Distribuidora</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <button type="button" onClick={() => onNavigate('/')} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Home
          </button>
          <button type="button" onClick={() => onNavigate('/products')} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Produtos
          </button>
          <button type="button" onClick={() => onNavigate('/checkout')} className="text-sm font-medium text-slate-600 transition hover:text-slate-900">
            Checkout
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/244999999999"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-700 md:inline-flex"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={onCartOpen}
            className="relative inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
          >
            <span className="text-base">🛒</span>
            <span>Carrinho</span>
            <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
