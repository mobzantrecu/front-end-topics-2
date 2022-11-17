import "reflect-metadata";

export const headerNameMetadataKey = Symbol("headerName");
function headerName(name: string) {
  return Reflect.metadata(headerNameMetadataKey, {
    headerName: name,
  });
}

export default headerName;
