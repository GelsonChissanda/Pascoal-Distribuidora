import ProductCard from './ProductCard.jsx'
import { products } from '../data/products.js'
import { useCart } from '../context/CartContext.jsx'

function ProductList() {
  const { addItem } = useCart()

  return (
    <section className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAdd={addItem} />
      ))}
    </section>
  )
}

export default ProductList
