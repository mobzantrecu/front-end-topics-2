import "reflect-metadata";

export const formatMetadataKey = Symbol("format");
function format(formatString: string) {
  return Reflect.metadata(formatMetadataKey, formatString);
}
export function getFormat(target: any, propertyKey: string) {
  return Reflect.getMetadata(formatMetadataKey, target, propertyKey);
}

export default format;

// funcion generica que recibe una clase y con esa clase construye las columnas
// recibir clase
// agarrar decoradores
// Leerlos
// ejecutar
