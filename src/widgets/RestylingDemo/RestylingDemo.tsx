import { FC, Fragment, useEffect, useState } from 'react';
import { Input } from 'shared/ui/inputs';
import { getControls, getPalette } from './api';
import { ControlsDemo } from './ControlsDemo';
import s from './RestylingDemo.module.css';

import { CSS_GROUPS, GROUP_NAMES } from './constants';
import { TControlsGroupedProperties, TCssProperties } from './types';
import {
  getCssVariables,
  getGroupedCssVariables,
  setObjProperty,
} from './utils';

export const RestylingDemo: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errText, setErrText] = useState('');

  const [palette, setPalette] = useState<TCssProperties>({});
  const [controls, setControls] = useState<TControlsGroupedProperties>({});

  useEffect(() => {
    const getCss = async () => {
      setIsLoading(true);

      try {
        const res = await Promise.all([getPalette(), getControls()]);

        const controlsCssVariables = getCssVariables(res[1]);

        setPalette(getCssVariables(res[0]));
        setControls(getGroupedCssVariables(controlsCssVariables, CSS_GROUPS));
      } catch (err) {
        setErrText(`CSS loading error: ${err}`);
      } finally {
        setIsLoading(false);
      }
    };

    getCss();
  }, []);

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

          {Object.entries(palette).map(([key, value]) => (
            <Input
              key={key}
              label={key}
              value={value}
              onChange={(e) => {
                setPalette((prev) => setObjProperty(prev, key, e.target.value));
              }}
              onClear={() => {
                setPalette((prev) => setObjProperty(prev, key, ''));
              }}
            />
          ))}
        </div>

        <div className={s['restyling-demo__section']}>
          <h2>Controls properties</h2>

          {Object.entries(controls).map(([group, properties]) => {
            const typedGroup = group as keyof typeof controls;

            return (
              <Fragment key={typedGroup}>
                <h3>{GROUP_NAMES[typedGroup]}</h3>

                {Object.entries(properties).map(([key, value]) => (
                  <Input
                    key={key}
                    label={key}
                    value={value}
                    onChange={(e) => {
                      setControls((prev) => ({
                        ...prev,
                        [typedGroup]: setObjProperty(
                          properties,
                          key,
                          e.target.value
                        ),
                      }));
                    }}
                    onClear={() => {
                      setControls((prev) => ({
                        ...prev,
                        [typedGroup]: setObjProperty(properties, key, ''),
                      }));
                    }}
                  />
                ))}
              </Fragment>
            );
          })}
        </div>
      </div>

      <ControlsDemo
        className={s['restyling-demo__controls-demo']}
        paletteCssProperties={palette}
        groupedControlsCssProperties={controls}
      />
    </section>
  );
};
