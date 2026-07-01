import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./pages/Layout";
import Login from './pages/Login';
import Products from './pages/Products';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services"; 
import Category from "./pages/Category";
import Men from "./pages/Men";
import Women from "./pages/Women"; 
import Kids from "./pages/Kids";
import NewArrivals from "./pages/NewArrivals";


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Products" element={<Products/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="Services" element={<Services/>}/>
        <Route path="Category" element={<Category/>}/>
        <Route path="Men" element={<Men/>}/>
        <Route path="Women" element={<Women/>}/>
        <Route path="Kids" element={<Kids/>}/>
        <Route path="NewArrivals" element={<NewArrivals/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
