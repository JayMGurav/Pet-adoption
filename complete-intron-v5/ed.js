// search paaraams
//import React, { useState, useEffect } from "react";
// import pet, { ANIMALS } from "@frontendmasters/pet";
// import useDropdown from "./dropDown";

// const SearchParams = () => {
//   const [location, setLocation] = useState("Seattle, WA");
//   const [breeds, setBreeds] = useState([]);
//   const [animal, AnimalDrop] = useDropdown("Animal", "dog", ANIMALS);
//   const [breed, BreedDrop, setBreed] = useDropdown("Breed", "", breeds);

//   useEffect(() => {
//     setBreeds([]);
//     setBreed("");
//     pet.breeds(animal).then(({ breeds }) => {
//       const breedString = breeds.map(({ name }) => {
//         name;
//       });
//       setBreeds(breedString);
//     }, console.error);
//   }, [animal, breed, setBreed, setBreeds]);

//   return (
//     <div className="search-params">
//       <form>
//         <label htmlFor="location">
//           <input
//             id="location"
//             value={location}
//             placeholder="Location"
//             onChange={e => setLocation(e.target.value)}
//           />
//         </label>
//         <AnimalDrop />
//         {console.log(animal)}
//         <BreedDrop />
//         <button>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default SearchParams;
