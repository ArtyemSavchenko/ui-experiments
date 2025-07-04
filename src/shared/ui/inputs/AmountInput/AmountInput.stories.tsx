import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { iconElsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { AmountInput } from './AmountInput';
import { TAmountInputProps } from './AmountInput.types';

const ControlledAmountInputComponent: FC<TAmountInputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <AmountInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue('')}
      {...props}
    />
  );
};

const meta: Meta<typeof AmountInput> = {
  title: 'Inputs/AmountInput',
  component: ControlledAmountInputComponent,
  tags: ['autodocs'],
  argTypes: {
    dynamicLeftEl: iconElsArgType,
    dynamicRightEl: iconElsArgType,
    staticLeftEl: iconElsArgType,
    staticRightEl: iconElsArgType,
    currency: { control: 'select', options: ['USD', 'EUR', 'RUB'] },
    lang: { control: 'select', options: ['en', 'ru'] },
  },
  args: {
    label: 'Label',
    placeholder: '0',
    lang: 'ru',
    currency: 'RUB',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledAmountInput: Story = {};
