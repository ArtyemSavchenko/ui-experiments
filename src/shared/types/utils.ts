import { FC, ReactNode, SVGProps } from 'react';

export type TSvgIcon = FC<
  SVGProps<SVGSVGElement> & {
    title?: string;
    titleId?: string;
    desc?: string;
    descId?: string;
  }
>;

export type TChildren = { children: ReactNode };

export type TCLassName = { className?: string };
