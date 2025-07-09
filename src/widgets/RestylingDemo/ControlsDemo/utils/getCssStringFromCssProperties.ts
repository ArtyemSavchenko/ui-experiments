import { TCssProperties } from 'widgets/RestylingDemo/types';

export const getCssStringFromCssProperties = (
  cssProperties: TCssProperties
) => {
  return Object.entries(cssProperties)
    .map(([key, value]) => `${key}:${value};`)
    .join('');
};
