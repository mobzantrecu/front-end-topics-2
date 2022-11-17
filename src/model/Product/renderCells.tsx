import React from "react";

const titleRenderCell = (params: {
  row: {
    title:
      | string
      | number
      | boolean
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | React.ReactFragment
      | React.ReactPortal
      | null
      | undefined;
  };
}) => {
  return <h1>{params.row.title}</h1>;
};

export default titleRenderCell;
