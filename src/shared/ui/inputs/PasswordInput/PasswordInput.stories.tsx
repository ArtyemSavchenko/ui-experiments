import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { PasswordInput } from './PasswordInput';
import { TPasswordInputProps } from './PasswordInput.types';

const ControlledPasswordInput: FC<TPasswordInputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <PasswordInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      {...props}
    />
  );
};

const meta: Meta<typeof PasswordInput> = {
  title: 'Inputs/PasswordInput',
  component: ControlledPasswordInput,
  tags: ['autodocs'],
  args: { label: 'Пароль' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BasePasswordInput: Story = {};
