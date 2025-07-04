import { FC, useRef } from 'react';
import { joinClasses } from 'shared/utils';
import { BaseAffixInput } from '../BaseAffixInput';
import { useInputClearBtn } from '../hooks/useInputClearBtn';
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
