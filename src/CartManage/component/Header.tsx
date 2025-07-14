import { NavLink } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaShoppingBag } from 'react-icons/fa';

export default function Header() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-2 text-lg font-bold text-blue-400">
        <FaShoppingBag className="text-blue-500 text-xl" />
        MyShop
      </div>
      <div className="flex gap-6 text-sm md:text-base">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-1 transition ${
              isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'
            }`
          }
        >
          <FaHome />
          Home
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            `flex items-center gap-1 transition ${
              isActive ? 'text-blue-400 font-semibold' : 'hover:text-blue-400'
            }`
          }
        >
          <FaShoppingCart />
          Cart
        </NavLink>
      </div>
    </nav>
  );
}
