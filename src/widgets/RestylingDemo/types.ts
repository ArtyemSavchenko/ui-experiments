import { CSS_GROUPS } from './constants';

export type TCssProperties = Record<string, string>;

export type TGroups<T extends readonly string[]> = T[number] | 'ungrouped';

export type TGroupedCssProperties<T extends readonly string[]> = {
  [K in TGroups<T>]?: TCssProperties;
};

export type TControlsGroupedCssProperties = TGroupedCssProperties<
  typeof CSS_GROUPS
>;
