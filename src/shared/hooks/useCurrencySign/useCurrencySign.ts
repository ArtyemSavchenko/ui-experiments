import { useEffect, useState } from 'react';
import { LITERALS } from 'shared/constants';
import { TCurrencyPosition, TUseCurrencySign } from './useCurrencySign.types';

const NUMBER_FOR_FORMAT = 33.45;

export const useCurrencySign: TUseCurrencySign = (lang, currency) => {
  const [position, setPosition] = useState<TCurrencyPosition>('right');
  const [sign, setSign] = useState('');

  useEffect(() => {
    const formatter = new Intl.NumberFormat(lang, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    });

    const parts = formatter.formatToParts(NUMBER_FOR_FORMAT);

    const position = parts[0].type === 'currency' ? 'left' : 'right';
    const sign = parts
      .filter(
        (part) =>
          part.type !== 'integer' && part.value !== String(NUMBER_FOR_FORMAT)
      )
      .map((part) => part.value)
      .join('')
      .replace(/\s/g, LITERALS.js.nnbsp);

    setPosition(position);
    setSign(sign);
  }, [lang, currency]);

  return { position, sign };
};
