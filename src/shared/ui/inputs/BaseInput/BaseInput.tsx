import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import s from './BaseInput.module.css';
import { TBaseInputProps } from './BaseInput.types';

export const BaseInput: FC<TBaseInputProps> = ({
  className,
  label,
  rightEl,
  leftEl,
  placeholder = ' ',
  ...rest
}) => {
  return (
    <div className={joinClasses(className, 'base-input', s['base-input'])}>
      {label && (
        <span
          className={joinClasses('base-input__label', s['base-input__label'])}
        >
          {label}
        </span>
      )}

      <div
        className={joinClasses(
          'base-input__input-wrapper',
          s['base-input__input-wrapper']
        )}
      >
        {leftEl && (
          <div
            className={joinClasses(
              'base-input__el-box',
              'base-input__el-box_left',
              s['base-input__el-box'],
              s['base-input__el-box_left']
            )}
          >
            {leftEl}
          </div>
        )}

        <input
          className={joinClasses('base-input__input', s['base-input__input'])}
          placeholder={placeholder}
          {...rest}
        />
      </div>

      {rightEl && (
        <div
          className={joinClasses(
            'base-input__el-box',
            'base-input__el-box_right',
            s['base-input__el-box'],
            s['base-input__el-box_right']
          )}
        >
          {rightEl}
        </div>
      )}
    </div>
  );
};
