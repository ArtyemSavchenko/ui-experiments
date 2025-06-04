import { ReactNode } from 'react';

export type TBaseLabeledInputWrapperProps = {
  children: ReactNode;
  className?: string;
  label: string;
  leftEl?: ReactNode;
  rightEl?: ReactNode;
};
