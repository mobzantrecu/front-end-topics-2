import React from "react";
import Card from "../components/Card/Card";
import ScssCard from "../components/Card/ScssCard";

const Home = () => {
  return (
    <div className="app">
      <header style={{ backgroundColor: "green" }}>
        <rich-text text-value="HOLA" />
        <button>Ir a la otra pantalla</button>
      </header>
      <main className="p-20 flex justify-around">
        <Card />
        <ScssCard />
      </main>
    </div>
  );
};

export default Home;
