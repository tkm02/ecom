import React from 'react';

const ResumeCard = ({ subTotal, shippingCost, total }) => {
  return (
    <div className="resume-card">
      <h2>Total Panier</h2>
      <div className="summary-item">
        <span>Sous-total :</span>
        <span>XOF {subTotal}</span>
      </div>
      <div className="summary-item">
        <span>Frais de livraison :</span>
        <span>XOF {shippingCost}</span>
      </div>
      <div className="summary-item total">
        <span>Total :</span>
        <span>XOF {total}</span>
      </div>
      <button className="payment-button">Passer au paiement</button>
    </div>
  );
};

export default ResumeCard;
