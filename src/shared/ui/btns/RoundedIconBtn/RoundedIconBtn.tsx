import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import { Btn } from '../Btn/Btn';
import s from './RoundedIconBtn.module.css';
import { TRoundedIconBtnProps } from './RoundedIconBtn.types';

export const RoundedIconBtn: FC<TRoundedIconBtnProps> = ({
  Icon,
  className,
  ...props
}) => {
  return (
    <Btn
      LeftIcon={Icon}
      className={joinClasses(
        className,
        'rounded-icon-btn',
        s['rounded-icon-btn']
      )}
      {...props}
    />
  );
};
