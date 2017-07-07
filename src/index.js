import { existsSync } from 'fs';
import { relative, sep as pathSeperator } from 'path';
import rimraf from 'rimraf';

function cleanDir(destPath) {
  const firstDir = destPath.slice(0, destPath.indexOf(pathSeperator));

  if (existsSync(firstDir)) {
    console.log(`cleaning ${firstDir}`);
    rimraf.sync(firstDir);
  }
}

export default () => ({
	name: 'clean',
	options(config) {
    const { dest, targets } = config;

    if (dest) {
			// relative('./', dest) will not be equal to dest when dest is a absolute path
			cleanDir(relative('./', dest));
		} else if (targets) {
			for (let i = 0; i < targets.length; i++) {
				cleanDir(relative('./', targets[i].dest));
			}
		}
	}
})
