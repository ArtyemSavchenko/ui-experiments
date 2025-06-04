import { Meta, StoryObj } from '@storybook/react';
import { FC, useState } from 'react';
import { iconElsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { InputType } from 'storybook/internal/types';
import { AffixInput } from './AffixInput';
import { TAffixInputProps } from './AffixInput.types';

const ControlledAffixInputComponent: FC<TAffixInputProps> = (props) => {
  const [value, setValue] = useState('');

  return (
    <AffixInput
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

const meta: Meta<typeof AffixInput> = {
  title: 'Inputs/AffixInput',
  component: ControlledAffixInputComponent,
  tags: ['autodocs'],
  argTypes: {
    dynamicLeftEl: leftElTypes,
    dynamicRightEl: iconElsArgType,
    staticLeftEl: iconElsArgType,
    staticRightEl: iconElsArgType,
    suffix: { control: 'text' },
    prefix: { control: 'text' },
  },
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledAffixInput: Story = {};
