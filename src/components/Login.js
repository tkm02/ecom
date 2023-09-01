import React from "react";

const Login = () => {
  return (
    <div className="login">
      <div className="bg-image"></div>
      <div className="form-container">
        <form className="form-login">
          <h3>Se connecter</h3>
          <input
            type="text"
            placeholder="identifiant Mahou-Customer"
            id="username"
          />
          <div className="container-password">
            <input type="password" placeholder="Mot de passe" id="username" />
            <div className="eye"></div>
          </div>

          <div className="remenber-user">
            <input type="checkbox" id="remenber" className="styled-checkbox" />
            <label for="remenber" className="checkbox-labe">
              se rappeler de vous ?
            </label>
            <a href="/" className="forgetmdp">
              {" "}
              Mot de passe oublié ?
            </a>
          </div>
          <button type="submit" className="btn-login">
            Se connecter
          </button>
          <span>
            Vous n'avez pas de compte ? <a href="/"> S'incrire </a>{" "}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
