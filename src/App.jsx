import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NavbarOne from "./Components/Navigation/NavbarOne.jsx";
import NavbarTwo from "./Components/Navigation/NavbarTwo.jsx";
import Wishlist from "./pages/Wishlist/WishlistPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import WishlistPage from "./pages/Wishlist/WishlistPage.jsx";

function App() {


  return (
    <>
      <nav>
        <NavbarOne />
        <NavbarTwo />
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />

        <Route path="/shop/:productId" element={<ProductDetails />} />
        {/* <Route path="/product/:id" element={<ProductDetails />} /> */}
        <Route path="/about-us" element="" />
        <Route path="/contact-us" element="" />
        <Route path="/blog" element="" />
        {/* <Route path="/my-wishlist" element={<Wishlist />} /> */}
        <Route path="/my-wishlist" element={<WishlistPage />} />

        <Route path="/shopping-cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App
