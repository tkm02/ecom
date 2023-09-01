import React from "react";


const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="texte-newsletter">
        <h3>S'abonner à notre Newsletter</h3>
        <p>
          Rester informer de nos derniers nouvelle sur les tous les produits
          vivriers du monde qinis que des recette de cuisine
        </p>
      </div>
      <form className="form-mail">
            <input type="email" placeholder="email" />
            <button className="submit">s'abonner'</button>
      </form>
      <div className="socials">
        <div className="social">
          <i className="fa-brands fa-facebook"></i>
        </div>
        <div className="social">
        <i className="fa-brands fa-twitter"></i>
        </div>
        <div className="social">
        <i className="fa-brands fa-pinterest"></i>
        </div>
        <div className="social">
        <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
