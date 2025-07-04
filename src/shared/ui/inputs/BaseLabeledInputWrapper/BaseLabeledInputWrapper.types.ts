import { ReactNode } from 'react';
import { TChildren, TCLassName } from 'shared/types';

export type TBaseLabeledInputWrapperProps = TCLassName &
  TChildren & {
    label: string;
    leftEl?: ReactNode;
    rightEl?: ReactNode;
  };
