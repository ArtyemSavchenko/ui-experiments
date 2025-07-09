import { FC, useState } from 'react';
import { Btn } from 'shared/ui/btns';
import { Input } from 'shared/ui/inputs';
import { joinClasses } from 'shared/utils';
import s from './ControlsDemo.module.css';
import { TControlsDemoProps } from './ControlsDemo.types';
import { getCssStringFromCssProperties } from './utils';

export const ControlsDemo: FC<TControlsDemoProps> = ({
  className,
  paletteCssProperties,
  groupedControlsCssProperties,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');

  const paletteStyles = paletteCssProperties
    ? getCssStringFromCssProperties(paletteCssProperties)
    : '';

  const controlsStyles = groupedControlsCssProperties
    ? Object.entries(groupedControlsCssProperties).reduce(
        (acc, [, cssProperties]) =>
          `${acc}${getCssStringFromCssProperties(cssProperties)};`,
        ''
      )
    : '';

  const styles = `.${s['controls-demo']}{${paletteStyles}${controlsStyles}}`;

  return (
    <div className={joinClasses(className, s['controls-demo'])} {...rest}>
      <style>{styles}</style>

      <Btn>Do nothing</Btn>

      <Btn variant="ghost">Do nothing</Btn>

      <Input
        label="Simple input"
        placeholder="Enter something"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onClear={() => setInputValue('')}
      />
    </div>
  );
};
