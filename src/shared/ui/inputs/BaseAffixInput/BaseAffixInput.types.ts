import { ComponentProps } from 'react';

export type TBaseAffixInputProps = ComponentProps<'input'> & {
  prefix?: string;
  suffix?: string;
};
