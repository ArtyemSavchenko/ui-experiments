import { FC, MouseEventHandler, useRef } from 'react';
import { ClearIcon } from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns/RoundedIconBtn/RoundedIconBtn';
import { joinClasses } from 'shared/utils';
import { LabeledInputWrapper } from '../LabeledInputWrapper';
import { StaticInputWrapper } from '../StaticInputWrapper/StaticInputWrapper';
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

  const handleClearBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    inputInnerRef.current?.focus();
    onClear?.();
  };

  const isClearBtnVisible = value && onClear;

  const resolvedDynamicRightEl = (
    <>
      {isClearBtnVisible && (
        <RoundedIconBtn
          className="input__clear-btn"
          Icon={ClearIcon}
          variant="ghost"
          onClick={handleClearBtnClick}
          tabIndex={-1}
        />
      )}

      {dynamicRightEl}
    </>
  );

  return (
    <StaticInputWrapper
      className={joinClasses('input', className)}
      leftEl={staticLeftEl}
      rightEl={staticRightEl}
    >
      <LabeledInputWrapper
        className="input__labeled-wrapper"
        rightEl={resolvedDynamicRightEl}
        leftEl={dynamicLeftEl}
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
    </StaticInputWrapper>
  );
};
