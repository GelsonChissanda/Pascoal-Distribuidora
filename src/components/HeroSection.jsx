import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import publi1 from '../assents/publ1.jpg'
import publi2 from '../assents/publ2.jpg'
import publi3 from '../assents/publ3.avif'

function HeroSection() {
  const carouselImages = [
    publi1,
    publi2,
    publi3
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (
        prevIndex + 1
      ) % carouselImages.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8 lg:flex lg:items-center lg:gap-10 lg:p-10">
      
      <div className="max-w-2xl">
        <span className="inline-flex rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700">
          Vendas rápidas de congelados
        </span>

        <h2 className="mt-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          Compre alimentos congelados frescos e receba rápido pelo WhatsApp
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
          Congelados prontos para sua geladeira.
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
            href="https://wa.me/244922646414"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
          >
            Finalizar no WhatsApp
          </a>
        </div>
      </div>

      <div className="mt-10 sm:mt-12 lg:mt-0 lg:w-1/2">
        <div className="mt-6 overflow-hidden rounded-[28px] bg-slate-100 p-2 shadow-xl sm:p-4">
          
          <div className="relative flex h-[250px] sm:h-[350px] md:h-[420px] items-center justify-center overflow-hidden rounded-[24px] bg-slate-200 shadow-lg">
            
            <img
              src={carouselImages[currentIndex]}
              alt={`Imagem de carrossel ${currentIndex + 1}`}
              className="h-full w-full object-contain transition duration-700 ease-in-out"
            />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/40 to-transparent px-4 py-3 text-sm text-white">
              
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection