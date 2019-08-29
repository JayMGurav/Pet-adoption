import React from "react";
export default function Pet({ name, type, Breed }) {
  //   return React.createElement("div", {}, [
  //     React.createElement("h1", {}, name),
  //     React.createElement("h2", {}, type),
  //     React.createElement("h2", {}, Breed)
  //   ]);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{type}</h2>
      <h2>{Breed}</h2>
    </div>
  );
}
