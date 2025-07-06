import { TCssProperties, TGroupedCssProperties } from '../types';

export const getGroupedCssVariables = <T extends readonly string[]>(
  cssProperties: TCssProperties,
  groups: T
): TGroupedCssProperties<T> => {
  const res = Object.entries(cssProperties).reduce<TGroupedCssProperties<T>>(
    (acc, [key, value]) => {
      const group: T[number] =
        groups.find((group) => key.includes(group)) || 'ungrouped';

      if (!acc[group]) {
        acc[group] = {};
      }

      acc[group][key] = value;

      return acc;
    },
    {}
  );

  return res;
};
