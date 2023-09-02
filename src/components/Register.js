import React from 'react'
import '../Register.css'

const Register = () => {
  return (
    <div className="form-container">
  <form className="form-signup">
    <h3>S'inscrire'</h3>
    <div className="form-column">
      <input type="text" placeholder="Nom" />
      <input type="text" placeholder="Prénom" />
      <select>
        <option value="">Sélectionner une activité</option>
        {/* Ajoutez d'autres options ici */}
      </select>
      <input type="text" placeholder="Nom de l'entreprise" />
      <input type="email" placeholder="Email" />
    </div>
    <div className="form-column">
      <input type="tel" placeholder="Numéro de téléphone" />
      <input type="password" placeholder="Mot de passe" />
      <input type="password" placeholder="Confirmez le mot de passe" />
      <div className="accept-terms">
        <input type="checkbox" id="accept-terms-checkbox" className="styled-checkbox" />
        <label htmlFor="accept-terms-checkbox" className="checkbox-label">
          J'accepte les termes et conditions'
        </label>
      </div>
      <button type="submit" className="btn-signup">S'inscrire'</button>
    </div>
    <p>
      Avez-vous déjà un compte ? <a href="/">Se connecter</a>
    </p>
  </form>
</div>

  )
}

export default Register
