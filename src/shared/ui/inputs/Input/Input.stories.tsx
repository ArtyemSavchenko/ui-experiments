import { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";
import { Input } from "./Input";
import { TInputProps } from "./Input.types";

const ControlledInputComponent: FC<TInputProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <Input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
      {...props}
    />
  );
};

const meta: Meta<typeof Input> = {
  title: "UI-kit/inputs/Input",
  component: ControlledInputComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledInput: Story = {
  args: {
    label: "Label",
  },
};
