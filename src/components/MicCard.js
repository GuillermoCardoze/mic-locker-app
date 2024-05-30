import React from "react";

function MicCard({ brand, model, pattern, quantity, country, image }) {

  return (
    <li className="card">
      <img src={image} alt={model} />
      <h4>Mic Brand: {brand}</h4>
      <h4>Mic Model: {model}</h4>
      <h4>Polar-Pattern: {pattern}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Country: {country}</h4>
    </li>
  );
}

export default MicCard;