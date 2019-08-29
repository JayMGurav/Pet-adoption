import { render } from "react-dom";
import React from "react";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, { name: "Luna", type: "Dog", Breed: "Blue Eyed" }),
    React.createElement(Pet, { name: "Mars", type: "Dog", Breed: "Pug" }),
    React.createElement(Pet, { name: "Bruno", type: "Dog", Breed: "Dolmetian" })
  ]);
};
render(React.createElement(App), document.getElementById("root"));
