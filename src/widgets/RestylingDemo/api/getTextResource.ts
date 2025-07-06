export const getTextResource = async (url: string) => {
  const response = await fetch(url);
  const css = await response.text();
  return css;
};
