const categories = [
  { name: 'Peixe', icon: '🐟' },
  { name: 'Frango', icon: '🍗' },
  { name: 'Carne', icon: '🥩' },
  { name: 'Bebidas', icon: '🥤' },
  { name: 'Congelados', icon: '❄️' },
]

function Categories() {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Categorias</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">Explore por categoria</h3>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-600">
          Encontre seus itens favoritos de forma rápida: peixes, frangos, carnes, bebidas e congelados.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className="group overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-brand-200 hover:bg-white"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-100 text-2xl transition group-hover:bg-brand-200">
              {category.icon}
            </div>
            <h4 className="mt-4 text-lg font-semibold text-slate-900">{category.name}</h4>
            <p className="mt-2 text-sm text-slate-500">Produtos selecionados nesta categoria.</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
