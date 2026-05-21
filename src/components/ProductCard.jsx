function ProductCard({ product, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative h-52 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="space-y-3 p-5">
        <div>
          <p className="text-sm text-brand-700">{product.category}</p>
          <h3 className="mt-2 text-lg font-semibold text-slate-900">{product.name}</h3>
        </div>
        <div className="flex items-center justify-between gap-3">
          <span className="text-xl font-semibold text-slate-900">R$ {product.price.toFixed(2)}</span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Adicionar
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
