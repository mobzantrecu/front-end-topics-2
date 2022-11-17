import "reflect-metadata";
export declare const renderCellMetadataKey: unique symbol;
declare function renderCell(renderFn: Function): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export default renderCell;
