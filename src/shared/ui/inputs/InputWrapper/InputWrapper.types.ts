import { ComponentProps, ReactElement } from 'react';

export type TInputWrapperProps = ComponentProps<'label'> & {
  leftEl?: ReactElement | string | false | null;
  rightEl?: ReactElement | string | false | null;
};
