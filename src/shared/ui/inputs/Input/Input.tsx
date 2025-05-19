import { FC, MouseEventHandler, useRef } from 'react';
import { ClearIcon } from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns/RoundedIconBtn/RoundedIconBtn';
import { joinClasses } from 'shared/utils';
import { BaseInput } from '../BaseInput/BaseInput';
import { InputWrapper } from '../InputWrapper';
import { TInputProps } from './Input.types';

export const Input: FC<TInputProps> = ({
  className,
  leftStaticEl,
  rightStaticEl,
  leftEl,
  rightEl,
  value,
  onClear,
  ...rest
}) => {
  const inputInnerRef = useRef<HTMLInputElement>(null);

  const handleClearBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    inputInnerRef.current?.focus();
    onClear?.();
  };

  const isClearBtnVisible = value && onClear;

  const resolvedRightEl = (
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

      {rightEl}
    </>
  );

  return (
    <InputWrapper
      className={joinClasses('input', className)}
      leftEl={leftStaticEl}
      rightEl={rightStaticEl}
    >
      <BaseInput
        leftEl={leftEl}
        rightEl={resolvedRightEl}
        value={value}
        ref={inputInnerRef}
        {...rest}
      />
    </InputWrapper>
  );
};
