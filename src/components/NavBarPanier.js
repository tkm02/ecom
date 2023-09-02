import React from "react";
import '../NavbarPanier.css'
import '../Navbar.css'

const NavBarPanier = () => {
  const textLocation =
    "Station F 56 boulevard vincent Auriol, 75013 Paris France & Ivoire trade center,Abidjan Côte d'ivoire";
  return (
    <header>
      <nav>
        <ul className="params">
          <li className="location">
            <div className="location-img"></div>
            {textLocation} 
          </li>
          <li>
            <select className="country">
              <option value="Fr">Fr</option>
              <option value="CI">CI</option>
            </select>
            <select className="devise">
              <option value="XOF">XOF</option>
              <option value="EUR">EUR</option>
            </select>
          </li>
        </ul>

        <ul className="navbar-element">
        <li>
        <i className="fa-solid fa-chevron-left"></i>
        </li>
          <li className="logo-panier">
            <div className="logo-img"></div>
          </li>

          <li className="nav-icon">
            <div className="icons">
              <div className="icon-favoris"></div>
              <div className="icon-panier"></div>
            </div>
            <div className="sep"></div>
            <div className="user-icon">
              <div className="icon-profile"></div>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBarPanier;
