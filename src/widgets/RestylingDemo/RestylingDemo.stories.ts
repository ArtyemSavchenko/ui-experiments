import { Meta, StoryObj } from '@storybook/react';
import { RestylingDemo } from './RestylingDemo';

const meta: Meta<typeof RestylingDemo> = {
  title: 'Demo/Restyling',
  component: RestylingDemo,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Demo: Story = {};
