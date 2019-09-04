import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropDown from "./useDropdown";
import Result from "./Results";
import ThemeContext from "./themeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, AnimalDrop] = useDropDown("Animal", "dog", ANIMALS);
  const [breeds, setBreeds] = useState([]);
  const [breed, BreedDrop, setBreed] = useDropDown("Breed", "", breeds);
  const [pets, setPets] = useState([]);
  const [theme, setTheme] = useContext(ThemeContext);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal
    });

    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    pet.breeds(animal).then(({ breeds: apiBreeds }) => {
      const breedStr = apiBreeds.map(({ name }) => name);
      setBreeds(breedStr);
    }, console.error);
  }, [animal, setBreed, setBreeds]);

  return (
    <div className="search-params">
      <form
        onSubmit={e => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            onBlur={e => setLocation(e.target.value)}
            placeholder="Location "
          />
        </label>
        <AnimalDrop />
        <BreedDrop />
        <label htmlFor="theme">
          Theme
          <select
            value={theme}
            onChange={e => setTheme(e.target.value)}
            onBlur={e => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="blue">Blue</option>
            <option value="pink">Pink</option>
            <option value="Purple">Purple</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Result pets={pets} />
    </div>
  );
};

export default SearchParams;
