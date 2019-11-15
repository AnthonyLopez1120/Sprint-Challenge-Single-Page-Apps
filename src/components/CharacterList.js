import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
// import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [searchStart, setSearchStart] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [api, setAPI] = useState("https://rickandmortyapi.com/api/character/");



  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(api)
    .then(res => {
      setCharacters(res.data.results);

    })
    .catch(err => {
      console.log(err)
    })
  }, [api]);

  useEffect(() => {
    const results = characters.filter(character => character.name.toLowerCase().includes(searchStart)
    );
    setSearchResults(results);
    setCharacters(searchResults);
  }, [searchStart]);

  const handleChange = e => {
    setSearchStart(e.target.value)
  };

  return (
    <>
    {/* <SearchForm/> */}
    <form>
      <label for="name">Search</label>
      <input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        vaule={searchStart}
        onChange={handleChange}
      />
    </form>

    <section className="character-list">

      {characters.map(character => 
        <CharacterCard
          id={character.id}
          pic={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
          gender={character.gender}
          location={character.location}
          origin={character.origin}
        />

        )}
    </section>

  </>
  );
}
