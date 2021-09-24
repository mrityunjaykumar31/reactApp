import { useState } from 'react';
import Cart from './component/Cart/Cart';
import Header from './component/Layout/Header';
import Meals from './component/Meal/Meals';
import CartProvider from './store/CartProvider'

function App() {

  const [isCartVisible, setIsCartVisible] = useState(false);

  const showCart = () => {
    setIsCartVisible(true);
  }
  const hideCart = () => {
    setIsCartVisible(false);
  }
  return (
    <CartProvider>
      {(isCartVisible) && <Cart hideCart={hideCart} />}
      <Header showCart={showCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
