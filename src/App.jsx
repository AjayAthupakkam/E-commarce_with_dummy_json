import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import CartListPage from "./pages/cartList";
import Ordered from "./pages/ordered";
import Welcome from "./pages/welcome";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart-List" element={<CartListPage />} />
        <Route path="/ordered" element={<Ordered />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>

      <span><Welcome/></span>
      
    </Fragment>
  );
}

export default App;
