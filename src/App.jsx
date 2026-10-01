import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";
import NavbarOne from "./Components/Navigation/NavbarOne.jsx";
import NavbarTwo from "./Components/Navigation/NavbarTwo.jsx";
// import Wishlist from "./pages/Wishlist/WishlistPage.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import WishlistPage from "./pages/Wishlist/WishlistPage.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogDetails from "./pages/Blog/BlogDetails.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/Contact/Contact.jsx";

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
        <Route path="/about-us" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        {/* <Route path="/my-wishlist" element={<Wishlist />} /> */}
        <Route path="/my-wishlist" element={<WishlistPage />} />

        <Route path="/shopping-cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </>
  );
}



export default App
