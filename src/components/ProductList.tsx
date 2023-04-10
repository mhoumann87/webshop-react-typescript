import useCart from '../hooks/useCart';
import useProducts from '../hooks/useProducts';
import Product from './Product';
import { UseProductsContextType } from '../context/ProductsProvider';
import { ReactElement } from 'react';

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart();
  const { products } = useProducts();

  let pageContent: ReactElement | ReactElement[] = (
    <p className='small'>Loading...</p>
  );

  if (products?.length) {
    pageContent = products.map(product => {
      const inCart = cart.some(item => item.sku === product.sku);

      return (
        <Product
          key={product.sku}
          product={product}
          dispatch={dispatch}
          REDUCER_ACTIONS={REDUCER_ACTIONS}
          inCart={inCart}
        />
      );
    });
  }

  const content = <div className='product-list'>{pageContent}</div>;

  return content;
};
export default ProductList;
