import React from "react";
import QuoteList from "./QuoteList";

function Character({ character }) {
  const { name, race, weapon, status, image, quotes } = character;
  return (
    <div className="character">
      <img src={image} alt={`Character Portrait of ${name}`} />
      <h1>{name}</h1>
      <p>{race}</p>
      <p>{status}</p>
      <p>{weapon}</p>
      <QuoteList quotes={quotes} />
    </div>
  );
}

export default Character;
