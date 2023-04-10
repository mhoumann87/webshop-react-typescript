import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  const pageContent = viewCart ? <Cart /> : <ProductList />;

  const content = (
    <main className='grid'>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      <div>{pageContent}</div>
      <Footer viewCart={viewCart} />
    </main>
  );

  return content;
}

export default App;
