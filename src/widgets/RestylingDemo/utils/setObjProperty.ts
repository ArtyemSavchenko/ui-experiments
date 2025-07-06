export const setObjProperty = (
  obj: Record<string, string>,
  key: string,
  value: string
) => {
  return { ...obj, [key]: value };
};
