import { Meta, StoryObj } from '@storybook/react';
import { iconComponentsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { Btn } from './Btn';

const meta: Meta<typeof Btn> = {
  title: 'Btns/Btn',
  component: Btn,
  tags: ['autodocs'],
  argTypes: {
    LeftIcon: iconComponentsArgType,
    RightIcon: iconComponentsArgType,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonBtn: Story = {
  args: {
    children: 'Button',
  },
};
