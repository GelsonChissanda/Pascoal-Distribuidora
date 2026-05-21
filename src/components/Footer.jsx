function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-slate-600 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900">Pascoal Distribuidora</p>
          <p className="mt-2 max-w-xl text-sm leading-6">
            Venda de alimentos congelados com entrega rápida e atendimento direto via WhatsApp.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:items-center lg:gap-8">
          <a href="/" className="text-sm transition hover:text-brand-700">Home</a>
          <a href="/products" className="text-sm transition hover:text-brand-700">Produtos</a>
          <a href="/checkout" className="text-sm transition hover:text-brand-700">Checkout</a>
          <a href="https://wa.me/244999999999" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brand-700 transition hover:text-brand-900">
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
