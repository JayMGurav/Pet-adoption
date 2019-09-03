import { render } from "react-dom";
import React from "react";
import SearchParams from "./searchParams";

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!!</h1>
      <SearchParams />
    </div>
  );
};
render(<App />, document.getElementById("root"));
