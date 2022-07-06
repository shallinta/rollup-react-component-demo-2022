import babel from '@rollup/plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import eslint from '@rollup/plugin-eslint';
import { terser } from 'rollup-plugin-terser';
import copy from 'rollup-plugin-copy';
import postcss from 'rollup-plugin-postcss';
import pkg from './package.json';

export default [{
  input: 'src/index.js',
  output: [{
    // file: 'dist/index.js',
    dir: 'dist',
    format: 'es',
    preserveModules: true,
    preserveModulesRoot: 'src',
  }],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**', '**/*.css'],
    }),
    postcss({
      extensions: ['.css'],
      plugins: [],
      modules: true,
      // sourceMap: true,
      extract: false,
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    nodeResolve({
      browser: true,
      extensions: ['.js', '.jsx'],
    }),
    terser({
      keep_fnames: true,
    }),
    copy({
      targets: [
        { src: 'types/index.d.ts', dest: 'dist' },
      ],
    }),
  ],
}];
