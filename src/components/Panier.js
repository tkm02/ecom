import React, { useState } from "react";

const Panier = () => {
  const initialProductData = [
    {
      name: "Piment verts",
      price: 1400,
      quantity: 5,
      imageSrc: "/Icones/piment_vert.png",
    },
    {
      name: "Produit 2",
      price: 1400,
      quantity: 5,
      imageSrc: "/Icones/piment_rouge.png",
    },
  ];

  const [products, setProducts] = useState(initialProductData);

  const handleQuantityChange = (index, newQuantity) => {
    const newProducts = [...products];
    newProducts[index].quantity = newQuantity;
    setProducts(newProducts);
  };

  const handleRemoveItem = (index) => {
    const newProducts = [...products];
    newProducts.splice(index, 1);
    setProducts(newProducts);
  };

  return (
    <div className="table-container">

      <table className="styled-table">
        <thead>
          <tr>
            <th>Produits</th>
            <th>Prix</th>
            <th>Quantité</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td className="product-cell">
                <div className="product-info">
                  <img src={product.imageSrc} alt={product.name} />
                  <span>{product.name}</span>
                </div>
              </td>
              <td>XOF {product.price}/kg</td>
              <td className="quantity-btn">
                <button
                  onClick={() =>
                    handleQuantityChange(index, product.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{product.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(index, product.quantity + 1)
                  }
                >
                  +
                </button>
              </td>
              <td>XOF {product.price * product.quantity}</td>
              <td>
                <button onClick={() => handleRemoveItem(index)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="div-update-btn">
        <button className="update-button">Mise à jour du panier</button>
      </div>
    </div>
  );
};

export default Panier;
