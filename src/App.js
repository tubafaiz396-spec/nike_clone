import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Products from './pages/Products';
import OnePage from "./pages/OnePage";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";
import Men from "./pages/Men";
import Women from "./pages/Women"; 
import Kids from "./pages/Kids";
import NewArrivals from "./pages/NewArrivals";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <CartProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<OnePage/>}/>
        {/* Old page URLs now redirect to their section on the single page */}
        <Route path="About" element={<Navigate to="/#about" replace/>}/>
        <Route path="Contact" element={<Navigate to="/#contact" replace/>}/>
        <Route path="Services" element={<Navigate to="/#services" replace/>}/>
        {/* Kept as a compatibility redirect for old bookmarks; auth is no longer part of the app. */}
        <Route path="Login" element={<Navigate to="/" replace/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Products/:productId" element={<ProductDetails/>}/>
        <Route path="Cart" element={<Cart/>}/>
        <Route path="Checkout" element={<Checkout/>}/>
        <Route path="Category" element={<Category/>}/>
        <Route path="Men" element={<Men/>}/>
        <Route path="Women" element={<Women/>}/>
        <Route path="Kids" element={<Kids/>}/>
        <Route path="NewArrivals" element={<NewArrivals/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
