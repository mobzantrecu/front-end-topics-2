
export {};
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "rich-text": any;
    }
  }
}

import React, { Suspense, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useTheme } from "styled-components";
import AlertPortal from "../components/AlertPortal/AlertPortal";
import useAlert from "../components/AlertPortal/useAlert";
import Button from "../components/Button/Button";
import Card from "../components/Card/Card";
import Product from "../model/Product/product-model";
import { getCharacters } from "../services/rest/character.service";
import { useGetCharacters } from "../services/useRequest";
import getColumns from "../utils";
import init, { add } from "wasm-lib";
import socket from "../socket/socket";

const scssCardPromise = import("../components/Card/ScssCard");
const ScssCard = React.lazy(() => scssCardPromise);

const sendPing = () => {
  socket.emit('ping');
}


const Home = () => {
  const { data } = useGetCharacters();
  const { data: restData } = useQuery("todos", getCharacters);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });
  
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  
    socket.on('message', () => {
      console.log('ola')
    });
  
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('pong');
    };
  }, []);

  const [ans, setAns] = useState(0);
  useEffect(() => {
    init("wasm-lib/pkg/wasm_lib_bg.wasm").then(() => {
      setAns(add(1, 2));
    });
  }, []);

  console.log("graphql data", data);
  console.log("rest data", restData);

  const { renderAlert } = useAlert();
  const columns = getColumns(Product);

  const params = {
    row: {
      title: "Esto es un test de renderCell",
    },
  };

  let test = <></>;
  if (columns[1].renderCell) {
    test = columns[1].renderCell(params);
  }

  // Te permite usar valores customisables como el color 'main'
  // Se esta usando en el botton
  const theme = useTheme();
  console.log("Theme", theme);


  return (
    <Suspense fallback={<>Loading</>}>
      <AlertPortal />
      <div className="app">
        <header style={{ backgroundColor: "green" }}>
          {test}
          {/* <rich-text text-value="HOLA" /> */}
          <button>Ir a la otra pantalla</button>
          <button onClick={() => renderAlert("Hey, something happened!")}>
            Trigger Alert
          </button>
          {/* WASM */}
          <p>1 + 1 = {ans}</p>
        </header>
        <main className="p-20 flex justify-around">
          <Card />
          <ScssCard />
          <Button onClick={sendPing} />
        </main>
      </div>
    </Suspense>
  );
};

export default Home;
