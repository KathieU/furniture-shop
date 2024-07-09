import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import plainHeartIcon from "../../assets/icons/heart.png";
import cartIcon from "../../assets/icons/cartIcon.png";
import profile from "../../assets/icons/profile.png";

const Navbar = () => {
  return (
    <header>
      <div className="top-bar">
        <p>Sign in to our app to start shopping</p>

        <div className="nav-icons">
          <Link to="/search">
            <img src={searchIcon} alt="Search icon" />
            {/* <i className="fas fa-search"></i> */}
          </Link>
          <Link to="/wishlist">
            <img src={plainHeartIcon} alt="Heart icon" />
            {/* <i className="fas fa-heart"></i> */}
          </Link>
          <Link to="/cart">
            <img src={cartIcon} alt="Cart icon" />
            {/* <i className="fas fa-shopping-cart"></i> */}
          </Link>
          <Link to="/account">
            <img src={profile} alt="Profile icon" />
            {/* <i className="fas fa-user"></i> */}
            {/* <img src="../../assets/icons/profile.png" /> */}
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">Furniture.ng</Link>
        </div>

        <nav>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="shop-style">
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
