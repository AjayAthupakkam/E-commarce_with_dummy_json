import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import ProductList from "./pages/productList";
import ProductDetails from "./pages/productDetails";
import CartListPage from "./pages/cartList";
import Ordered from "./pages/ordered";
import Welcome from "./pages/welcome";

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart-List" element={<CartListPage />} />
        <Route path="/ordered" element={<Ordered />} />
        <Route path="" element={<Welcome />} />
      </Routes>
      
      
    </Fragment>
  );
}

export default App;
