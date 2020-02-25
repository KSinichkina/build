// eslint-disable-next-line no-undef
module.exports = {
  modules: ['./src'],
  stylesRoots: ['./styles', './src'],
  copy: [
    {
      src: ['src/**/*.{png,svg,jpg,jpeg,gif,ico}', '!src/__visual-tests__/**'],
      dest: 'dist',
    },
  ],
  alias: {
    'svg-icons': './svg-icons',
  },
};
