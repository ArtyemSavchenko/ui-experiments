import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './BaseLabeledInputWrapper.module.css';
import { TBaseLabeledInputWrapperProps } from './BaseLabeledInputWrapper.types';

export const BaseLabeledInputWrapper: FC<TBaseLabeledInputWrapperProps> = ({
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
        'base-labeled-input-wrapper',
        s['base-labeled-input-wrapper']
      )}
      {...rest}
    >
      {label && (
        <span
          className={joinClasses(
            'base-labeled-input-wrapper__label',
            s['base-labeled-input-wrapper__label']
          )}
        >
          {label}
        </span>
      )}

      <div
        className={joinClasses(
          'base-labeled-input-wrapper__input-wrapper',
          s['base-labeled-input-wrapper__input-wrapper']
        )}
      >
        {leftEl && (
          <div
            className={joinClasses(
              'base-labeled-input-wrapper__el-box',
              'base-labeled-input-wrapper__el-box_left',
              s['base-labeled-input-wrapper__el-box'],
              s['base-labeled-input-wrapper__el-box_left']
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
            'base-labeled-input-wrapper__el-box',
            'base-labeled-input-wrapper__el-box_right',
            s['base-labeled-input-wrapper__el-box'],
            s['base-labeled-input-wrapper__el-box_right']
          )}
        >
          {rightEl}
        </div>
      )}
    </div>
  );
};
