import React from "react";
import '../Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-links">
        <div className="col-1 col">
          <div className="footer-logo"></div>
          <span>
            Meilleur entreprise de ecommercialisation de produits vivriers avec
            ces agriculteurs et ses vendeurs qui ont impacté le domaine par leur
            savoir-faire.
          </span>
          <div className="number">
            <span>(225) 07 05 228 0114 & (33) 01 01 233 412</span>
          </div>
        </div>

        <div className="col-2 col">
          <h3>Mon Compte</h3>
          <ul>
            <li>
              <a href="/">Mon compte</a>
            </li>
            <li>
              <a href="/">Historique des achats</a>
            </li>
          </ul>
          <h3>Carte de Crédit</h3>
          <ul>
            <li>
              <a href="/">Mon Panier</a>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Aides</h3>
          <ul>
            <li>
              <a href="/">Contact</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
            <li>
              <a href="/">Termes et conditions</a>
            </li>
            <li>
              <a href="/">Politique de confidentialité</a>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Proxy</h3>
          <ul>
            <li>
              <a href="/">Notre Team</a>
            </li>
            <li>
              <a href="/">Boutiques</a>
            </li>
            <li>
              <a href="/">Produits</a>
            </li>
            <li>
              <a href="/">Suivi de commande</a>
            </li>
          </ul>
        </div>

        <div className="col-3 col">
          <h3>Categories</h3>
          <ul>
            <li>
              <a href="/">fruits</a>
            </li>
            <li>
              <a href="/">Légumes</a>
            </li>
            <li>
              <a href="/">Céréales & Féculents</a>
            </li>
            <li>
              <a href="/">Tubercules</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mahoufarm">
        <span>Mahoufarm eCommerce @2023 All Rights Reserved</span>
        <div className="means-payement">
          <div className="methode-apple methode"></div>
          <div className="methode-visa methode"></div>
          <div className="methode-discover methode"></div>
          <div className="methode-mastercard methode"></div>
          <div className="methode-cart methode"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
