import { ReactNode } from 'react';

export type TLabeledInputWrapperProps = {
  children: ReactNode;
  className?: string;
  label: string;
  leftEl?: ReactNode;
  rightEl?: ReactNode;
};
