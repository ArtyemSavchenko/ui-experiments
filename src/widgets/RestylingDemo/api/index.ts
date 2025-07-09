import { getTextResource } from './getTextResource';

export const getPalette = () => {
  return getTextResource('./default-palette.css');
};

export const getControls = () => {
  return getTextResource('./default-controls.css');
};
