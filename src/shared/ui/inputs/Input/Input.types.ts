import { TBaseInputProps } from "../BaseInput/BaseInput.types";
import { TInputWrapperProps } from "../InputWrapper/InputWrapper.types";

export type TInputProps = {
  leftStaticEl?: TInputWrapperProps["leftEl"];
  rightStaticEl?: TInputWrapperProps["rightEl"];
  onClear?: () => void;
} & TBaseInputProps;
