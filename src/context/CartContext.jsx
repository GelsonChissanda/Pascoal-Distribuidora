import { createContext, useContext, useMemo, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = { items: [] }

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const item = action.payload
      const existing = state.items.find((product) => product.id === item.id)
      if (existing) {
        return {
          items: state.items.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + 1 }
              : product
          ),
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }] }
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((product) => product.id !== action.payload) }
    case 'UPDATE_QUANTITY':
      return {
        items: state.items
          .map((product) =>
            product.id === action.payload.id
              ? { ...product, quantity: Math.max(1, action.payload.quantity) }
              : product
          )
          .filter((product) => product.quantity > 0),
      }
    case 'CLEAR_CART':
      return { items: [] }
    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item })
  const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id })
  const updateQuantity = (id, quantity) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const total = useMemo(
    () => state.items.reduce((sum, product) => sum + product.price * product.quantity, 0),
    [state.items]
  )
  const cartQuantity = useMemo(
    () => state.items.reduce((sum, product) => sum + product.quantity, 0),
    [state.items]
  )

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart, total, cartQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
