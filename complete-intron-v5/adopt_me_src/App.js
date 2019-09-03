import { render } from "react-dom";
import React from "react";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./details";

const App = () => {
  return (
    <div>
      <header>
        <Link to="/">Adopt me!!</Link>
      </header>
      <Router>
        <SearchParams path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};
render(<App />, document.getElementById("root"));
