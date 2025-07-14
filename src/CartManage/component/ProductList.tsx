import { useCart } from '../Context/CartProvider';
import type { Product } from '../types';

const products: Product[] = [
  { id: 1, name: 'iPhone', price: 1000 },
  { id: 2, name: 'MacBook', price: 2000 },
  { id: 3, name: 'AirPods', price: 200 },
  { id: 4, name: 'Apple Watch', price: 400 },
  { id: 5, name: 'iPad', price: 800 },
  { id: 6, name: 'Apple TV', price: 150 },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
  {products.map((product) => (
    <div
      key={product.id}
      className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-lg transition duration-300"
    >
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-semibold">${product.price}</span></p>
      <button
        onClick={() => addToCart(product)}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition"
      >
        Add to Cart
      </button>
    </div>
  ))}
</div>
  );
}
