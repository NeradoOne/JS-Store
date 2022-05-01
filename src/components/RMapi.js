import { useEffect,useState } from "react";
// import { axios } from "axios";
import React from 'react'
const axios = require('axios')

const RMapi
 = () => {

  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const URL = 'https://rickandmortyapi.com/api/character';
    axios.get(URL).then((response) => setCharacters(response.data.results));
  }, []);

  return (
<div>
      <h1>Rick and Morty Characters</h1>
      {characters.map((character) => (
        <div key={character.id}>
          <h3>{character.name}</h3>
          <img src={character.image} alt={character.name} />
        </div>
      ))}
    </div>
  )
}

export default RMapi