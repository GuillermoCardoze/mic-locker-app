
import React from "react";
import MicCard from "./MicCard";

function MicList({ microphones, handleRemoveMic }) {
  const micCards = microphones.map(mic => {
    return <MicCard 
    key={mic.id}
    id={mic.id}
    brand={mic.brand}
    model={mic.model}
    pattern={mic.pattern}
    country={mic.country}
    quantity={mic.quantity}
    image = {mic.image}
    handleRemoveMic={handleRemoveMic}
    />
  })



  return (
    <ul className="cards">{micCards}</ul>
  );
}

export default MicList;
