import './App.css';
import PokeShowdown from "./PokeShowdown";
import Pokedex from "./Pokedex";
import './Pokedex.css'
import React from "react";

function App() {
  return (
      <div className="App">
          <PokeShowdown/>
          <h1 className="Pokedex">Pokedex</h1>
          <Pokedex />
      </div>
  );
}

export default App;
