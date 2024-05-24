import React from "react";

function MicCard({ brand, model, polarPattern, quantity, country, image }) {
  return (
    <li className="card">
      <img src={image} alt={model} />
      <h4>Mic Brand: {brand}</h4>
      <h4>Mic Model: {model}</h4>
      <h4>Polar-Pattern: {polarPattern}</h4>
      <h4>Quantity: {quantity}</h4>
      <h4>Country: {country}</h4>
      {/* <p>Price: {"plant price"}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )} */}
    </li>
  );
}

export default MicCard;