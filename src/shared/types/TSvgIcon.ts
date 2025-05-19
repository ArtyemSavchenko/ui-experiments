import { FC, SVGProps } from 'react';

export type TSvgIcon = FC<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;
