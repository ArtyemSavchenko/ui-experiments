import { Meta, StoryObj } from '@storybook/react';
import { iconComponentsArgType } from 'shared/stories/argTypes/iconArgTypes';
import { RoundedIconBtn } from './RoundedIconBtn';

const meta: Meta<typeof RoundedIconBtn> = {
  title: 'Btns/RoundedIconBtn',
  component: RoundedIconBtn,
  tags: ['autodocs'],
  argTypes: {
    Icon: iconComponentsArgType,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const CommonRoundedIconBtn: Story = {
  args: {
    Icon: iconComponentsArgType.options?.[1],
  },
};
