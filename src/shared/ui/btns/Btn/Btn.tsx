import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './Btn.module.css';
import { TBtnProps } from './Btn.types';

export const Btn: FC<TBtnProps> = ({
  className,
  children,
  LeftIcon,
  RightIcon,
  variant = 'solid',
  isDisabled,
  ...rest
}) => {
  return (
    <button
      className={joinClasses(
        className,
        'btn',
        s['btn'],
        s[`btn_variant_${variant}`]
      )}
      type="button"
      disabled={isDisabled}
      {...rest}
    >
      {LeftIcon && (
        <LeftIcon className={joinClasses('btn__icon', s['btn__icon'])} />
      )}

      {children}

      {RightIcon && (
        <RightIcon className={joinClasses('btn__icon', s['btn__icon'])} />
      )}
    </button>
  );
};
