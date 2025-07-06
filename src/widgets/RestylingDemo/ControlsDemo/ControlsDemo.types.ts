import { ComponentProps } from 'react';
import { TControlsGroupedProperties, TCssProperties } from '../types';

export type TControlsDemoProps = ComponentProps<'div'> & {
  paletteCssProperties?: TCssProperties;
  groupedControlsCssProperties?: TControlsGroupedProperties;
};
