import ProductList from '../components/ProductList.jsx'

function Products() {
  return (
    <div className="space-y-8">
      <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Catálogo</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900">Explore nossos produtos congelados</h3>
          </div>
          <p className="max-w-xl text-sm leading-6 text-slate-600">
            Adicione ao carrinho e finalize a compra com praticidade pelo WhatsApp.
          </p>
        </div>
        <ProductList />
      </section>
    </div>
  )
}

export default Products
