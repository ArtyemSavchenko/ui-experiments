import { FC, useRef } from 'react';
import { joinClasses } from 'shared/utils';
import { useInputClearBtn } from '../hooks/useInputClearBtn';
import { LabeledInputWrapper } from '../LabeledInputWrapper';
import s from './Input.module.css';
import { TInputProps } from './Input.types';

export const Input: FC<TInputProps> = ({
  className,
  dynamicLeftEl,
  dynamicRightEl,
  label,
  onClear,
  placeholder = ' ',
  staticLeftEl,
  staticRightEl,
  value,
  ...rest
}) => {
  const inputInnerRef = useRef<HTMLInputElement>(null);

  const { resolvedDynamicRightEl } = useInputClearBtn({
    ref: inputInnerRef,
    value,
    dynamicRightEl,
    onClear,
  });

  return (
    <LabeledInputWrapper
      className={joinClasses('input', className)}
      staticLeftEl={staticLeftEl}
      staticRightEl={staticRightEl}
      dynamicLeftEl={dynamicLeftEl}
      dynamicRightEl={resolvedDynamicRightEl}
      label={label}
    >
      <input
        className={joinClasses('input__control', s['input__control'])}
        ref={inputInnerRef}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </LabeledInputWrapper>
  );
};
