import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import ShopPage from "./pages/shopPage/ShopPage";
// import ProductDetails from "./pages/ProductDetails/Product";
import WishListPage from "./pages/wishListPage/WishListPage";
import CartPage from "./pages/cart/CartPage";
import { Check } from "lucide-react";
import CheckOutPage from "./pages/checkOutPage/CheckOutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<ShopPage />} />
      {/* <Route path="/shop/:id" element={<ProductDetails />} /> */}
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckOutPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
}

export default App;
