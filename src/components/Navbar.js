import React from "react";

const Navbar = () => {
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
          <li className="logo">
            <div className="logo-img"></div>
            Mahoufarm
          </li>
          <li className="search-bar">
            <form>
              <div className="ville-icon"></div>
              <select className="ville">
                <option value="Fr">Paris</option>
                <option value="CI">Abidjan</option>
              </select>
              <div className="search-icon"></div>
              <input type="text" placeholder="Chercher..." />
              <button className="submit">Chercher</button>
            </form>
          </li>
          <li className="nav-icon">
            <div className="icons">
              <div className="icon-acv"></div>
              <div className="icon-favoris"></div>
              <div className="icon-panier"></div>
            </div>
            <div className="sep"></div>
            <div className="user-icon">
              <div className="icon-profile"></div>
            </div>
          </li>
        </ul>

        <ul className="options">
          <select className="fruits">
            <option value="">Fruits</option>
            <option value="CI">banane</option>
          </select>
          <select className="legumes">
            <option value="">Légumes</option>
          </select>
          <select className="feculents">
            <option value="">Féculents</option>
          </select>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
