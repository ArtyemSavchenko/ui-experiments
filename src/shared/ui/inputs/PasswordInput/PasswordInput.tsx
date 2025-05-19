import { FC, useState } from 'react';
import {
  VisibilityIcon,
  VisibilityOffIcon,
} from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns/RoundedIconBtn/RoundedIconBtn';
import { Input } from '../Input/Input';
import { TPasswordInputProps } from './PasswordInput.types';

export const PasswordInput: FC<TPasswordInputProps> = ({ ...rest }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Input
      rightStaticEl={
        <RoundedIconBtn
          Icon={isPasswordVisible ? VisibilityOffIcon : VisibilityIcon}
          variant="ghost"
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          tabIndex={-1}
        />
      }
      type={isPasswordVisible ? 'text' : 'password'}
      {...rest}
    />
  );
};
