import { useState } from "react"
import products from "./data/products"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"
import ProductModal from "./components/ProductModal"
import { usePersistentCart } from './hooks/usePersistentCart'

const App = () => {
  const [cart, setCart] = usePersistentCart()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [category, setCategory] = useState("todos")
  

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const categories = ["todos", ...new Set(products.map(p => p.category))]

  const filteredProducts =
    category === "todos"
      ? products
      : products.filter((p) => p.category === category)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">Mini E-commerce</h1>

      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-700 hover:bg-blue-100"
            } transition`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              onPreview={() => setSelectedProduct(product)}
            />
          ))}
        </div>

        <div>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
      />
    </div>
  )
}

export default App
