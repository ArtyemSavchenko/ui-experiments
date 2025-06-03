import { FC, MouseEventHandler, useState } from 'react';
import {
  VisibilityIcon,
  VisibilityOffIcon,
} from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns/RoundedIconBtn/RoundedIconBtn';
import { Input } from '../Input/Input';
import { TPasswordInputProps } from './PasswordInput.types';

export const PasswordInput: FC<TPasswordInputProps> = ({ ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleEyeBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <Input
      staticRightEl={
        <RoundedIconBtn
          Icon={isPasswordVisible ? VisibilityOffIcon : VisibilityIcon}
          variant="ghost"
          onClick={handleEyeBtnClick}
          tabIndex={-1}
        />
      }
      type={isPasswordVisible ? 'text' : 'password'}
      {...rest}
    />
  );
};
