import { TSvgIcon } from 'shared/types';
import { TBtnProps } from '../Btn/Btn.types';

export type TRoundedIconBtnProps = Omit<
  TBtnProps,
  'LeftIcon' | 'RightIcon' | 'children'
> & {
  Icon: TSvgIcon;
};
