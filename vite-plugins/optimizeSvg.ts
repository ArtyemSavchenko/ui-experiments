import chokidar from 'chokidar';
import { existsSync } from 'node:fs';
import { readFile, writeFile } from 'node:fs/promises';
import path from 'path';
import { optimize } from 'svgo';

const FILE_NAME_REG_EXP = /([^\//\\]+?\.\w+)(?=["'?]?\s*$)/;

const CONSOLE_RESET = '\x1b[0m';
const CONSOLE_ERR_COLOR = '\x1b[31m';
const CONSOLE_SUCCESS_COLOR = '\x1b[32m';

const writeLogs = (filePath: string) => {
  const fileName = FILE_NAME_REG_EXP.exec(filePath)?.[1];

  console.log(CONSOLE_SUCCESS_COLOR, `> ${fileName} optimized`, CONSOLE_RESET);
};

const handleSvg = async (filePath: string) => {
  try {
    const content = await readFile(filePath, { encoding: 'utf8' });

    const result = optimize(content, {
      plugins: [
        'preset-default',
        { name: 'convertColors', params: { currentColor: true } },
        'removeDimensions',
      ],
    });

    if (result.data === content) {
      return;
    }

    await writeFile(filePath, result.data);
    writeLogs(filePath);
  } catch (err) {
    console.log(CONSOLE_ERR_COLOR, 'Handle SVG error', err, CONSOLE_RESET);
  }
};

export const optimizeSvg = (iconsPath: string) => {
  if (!existsSync(iconsPath)) {
    throw new Error(`Icons path ${iconsPath} not found`);
  }

  return {
    name: 'svg-optimizer',
    configureServer() {
      const watchPath = path.resolve(iconsPath);

      const watcher = chokidar.watch(watchPath, {
        ignored: (path, stats) =>
          Boolean(stats?.isFile() && !path.endsWith('.svg')),
      });

      watcher.on('add', handleSvg);
      watcher.on('change', handleSvg);
    },
  };
};
