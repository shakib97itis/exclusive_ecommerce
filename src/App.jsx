import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import ProductDetails from "./pages/ProductDetails/Product";
import WishListPage from "./pages/wishListPage/WishListPage";
import CartPage from "./pages/cart/CartPage";
import CheckOutPage from "./pages/checkOutPage/CheckOutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
