import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:flex lg:items-center lg:gap-10 lg:p-10">
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
          Vendas rápidas de congelados
        </span>
        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Compre alimentos congelados frescos e receba rápido pelo WhatsApp.
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          Peixes, carnes, frangos, bebidas e congelados prontos para sua geladeira.
          Navegue com facilidade, adicione ao carrinho e finalize em poucos cliques.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/products"
            className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
          >
            Ver produtos
          </Link>
          <a
            href="https://wa.me/244999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Finalizar no WhatsApp
          </a>
        </div>
      </div>
      <div className="mt-10 sm:mt-12 lg:mt-0 lg:w-1/2">
        <div className="relative overflow-hidden rounded-[28px] bg-slate-100 p-2 shadow-xl sm:p-4">
          <img
            src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80"
            alt="Alimentos congelados"
            className="h-full w-full rounded-[24px] object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
