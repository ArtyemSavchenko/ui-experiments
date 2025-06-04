import { FC, useLayoutEffect, useRef } from 'react';
import s from './BaseAffixInput.module.css';
import { TBaseAffixInputProps } from './BaseAffixInput.types';

export const BaseAffixInput: FC<TBaseAffixInputProps> = ({
  prefix,
  suffix,
  value,
  placeholder,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const invisibleValueSpanRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!inputRef?.current || !invisibleValueSpanRef?.current) {
      return;
    }

    invisibleValueSpanRef.current.innerText =
      inputRef.current.value || placeholder || '';
    inputRef.current.style.width = `${invisibleValueSpanRef.current.offsetWidth + 1}px`;

    console.log(invisibleValueSpanRef.current.innerText);
  }, [inputRef.current?.value, value]);

  return (
    <div className={s['base-affix-input']}>
      {prefix && (
        <span className="base-affix-input__affix base-affix-input__affix_prefix">
          {prefix}
        </span>
      )}

      <div className={s['base-affix-input__sized-box']}>
        <input
          className={s['base-affix-input__control']}
          value={value}
          ref={inputRef}
          placeholder={placeholder}
          {...rest}
        />

        <span
          className={s['base-affix-input__invisible-value']}
          ref={invisibleValueSpanRef}
        />
      </div>

      {suffix && (
        <span className="base-affix-input__affix base-affix-input__affix_suffix">
          {suffix}
        </span>
      )}
    </div>
  );
};
