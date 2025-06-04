import { FC } from 'react';
import { useCurrencySign } from 'shared/hooks/useCurrencySign';
import { AffixInput } from '../AffixInput';
import { TAmountInputProps } from './AmountInput.types';

export const AmountInput: FC<TAmountInputProps> = ({
  lang,
  currency,
  ...props
}) => {
  const { position, sign } = useCurrencySign(lang, currency);

  const prefix = position === 'left' ? sign : undefined;
  const suffix = position === 'right' ? sign : undefined;

  return <AffixInput prefix={prefix} suffix={suffix} {...props} />;
};
