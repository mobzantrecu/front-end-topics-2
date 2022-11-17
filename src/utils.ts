import { ReactElement } from "react";
import "reflect-metadata";
import { fieldNameMetadataKey } from "./decorators/field.decorator";
import { headerNameMetadataKey } from "./decorators/headerName.decorator";
import { renderCellMetadataKey } from "./decorators/renderCell.decorator";

interface Columns {
  renderCell?: (params: any) => ReactElement<any, any>;
  headerName?: any;
  fieldName?: any;
}

const listOfSymbols = [
  fieldNameMetadataKey,
  headerNameMetadataKey,
  renderCellMetadataKey,
];

const getColumns = (arg: any) => {
  const object = new arg();
  const keys = Reflect.ownKeys(object);
  const columns: Columns[] = [] as any;

  keys.forEach((key) => {
    let columnDefinition: Columns = {};
    listOfSymbols.forEach((symbol) => {
      const metadataValue = Reflect.getMetadata(symbol, object, key);
      if (metadataValue) {
        columnDefinition = {
          ...columnDefinition,
          ...metadataValue,
        };
      }
    });
    columns.push(columnDefinition);
  });

  return columns;
};

export default getColumns;
