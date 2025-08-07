const Cart = ({ cart, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="border p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Carrito</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Tu carrito está vacío.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, i) => (
            <li key={i} className="flex justify-between items-center">
              <span>{item.name}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline text-sm"
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 font-semibold">Total: ${total}</p>
    </div>
  )
}

export default Cart
