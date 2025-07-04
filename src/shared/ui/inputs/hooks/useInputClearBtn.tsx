import { ComponentProps, MouseEventHandler, RefObject } from 'react';
import { ClearIcon } from 'shared/assets/monochrome-svg-icons';
import { RoundedIconBtn } from 'shared/ui/btns';
import { TInputExtraProps } from '../types';

type TUseInputClearBtnProps = {
  ref: RefObject<HTMLInputElement | null>;
  value?: ComponentProps<'input'>['value'];
} & Pick<TInputExtraProps, 'dynamicRightEl' | 'onClear'>;

export const useInputClearBtn = ({
  ref,
  onClear,
  value,
  dynamicRightEl,
}: TUseInputClearBtnProps) => {
  const handleClearBtnClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    ref.current?.focus();
    onClear?.();
  };

  const isClearBtnVisible = value && onClear;

  const resolvedDynamicRightEl = (
    <>
      {isClearBtnVisible && (
        <RoundedIconBtn
          className="input__clear-btn"
          Icon={ClearIcon}
          variant="ghost"
          onClick={handleClearBtnClick}
          tabIndex={-1}
        />
      )}

      {dynamicRightEl}
    </>
  );

  return { resolvedDynamicRightEl };
};
