import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './LabeledInputWrapper.module.css';
import { TLabeledInputWrapperProps } from './LabeledInputWrapper.types';

export const LabeledInputWrapper: FC<TLabeledInputWrapperProps> = ({
  className,
  label,
  rightEl,
  leftEl,
  children,
  ...rest
}) => {
  return (
    <div
      className={joinClasses(
        className,
        'labeled-input-wrapper',
        s['labeled-input-wrapper']
      )}
      {...rest}
    >
      {label && (
        <span
          className={joinClasses(
            'labeled-input-wrapper__label',
            s['labeled-input-wrapper__label']
          )}
        >
          {label}
        </span>
      )}

      <div
        className={joinClasses(
          'labeled-input-wrapper__input-wrapper',
          s['labeled-input-wrapper__input-wrapper']
        )}
      >
        {leftEl && (
          <div
            className={joinClasses(
              'labeled-input-wrapper__el-box',
              'labeled-input-wrapper__el-box_left',
              s['labeled-input-wrapper__el-box'],
              s['labeled-input-wrapper__el-box_left']
            )}
          >
            {leftEl}
          </div>
        )}

        {children}
      </div>

      {rightEl && (
        <div
          className={joinClasses(
            'labeled-input-wrapper__el-box',
            'labeled-input-wrapper__el-box_right',
            s['labeled-input-wrapper__el-box'],
            s['labeled-input-wrapper__el-box_right']
          )}
        >
          {rightEl}
        </div>
      )}
    </div>
  );
};
