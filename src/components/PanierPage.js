import React from "react";
import Panier from "./Panier";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
import Navbar from "./Navbar";
import ResumeCard from "./ResumeCard ";
import CodePromo from "./CodePromo";
const PanierPage = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:'center'}}>Mon panier</h1>
      <div className="section-panier">
        <Panier />
        <ResumeCard />
      </div>
      <CodePromo />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default PanierPage;
