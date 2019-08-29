const Pet = ({ name, type, Breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, type),
    React.createElement("h2", {}, Breed)
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!!"),
    React.createElement(Pet, { name: "Luna", type: "Dog", Breed: "Blue Eyed" }),
    React.createElement(Pet, { name: "Mars", type: "Dog", Breed: "Pug" }),
    React.createElement(Pet, { name: "Bruno", type: "Dog", Breed: "Dolmetian" })
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
