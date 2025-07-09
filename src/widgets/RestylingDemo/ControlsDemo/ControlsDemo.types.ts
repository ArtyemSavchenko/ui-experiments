import { ComponentProps } from 'react';
import { TControlsGroupedCssProperties, TCssProperties } from '../types';

export type TControlsDemoProps = ComponentProps<'div'> & {
  paletteCssProperties?: TCssProperties;
  groupedControlsCssProperties?: TControlsGroupedCssProperties;
};
