import useCart from '../hooks/useCart';
import CartLineItem from './CartLineItem';

import { useState } from 'react';

const Cart = () => {
  const [confirm, setConfirm] = useState<boolean>(false);

  const { dispatch, REDUCER_ACTIONS, totalItems, totalPrice, cart } = useCart();

  const onSubmitOrder = () => {
    dispatch({ type: REDUCER_ACTIONS.SUBMIT });
    setConfirm(true);
  };

  const pageContent = confirm ? (
    <h2>Thank You For your order</h2>
  ) : (
    <>
      <h2 className='offScreen'>Cart</h2>
      <ul className='cart'>
        {cart.map(item => {
          return (
            <CartLineItem
              key={item.sku}
              item={item}
              dispatch={dispatch}
              REDUCER_ACTIONS={REDUCER_ACTIONS}
            />
          );
        })}
      </ul>
      <div className='cart-total'>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <button
          className='cart-submit'
          onClick={onSubmitOrder}
          disabled={!totalItems}>
          Place Order
        </button>
      </div>
    </>
  );

  const content = <main className='main main-cart'>{pageContent}</main>;

  return content;
};
export default Cart;
