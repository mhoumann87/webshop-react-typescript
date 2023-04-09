import useCart from '../hooks/useCart';

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = viewCart ? (
    <p className='center'>Shopping Cart &copy;{year}</p>
  ) : (
    <>
      <div>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
      </div>
      <h3>Shopping Cart &copy;{year}</h3>
    </>
  );

  const content = <footer className='footer flex'>{pageContent}</footer>;

  return content;
};
export default Footer;
