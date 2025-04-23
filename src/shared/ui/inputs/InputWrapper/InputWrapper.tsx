import { FC } from "react";

import { joinClasses } from "../../../utils/joinClasses";
import "./InputWrapper.css";
import { TInputWrapperProps } from "./InputWrapper.types";

export const InputWrapper: FC<TInputWrapperProps> = ({
  className,
  children,
  leftEl,
  rightEl,
}) => {
  return (
    <label className={joinClasses(className, "input-wrapper")}>
      {leftEl}

      {children}

      {rightEl}
    </label>
  );
};
