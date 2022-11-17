import "reflect-metadata";
export declare const headerNameMetadataKey: unique symbol;
declare function headerName(name: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export default headerName;
