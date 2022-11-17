import "reflect-metadata";
export declare const fieldNameMetadataKey: unique symbol;
declare function fieldName(name: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export default fieldName;
