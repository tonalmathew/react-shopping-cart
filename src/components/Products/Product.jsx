import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../store/productsSlice';
import { addToCart, removeFromCart } from '../../store/cartSlice';

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product.id));
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="pt-20 p-3 grid md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-200">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg p-2 shadow-md">
          <div className=" h-96 flex items-center justify-center">
            <img className="w-52" src={product.image} alt={product.title} />
          </div>
          <div className="grid grid-rows-2 mt-6 px-4 gap-1">
            <div>
              <h5 className="truncate sm:w-80 w-52 font-bold text-sm text-[#171A1FFF]">{product.title}</h5>
              <div className="flex justify-between">
                <p className="text-sm font-bold text-[#1E8AD2FF] mt-2">${product.price}</p>
                <p className="text-sm font-bold text-neutral-500 mt-2">Rating: {product.rating.rate}</p>
              </div>
            </div>
            {product.inCart ? (
              <button className="px-3 py-3 text-white bg-red-500 hover:bg-red-700 rounded-md text-sm" onClick={() => handleRemoveFromCart(product)}>
                Remove from Cart
              </button>
            ) : (
              <button className="px-3 py-3 text-white bg-purple-500 hover:bg-purple-700 rounded-md text-sm" onClick={() => handleAddToCart(product)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}