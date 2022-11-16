import React from "react";
import AlertPortal from "../components/AlertPortal/AlertPortal";
import useAlert from "../components/AlertPortal/useAlert";
import Card from "../components/Card/Card";
import ScssCard from "../components/Card/ScssCard";

const Home = () => {
  const { renderAlert } = useAlert();

  return (
    <>
      <AlertPortal />
      <div className="app">
        <header style={{ backgroundColor: "green" }}>
          <rich-text text-value="HOLA" />
          <button>Ir a la otra pantalla</button>
          <button onClick={() => renderAlert("Hey, something happened!")}>
            Trigger Alert
          </button>
        </header>
        <main className="p-20 flex justify-around">
          <Card />
          <ScssCard />
        </main>
      </div>
    </>
  );
};

export default Home;
