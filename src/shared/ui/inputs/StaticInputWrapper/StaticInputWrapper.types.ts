import { ReactNode } from 'react';
import { TChildren, TCLassName } from 'shared/types';

export type TStaticInputWrapperProps = TChildren &
  TCLassName & {
    leftEl?: ReactNode;
    rightEl?: ReactNode;
  };
