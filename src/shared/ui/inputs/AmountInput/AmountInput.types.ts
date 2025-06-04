import { TAffixInputProps } from '../AffixInput';

export type TAmountInputProps = Omit<TAffixInputProps, 'prefix' | 'suffix'> & {
  lang: string;
  currency: string;
};
