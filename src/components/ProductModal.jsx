const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white max-w-md w-full rounded-lg shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded mb-4"
        />
        <h2 className="text-2xl font-bold text-blue-700">{product.name}</h2>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="text-xl font-semibold mb-4">${product.price}</p>
        <button
          onClick={() => {
            addToCart(product)
            onClose()
          }}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductModal
