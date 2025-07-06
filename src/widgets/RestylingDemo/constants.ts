import { TGroups } from './types';

export const CSS_GROUPS = ['btn', 'input'] as const;

export const GROUP_NAMES: Record<TGroups<typeof CSS_GROUPS>, string> = {
  btn: 'Buttons',
  input: 'Inputs',
  ungrouped: 'Global/Ungrouped',
};
