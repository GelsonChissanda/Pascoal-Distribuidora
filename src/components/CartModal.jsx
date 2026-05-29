import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { createWhatsAppLink } from '../services/whatsapp.js'

function CartModal({ isOpen, onClose }) {
  const { items, total, updateQuantity, removeItem } = useCart()
  const navigate = useNavigate()

  const hasItems = items.length > 0

  const message = useMemo(() => createWhatsAppLink(items, total), [items, total])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-slate-950/40 px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-6 shadow-soft sm:p-8">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Seu carrinho</h2>
            <p className="mt-1 text-sm text-slate-500">Acompanhe os itens e finalize no WhatsApp.</p>
          </div>
          <button type="button" onClick={onClose} className="text-slate-500 transition hover:text-slate-900">
            Fechar
          </button>
        </div>

        <div className="mt-6 space-y-4">
          {hasItems ? (
            items.map((product) => (
              <div key={product.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-3xl bg-white">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">R$ {product.price.toFixed(2)}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-3">
                      <input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(event) => updateQuantity(product.id, Number(event.target.value))}
                        className="w-20 rounded-2xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-500"
                      />
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-sm font-semibold text-brand-700 transition hover:text-brand-900"
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <p className="text-sm text-slate-600">Seu carrinho está vazio. Adicione produtos para continuar.</p>
            </div>
          )}
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-slate-500">Total estimado</p>
            <p className="mt-1 text-3xl font-semibold text-blue-900">KZs {total.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => {
                onClose()
                navigate('/checkout')
              }}
              className="rounded-full bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-200"
            >
              Ir para checkout
            </button>
            <a
              href={message}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-800"
            >
              Finalizar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartModal
