type TClasses = (string | undefined | null | false)[];

export const joinClasses = (...classes: TClasses): string => {
  const filtered = classes.filter((item): item is string => Boolean(item));

  return filtered.join(' ');
};
