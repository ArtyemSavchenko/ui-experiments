import { ComponentProps } from 'react';
import { TLabeledInputWrapperProps } from '../LabeledInputWrapper';
import { TStaticInputWrapperProps } from '../StaticInputWrapper';

type TResolvedStaticWrapperProps = {
  staticLeftEl?: TStaticInputWrapperProps['leftEl'];
  staticRightEl?: TStaticInputWrapperProps['rightEl'];
};

type TResolvedLabeledInputWrapperProps = {
  dynamicLeftEl?: TLabeledInputWrapperProps['leftEl'];
  dynamicRightEl?: TLabeledInputWrapperProps['rightEl'];
} & Pick<TLabeledInputWrapperProps, 'label'>;

export type TInputProps = ComponentProps<'input'> &
  TResolvedStaticWrapperProps &
  TResolvedLabeledInputWrapperProps & {
    onClear?: () => void;
  };
