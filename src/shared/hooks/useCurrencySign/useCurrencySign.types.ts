export type TCurrencyPosition = 'left' | 'right';

export type TUseCurrencySign = (
  lang: string,
  currency: string
) => {
  sign: string;
  position: TCurrencyPosition;
};
