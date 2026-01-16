import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalItems, totalPrice } = useCart();

  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-6">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-yellow-400">blinkit</h1>

        {/* Delivery Info */}
        <div className="hidden md:flex flex-col text-sm">
          <span className="font-semibold">Delivery in 11 minutes</span>
          <span className="text-gray-500 flex items-center gap-1">
            PRH5+M42, Depalpur Rd, Devi…
            <span>▼</span>
          </span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 relative">
          <FaSearch className="absolute top-3 left-4 text-gray-400" />
          <input
            type="text"
            placeholder='Search "curd"'
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-100 focus:outline-none"
          />
        </div>

        {/* Login */}
        <button className="text-lg font-medium">Login</button>

        {/* Cart */}
        <button className="flex items-center gap-2 bg-gray-200 px-4 py-3 rounded-xl font-semibold">
          <FaShoppingCart />
          My Cart
          <span className="text-sm">
            ({totalItems} | ₹{totalPrice})
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
