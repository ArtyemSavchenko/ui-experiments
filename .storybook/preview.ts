import type { Preview } from '@storybook/react';

import '../src/shared/styles/default-controls.css';
import '../src/shared/styles/default-palette.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
