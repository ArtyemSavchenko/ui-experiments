import { TBaseAffixInputProps } from '../BaseAffixInput';
import { TBaseLabeledInputWrapperProps } from '../BaseLabeledInputWrapper';
import { TStaticInputWrapperProps } from '../StaticInputWrapper';

type TResolvedStaticWrapperProps = {
  staticLeftEl?: TStaticInputWrapperProps['leftEl'];
  staticRightEl?: TStaticInputWrapperProps['rightEl'];
};

type TResolvedLabeledInputWrapperProps = {
  dynamicLeftEl?: TBaseLabeledInputWrapperProps['leftEl'];
  dynamicRightEl?: TBaseLabeledInputWrapperProps['rightEl'];
} & Pick<TBaseLabeledInputWrapperProps, 'label'>;

export type TAffixInputProps = TBaseAffixInputProps &
  TResolvedStaticWrapperProps &
  TResolvedLabeledInputWrapperProps & {
    onClear?: () => void;
  };
