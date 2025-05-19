import { ComponentProps } from 'react';
import { TSvgIcon } from 'shared/types';

export type TBtnProps = Omit<ComponentProps<'button'>, 'disabled'> & {
  LeftIcon?: TSvgIcon;
  RightIcon?: TSvgIcon;
  variant?: 'solid' | 'ghost';
  isDisabled?: boolean;
};
