import React, { useEffect, Fragment } from "react";
import Navbar from "./components/layout/Navbar";
import Cards from "./components/cards/Cards";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import "./App.css";

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Navbar />
      <Cards />
    </Fragment>
  );
};

export default App;
