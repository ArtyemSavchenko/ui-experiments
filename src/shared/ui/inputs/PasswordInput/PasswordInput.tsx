import { FC, useState } from "react";
import { Input } from "../Input/Input";
import { TPasswordInputProps } from "./PasswordInput.types";

export const PasswordInput: FC<TPasswordInputProps> = ({ ...rest }) => {
  const [isEyeBtnVisible, setIsEyeBtnVisible] = useState(true);

  return (
    <Input
      rightStaticEl={
        <button onClick={() => setIsEyeBtnVisible((prev) => !prev)}>👁️</button>
      }
      type={isEyeBtnVisible ? "password" : "text"}
      {...rest}
    />
  );
};
