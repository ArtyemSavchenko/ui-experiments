import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';
import { optimizeSvg } from './vite-plugins/optimizeSvg';

const ICONS_PATH = './src/shared/assets/monochrome-svg-icons';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    plugins: [react(), svgr(), tsconfigPaths(), optimizeSvg(ICONS_PATH)],

    css: {
      modules: {
        generateScopedName: isProd
          ? '[hash:base64:8]'
          : '[local]_[hash:base64:8]',
      },
    },
  };
});
