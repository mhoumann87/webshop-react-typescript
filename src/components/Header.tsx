import Nav from './Nav';

type PropsType = {
  viewCart: boolean;
  setViewCart: React.Dispatch<React.SetStateAction<boolean>>;
};

const Header = ({ viewCart, setViewCart }: PropsType) => {
  const content = (
    <header className='header flex'>
      <div className='logo'>
        <h1>Acme Co.</h1>
      </div>
      <div className='price-box flex'>
        <p>Total Items: </p>
        <p>Total Price: </p>
      </div>
      <Nav viewCart={viewCart} setViewCart={setViewCart} />
    </header>
  );

  return content;
};
export default Header;
