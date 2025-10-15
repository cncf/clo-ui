const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const DIST_CJS_DIR = path.join(ROOT_DIR, 'dist/cjs');
const TARGET_DIRS = ['components', 'hooks', 'utils'];

function createProxyFiles(dir) {
  const sourceDir = path.join(DIST_CJS_DIR, dir);
  const targetDir = path.join(ROOT_DIR, dir);

  fs.rmSync(targetDir, { recursive: true, force: true });
  fs.mkdirSync(targetDir, { recursive: true });

  const entries = fs.readdirSync(sourceDir, { withFileTypes: true });
  entries.forEach((entry) => {
    if (!entry.isFile() || !entry.name.endsWith('.js')) {
      return;
    }
    const baseName = entry.name.replace(/\.js$/, '');
    const targetFile = path.join(targetDir, `${baseName}.js`);
    const relativePath = `../dist/cjs/${dir}/${entry.name}`;
    const content = `module.exports = require('${relativePath}');\n`;
    fs.writeFileSync(targetFile, content, 'utf8');
  });
}

TARGET_DIRS.forEach(createProxyFiles);
