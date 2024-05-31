
import React from "react";
import MicCard from "./MicCard";

function MicList({ microphones }) {
  const micCards = microphones.map(mic => {
    return <MicCard 
    key={mic.id}
    brand={mic.brand}
    model={mic.model}
    pattern={mic.pattern}
    country={mic.country}
    quantity={mic.quantity}
    image = {mic.image}
    />
  })



  return (
    <ul className="cards">{micCards}</ul>
  );
}

export default MicList;
