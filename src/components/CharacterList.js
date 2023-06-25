import React from "react";
import Character from "./Character";

function CharacterList({ characters }) {
  const charList = characters.map((char) => (
    <Character key={crypto.randomUUID()} character={char} />
  ));
  return <div className="characters-flex">{charList}</div>;
}

export default CharacterList;
