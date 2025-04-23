import { FC, useRef } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import { BaseInput } from "../BaseInput/BaseInput";
import { InputWrapper } from "../InputWrapper/InputWrapper";
import { TInputProps } from "./Input.types";

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

  const handleClearBtnClick = () => {
    onClear?.();

    if (inputInnerRef) {
      inputInnerRef.current?.focus();
    }
  };

  const isClearBtnVisible = value && onClear;

  const resolvedRightEl = (
    <div className="input__right-el-box">
      {rightEl}

      {isClearBtnVisible && (
        <button className="input__clear-btn" onClick={handleClearBtnClick}>
          X
        </button>
      )}
    </div>
  );

  return (
    <InputWrapper
      className={joinClasses("input", className)}
      leftEl={leftStaticEl}
      rightEl={rightStaticEl}
    >
      <BaseInput
        leftEl={leftEl}
        rightEl={resolvedRightEl}
        value={value}
        {...rest}
        ref={inputInnerRef}
      />
    </InputWrapper>
  );
};
