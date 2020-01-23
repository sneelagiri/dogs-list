import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DogsList from "./components/DogsList";

function App() {
  return (
    <div className="App">
      <main>
        <DogsList />
      </main>
    </div>
  );
}

export default App;
