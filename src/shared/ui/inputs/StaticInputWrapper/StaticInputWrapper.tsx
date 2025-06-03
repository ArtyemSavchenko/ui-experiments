import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './StaticInputWrapper.module.css';
import { TStaticInputWrapperProps } from './StaticInputWrapper.types';

export const StaticInputWrapper: FC<TStaticInputWrapperProps> = ({
  className,
  children,
  leftEl,
  rightEl,
}) => {
  return (
    <label
      className={joinClasses(
        className,
        'static-input-wrapper',
        s['static-input-wrapper']
      )}
    >
      {leftEl && (
        <div
          className={joinClasses(
            'static-input-wrapper__el-box',
            'static-input-wrapper__el-box_left',
            s['static-input-wrapper__el-box']
          )}
        >
          {leftEl}
        </div>
      )}

      {children}

      {rightEl && (
        <div
          className={joinClasses(
            'static-input-wrapper__el-box',
            'static-input-wrapper__el-box_right',
            s['static-input-wrapper__el-box']
          )}
        >
          {rightEl}
        </div>
      )}
    </label>
  );
};
