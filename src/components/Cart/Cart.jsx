/* eslint-disable react/prop-types */
import Modal from '../Ui/Modal/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';

export default function Cart({ onClose }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Modal onClose={onClose}>
      <div className='h-96 overflow-y-auto'>
        <h2 className='text-lg font-bold py-3'>Cart</h2>
        <ul>
          {cart.length <= 0 ? <h1 className='text-lg text-slate-600 font-bold text-center'>Cart is empty...</h1> : cart.map((item) => (
            <li className='bg-slate-200 p-2 h-32 flex justify-between items-center m-2 rounded-md' key={item.id}>
              <div className='flex items-center'>
                <img className='w-20' src={item.image} />
                <div className='px-2'>
                  <p className='font-bold text-sm text-[#171A1FFF]'>{item.title} -</p>
                  <p className='text-sm font-bold text-[#1E8AD2FF] mt-2'>${item.price}</p>
                </div>
              </div>
              <button className='px-2 bg-red-500 text-white rounded-md h-10' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className='float-right text-lg font-bold py-3'>Total Items: {cart.length}</h2>
      </div>
    </Modal>
  )
}