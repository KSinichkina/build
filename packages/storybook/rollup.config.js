import babel from 'rollup-plugin-babel';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import assets from 'postcss-assets';
import autoprefixer from 'autoprefixer';
import localResolve from 'rollup-plugin-local-resolve';
import sass from 'rollup-plugin-sass';
import autoExternal from 'rollup-plugin-auto-external';
import svg from 'rollup-plugin-svg';
import pkg from './package.json';

sass({
  processor: css =>
    postcss([autoprefixer])
      .process(css)
      .then(result => result.css),
});

const config = {
  input: 'src/index.js',
  // sourceMap: true,
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
      name: 'widgets',
    },
  ],
  external: [
    // 'react',
    // 'react-dom',
    // 'core',
  ],
  plugins: [
    autoExternal(),
    peerDepsExternal(),
    postcss({
      autoModules: true,
      // eslint-disable-next-line no-undef
      extract: !!process.env.FOR_CUSTOMER,
      plugins: [autoprefixer, assets()],
      extensions: ['.css', '.scss'],
    }),
    babel({ exclude: 'node_modules/**', plugins: [] }),
    svg({ base64: true }),
    localResolve(),
    resolve({
      extensions: ['.js', '.jsx', '.json'],
    }),
    commonjs(),
  ],
};

export default config;
