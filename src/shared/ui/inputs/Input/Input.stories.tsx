import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { iconElsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { InputType } from 'storybook/internal/types';
import { Input } from './Input';
import { TInputProps } from './Input.types';

const codes = { 'RU code': '+7\xa0', 'BY code': '+375\xa0' };

const leftElTypes: InputType = {
  options: [...Object.keys(codes), ...iconElsArgType.options!],
  mapping: {
    ...codes,
    ...iconElsArgType.mapping,
  },
};

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: Input,
  tags: ['autodocs'],
  args: { label: 'Label', placeholder: 'Placeholder' },
  argTypes: {
    leftEl: leftElTypes,
    rightEl: iconElsArgType,
    leftStaticEl: iconElsArgType,
    rightStaticEl: iconElsArgType,
    label: { control: 'text' },
  },
};

type Story = StoryObj<typeof meta>;

const ControlledInputComponent: FC<TInputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      {...props}
    />
  );
};

export const ControlledInput: Story = {
  render: (args) => <ControlledInputComponent {...args} />,
};

export default meta;
