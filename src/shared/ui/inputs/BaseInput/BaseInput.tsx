import { FC } from "react";
import { joinClasses } from "../../../utils/joinClasses";
import "./BaseInput.css";
import { TBaseInputProps } from "./BaseInput.types";

export const BaseInput: FC<TBaseInputProps> = ({
  className,
  label,
  rightEl,
  leftEl,
  placeholder = " ",
  ...rest
}) => {
  return (
    <div className={joinClasses("base-input", className)}>
      {label && <span className="base-input__label">{label}</span>}

      <div className="base-input__input-wrapper">
        {leftEl}

        <input
          className="base-input__input"
          placeholder={placeholder}
          {...rest}
        />

        {rightEl}
      </div>
    </div>
  );
};
