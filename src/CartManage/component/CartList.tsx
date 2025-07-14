import { FaMoneyBillWave, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../Context/CartProvider';

export default function CartList() {
  const { cartItems } = useCart();
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-[600px] mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 border-b pb-2 flex items-center gap-2">
        <FaShoppingCart className="text-blue-600" />
        Cart Items
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center">No items in cart.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <li key={index} className="py-2 flex justify-between">
                <span className="text-gray-700">{item.name}</span>
                <span className="text-gray-900 font-medium">${item.price}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4 border-t flex justify-between items-center">
            <span className="text-lg font-semibold text-gray-800 flex items-center gap-1">
              <FaMoneyBillWave className="text-green-600" />
              Total:
            </span>
            <span className="text-xl font-bold text-green-600">${total}</span>
          </div>
        </>
      )}
    </div>
  );
}
