/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';
import { ShoppingCart } from 'lucide-react';

const Header = ({ onShowCart }) => {
  const cart = useSelector((state) => state.cart);

  return (
    <nav className="sticky top-0 flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">MyShoppingApp</span>
      </div>
      <div className="">
        <button onClick={onShowCart} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <ShoppingCart />
          <span className="ml-1">Cart ({cart.length})</span>
        </button>
      </div>
    </nav>
  );
};

export default Header;
