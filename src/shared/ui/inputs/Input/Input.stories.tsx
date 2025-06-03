import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { iconElsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { InputType } from 'storybook/internal/types';
import { Input } from './Input';
import { TInputProps } from './Input.types';

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

const codes = { 'RU code': '+7\xa0', 'BY code': '+375\xa0' };

const leftElTypes: InputType = {
  ...iconElsArgType,
  options: [...Object.keys(codes), ...iconElsArgType.options!],
  mapping: {
    ...codes,
    ...iconElsArgType.mapping,
  },
};

const meta: Meta<typeof Input> = {
  title: 'Inputs/Input',
  component: ControlledInputComponent,
  tags: ['autodocs'],
  args: { label: 'Label', placeholder: 'Placeholder' },
  argTypes: {
    dynamicLeftEl: leftElTypes,
    dynamicRightEl: iconElsArgType,
    staticLeftEl: iconElsArgType,
    staticRightEl: iconElsArgType,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledInput: Story = {};
