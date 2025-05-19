import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './InputWrapper.module.css';
import { TInputWrapperProps } from './InputWrapper.types';

export const InputWrapper: FC<TInputWrapperProps> = ({
  className,
  children,
  leftEl,
  rightEl,
}) => {
  return (
    <label
      className={joinClasses(className, 'input-wrapper', s['input-wrapper'])}
    >
      {leftEl && (
        <div
          className={joinClasses(
            'input-wrapper__el-box',
            'input-wrapper__el-box_left',
            s['input-wrapper__el-box']
          )}
        >
          {leftEl}
        </div>
      )}

      {children}

      {rightEl && (
        <div
          className={joinClasses(
            'input-wrapper__el-box',
            'input-wrapper__el-box_right',
            s['input-wrapper__el-box']
          )}
        >
          {rightEl}
        </div>
      )}
    </label>
  );
};
