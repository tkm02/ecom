import React from "react";
import Panier from "./Panier";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import CodePromo from "./CodePromo";
import NavBarPanier from "./NavBarPanier";

const PanierPage = () => {
  return (
    <div>
      <NavBarPanier />
      <h1 style={{ textAlign: "center" }}>Mon panier</h1>
      <Panier />
      <CodePromo />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default PanierPage;
