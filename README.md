# rollup-plugin-clean
Clean the build directory before rebuilding.

## Installation

    yarn add -D rollup-plugin-clean
    
or 

    npm install -D rollup-plugin-clean
    
## Usage

In the rollup.config.js:

```JavaScript
import clean from 'rollup-plugin-clean';

export default {
  entry: 'src/index.js',
  dest: 'dist/bundle.js',
  plugins: [
    clean()
  ]
};
```
and the `dist` directory will be removed everytime rebuilding.

## License

MIT
