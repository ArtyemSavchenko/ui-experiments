import * as Icons from 'shared/assets/monochrome-svg-icons';
import { InputType } from 'storybook/internal/types';

const iconComponents = { undefined: undefined, ...Icons };
const iconEls = Object.fromEntries(
  Object.entries(iconComponents).map(([key, Value]) => [
    key,
    Value && <Value style={{ height: '1.3em', display: 'block' }} />,
  ])
);

export const iconComponentsArgType: InputType = {
  control: 'select',
  options: Object.keys(iconComponents),
  mapping: iconComponents,
};

export const iconElsArgType: InputType = {
  control: 'select',
  options: Object.keys(iconEls),
  mapping: iconEls,
};
