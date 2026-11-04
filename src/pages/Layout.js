import { useEffect, useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";

const Layout = () => {
  const location = useLocation();
  const { totalQuantity } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.slice(1);
      if (id === "home") window.scrollTo({ top: 0, behavior: "smooth" });
      else document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <header className="site-header">
        <nav className="container site-nav" aria-label="Primary navigation">
          <Link className="logo" to="/#home" aria-label="Nike home">
            <img src="/images/brand_logo.png" alt="Nike" />
          </Link>
          <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="primary-menu">
            <span /><span /><span /><span className="sr-only">Toggle menu</span>
          </button>
          <div id="primary-menu" className={`site-nav__content${menuOpen ? " is-open" : ""}`}>
            <ul className="site-nav__links">
              <li><NavLink className={({ isActive }) => isActive && location.pathname !== "/" ? "is-active" : ""} to="/#home">Home</NavLink></li>
              <li><NavLink to="/Men">Men</NavLink></li>
              <li><NavLink to="/Women">Women</NavLink></li>
              <li><NavLink to="/Kids">Kids</NavLink></li>
              <li><NavLink to="/#collections">Collections</NavLink></li>
            </ul>
            <div className="nav-actions">
              <Link to="/cart" className="cart-link" aria-label={`Cart, ${totalQuantity} items`}>
                <span aria-hidden="true">♧</span> <span className="nav-action-label">Bag</span>{totalQuantity > 0 && <span key={totalQuantity} className="cart-count">{totalQuantity}</span>}
              </Link>
              <span className="nav-status" aria-label="Nike member benefits">✦</span>
            </div>
          </div>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
