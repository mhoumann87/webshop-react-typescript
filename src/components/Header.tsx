import Nav from './Nav';
import useCart from '../hooks/useCart';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const style = {
    '--flex-dir': 'column',
    '--align': 'flex-start',
  };

  const content = (
    <header className='header flex'>
      <div className='logo'>
        <h1>Acme Co.</h1>
      </div>
      <div className='price-box flex' style={style}>
        <p>Total Items: {totalItems}</p>
        <p>Total Price: {totalPrice}</p>
        <Nav viewCart={viewCart} setViewCart={setViewCart} />
      </div>
    </header>
  );

  return content;
};
export default Header;
