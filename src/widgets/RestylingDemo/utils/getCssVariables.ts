const CSS_COMMENTS_REG_EXP = /\/\*[\s\S]*?\*\//g;
const CSS_VARIABLE_REG_EXP = /(--[^:]+):*([^;]+)/g;

const minifyCss = (css: string) => {
  return css.replace(CSS_COMMENTS_REG_EXP, '').replace(/\s+/g, '');
};

export const getCssVariables = (css: string) => {
  const minifiedCss = minifyCss(css);

  const result: Record<string, string> = {};
  let match;

  while ((match = CSS_VARIABLE_REG_EXP.exec(minifiedCss)) !== null) {
    const key = match[1];
    const value = match[2];
    result[key] = value;
  }

  return result;
};
