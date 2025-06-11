import chokidar from 'chokidar';
import fs from 'fs';
import path from 'path';

type TLogs = [match: string, result: string][];

const COLOR_REG_EXP = /(fill|stroke)=(['"])(.*?)\2/g;
const TARGET_COLOR = 'currentColor';
const FILE_NAME_REG_EXP = /([^\//\\]+?\.\w+)(?=["'?]?\s*$)/;

const replaceSvgColors = (fileContent: string) => {
  const log: TLogs = [];

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

const writeLogs = (filePath: string, log: TLogs) => {
  const fileName = FILE_NAME_REG_EXP.exec(filePath)?.[1];

  console.log(`\nReplace in ${fileName}:`);
  console.log(log.map(([match, result]) => `${match} -> ${result}`).join('\n'));
};

export const svgColorReplacePlugin = (iconsPath: string) => {
  if (!fs.existsSync(iconsPath)) {
    throw new Error(`Icons path ${iconsPath} not found`);
  }

  return {
    name: 'svg-color-replacer',
    configureServer() {
      const watchPath = path.resolve(iconsPath);

      const watcher = chokidar.watch(watchPath, {
        ignored: (path, stats) =>
          Boolean(stats?.isFile() && !path.endsWith('.svg')),
      });

      const cb = (filePath: string) => {
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
