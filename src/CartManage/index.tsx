import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './component/ProductList';
import CartList from './component/CartList';
import BuyerForm from './component/BuyerForm';
import { CartProvider } from './Context/CartProvider';
import Header from './component/Header';

export default function CartManage() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route
            path="/cart"
            element={
              <div className="grid md:grid-cols-2 gap-4 p-4">
                <CartList />
                <div className="max-h-[610px]">
                  <BuyerForm />
                </div>
              </div>
            }
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}
