const ProductCard = ({ product, addToCart, onPreview }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      <img
        src={product.image}
        alt={product.name}
        onClick={onPreview}
        className="w-full h-40 object-cover rounded mb-2 cursor-pointer hover:opacity-90 transition"
      />
      <h3
        onClick={onPreview}
        className="text-lg font-semibold cursor-pointer hover:underline"
      >
        {product.name}
      </h3>
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
