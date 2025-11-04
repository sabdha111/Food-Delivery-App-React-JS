import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const { getTotalQuantity } = useContext(StoreContext);
  const totalQuantity = getTotalQuantity();
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* Logo + Brand Name */}
      <Link to="/" className="navbar-logo">
        <img src={assets.logo} alt="Foodify logo" className="logo" />
        <span className="brand-name">🍴 Foodify</span>
      </Link>

      {/* Menu Links */}
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => setMenu("mobile-app")}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>
        <a
          href="#footer"
          onClick={() => setMenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact Us
        </a>
      </ul>

      {/* Right Section */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="search_icon" className="search-icon" />

        <div className="navbar-basket-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="basket_icon" />
          </Link>
          <div className={totalQuantity === 0 ? "dotHidden" : "dot"}>
            <p>{totalQuantity}</p>
          </div>
        </div>

        <button onClick={() => setShowLogin(true)} className="signin-btn">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default Navbar;

