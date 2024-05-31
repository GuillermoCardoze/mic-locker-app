import React from "react";

function MicCard({ brand, model, pattern, quantity, country, image }) {

  return (
    <li className="card">
      <img src={image} alt={model} />
      <h4>Mic Brand:</h4> <p className="card-info">{brand}</p>
      <h4>Mic Model:</h4> <p className="card-info">{model}</p>
      <h4>Polar-Pattern:</h4> <p className="card-info">{pattern}</p>
      <h4>Quantity:</h4> <p className="card-info">{quantity}</p>
      <h4>Country:</h4> <p className="card-info">{country}</p>
    </li>
  );
}

export default MicCard;