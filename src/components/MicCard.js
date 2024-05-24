import React from "react";

function MicCard() {
  return (
    <li className="card">
      <img src={"https://via.placeholder.com/400"} alt={"Mic name"} />
      <h4>{"Mic brand"}</h4>
      <h4>{"Mic model"}</h4>
      <h4>{"Mic polar pattern"}</h4>
      <h4>{"Mic quantity"}</h4>
      <h4>{"Mic country"}</h4>
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