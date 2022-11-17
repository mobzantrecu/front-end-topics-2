import React from "react";
import AlertPortal from "../components/AlertPortal/AlertPortal";
import useAlert from "../components/AlertPortal/useAlert";
import Card from "../components/Card/Card";
import ScssCard from "../components/Card/ScssCard";
import Product from "../model/Product/product-model";
import getColumns from "../utils";

export {};
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rich-text": any;
    }
  }
}

const Home = () => {
  const { renderAlert } = useAlert();
  const columns = getColumns(Product);
  console.log(columns);

  const params = {
    row: {
      title: "Esto es un test de renderCell",
    },
  };

  let test = <></>;
  if (columns[1].renderCell) {
    test = columns[1].renderCell(params);
  }

  return (
    <>
      <AlertPortal />
      <div className="app">
        <header style={{ backgroundColor: "green" }}>
          {test}
          {/* <rich-text text-value="HOLA" /> */}
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
