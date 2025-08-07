import { useState } from "react"
import products from "./data/products"
import ProductCard from "./components/ProductCard"
import Cart from "./components/Cart"

const App = () => {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">Mini E-commerce</h1>

      <div className="grid md:grid-cols-4 gap-6">
        <div className="md:col-span-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>

        <div>
          <Cart cart={cart} removeFromCart={removeFromCart} />
        </div>
      </div>
    </div>
  )
}

export default App
