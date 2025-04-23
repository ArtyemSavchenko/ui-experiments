type TClasses = (string | undefined | null | false)[];

export const joinClasses = (...classes: TClasses): string => {
  const result: TClasses = [];

  classes.forEach((className) => {
    if (className) {
      result.push(className);
    }
  });

  return result.join(" ");
};
