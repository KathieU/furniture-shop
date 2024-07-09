import { Link } from "react-router-dom";
import "./Navbar.css";
import "../../App.css";
import searchIcon from "../../assets/icons/searchIcon.png";
import plainHeartIcon from "../../assets/icons/heart.png";
import loadedCartIcon from "../../assets/icons/loadedCartIcon.png";
import profile from "../../assets/icons/profile.png";
import brownProfile from "../../assets/icons/brownProfile.png";
import brownSearch from "../../assets/icons/brownSearch.png";
import brownHeart from "../../assets/icons/brownHeart.png";
import brownCart from "../../assets/icons/brownCart.png";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleToggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  useEffect(() => {
    const icons = document.querySelectorAll(".icon");

    icons.forEach((icon) => {
      const originalSrc = icon.src;
      const hoverSrc = icon.getAttribute("data-hover");

      icon.addEventListener("mouseover", () => {
        icon.src = hoverSrc;
      });

      icon.addEventListener("mouseout", () => {
        icon.src = originalSrc;
      });
    });
  }, []);
  return (
    <header>
      <div className="top-bar">
        <p>Sign in to our app to start shopping</p>

        <div className="nav-icons ">
          <Link to="/search">
            <img
              className="icon"
              src={searchIcon}
              alt="Search icon"
              data-hover={brownSearch}
            />
          </Link>
          <Link to="/wishlist">
            <img
              className="icon"
              src={plainHeartIcon}
              alt="Heart icon"
              data-hover={brownHeart}
            />
          </Link>
          <Link to="/cart">
            <img
              className="icon"
              src={loadedCartIcon}
              alt="Cart icon"
              data-hover={brownCart}
            />
          </Link>
          <Link to="/account">
            <img
              className="icon"
              src={profile}
              alt="Profile icon"
              data-hover={brownProfile}
            />
          </Link>
        </div>
      </div>
      <nav className="main-nav">
        <div className="logo">
          <Link to="/">Furniture.ng</Link>
        </div>

        <nav>
          <ul className={`nav-links ${menuVisible ? "visible" : ""}`}>
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
          <div className="menu-icon" onClick={handleToggleMenu}>
            ☰
          </div>
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
