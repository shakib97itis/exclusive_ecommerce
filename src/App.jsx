import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
