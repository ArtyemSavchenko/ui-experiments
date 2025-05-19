import fs from 'fs';

const BASE_PATH = './src/assets/svg-icons';
const COLOR_REG_EXP = /(fill|stroke)=(['"])(.*?)\2/g;
const TARGET_COLOR = 'currentColor';

const fileNames = fs.readdirSync(BASE_PATH);

fileNames.forEach((fileName) => {
  const filePath = `${BASE_PATH}/${fileName}`;

  console.log(filePath);

  const isSvg = fileName.endsWith('.svg');
  if (!isSvg) {
    console.log('Не SVG, пропущен\n');
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  let logResult = '';

  const newContent = content.replace(COLOR_REG_EXP, (match, attr, quote) => {
    const result = `${attr}=${quote}${TARGET_COLOR}${quote}`;

    logResult = `${match} -> ${result}`;
    return result;
  });

  if (newContent === content) {
    console.log('Без изменений\n');
    return;
  }

  console.log(`${logResult}\n`);

  fs.writeFileSync(filePath, newContent);
});
