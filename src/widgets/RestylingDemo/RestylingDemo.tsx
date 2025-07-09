import { FC, Fragment, useEffect, useState } from 'react';
import { Input } from 'shared/ui/inputs';
import { getControls, getPalette } from './api';
import { ControlsDemo } from './ControlsDemo';
import s from './RestylingDemo.module.css';

import { CSS_GROUPS, GROUP_NAMES } from './constants';
import { TControlsGroupedCssProperties, TCssProperties } from './types';
import {
  getCssProperties,
  getGroupedCssProperties,
  setObjProperty,
} from './utils';

export const RestylingDemo: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errText, setErrText] = useState('');

  const [paletteProperties, setPaletteProperties] = useState<TCssProperties>(
    {}
  );
  const [groupedControlsProperties, setGroupedControlsProperties] =
    useState<TControlsGroupedCssProperties>({});

  useEffect(() => {
    const getCss = async () => {
      setIsLoading(true);

      try {
        const res = await Promise.all([getPalette(), getControls()]);

        const controlsCssProperties = getCssProperties(res[1]);

        setPaletteProperties(getCssProperties(res[0]));
        setGroupedControlsProperties(
          getGroupedCssProperties(controlsCssProperties, CSS_GROUPS)
        );
      } catch (err) {
        setErrText(`CSS loading error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    getCss();
  }, []);

  const handleControlsPropertyChange = (
    value: string,
    group: string,
    properties: TCssProperties,
    propertyKey: string
  ) => {
    setGroupedControlsProperties((prev) => ({
      ...prev,
      [group]: setObjProperty(properties, propertyKey, value),
    }));
  };

  if (isLoading) {
    return 'CSS loading...';
  }

  if (errText) {
    return errText;
  }

  return (
    <section className={s['restyling-demo']}>
      <div className={s['restyling-demo__vars']}>
        <div className={s['restyling-demo__section']}>
          <h2>Palette properties</h2>

          {Object.entries(paletteProperties).map(([key, value]) => (
            <Input
              key={key}
              label={key}
              value={value}
              onChange={(e) => {
                setPaletteProperties((prev) =>
                  setObjProperty(prev, key, e.target.value)
                );
              }}
              onClear={() => {
                setPaletteProperties((prev) => setObjProperty(prev, key, ''));
              }}
            />
          ))}
        </div>

        <div className={s['restyling-demo__section']}>
          <h2>Controls properties</h2>

          {Object.entries(groupedControlsProperties).map(
            ([group, properties]) => {
              const typedGroup =
                group as keyof typeof groupedControlsProperties;

              return (
                <Fragment key={typedGroup}>
                  <h3>{GROUP_NAMES[typedGroup]}</h3>

                  {Object.entries(properties).map(([key, value]) => (
                    <Input
                      key={key}
                      label={key}
                      value={value}
                      onChange={(e) => {
                        handleControlsPropertyChange(
                          e.target.value,
                          typedGroup,
                          properties,
                          key
                        );
                      }}
                      onClear={() => {
                        handleControlsPropertyChange(
                          '',
                          typedGroup,
                          properties,
                          key
                        );
                      }}
                    />
                  ))}
                </Fragment>
              );
            }
          )}
        </div>
      </div>

      <ControlsDemo
        className={s['restyling-demo__controls-demo']}
        paletteCssProperties={paletteProperties}
        groupedControlsCssProperties={groupedControlsProperties}
      />
    </section>
  );
};
