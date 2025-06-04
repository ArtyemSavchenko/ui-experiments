import { FC } from 'react';
import { joinClasses } from 'shared/utils';
import { BaseLabeledInputWrapper } from '../BaseLabeledInputWrapper';
import { StaticInputWrapper } from '../StaticInputWrapper';
import { TLabeledInputWrapperProps } from './LabeledInputWrapper.types';

export const LabeledInputWrapper: FC<TLabeledInputWrapperProps> = ({
  className,
  staticLeftEl,
  staticRightEl,
  label,
  dynamicLeftEl,
  dynamicRightEl,
  children,
}) => {
  return (
    <StaticInputWrapper
      className={joinClasses('labeled-input-wrapper', className)}
      leftEl={staticLeftEl}
      rightEl={staticRightEl}
    >
      <BaseLabeledInputWrapper
        rightEl={dynamicRightEl}
        leftEl={dynamicLeftEl}
        label={label}
      >
        {children}
      </BaseLabeledInputWrapper>
    </StaticInputWrapper>
  );
};
