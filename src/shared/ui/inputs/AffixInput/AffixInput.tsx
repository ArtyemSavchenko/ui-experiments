import { FC, MouseEventHandler, useRef } from 'react';
import { ClearIcon } from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns';
import { joinClasses } from 'shared/utils';
import { BaseAffixInput } from '../BaseAffixInput';
import { LabeledInputWrapper } from '../LabeledInputWrapper';
import { TAffixInputProps } from './AffixInput.types';

export const AffixInput: FC<TAffixInputProps> = ({
  className,
  dynamicLeftEl,
  dynamicRightEl,
  label,
  onClear,
  placeholder = ' ',
  prefix,
  staticLeftEl,
  staticRightEl,
  suffix,
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
    <LabeledInputWrapper
      className={joinClasses('input', className)}
      staticLeftEl={staticLeftEl}
      staticRightEl={staticRightEl}
      dynamicLeftEl={dynamicLeftEl}
      dynamicRightEl={resolvedDynamicRightEl}
      label={label}
    >
      <BaseAffixInput
        prefix={prefix}
        suffix={suffix}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </LabeledInputWrapper>
  );
};
