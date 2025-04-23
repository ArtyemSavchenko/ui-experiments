import { Meta, StoryObj } from "@storybook/react";
import { FC, useState } from "react";
import { PasswordInput } from "./PasswordInput";
import { TPasswordInputProps } from "./PasswordInput.types";

const ControlledPasswordInputComponent: FC<TPasswordInputProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <PasswordInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      onClear={() => setValue("")}
      {...props}
    />
  );
};

const meta: Meta<typeof PasswordInput> = {
  title: "UI-kit/inputs/PasswordInput",
  component: ControlledPasswordInputComponent,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const ControlledPasswordInput: Story = {
  args: {
    label: "Password",
  },
};

export const QControlledPasswordInput: Story = {
  args: {
    label: "QPassword",
  },
};
