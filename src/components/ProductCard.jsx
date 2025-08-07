const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600 mb-2">${product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  )
}

export default ProductCard
