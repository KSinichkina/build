const path = require('path');
const SRC_PATH = path.join(__dirname, '../src');
const STORIES_PATH = path.join(__dirname, '../stories');

module.exports = ({ config }) => {
  config.module.rules = [
    {
      test: /\.(ts|tsx)$/,
      include: [SRC_PATH, STORIES_PATH],
      use: [
        {
          loader: require.resolve('awesome-typescript-loader'),
          options: {
            configFileName: './.storybook/tsconfig.json',
          },
        },
        { loader: require.resolve('react-docgen-typescript-loader') },
      ],
    },
    {
      test: /\.scss$/,
      use: [
        { loader: 'style-loader' }, // to inject the result into the DOM as a style block
        { loader: 'css-modules-typescript-loader' }, // to generate a .d.ts module next to the .scss file (also requires a declaration.d.ts with "declare modules '*.scss';" in it to tell TypeScript that "import styles from './styles.scss';" means to load the module "./styles.scss.d.td")
        { loader: 'css-loader', options: { modules: true } }, // to convert the resulting CSS to Javascript to be bundled (modules:true to rename CSS classes in output to cryptic identifiers, except if wrapped in a :global(...) pseudo class)
        { loader: 'sass-loader' }, // to convert SASS to CSS
        // NOTE: The first build after adding/removing/renaming CSS classes fails, since the newly generated .d.ts typescript module is picked up only later
      ],
    },
    {
      test: /\.svg$/,
      use: 'file-loader',
    },
    {
      test: /\.png$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            mimetype: 'image/png',
          },
        },
      ],
    },
  ];

  config.resolve.extensions.push('.js', '.jsx', '.tsx', '.ts', '.css', '.scss');
  return config;
};
