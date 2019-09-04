import { render } from "react-dom";
import React, { useState } from "react";
import { Router, Link } from "@reach/router";
import SearchParams from "./searchParams";
import Details from "./details";
import ThemeContext from "./themeContext";

const App = () => {
  const themeHook = useState("peru");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <header>
          <Link to="/">Adopt me!!</Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
render(<App />, document.getElementById("root"));
