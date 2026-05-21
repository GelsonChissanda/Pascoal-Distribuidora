import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { createWhatsAppLink } from '../services/whatsapp.js'

function Checkout() {
  const { items, total } = useCart()
  const message = useMemo(() => createWhatsAppLink(items, total), [items, total])

  return (
    <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_0.9fr]">
        <div className="space-y-6">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Checkout</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900">Finalize sua compra pelo WhatsApp</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Confira seu pedido e envie diretamente para o nosso atendimento. É rápido, seguro e sem complicação.
            </p>
          </div>

          <div className="space-y-4 rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Resumo do pedido</h3>
            {items.length === 0 ? (
              <div className="rounded-3xl bg-white p-5 text-slate-600">
                <p>Seu carrinho está vazio. Volte para a página de produtos e adicione itens.</p>
                <Link to="/products" className="mt-3 inline-flex text-brand-700 underline">
                  Ver produtos
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex flex-col gap-2 rounded-3xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{item.name}</p>
                      <p className="text-sm text-slate-500">Quantidade: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-slate-900">R$ {(item.quantity * item.price).toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <aside className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
          <div className="space-y-6">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">Total</p>
              <p className="mt-3 text-4xl font-semibold text-slate-900">R$ {total.toFixed(2)}</p>
            </div>
            <a
              href={message}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-700 px-6 py-4 text-center text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Enviar pedido pelo WhatsApp
            </a>
            <p className="text-sm leading-6 text-slate-600">
              Ao clicar, você será redirecionado para o WhatsApp com a sua lista de itens pronta.
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Checkout
