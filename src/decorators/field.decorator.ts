import "reflect-metadata";

export const fieldNameMetadataKey = Symbol("fieldName");
function fieldName(name: string) {
  return Reflect.metadata(fieldNameMetadataKey, {
    field: name,
  });
}

export default fieldName;
