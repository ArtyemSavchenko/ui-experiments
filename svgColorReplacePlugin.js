import chokidar from 'chokidar';
import path from 'path';

import fs from 'fs';

const COLOR_REG_EXP = /(fill|stroke)=(['"])(.*?)\2/g;
const TARGET_COLOR = 'currentColor';
const FILE_NAME_REG_EXP = /([^\//\\]+?\.\w+)(?=["'?]?\s*$)/;

const replaceSvgColors = (fileContent) => {
  const log = [];

  const newContent = fileContent.replace(
    COLOR_REG_EXP,
    (match, attr, quote) => {
      const result = `${attr}=${quote}${TARGET_COLOR}${quote}`;

      log.push([match, result]);
      return result;
    }
  );

  return {
    newContent,
    log: log.filter(([match, result]) => match !== result),
    isEdited: newContent !== fileContent,
  };
};

const writeLogs = (filePath, log) => {
  const fileName = FILE_NAME_REG_EXP.exec(filePath)[1];

  console.log(`\nReplace in ${fileName}:`);
  console.log(log.map(([match, result]) => `${match} -> ${result}`).join('\n'));
};

export const svgColorReplacePlugin = (iconsPath) => {
  return {
    name: 'svg-color-replacer',
    configureServer() {
      const watchPath = path.resolve(iconsPath);

      const watcher = chokidar.watch(watchPath, {
        ignored: (path, stats) => stats?.isFile() && !path.endsWith('.svg'),
      });

      const cb = (filePath) => {
        const content = fs.readFileSync(filePath, 'utf8');

        const { log, newContent, isEdited } = replaceSvgColors(content);

        if (!isEdited) {
          return;
        }

        fs.writeFileSync(filePath, newContent);
        writeLogs(filePath, log);
      };

      watcher.on('add', cb);
      watcher.on('change', cb);
    },
  };
};
