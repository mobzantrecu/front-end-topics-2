import "reflect-metadata";

export const renderCellMetadataKey = Symbol("renderCell");
function renderCell(renderFn: Function) {
  return Reflect.metadata(renderCellMetadataKey, {
    renderCell: renderFn,
  });
}

export default renderCell;
