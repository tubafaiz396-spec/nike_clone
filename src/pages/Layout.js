import { Outlet, Link } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <nav className="container">  
  <div className='logo'>
    <img src="/images/brand_logo.png" alt="logo" />
  </div>
  <div className="pages"> 
  <ul>
        <li>
            <Link to="/" target="_blank">Home</Link>
        </li>
        <li>
            <Link to="/About" target="_blank">About</Link>
        </li>
        <li>
            <Link to="/Contact" target="_blank">Contact</Link>
        </li>
        <li>
            <Link to="/Services" target="_blank">Services</Link>
        </li>
    </ul>
    </div>   

    <Link to="/Login" target="_blank">
      <button>Login</button>
    </Link>
  
  </nav>

      <Outlet />
      <Footer/>
    </>
  )
};

export default Layout;