import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="top-bar">
        <p>Sign in to our app to start shopping</p>

        <div className="nav-icons">
          <Link to="/search">
            <i className="fas fa-search"></i>
          </Link>
          <Link to="/wishlist">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/account">
            <i className="fas fa-user"></i>
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <div className="logo">Furniture.ng</div>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Shop</Link>
            </li>
            <li>
              <Link to="/">About us</Link>
            </li>
            <li>
              <Link to="/">Contact us</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
