import { ChangeEvent, ReactElement } from 'react';
import {
  CartItemType,
  ReducerAction,
  ReducerActionType,
} from '../context/CartProvider';

type PropsType = {
  item: CartItemType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
};

const CartLineItem = ({ item, dispatch, REDUCER_ACTIONS }: PropsType) => {
  const img: string = new URL(`../images/${item.sku}.jpg`, import.meta.url)
    .href;

  const lineTotal: number = item.qty * item.price;

  const highestQuantity: number = 20 > item.qty ? 20 : item.qty;

  const optionValues: number[] = [...Array(highestQuantity).keys()].map(
    i => i + 1
  );

  const options: ReactElement[] = optionValues.map(val => {
    return (
      <option key={`opt${val}`} value={val}>
        {val}
      </option>
    );
  });

  const onChangeQty = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...item, qty: Number(e.target.value) },
    });
  };

  const onRemoveFromCart = () =>
    dispatch({
      type: REDUCER_ACTIONS.REMOVE,
      payload: item,
    });

  const content = (
    <li className='cart-item'>
      <img className='cart-img' src={img} alt={item.name} />
      <div aria-label='item name'>{item.name}</div>
      <div aria-label='price pr item'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(item.price)}
      </div>
      <label htmlFor='itemQty' className='offscreen'>
        Item Quantity
      </label>
      <select
        name='itemQty'
        id='itemQqy'
        className='card-select'
        value={item.qty}
        aria-label='item quantity'
        onChange={onChangeQty}>
        {options}
      </select>
      <div className='cart-item-subtotal' aria-label='line item subtotal'>
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(lineTotal)}
      </div>
      <button
        className='cart-button'
        aria-label='remove item from cart'
        title='Remove Item From Cart'
        onClick={onRemoveFromCart}>
        ❌
      </button>
    </li>
  );

  return content;
};
export default CartLineItem;
