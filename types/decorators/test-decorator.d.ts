import "reflect-metadata";
export declare const formatMetadataKey: unique symbol;
declare function format(formatString: string): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare function getFormat(target: any, propertyKey: string): any;
export default format;
