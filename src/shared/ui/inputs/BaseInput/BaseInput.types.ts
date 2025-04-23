import { ComponentProps, ReactElement } from "react";

export type TBaseInputProps = ComponentProps<"input"> & {
  label?: string | null | false;
  leftEl?: ReactElement | string | false | null;
  rightEl?: ReactElement | string | false | null;
};
